<?php
/**
 * Plugin Name: ViewMyVoice shop
 * Plugin URI: https://viewmyvoice.net
 * Description: View my Voice
 * Version: 1.0
 * Author: Andres Castaneda
 * Author URI: https://viewmyvoice.net
 */

include 'create_product.php';
include 'editor.php';

// [create_product_gallery]
function create_product_gallery_func( $atts ){
	return get_create_product_default_view();
}

// [get_create_editor]
function get_create_editor_func($atts) {
	return get_create_editor();
}

add_shortcode( 'create_product_gallery', 'create_product_gallery_func' );
add_shortcode( 'get_create_editor', 'get_create_editor_func' );
