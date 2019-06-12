(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var constants = require('./src/constants');

var _require = require('./src/views'),
    runView = _require.runView;

window.env = constants.env;
window.runView = runView;

},{"./src/constants":2,"./src/views":12}],2:[function(require,module,exports){
"use strict";

var CORSURL = "https://cors-anywhere.herokuapp.com/";
var CLEAN_IMAGE_ENDPOINT = "https://image.kite.ly";
var rawCreds = {
  test: {
    paypalHost: 'api.sandbox.paypal.com',
    paypalClientId: 'AcEcBRDxqcCKiikjm05FyD4Sfi4pkNP98AYN67sr3_yZdBe23xEk0qhdhZLM',
    pubKey: 'pk_test_6700fc5332e3d7460dc24b04f5ad77b4d74a96da'
  },
  prod: {
    paypalHost: 'api.paypal.com',
    paypalClientId: 'ASYVBBCHF_KwVUstugKy4qvpQaPlUeE_5beKRJHpIP2d3SA_jZrsaUDTmLQY',
    pubKey: ''
  }
};
var sampleTransaction = {
  "create_time": "2019-06-06T00:19:46Z",
  "update_time": "2019-06-06T00:19:46Z",
  "id": "8B2968046V6357949",
  "intent": "CAPTURE",
  "status": "COMPLETED",
  "payer": {
    "email_address": "jesus.cast.sosa@gmail.com",
    "payer_id": "S2V2YVZ7LR9Q6",
    "address": {
      "country_code": "US"
    },
    "name": {
      "given_name": "Jesus",
      "surname": "Castaneda"
    }
  },
  "purchase_units": [{
    "reference_id": "default",
    "soft_descriptor": "PAYPAL *CHARLIECARP",
    "amount": {
      "value": "1.00",
      "currency_code": "USD"
    },
    "payee": {
      "email_address": "sandbox-merchant@kite.ly",
      "merchant_id": "D5JH5T7M8JMBU"
    },
    "shipping": {
      "name": {
        "full_name": "Jesus Castaneda"
      },
      "address": {
        "address_line_1": "33 8th St",
        "address_line_2": "701",
        "admin_area_2": "San Francisco",
        "admin_area_1": "CA",
        "postal_code": "94103",
        "country_code": "US"
      }
    },
    "payments": {
      "captures": [{
        "status": "PENDING",
        "id": "5YW653669E606423P",
        "final_capture": true,
        "create_time": "2019-06-06T00:19:46Z",
        "update_time": "2019-06-06T00:19:46Z",
        "amount": {
          "value": "1.00",
          "currency_code": "USD"
        },
        "seller_protection": {
          "status": "ELIGIBLE",
          "dispute_categories": ["ITEM_NOT_RECEIVED", "UNAUTHORIZED_TRANSACTION"]
        },
        "status_details": {
          "reason": "RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION"
        },
        "links": [{
          "href": "https://api.sandbox.paypal.com/v2/payments/captures/5YW653669E606423P",
          "rel": "self",
          "method": "GET",
          "title": "GET"
        }, {
          "href": "https://api.sandbox.paypal.com/v2/payments/captures/5YW653669E606423P/refund",
          "rel": "refund",
          "method": "POST",
          "title": "POST"
        }, {
          "href": "https://api.sandbox.paypal.com/v2/checkout/orders/8B2968046V6357949",
          "rel": "up",
          "method": "GET",
          "title": "GET"
        }]
      }]
    }
  }],
  "links": [{
    "href": "https://api.sandbox.paypal.com/v2/checkout/orders/8B2968046V6357949",
    "rel": "self",
    "method": "GET",
    "title": "GET"
  }]
};
var env = 'test';
var creds = rawCreds[env];
var ctrl = {
  loading: false,
  dragging: false,
  side: "front",
  imageGeneratorEndpoint: CLEAN_IMAGE_ENDPOINT
};
var $scope = {
  templateId: "aa_mens_tshirt",
  variant: null,
  userImageUrl: "https://s3.amazonaws.com/kiteshopify/1f65b7b0-ed5e-46f6-8e2c-e3a6dce124a1.png",
  colorOverlay: "#000000",
  scale: 1.0,
  flipHorizontal: false,
  rotationDegrees: 0,
  frozen: false,
  // translateX, translateY are values in the product print image coord system
  // NOT the canvas coord system.
  translateX: 0,
  translateY: 0
};
var windowParams = new URLSearchParams(location.search);

if (windowParams.get("img")) {
  $scope.userImageUrl = windowParams.get("img");
}

var products = ["magnets", "squares", "squares_mini", "polaroids", "polaroids_mini", "photos_4x6", "stickers_square", "stickers_circle", "greeting_cards", ["frames_50cm", "frames_50cm_2x2", "frames_50cm_3x3", "frames_50cm_4x4"], ["a1_poster", "a1_poster_35", "a1_poster_54", "a1_poster_70"], ["a2_poster", "a2_poster_24", "a2_poster_35", "a2_poster_54"], "a3_poster", "i6splus_case", "i6splus_tough_case", "i6plus_case", "i6plus_tough_case", "i6s_case", "i6s_tough_case", "i6_case", "i6_tough_case", "i5_case", "i5_tough_case", "i5c_case", "i5c_tough_case", "i4_case", "i4_tough_case", "ipad_mini_case", "ipad_air_case", "ipad_case", "samsung_s7e_case", "samsung_s7_case", "samsung_s6e_case", "samsung_s6_case", "samsung_s5_case", "samsung_s5_mini_case", "samsung_s4_case", "samsung_s4_mini_case", "samsung_s3_case", "samsung_s3_mini_case", "samsung_n4_case", "samsung_n3_case", "sony_x_z1_case", "sony_x_c_case", "lg_g2_case", "nexus_7_case", "nexus_5_case", "suede_12x12_cushion", "suede_18x18_cushion", "canvas_12x12_cushion", "canvas_18x18_cushion", "linen_12x12_cushion", "linen_18x18_cushion", "towel_55x105", "towel_75x145", "towel_85x165", "mug_11oz", "tote_bag_43x43cm", "magnet_frame_10x10", "aa_mens_tshirt", "aa_womens_tshirt", "aa_zip_hoodie", "aa_fleece_pullover_hoodie", "aa_fine_zip_hoodie", "aa_tank_top", "awd_hooded_sweatshirt", "awd_ladies_tank_top", "awd_mens_muscle_vest", "gildan_adult_cotton_tshirt", "gildan_dry_blend_sweatshirt", "gildan_zip_hooded_sweatshirt", "gildan_hooded_sweatshirt", "gildan_heavy_blend_sweatshirt", "gildan_tank_top", "awd_sublimation_tshirt", "awd_kids_sublimation_tshirt", "roly_sublimation_tshirt", "aa_sublimation_tshirt", "aa_sublimation_vest", "photobook_wrap_21x21_square", "photobook_wrap_a4_portrait", "photobook_wrap_a4_landscape", "photobook_wrap_30x30_square", "postcard", "greeting_cards_a5", "greeting_cards_7x5", "greeting_cards_a5_10pack", "greeting_cards_7x5_10pack", "square_invitations_15x15cm", "square_invitations_15x15cm_10pack"]; // Country name, iso2, iso3, iso3 currency, is in europe.

var countriesRaw = {
  ALAND_ISLANDS: ["Åland Islands", "AX", "ALA", "EUR", true],
  AFGHANISTAN: ["Afghanistan", "AF", "AFG", "AFN", false],
  ALBANIA: ["Albania", "AL", "ALB", "ALL", true],
  ALGERIA: ["Algeria", "DZ", "DZA", "DZD", false],
  AMERICAN_SAMOA: ["American Samoa", "AS", "ASM", "USD", false],
  ANDORRA: ["Andorra", "AD", "AND", "EUR", true],
  ANGOLA: ["Angola", "AO", "AGO", "AOA", false],
  ANGUILLA: ["Anguilla", "AI", "AIA", "XCD", false],
  ANTIGUA_AND_BARBUDA: ["Antigua and Barbuda", "AG", "ATG", "XCD", false],
  ARGENTINA: ["Argentina", "AR", "ARG", "ARS", false],
  ARMENIA: ["Armenia", "AM", "ARM", "AMD", false],
  ARUBA: ["Aruba", "AW", "ABW", "AWG", false],
  AUSTRALIA: ["Australia", "AU", "AUS", "AUD", false],
  AUSTRIA: ["Austria", "AT", "AUT", "EUR", true],
  AZERBAIJAN: ["Azerbaijan", "AZ", "AZE", "AZN", false],
  BAHAMAS: ["Bahamas", "BS", "BHS", "BSD", false],
  BAHRAIN: ["Bahrain", "BH", "BHR", "BHD", false],
  BANGLADESH: ["Bangladesh", "BD", "BGD", "BDT", false],
  BARBADOS: ["Barbados", "BB", "BRB", "BBD", false],
  BELARUS: ["Belarus", "BY", "BLR", "BYR", true],
  BELGIUM: ["Belgium", "BE", "BEL", "EUR", true],
  BELIZE: ["Belize", "BZ", "BLZ", "BZD", false],
  BENIN: ["Benin", "BJ", "BEN", "XOF", false],
  BERMUDA: ["Bermuda", "BM", "BMU", "BMD", false],
  BHUTAN: ["Bhutan", "BT", "BTN", "INR", false],
  BOLIVIA: ["Bolivia, Plurinational State of", "BO", "BOL", "BOB", false],
  BONAIRE: ["Bonaire, Sint Eustatius and Saba", "BQ", "BES", "USD", false],
  BOSNIA_AND_HERZEGOVINA: ["Bosnia and Herzegovina", "BA", "BIH", "BAM", true],
  BOTSWANA: ["Botswana", "BW", "BWA", "BWP", false],
  BOUVET_ISLAND: ["Bouvet Island", "BV", "BVT", "NOK", false],
  BRAZIL: ["Brazil", "BR", "BRA", "BRL", false],
  BRITISH_INDIAN_OCEAN_TERRITORY: ["British Indian Ocean Territory", "IO", "IOT", "USD", false],
  BRUNEI_DARUSSALAM: ["Brunei Darussalam", "BN", "BRN", "BND", false],
  BULGARIA: ["Bulgaria", "BG", "BGR", "BGN", true],
  BURKINA_FASO: ["Burkina Faso", "BF", "BFA", "XOF", false],
  BURUNDI: ["Burundi", "BI", "BDI", "BIF", false],
  CAMBODIA: ["Cambodia", "KH", "KHM", "KHR", false],
  CAMEROON: ["Cameroon", "CM", "CMR", "XAF", false],
  CANADA: ["Canada", "CA", "CAN", "CAD", false],
  CAPE_VERDE: ["Cape Verde", "CV", "CPV", "CVE", false],
  CAYMAN_ISLANDS: ["Cayman Islands", "KY", "CYM", "KYD", false],
  CENTRAL_AFRICAN_REPUBLIC: ["Central African Republic", "CF", "CAF", "XAF", false],
  CHAD: ["Chad", "TD", "TCD", "XAF", false],
  CHILE: ["Chile", "CL", "CHL", "CLP", false],
  CHINA: ["China", "CN", "CHN", "CNY", false],
  CHRISTMAS_ISLANDS: ["Christmas Island", "CX", "CXR", "AUD", false],
  COCOS_ISLANDS: ["Cocos (Keeling) Islands", "CC", "CCK", "AUD", false],
  COLOMBIA: ["Colombia", "CO", "COL", "COP", false],
  COMOROS: ["Comoros", "KM", "COM", "KMF", false],
  CONGO: ["Congo", "CG", "COG", "XAF", false],
  DEMOCRATIC_REPUBLIC_OF_CONGO: ["Congo, the Democratic Republic of the", "CD", "COD", "CDF", false],
  COOK_ISLANDS: ["Cook Islands", "CK", "COK", "NZD", false],
  COSTA_RICA: ["Costa Rica", "CR", "CRI", "CRC", false],
  CROATIA: ["Croatia", "HR", "HRV", "HRK", true],
  CUBA: ["Cuba", "CU", "CUB", "CUP", false],
  CURACAO: ["Curaçao", "CW", "CUW", "ANG", false],
  CYPRUS: ["Cyprus", "CY", "CYP", "EUR", false],
  CZECH_REPUBLIC: ["Czech Republic", "CZ", "CZE", "CZK", true],
  IVORY_COAST: ["Côte d'Ivoire", "CI", "CIV", "XOF", false],
  DENMARK: ["Denmark", "DK", "DNK", "DKK", true],
  DJIBOUTI: ["Djibouti", "DJ", "DJI", "DJF", false],
  DOMINICA: ["Dominica", "DM", "DMA", "XCD", false],
  DOMINICAN_REPUBLIC: ["Dominican Republic", "DO", "DOM", "DOP", false],
  ECUADOR: ["Ecuador", "EC", "ECU", "USD", false],
  EGYPT: ["Egypt", "EG", "EGY", "EGP", false],
  EL_SALVADOR: ["El Salvador", "SV", "SLV", "USD", false],
  EQUATORIAL_GUINEA: ["Equatorial Guinea", "GQ", "GNQ", "XAF", false],
  ERITREA: ["Eritrea", "ER", "ERI", "ERN", false],
  ESTONIA: ["Estonia", "EE", "EST", "EUR", true],
  ETHIOPIA: ["Ethiopia", "ET", "ETH", "ETB", false],
  FALKLAND_ISLANDS: ["Falkland Islands (Malvinas)", "FK", "FLK", "FKP", false],
  FAROE_ISLANDS: ["Faroe Islands", "FO", "FRO", "DKK", true],
  FIJI: ["Fiji", "FJ", "FJI", "FJD", false],
  FINLAND: ["Finland", "FI", "FIN", "EUR", true],
  FRANCE: ["France", "FR", "FRA", "EUR", true],
  FRENCH_GUIANA: ["French Guiana", "GF", "GUF", "EUR", false],
  FRENCH_POLYNESIA: ["French Polynesia", "PF", "PYF", "XPF", false],
  FRENCH_SOUTHERN_TERRITORIES: ["French Southern Territories", "TF", "ATF", "EUR", false],
  GABON: ["Gabon", "GA", "GAB", "XAF", false],
  GAMBIA: ["Gambia", "GM", "GMB", "GMD", false],
  GEORGIA: ["Georgia", "GE", "GEO", "GEL", false],
  GERMANY: ["Germany", "DE", "DEU", "EUR", true],
  GHANA: ["Ghana", "GH", "GHA", "GHS", false],
  GIBRALTAR: ["Gibraltar", "GI", "GIB", "GIP", true],
  GREECE: ["Greece", "GR", "GRC", "EUR", true],
  GREENLAND: ["Greenland", "GL", "GRL", "DKK", false],
  GRENEDA: ["Grenada", "GD", "GRD", "XCD", false],
  GUADELOUPE: ["Guadeloupe", "GP", "GLP", "EUR", false],
  GUAM: ["Guam", "GU", "GUM", "USD", false],
  GUATEMALA: ["Guatemala", "GT", "GTM", "GTQ", false],
  GUERNSEY: ["Guernsey", "GG", "GGY", "GBP", true],
  GUINEA: ["Guinea", "GN", "GIN", "GNF", false],
  GUINEA_BISSAU: ["Guinea-Bissau", "GW", "GNB", "XOF", false],
  GUYANA: ["Guyana", "GY", "GUY", "GYD", false],
  HAITI: ["Haiti", "HT", "HTI", "USD", false],
  HEARD_ISLAND_AND_MCDONALD_ISLANDS: ["Heard Island and Mcdonald Islands", "HM", "HMD", "AUD", false],
  HOLY_SEE: ["Holy See (Vatican City State)", "VA", "VAT", "EUR", true],
  HONDURAS: ["Honduras", "HN", "HND", "HNL", false],
  HONG_KONG: ["Hong Kong", "HK", "HKG", "HKD", false],
  HUNGARY: ["Hungary", "HU", "HUN", "HUF", true],
  ICELAND: ["Iceland", "IS", "ISL", "ISK", true],
  INDIA: ["India", "IN", "IND", "INR", false],
  INDONESIA: ["Indonesia", "ID", "IDN", "IDR", false],
  IRAN: ["Iran, Islamic Republic of", "IR", "IRN", "IRR", false],
  IRAQ: ["Iraq", "IQ", "IRQ", "IQD", false],
  IRELAND: ["Ireland", "IE", "IRL", "EUR", true],
  ISLE_OF_MAN: ["Isle of Man", "IM", "IMN", "GBP", true],
  ISRAEL: ["Israel", "IL", "ISR", "ILS", false],
  ITALY: ["Italy", "IT", "ITA", "EUR", true],
  JAMAICA: ["Jamaica", "JM", "JAM", "JMD", false],
  JAPAN: ["Japan", "JP", "JPN", "JPY", false],
  JERSEY: ["Jersey", "JE", "JEY", "GBP", true],
  JORDAN: ["Jordan", "JO", "JOR", "JOD", false],
  KAZAKHSTAN: ["Kazakhstan", "KZ", "KAZ", "KZT", false],
  KENYA: ["Kenya", "KE", "KEN", "KES", false],
  KIRIBATI: ["Kiribati", "KI", "KIR", "AUD", false],
  NORTH_KOREA: ["Korea, Democratic People's Republic of", "KP", "PRK", "KPW", false],
  SOUTH_KOREA: ["Korea, Republic of", "KR", "KOR", "KRW", false],
  KUWAIT: ["Kuwait", "KW", "KWT", "KWD", false],
  KYRGYZSTAN: ["Kyrgyzstan", "KG", "KGZ", "KGS", false],
  LAO: ["Lao People's Democratic Republic", "LA", "LAO", "LAK", false],
  LATVIA: ["Latvia", "LV", "LVA", "LVL", true],
  LEBANON: ["Lebanon", "LB", "LBN", "LBP", false],
  LESOTHO: ["Lesotho", "LS", "LSO", "ZAR", false],
  LIBERIA: ["Liberia", "LR", "LBR", "LRD", false],
  LIBYA: ["Libya", "LY", "LBY", "LYD", false],
  LIECHTENSTEIN: ["Liechtenstein", "LI", "LIE", "CHF", true],
  LITHUANIA: ["Lithuania", "LT", "LTU", "LTL", true],
  LUXEMBOURG: ["Luxembourg", "LU", "LUX", "EUR", true],
  MACAO: ["Macao", "MO", "MAC", "MOP", false],
  FYR_MACEDONIA: ["Macedonia, the Former Yugoslav Republic of", "MK", "MKD", "MKD", true],
  MADAGASCAR: ["Madagascar", "MG", "MDG", "MGA", false],
  MALAWI: ["Malawi", "MW", "MWI", "MWK", false],
  MALAYSIA: ["Malaysia", "MY", "MYS", "MYR", false],
  MALDIVES: ["Maldives", "MV", "MDV", "MVR", false],
  MALI: ["Mali", "ML", "MLI", "XOF", false],
  MALTA: ["Malta", "MT", "MLT", "EUR", true],
  MARSHALL_ISLANDS: ["Marshall Islands", "MH", "MHL", "USD", false],
  MARTINIQUE: ["Martinique", "MQ", "MTQ", "EUR", false],
  MAURITANIA: ["Mauritania", "MR", "MRT", "MRO", false],
  MAURITIUS: ["Mauritius", "MU", "MUS", "MUR", false],
  MAYOTTE: ["Mayotte", "YT", "MYT", "EUR", false],
  MEXICO: ["Mexico", "MX", "MEX", "MXN", false],
  MICRONESIA: ["Micronesia, Federated States of", "FM", "FSM", "USD", false],
  MOLDOVA: ["Moldova, Republic of", "MD", "MDA", "MDL", true],
  MONACO: ["Monaco", "MC", "MCO", "EUR", true],
  MONGOLIA: ["Mongolia", "MN", "MNG", "MNT", false],
  MONTENEGRO: ["Montenegro", "ME", "MNE", "EUR", true],
  MONTSERRAT: ["Montserrat", "MS", "MSR", "XCD", false],
  MOROCCO: ["Morocco", "MA", "MAR", "MAD", false],
  MOZAMBIQUE: ["Mozambique", "MZ", "MOZ", "MZN", false],
  MYANMAR: ["Myanmar", "MM", "MMR", "MMK", false],
  NAMIBIA: ["Namibia", "NA", "NAM", "ZAR", false],
  NAURU: ["Nauru", "NR", "NRU", "AUD", false],
  NEPAL: ["Nepal", "NP", "NPL", "NPR", false],
  NETHERLANDS: ["Netherlands", "NL", "NLD", "EUR", true],
  NEW_CALEDONIA: ["New Caledonia", "NC", "NCL", "XPF", false],
  NEW_ZEALAND: ["New Zealand", "NZ", "NZL", "NZD", false],
  NICARAGUA: ["Nicaragua", "NI", "NIC", "NIO", false],
  NIGER: ["Niger", "NE", "NER", "XOF", false],
  NIGERIA: ["Nigeria", "NG", "NGA", "NGN", false],
  NIUE: ["Niue", "NU", "NIU", "NZD", false],
  NORFOLK_ISLAND: ["Norfolk Island", "NF", "NFK", "AUD", false],
  NORTHERN_MARIANA_ISLANDS: ["Northern Mariana Islands", "MP", "MNP", "USD", false],
  NORWAY: ["Norway", "NO", "NOR", "NOK", true],
  OMAN: ["Oman", "OM", "OMN", "OMR", false],
  PAKISTAN: ["Pakistan", "PK", "PAK", "PKR", false],
  PALAU: ["Palau", "PW", "PLW", "USD", false],
  PANAMA: ["Panama", "PA", "PAN", "USD", false],
  PAPUA_NEW_GUINEA: ["Papua New Guinea", "PG", "PNG", "PGK", false],
  PARAGUAY: ["Paraguay", "PY", "PRY", "PYG", false],
  PERU: ["Peru", "PE", "PER", "PEN", false],
  PHILIPPINES: ["Philippines", "PH", "PHL", "PHP", false],
  PITCAIRN: ["Pitcairn", "PN", "PCN", "NZD", false],
  POLAND: ["Poland", "PL", "POL", "PLN", true],
  PORTUGAL: ["Portugal", "PT", "PRT", "EUR", true],
  PUERTO_RICO: ["Puerto Rico", "PR", "PRI", "USD", false],
  QATAR: ["Qatar", "QA", "QAT", "QAR", false],
  ROMANIA: ["Romania", "RO", "ROU", "RON", true],
  RUSSIA: ["Russian Federation", "RU", "RUS", "RUB", true],
  RWANDA: ["Rwanda", "RW", "RWA", "RWF", false],
  REUNION: ["Réunion", "RE", "REU", "EUR", false],
  SAINT_BARTS: ["Saint Barthélemy", "BL", "BLM", "EUR", false],
  SAINT_HELENA: ["Saint Helena, Ascension and Tristan da Cunha", "SH", "SHN", "SHP", false],
  SAINT_KITTS_AND_NEVIS: ["Saint Kitts and Nevis", "KN", "KNA", "XCD", false],
  SAINT_LUCIA: ["Saint Lucia", "LC", "LCA", "XCD", false],
  SAINT_MARTIN: ["Saint Martin (French part)", "MF", "MAF", "EUR", false],
  SAINT_PIERRE_AND_MIQUELON: ["Saint Pierre and Miquelon", "PM", "SPM", "EUR", false],
  SAINT_VINCENT_AND_GRENADINES: ["Saint Vincent and the Grenadines", "VC", "VCT", "XCD", false],
  SAMOA: ["Samoa", "WS", "WSM", "WST", false],
  SAN_MARINO: ["San Marino", "SM", "SMR", "EUR", true],
  SAO_TOME_AND_PRINCIPE: ["Sao Tome and Principe", "ST", "STP", "STD", false],
  SAUDI_ARABIA: ["Saudi Arabia", "SA", "SAU", "SAR", false],
  SENEGAL: ["Senegal", "SN", "SEN", "XOF", false],
  SERBIA: ["Serbia", "RS", "SRB", "RSD", true],
  SEYCHELLES: ["Seychelles", "SC", "SYC", "SCR", false],
  SIERRA_LEONE: ["Sierra Leone", "SL", "SLE", "SLL", false],
  SINGAPORE: ["Singapore", "SG", "SGP", "SGD", false],
  SINT_MAARTEN: ["Sint Maarten (Dutch part)", "SX", "SXM", "ANG", false],
  SLOVAKIA: ["Slovakia", "SK", "SVK", "EUR", true],
  SLOVENIA: ["Slovenia", "SI", "SVN", "EUR", true],
  SOLOMON_ISLANDS: ["Solomon Islands", "SB", "SLB", "SBD", false],
  SOMALIA: ["Somalia", "SO", "SOM", "SOS", false],
  SOUTH_AFRICA: ["South Africa", "ZA", "ZAF", "ZAR", false],
  SOUTH_SUDAN: ["South Sudan", "SS", "SSD", "SSP", false],
  SPAIN: ["Spain", "ES", "ESP", "EUR", true],
  SRI_LANKA: ["Sri Lanka", "LK", "LKA", "LKR", false],
  SUDAN: ["Sudan", "SD", "SDN", "SDG", false],
  SURINAME: ["Suriname", "SR", "SUR", "SRD", false],
  SVALBARD_AND_JAN_MAYEN: ["Svalbard and Jan Mayen", "SJ", "SJM", "NOK", true],
  SWAZILAND: ["Swaziland", "SZ", "SWZ", "SZL", false],
  SWEDEN: ["Sweden", "SE", "SWE", "SEK", true],
  SWITZERLAND: ["Switzerland", "CH", "CHE", "CHF", true],
  SYRIA: ["Syrian Arab Republic", "SY", "SYR", "SYP", false],
  TAIWAN: ["Taiwan", "TW", "TWN", "TWD", false],
  TAJIKISTAN: ["Tajikistan", "TJ", "TJK", "TJS", false],
  TANZANIA: ["Tanzania, United Republic of", "TZ", "TZA", "TZS", false],
  THAILAND: ["Thailand", "TH", "THA", "THB", false],
  TIMOR_LESTE: ["Timor-Leste", "TL", "TLS", "USD", false],
  TOGO: ["Togo", "TG", "TGO", "XOF", false],
  TOKELAU: ["Tokelau", "TK", "TKL", "NZD", false],
  TONGA: ["Tonga", "TO", "TON", "TOP", false],
  TRINIDAD_AND_TOBAGO: ["Trinidad and Tobago", "TT", "TTO", "TTD", false],
  TUNISIA: ["Tunisia", "TN", "TUN", "TND", false],
  TURKEY: ["Turkey", "TR", "TUR", "TRY", false],
  TURKMENISTAN: ["Turkmenistan", "TM", "TKM", "TMT", false],
  TURKS_AND_CAICOS_ISLANDS: ["Turks and Caicos Islands", "TC", "TCA", "USD", false],
  TUVALU: ["Tuvalu", "TV", "TUV", "AUD", false],
  UGANDA: ["Uganda", "UG", "UGA", "UGX", false],
  UKRAINE: ["Ukraine", "UA", "UKR", "UAH", true],
  UAE: ["United Arab Emirates", "AE", "ARE", "AED", false],
  UK: ["United Kingdom", "GB", "GBR", "GBP", true],
  USA: ["United States", "US", "USA", "USD", false],
  USA_MINOR_OUTLYING_ISLANDS: ["United States Minor Outlying Islands", "UM", "UMI", "USD", false],
  URUGUAY: ["Uruguay", "UY", "URY", "UYU", false],
  UZBEKISTAN: ["Uzbekistan", "UZ", "UZB", "UZS", false],
  VANUATU: ["Vanuatu", "VU", "VUT", "VUV", false],
  VENEZUELA: ["Venezuela, Bolivarian Republic of", "VE", "VEN", "VEF", false],
  VIET_NAM: ["Viet Nam", "VN", "VNM", "VND", false],
  BRITISH_VIRGIN_ISLANDS: ["Virgin Islands, British", "VG", "VGB", "USD", false],
  US_VIRGIN_ISLANDS: ["Virgin Islands, U.S.", "VI", "VIR", "USD", false],
  WALLIS_AND_FUTUNA: ["Wallis and Futuna", "WF", "WLF", "XPF", false],
  WESTERN_SAHARA: ["Western Sahara", "EH", "ESH", "MAD", false],
  YEMEN: ["Yemen", "YE", "YEM", "YER", false],
  ZAMBIA: ["Zambia", "ZM", "ZMB", "ZMW", false],
  ZIMBABWE: ["Zimbabwe", "ZW", "ZWE", "ZWL", false]
};
module.exports = {
  creds: creds,
  products: products,
  countriesRaw: countriesRaw,
  sampleTransaction: sampleTransaction,
  CLEAN_IMAGE_ENDPOINT: CLEAN_IMAGE_ENDPOINT,
  CORSURL: CORSURL,
  ctrl: ctrl,
  env: env,
  $scope: $scope
};

},{}],3:[function(require,module,exports){
"use strict";

var _require = require('./constants'),
    ctrl = _require.ctrl,
    $scope = _require.$scope,
    CLEAN_IMAGE_ENDPOINT = _require.CLEAN_IMAGE_ENDPOINT;

var productImage = require('./product_image');

var imagePreloader = require('./image_preloader');

function loading(value) {
  ctrl.loading = value;

  if (value) {
    $("#image-editor-progress-spinner").show();
  } else {
    $("#image-editor-progress-spinner").hide();
  }
}

function drawImage(ctx, img, fitOrFill, x, y, fitWidth, fitHeight, centre, tx, ty, scale, flipHorizontal, rotationDegrees) {
  if (!img) {
    return;
  }

  ctx.save();
  var hRatio = fitWidth / img.width;
  var vRatio = fitHeight / img.height;
  var ratio = fitOrFill == "fit" ? Math.min(hRatio, vRatio) : Math.max(hRatio, vRatio);
  var w = img.width * ratio * scale;
  var h = img.height * ratio * scale;
  var xoff = Math.round(x + tx + (centre ? (fitWidth - w) / 2 : 0));
  var yoff = Math.round(y + ty + (centre ? (fitHeight - h) / 2 : 0));
  ctx.translate(xoff + w / 2, yoff + h / 2); // Set the origin to the center of the image

  if (flipHorizontal) {
    ctx.scale(-1, 1);
  }

  ctx.rotate(rotationDegrees * (Math.PI / 180));
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.restore();
}

function getScaledEnclosingQuad(canvas, mask) {
  var hRatio = canvas.width / mask.mask.width;
  var vRatio = canvas.height / mask.mask.height;
  var scale = Math.min(hRatio, vRatio);
  var q = mask.enclosing_quadrilateral; // flip coord system too as pillow in python is opposite to html5 canvas

  var xoff = (canvas.width - mask.mask.width * scale) / 2;
  var yoff = (canvas.height - mask.mask.height * scale) / 2;
  var quad = {
    bottom_left: [xoff + q.top_left[0] * scale, yoff + q.top_left[1] * scale],
    bottom_right: [xoff + q.top_right[0] * scale, yoff + q.top_right[1] * scale],
    top_left: [xoff + q.bottom_left[0] * scale, yoff + q.bottom_left[1] * scale],
    top_right: [xoff + q.bottom_right[0] * scale, yoff + q.bottom_right[1] * scale]
  };
  quad.width = Math.abs(quad.bottom_right[0] - quad.top_left[0]);
  quad.height = Math.abs(quad.bottom_right[1] - quad.top_left[1]);
  return quad;
}

function toCanvasCoordinateSystem(coord) {
  var quad = getScaledEnclosingQuad(canvas, layerComponents.masks[0]);
  var scale = quad.width / layerComponents.asset_size.width;
  return Math.round(scale * coord);
}

function render() {
  if (!ctrl.loading && window.layerComponents) {
    if (canvas.width == 0 || canvas.height == 0) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight; // $timeout(render, 20); // try again shortly when hopefully

      setTimeout(render, 20); // ng-hide/display:none is removed

      return;
    }

    var w = canvas.width;
    var h = canvas.height;
    btx.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);

    if (userImage) {
      for (var i = 0; i < layerComponents.masks.length; ++i) {
        var mask = layerComponents.masks[i];
        drawImage(ctx, mask.mask, "fit", 0, 0, w, h, true, 0, 0, 1, false, 0);
        ctx.globalCompositeOperation = "source-in";
        var quad = getScaledEnclosingQuad(canvas, mask);
        var tx = toCanvasCoordinateSystem($scope.translateX);
        var ty = toCanvasCoordinateSystem($scope.translateY);
        drawImage(ctx, userImage, "fill", quad.top_left[0], quad.top_left[1], quad.width, quad.height, true, tx, ty, parseFloat($scope.scale), $scope.flipHorizontal, -parseInt($scope.rotationDegrees));

        if (layerComponents.masks.length > 1) {
          ctx.globalCompositeOperation = "source-over";
        } // draw enclosing quad
        // if ($scope.templateId.indexOf("mug") >= 0) {


        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "#7879ec";
        ctx.beginPath();
        ctx.moveTo(quad.bottom_left[0], quad.bottom_left[1]);
        ctx.lineTo(quad.bottom_right[0], quad.bottom_right[1]);
        ctx.lineTo(quad.top_right[0], quad.top_right[1]);
        ctx.lineTo(quad.top_left[0], quad.top_left[1]);
        ctx.closePath();
        ctx.strokeWidth = 8;
        ctx.stroke(); // }
      }
    }

    ctx.globalCompositeOperation = "source-over";

    if (layerComponents.foreground) {
      if (layerComponents.foreground.blend_mode == "multiply") {
        ctx.globalCompositeOperation = "multiply";
        drawImage(ctx, layerComponents.foreground.image, "fit", 0, 0, w, h, true, 0, 0, 1, false, 0);
        ctx.globalCompositeOperation = "source-over";
      } else {
        drawImage(ctx, layerComponents.foreground.image, "fit", 0, 0, w, h, true, 0, 0, 1, false, 0);
      }
    }

    btx.globalCompositeOperation = "source-over";
    drawImage(btx, layerComponents.background, "fit", 0, 0, w, h, true, 0, 0, 1, false, 0); // if (layerComponents.color_overlay) {
    //     btx.globalCompositeOperation="source-in";
    //     btx.fillStyle= $scope.colorOverlay;
    //     btx.fillRect(0, 0, w, h);
    // };

    btx.globalCompositeOperation = "source-in";
    btx.fillStyle = $scope.colorOverlay;
    btx.fillRect(0, 0, w, h);

    if ($scope.variant !== null) {
      var modifiedImageUrl = CLEAN_IMAGE_ENDPOINT + "/render/?image=" + $scope.userImageUrl + "&product_id=" + $scope.templateId + "&variant=" + $scope.variant + "&format=jpg&debug=false&background=" + "eeedec&size=628x452&fill_mode=fit&padding=20&&scale=" + $scope.scale + "&rotate=" + $scope.rotationDegrees + "&mirror=" + $scope.flipHorizontal + "&translate=" + $scope.translateX + "," + $scope.translateY;
      localStorage.setItem('modifiedImageUrl', modifiedImageUrl);
    }
  }
}

