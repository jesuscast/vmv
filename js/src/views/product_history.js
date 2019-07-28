const Selection = require('./selection');
const Product = require('../models/product');
const productsJSON = require('./selection/products.json');
const {$scope, CORSURL} =  require('../constants');

class ProductHistory extends Selection {
    static refreshItemList(userId) {
        fetch(`${CORSURL}http://viewmyvoice.net/wp-json/vmv/orders?user_id=${userId}`, {
            method: 'GET'
        })
        .then(resp => {
            resp.json().then(json => {
                console.log(json);
                if (json.code === "no_user") {
                    return;
                }
                const products = json.map(productJSON => {
                    const found = _.find(
                        productsJSON.objects,
                        json => json.available_templates[0] === productJSON.product_id
                    );
                    
                    if (!found) {
                        return null
                    }
                    found.scale = productJSON.scale;
                    found.translate = productJSON.translate;
                    if (found.product_tags && found.product_tags.length > 0) {
                        found.tag = found.product_tags[0];
                    } else {
                        found.tag = "Other";
                    }
                    const product = Product.fromJSON(found, found.img);
                    return product;
                }).filter(product => product !== null);

                ProductHistory.loadItemsIntoSelection(products)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    static run() {
        let userId = localStorage.getItem('userIdWP');
        let img = localStorage.getItem('img')
        if (!userId) {
            console.log("user id not present");
            // return;
        } else {
            $scope.userIdWP = userId;
        }

        if (!img) {
            console.log('no image')
        } else {
            $scope.userImageUrl = img;
        }
        window.addEventListener("message", receiveMessage, false);

        function receiveMessage(event) {
            console.log(`Received ${JSON.stringify(event.data)}`);
            if (event.data.userId && event.data.userId !== "null") {
                $scope.userIdWP = event.data.userId;
            }
            localStorage.setItem('userIdWP',  $scope.userIdWP);
            ProductHistory.refreshItemList($scope.userIdWP);
        }

        if (userId) {
            ProductHistory.refreshItemList(userId);
        }
    }
}

module.exports = ProductHistory;