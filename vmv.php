<?php
/**
 * Plugin Name: ViewMyVoice shop
 * Plugin URI: https://viewmyvoice.net
 * Description: View my Voice
 * Version: 1.0
 * Author: Andres Castaneda
 * Author URI: https://viewmyvoice.net
 */

include './php/create_product.php';

// [create_product_gallery]
function create_product_gallery_func( $atts ){
	return get_create_product_default_view();
}

add_shortcode( 'create_product_gallery', 'create_product_gallery_func' );
add_shortcode( 'image_editor_view', 'image_editor_view_func' );
add_shortcode( 'product_list_view', 'product_list_view_func' );
add_shortcode( 'get_product_history', 'get_product_history_func' );

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
	$missingParams = (empty($params["user_id"]) ||
		empty($params["product_id"]) ||
		empty($params["variant"]) ||
		empty($params["scale"]) ||
		empty($params["category"]) ||
		empty($params["img"]));
	if ($missingParams) {
		return array(null, new WP_Error( 'missing_parameters', $params, array( 'status' => 400 ) ));
	}
	if (!is_numeric($params["scale"])) {
		return array(null, new WP_Error( 'invalid_param', 'Scale must be a numeric value', array( 'status' => 400 ) ));
	}
	global $wpdb;
	$userResult = get_user($params["user_id"]);
	$user = $userResult[0];
	$userError = $userResult[1];
	if ($userError !== null) {
		return array(null, $userError);
	}
	$query = 'insert into vmv_orders(user_id,product_id,variant,scale,category,img)';
	$query .= ' values (';
	$query .= $user->ID.',';
	$query .= '"'.$params["product_id"].'",';
	$query .= '"'.$params["variant"].'",';
	$query .= $params["scale"].',';
	$query .= '"'.$params["category"].'",';
	$query .= '"'.$params["img"].'"';
	$query .= ')';
	$results = $wpdb->get_results($query);
	if ($wpdb->last_error) {
		return array(null, new WP_Error( 'insertion_error', $wpdb->last_error, array( 'status' => 500) ));
	}
	return array($results, null);
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

function get_orders_for_user($user_id) {
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

function get_orders_for_user_endpoint( WP_REST_Request $request ) {
	global $wpdb;
	$url_params = $request->get_query_params();

	$user_id = $url_params['user_id'];

	if (empty($user_id)) {
		return new WP_Error( 'no_user', 'Invalid user', array( 'status' => 400 ) );
	}

	return get_orders_for_user($user_id);
}

function post_product_orders_for_user_endpoint(WP_REST_Request $request) {
	$params = $request->get_body_params();
	if (empty($params)) {
		$params = $request->get_json_params();
	}
	if (empty($params)) {
		return new WP_Error( 'no_params', 'No params received', array( 'status' => 400 ) );
	}
	$postResult = post_user($params);
	$postError = $postResult[1];
	$postValue = $postResult[0];
	if ($postError !== null) {
		return $postError;
	}
	return get_orders_for_user($params['user_id']);
}

function get_full_user_endpoint(WP_REST_Request $request) {
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

	return array(
		"email" => $user->user_email,
		"name" => $user->user_nicename,
		"username" => $user->user_login,
		"id" => $user->ID
	);

}

add_action( 'rest_api_init', function () {
	register_rest_route( 'vmv', '/orders', array(
		'methods' => 'GET',
		'callback' => 'get_orders_for_user_endpoint',
	));
	register_rest_route( 'vmv', '/user', array(
		'methods' => 'GET',
		'callback' => 'get_full_user_endpoint',
	));
	register_rest_route( 'vmv', '/orders', array(
		'methods' => 'POST',
		'callback' => 'post_product_orders_for_user_endpoint',
	));
});