function edit() {
  var $element = $("#image-editor-container"); // function randomFunction($window, $element, $scope, $q, $timeout, productImage,
  //                     imagePreloader, errorBar, DEBUG) {
  // if(!window.ctrl)
  // var ctrl = this;

  loading(true);
  window.background = $element.find("canvas")[0];
  window.canvas = $element.find("canvas")[1];
  window.ctx = canvas.getContext("2d");
  window.btx = background.getContext("2d");
  window.layerComponents = null;
  window.userImage = null;
  window.layerComponentsLoadCancelObj = null;

  function loadProductImageLayerComponents() {
    if (!$scope.templateId) {
      return;
    }

    if (layerComponentsLoadCancelObj) {
      // cancel any previous load request
      layerComponentsLoadCancelObj.cancel();
    }

    var cancelObj = {
      cancelled: false,
      cancel: function cancel() {
        this.cancelled = true;
      }
    };
    loading(true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    btx.clearRect(0, 0, canvas.width, canvas.height);
    layerComponents = null;
    userImage = null;
    var userImagePromise = imagePreloader.load($scope.userImageUrl);
    var layerComponentsPromise = productImage.getLayerComponents($scope.templateId, $scope.variant); // userImagePromise.then((json) => {
    //     console.log(json);
    // }).catch((err) => {
    //     console.error(err);
    // })

    Promise.all([layerComponentsPromise, userImagePromise]).then(function success(results) {
      if (cancelObj.cancelled) {
        return;
      }

      layerComponents = results[0];
      userImage = results[1];
      if (!$scope.frozen) canvas.style.cursor = "move";
      loading(false);
      render();
    })["catch"](function (err) {
      console.error(err);
    })["finally"](function () {
      if (cancelObj == layerComponentsLoadCancelObj) {
        layerComponentsLoadCancelObj = null;
      }
    });
    layerComponentsLoadCancelObj = cancelObj;
  }

  loadProductImageLayerComponents();

  function initCanvasSize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    background.width = canvas.offsetWidth;
    background.height = canvas.offsetHeight;
    render();
  }

  initCanvasSize(); // angular.element($window).bind("resize", initCanvasSize);
  // $scope.$watchGroup(["scale", "flipHorizontal", "rotationDegrees",
  //         "translateX", "translateY"], function() {
  //     render();
  // });
  // $scope.$watchGroup(["templateId", "variant", "userImageUrl"], function() {
  //     loadProductImageLayerComponents();
  // });

  function toPrintImageCoordinateSystem(coord) {
    var quad = getScaledEnclosingQuad(canvas, layerComponents.masks[0]);
    var scale = layerComponents.asset_size.width / quad.width;
    return Math.round(scale * coord);
  }
  /*
      * Handle user dragging/reposition their image on the product
      */


  ctrl.dragging = false;
  var lastClientX = 0;
  var lastClientY = 0;

  var onMouseMove = function onMouseMove(event) {
    if ($scope.frozen || layerComponents == null) return;

    if (ctrl.dragging) {
      var canvasDx = event.clientX - lastClientX;
      var canvasDy = event.clientY - lastClientY; // convert canvas dx, dy to unscaled product image coordinate system

      var productDx = toPrintImageCoordinateSystem(canvasDx);
      var productDy = toPrintImageCoordinateSystem(canvasDy);
      $scope.translateX = parseInt($scope.translateX) + productDx;
      $scope.translateY = parseInt($scope.translateY) + productDy;
      lastClientX = event.clientX;
      lastClientY = event.clientY;
      render();
    }
  };

  var onMouseDown = function onMouseDown(event) {
    if ($scope.frozen || layerComponents == null) return;
    ctrl.dragging = true;
    lastClientX = event.clientX;
    lastClientY = event.clientY;
  };

  var onMouseUp = function onMouseUp(event) {
    if ($scope.frozen || layerComponents == null) return;
    ctrl.dragging = false;
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
}

module.exports = {
  render: render,
  edit: edit
};

},{"./constants":2,"./image_preloader":4,"./product_image":8}],4:[function(require,module,exports){
"use strict";

var _require = require('./constants'),
    CORSURL = _require.CORSURL;

var imagePreloader = {
  // expose list of images that were created to facilitate the load for unit testing
  // purposes
  images: null,

  /*
   * Preloads an array of image url strings (or a single image url string not in an
   * array). Returns a promise that will resolve to an object who's keys are the image
   * urls strings and values are the Image objects or if a single url string was
   * passed as an argument then resolves to a single Image.
   */
  load: function load(imagesToLoad) {
    imagePreloader.images = [];
    return new Promise(function (resolve, reject) {
      var resolveAsSingleImage = false;

      if (typeof imagesToLoad == "string") {
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
        (function (src) {
          var image = new Image();
          image.src = src.replace(CORSURL, '');
          var aimage = $(image);
          imagePreloader.images.push(aimage);
          aimage.on("load", function () {
            results[src] = image;

            if (--remainingImagesToLoad == 0) {
              resolve(resolveAsSingleImage ? image : results);
            }
          });
          aimage.on("error", function () {
            reject();
          });
        })(imagesToLoad[i]);
      }
    });
  }
};
module.exports = imagePreloader;

},{"./constants":2}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("../utilities"),
    findCountryByName = _require.findCountryByName;

var Address =
/*#__PURE__*/
function () {
  function Address(fields) {
    _classCallCheck(this, Address);

    this.city = fields.city;

    if (fields.country.name) {
      this.country = Country.build(fields.country);
    } else {
      this.country = findCountryByName(fields.country);
    }

    this.region = fields.region;
    this.addressLine1 = fields.addressLine1;
    this.addressLine2 = fields.addressLine2;
    this.zip = fields.zip;
  }

  _createClass(Address, null, [{
    key: "build",
    value: function build(fields) {
      return new Promise(function (resolve, reject) {
        var fieldNames = Address.requiredFields;
        var unfilledFields = [];

        for (var i = 0; i < fieldNames.length; i++) {
          if (!fields[fieldNames[i]]) {
            unfilledFields.push(fieldNames[i]);
          }
        }

        if (unfilledFields.length > 0) {
          return reject("Please fill out the field ".concat(unfilledFields.join(', ')));
        }

        return resolve(new Address(fields));
      });
    }
  }]);

  return Address;
}();

Address.requiredFields = ['city', 'country', 'region', 'addressLine1', 'zip'];
module.exports = Address;

},{"../utilities":9}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Country =
/*#__PURE__*/
function () {
  function Country(countryElement) {
    _classCallCheck(this, Country);

    this.name = countryElement[0];
    this.iso2 = countryElement[1];
    this.iso3 = countryElement[2];
    this.iso3Currency = countryElement[3];
    this.inEurope = countryElement[4];
  }

  _createClass(Country, null, [{
    key: "build",
    value: function build(fields) {
      return new Country([fields.name, fields.iso2, fields.iso3, fields.iso3Currency, fields.inEurope]);
    }
  }]);

  return Country;
}();

