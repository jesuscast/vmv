const Checkout = require('./checkout');
const Editor = require('./editor');
const PaymentConfirmation = require('./payment_confirmation');
const Payment = require('./payment');
const Selection = require('./selection');
const ProductHistory = require('./product_history');
const {$scope} =  require('../constants');

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
    window.addEventListener("message", receiveMessageGlobal, false);

    function receiveMessageGlobal(event) {
        console.log(`Received ${JSON.stringify(event.data)}`);
        if (event.data.userId && event.data.userId !== "null") {
            $scope.userIdWP = event.data.userId;
            localStorage.setItem('userIdWP',  $scope.userIdWP);
        }
        if (event.data.userImageUrl && event.data.userImageUrl !== "null") {
            $scope.userImageUrl = event.data.userImageUrl;
            localStorage.setItem('img',  $scope.userImageUrl);
        }
        if (viewName == 'product_history' && $scope.userIdWP) {
            ProductHistory.refreshItemList($scope.userIdWP);
        } else if (viewName == 'selection') {
            Selection.loadItemsIntoSelection();
        }
    }

    if(!viewMappings[viewName]) {
        console.log(`${viewName} is not a valid view`);
        return;
    }

    const view = viewMappings[viewName];

    create_link('../css/editor.css')
    create_link('../css/kitely.css')
    
    $(document).ready(function(){
        view.run();
        window.parent.postMessage({status: 'loaded'}, '*');
    });
}

module.exports = {
    runView
}