window.CORSURL = "https://cors-anywhere.herokuapp.com/"
window.CLEAN_IMAGE_ENDPOINT = "https://image.kite.ly";
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

class Country {
    constructor(countryElement) {
        this.name = countryElement[0];
        this.iso2 = countryElement[1];
        this.iso3 = countryElement[2];
        this.iso3Currency = countryElement[3];
        this.inEurope = countryElement[4];
    }
}

class Address {
    constructor(fields) {
        this.city = fields.city;
        this.country = findCountryByName(fields.country);
        this.region = fields.region;
        this.addressLine1 = fields.addressLine1;
        this.addressLine2 = fields.addressLine2;
        this.zip = fields.zip;
    }

    static build(fields) {
        return new Promise((resolve, reject) => {
            const fieldNames = ['city', 'country', 'region', 'addressLine1', 'zip'];
            let unfilledFields = [];
            for(let i = 0; i < fieldNames.length; i++) {
                if (!fields[fieldNames[i]]) {
                    unfilledFields.push(fieldNames[i])
                }
            }

            if (unfilledFields.length > 0) {
                return reject(`Please fill out the field ${unfilledFields.join(', ')}`);
            }
            return resolve(new Address(fields))
        });
    }
}

// Country name, iso2, iso3, iso3 currency, is in europe.
const countriesRaw = {
    ALAND_ISLANDS                     : ["Åland Islands", "AX", "ALA", "EUR", true ],
    AFGHANISTAN                       : ["Afghanistan", "AF", "AFG", "AFN", false ],
    ALBANIA                           : ["Albania", "AL", "ALB", "ALL", true ],
    ALGERIA                           : ["Algeria", "DZ", "DZA", "DZD", false ],
    AMERICAN_SAMOA                    : ["American Samoa", "AS", "ASM", "USD", false ],
    ANDORRA                           : ["Andorra", "AD", "AND", "EUR", true ],
    ANGOLA                            : ["Angola", "AO", "AGO", "AOA", false ],
    ANGUILLA                          : ["Anguilla", "AI", "AIA", "XCD", false ],
    ANTIGUA_AND_BARBUDA               : ["Antigua and Barbuda", "AG", "ATG", "XCD", false ],
    ARGENTINA                         : ["Argentina", "AR", "ARG", "ARS", false ],
    ARMENIA                           : ["Armenia", "AM", "ARM", "AMD", false ],
    ARUBA                             : ["Aruba", "AW", "ABW", "AWG", false ],
    AUSTRALIA                         : ["Australia", "AU", "AUS", "AUD", false ],
    AUSTRIA                           : ["Austria", "AT", "AUT", "EUR", true ],
    AZERBAIJAN                        : ["Azerbaijan", "AZ", "AZE", "AZN", false ],
    BAHAMAS                           : ["Bahamas", "BS", "BHS", "BSD", false ],
    BAHRAIN                           : ["Bahrain", "BH", "BHR", "BHD", false ],
    BANGLADESH                        : ["Bangladesh", "BD", "BGD", "BDT", false ],
    BARBADOS                          : ["Barbados", "BB", "BRB", "BBD", false ],
    BELARUS                           : ["Belarus", "BY", "BLR", "BYR", true ],
    BELGIUM                           : ["Belgium", "BE", "BEL", "EUR", true ],
    BELIZE                            : ["Belize", "BZ", "BLZ", "BZD", false ],
    BENIN                             : ["Benin", "BJ", "BEN", "XOF", false ],
    BERMUDA                           : ["Bermuda", "BM", "BMU", "BMD", false ],
    BHUTAN                            : ["Bhutan", "BT", "BTN", "INR", false ],
    BOLIVIA                           : ["Bolivia, Plurinational State of", "BO", "BOL", "BOB", false ],
    BONAIRE                           : ["Bonaire, Sint Eustatius and Saba", "BQ", "BES", "USD", false ],
    BOSNIA_AND_HERZEGOVINA            : ["Bosnia and Herzegovina", "BA", "BIH", "BAM", true ],
    BOTSWANA                          : ["Botswana", "BW", "BWA", "BWP", false ],
    BOUVET_ISLAND                     : ["Bouvet Island", "BV", "BVT", "NOK", false ],
    BRAZIL                            : ["Brazil", "BR", "BRA", "BRL", false ],
    BRITISH_INDIAN_OCEAN_TERRITORY    : ["British Indian Ocean Territory", "IO", "IOT", "USD", false ],
    BRUNEI_DARUSSALAM                 : ["Brunei Darussalam", "BN", "BRN", "BND", false ],
    BULGARIA                          : ["Bulgaria", "BG", "BGR", "BGN", true ],
    BURKINA_FASO                      : ["Burkina Faso", "BF", "BFA", "XOF", false ],
    BURUNDI                           : ["Burundi", "BI", "BDI", "BIF", false ],
    CAMBODIA                          : ["Cambodia", "KH", "KHM", "KHR", false ],
    CAMEROON                          : ["Cameroon", "CM", "CMR", "XAF", false ],
    CANADA                            : ["Canada", "CA", "CAN", "CAD", false ],
    CAPE_VERDE                        : ["Cape Verde", "CV", "CPV", "CVE", false ],
    CAYMAN_ISLANDS                    : ["Cayman Islands", "KY", "CYM", "KYD", false ],
    CENTRAL_AFRICAN_REPUBLIC          : ["Central African Republic", "CF", "CAF", "XAF", false ],
    CHAD                              : ["Chad", "TD", "TCD", "XAF", false ],
    CHILE                             : ["Chile", "CL", "CHL", "CLP", false ],
    CHINA                             : ["China", "CN", "CHN", "CNY", false ],
    CHRISTMAS_ISLANDS                 : ["Christmas Island", "CX", "CXR", "AUD", false ],
    COCOS_ISLANDS                     : ["Cocos (Keeling) Islands", "CC", "CCK", "AUD", false ],
    COLOMBIA                          : ["Colombia", "CO", "COL", "COP", false ],
    COMOROS                           : ["Comoros", "KM", "COM", "KMF", false ],
    CONGO                             : ["Congo", "CG", "COG", "XAF", false ],
    DEMOCRATIC_REPUBLIC_OF_CONGO      : ["Congo, the Democratic Republic of the", "CD", "COD", "CDF", false ],
    COOK_ISLANDS                      : ["Cook Islands", "CK", "COK", "NZD", false ],
    COSTA_RICA                        : ["Costa Rica", "CR", "CRI", "CRC", false ],
    CROATIA                           : ["Croatia", "HR", "HRV", "HRK", true ],
    CUBA                              : ["Cuba", "CU", "CUB", "CUP", false ],
    CURACAO                           : ["Curaçao", "CW", "CUW", "ANG", false ],
    CYPRUS                            : ["Cyprus", "CY", "CYP", "EUR", false ],
    CZECH_REPUBLIC                    : ["Czech Republic", "CZ", "CZE", "CZK", true ],
    IVORY_COAST                       : ["Côte d'Ivoire", "CI", "CIV", "XOF", false ],
    DENMARK                           : ["Denmark", "DK", "DNK", "DKK", true ],
    DJIBOUTI                          : ["Djibouti", "DJ", "DJI", "DJF", false ],
    DOMINICA                          : ["Dominica", "DM", "DMA", "XCD", false ],
    DOMINICAN_REPUBLIC                : ["Dominican Republic", "DO", "DOM", "DOP", false ],
    ECUADOR                           : ["Ecuador", "EC", "ECU", "USD", false ],
    EGYPT                             : ["Egypt", "EG", "EGY", "EGP", false ],
    EL_SALVADOR                       : ["El Salvador", "SV", "SLV", "USD", false ],
    EQUATORIAL_GUINEA                 : ["Equatorial Guinea", "GQ", "GNQ", "XAF", false ],
    ERITREA                           : ["Eritrea", "ER", "ERI", "ERN", false ],
    ESTONIA                           : ["Estonia", "EE", "EST", "EUR", true ],
    ETHIOPIA                          : ["Ethiopia", "ET", "ETH", "ETB", false ],
    FALKLAND_ISLANDS                  : ["Falkland Islands (Malvinas)", "FK", "FLK", "FKP", false ],
    FAROE_ISLANDS                     : ["Faroe Islands", "FO", "FRO", "DKK", true ],
    FIJI                              : ["Fiji", "FJ", "FJI", "FJD", false ],
    FINLAND                           : ["Finland", "FI", "FIN", "EUR", true ],
    FRANCE                            : ["France", "FR", "FRA", "EUR", true ],
    FRENCH_GUIANA                     : ["French Guiana", "GF", "GUF", "EUR", false ],
    FRENCH_POLYNESIA                  : ["French Polynesia", "PF", "PYF", "XPF", false ],
    FRENCH_SOUTHERN_TERRITORIES       : ["French Southern Territories", "TF", "ATF", "EUR", false ],
    GABON                             : ["Gabon", "GA", "GAB", "XAF", false ],
    GAMBIA                            : ["Gambia", "GM", "GMB", "GMD", false ],
    GEORGIA                           : ["Georgia", "GE", "GEO", "GEL", false ],
    GERMANY                           : ["Germany", "DE", "DEU", "EUR", true ],
    GHANA                             : ["Ghana", "GH", "GHA", "GHS", false ],
    GIBRALTAR                         : ["Gibraltar", "GI", "GIB", "GIP", true ],
    GREECE                            : ["Greece", "GR", "GRC", "EUR", true ],
    GREENLAND                         : ["Greenland", "GL", "GRL", "DKK", false ],
    GRENEDA                           : ["Grenada", "GD", "GRD", "XCD", false ],
    GUADELOUPE                        : ["Guadeloupe", "GP", "GLP", "EUR", false ],
    GUAM                              : ["Guam", "GU", "GUM", "USD", false ],
    GUATEMALA                         : ["Guatemala", "GT", "GTM", "GTQ", false ],
    GUERNSEY                          : ["Guernsey", "GG", "GGY", "GBP", true ],
    GUINEA                            : ["Guinea", "GN", "GIN", "GNF", false ],
    GUINEA_BISSAU                     : ["Guinea-Bissau", "GW", "GNB", "XOF", false ],
    GUYANA                            : ["Guyana", "GY", "GUY", "GYD", false ],
    HAITI                             : ["Haiti", "HT", "HTI", "USD", false ],
    HEARD_ISLAND_AND_MCDONALD_ISLANDS : ["Heard Island and Mcdonald Islands", "HM", "HMD", "AUD", false ],
    HOLY_SEE                          : ["Holy See (Vatican City State)", "VA", "VAT", "EUR", true ],
    HONDURAS                          : ["Honduras", "HN", "HND", "HNL", false ],
    HONG_KONG                         : ["Hong Kong", "HK", "HKG", "HKD", false ],
    HUNGARY                           : ["Hungary", "HU", "HUN", "HUF", true ],
    ICELAND                           : ["Iceland", "IS", "ISL", "ISK", true ],
    INDIA                             : ["India", "IN", "IND", "INR", false ],
    INDONESIA                         : ["Indonesia", "ID", "IDN", "IDR", false ],
    IRAN                              : ["Iran, Islamic Republic of", "IR", "IRN", "IRR", false ],
    IRAQ                              : ["Iraq", "IQ", "IRQ", "IQD", false ],
    IRELAND                           : ["Ireland", "IE", "IRL", "EUR", true ],
    ISLE_OF_MAN                       : ["Isle of Man", "IM", "IMN", "GBP", true ],
    ISRAEL                            : ["Israel", "IL", "ISR", "ILS", false ],
    ITALY                             : ["Italy", "IT", "ITA", "EUR", true ],
    JAMAICA                           : ["Jamaica", "JM", "JAM", "JMD", false ],
    JAPAN                             : ["Japan", "JP", "JPN", "JPY", false ],
    JERSEY                            : ["Jersey", "JE", "JEY", "GBP", true ],
    JORDAN                            : ["Jordan", "JO", "JOR", "JOD", false ],
    KAZAKHSTAN                        : ["Kazakhstan", "KZ", "KAZ", "KZT", false ],
    KENYA                             : ["Kenya", "KE", "KEN", "KES", false ],
    KIRIBATI                          : ["Kiribati", "KI", "KIR", "AUD", false ],
    NORTH_KOREA                       : ["Korea, Democratic People's Republic of", "KP", "PRK", "KPW", false ],
    SOUTH_KOREA                       : ["Korea, Republic of", "KR", "KOR", "KRW", false ],
    KUWAIT                            : ["Kuwait", "KW", "KWT", "KWD", false ],
    KYRGYZSTAN                        : ["Kyrgyzstan", "KG", "KGZ", "KGS", false ],
    LAO                               : ["Lao People's Democratic Republic", "LA", "LAO", "LAK", false ],
    LATVIA                            : ["Latvia", "LV", "LVA", "LVL", true ],
    LEBANON                           : ["Lebanon", "LB", "LBN", "LBP", false ],
    LESOTHO                           : ["Lesotho", "LS", "LSO", "ZAR", false ],
    LIBERIA                           : ["Liberia", "LR", "LBR", "LRD", false ],
    LIBYA                             : ["Libya", "LY", "LBY", "LYD", false ],
    LIECHTENSTEIN                     : ["Liechtenstein", "LI", "LIE", "CHF", true ],
    LITHUANIA                         : ["Lithuania", "LT", "LTU", "LTL", true ],
    LUXEMBOURG                        : ["Luxembourg", "LU", "LUX", "EUR", true ],
    MACAO                             : ["Macao", "MO", "MAC", "MOP", false ],
    FYR_MACEDONIA                     : ["Macedonia, the Former Yugoslav Republic of", "MK", "MKD", "MKD", true ],
    MADAGASCAR                        : ["Madagascar", "MG", "MDG", "MGA", false ],
    MALAWI                            : ["Malawi", "MW", "MWI", "MWK", false ],
    MALAYSIA                          : ["Malaysia", "MY", "MYS", "MYR", false ],
    MALDIVES                          : ["Maldives", "MV", "MDV", "MVR", false ],
    MALI                              : ["Mali", "ML", "MLI", "XOF", false ],
    MALTA                             : ["Malta", "MT", "MLT", "EUR", true ],
    MARSHALL_ISLANDS                  : ["Marshall Islands", "MH", "MHL", "USD", false ],
    MARTINIQUE                        : ["Martinique", "MQ", "MTQ", "EUR", false ],
    MAURITANIA                        : ["Mauritania", "MR", "MRT", "MRO", false ],
    MAURITIUS                         : ["Mauritius", "MU", "MUS", "MUR", false ],
    MAYOTTE                           : ["Mayotte", "YT", "MYT", "EUR", false ],
    MEXICO                            : ["Mexico", "MX", "MEX", "MXN", false ],
    MICRONESIA                        : ["Micronesia, Federated States of", "FM", "FSM", "USD", false ],
    MOLDOVA                           : ["Moldova, Republic of", "MD", "MDA", "MDL", true ],
    MONACO                            : ["Monaco", "MC", "MCO", "EUR", true ],
    MONGOLIA                          : ["Mongolia", "MN", "MNG", "MNT", false ],
    MONTENEGRO                        : ["Montenegro", "ME", "MNE", "EUR", true ],
    MONTSERRAT                        : ["Montserrat", "MS", "MSR", "XCD", false ],
    MOROCCO                           : ["Morocco", "MA", "MAR", "MAD", false ],
    MOZAMBIQUE                        : ["Mozambique", "MZ", "MOZ", "MZN", false ],
    MYANMAR                           : ["Myanmar", "MM", "MMR", "MMK", false ],
    NAMIBIA                           : ["Namibia", "NA", "NAM", "ZAR", false ],
    NAURU                             : ["Nauru", "NR", "NRU", "AUD", false ],
    NEPAL                             : ["Nepal", "NP", "NPL", "NPR", false ],
    NETHERLANDS                       : ["Netherlands", "NL", "NLD", "EUR", true ],
    NEW_CALEDONIA                     : ["New Caledonia", "NC", "NCL", "XPF", false ],
    NEW_ZEALAND                       : ["New Zealand", "NZ", "NZL", "NZD", false ],
    NICARAGUA                         : ["Nicaragua", "NI", "NIC", "NIO", false ],
    NIGER                             : ["Niger", "NE", "NER", "XOF", false ],
    NIGERIA                           : ["Nigeria", "NG", "NGA", "NGN", false ],
    NIUE                              : ["Niue", "NU", "NIU", "NZD", false ],
    NORFOLK_ISLAND                    : ["Norfolk Island", "NF", "NFK", "AUD", false ],
    NORTHERN_MARIANA_ISLANDS          : ["Northern Mariana Islands", "MP", "MNP", "USD", false ],
    NORWAY                            : ["Norway", "NO", "NOR", "NOK", true ],
    OMAN                              : ["Oman", "OM", "OMN", "OMR", false ],
    PAKISTAN                          : ["Pakistan", "PK", "PAK", "PKR", false ],
    PALAU                             : ["Palau", "PW", "PLW", "USD", false ],
    PANAMA                            : ["Panama", "PA", "PAN", "USD", false ],
    PAPUA_NEW_GUINEA                  : ["Papua New Guinea", "PG", "PNG", "PGK", false ],
    PARAGUAY                          : ["Paraguay", "PY", "PRY", "PYG", false ],
    PERU                              : ["Peru", "PE", "PER", "PEN", false ],
    PHILIPPINES                       : ["Philippines", "PH", "PHL", "PHP", false ],
    PITCAIRN                          : ["Pitcairn", "PN", "PCN", "NZD", false ],
    POLAND                            : ["Poland", "PL", "POL", "PLN", true ],
    PORTUGAL                          : ["Portugal", "PT", "PRT", "EUR", true ],
    PUERTO_RICO                       : ["Puerto Rico", "PR", "PRI", "USD", false ],
    QATAR                             : ["Qatar", "QA", "QAT", "QAR", false ],
    ROMANIA                           : ["Romania", "RO", "ROU", "RON", true ],
    RUSSIA                            : ["Russian Federation", "RU", "RUS", "RUB", true ],
    RWANDA                            : ["Rwanda", "RW", "RWA", "RWF", false ],
    REUNION                           : ["Réunion", "RE", "REU", "EUR", false ],
    SAINT_BARTS                       : ["Saint Barthélemy", "BL", "BLM", "EUR", false ],
    SAINT_HELENA                      : ["Saint Helena, Ascension and Tristan da Cunha", "SH", "SHN", "SHP", false ],
    SAINT_KITTS_AND_NEVIS             : ["Saint Kitts and Nevis", "KN", "KNA", "XCD", false ],
    SAINT_LUCIA                       : ["Saint Lucia", "LC", "LCA", "XCD", false ],
    SAINT_MARTIN                      : ["Saint Martin (French part)", "MF", "MAF", "EUR", false ],
    SAINT_PIERRE_AND_MIQUELON         : ["Saint Pierre and Miquelon", "PM", "SPM", "EUR", false ],
    SAINT_VINCENT_AND_GRENADINES      : ["Saint Vincent and the Grenadines", "VC", "VCT", "XCD", false ],
    SAMOA                             : ["Samoa", "WS", "WSM", "WST", false ],
    SAN_MARINO                        : ["San Marino", "SM", "SMR", "EUR", true ],
    SAO_TOME_AND_PRINCIPE             : ["Sao Tome and Principe", "ST", "STP", "STD", false ],
    SAUDI_ARABIA                      : ["Saudi Arabia", "SA", "SAU", "SAR", false ],
    SENEGAL                           : ["Senegal", "SN", "SEN", "XOF", false ],
    SERBIA                            : ["Serbia", "RS", "SRB", "RSD", true ],
    SEYCHELLES                        : ["Seychelles", "SC", "SYC", "SCR", false ],
    SIERRA_LEONE                      : ["Sierra Leone", "SL", "SLE", "SLL", false ],
    SINGAPORE                         : ["Singapore", "SG", "SGP", "SGD", false ],
    SINT_MAARTEN                      : ["Sint Maarten (Dutch part)", "SX", "SXM", "ANG", false ],
    SLOVAKIA                          : ["Slovakia", "SK", "SVK", "EUR", true ],
    SLOVENIA                          : ["Slovenia", "SI", "SVN", "EUR", true ],
    SOLOMON_ISLANDS                   : ["Solomon Islands", "SB", "SLB", "SBD", false ],
    SOMALIA                           : ["Somalia", "SO", "SOM", "SOS", false ],
    SOUTH_AFRICA                      : ["South Africa", "ZA", "ZAF", "ZAR", false ],
    SOUTH_SUDAN                       : ["South Sudan", "SS", "SSD", "SSP", false ],
    SPAIN                             : ["Spain", "ES", "ESP", "EUR", true ],
    SRI_LANKA                         : ["Sri Lanka", "LK", "LKA", "LKR", false ],
    SUDAN                             : ["Sudan", "SD", "SDN", "SDG", false ],
    SURINAME                          : ["Suriname", "SR", "SUR", "SRD", false ],
    SVALBARD_AND_JAN_MAYEN            : ["Svalbard and Jan Mayen", "SJ", "SJM", "NOK", true ],
    SWAZILAND                         : ["Swaziland", "SZ", "SWZ", "SZL", false ],
    SWEDEN                            : ["Sweden", "SE", "SWE", "SEK", true ],
    SWITZERLAND                       : ["Switzerland", "CH", "CHE", "CHF", true ],
    SYRIA                             : ["Syrian Arab Republic", "SY", "SYR", "SYP", false ],
    TAIWAN                            : ["Taiwan", "TW", "TWN", "TWD", false ],
    TAJIKISTAN                        : ["Tajikistan", "TJ", "TJK", "TJS", false ],
    TANZANIA                          : ["Tanzania, United Republic of", "TZ", "TZA", "TZS", false ],
    THAILAND                          : ["Thailand", "TH", "THA", "THB", false ],
    TIMOR_LESTE                       : ["Timor-Leste", "TL", "TLS", "USD", false ],
    TOGO                              : ["Togo", "TG", "TGO", "XOF", false ],
    TOKELAU                           : ["Tokelau", "TK", "TKL", "NZD", false ],
    TONGA                             : ["Tonga", "TO", "TON", "TOP", false ],
    TRINIDAD_AND_TOBAGO               : ["Trinidad and Tobago", "TT", "TTO", "TTD", false ],
    TUNISIA                           : ["Tunisia", "TN", "TUN", "TND", false ],
    TURKEY                            : ["Turkey", "TR", "TUR", "TRY", false ],
    TURKMENISTAN                      : ["Turkmenistan", "TM", "TKM", "TMT", false ],
    TURKS_AND_CAICOS_ISLANDS          : ["Turks and Caicos Islands", "TC", "TCA", "USD", false ],
    TUVALU                            : ["Tuvalu", "TV", "TUV", "AUD", false ],
    UGANDA                            : ["Uganda", "UG", "UGA", "UGX", false ],
    UKRAINE                           : ["Ukraine", "UA", "UKR", "UAH", true ],
    UAE                               : ["United Arab Emirates", "AE", "ARE", "AED", false ],
    UK                                : ["United Kingdom", "GB", "GBR", "GBP", true ],
    USA                               : ["United States", "US", "USA", "USD", false ],
    USA_MINOR_OUTLYING_ISLANDS        : ["United States Minor Outlying Islands", "UM", "UMI", "USD", false ],
    URUGUAY                           : ["Uruguay", "UY", "URY", "UYU", false ],
    UZBEKISTAN                        : ["Uzbekistan", "UZ", "UZB", "UZS", false ],
    VANUATU                           : ["Vanuatu", "VU", "VUT", "VUV", false ],
    VENEZUELA                         : ["Venezuela, Bolivarian Republic of", "VE", "VEN", "VEF", false ],
    VIET_NAM                          : ["Viet Nam", "VN", "VNM", "VND", false ],
    BRITISH_VIRGIN_ISLANDS            : ["Virgin Islands, British", "VG", "VGB", "USD", false ],
    US_VIRGIN_ISLANDS                 : ["Virgin Islands, U.S.", "VI", "VIR", "USD", false ],
    WALLIS_AND_FUTUNA                 : ["Wallis and Futuna", "WF", "WLF", "XPF", false ],
    WESTERN_SAHARA                    : ["Western Sahara", "EH", "ESH", "MAD", false ],
    YEMEN                             : ["Yemen", "YE", "YEM", "YER", false ],
    ZAMBIA                            : ["Zambia", "ZM", "ZMB", "ZMW", false ],
    ZIMBABWE                          : ["Zimbabwe", "ZW", "ZWE", "ZWL", false],
};

