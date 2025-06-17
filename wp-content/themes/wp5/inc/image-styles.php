<?php

//*Disable generated image sizes
/* function wp5_disable_image_sizes($sizes) {
	
	unset($sizes['medium']);       // disable medium size
	unset($sizes['large']);        // disable large size
	unset($sizes['medium_large']); // disable medium-large size
	unset($sizes['1536x1536']);    // disable 2x medium-large size
	unset($sizes['2048x2048']);    // disable 2x large size
	
	return $sizes;
	
}
add_action('intermediate_image_sizes_advanced', 'wp5_disable_image_sizes');  */




//* Generate styles image 

//*hero image
add_image_size( 'hero-image', 1920, 757, true );
add_image_size( 'hero-image-mobile', 375, 530, true );

//*Blog
add_image_size( 'blog-grid', 350, 170, true );
add_image_size( 'blog-grid-big', 800, 272, true );
add_image_size( 'blog-post', 1080, 705, true );