module.exports = Country;

},{}],7:[function(require,module,exports){
"use strict";

var Country = require('./country');

var Address = require('./address');

module.exports = {
  Country: Country,
  Address: Address
};

},{"./address":5,"./country":6}],8:[function(require,module,exports){
"use strict";

/**
 * Created by dbotha on 21/06/16.
 */
// angular.module("kite-shopify")
//     .factory("productImage", ["$q", "$http", "IMAGE_GENERATOR_ENDPOINT", "imagePreloader",
//             function($q, $http, IMAGE_GENERATOR_ENDPOINT, imagePreloader) {
// .constant("IMAGE_GENERATOR_ENDPOINT", "https://image.kite.ly/")
var _require = require('./constants'),
    CORSURL = _require.CORSURL,
    CLEAN_IMAGE_ENDPOINT = _require.CLEAN_IMAGE_ENDPOINT,
    $scope = _require.$scope;

var imagePreloader = require('./image_preloader');

var IMAGE_GENERATOR_ENDPOINT = "".concat(CORSURL).concat(CLEAN_IMAGE_ENDPOINT);
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

var productImage = {
  getLayerComponents: function getLayerComponents(templateId, imageVariantName) {
    return new Promise(function (resolve, reject) {
      return fetch(IMAGE_GENERATOR_ENDPOINT + "/product/" + templateId).then(function (response) {
        return response.json();
      }).then(function success(json) {
        var product = json; // preload all images so they're ready to be used

        function imageURL(path) {
          return IMAGE_GENERATOR_ENDPOINT + "/" + path;
        }

        function cleanImageUrl(path) {
          return CLEAN_IMAGE_ENDPOINT + "/" + path;
        }

        var imageVariant = null;
        var colors = [];

        for (var i = 0; i < product.images.length; ++i) {
          if (imageVariantName == null) {
            imageVariant = product.images[i];
          } else if (imageVariant == null && product.images[i].name == imageVariantName) {
            imageVariant = product.images[i];
          }

          colors.push(product.images[i].name);
        }

        console.log(colors);

        if (imageVariant == null) {
          return reject("Could not find image variant '" + imageVariant + "' for template_id: " + templateId);
        }

        console.log(imageVariant);
        $scope.variant = imageVariant.name;
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

        return imagePreloader.load(imagesToLoad).then(function success(imagesRaw) {
          // Here we need to remove the CORSURL from the result.
          var imagesUrls = Object.keys(imagesRaw);
          var imagesUrlsCleaned = imagesUrls.map(function (url) {
            return url.replace(CORSURL, "");
          });
          var images = {};

          for (var _i = 0; _i < imagesUrls.length; _i++) {
            images[imagesUrlsCleaned[_i]] = imagesRaw[imagesUrls[_i]];
          }

          if (imageVariant.background) {
            imageVariant.background = images[cleanImageUrl(imageVariant.background)];
          }

          if (imageVariant.foreground) {
            imageVariant.foreground.image = images[cleanImageUrl(imageVariant.foreground.image)];
          }

          for (var i = 0; i < imageVariant.masks.length; ++i) {
            imageVariant.masks[i].mask = images[cleanImageUrl(imageVariant.masks[i].mask)];
          }

          return resolve(imageVariant);
        });
      });
    });
  }
};
module.exports = productImage;

},{"./constants":2,"./image_preloader":4}],9:[function(require,module,exports){
"use strict";

var _require = require('./constants'),
    CORSURL = _require.CORSURL,
    creds = _require.creds,
    countriesRaw = _require.countriesRaw,
    $scope = _require.$scope,
    sampleTransaction = _require.sampleTransaction;

var _require2 = require('./models'),
    Country = _require2.Country,
    Address = _require2.Address;

var countries = [];
var countriesKeys = Object.keys(countriesRaw);

for (var i = 0; i < countriesKeys.length; i++) {
  var country = countriesRaw[countriesKeys[i]];
  countries.push(new Country(country));
}

function findCountryByName(countryName) {
  var countriesKeys = Object.keys(countries);

  for (var _i = 0; _i < countriesKeys.length; _i++) {
    var _country = countries[countriesKeys[_i]];

    if (_country.name === countryName) {
      return _country;
    }
  }

  return null;
} // function getPrices(template_id, country_code, shipping_country_code) {
//     const body = {
//         "basket":[
//            {
//               "country_code":"USA",
//               "job_id":-1,
//               "quantity":1,
//               "template_id":"i6splus_case"
//            }
//         ],
//         "pay_in_store":0,
//         "payment_gateway":"PAYPAL",
//         "promo_code":"",
//         "ship_to_store":0,
//         "shipping_country_code":"US"
//      };
//     fetch('https://api.kite.ly/v3.0/price/')
// }


function getAddress() {
  return new Promise(function (resolve, reject) {
    var fields = {
      city: $("#city").val(),
      country: $("#country").val(),
      region: $("#region").val(),
      addressLine1: $("#address-line-1").val(),
      addressLine2: $("#address-line-2").val(),
      zip: $("#zip").val()
    };
    Address.build(fields).then(function (address) {
      resolve(address);
    })["catch"](reject);
    ;
  });
}

function getPrices(address) {
  return new Promise(function (resolve, reject) {
    var body = {
      "basket": [{
        "country_code": address.country.iso3,
        "job_id": -1,
        "quantity": 1,
        "template_id": $scope.templateId
      }],
      "pay_in_store": 0,
      "payment_gateway": "PAYPAL",
      "promo_code": "",
      "ship_to_store": 0,
      "shipping_country_code": address.country.iso2
    };
    fetch("".concat(CORSURL, "https://api.kite.ly/v3.0/price/"), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': "ApiKey ".concat(creds.pubKey),
        'Content-Type': 'application/json',
        "User-Agent": "Kite SDK Android v5.8.9"
      },
      referrer: 'no-referrer',
      redirect: 'follow',
      cache: 'no-cache'
    }).then(function (response) {
      response.json().then(function (json) {
        console.log(json);
        resolve(json);
      });
    })["catch"](reject);
  });
}

