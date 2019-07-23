const {loadData} = require('../utilities');

class PaymentConfirmation {
    static run() {
        const currency = 'USD' // 'GBP';
        const currencySymbol = '$'; // '&pound;';
        const modifiedImageUrl = localStorage.getItem('modifiedImageUrl');
        // if (modifiedImageUrl) {
        //     $("#tiny-image").attr('src', modifiedImageUrl);
        //     $("#tiny-image").css('width', '150%');
        //     $("#tiny-image").css('margin-top', '20px');
        // }

        loadData().then(({
            prices, address,
            job
        }) => {
            console.log(prices);
            console.log(address);
            console.log(job);
            $("#product-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);
            $("#shipping-cost").html(`${currencySymbol} ${prices.total_shipping_cost[currency]}`);
            $("#total-cost").html(`${currencySymbol} ${prices.total_product_cost[currency]}`);

        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = PaymentConfirmation;