const countries = [];

const countriesKeys = Object.keys(countriesRaw);
for(let i = 0; i < countriesKeys.length; i++) {
    const country = countriesRaw[countriesKeys[i]];
    countries.push(new Country(country))
}


function findCountryByName(countryName) {
    const countriesKeys = Object.keys(countries);
    for(let i = 0; i < countriesKeys.length; i++) {
        const country = countries[countriesKeys[i]];
        if (country.name === countryName) {
            return country;
        }
    }
    return null;
}

// function getPrices(template_id, country_code, shipping_country_code) {
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
    return new Promise((resolve, reject) => {
        const fields = {
            city: $("#city").val(),
            country: $("#country").val(),
            region:$("#region").val(),
            addressLine1: $("#address-line-1").val(),
            addressLine2:$("#address-line-2").val(),
            zip: $("#zip").val(),
        };
        Address.build(fields).then((address) => {
            resolve(address);
        }).catch(reject);;
    });
}

function getPrices(address) {
    return new Promise((resolve, reject) => {
        const body = {
            "basket":[
                {
                    "country_code": address.country.iso3,
                    "job_id":-1,
                    "quantity":1,
                    "template_id": $scope.templateId
                }
            ],
            "pay_in_store":0,
            "payment_gateway":"PAYPAL",
            "promo_code":"",
            "ship_to_store":0,
            "shipping_country_code": address.country.iso2
        };

        fetch(`${window.CORSURL}https://api.kite.ly/v3.0/price/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Authorization': `ApiKey ${creds.pubKey}`,
                'Content-Type': 'application/json',
                "User-Agent": "Kite SDK Android v5.8.9"
            },
            referrer: 'no-referrer',
            redirect: 'follow', 
            cache: 'no-cache', 
        }).then((response) => {
            response.json().then(json => {
                console.log(json);
                resolve(json);
            });
        }).catch(reject);
    });
}