function placeOrder(address, price, paypalId) {
  return new Promise(function (resolve, reject) {
    var body = {
      "proof_of_payment": paypalId,
      "shipping_address": {
        "recipient_name": "Deon Botha",
        "address_line_1": address.addressLine1,
        "address_line_2": address.addressLine2,
        "city": address.city,
        "county_state": address.region,
        "postcode": address.zip,
        "country_code": address.country.iso3
      },
      "customer_email": "andres@iisac.mx",
      "customer_phone": "+44 (0)784297 1234",
      "customer_payment": {
        "amount": price.total,
        "currency": price.currency
      },
      "jobs": [{
        "assets": ["http://psps.s3.amazonaws.com/sdk_static/1.jpg"],
        "template_id": "i6_case",
        "options": {
          "garment_color": "red"
        }
      }]
    };
    fetch("".concat(CORSURL, "https://api.kite.ly/v4.0/print/"), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': "ApiKey ".concat(creds.pubKey),
        'Content-Type': 'application/json',
        "User-Agent": "Kite SDK Android v5.8.9"
      },
      referrer: 'no-referrer',
      redirect: 'follow',
      cache: 'no-cache'
    }).then(function (response) {
      response.json().then(function (json) {
        resolve(json);
      });
    })["catch"](reject);
  });
}

