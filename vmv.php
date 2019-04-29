<?php
/**
 * Plugin Name: ViewMyVoice shop
 * Plugin URI: https://viewmyvoice.net
 * Description: View my Voice
 * Version: 1.0
 * Author: Andres Castanead
 * Author URI: https://viewmyvoice.net
 */

//[foobar]
function foobar_func( $atts ){
	return "foo and bar";
}
add_shortcode( 'foobar', 'foobar_func' );