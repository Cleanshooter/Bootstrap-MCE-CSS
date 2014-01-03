<?php
/**
 * Plugin Name:       Bootstrap MCE CSS
 * Plugin URI:        http://wordpress.org/plugins/bootstrap-mce-css/
 * Description:       Adds a modified version of the Bootstrap CSS to the MCE editor, for adding Bootstrap code to the editor, without shortcodes.
 * Version:           0.1.1
 * Author:            Dave Warfel
 * Author URI:        http://wpsmackdown.com/
 * Author: 			  Joe Motacek <motacekj@uwgb.edu>
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Load modified Bootstrap CSS from plugin folder
function plugin_mce_css( $mce_css ) {
	if ( ! empty( $mce_css ) )
		$mce_css .= ',';

	$mce_css .= plugins_url( 'css/bootstrap.min.css', __FILE__ );

	return $mce_css;
}
add_filter( 'mce_css', 'plugin_mce_css' );

$bmc_buttons = array(
    'grid',
    'bottom',
    'button',/*
    'labels',
    'badges',
    'alerts',
    'list-groups',
    'pannels',
    'wells',
    'media-object'*/
);

function bmc_buttonhooks() {
   // Only add hooks when the current user has permissions AND is in Rich Text editor mode
   if ( ( current_user_can('edit_posts') || current_user_can('edit_pages') ) && get_user_option('rich_editing') ) {
     add_filter('mce_buttons_2', 'bmc_register_buttons');
     add_filter("mce_external_plugins", "bmc_add_button_plugin");
   }
}

function bmc_register_buttons($buttons) {
	global $bmc_buttons;
	
    foreach ($bmc_buttons as $bmc_button) {
        $buttons[] = 'bmc' . $bmc_button;
    }
    return $buttons;
}

function bmc_add_button_plugin($plugin_array) {
    global $bmc_buttons;
    foreach ($bmc_buttons as $bmc_button) {
        $plugin_array['bmc' . $bmc_button] = plugins_url('', __FILE__) . '/js/' . $bmc_button . '_plugin.js';
    }
    return $plugin_array;
}

add_action('init', 'bmc_buttonhooks');