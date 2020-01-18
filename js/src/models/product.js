const {CORSURL} = require('../constants');
const price_data = require('../views/selection/price_data.json')

/**
 * Class with utility functions to render products and pass data of products along,
 * including their manipulated images from the editor
 */
class Product {
    constructor(img, product_id, variant, scale, translate, category, size, fromJSON) {
        this.img = img;
        this.product_id = product_id;
        this.variant = variant;
        this.scale = scale;
        this.translate = translate;
        this.category = category;
        this.size = size;
        this.fromJSON = fromJSON;
        this.name = "";
        this.brand = "";
        this.prices= {
            USD: 0.0
        };
        this.product_tags = [];
    }

    /**
     * Returns the rendered image of the product using kite.ly render endpoint.
     * Here, we can process the horizontal / vertical alterations of the image done in the
     * editor.
     * @param {boolean} print Defines whether the image is for displaying in website or for sending a job "print" order.
     */
    toImg(print) {
        let variant = "&variant="+this.variant;
        if (this.product_id.indexOf('_case') !== -1 || this.product_id.indexOf('greeting_cards') !== -1) {
            variant = '';
        }
        return "https://image.kite.ly/render/"+
        "?image="+this.img+
        "&product_id="+this.product_id+
        variant+
        "&format=jpg"+
        "&debug=false"+
        "&background=ffffff"+
        "&size=628x452"+
        "&fill_mode=fit"+
        "&padding=20"+
        "&scale="+this.scale+
        "&rotate=0"+
        "&mirror=false"+
        `&translate=${this.translate.x},${this.translate.y}`+
        "&print_image="+ (print ? "true" : "false");
    }

    /**
     * Saves the product order into local database of view my voice.
     * @param {string} user_id 
     * @param {fn} cb 
     * @param {fn} cbError 
     */
    postProduct(user_id, cb, cbError) {
        fetch(`${CORSURL}http://viewmyvoice.net/wp-json/vmv/orders`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                product_id: this.product_id,
                variant: this.variant,
                scale: this.scale,
                category: this.category,
                img: this.img
            })
        }).then((result) => {
            result.json().then(cb).catch(cbError);
        }).catch(cbError => {
            cbError.json().then(cbError).catch(cbError);
        });
    }

    /**
     * Parses a product object from JSON.
     * @param {dict} jsonObject 
     * @param {string} imgUrl 
     */
    static fromJSON(jsonObject, imgUrl) {
        const product = new Product(
            imgUrl,
            jsonObject.available_templates[0],
            Product.getDefaultVariant(jsonObject.tag),
            jsonObject.scale ? jsonObject.scale : 1.0,
            jsonObject.translate ? jsonObject.translate : {x: 0, y: 0},
            Product.categoryID(jsonObject.tag),
            true
        )
        product.name = jsonObject.name;
        product.brand = jsonObject.product_brand;
        console.log(`[product] ${product.product_id}`)
        product.prices = price_data[product.product_id] || 'n/a';
        product.product_tags = jsonObject.product_tags;
        return product;
    }

    static getDefaultVariant(category) {
        if (category === "Apparel") {
            return  "black";
        }
        return "cover"
    }

    static categoryID(category) {
        return category.toLowerCase().replace("& ","").replace(/ /g,"_")
    }

    static getCategoryHTML(category, i) {
        const categoryId = Product.categoryID(category);
        return `
        <div class="menu-item ng-scope ${i === 0? "selected":""}"
            ng-repeat="category in productCategories"
            ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}"
            style="">
            <a href="#${categoryId}" class="left-menu-category ng-binding">
            ${category}
            </a>
        </div>
        `;
    }

    static getProductsMenuHTML(categories) {
        return `<div class="menu-item-separator top"></div>
            ${categories.map(Product.getCategoryHTML).join("\n")}
            <div class="menu-item-separator"></div>`;
    }
    
    getProductHTML(attachCategory = false) {
       //  return this.jsonObject;
       const renderImgUrl = this.toImg();

        return `<div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
            <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                <div class="product-cover-image-container"
                    id="${attachCategory ? this.category: ""}"
                    data-template="${this.product_id}"
                    ng-click="ctrl.onCustomiseProductClick(product)">
                    <img
                        kite-fade-in=""
                        width="500px"
                        height="360px"
                        class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add"
                        ng-src="${renderImgUrl}"
                        src="${renderImgUrl}"
                        pagespeed_url_hash="1340429420" />
                </div>
                <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">${this.name}</h3>
                <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                <hr>
                <table>
                    <tbody>
                        <tr>
                            <td class="visible-sm">Price</td>
                            <td class="visible-sm">${this.prices.formatted}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <table>
                    <tbody>
                        <tr>
                            <td class="left">
                                <button ng-click="ctrl.onCustomiseProductClick(product)" data-category="${this.category}" data-template="${this.product_id}" data-variant="${this.variant}"class="btn btn-customise">Add to Cart</button>
                            </td>
                            <td class="right">

                                <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red">
                                </kite-toggle-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`;
    }
}

module.exports = Product;