function loadData() {
  return new Promise(function (resolve, reject) {
    var pricesRaw = localStorage.getItem('prices');
    var addressRaw = localStorage.getItem('address');

    if (!pricesRaw || !addressRaw) {
      reject('no data');
      return;
    }

    var pricesJSON = JSON.parse(pricesRaw);
    var addressJSON = JSON.parse(addressRaw);
    Address.build(addressJSON).then(function (address) {
      resolve({
        prices: pricesJSON,
        address: addressJSON
      });
    })["catch"](function (err) {
      reject(err);
    });
  });
}

function processPaypalPayment(callback) {
  setTimeout(function () {
    paypal.Buttons({
      createOrder: function createOrder(data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: currency,
              value: '1' // prices.total_product_cost[currency]

            }
          }]
        });
      },
      onApprove: function onApprove(data, actions) {
        return actions.order.capture().then(function (details) {
          // alert('Transaction completed by ' + details.payer.name.given_name);
          // window.deets = details;
          callback(details); // Call your server to save the transaction
          // return fetch('/paypal-transaction-complete', {
          //     method: 'post',
          //     headers: {
          //         'content-type': 'application/json'
          //     },
          //     body: JSON.stringify({
          //         orderID: data.orderID
          //     })
          // });
        });
      }
    }).render('#paypal-button-container'); // if (env === 'test') {
    //     return callback(sampleTransaction);
    // }
  }, 500);
}

