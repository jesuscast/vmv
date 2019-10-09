const {loadData} = require('../utilities');
const Payment = require('./payment');
class PaymentConfirmation {
    static updateTinyImg(url) {
        $("#tiny-image").attr('src', url);
        $("#tiny-image").css('width', '150%');
        $("#tiny-image").css('margin-top', '20px');
    }
    static run() {
        const currency = 'USD' // 'GBP';
        const currencySymbol = '$'; // '&pound;';

        loadData().then(({
            prices, address,
            product
        }) => {
            Payment.updateTinyImg(product.toImg(false));
            $("#product-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);
            $("#shipping-cost").html(`${currencySymbol} ${prices.total_shipping_cost[currency]}`);
            $("#total-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);

        }).catch((err) => {
            console.log(err);
        });
    }
}

module.exports = PaymentConfirmation;