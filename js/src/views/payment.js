const {loadData} = require('../utilities');


function create_script(url) {
    /* create the link element */
    var linkElement = document.createElement('script');

    /* add attributes */
    linkElement.setAttribute('src', url);

    /* attach to the document body */
    document.getElementsByTagName('body')[0].appendChild(linkElement);
}

class Payment {
    static run() {
        const currency = 'USD' // 'GBP';
        const currencySymbol = '$'; // '&pound;';
        const modifiedImageUrl = localStorage.getItem('modifiedImageUrl');
        if (modifiedImageUrl) {
            $("#tiny-image").attr('src', modifiedImageUrl);
            $("#tiny-image").css('width', '150%');
            $("#tiny-image").css('margin-top', '20px');
        }

        loadData().then(({
            prices, address
        }) => {
            console.log(prices);
            console.log(address);
            $("#product-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);
            $("#shipping-cost").html(`${currencySymbol} ${prices.total_shipping_cost[currency]}`);
            $("#total-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);

            create_script("https://www.paypal.com/sdk/js?client-id="+creds.paypalClientId)

            processPaypalPayment((transaction) => {
                placeOrder(address, {
                    total: 1,
                    currency
                }, transaction.id).then((json) => {
                    console.log(json);
                    document.location.href = document.location.href.replace('payment.html', 'payment_confirmation.html');
                }).catch((err) => {
                    console.log(err);
                })
            });
        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = Payment;