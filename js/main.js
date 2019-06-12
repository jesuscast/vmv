const constants = require('./src/constants');
const {runView} = require('./src/views');

window.env = constants.env;

window.runView = runView;
