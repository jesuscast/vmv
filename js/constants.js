const ctrl = {};
const $scope = {
    templateId: "a1_poster",
    variant: "cover",
    userImageUrl: "https://yt3.ggpht.com/a/AGF-l7_Gek-5o71NvSFO8pye4YJ-A7rToQnB_nbl8Q=s900-mo-c-c0xffffffff-rj-k-no",
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
$scope.userImageUrl = windowParams.get("img")
// imageParams.set("image", windowParams.get("img"));