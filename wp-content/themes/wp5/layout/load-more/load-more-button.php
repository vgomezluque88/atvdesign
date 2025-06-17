<?php
    //global $wp_query; // you can remove this line if everything works for you
    $wp_query = $args['query'];

    if(isset($custom_query)) {
        $wp_query = $custom_query;
    }else {
        $custom_query = false;
    }
    

    // don't display the button if there are not enough posts
    if (  $wp_query->max_num_pages > 1 ) {
        $post_count = $wp_query->post_count;        
        
        $post_type = (!$custom_query) ? get_post_type() : $wp_query->query['post_type'];
        //echo '<div data-post-count="'.$post_count.'" data-post-type="'.$post_type.'" '.$taxonomy_query.' '.$tax_query.' data-lang="'.ICL_LANGUAGE_CODE.'" class="loadmore_posts"><span class="loader-plus">' . _e('View more','wp5') . '</span></div>'; // you can use <a> as well
        echo '<div data-post-count="'.$post_count.'" data-post-type="'.$post_type.'" class="loadmore_posts"><span class="loader-plus">'. __('Ver más','wp5') .'</span></div>'; // you can use <a> as well 
    }
?>