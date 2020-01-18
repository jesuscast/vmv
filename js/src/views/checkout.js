const {getPrices, getAddress} = require("../utilities");
const  {getScope} = require("../constants");

class Checkout {
    static run() {
        getScope();

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