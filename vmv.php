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

// [create_product_gallery]
function create_product_gallery_func( $atts ){
	return get_create_product_default_view();
}

add_shortcode( 'create_product_gallery', 'create_product_gallery_func' );
add_shortcode( 'image_editor_view', 'image_editor_view_func' );
remove_action( 'login_init', 'send_frame_options_header' );
