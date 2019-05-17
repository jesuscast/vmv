const ctrl = {};
const $scope = {
    templateId: "a1_poster",
    variant: "cover",
    userImageUrl: "https://yt3.ggpht.com/a/AGF-l7_Gek-5o71NvSFO8pye4YJ-A7rToQnB_nbl8Q=s900-mo-c-c0xffffffff-rj-k-no",
    colorOverlay: "=",
    scale: 1.0,
    flipHorizontal: false,
    rotationDegrees: 0,
    frozen: false,

    // translateX, translateY are values in the product print image coord system
    // NOT the canvas coord system.
    translateX: 0,
    translateY: 0,
}

let windowParams = new URLSearchParams(location.search);
$scope.userImageUrl = windowParams.get("img");

const imagePreloader = {

    // expose list of images that were created to facilitate the load for unit testing
    // purposes
    images: null,

    /*
     * Preloads an array of image url strings (or a single image url string not in an
     * array). Returns a promise that will resolve to an object who's keys are the image
     * urls strings and values are the Image objects or if a single url string was
     * passed as an argument then resolves to a single Image.
     */
    load: function(imagesToLoad) {
        imagePreloader.images = [];
        return new Promise((resolve, reject) => {
            var resolveAsSingleImage = false;
            if (typeof(imagesToLoad) == "string") {
                if (!imagesToLoad) {
                    // Blank image
                    resolve();
                    return;
                }
                imagesToLoad = [imagesToLoad];
                resolveAsSingleImage = true;
            }

            var results = {};
            var remainingImagesToLoad = imagesToLoad.length;
            for (var i = 0; i < imagesToLoad.length; ++i) {
                (function(src) {
                    var image = new Image();
                    image.src = src.replace(window.CORSURL, '');
                    var aimage = $(image);
                    imagePreloader.images.push(aimage);
                    aimage.on("load", function() {
                        results[src] = image;
                        if (--remainingImagesToLoad == 0) {
                            resolve(resolveAsSingleImage ? image : results);
                        }
                    });

                    aimage.on("error", function() {
                        reject();
                    });
                })(imagesToLoad[i]);
            }
        });
    },
};


