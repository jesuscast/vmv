const ctrl = require('./constants');

const returnProductOverviewImage = function(product) {
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

const returnSide = function() {
    return ctrl.side == "front" ?
        ctrl.selectedVariant.image : ctrl.selectedVariant.back_image;
};

function success(files) {
    returnSide().url_preview = files[0].previewImageURL;
    returnSide().url_full = files[0].fullImageURL;
    returnSide().scale = 1;
    returnSide().mirror = false;
    returnSide().rotate_degrees = 0;
    returnSide().tx = 0;
    returnSide().ty = 0;
}

module.exports = {
    returnProductOverviewImage,
    returnSide,
    success
};