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
        console.log(this.product)
        return {
            "options": {
                // TODO: Collect and send the actual size here
                "garment_size": this.product.size,
                "garment_color": this.product.variant
            },
            "assets": {
                "center_chest": this.product.toImg(true)
            },
            "template_id": this.product.product_id
        }
    }

    posters() {
        const URL = this.product.toImg(false);
        return {
            "assets":{
                "back_image": URL,
                "front_image": URL,
                "inside_left_image": URL,
                "inside_right_image": URL
            },
            "template_id": this.product.product_id
        }
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