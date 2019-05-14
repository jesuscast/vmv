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
                    var aimage = angular.element(image);
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