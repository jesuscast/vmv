class Job {
    constructor(product) {
        this.product = product;
    }

    default() {
        return {
            "assets": [this.product.toImg(true)],
            "template_id": this.product.product_id
        }
    }

    apparel() {
        return {
            "options": {
                // TODO: Collect and send the actual size here
                "garment_size": "M",
                "garment_color": this.product.variant
            },
            "assets": {
                "center_chest": 'https://s3.amazonaws.com/kiteshopify/02dc6018-f4cb-4734-a323-24c358132113.png' //this.product.toImg(true)
            },
            "template_id": this.product.product_id
        }
    }

    posters() {
        return this.default();
    }

    wallart() {
        return this.default();
    }

    homeware() {
        return this.default();
    }

    other() {
        return this.default();
    }
    cases() {
        return this.default();
    }

    toDict() {
        const funcMappings = {
            "apparel": this.apparel,
            "phone_tablet_cases": this.cases,
            "post_greeting_cards": this.posters,
            "wall_art_posters": this.wallart,
            "homeware": this.homeware,
            "other": this.other,
        }
        if (!funcMappings[this.product.category]) {
            console.log(`${this.product.category} not available as a category`);
            return {};
        }
        return funcMappings[this.product.category].bind(this)();
    }
}

module.exports = Job;