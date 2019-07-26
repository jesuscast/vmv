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
add_shortcode( 'product_list_view', 'product_list_view_func' );


// You can access parameters via direct array access on the object:
// $param = $request['some_param'];
   
// // Or via the helper method:
// $param = $request->get_param( 'some_param' );

// // You can get the combined, merged set of parameters:
// $parameters = $request->get_params();

// // The individual sets of parameters are also available, if needed:
// $parameters = $request->get_url_params();
// $parameters = $request->get_query_params();
// $parameters = $request->get_body_params();
// $parameters = $request->get_json_params();
// $parameters = $request->get_default_params();

// // Uploads aren't merged in, but can be accessed separately:
// $parameters = $request->get_file_params();
function get_product_orders_for_user( WP_REST_Request $request ) {
	$url_params = $request->get_url_params();

	$user_id = $url_params['user_id'];

	if (empty($user_id)) {
		return new WP_Error( 'no_user', 'Invalid user', array( 'status' => 400 ) );
	}

	$query = 'select * from wp_users where';
	$query .= ' id = "'.$user_id.'"';
	$query .= ' or user_nicename = "'.$user_id.'"';
	$query .= ' or user_login = "'.$user_id.'"';
	$query .= ' or user_email = "'.$user_id.'"';

	$user = $wpdb->get_row($query);
	return "ads";
	// if ($wpdb->last_error) {
	// 	return new WP_Error( 'selection_error', $wpdb->last_error, array( 'status' => 404 ) );
	// }

	// if (empty($user)) {
	// 	return new WP_Error( 'no_user', 'User not found', array( 'status' => 404 ) );
	// }
	// echo json_encode($user);
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'vmv', '/orders/(?P<user_id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_product_orders_for_user',
	));
});