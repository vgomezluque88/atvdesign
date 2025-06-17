<?php

add_action( 'admin_init', function() {
  add_post_type_support( 'post', 'page-attributes' );
} );

add_action( 'pre_get_posts', function( $query ) {
  if ( ! is_admin() && $query->is_main_query() && ( $query->is_home() || $query->is_archive() ) ) {
      $query->set( 'orderby', 'date' );
      $query->set( 'order', 'DESC' );
  }
} );