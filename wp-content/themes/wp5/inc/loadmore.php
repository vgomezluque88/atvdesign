<?php

function product_my_load_more_scripts() {
    global $wp_query; 
    // In most cases it is already included on the page and this line can be removed
    wp_enqueue_script('jquery');

    // register our main script but do not enqueue it yet
    wp_register_script( 'my_loadmore', get_stylesheet_directory_uri() . '/js/loadmoreposts.js', array('jquery') );

    // now the most interesting part
    // we have to pass parameters to myloadmore.js script but we can get the parameters values only in PHP
    // you can define variables directly in your HTML but I decided that the most proper way is wp_localize_script()
    wp_localize_script( 'my_loadmore', 'loadmore_posts_params', array(
        'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php', // WordPress AJAX
        'posts' => json_encode( $wp_query->query_vars ), // everything about your loop is here
        'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
        //número de loops, tots els posts menys els fixes, dividit entre el ofsset
        //'max_page' => floor(($wp_query->found_posts -  $wp_query->post_count) / 4)
        'max_page' => $wp_query->max_num_pages
    ) );

    wp_enqueue_script( 'my_loadmore' );
}

add_action( 'wp_enqueue_scripts', 'product_my_load_more_scripts' );

function loadmore_posts_ajax_handler(){
    global $sitepress;
    //$lang=$_POST['lang'];
    //$sitepress->switch_lang($lang);
    $post_count = $_POST['post_count'];
    $tax_query = '';
   
    /*$args = array(
        'posts_per_page'   => $_POST['offset'],
        //offset de 7 posts fixes més el número de posts que volem que surtin
        'offset'           => $post_count + $_POST['valor'],
        'orderby'          => 'date',
        'order'            => 'DESC',
        'paged'            => $_POST['page'] + 1,
        'post_type'        => $_POST['post_type'],
        'post_status'      => 'publish',
        'suppress_filters' => false,
        'fields'           => '',
        'tax_query'        => $tax_query,
    );*/

    $args = json_decode( stripslashes( $_POST['query'] ), true );
	$args['paged'] = $_POST['page'] + 1; // we need next page to be loaded
	$args['post_status'] = 'publish';
    
    
    // it is always better to use WP_Query but not here
    query_posts( $args );
    //echo "<script>console.log( 'Page: " . ($args) . "' );</script><br><br>";

    if( have_posts() ) :
    
        // run the loop
        while( have_posts() ): the_post();                
        
            //get_template_part( 'loop-templates/content', $_POST['post_type'] ); 

            if($_POST['post_type'] !== 'post') {
                get_template_part( 'loop-templates/content', $_POST['post_type'] );                
            }else{
                get_template_part('template-parts/content/content', 'posts-grid');
            }

        endwhile;

        //get_template_part( 'layout/load-more/load-more-button', '', array('query' => $query));      
    
    endif;
    die; // here we exit the script and even no wp_reset_query() required!
}
    
    
    
add_action('wp_ajax_loadmore', 'loadmore_posts_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'loadmore_posts_ajax_handler'); // wp_ajax_nopriv_{action}