var EXAMPLE_PRODUCT =
    {
        "brand": "AWDis",
        "description": "Just Sub shirts are in AWDis' own Neoteric 175 gsm 100% Polyester Jersey " +
        "fabric durable enough to do justice to a permanent printing process",
        "enabled": true,
        "handle": "sublimation-t-shirt-39",
        "id": 5651,
        "image": {
            "mirror": false,
            "rotate_degrees": 0,
            "scale": 1.0,
            "tx": 0,
            "ty": 0,
        },
        "options": [
            "Size",
        ],
        "product_id": "awd_sublimation_tshirt",
        "product_type": "T-Shirt",
        "published": true,
        "title": "Sublimation T-Shirt",
        "variants": [
            {
                "enabled": true,
                "id": 90851,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "XS",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90852,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "S",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90853,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "M",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90854,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "L",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90855,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "XL",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90856,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "2XL",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
            {
                "enabled": true,
                "id": 90857,
                "image_variants": [
                    "cover",
                ],
                "markup_percentage": 30,
                "options": [
                    "3XL",
                ],
                "template_id": "awd_sublimation_tshirt",
                "wholesale_price": {
                    "amount": "15.48",
                    "currency": "USD",
                    "symbol": "$",
                },
                "wholesale_shipping_price": {
                    "GBR": "3.06",
                    "USA": "4.89",
                    "europe": "4.89",
                    "rest_of_world": "6.12",
                },
            },
        ],
    };



/**
 * Created by dbotha on 21/06/16.
 */

// angular.module("kite-shopify")
//     .factory("productImage", ["$q", "$http", "IMAGE_GENERATOR_ENDPOINT", "imagePreloader",
//             function($q, $http, IMAGE_GENERATOR_ENDPOINT, imagePreloader) {
// .constant("IMAGE_GENERATOR_ENDPOINT", "https://image.kite.ly/")

window.CORSURL = "https://cors-anywhere.herokuapp.com/"
window.CLEAN_IMAGE_ENDPOINT = "https://image.kite.ly";
const IMAGE_GENERATOR_ENDPOINT=`${window.CORSURL}${window.CLEAN_IMAGE_ENDPOINT}`;
/*
* This function fetches the layer components for the product variant image in
* question and preloads all the images associated ready for use with an image
* editor. It returns a promise that will resolve with  a layer components object
* looking something like this:
*
* {
*       background: "product_images/cushion/cover/background.png",
*       foreground: "product_images/cushion/cover/foreground.png",
*       masks: [
*           {
*               align: "centre",
*               blend_mode: "normal",
*               enclosing_quadrilateral: {
*                   bottom_left: [
*                       192,
*                       179
*                   ],
*                   bottom_right: [
*                       1832,
*                       182
*                   ],
*                   top_left: [
*                       189,
*                       1795
*                   ],
*                   top_right: [
*                       1829,
*                       1798
*                   ]
*               },
*               mask: "product_images/cushion/cover/mask.png",
*               size: {
*                   height: 1616,
*                   width: 1640
*               }
*           }
*       ],
*       name: "cover"
* }
*/
const productImage = {
    getLayerComponents: function(templateId, imageVariantName) {
        return new Promise((resolve, reject) => {
            return fetch(IMAGE_GENERATOR_ENDPOINT + "/product/" + templateId).then(function(response) {
                return response.json();
              }).then(function success(json) {

                var product = json;

                // preload all images so they're ready to be used
                function imageURL(path) {
                    return IMAGE_GENERATOR_ENDPOINT + "/" + path;
                }

                function cleanImageUrl(path){
                    return CLEAN_IMAGE_ENDPOINT + "/" + path;
                }

                var imageVariant = null;
                console.log(imageVariantName);
                console.log(product.images.length);
                for (var i = 0; i < product.images.length; ++i) {
                    console.log(product.images[i].name);
                    if (product.images[i].name == imageVariantName) {
                        imageVariant = product.images[i];
                    }
                }

                if (imageVariant == null) {
                    return reject("Could not find image variant '" + imageVariant
                        + "' for template_id: " + templateId);
                }


                var imagesToLoad = [];
                if (imageVariant.background) {
                    imagesToLoad.push(imageURL(imageVariant.background));
                }
                if (imageVariant.foreground) {
                    imagesToLoad.push(imageURL(imageVariant.foreground.image));
                }

                for (var i = 0; i < imageVariant.masks.length; ++i) {
                    imagesToLoad.push(imageURL(imageVariant.masks[i].mask));
                }

                return imagePreloader.load(imagesToLoad).then(function success(imagesRaw) {
                    // Here we need to remove the CORSURL from the result.
                    const imagesUrls = Object.keys(imagesRaw);
                    const imagesUrlsCleaned = imagesUrls.map((url) => {
                        return url.replace(CORSURL, "");
                    });
                    const images = {};
                    for(let i = 0; i < imagesUrls.length; i++) {
                        images[imagesUrlsCleaned[i]] = imagesRaw[imagesUrls[i]];
                    }
                    if (imageVariant.background) {
                        imageVariant.background = images[cleanImageUrl(imageVariant.background)];
                    }

                    if (imageVariant.foreground) {
                        imageVariant.foreground.image =
                            images[cleanImageUrl(imageVariant.foreground.image)];
                    }

                    for (var i = 0; i < imageVariant.masks.length; ++i) {
                        imageVariant.masks[i].mask =
                            images[cleanImageUrl(imageVariant.masks[i].mask)];
                    }

                    return resolve(imageVariant);
                });
            });
        });
    }
}



ctrl.returnProductOverviewImage = function(product) {
    var coverVariant = product.variants[0];
    for (var i = 0; i < product.variants.length; ++i) {
        if (product.variants[i].is_cover) {
            coverVariant = product.variants[i];
        }
    }

    var variantName = coverVariant.image_variants[0];
    var image = coverVariant.image;
    if (!coverVariant.image.url_preview && coverVariant.back_image_variant
        && coverVariant.back_image.url_preview) {
        // user hasn't got a front image set for this product, but they have
        // upload a back image - lets go with the back image variant name
        variantName = coverVariant.back_image_variant;
        image = coverVariant.back_image;
    }

    return ctrl.imageGeneratorEndpoint + "/render/?image=" + image.url_preview
        + "&product_id=" + coverVariant.template_id + "&variant="
        + variantName + "&format=jpg&debug=false&background="
        + "eeedec&size=628x452&fill_mode=fit&padding=20&&scale=" + image.scale
        + "&rotate=" + image.rotate_degrees + "&mirror=" + image.mirror
        + "&translate=" + image.tx + "," + image.ty;
};

ctrl.returnSide = function() {
    return ctrl.side == "front" ?
        ctrl.selectedVariant.image : ctrl.selectedVariant.back_image;
};

function success(files) {
    ctrl.returnSide().url_preview = files[0].previewImageURL;
    ctrl.returnSide().url_full = files[0].fullImageURL;
    ctrl.returnSide().scale = 1;
    ctrl.returnSide().mirror = false;
    ctrl.returnSide().rotate_degrees = 0;
    ctrl.returnSide().tx = 0;
    ctrl.returnSide().ty = 0;
}




function drawImage(ctx, img, fitOrFill, x, y, fitWidth, fitHeight, centre, tx, ty, scale,
                    flipHorizontal, rotationDegrees) {
    if (!img) {
        return;
    }

    ctx.save();
    var hRatio = fitWidth / img.width;
    var vRatio = fitHeight / img.height;
    var ratio = fitOrFill == "fit" ? Math.min(hRatio, vRatio) : Math.max(hRatio, vRatio);

    var w = img.width * ratio * scale;
    var h = img.height * ratio * scale;
    var xoff = Math.round(x + tx + (centre ? ((fitWidth - w) / 2) : 0));
    var yoff = Math.round(y + ty + (centre ? ((fitHeight - h) / 2) : 0));

    ctx.translate(xoff + w / 2, yoff + h / 2); // Set the origin to the center of the image
    if (flipHorizontal) {
        ctx.scale(-1, 1);
    }

    ctx.rotate(rotationDegrees * (Math.PI / 180));
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
}

function getScaledEnclosingQuad(canvas, mask) {
    var hRatio = canvas.width / mask.mask.width;
    var vRatio = canvas.height / mask.mask.height;
    var scale = Math.min(hRatio, vRatio);

    var q = mask.enclosing_quadrilateral;

    // flip coord system too as pillow in python is opposite to html5 canvas
    var xoff = (canvas.width - (mask.mask.width * scale)) / 2;
    var yoff = (canvas.height - (mask.mask.height * scale)) / 2;
    var quad = {
        bottom_left: [xoff + q.top_left[0] * scale, yoff + q.top_left[1] * scale],
        bottom_right: [xoff + q.top_right[0] * scale, yoff + q.top_right[1] * scale],
        top_left: [xoff + q.bottom_left[0] * scale, yoff + q.bottom_left[1] * scale],
        top_right: [xoff + q.bottom_right[0] * scale, yoff + q.bottom_right[1] * scale],
    };

    quad.width = Math.abs(quad.bottom_right[0] - quad.top_left[0]);
    quad.height = Math.abs(quad.bottom_right[1] - quad.top_left[1]);

    return quad;
}

function edit() {
    const $element = $("#image-editor-container");

    controller =  ["$window", "$element", "$scope", "$q", "$timeout", "productImage",
            "imagePreloader", "errorBar", "DEBUG"];
        
    // function randomFunction($window, $element, $scope, $q, $timeout, productImage,
    //                     imagePreloader, errorBar, DEBUG) {
    // if(!window.ctrl)
    // var ctrl = this;
    ctrl.loading = true;

    var background = $element.find("canvas")[0];
    var canvas = $element.find("canvas")[1];
    var ctx = canvas.getContext("2d");
    var btx = background.getContext("2d");

    var layerComponents = null;

    var userImage = null;
    var layerComponentsLoadCancelObj = null;

    function loadProductImageLayerComponents() {
        if (!$scope.templateId) {
            return;
        }

        if (layerComponentsLoadCancelObj) {
            // cancel any previous load request
            layerComponentsLoadCancelObj.cancel();
        }

        var cancelObj = {
            cancelled: false,
            cancel: function() {
                this.cancelled = true;
            },
        };

        ctrl.loading = true;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        btx.clearRect(0, 0, canvas.width, canvas.height);
        layerComponents = null;
        userImage = null;

        var userImagePromise = imagePreloader.load($scope.userImageUrl);
        var layerComponentsPromise =
            productImage.getLayerComponents($scope.templateId, $scope.variant);
            // userImagePromise.then((json) => {
            //     console.log(json);
            // }).catch((err) => {
            //     console.error(err);
            // })
        Promise.all([layerComponentsPromise, userImagePromise]).then(function success(results) {
            if (cancelObj.cancelled) {
                return;
            }

            layerComponents = results[0];
            userImage = results[1];
            if (!$scope.frozen)
                canvas.style.cursor = "move";
            ctrl.loading = false;
            render();
        }).catch(err => {
            console.error(err);
        })
        .finally(function() {
            if (cancelObj == layerComponentsLoadCancelObj) {
                layerComponentsLoadCancelObj = null;
            }
        });

        layerComponentsLoadCancelObj = cancelObj;
    }

    loadProductImageLayerComponents();

    function render() {
        if (!ctrl.loading && layerComponents != null) {
            if (canvas.width == 0 || canvas.height == 0) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                // $timeout(render, 20); // try again shortly when hopefully
                setTimeout(render, 20)
                // ng-hide/display:none is removed
                return;
            }

            var w = canvas.width;
            var h = canvas.height;

            btx.clearRect(0, 0, w, h);
            ctx.clearRect(0, 0, w, h);

            if (userImage) {
                for (var i = 0; i < layerComponents.masks.length; ++i) {
                    var mask = layerComponents.masks[i];
                    drawImage(
                        ctx, mask.mask, "fit", 0, 0, w, h, true, 0, 0, 1, false, 0
                    );
                    ctx.globalCompositeOperation = "source-in";

                    var quad = getScaledEnclosingQuad(canvas, mask);

                    var tx = toCanvasCoordinateSystem($scope.translateX);
                    var ty = toCanvasCoordinateSystem($scope.translateY);
                    drawImage(ctx, userImage, "fill", quad.top_left[0],
                        quad.top_left[1], quad.width, quad.height, true,
                        tx, ty, parseFloat($scope.scale), $scope.flipHorizontal,
                        -parseInt($scope.rotationDegrees)
                    );

                    if (layerComponents.masks.length > 1) {
                        ctx.globalCompositeOperation = "source-over";
                    }

                    // draw enclosing quad
                    if ($scope.templateId.indexOf("mug") >= 0) {
                        ctx.globalCompositeOperation = "source-over";
                        ctx.strokeStyle = "#575656";
                        ctx.beginPath();
                        ctx.moveTo(quad.bottom_left[0], quad.bottom_left[1]);
                        ctx.lineTo(quad.bottom_right[0], quad.bottom_right[1]);
                        ctx.lineTo(quad.top_right[0], quad.top_right[1]);
                        ctx.lineTo(quad.top_left[0], quad.top_left[1]);
                        ctx.closePath();
                        ctx.strokeWidth = 2;
                        ctx.stroke();
                    }
                }
            }

            ctx.globalCompositeOperation = "source-over";
            if (layerComponents.foreground) {
                if (layerComponents.foreground.blend_mode == "multiply") {
                    ctx.globalCompositeOperation = "multiply";
                    drawImage(ctx, layerComponents.foreground.image, "fit", 0, 0,
                        w, h, true, 0, 0, 1, false, 0);
                    ctx.globalCompositeOperation = "source-over";
                } else {
                    drawImage(ctx, layerComponents.foreground.image, "fit", 0, 0,
                        w, h, true, 0, 0, 1, false, 0);
                }
            }

            btx.globalCompositeOperation = "source-over";

            drawImage(btx, layerComponents.background, "fit", 0, 0, w, h, true, 0,
                0, 1, false, 0);

            if (layerComponents.color_overlay) {
                btx.globalCompositeOperation="source-in";
                btx.fillStyle=$scope.colorOverlay;
                btx.fillRect(0, 0, w, h);
            };
        }
    }

    function initCanvasSize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        background.width = canvas.offsetWidth;
        background.height = canvas.offsetHeight;
        render();
    }

    initCanvasSize();
    // angular.element($window).bind("resize", initCanvasSize);

    // $scope.$watchGroup(["scale", "flipHorizontal", "rotationDegrees",
    //         "translateX", "translateY"], function() {
    //     render();
    // });

    // $scope.$watchGroup(["templateId", "variant", "userImageUrl"], function() {
    //     loadProductImageLayerComponents();
    // });

    function toPrintImageCoordinateSystem(coord) {
        var quad = getScaledEnclosingQuad(canvas, layerComponents.masks[0]);
        var scale = layerComponents.asset_size.width / quad.width;
        return Math.round(scale * coord);
    }

    function toCanvasCoordinateSystem(coord) {
        var quad = getScaledEnclosingQuad(canvas, layerComponents.masks[0]);
        var scale = quad.width / layerComponents.asset_size.width;
        return Math.round(scale * coord);
    }

    /*
        * Handle user dragging/reposition their image on the product
        */
    ctrl.dragging = false;
    var lastClientX = 0;
    var lastClientY = 0;

    ctrl.onMouseMove = function(event) {
        if ($scope.frozen || layerComponents == null) return;

        if (ctrl.dragging) {
            var canvasDx = event.clientX - lastClientX;
            var canvasDy = event.clientY - lastClientY;

            // convert canvas dx, dy to unscaled product image coordinate system
            var productDx = toPrintImageCoordinateSystem(canvasDx);
            var productDy = toPrintImageCoordinateSystem(canvasDy);

            $scope.translateX = parseInt($scope.translateX) + productDx;
            $scope.translateY = parseInt($scope.translateY) + productDy;
            lastClientX = event.clientX;
            lastClientY = event.clientY;
            render();
        }
    };

    ctrl.onMouseDown = function(event) {
        if ($scope.frozen || layerComponents == null) return;
        ctrl.dragging = true;
        lastClientX = event.clientX;
        lastClientY = event.clientY;
    };

    ctrl.onMouseUp = function(event) {
        if ($scope.frozen || layerComponents == null) return;
        ctrl.dragging = false;
    };
}