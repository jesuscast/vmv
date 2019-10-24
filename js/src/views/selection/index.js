const Product = require('../../models/product');
const products = require('./products.json');
const toIgnore = require('./toignore.json');
const {countriesRaw, country_to_region_mapping} = require('../../constants');
const products_prices = require('./products_prices.json');

let country = null;

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
    static loadProductCountries() {
        const countries = Object.keys(countriesRaw).map(key => countriesRaw[key]);
        country = countries[0][2];
        console.log(`[country] ${JSON.stringify(countries)}`);
        $("#shipping_country_select").html(`
        <select id="shipping_country_select">
            ${countries.map(country => `<option value="${country[2]}">${country[0]}</option>`)}
        </select>
        `);
        $("#shipping_country_select").on("change", function(val) {
            const value = $("#shipping_country_select").val();
            console.log(`[country] ${value}`);
            country = value;
            Selection.loadItemsIntoSelection()
        });
    }

    static loadItemsIntoSelection(productsToLoad) {
        const img =  localStorage.getItem('img');

        let validProducts = [];
        if (productsToLoad) {
            validProducts = productsToLoad;
        } else {
            validProducts = products.objects.filter(product => 
                (product.available_platforms.includes("Web") ||
                product.available_platforms.includes("Shopify")) &&
                !toIgnore.ignore.includes(product.available_templates[0])
            ).map(product => {
                const products_price = _.find(products_prices.objects, p => p.template_id === product.available_templates[0]);
                if (!products_price) {
                    console.log('[region] not found')
                } else {
                    const region = products_price.country_to_region_mapping[country];
                    console.log(`[region] ${region} [country] ${country}`);
                    if (!products_price.shipping_regions[region]) {
                        console.log(`[region] ${product.available_templates[0]} not available in region ${region} country ${country}`);
                        return null;
                    }
                }
                if (product.product_tags.length > 0) {
                    product.tag = product.product_tags[0];
                } else {
                    product.tag = "Other";
                }
                return Product.fromJSON(product, img)
            }).filter(v => v !== null);
        }
        if (validProducts.length === 0) {
            console.log('No valid products')
            return;
        }

        const organizedProducts = _.groupBy(validProducts, product => product.category);
        console.log(organizedProducts);
        let categories = [
            "Apparel",
            "Phone & Tablet Cases",
            "Post & Greeting Cards",
            "Wall Art & Posters",
            "Homeware",
            "Other",
        ].map(category => Product.categoryID(category))

        $("#productList").html("");
        $("#products-menu").html(Product.getProductsMenuHTML(categories))
        categories.forEach(category => {
            if (!organizedProducts[category]) {
                return;
            }
            organizedProducts[category] = organizedProducts[category].filter(product => product.prices !== 'n/a')
            organizedProducts[category].forEach((product, i) => {
                $("#productList").append(product.getProductHTML(i === 0));
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
            const category = $(this).attr('data-category');
            console.log(category);
            localStorage.setItem('template', template);
            localStorage.setItem('variant', variant);
            localStorage.setItem('category', category);
            document.location.href = document.location.href.replace('selection.html', 'editor.html');
        })
    }
    static run() {
        Selection.loadProductCountries()
        Selection.loadItemsIntoSelection()
    }
}

module.exports = Selection;