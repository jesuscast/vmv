const ctrl = {};

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

angular.module("kite-shopify")
        .directive("kiteImageEditor", [function() {
            return {
                restrict: "E",
                scope: {
                    templateId: "=",
                    variant: "=",
                    userImageUrl: "@",
                    colorOverlay: "=",
                    scale: "=",
                    flipHorizontal: "=",
                    rotationDegrees: "=",
                    frozen: "=",

                    // translateX, translateY are values in the product print image coord system
                    // NOT the canvas coord system.
                    translateX: "=",
                    translateY: "=",
                },
                controllerAs: "ctrl",
                templateUrl: "static/app/shared/image_editor/image_editor_view.html",
                controller: ["$window", "$element", "$scope", "$q", "$timeout", "productImage",
                        "imagePreloader", "errorBar", "DEBUG",
                        function($window, $element, $scope, $q, $timeout, productImage,
                                 imagePreloader, errorBar, DEBUG) {
                    var ctrl = this;
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
                        $q.all([layerComponentsPromise, userImagePromise]).then(
                            function success(results) {
                                if (cancelObj.cancelled) {
                                    return;
                                }

                                layerComponents = results[0];
                                userImage = results[1];
                                if (!$scope.frozen)
                                    canvas.style.cursor = "move";
                                ctrl.loading = false;
                                render();
                            }, function error(err) {
                                if (cancelObj.cancelled) {
                                    return;
                                }
                                errorBar.show(err);
                            }).finally(function() {
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
                                $timeout(render, 20); // try again shortly when hopefully
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
                    angular.element($window).bind("resize", initCanvasSize);

                    $scope.$watchGroup(["scale", "flipHorizontal", "rotationDegrees",
                            "translateX", "translateY"], function() {
                        render();
                    });

                    $scope.$watchGroup(["templateId", "variant", "userImageUrl"], function() {
                        loadProductImageLayerComponents();
                    });

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
                }],
            };
        }]);