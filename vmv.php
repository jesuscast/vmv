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
function get_user($user_id) {
	global $wpdb;
	$query = 'select * from wp_users where';
	$query .= ' id = "'.$user_id.'"';
	$query .= ' or user_nicename = "'.$user_id.'"';
	$query .= ' or user_login = "'.$user_id.'"';
	$query .= ' or user_email = "'.$user_id.'"';

	$user = $wpdb->get_row($query);
	if ($wpdb->last_error) {
		return array(null, new WP_Error( 'selection_error', $wpdb->last_error, array( 'status' => 404 ) ));
	}

	if (empty($user)) {
		return array(null, new WP_Error( 'no_user', 'User not found', array( 'status' => 404 ) ));
	}
	return array($user, null);
}

function post_user($params) {
	if (empty($params["user_id"]) ||
		empty($params["product_id"]) ||
		empty($params["variant"]) ||
		empty($params["scale"]) ||
		empty($params["category"]) ||
		empty($params["img"])) {
			return new WP_Error( 'missing_parameters', 'Request is missing order parameters', array( 'status' => 400 ) );
		}
	
	global $wpdb;
	$query = 'insert into vmv_orders(user_id,';
}

function get_orders($user) {
	global $wpdb;
	$query = 'select * from vmv_orders where';
	$query .= ' user_id="'.$user->ID.'"';

	$orders = $wpdb->get_results($query);
	if ($wpdb->last_error) {
		return array(0, new WP_Error( 'selection_error', $wpdb->last_error, array( 'status' => 404 ) ));
	}

	if (empty($orders)) {
		return array(0, new WP_Error( 'no_orders', 'Orders not found', array( 'status' => 404 ) ));
	}
	return array($orders, null);
}

function get_product_orders_for_user( WP_REST_Request $request ) {
	global $wpdb;
	$url_params = $request->get_query_params();

	$user_id = $url_params['user_id'];

	if (empty($user_id)) {
		return new WP_Error( 'no_user', 'Invalid user', array( 'status' => 400 ) );
	}

	$userResult = get_user($user_id);
	$user = $userResult[0];
	$userError = $userResult[1];
	if ($userError !== null) {
		return $userError;
	}
	$ordersResult = get_orders($user);
	$orders = $ordersResult[0];
	$ordersError = $ordersResult[1];
	if ($ordersError !== null) {
		return $ordersError;
	}
	return $orders;
}

function post_product_orders_for_user(WP_REST_Request $request) {
	$params = $request->get_body_params();

	return $params;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'vmv', '/orders', array(
		'methods' => 'GET',
		'callback' => 'get_product_orders_for_user',
	));
	register_rest_route( 'vmv', '/orders', array(
		'methods' => 'POST',
		'callback' => 'post_product_orders_for_user',
	));
});