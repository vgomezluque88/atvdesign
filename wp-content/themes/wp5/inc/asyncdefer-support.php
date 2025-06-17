<?php 

function add_async_defer_attributes( $tag, $handle ) {
	if( strpos( $handle, "async" ) ):
		$tag = str_replace(' src', ' async="async" src', $tag);
	endif;
	if( strpos( $handle, "defer" ) ):
		$tag = str_replace(' src', ' defer="defer" src', $tag);
	endif;
	return $tag;
}

add_filter('script_loader_tag', 'add_async_defer_attributes', 10, 2);