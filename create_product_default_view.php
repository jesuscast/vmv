<?php
function get_create_product_default_view() {
    ?>
<div class="kite ng-scope" ng-app="kite-shopify">

<!-- ngView: -->
<div ng-view="" class="ng-scope" style="">
    <div class="container-fluid container-kite ng-scope">

        <div class="row" ng-show="!ctrl.loadingProductRangeDetail" style="">
            <div class="hidden-xs col-sm-3">
                <div>
                    <div sticky="" offset="112" sticky-class="side-menu-sticky" class="ng-isolate-scope side-menu-sticky" style="display: block;z-index: 10;width: 290px;position: fixed;left: 51px;top: 112px;margin-top: 100px;height: 333px;">
                        <kite-products-menu selected-category="ctrl.productFilterCategory" product-range="ctrl.selectedProductRange" class="ng-isolate-scope">
                            <h3 class="side-menu-header">Product Filter</h3>
                            <div id="products-menu">
                                <div class="menu-item-separator top"></div>
                                <!-- ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope selected" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#everything-section" class="left-menu-category ng-binding">Everything</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#everything-section"  class="left-menu-category ng-binding">Apparel</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#cases-section"  class="left-menu-category ng-binding">Phone &amp; Tablet Cases</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#homeware-section"  class="left-menu-category ng-binding">Homeware</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#decor-section"  class="left-menu-category ng-binding">Wall Decor</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#accessories-section"  class="left-menu-category ng-binding">Accessories</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item ng-scope" ng-repeat="category in productCategories" ng-class="{'selected': ctrl.isSelected(category), 'disabled': !ctrl.isCategoryEnabled(category)}" style=""><a href="#prints-section"  class="left-menu-category ng-binding">Prints</a></div>
                                <!-- end ngRepeat: category in productCategories -->
                                <div class="menu-item-separator"></div>
                            </div>
                        </kite-products-menu>
                    </div>
                    <div style="height: 333px;"></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-9">
                <div class="row row-product-range-header">
                    <div class="col-xs-12 col-md-6">
                        <input id="product-range-title" size="14" ng-disabled="!ctrl.editingProductRangeName" class="product-range-title ng-pristine ng-untouched ng-valid ng-not-empty" type="text" ng-model="ctrl.selectedProductRange.titleTemp" disabled="disabled">
                        <a href="" class="button-edit" ng-hide="ctrl.editingProductRangeName" ng-click="ctrl.onEditProductRangeTitleClick()"><span class="icon-edit"></span><span class="label-edit">Edit</span></a>
                        <a href="" class="button-save ng-hide" ng-show="ctrl.editingProductRangeName" ng-click="ctrl.onSaveProductRangeTitleClick()"><span class="icon-save"></span><span class="label-save">Save</span></a>
                        <a href="" class="button-delete" ng-click="ctrl.onDeleteProductRangeClick(ctrl.selectedProductRange)"><span class="icon-delete"></span><span class="label-delete">Delete</span></a>
                    </div>
                    <div class="col-xs-12 col-md-6 col-product-enabled">
                        <span class="toggle-button-label ng-binding">Everything Enabled</span>
                        <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="ctrl.categoryProductsEnabled" button-on-style="green" on-toggle="ctrl.onToggleAllProductsEnabled(toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green animate-on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}" style="">
<a class="toggle-button-thumb"></a>
</span>
                        </kite-toggle-button>
                    </div>
                </div>
                <div class="row">
                    <!-- ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts" style="">
                        <div id="everything-section" class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_mens_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.55&amp;rotate=-90&amp;mirror=true&amp;translate=-65,135" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_mens_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.55&amp;rotate=-90&amp;mirror=true&amp;translate=-65,135" pagespeed_url_hash="4168118344" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Unisex Fine Jersey T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Male</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA001</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £12.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_womens_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.35&amp;rotate=0&amp;mirror=false&amp;translate=56,-704" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_womens_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.35&amp;rotate=0&amp;mirror=false&amp;translate=56,-704" pagespeed_url_hash="3640038957" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Women's Fine Jersey T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Female</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA003</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £12.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_softstyle_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_softstyle_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1340429420" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Softstyle Ringspun T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Gildan</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">GD001</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £7.80</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_heavy_blend_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_heavy_blend_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="231991286" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Heavy Blend Crew Neck Sweatshirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Gildan/AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">GD056</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £13.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_fleece_pullover_hoodie&amp;variant=navy&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_fleece_pullover_hoodie&amp;variant=navy&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="635283633" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval California Fleece Pullover Hoodie <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA027</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £23.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_hooded_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_hooded_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3620637050" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Heavy Blend Hooded Sweatshirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Gildan</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">GD057</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £15.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_hooded_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_hooded_sweatshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="4122855575" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval College Hoodie <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWD</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">JH001</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £15.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_tank_top&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_tank_top&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2406614097" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Fine Jersey Tank Top <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Subli</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £12.75</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_tank_top&amp;variant=navy&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.4&amp;rotate=0&amp;mirror=false&amp;translate=-88,-196" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=gildan_tank_top&amp;variant=navy&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=0.4&amp;rotate=0&amp;mirror=false&amp;translate=-88,-196" pagespeed_url_hash="1170746892" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Softstyle Tank Top <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Gildan</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">GD012</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £8.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_zip_hoodie&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_zip_hoodie&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2182352223" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Fine Jersey Zip Hoodie <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA034</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £29.36</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="404500113" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Sublimation T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">JS001</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£12.66</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1868785985" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Sublimation T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA043</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£13.95</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=roly_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=roly_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1026062635" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Sublimation T-Shirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Subli</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£8.96</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_sublimation_vest&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=aa_sublimation_vest&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2646257195" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Sublimation Vest <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">American Apparel</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">AA044</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£13.72</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=baby_bodysuit&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=baby_bodysuit&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3134044574" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Baby Bodysuit <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Babybugz</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">BZ010</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £9.83</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sweatshirt&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sweatshirt&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1185312363" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Kids Hoodie <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">JH01J</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £9.58</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sublimation_tshirt&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2730826295" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Kids Sublimation TShirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">J101J</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£9.33</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=bc_kids_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=bc_kids_tshirt&amp;variant=black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3274810422" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Kids TShirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Bella+Canvas</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">B190B</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £10.54</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sweatshirt_jh30j&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_sweatshirt_jh30j&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3423758543" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Kids Sweatshirt <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">JH30J</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £9.58</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_zip_hoodie_jh50j&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=awd_kids_zip_hoodie_jh50j&amp;variant=jet_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1870760061" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Kids Zip Hoodie <span class="brand ng-binding" ng-show="product.gender"> / Unisex</span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">AWDis</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">JH50J</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £13.17</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts" style="">
                        <div class="kite-card-product safari_only" id="cases-section" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ix_case&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ix_case&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2365574602" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Phone Case <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £8.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ipad_air_case&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ipad_air_case&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1419807256" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Tablet Case <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£12.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope" style=""></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" id="homeware-section" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=magnet_frame_10x10&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=magnet_frame_10x10&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3451315773" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Magnet Frame <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£9.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=linen_12x12_cushion&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=linen_12x12_cushion&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2245147267" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Cushion <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £7.95</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" id="decor-section" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=a3_poster&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=a3_poster&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1355803328" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Poster <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £7.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=fap1_25_blackframe_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=fap1_25_blackframe_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3459022784" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Framed Fine Art Print <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £43.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=canvasstretched_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=canvasstretched_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1582342735" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Stretched Canvas <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £22.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ecocanvasstretchedlite_11x14&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ecocanvasstretchedlite_11x14&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="59667429" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Stretched Eco-Canvas <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £18.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=canvasframed_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=canvasframed_12x16&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2016948604" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Framed Canvas <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £36.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ecocanvasframed_11x14&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=ecocanvasframed_11x14&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="1813208278" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Framed EcoCanvas <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £28.00</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" id="accessories-section" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=twill_tote_bag&amp;variant=melange_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=twill_tote_bag&amp;variant=melange_black&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2863820558" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Tote Bag <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £6.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=sublimation_tote_bag&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=sublimation_tote_bag&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="515262559" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Tote Bag <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£6.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=mug_11oz&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=mug_11oz&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3059650403" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Mug <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£3.75</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=towel_55x105&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=towel_55x105&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="596533346" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Beach Towel <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">From £9.50</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=flip_flops&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=2&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=flip_flops&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=2&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="2934387531" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Flip Flops <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£10.92</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                    <div class="col-xs-12 col-sm-6 ng-scope" ng-repeat-start="product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts">
                        <div class="kite-card-product safari_only" id="prints-section" ng-class="{'disabled': !product.enabled}">
                            <div class="product-cover-image-container" ng-click="ctrl.onCustomiseProductClick(product)">
                                <img kite-fade-in="" width="500px" height="360px" class="product-cover-image ng-isolate-scope kite-fade-in-img ng-hide-remove ng-hide-add" ng-src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=greeting_cards_a5&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" src="https://image.kite.ly//render/?image=https://s3.amazonaws.com/kiteshopify/c6702fd5-453f-423e-bfb0-0183281d4f36_preview.png&amp;product_id=greeting_cards_a5&amp;variant=cover&amp;format=jpg&amp;debug=false&amp;background=eeedec&amp;size=628x452&amp;fill_mode=fit&amp;padding=20&amp;&amp;scale=1&amp;rotate=0&amp;mirror=false&amp;translate=0,0" pagespeed_url_hash="3801817896" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <h3 ng-if="ctrl.selectedProductRange.titleTemp != 'Untitled Range'" class="ng-binding ng-scope">Dhaval Greeting Card <span class="brand ng-binding ng-hide" ng-show="product.gender"> / </span></h3>
                            <!-- end ngIf: ctrl.selectedProductRange.titleTemp != 'Untitled Range' -->
                            <!-- ngIf: ctrl.selectedProductRange.titleTemp == 'Untitled Range' -->
                            <hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td class="text-nowrap ng-binding">Kite.ly</td>
                                    </tr>
                                    <tr>
                                        <td>Product Code</td>
                                        <td class="text-nowrap ng-binding">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="hidden-sm">Wholesale Price</td>
                                        <td class="visible-sm">Price</td>
                                        <td class="text-nowrap ng-binding">£0.99</td>
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
                                            
                                            <kite-toggle-button class="toggle-button-product-enabled ng-isolate-scope" toggled="product.enabled" button-on-style="green" on-toggle="ctrl.onProductEnabledClick(product, toggled)" button-off-style="red"><span ng-click="ctrl.toggleButton()" class="toggle-button toggle-button-green on" ng-class="{'toggle-button-red': !toggled, 'toggle-button-green': toggled,
    'on': toggled &amp;&amp; ctrl.inititialising, 'animate-on': toggled &amp;&amp; !ctrl.inititialising,
    'off': !toggled &amp;&amp; ctrl.inititialising, 'animate-off': !toggled &amp;&amp; !ctrl.inititialising}">
