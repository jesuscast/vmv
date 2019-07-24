const {loadData, processPaypalPayment, create_script, placeOrder} = require('../utilities');
const {creds} = require("../constants");

class Payment {

    static updateTinyImg(url) {
        $("#tiny-image").attr('src', url);
        $("#tiny-image").css('width', '150%');
        $("#tiny-image").css('margin-top', '20px');
    }
    static run() {
        const currency = 'USD' // 'GBP';
        const currencySymbol = '$'; // '&pound;';

        loadData().then(({
            prices, address, product, job
        }) => {
            console.log(prices);
            console.log(address);
            console.log(product);
            console.log(product.toImg(false));
            Payment.updateTinyImg(product.toImg(false));
            console.log(job.toDict());
            $("#product-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);
            $("#shipping-cost").html(`${currencySymbol} ${prices.total_shipping_cost[currency]}`);
            $("#total-cost").html(`${currencySymbol} ${prices.total[currency]}`);

            create_script("https://www.paypal.com/sdk/js?client-id  ="+creds.paypalClientId)

            processPaypalPayment(prices, currency, (transaction) => {
                placeOrder(address, job, {
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