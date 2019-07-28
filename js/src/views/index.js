const Checkout = require('./checkout');
const Editor = require('./editor');
const PaymentConfirmation = require('./payment_confirmation');
const Payment = require('./payment');
const Selection = require('./selection');
const ProductHistory = require('./product_history');

const viewMappings = {
    'checkout': Checkout,
    'editor': Editor,
    'payment_confirmation': PaymentConfirmation,
    'payment': Payment,
    'selection': Selection,
    'product_history': ProductHistory
}

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
    if(!viewMappings[viewName]) {
        console.error(`${viewName} is not a valid view`);
        return;
    }

    const view = viewMappings[viewName];

    create_link('../css/editor.css')
    create_link('../css/kitely.css')
    
    $(document).ready(function(){
        view.run();
    });
}

module.exports = {
    runView
}