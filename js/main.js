const constants = require('./src/constants');
const utilities = require('./src/utilities');
const edit = require('./src/edit');
const {
    Country,
    Address
} = require('./src/models');
const {runView} = require('./src/views');

window.sampleTransaction = constants.sampleTransaction;
window.CORSURL = constants.CORSURL;
window.CLEAN_IMAGE_ENDPOINT = constants.CLEAN_IMAGE_ENDPOINT;
window.creds = constants.creds;
window.env = constants.env;
window.$scope = constants.$scope;

window.placeOrder = utilities.placeOrder;
window.findCountryByName = utilities.findCountryByName;
window.getPrices = utilities.getPrices;
window.getAddress = utilities.getAddress;
window.runView = runView;

window.render = edit.render;
window.edit = edit.edit;

window.Country = Country;
window.Address = Address;