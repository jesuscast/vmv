
/**
 * Created by dbotha on 21/06/16.
 */

// angular.module("kite-shopify")
//     .factory("productImage", ["$q", "$http", "IMAGE_GENERATOR_ENDPOINT", "imagePreloader",
//             function($q, $http, IMAGE_GENERATOR_ENDPOINT, imagePreloader) {

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
            return $http({
                method: "GET",
                url: IMAGE_GENERATOR_ENDPOINT + "/product/" + templateId,
                cache: true,
            }).then(function success(response) {
                var product = response.data;

                // preload all images so they're ready to be used
                function imageURL(path) {
                    return IMAGE_GENERATOR_ENDPOINT + "/" + path;
                }

                var imageVariant = null;
                for (var i = 0; i < product.images.length; ++i) {
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

                return imagePreloader.load(imagesToLoad).then(function success(images) {
                    if (imageVariant.background) {
                        imageVariant.background = images[imageURL(imageVariant.background)];
                    }

                    if (imageVariant.foreground) {
                        imageVariant.foreground.image =
                            images[imageURL(imageVariant.foreground.image)];
                    }

                    for (var i = 0; i < imageVariant.masks.length; ++i) {
                        imageVariant.masks[i].mask =
                            images[imageURL(imageVariant.masks[i].mask)];
                    }

                    return resolve(imageVariant);
                });
            });
        });
    }
}