function create_script(url) {
  /* create the link element */
  var linkElement = document.createElement('script');
  /* add attributes */

  linkElement.setAttribute('src', url);
  /* attach to the document body */

  document.getElementsByTagName('body')[0].appendChild(linkElement);
}

module.exports = {
  Country: Country,
  Address: Address,
  findCountryByName: findCountryByName,
  placeOrder: placeOrder,
  getPrices: getPrices,
  getAddress: getAddress,
  loadData: loadData,
  processPaypalPayment: processPaypalPayment,
  create_script: create_script
};

},{"./constants":2,"./models":7}],10:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("../utilities"),
    getPrices = _require.getPrices,
    getAddress = _require.getAddress;

var Checkout =
/*#__PURE__*/
function () {
  function Checkout() {
    _classCallCheck(this, Checkout);
  }

  _createClass(Checkout, null, [{
    key: "run",
    value: function run() {
      var modifiedImageUrl = localStorage.getItem('modifiedImageUrl');

      if (modifiedImageUrl) {
        $("#tiny-image").attr('src', modifiedImageUrl);
        $("#tiny-image").css('width', '150%');
        $("#tiny-image").css('margin-top', '20px');
      }

      $("#checkout-btn").on('click', function () {
        getAddress().then(function (address) {
          getPrices(address).then(function (prices) {
            localStorage.setItem('prices', JSON.stringify(prices));
            localStorage.setItem('address', JSON.stringify(address));
            document.location.href = document.location.href.replace('checkout.html', 'payment.html');
          })["catch"](function (err) {
            alert(err);
          });
        });
      });
    }
  }]);

  return Checkout;
}();

