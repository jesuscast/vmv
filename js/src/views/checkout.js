const {getPrices, getAddress} = require("../utilities");

class Checkout {
    static run() {
        const modifiedImageUrl = localStorage.getItem('modifiedImageUrl');
        // if (modifiedImageUrl) {
        //     $("#tiny-image").attr('src', modifiedImageUrl);
        //     $("#tiny-image").css('width', '150%');
        //     $("#tiny-image").css('margin-top', '20px');
        // }


        $("#checkout-btn").on('click',  function() {
            getAddress().then((address) => {
                getPrices(address).then((prices) => {
                    localStorage.setItem('prices', JSON.stringify(prices));
                    localStorage.setItem('address', JSON.stringify(address));
                    document.location.href = document.location.href.replace('checkout.html', 'payment.html');
                }).catch((err) => {
                    alert(err);
                });
            });
        });
    }
}

module.exports = Checkout;