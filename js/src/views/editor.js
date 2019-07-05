const {$scope} =  require('../constants');
const {render, edit} = require("../edit");

class Editor {

    static getValuesFromStorage() {
        const template = localStorage.getItem('template');
        const variant = localStorage.getItem('variant');
        const image = localStorage.getItem('img');

        if (template && variant && image) {
            $scope.userImageUrl = image;
            $scope.templateId = template;
            $scope.variant = variant;
            edit();
        }
    }
    static run() {
        window.addEventListener("message", receiveMessage, false);

        Editor.getValuesFromStorage();
        function receiveMessage(event) {
            console.log(`Received ${JSON.stringify(event.data)}`)
            if (event.data.product_id) {
                $scope.templateId = event.data.product_id;
                if (event.data.userImageUrl && event.data.userImageUrl !== "null") {
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
                'min': 0.1,
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
        }

        // Binding signature
        slider.noUiSlider.on('update', doSomething);

        // Binding namespaced events
        slider.noUiSlider.on('set.one', function() {});

        $("#checkout-btn").on('click', function() {
            document.location.href = document.location.href.replace('editor.html', 'checkout.html');
        });

        $(".side-btn").on('click', function(btn) {
            const $btn = $(this);
            $scope.side = $btn.attr("data-side");
            $(".side-btn").toggleClass("c-basic-tabs-component__view--selected");
            edit();
        });

        $(`[data-side='${$scope.side}']`).addClass("c-basic-tabs-component__view--selected");
    }
}

module.exports = Editor;