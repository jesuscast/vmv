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
        ).map(product => {
            if (product.product_tags.length > 0) {
                product.tag = product.product_tags[0];
            } else {
                product.tag = "Other";
            }
            return product;
        });
        if (validProducts.length === 0) {
            console.error('No valid products')
            return;
        }

        const organizedProducts = _.groupBy(validProducts, 'tag');

        console.log(organizedProducts);

        let categories = [
            "Apparel",
            "Phone & Tablet Cases",
            "Post & Greeting Cards",
            "Wall Art & Posters",
            "Homeware",
            "Other",
        ]

        $("#productList").html("");
        $("#products-menu").html(Product.getProductsMenuHTML(categories))
        categories.forEach(category => {
            organizedProducts[category].forEach((productJson, i) => {
                const product = new Product(productJson, img, category, i === 0);
                $("#productList").append(product.getProductHTML());
            })
        })

        $(".menu-item").click(function(e) {
            $(".menu-item").removeClass("selected");
            $(this).addClass("selected");
        })

        $(".kite-spinner").hide();
    
        $(".kite-card-product .btn-customise").click(function(){
            const template = $(this).attr('data-template');
            const variant = $(this).attr('data-variant');

            localStorage.setItem('template', template);
            localStorage.setItem('variant', variant);
            document.location.href = document.location.href.replace('selection.html', 'editor.html');
        })
    }
}

module.exports = Selection;