const constants = require('./src/constants');
const utilities = require('./src/utilities');
const edit = require('./src/edit');

window.sampleTransaction = constants.sampleTransaction;
window.CORSURL = constants.CORSURL;
window.CLEAN_IMAGE_ENDPOINT = constants.CLEAN_IMAGE_ENDPOINT;
window.creds = constants.creds;
window.env = constants.env;

window.placeOrder = utilities.placeOrder;
window.findCountryByName = utilities.findCountryByName;
window.getPrices = utilities.getPrices;
window.getAddress = utilities.getAddress;
window.Address = utilities.Address;

window.render = edit.render;
window.edit = edit.edit;