<?php

function set_posts_per_page_for_projects_cpt( $query ) {
    if ( !is_admin() && $query->is_main_query() && (is_post_type_archive( 'product' ) || is_tax('product_category')) ) {
      $query->set( 'posts_per_page', '6' );
    }
  }
  add_action( 'pre_get_posts', 'set_posts_per_page_for_projects_cpt' );