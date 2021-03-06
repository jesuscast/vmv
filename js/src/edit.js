const {ctrl, $scope, CLEAN_IMAGE_ENDPOINT, colorMappings} = require('./constants');
const productImage = require('./product_image');
const imagePreloader = require('./image_preloader');

function loading(value) {
    ctrl.loading = value;
    if (value) {
        $("#image-editor-progress-spinner").show();
        $(".c-product-options-edit__variants__colors").html(`<div class="kite-spinner"></div>`);
        
    } else {
        $("#image-editor-progress-spinner").hide();
    }
}


function setColors(colors) {
    const selectedClass = 'c-product-options-edit__variants__colors__btn--selected';
    const colorsNotFound = [];
    let colorsArrayHTML = colors.map((color, i) => {
        if (!colorMappings[color]) {
            colorsNotFound.push(color);
            return '';
        }
        return `
    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors__btn-wrapper ng-star-inserted">
        <button _ngcontent-c24="" class="${$scope.selectedColor.name === color ? selectedClass: ''} c-product-options-edit__variants__colors__btn" data-color-name="${color}" data-color="#${colorMappings[color]}" aria-label="Select color ${color}" style="background-color: #${colorMappings[color]};"></button>
    </div>`;
    }).filter(val => val !== '');
    if (colorsArrayHTML.length === 0) {
        colorsArrayHTML = `<div _ngcontent-c24="" class="c-tool-text-xs c-product-options-edit__variants__title">No colours available for this product</div>`;
    } else {
        colorsArrayHTML = colorsArrayHTML.join(' ');
    }
    console.log(`colorsNotFound ${JSON.stringify(colorsNotFound)}`);
    const colorContainerHTML = `
    <div _ngcontent-c24="" class="c-product-options-edit__variants__colors ng-star-inserted" style="">
        <div _ngcontent-c24="" class="c-tool-text-xs c-product-options-edit__variants__title">Select colour</div>
        ${colorsArrayHTML}
    </div>
    `;
    $("#colorContainer").html(colorContainerHTML);

    setTimeout(() => {
        $(".c-product-options-edit__variants__colors__btn").on('click', function(el) {
            const colorName = $(this).attr('data-color-name');
            const colorCode = $(this).attr('data-color');
            $(`[data-color-name="${$scope.selectedColor.name}"]`).removeClass(selectedClass);
            $(this).addClass(selectedClass);
            $scope.selectedColor = {
                name: colorName,
                code: colorCode
            }
            render();
        });
    }, 100);
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
function toCanvasCoordinateSystem(coord) {
    var quad = getScaledEnclosingQuad(canvas, layerComponents.masks[0]);
    var scale = quad.width / layerComponents.asset_size.width;
    return Math.round(scale * coord);
}

function render() {
    localStorage.setItem('scope', JSON.stringify($scope));
    if (!ctrl.loading && window.layerComponents) {
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
                // if ($scope.templateId.indexOf("mug") >= 0) {
                    ctx.globalCompositeOperation = "source-over";
                    ctx.strokeStyle = "#7879ec";
                    ctx.beginPath();
                    ctx.moveTo(quad.bottom_left[0], quad.bottom_left[1]);
                    ctx.lineTo(quad.bottom_right[0], quad.bottom_right[1]);
                    ctx.lineTo(quad.top_right[0], quad.top_right[1]);
                    ctx.lineTo(quad.top_left[0], quad.top_left[1]);
                    ctx.closePath();
                    ctx.strokeWidth = 8;
                    ctx.stroke();
                // }
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

        // if (layerComponents.color_overlay) {
        //     btx.globalCompositeOperation="source-in";
        //     btx.fillStyle= $scope.selectedColor.code;
        //     btx.fillRect(0, 0, w, h);
        // };

        btx.globalCompositeOperation="source-in";
        btx.fillStyle= $scope.selectedColor.code;
        btx.fillRect(0, 0, w, h);

        if ($scope.variant !== null) {
            const modifiedImageUrl = CLEAN_IMAGE_ENDPOINT + "/render/?image=" + $scope.userImageUrl
            + "&product_id=" + $scope.templateId + "&variant="
            + $scope.variant + "&format=jpg&debug=false&background="
            + "eeedec&size=628x452&fill_mode=fit&padding=20&&scale=" + $scope.scale
            + "&rotate=" + $scope.rotationDegrees + "&mirror=" + $scope.flipHorizontal
            + "&translate=" + $scope.translateX + "," + $scope.translateY;
            // console.log(modifiedImageUrl);
            localStorage.setItem('modifiedImageUrl', modifiedImageUrl);
        }
    }
}

function edit() {
    const $element = $("#image-editor-container");
    // function randomFunction($window, $element, $scope, $q, $timeout, productImage,
    //                     imagePreloader, errorBar, DEBUG) {
    // if(!window.ctrl)
    // var ctrl = this;
    loading(true);

    window.background = $element.find("canvas")[0];
    window.canvas = $element.find("canvas")[1];
    window.ctx = canvas.getContext("2d");
    window.btx = background.getContext("2d");

    window.layerComponents = null;

    window.userImage = null;
    window.layerComponentsLoadCancelObj = null;

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

        loading(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        btx.clearRect(0, 0, canvas.width, canvas.height);
        layerComponents = null;
        userImage = null;

        var userImagePromise = imagePreloader.load($scope.userImageUrl);
        var layerComponentsPromise =
            productImage.getLayerComponents($scope.templateId, $scope.variant, setColors);
            // userImagePromise.then((json) => {
            //     console.log(json);
            // }).catch((err) => {
            //     console.log(err);
            // })
        Promise.all([layerComponentsPromise, userImagePromise]).then(function success(results) {
            if (cancelObj.cancelled) {
                return;
            }

            layerComponents = results[0];
            userImage = results[1];
            if (!$scope.frozen)
                canvas.style.cursor = "move";
            loading(false);
            render();
        }).catch(err => {
            console.log(err);
        })
        .finally(function() {
            if (cancelObj == layerComponentsLoadCancelObj) {
                layerComponentsLoadCancelObj = null;
            }
        });

        layerComponentsLoadCancelObj = cancelObj;
    }

    loadProductImageLayerComponents();

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


    /*
    * Handle user dragging/reposition their image on the product
    */
    ctrl.dragging = false;
    var lastClientX = 0;
    var lastClientY = 0;

    const onMouseMove = function(event) {
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

    const onMouseDown = function(event) {
        if ($scope.frozen || layerComponents == null) return;
        ctrl.dragging = true;
        lastClientX = event.clientX;
        lastClientY = event.clientY;
    };

    const onMouseUp = function(event) {
        if ($scope.frozen || layerComponents == null) return;
        ctrl.dragging = false;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    const editorContainer = document.getElementById("image-editor-container");
    editorContainer.addEventListener('touchstart', function(e) {
        var touchLocation = e.targetTouches[0];
        ctrl.dragging = true;
        lastClientX = touchLocation.clientX;
        lastClientY = touchLocation.clientY;
    });
    editorContainer.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        onMouseMove(touchLocation);
    });
    editorContainer.addEventListener('touchend', function(e) {
        ctrl.dragging = false;
    });
    console.log(document.getElementById("image-editor-container"))
}

module.exports = {
    render,
    edit
}