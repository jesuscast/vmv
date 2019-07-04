class Product {
    constructor(jsonObject, imgUrl) {
        this.name = jsonObject.name;
        this.brand = jsonObject.product_brand;
        this.prices = jsonObject.wholesale_cost;
        this.product_code = jsonObject.product_code;
        this.imgUrl = imgUrl;
        this.product_tags = jsonObject.product_tags;
        this.category = this.product_tags.length > 0 ? this.product_tags[0]: null;
        this.jsonObject = jsonObject;
        this.template = this.jsonObject.available_templates[0];
    }

    getDefaultVariant() {
        if (this.category === "Apparel") {
            return  "black";
        }
        return "cover"
    }
    
    getProductHTML() {
       //  return this.jsonObject;
       const renderImgUrl = "https://image.kite.ly//render/"+
                    "?image="+this.imgUrl+
                    "&amp;product_id="+this.jsonObject.available_templates[0]+"&amp;variant="+this.getDefaultVariant()+"&amp;"+
                    "format=jpg&amp;debug=false&amp;background=eeedec&amp;"+
                    "size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;"+
                    "scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0";

        console.log(this.product_tags.length);
        return `<div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
            <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                <div class="product-cover-image-container" data-template="${this.template}" ng-click="ctrl.onCustomiseProductClick(product)">
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
                                <button ng-click="ctrl.onCustomiseProductClick(product)" class="btn btn-customise">Add to Cart</button>
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