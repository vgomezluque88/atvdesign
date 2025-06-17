<?php

function invisible_recaptcha_terms_func( $atts ) {
	$atts = shortcode_atts( array(
		
	), $atts, 'invisible_recaptcha_terms' );

    return '<div class="invisible-recaptcha-terms">
                <div>
                '.__('This site is protected by reCAPTCHA and the Google
                <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.','wp5').'
                </div>
            </div>';
}
add_shortcode( 'invisible_recaptcha_terms', 'invisible_recaptcha_terms_func' );


add_filter( 'wpcf7_form_elements', 'mycustom_wpcf7_form_elements' );

function mycustom_wpcf7_form_elements( $form ) {
$form = do_shortcode( $form );

return $form;
}
