// ctrl.imageGeneratorEndpoint + "/render/?image=" + image.url_preview
//         + "&product_id=" + coverVariant.template_id + "&variant="
//         + variantName + "&format=jpg&debug=false&background="
//         + "eeedec&size=628x452&fill_mode=fit&padding=20&&scale=" + image.scale
//         + "&rotate=" + image.rotate_degrees + "&mirror=" + image.mirror
//         + "&translate=" + image.tx + "," + image.ty + "&print_image="+ image.print_image;

class Product {
    constructor(img, product_id, variant, scale, translate, category) {
        this.img = img;
        this.product_id = product_id;
        this.variant = variant;
        this.scale = scale;
        this.translate = translate;
        this.category = category;
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
}

module.exports = Product;