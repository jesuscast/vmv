<?php
include 'create_product_default_view.php';

function image_editor_view_func() {
?>
 <div> Random test <?php plugins_url('js/edit.js', __FILE__) ?>what</div>
<?php
}



add_shortcode( 'image_editor_view', 'image_editor_view_func' );

function link_js_files() {
    
}
?>

