const {CORSURL, creds, countriesRaw, $scope, sampleTransaction}  = require('./constants');
const {
    Country,
    Address,
    Job,
    Product
} = require('./models');


const countries = [];

const countriesKeys = Object.keys(countriesRaw);
for(let i = 0; i < countriesKeys.length; i++) {
    const country = countriesRaw[countriesKeys[i]];
    countries.push(new Country(country))
}

function findCountryByName(countryName) {
    const countriesKeys = Object.keys(countries);
    for(let i = 0; i < countriesKeys.length; i++) {
        const country = countries[countriesKeys[i]];
        if (country.name === countryName) {
            return country;
        }
    }
    return null;
}

function getAddress() {
    return new Promise((resolve, reject) => {
        const fields = {
            city: $("#city").val(),
            country: $("#country").val(),
            region:$("#region").val(),
            addressLine1: $("#address-line-1").val(),
            addressLine2:$("#address-line-2").val(),
            zip: $("#zip").val(),
            recipient_name: $("#recipient_name").val(),
            recipient_email: $("#recipient_email").val(),
            recipient_phone_number: $("#recipient_phone_number").val()
        };
        Address.build(fields).then((address) => {
            resolve(address);
        }).catch(reject);;
    });
}

function getPrices(address) {
    return new Promise((resolve, reject) => {
        const templateId = localStorage.getItem('template');
        if (!templateId) {
            console.log(`[utilities] Template id is empty`);
            return reject();
        }
        const body = {
            "basket":[
                {
                    "country_code": address.country.iso3,
                    "job_id":-1,
                    "quantity":1,
                    "template_id": templateId
                }
            ],
            "pay_in_store":0,
            "payment_gateway":"PAYPAL",
            "promo_code":"",
            "ship_to_store":0,
            "shipping_country_code": address.country.iso3
        };

        fetch(`${CORSURL}https://api.kite.ly/v3.0/price/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Authorization': `ApiKey ${creds.pubKey}`,
                'Content-Type': 'application/json',
                "User-Agent": "Kite SDK Android v5.8.9"
            },
            referrer: 'no-referrer',
            redirect: 'follow', 
            cache: 'no-cache', 
        }).then((response) => {
            response.json().then(json => {
                console.log(`[utilities] ${JSON.stringify(json)}`);
                resolve(json);
            });
        }).catch(reject);
    });
}

function placeOrder(address, job, price, paypalId) {
    return new Promise((resolve, reject) => {
        const body = {
            "proof_of_payment": paypalId,
            "shipping_address": {
                "recipient_name": address.recipient_name, // TODO: Use real costumer data
                "address_line_1": address.addressLine1,
                "address_line_2": address.addressLine2,
                "city": address.city,
                "county_state": address.region,
                "postcode": address.zip,
                "country_code": address.country.iso3
            },
            "customer_email": address.recipient_email,
            "customer_phone": address.recipient_phone_number,
            "customer_payment": {
                "amount": price.total,
                "currency": price.currency
            },
            "jobs": [job.toDict()]
        };
        console.log(body);
        fetch(`${CORSURL}https://api.kite.ly/v4.0/print/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Authorization': `ApiKey ${creds.pubKey}`,
                'Content-Type': 'application/json',
                "User-Agent": "Kite SDK Android v5.8.9"
            },
            referrer: 'no-referrer',
            redirect: 'follow', 
            cache: 'no-cache', 
        }).then((response) => {
            response.json().then(json => {
                resolve(json);
            });
        }).catch(reject);
    });
}

function loadData() {
    return new Promise((resolve, reject) => {
        const pricesRaw = localStorage.getItem('prices');
        const addressRaw = localStorage.getItem('address');
        const category = localStorage.getItem('category');
        const scopeRaw = localStorage.getItem('scope');

        if (!pricesRaw || !addressRaw || !scopeRaw || !category) {
            reject('no data');
            return;
        }
        const pricesJSON = JSON.parse(pricesRaw);
        const addressJSON = JSON.parse(addressRaw);
        const scopeJSON = JSON.parse(scopeRaw);

        console.log(scopeJSON);

        const product = new Product(
            scopeJSON.userImageUrl,
            scopeJSON.templateId,
            scopeJSON.selectedColor.name,
            scopeJSON.scale, {
                x: scopeJSON.translateX, y: scopeJSON.translateY
            },
            category);
        
        const job = new Job(product);
        Address.build(addressJSON).then((address) => {
            resolve({
                prices: pricesJSON,
                address,
                product,
                job
            })
        }).catch((err) => {
            reject(err);
        });
    });
}
function processPaypalPayment(prices, currency, callback) {
    setTimeout(() => {
        paypal.Buttons({
            createOrder: function(data, actions) {
                // Set up the transaction
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: currency,
                            value: prices.total[currency]
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // alert('Transaction completed by ' + details.payer.name.given_name);
                    // window.deets = details;
                    callback(details);
                    // Call your server to save the transaction
                    // return fetch('/paypal-transaction-complete', {
                    //     method: 'post',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify({
                    //         orderID: data.orderID
                    //     })
                    // });
                });
            }
        }).render('#paypal-button-container');
        // if (env === 'test') {
        //     return callback(sampleTransaction);
        // }
    }, 500);
}

function create_script(url, id) {
    if (document.getElementById(id)) {
        console.log(`[create_script] ${id} already exists`);
        return;
    }
    /* create the link element */
    var linkElement = document.createElement('script');

    /* add attributes */
    linkElement.setAttribute('src', url);
    linkElement.setAttribute('id', id);

    /* attach to the document body */
    document.getElementsByTagName('body')[0].appendChild(linkElement);
}

module.exports = {
    Country,
    Address,
    findCountryByName,
    placeOrder,
    getPrices,
    getAddress,
    loadData,
    processPaypalPayment,
    create_script
}