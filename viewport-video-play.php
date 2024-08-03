<?php
/**
 * Plugin Name: Viewport Video Play
 * Plugin URI: https://www.koushiknaikel.in/viewport-video-play
 * Description: This plagin will play those vedios which is on your vewport
 * Version: 1.2
 * Author: Koushik Naikel
 * Author URI: https://www.koushiknaikel.in
 */
 
/* add_action('wp_enqueue_scripts','addjsforvewport');
function addjsforvewport() {
    wp_enqueue_script( 'add-js-for-vewport', "//www.koushiknaikel.in/viewport-video-play/script.js");
} */
add_action('wp_footer', 'add_video_viewport_script_footer', 20);
function add_video_viewport_script_footer(){
	echo "<script src='".plugins_url( '/js/script.js', __FILE__ )."' id='add-js-for-vewport-js'></script>";
}