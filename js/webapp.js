window.KiteWebAppSdk = KiteWebAppSdk.KiteWebAppSdk;
KiteWebAppSdk.launchWithItemsAndImages({
    baseUrl: 'http://localhost:8080/webapp.html',
    collectorImages: [{
        dimensions: {
            width: 100,
            height: 150,
        },
        id: 'imageId',
        isUploadComplete: true,
        thumbnailUrl: 'imageThumbnailUrl',
        url: 'imageUrl',
    }],
    lineItems: {
        images: {
            filters: null,
            mirror: false,
            rotate_degrees: 0,
            scale: 1,
            tx: 0,
            ty: 0,
            url_full: 'image1Url',
            url_preview: 'image1Preview'
        },
        templateId: 'kiteTemplateId',
        variantName: 'variantName',
    },
});