module.exports = Checkout;

},{"../utilities":9}],11:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../constants'),
    $scope = _require.$scope;

var _require2 = require("../edit"),
    render = _require2.render,
    edit = _require2.edit;

var Editor =
/*#__PURE__*/
function () {
  function Editor() {
    _classCallCheck(this, Editor);
  }

  _createClass(Editor, null, [{
    key: "run",
    value: function run() {
      window.addEventListener("message", receiveMessage, false);

      function receiveMessage(event) {
        console.log("Received ".concat(JSON.stringify(event.data)));

        if (event.data.product_id) {
          $scope.templateId = event.data.product_id;

          if (event.data.userImageUrl) {
            $scope.userImageUrl = event.data.userImageUrl;
          }

          edit();
        }
      }

      var slider = document.getElementById('slider');
      noUiSlider.create(slider, {
        start: [1],
        connect: true,
        range: {
          'min': 0.3,
          'max': 3
        }
      });

      function doSomething(values, handle, unencoded, tap, positions) {
        // values: Current slider values (array);
        // handle: Handle that caused the event (number);
        // unencoded: Slider values without formatting (array);
        // tap: Event was caused by the user tapping the slider (boolean);
        // positions: Left offset of the handles (array);
        $scope.scale = parseFloat(values[0]);
        console.log($scope.scale);
        render();
      } // Binding signature


      slider.noUiSlider.on('update', doSomething); // Binding namespaced events

      slider.noUiSlider.on('set.one', function () {});
      $("#checkout-btn").on('click', function () {
        document.location.href = document.location.href.replace('editor.html', 'checkout.html');
      });
      $(".c-product-options-edit__variants__colors__btn").on('click', function (el) {
        console.log($(this).attr('data-color'));
        $scope.colorOverlay = $(this).attr('data-color');
        render();
      });
    }
  }]);

  return Editor;
}();

