const Selection = require('./selection');
const Product = require('../models/product');
const productsJSON = require('./selection/products.json');
const price_data = require('./selection/price_data.json')
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
                if (json.code === 'no_orders') {
                    $(".kite-spinner").hide();
                    $("#products-menu").html(`<h1>No products found for user<h1>`);
                    $(".hidden-xs").removeClass('hidden-xs');
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
                    const product = new Product(
                        productJSON.img,
                        productJSON.product_id,
                        productJSON.variant,
                        productJSON.scale,
                        {x: 0,y:0},
                        productJSON.category,
                        false
                    )
                    product.name = found.name;
                    product.branch = found.product_brand;
                    product.prices = price_data[productJSON.product_id];
                    product.product_tags = found.product_tags;
                    if (product.product_tags && product.product_tags.length > 0) {
                        product.tag = product.product_tags[0];
                    } else {
                        product.tag = "Other";
                    }
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

        if (userId) {
            ProductHistory.refreshItemList(userId);
        }
    }
}

module.exports = ProductHistory;