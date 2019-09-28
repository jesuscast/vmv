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
            console.log(`[payment] ${JSON.stringify(prices)}`)
            $("#product-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);
            $("#shipping-cost").html(`${currencySymbol} ${prices.total_shipping_cost[currency]}`);
            $("#total-cost").html(`${currencySymbol} ${prices.total[currency]}`);

            const userId = localStorage.getItem('userIdWP');
            if (userId) {
                product.postProduct(userId, (result) => {
                    console.log(result);
                }, (err) => {
                    console.log(err);
                })
            }
            console.log('why am I being created multiple times')
            // create_script("https://www.paypal.com/sdk/js?client-id="+creds.paypalClientId, "paypal-inserted-script")

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
            console.log(err);
        });
    }
}

module.exports = Payment;