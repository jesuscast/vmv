const rawCreds = {
    test: {
        paypalHost: 'api.sandbox.paypal.com',
        paypalClientId: 'AcEcBRDxqcCKiikjm05FyD4Sfi4pkNP98AYN67sr3_yZdBe23xEk0qhdhZLM',
        pubKey: 'pk_test_6700fc5332e3d7460dc24b04f5ad77b4d74a96da',
    },
    prod: {
        paypalHost: 'api.paypal.com',
        paypalClientId: 'ASYVBBCHF_KwVUstugKy4qvpQaPlUeE_5beKRJHpIP2d3SA_jZrsaUDTmLQY',
        pubKey: '',
    },
};
const env = 'test';
const creds = rawCreds[env];

const ctrl = {};

window.$scope = {
    templateId: "aa_mens_tshirt",
    variant: "black",
    userImageUrl: "https://s3.amazonaws.com/kiteshopify/1f65b7b0-ed5e-46f6-8e2c-e3a6dce124a1.png",
    colorOverlay: "=",
    scale: 1.0,
    flipHorizontal: false,
    rotationDegrees: 0,
    frozen: false,

    // translateX, translateY are values in the product print image coord system
    // NOT the canvas coord system.
    translateX: 0,
    translateY: 0,
}

let windowParams = new URLSearchParams(location.search);
if (windowParams.get("img")) {
    $scope.userImageUrl = windowParams.get("img")
}

const products = [
    "magnets",
    "squares",
    "squares_mini",
    "polaroids",
    "polaroids_mini",
    "photos_4x6",
    "stickers_square",
    "stickers_circle",
    "greeting_cards",
    ["frames_50cm", "frames_50cm_2x2", "frames_50cm_3x3", "frames_50cm_4x4"],
    ["a1_poster", "a1_poster_35", "a1_poster_54", "a1_poster_70"],
    ["a2_poster", "a2_poster_24", "a2_poster_35", "a2_poster_54"],
    "a3_poster",
    "i6splus_case",
    "i6splus_tough_case",
    "i6plus_case",
    "i6plus_tough_case",
    "i6s_case",
    "i6s_tough_case",
    "i6_case",
    "i6_tough_case",
    "i5_case",
    "i5_tough_case",
    "i5c_case",
    "i5c_tough_case",
    "i4_case",
    "i4_tough_case",
    "ipad_mini_case",
    "ipad_air_case",
    "ipad_case",
    "samsung_s7e_case",
    "samsung_s7_case",
    "samsung_s6e_case",
    "samsung_s6_case",
    "samsung_s5_case",
    "samsung_s5_mini_case",
    "samsung_s4_case",
    "samsung_s4_mini_case",
    "samsung_s3_case",
    "samsung_s3_mini_case",
    "samsung_n4_case",
    "samsung_n3_case",
    "sony_x_z1_case",
    "sony_x_c_case",
    "lg_g2_case",
    "nexus_7_case",
    "nexus_5_case",
    "suede_12x12_cushion",
    "suede_18x18_cushion",
    "canvas_12x12_cushion",
    "canvas_18x18_cushion",
    "linen_12x12_cushion",
    "linen_18x18_cushion",
    "towel_55x105",
    "towel_75x145",
    "towel_85x165",
    "mug_11oz",
    "tote_bag_43x43cm",
    "magnet_frame_10x10",
    "aa_mens_tshirt",
    "aa_womens_tshirt",
    "aa_zip_hoodie",
    "aa_fleece_pullover_hoodie",
    "aa_fine_zip_hoodie",
    "aa_tank_top",
    "awd_hooded_sweatshirt",
    "awd_ladies_tank_top",
    "awd_mens_muscle_vest",
    "gildan_adult_cotton_tshirt",
    "gildan_dry_blend_sweatshirt",
    "gildan_zip_hooded_sweatshirt",
    "gildan_hooded_sweatshirt",
    "gildan_heavy_blend_sweatshirt",
    "gildan_tank_top",
    "awd_sublimation_tshirt",
    "awd_kids_sublimation_tshirt",
    "roly_sublimation_tshirt",
    "aa_sublimation_tshirt",
    "aa_sublimation_vest",
    "photobook_wrap_21x21_square",
    "photobook_wrap_a4_portrait",
    "photobook_wrap_a4_landscape",
    "photobook_wrap_30x30_square",
    "postcard",
    "greeting_cards_a5",
    "greeting_cards_7x5",
    "greeting_cards_a5_10pack",
    "greeting_cards_7x5_10pack",
    "square_invitations_15x15cm",
    "square_invitations_15x15cm_10pack"
]


function getPrices(template_id, country_code, shipping_country_code) {
    const body = {
        "basket":[
           {
              "country_code":"USA",
              "job_id":-1,
              "quantity":1,
              "template_id":"i6splus_case"
           }
        ],
        "pay_in_store":0,
        "payment_gateway":"PAYPAL",
        "promo_code":"",
        "ship_to_store":0,
        "shipping_country_code":"US"
     };
    fetch('https://api.kite.ly/v3.0/price/')
}