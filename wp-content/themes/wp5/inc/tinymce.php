<?php
/**
 * Add styles/classes to the "Styles" drop-down
 */
add_filter('tiny_mce_before_init', 'fb_mce_before_init');

function fb_mce_before_init($settings)
{

  $style_formats = array(

    array(
      'title' => 'Label',
      'inline' => 'span',
      'classes' => 'text-label',
      'exact' => true,
      'wrapper' => true
    ),
    array(
      'title' => 'Título 1',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-1'
    ),
    array(
      'title' => 'Título 2',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-2'
    ),
    array(
      'title' => 'Título 3',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-3'
    ),
    array(
      'title' => 'Título 4',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-4'
    ),
    array(
      'title' => 'Título 5',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-5'
    ),
    array(
      'title' => 'Título 6',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-6'
    ),

    array(
      'title' => 'Texto pequeño',
      'selector' => 'p',
      'classes' => 'text-small'
    ),

    array(
      'title' => 'Texto medium',
      'selector' => 'p',
      'classes' => 'text-medium'
    ),

    array(
      'title' => 'Texto destacado',
      'selector' => 'p',
      'classes' => 'text-important'
    ),
    
    array(
      'title' => 'Title section Grey',
      'selector' => 'p,h1,h2,h3,h4,h5,h6',
      'classes' => 'title-section'
    ),

    array(
      'title' => 'Texto legal',
      'selector' => 'p',
      'classes' => 'text-small'
    ),

    array(
      'title' => 'Button',
      'selector' => 'a',
      'classes' => 'link--button'
    ),

    array(
      'title' => 'Link Download',
      'selector' => 'a',
      'classes' => 'link--download'
    ),
    
  );

  $settings['style_formats'] = json_encode($style_formats);

  return $settings;
}

/*
// Add Custom Quicktags to Text Editorfunction smackdown_add_quicktags()
{
  if (wp_script_is('quicktags')) { ?>
    <script type="text/javascript">
      QTags.addButton('small_tag', 'small', '<small>', '</small>', '', '', 1);
    </script>
  <?php }
}
add_action('admin_print_footer_scripts', 'smackdown_add_quicktags');
*/

function add_em_quicktags() {
  wp_add_inline_script(
      'quicktags',
      "QTags.addButton('small_tag', 'small', '<small>', '</small>', '', '', 1)"
  );
}
add_action( 'wp_enqueue_scripts', 'add_em_quicktags' );


add_filter('tiny_mce_before_init', 'customize_removeformat_button');

function customize_removeformat_button($init) {
    // Personaliza el comportamiento de "removeformat"
    $init['formats'] = json_encode([
        'removeformat' => [
            'inline' => 'span',
            'block' => 'div,h1,h2,h3,h4,h5,h6,p',
            'selector' => '*',
            'remove' => 'all',
            'deep' => true,
            'split' => true,
            'expand' => false,
            'block_expand' => false,
            'inline_expand' => false,
            'remove_formats' => 'background-color,color,font-family,font-size,text-decoration,line-height,margin,padding,position'
        ]
    ]);

    // Mantén <b> y <strong> al borrar estilos
    $init['removeformat_exceptions'] = 'b,strong';

    return $init;
}