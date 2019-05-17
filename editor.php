<?php
function get_create_editor() {
    ?>
<html>

<head>
    <meta charset="utf-8">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <title>Kite.ly: viewmyvoice</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:500" rel="stylesheet">
    <!-- inject:index-styles -->

    <!-- segment -->
    <script type="text/javascript" async="" src="https://widget.intercom.io/widget/ei6d07z4"></script>
    <script type="text/javascript" async="" src="https://s.adroll.com/j/roundtrip.js"></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script type="text/javascript" async="" src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>
    <script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script>
    <script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
    <script src="https://connect.facebook.net/signals/config/1972386753003851?v=2.8.47&amp;r=stable" async=""></script>
    <script src="https://connect.facebook.net/signals/plugins/inferredEvents.js?v=2.8.47" async=""></script>
    <script src="https://connect.facebook.net/signals/config/1487454871284655?v=2.8.47&amp;r=stable" async=""></script>
    <script src="https://connect.facebook.net/signals/plugins/identity.js?v=2.8.47" async=""></script>
    <script type="text/javascript" async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
    <script type="text/javascript" async="" src="https://cdn.segment.com/analytics.js/v1/aJAOkvqmWbCB17BlyxgZHp8VdoNzwSMy/analytics.min.js"></script>
    <script>
        ! function() {
            var analytics = window.analytics = window.analytics || [];
            if (!analytics.initialize)
                if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                else {
                    analytics.invoked = !0;
                    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
                    analytics.factory = function(t) {
                        return function() {
                            var e = Array.prototype.slice.call(arguments);
                            e.unshift(t);
                            analytics.push(e);
                            return analytics
                        }
                    };
                    for (var t = 0; t < analytics.methods.length; t++) {
                        var e = analytics.methods[t];
                        analytics[e] = analytics.factory(e)
                    }
                    analytics.load = function(t, e) {
                        var n = document.createElement("script");
                        n.type = "text/javascript";
                        n.async = !0;
                        n.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(n, o);
                        analytics.integrationOptions = e
                    };
                    analytics.SNIPPET_VERSION = "4.0.1";
                    analytics.load("aJAOkvqmWbCB17BlyxgZHp8VdoNzwSMy");
                    analytics.page();
                }
        }();
    </script>

    <base href="/">
    <link href="https://s3.amazonaws.com/kiteshopify/shopify/app.css" rel="stylesheet">
    <script type="text/javascript" src="https://d.adroll.com/consent/check/T3GF5UZKG5E2TEAPSR57FE?_s=112b0fda13a0cba0892b607515f329a7&amp;adroll_fpc=5b62bf917a72836c79e0fedcd1488b48-1556395417073"></script>
    <script src="https://www.googleadservices.com/pagead/conversion/875977079/?random=1557845040529&amp;cv=9&amp;fst=1557845040529&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=900&amp;u_w=1440&amp;u_ah=835&amp;u_aw=1440&amp;u_cd=24&amp;u_his=7&amp;u_tz=-420&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=2&amp;url=https%3A%2F%2Fshopify.kite.ly%2F&amp;tiba=Kite.ly%3A%20viewmyvoice&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
    <script async="true" type="text/javascript" src="https://d.adroll.com/pixel/T3GF5UZKG5E2TEAPSR57FE/SDXGSSU375CVXDG2XGKQGP?adroll_fpc=5b62bf917a72836c79e0fedcd1488b48-1556395417073&amp;pv=71472510768.39905&amp;cookie=TQQJLIDU3RAQRM4JQ55TTN%3A1%7CT3GF5UZKG5E2TEAPSR57FE%3A17%7CSDXGSSU375CVXDG2XGKQGP%3A17%7CPFGK37IPURCXFOBILMLZY2%3A16&amp;adroll_s_ref=&amp;keyw=&amp;arrfrr=https%3A%2F%2Fshopify.kite.ly%2F"></script>
    <link href="editor.css" rel="stylesheet">
    <script src="https://www.googleadservices.com/pagead/conversion/875977079/?random=1557845040903&amp;cv=9&amp;fst=1557845040903&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=900&amp;u_w=1440&amp;u_ah=835&amp;u_aw=1440&amp;u_cd=24&amp;u_his=7&amp;u_tz=-420&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=2&amp;url=https%3A%2F%2Fshopify.kite.ly%2F&amp;tiba=Kite.ly%3A%20viewmyvoice&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
    <link href="kitely.css" rel="stylesheet">
</head>

<body>

    <product-edit-component style="display:block;0:display;display:block;" _nghost-c21="" class="ng-tns-c21-28 ng-trigger ng-trigger-fadeInAnimation ng-star-inserted">
        <notice-bar-component _ngcontent-c21="" class="c-product-edit__notice-bar ng-tns-c7-29" _nghost-c7="">
            <!---->
        </notice-bar-component>
        <div _ngcontent-c21="" class="c-product-edit">
            <!---->
            <error-bar-component _ngcontent-c21="" class="c-error-bar c-product-edit__error-bar ng-tns-c8-30" _nghost-c8="">
                <!---->
            </error-bar-component>
            <!---->
            <div _ngcontent-c21="" class="c-product-edit__header ng-tns-c21-28 ng-star-inserted" style="">
                <button _ngcontent-c21="" class="c-product-edit__header__back-link c-btn c-btn--bare c-text-m">
                    <svg _ngcontent-c21="" class="c-icon c-product-edit__header__back-link__icon">
                        <use _ngcontent-c21="" class="ng-tns-c21-28" xlink:href="#chevron"></use>
                    </svg><span _ngcontent-c21="" class="c-product-edit__header__back-link__text">BACK</span></button>
                <div _ngcontent-c21="" class="ng-tns-c21-28">
                    <!---->
                    <!---->
                </div>
            </div>
            <product-options-component _ngcontent-c21="" class="c-product-edit__options ng-tns-c22-31 ng-tns-c21-28 ng-star-inserted" style="">
                <div class="c-product-options">
                    <div class="c-product-options__tabs">
                        <div class="c-product-options__tab c-product-options__tab--selected" title="Design &amp; Edit">
                            <svg class="c-icon u-center-in-parent c-product-options__tab__icon">
                                <use class="ng-tns-c22-31" xlink:href="#pencil"></use>
                            </svg>
                            <!---->
                        </div>
                        <div class="c-product-options__tab" title="Configure">
                            <svg class="c-icon u-center-in-parent c-product-options__tab__icon">
                                <use class="ng-tns-c22-31" xlink:href="#tune-icon"></use>
                            </svg>
                            <!---->
                        </div>
                        <div class="c-product-options__tab" title="Information">
                            <svg class="c-icon u-center-in-parent c-product-options__tab__icon">
                                <use class="ng-tns-c22-31" xlink:href="#info-form"></use>
                            </svg>
                            <!---->
                        </div>
                    </div>
                    <div class="c-product-options__content">
                        <!---->
                        <product-options-edit-component class="c-product-options__sub-component ng-tns-c22-31 ng-trigger ng-trigger-fadeInAnimation ng-star-inserted" _nghost-c24="" style="">
                            <h2 _ngcontent-c24="" class="c-title-m c-product-options__title">Design &amp; Edit</h2>
                            <div _ngcontent-c24="" class="c-product-options-edit__variants">
                                <!---->
                                <div _ngcontent-c24="" class="c-product-options-edit__variants__colors ng-star-inserted" style="">
                                    <div _ngcontent-c24="" class="c-tool-text-xs c-product-options-edit__variants__title">Select colour</div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__edit-all">
                                        <toggle-component _ngcontent-c24="" class="c-product-options-edit__variants__colors__edit-all__toggle" _nghost-c19=""><span _ngcontent-c19="" class="c-toggle-button c-toggle-button--on"><svg _ngcontent-c19="" class="c-icon c-icon--small c-icon--white c-toggle-button__icon c-toggle-button__icon--tick"><use _ngcontent-c19="" xlink:href="#tick-icon"></use></svg><svg _ngcontent-c19="" class="c-icon c-icon--small c-icon--white c-toggle-button__icon c-toggle-button__icon--cross"><use _ngcontent-c19="" xlink:href="#cross-icon"></use></svg><a _ngcontent-c19="" class="c-toggle-button__thumb c-toggle-button__thumb--on"></a></span></toggle-component><span _ngcontent-c24="" class="c-tool-text-xs c-product-options-edit__variants__colors__edit-all__text">Edit all variants</span></div>
                                    <!---->
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn c-product-options-edit__variants__colors__btn--selected" aria-label="Select color Black" style="background-color: rgb(0, 0, 0);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Burgundy" style="background-color: rgb(99, 32, 33);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Grey" style="background-color: rgb(155, 156, 160);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Kelly Green" style="background-color: rgb(2, 155, 45);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Khaki" style="background-color: rgb(48, 57, 10);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Navy" style="background-color: rgb(44, 44, 54);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Pink" style="background-color: rgb(255, 104, 132);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Red" style="background-color: rgb(208, 2, 7);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Royal Blue" style="background-color: rgb(61, 79, 120);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Sapphire Blue" style="background-color: rgb(49, 114, 143);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color White" style="background-color: rgb(255, 255, 255);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Yellow" style="background-color: rgb(255, 195, 0);"></button>
                                    </div>
                                    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
                                        <button _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn" aria-label="Select color Purple" style="background-color: rgb(63, 22, 57);"></button>
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <side-selector-full-info-component _ngcontent-c24="">
                                <fulfilment-field-control-list-component _nghost-c33="">
                                    <div _ngcontent-c33="" class="c-fulfilment-field-control-list-component">
                                        <div _ngcontent-c33="" class="c-text-s c-fulfilment-field-control-list-component__title">SELECT SIDE</div>
                                        <!---->
                                        <fulfilment-field-control-component _ngcontent-c33="" _nghost-c34="" class="ng-star-inserted" style="">
                                            <div _ngcontent-c34="" class="c-fulfilment-field-control-component c-fulfilment-field-control-component--current-and-open">
                                                <!---->
                                                <div _ngcontent-c34="" class="c-fulfilment-field-control-component__img ng-star-inserted" style="background-image: url(&quot;https://s3.amazonaws.com/kiteshopify/da7a8905-ee6d-444d-a1fa-e330967072ee.jpeg&quot;);"></div>
                                                <!---->
                                                <div _ngcontent-c34="" class="c-fulfilment-field-control-component__field-info ng-star-inserted"><span _ngcontent-c34="" class="c-text-m">Front</span>
                                                    <!---->
                                                </div>
                                                <div _ngcontent-c34="" class="c-fulfilment-field-control-component__buttons-wrapper ng-star-inserted">
                                                    <!---->
                                                    <!---->
                                                    <picture-file-uploader-component _ngcontent-c34="" class="ng-star-inserted">
                                                        <file-uploader-component _nghost-c15="">
                                                            <div _ngcontent-c15="" class="c-file-uploader">
                                                                <button _ngcontent-c34="" class="c-btn c-btn--bare c-fulfilment-field-control-component__button" title="Replace">
                                                                    <svg _ngcontent-c34="" class="c-icon c-fulfilment-field-control-component__button__icon">
                                                                        <use _ngcontent-c34="" xlink:href="#replace"></use>
                                                                    </svg>
                                                                </button>
                                                                <input _ngcontent-c15="" class="c-file-uploader__file-input" type="file" accept="image/jpeg,image/png,image/tiff">
                                                            </div>
                                                        </file-uploader-component>
                                                    </picture-file-uploader-component>
                                                    <button _ngcontent-c34="" class="c-btn c-btn--bare c-fulfilment-field-control-component__button ng-star-inserted" title="Invert">
                                                        <svg _ngcontent-c34="" class="c-icon c-fulfilment-field-control-component__button__icon">
                                                            <use _ngcontent-c34="" xlink:href="#invert-color"></use>
                                                        </svg>
                                                    </button>
                                                    <!---->
                                                </div>
                                                <!---->
                                            </div>
                                        </fulfilment-field-control-component>
                                        <fulfilment-field-control-component _ngcontent-c33="" _nghost-c34="" class="ng-star-inserted" style="">
                                            <div _ngcontent-c34="" class="c-fulfilment-field-control-component">
                                                <!---->
                                                <!---->
                                                <div _ngcontent-c34="" class="c-fulfilment-field-control-component__field-info c-fulfilment-field-control-component__field-info--not-current ng-star-inserted"><span _ngcontent-c34="" class="c-text-m">Back</span>
                                                    <!----><span _ngcontent-c34="" class="c-text-m c-fulfilment-field-control-component__additional-cost ng-star-inserted">($5.00)</span></div>
                                                <div _ngcontent-c34="" class="c-fulfilment-field-control-component__buttons-wrapper ng-star-inserted">
                                                    <!---->
                                                    <picture-file-uploader-component _ngcontent-c34="" class="ng-star-inserted">
                                                        <file-uploader-component _nghost-c15="">
                                                            <div _ngcontent-c15="" class="c-file-uploader">
                                                                <button _ngcontent-c34="" class="c-btn c-btn--bare c-fulfilment-field-control-component__button c-fulfilment-field-control-component__button--plus-icon">
                                                                    <svg _ngcontent-c34="" class="c-icon c-fulfilment-field-control-component__plus-icon">
                                                                        <use _ngcontent-c34="" xlink:href="#plus-icon"></use>
                                                                    </svg>
                                                                </button>
                                                                <input _ngcontent-c15="" class="c-file-uploader__file-input" type="file" accept="image/jpeg,image/png,image/tiff">
                                                            </div>
                                                        </file-uploader-component>
                                                    </picture-file-uploader-component>
                                                    <!---->
                                                </div>
                                                <!---->
                                            </div>
                                        </fulfilment-field-control-component>
                                    </div>
                                </fulfilment-field-control-list-component>
                            </side-selector-full-info-component>
                            <!---->
                        </product-options-edit-component>
                        <!---->
                        <!---->
                    </div>
                    <!---->
                </div>
            </product-options-component>
            <!---->
            <div _ngcontent-c21="" class="c-product-edit__options__main ng-tns-c21-28 ng-star-inserted" style="">
                <!---->
                <div _ngcontent-c21="" class="c-product-edit__image-editor-wrapper">
                    <!---->
                    <side-selector-component _ngcontent-c21="" class="c-product-edit__side-selection-tabs">
                        <!---->
                        <basic-tabs-component _nghost-c27="" class="ng-star-inserted">
                            <div _ngcontent-c27="" class="c-basic-tabs-component">
                                <!---->
                                <button _ngcontent-c27="" class="c-btn c-btn--bare c-basic-tabs-component__view c-basic-tabs-component__view--selected ng-star-inserted">Front</button>
                                <button _ngcontent-c27="" class="c-btn c-btn--bare c-basic-tabs-component__view ng-star-inserted">Back</button>
                            </div>
                        </basic-tabs-component>
                    </side-selector-component>
                    <!---->
                    <image-editor-display-component _ngcontent-c21="" class="c-product-edit__image-editor ng-tns-c23-32 ng-tns-c21-28 ng-star-inserted" _nghost-c23="">
                        <div _ngcontent-c23="" class="c-image-editor-display">
                            <!---->
                            <!---->
                            <!-- <canvas-image-on-mask-component _ngcontent-c23="" class="c-image-editor-display__canvas ng-tns-c23-32 ng-star-inserted" _nghost-c29="" style="">
                                <div _ngcontent-c29="" class="canvas-image-on-mask">
                                    <canvas _ngcontent-c29="" class="canvas-image-on-mask__canvas" height="234" width="234"></canvas>
                                </div>
                            </canvas-image-on-mask-component> -->
                            <!---->
                            <!---->
                            <!-- <div _ngcontent-c23="" class="c-image-editor-display__canvas ng-tns-c23-32 ng-star-inserted" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
                             -->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <div id="image-editor-container" class="image-editor-container">
                                <!-- <div ng-show="ctrl.loading" id="image-editor-progress-spinner" class="kite-spinner"></div> -->
                                <canvas ng-hide="ctrl.loading" id="image-editor-canvas-background" class="image-editor-canvas" style="z-index: 1"></canvas>
                                <canvas ng-hide="ctrl.loading" id="image-editor-canvas-foreground" class="image-editor-canvas" style="z-index: 2" ng-mousemove="ctrl.onMouseMove($event)" ng-mousedown="ctrl.onMouseDown($event)" ng-mouseup="ctrl.onMouseUp($event)" ng-mouseleave="ctrl.onMouseUp($event)"></canvas>
                                <!--<div ng-show="ctrl.loading" id="image-editor-progress-spinner" class="progress-spinner"></div>-->
                            
                            </div>
                        </div>
                    </image-editor-display-component>
                    <print-quality-warning-component _ngcontent-c21="" class="c-product-edit__quality-warning">
                        <quality-warning-component _nghost-c28="">
                            <button _ngcontent-c28="" class="c-btn c-btn--bare c-quality-warning-component">
                                <div _ngcontent-c28="" class="c-text-s c-quality-warning-component__btn-text">Print quality:</div>
                                <!---->
                                <!---->
                                <div _ngcontent-c28="" class="c-text-s c-quality-warning-component__dpi-text--average ng-star-inserted">&nbsp;Average 103 dpi</div>
                                <!---->
                                <svg _ngcontent-c28="" class="c-icon c-quality-warning-component__btn-icon c-quality-warning-component__btn-icon--average">
                                    <use _ngcontent-c28="" xlink:href="#exclamation"></use>
                                </svg>
                            </button>
                        </quality-warning-component>
                    </print-quality-warning-component>
                </div>
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
        </div>
    </product-edit-component>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="image_preloader.js"></script>
    <script src="example_product.js"></script>
    <script src="product_image.js"></script>
    <script src="modify_products.js"></script>
    <script src="edit.js"></script>
    <script>
        edit();
    </script>
    <style type="text/css">
    </style>
</body>

</html>
    <?php
}

?>