module.exports = Editor;

},{"../constants":2,"../edit":3}],12:[function(require,module,exports){
"use strict";

var Checkout = require('./checkout');

var Editor = require('./editor');

var PaymentConfirmation = require('./payment_confirmation');

var Payment = require('./payment');

var viewMappings = {
  'checkout': Checkout,
  'editor': Editor,
  'payment_confirmation': PaymentConfirmation,
  'payment': Payment
};

function create_link(url) {
  /* create the link element */
  var linkElement = document.createElement('link');
  /* add attributes */

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('href', url);
  /* attach to the document head */

  document.getElementsByTagName('head')[0].appendChild(linkElement);
}

function runView(viewName) {
  if (!viewMappings[viewName]) {
    console.error("".concat(viewName, " is not a valid view"));
    return;
  }

  var view = viewMappings[viewName];
  create_link('../css/editor.css');
  create_link('../css/kitely.css');
  $(document).ready(function () {
    view.run();
  });
}

module.exports = {
  runView: runView
};

},{"./checkout":10,"./editor":11,"./payment":13,"./payment_confirmation":14}],13:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../utilities'),
    loadData = _require.loadData,
    processPaypalPayment = _require.processPaypalPayment,
    create_script = _require.create_script,
    placeOrder = _require.placeOrder;

var _require2 = require("../constants"),
    creds = _require2.creds;

var Payment =
/*#__PURE__*/
function () {
  function Payment() {
    _classCallCheck(this, Payment);
  }

  _createClass(Payment, null, [{
    key: "run",
    value: function run() {
      var currency = 'USD'; // 'GBP';

      var currencySymbol = '$'; // '&pound;';

      var modifiedImageUrl = localStorage.getItem('modifiedImageUrl');

      if (modifiedImageUrl) {
        $("#tiny-image").attr('src', modifiedImageUrl);
        $("#tiny-image").css('width', '150%');
        $("#tiny-image").css('margin-top', '20px');
      }

      loadData().then(function (_ref) {
        var prices = _ref.prices,
            address = _ref.address;
        console.log(prices);
        console.log(address);
        $("#product-cost").html("".concat(currencySymbol, " ").concat(prices.total_product_cost[currency]));
        $("#shipping-cost").html("".concat(currencySymbol, " ").concat(prices.total_shipping_cost[currency]));
        $("#total-cost").html("".concat(currencySymbol, " ").concat(prices.total_product_cost[currency]));
        create_script("https://www.paypal.com/sdk/js?client-id=" + creds.paypalClientId);
        processPaypalPayment(function (transaction) {
          placeOrder(address, {
            total: 1,
            currency: currency
          }, transaction.id).then(function (json) {
            console.log(json);
            document.location.href = document.location.href.replace('payment.html', 'payment_confirmation.html');
          })["catch"](function (err) {
            console.log(err);
          });
        });
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }]);

  return Payment;
}();

module.exports = Payment;

},{"../constants":2,"../utilities":9}],14:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../utilities'),
    loadData = _require.loadData;

var PaymentConfirmation =
/*#__PURE__*/
function () {
  function PaymentConfirmation() {
    _classCallCheck(this, PaymentConfirmation);
  }

  _createClass(PaymentConfirmation, null, [{
    key: "run",
    value: function run() {
      var currency = 'USD'; // 'GBP';

      var currencySymbol = '$'; // '&pound;';

      var modifiedImageUrl = localStorage.getItem('modifiedImageUrl');

      if (modifiedImageUrl) {
        $("#tiny-image").attr('src', modifiedImageUrl);
        $("#tiny-image").css('width', '150%');
        $("#tiny-image").css('margin-top', '20px');
      }

      loadData().then(function (_ref) {
        var prices = _ref.prices,
            address = _ref.address;
        console.log(prices);
        console.log(address);
        $("#product-cost").html("".concat(currencySymbol, " ").concat(prices.total_product_cost[currency]));
        $("#shipping-cost").html("".concat(currencySymbol, " ").concat(prices.total_shipping_cost[currency]));
        $("#total-cost").html("".concat(currencySymbol, " ").concat(prices.total_product_cost[currency]));
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }]);

  return PaymentConfirmation;
}();

module.exports = PaymentConfirmation;

},{"../utilities":9}]},{},[1]);
