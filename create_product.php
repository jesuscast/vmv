<?php
include 'create_product_default_view.php';

function image_editor_view_func() {
?>
    <div id="image-editor-container" class="image-editor-container">
        <div ng-show="ctrl.loading" id="image-editor-progress-spinner" class="kite-spinner"></div>
        <canvas ng-hide="ctrl.loading" id="image-editor-canvas-background" class="image-editor-canvas" style="z-index: 1"></canvas>
        <canvas ng-hide="ctrl.loading" id="image-editor-canvas-foreground" class="image-editor-canvas" style="z-index: 2" ng-mousemove="ctrl.onMouseMove($event)" ng-mousedown="ctrl.onMouseDown($event)" ng-mouseup="ctrl.onMouseUp($event)" ng-mouseleave="ctrl.onMouseUp($event)"></canvas>
        <!--<div ng-show="ctrl.loading" id="image-editor-progress-spinner" class="progress-spinner"></div>-->
    </div>
<?php
}


add_shortcode( 'image_editor_view', 'image_editor_view_func' );
?>

