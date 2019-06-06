

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

class PaymentConfirmation {
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

        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = PaymentConfirmation;