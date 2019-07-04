const Product = require('./product');
const products = require('./products.json');
const toIgnore = require('./toignore.json');

class Selection {
    static oldReplacement() {
        jQuery("kite-navigation-bar").remove();
        jQuery(".row-separator").remove();
        jQuery("kite-error-bar").remove();
        jQuery("#user_images_for_products").remove();
        jQuery(".product-range-carousel").remove();
        jQuery(".row-product-range-header").remove();
        jQuery("#image-editor").hide();
        console.log("Replacing");
        jQuery(".product-cover-image").each((i, img) => {
            let $img = jQuery(img);
            let imageUrl = new URL($img.attr("src"))

            let imageParams = new URLSearchParams(imageUrl.search);

            let windowParams = new URLSearchParams(location.search);

            imageParams.set("image", localStorage.getItem('img') || windowParams.get("img"));

            imageUrl.search = imageParams;


            $img.attr("src", imageUrl.href);

            // Parent container
            // .kite-card-product
            const product_id = imageParams.get("product_id");
            let parent = $img.parent().parent();
            console.log(parent);
            parent.find("button").on('click', function() {
                console.log('hey');
                window.location.href = "https://viewmyvoice.net/edit-product/?product_id=" + product_id + "&img=" + windowParams.get("img");
                // jQuery("#image-editor").show();
                // jQuery("#image-editor")[0].contentWindow.postMessage({
                //     product_id: product_id
                // }, '*')
            });
        });
    }
    static run() {
        const img =  localStorage.getItem('img');
        const validProducts = products.objects.filter(product => 
            (product.available_platforms.includes("Web") ||
            product.available_platforms.includes("Shopify")) &&
            !toIgnore.ignore.includes(product.available_templates[0])
        )
        if (validProducts.length === 0) {
            console.error('No valid products')
            return;
        }

        $("#productList").html("");
        validProducts.forEach(productJson => {
            const product = new Product(productJson, img);
            $("#productList").append(product.getProductHTML());
        })

        window.ignoring = []
        $(".product-cover-image-container").click(function(){
            const t = $(this).attr('data-template');

            ignoring.push(t);
            console.log(ignoring);
        })
    }
}

module.exports = Selection;