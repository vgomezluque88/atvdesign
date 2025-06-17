<?php

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Opciones generales',
		'menu_title'	=> 'Opciones',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Opciones de Footer',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
	));

}