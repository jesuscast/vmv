const {CORSURL, creds, countriesRaw, $scope, sampleTransaction}  = require('./constants');
const {
    Country,
    Address
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

// function getPrices(template_id, country_code, shipping_country_code) {
//     const body = {
//         "basket":[
//            {
//               "country_code":"USA",
//               "job_id":-1,
//               "quantity":1,
//               "template_id":"i6splus_case"
//            }
//         ],
//         "pay_in_store":0,
//         "payment_gateway":"PAYPAL",
//         "promo_code":"",
//         "ship_to_store":0,
//         "shipping_country_code":"US"
//      };
//     fetch('https://api.kite.ly/v3.0/price/')
// }

function getAddress() {
    return new Promise((resolve, reject) => {
        const fields = {
            city: $("#city").val(),
            country: $("#country").val(),
            region:$("#region").val(),
            addressLine1: $("#address-line-1").val(),
            addressLine2:$("#address-line-2").val(),
            zip: $("#zip").val(),
        };
        Address.build(fields).then((address) => {
            resolve(address);
        }).catch(reject);;
    });
}

function getPrices(address) {
    return new Promise((resolve, reject) => {
        const body = {
            "basket":[
                {
                    "country_code": address.country.iso3,
                    "job_id":-1,
                    "quantity":1,
                    "template_id": $scope.templateId
                }
            ],
            "pay_in_store":0,
            "payment_gateway":"PAYPAL",
            "promo_code":"",
            "ship_to_store":0,
            "shipping_country_code": address.country.iso2
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
                console.log(json);
                resolve(json);
            });
        }).catch(reject);
    });
}

function placeOrder(address, price, paypalId) {
    return new Promise((resolve, reject) => {
        const body = {
            "proof_of_payment": paypalId,
            "shipping_address": {
                "recipient_name": "Deon Botha",
                "address_line_1": address.addressLine1,
                "address_line_2": address.addressLine2,
                "city": address.city,
                "county_state": address.region,
                "postcode": address.zip,
                "country_code": address.country.iso3
            },
            "customer_email": "andres@iisac.mx",
            "customer_phone": "+44 (0)784297 1234",
            "customer_payment": {
                "amount": price.total,
                "currency": price.currency
            },
            "jobs": [{
                "assets": ["http://psps.s3.amazonaws.com/sdk_static/1.jpg"],
                "template_id": "i6_case",
                "options": {
                    "garment_color": "red"
                }
            }]
        };
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

        if (!pricesRaw || !addressRaw) {
            reject('no data');
            return;
        }
        const pricesJSON = JSON.parse(pricesRaw);
        const addressJSON = JSON.parse(addressRaw);

        Address.build(addressJSON).then((address) => {
            resolve({
                prices: pricesJSON,
                address: addressJSON
            })
        }).catch((err) => {
            reject(err);
        });
    });
}
function processPaypalPayment(callback) {
    setTimeout(() => {
        paypal.Buttons({
            createOrder: function(data, actions) {
                // Set up the transaction
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: currency,
                            value: '1', // prices.total_product_cost[currency]
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

function create_script(url) {
    /* create the link element */
    var linkElement = document.createElement('script');

    /* add attributes */
    linkElement.setAttribute('src', url);

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