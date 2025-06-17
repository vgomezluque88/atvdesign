<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="cli_theme_customize">
	<div class="cli_current_theme" data-cli-bartype="<?php echo isset( $templates['current_theme_type'] ) ? esc_attr( $templates['current_theme_type'] ) : ''; ?>">
	<?php
	$current_theme = isset( $templates['current_theme'] ) ? $templates['current_theme'] : '';
	Cookie_Law_Info_Cli_Themes::cli_themeblock( $current_theme );
	?>
	</div>
	<div class="cli_theme_hidden_vals">
		<?php
		for ( $e = 1; $e <= 7; $e++ ) {
			if ( $e == 6 ) {
				continue;
			}
			$btn_name = 'button_' . $e;
			$vl       = $current_theme['config'][ $btn_name ]['text'];
			?>
			<input type="hidden" value="<?php echo $vl; ?>" name="cli_theme_hid_<?php echo $btn_name; ?>">
			<?php
		}
		?>
		<input type="hidden" value="<?php echo $current_theme['config']['heading']['text']; ?>" name="cli_theme_hid_heading">
	</div>
	<?php
	require plugin_dir_path( __FILE__ ) . 'theme_property_box.php';
	$the_options = Cookie_Law_Info::get_settings();
	$is_iab_enabled = $the_options['iab_enabled']; 
    $consent_type = $the_options['consent_type'];
    if( true === $is_iab_enabled && ( 'gdpr' === $consent_type || 'ccpa_gdpr' === $consent_type ) )
    {
		?>
		<div class="cli_iab_notice">
	        <div class="" style="display:flex;">
	            <div class="dashicons dashicons-info" style="font-size: 18px;"></div>
	            <div style="padding-left: 6px;">
	                <label><?php echo sprintf( __('Your banner has been enabled with %s IAB TCF v2.2 support %s. This means that most of the text will be non-editable. The IAB TCF v2.2 enforces strict policies on the wording used in the first and second layers of a cookie banner to ensure clear and concise information for users about the collection and processing of their data.', 'webtoffee-gdpr-cookie-consent'),'<b>','</b>');?></label>
	            </div>
	        </div>
	    </div>
	   <?php
	}
	?>
	<b style="width:auto; float: left; margin-bottom:5px; height:37px; line-height:57px;" class="cli_theme_hd_dv"><?php echo _e( 'Cookie bar - Design editor', 'webtoffee-gdpr-cookie-consent' ); ?></b>
	<?php
	require plugin_dir_path( __FILE__ ) . 'theme_buttons.php';
	?>
	<div class="cli_theme_customizebox">
		<div class="cli_theme_customizecontent"></div>
		<div class="cli_theme_customizemsg" style="float:left; width:100%; display: none;">
			<?php _e( 'Click on the elements to customize.', 'webtoffee-gdpr-cookie-consent' ); ?>
		</div>
	</div>

	<b style="width: 100%; float: left; margin-bottom:5px;" class="cli_theme_hd_tv"><?php echo _e( 'Cookie message - Text editor', 'webtoffee-gdpr-cookie-consent' ); ?></b>
	<div style="width: 100%; float: left; margin-top:0px; height:auto; padding-bottom:0px;">
		<textarea class="cli_theme_box_txt"></textarea>
	</div>
	<div class="cli_theme_customizemsg cli_theme_customizewrnmsg" style="float:left; width: 100%; display: none; color: red;">
		<?php _e( 'Text on the selected theme may be different. Please update the cookie message accordingly in the above text view.', 'webtoffee-gdpr-cookie-consent' ); ?>
	</div>

	<?php
	require plugin_dir_path( __FILE__ ) . 'theme_buttons.php';
	require plugin_dir_path( __FILE__ ) . 'themes_popup.php';
	?>
</div>