<a class="toggle-button-thumb"></a>
</span>
                                            </kite-toggle-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- ngIf: ($index + 1) % 2 == 0 -->
                    <div ng-repeat-end="" ng-if="($index + 1) % 2 == 0" class="clearfix ng-scope"></div>
                    <!-- end ngIf: ($index + 1) % 2 == 0 -->
                    <!-- end ngRepeat: product in ctrl.selectedProductRange.products | filter:ctrl.filterProducts -->
                </div>
            </div>
        </div>

        <div class="row row-loading-products ng-hide" ng-show="ctrl.loadingProductRangeDetail" style="">
            <div class="col-xs-12">
                <div class="kite-spinner"></div>
            </div>
        </div>

    </div>
</div>
</div>

<script>
jQuery("kite-navigation-bar").remove();
jQuery(".row-separator").remove();
jQuery("kite-error-bar").remove();
jQuery("#user_images_for_products").remove();
jQuery(".product-range-carousel").remove();
jQuery(".row-product-range-header").remove();

setTimeout(() => {
console.log("Replacing")
jQuery(".product-cover-image").each((i, img) => {
    let $img = jQuery(img);
    let imageUrl = new URL($img.attr("src"))

    let imageParams = new URLSearchParams(imageUrl.search);

    let windowParams = new URLSearchParams(location.search);

    imageParams.set("image", windowParams.get("img"));

    imageUrl.search = imageParams;

    $img.attr("src", imageUrl.href);
});
}, 200);

</script>

<style>
.kite-card-product {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .1) !important;
    text-align: left;
    transform: perspective(100px) translate3d(0, 0, 0);
    transition: ease-in-out .3s;
    padding: 10px;
    margin: 0px 0px 20px 0px;
}
.kite-card-product table {
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-cover-image-container img {
    max-width: 100%;
    height: auto;
}
</style>
    <?php
}

?>