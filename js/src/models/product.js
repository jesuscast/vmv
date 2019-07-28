// ctrl.imageGeneratorEndpoint + "/render/?image=" + image.url_preview
//         + "&product_id=" + coverVariant.template_id + "&variant="
//         + variantName + "&format=jpg&debug=false&background="
//         + "eeedec&size=628x452&fill_mode=fit&padding=20&&scale=" + image.scale
//         + "&rotate=" + image.rotate_degrees + "&mirror=" + image.mirror
//         + "&translate=" + image.tx + "," + image.ty + "&print_image="+ image.print_image;

class Product {
    constructor(img, product_id, variant, scale, translate, category, fromJSON) {
        this.img = img;
        this.product_id = product_id;
        this.variant = variant;
        this.scale = scale;
        this.translate = translate;
        this.category = category;
        this.fromJSON = fromJSON;
        this.name = "";
        this.brand = "";
        this.prices= {
            USD: 0.0
        };
        this.product_tags = [];
    }

    toImg(print) {
        return "https://image.kite.ly/render/"+
        "?image="+this.img+
        "&product_id="+this.product_id+
        "&variant="+this.variant+
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

    static fromJSON(jsonObject, imgUrl) {
        const product = new Product(
            imgUrl,
            jsonObject.available_templates[0],
            Product.getDefaultVariant(jsonObject.tag),
            1.0,
            {x: 0, y: 0},
            Product.categoryID(jsonObject.tag),
            true
        )
        product.name = jsonObject.name;
        product.brand = jsonObject.product_brand;
        product.prices = jsonObject.wholesale_cost;
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
                            <td class="visible-sm">$${this.prices.USD}</td>
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