<?php

/**
 * Custom control for radio buttons with nested options.
 *
 * Used for our image cropping settings.
 *
 * @version 2.2.9
 * @package CookieLawInfo
 */

if (!defined('ABSPATH')) {
    exit;
}

class Cookie_Law_Info_CCPA
{

    /**
     * Initialization
     *
     * @since 2.2.9
     **/
    private static $consent_allowed_values = array('ccpa','gdpr','ccpa_gdpr');
    public $ccpa_enabled;
    public $ccpa_as_link;
    public $ccpa_text;
    public $ccpa_region_based;
    public $consent_type;
    public $ccpa_content;
    public $ccpa_gdpr_content;
    public $gdpr_content;
    public $ccpa_enable_bar;
    public $ccpa_link_colour;
    public function __construct()
    {   
        $cookie_options             =   Cookie_Law_Info::get_settings();
        $ccpa_settings              =   $this->get_ccpa_default_settings();
        $ccpa_default_text          =   ( isset( $ccpa_settings['ccpa'] ) ? $ccpa_settings['ccpa'] : '' );
        $ccpa_gdpr_default_text     =   ( isset( $ccpa_settings['ccpa_gdpr'] ) ? $ccpa_settings['ccpa_gdpr'] : '' );
        $this->ccpa_enabled         =   Cookie_Law_Info::sanitise_settings('ccpa_enabled', ( isset( $cookie_options['ccpa_enabled'] ) ? $cookie_options['ccpa_enabled'] : false ) );
        $this->ccpa_as_link         =   Cookie_Law_Info::sanitise_settings('button_6_as_link', ( isset( $cookie_options['button_6_as_link'] ) ? $cookie_options['button_6_as_link'] : true ) );
        $this->ccpa_text            =   Cookie_Law_Info::sanitise_settings('button_6_text', ( isset( $cookie_options['button_6_text'] ) ? $cookie_options['button_6_text'] : 'Do not sell my personal information' ) );
        $this->ccpa_link_colour     =   Cookie_Law_Info::sanitise_settings('button_6_link_colour', ( isset( $cookie_options['button_6_link_colour'] ) ? $cookie_options['button_6_link_colour'] : '#000000' ) );
        $this->ccpa_region_based    =   Cookie_Law_Info::sanitise_settings('ccpa_region_based', ( isset( $cookie_options['ccpa_region_based'] ) ? $cookie_options['ccpa_region_based'] : false ) );
        $this->consent_type         =   Cookie_Law_Info::sanitise_settings('consent_type', ( isset( $cookie_options['consent_type'] ) ? $cookie_options['consent_type'] : 'gdpr' ) );
        $this->ccpa_gdpr_content    =   Cookie_Law_Info::sanitise_settings('ccpa_gdpr_content', ( isset( $cookie_options['ccpa_gdpr_content'] ) ? $cookie_options['ccpa_gdpr_content'] : $ccpa_gdpr_default_text ) );
        $this->gdpr_content         =   Cookie_Law_Info::sanitise_settings('gdpr_content', ( isset( $cookie_options['gdpr_content'] ) ? $cookie_options['gdpr_content'] : $cookie_options['notify_message'] ) );
        $this->ccpa_content         =   Cookie_Law_Info::sanitise_settings('ccpa_content', ( isset( $cookie_options['ccpa_content'] ) ? $cookie_options['ccpa_content'] : $ccpa_default_text) );
        $this->ccpa_enable_bar      =   Cookie_Law_Info::sanitise_settings('ccpa_enable_bar', ( isset( $cookie_options['ccpa_enable_bar'] ) ? $cookie_options['ccpa_enable_bar'] : false ) );
        
        add_action( 'wt_cli_ccpa_settings', array( $this, 'add_ccpa_settings'));
        add_action( 'cookielawinfo-category_add_form_fields', array($this, 'cookie_add_ccpa_applicable_category'),1000, 2 );
        add_action( 'cookielawinfo-category_edit_form_fields', array($this, 'cookie_edit_ccpa_applicable_category'), 1000 );
        add_action( 'edited_cookielawinfo-category', array($this, 'cookie_save_ccpa_applicable_category'));  
        add_action( 'create_cookielawinfo-category', array($this, 'cookie_save_ccpa_applicable_category'));
        add_action( 'init', array($this, 'initialize_ccpa_applicable_category'));
        add_action( 'wp_enqueue_scripts', array( $this, 'wt_cli_enqueue_script'));
        add_action( 'wt_cli_before_cookie_message',array($this, 'wt_cli_message_toggler'));
        add_filter( 'wt_cli_before_save_settings',array($this, 'wt_cli_modify_plugin_settings'),10,2);
        add_filter( 'wt_cli_plugin_settings', array( $this, 'wt_cli_add_options'),10);
        add_filter( 'admin_enqueue_scripts', array( $this, 'wt_cli_enqueue_admin_scripts'),10);
        add_shortcode( 'wt_cli_ccpa_optout', array( $this, 'wt_cli_ccpa_optout_callback'));
         // Ajax action to save choosen consent type
        add_action( 'wp_ajax_wt_cli_update_consent_type',array($this,'wt_update_consent_type'));
        // Ajax action to enable/disable IAB
        add_action( 'wp_ajax_wt_cli_enable_or_disable_iab',array($this,'wt_enable_iab'));
        
       
    }
    public function add_ccpa_settings() {
        $cookie_options = Cookie_Law_Info::get_settings();
        $ccpa_settings_file  = plugin_dir_path( __FILE__ ).'views/ccpa_settings.php';
        if( file_exists($ccpa_settings_file) )
        {
            include $ccpa_settings_file;
            echo $ccpa_settings;
        }  
    }
    public function get_ccpa_default_settings() {
        $settings = array (
            'ccpa' => addslashes ( '<div class="cli-bar-container cli-style-v2"><div class="cli-bar-message">This website or its third-party tools process personal data.</br>In case of sale of your personal information, you may opt out by using the link [wt_cli_ccpa_optout].</div>[cookie_close]</div>'),
            'ccpa_gdpr' => addslashes ( '<div class="cli-bar-container cli-style-v2"><div class="cli-bar-message">We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept”, you consent to the use of ALL the cookies.</br><div class="wt-cli-ccpa-element"> In case of sale of your personal information, you may opt out by using the link [wt_cli_ccpa_optout].</div></div><div class="cli-bar-btn_container">[cookie_settings][cookie_button]</div></div>'),
        );
        return $settings;
    }
    public function wt_cli_add_options( $options ) {
        
        $options = ( isset( $options ) && is_array( $options ) ) ? $options : array();
        
        $options['ccpa_enabled']            = $this->ccpa_enabled;
        $options['button_6_as_link']        = $this->ccpa_as_link;
        $options['button_6_text']           = $this->ccpa_text;
        $options['ccpa_enable_bar']         = $this->ccpa_enable_bar;
        $options['ccpa_region_based']       = $this->ccpa_region_based;
        $options['consent_type']            = $this->consent_type;
        $options['ccpa_content']            = $this->ccpa_content;
        $options['ccpa_gdpr_content']       = $this->ccpa_gdpr_content;
        $options['gdpr_content']            = $this->gdpr_content;
        $options['button_6_link_colour']    = $this->ccpa_link_colour;  

        return $options;
    }
    public function wt_cli_enqueue_admin_scripts() {
        if(isset($_GET['post_type']) && $_GET['post_type']==CLI_POST_TYPE && isset($_GET['page']) && $_GET['page']=='cookie-law-info') {
            wp_enqueue_script('cookie-law-info-ccpa-admin',plugin_dir_url( __FILE__ ).'assets/js/cookie-law-info-ccpa-admin.js', array( 'jquery'),CLI_VERSION,false);
            $params = array(
                'nonce'    => wp_create_nonce( esc_html( CLI_POST_TYPE ) ),
                'ajax_url' => admin_url( 'admin-ajax.php' ),
            );
            wp_localize_script( 'cookie-law-info-ccpa-admin', 'cli_admin', $params );
        }
    }
    public function wt_cli_enqueue_script() {
            
       if( !is_admin() ) {
            $cookie_options = Cookie_Law_Info::get_settings();
            
            $ccpa_enabled        = ( wp_validate_boolean ( isset( $cookie_options['ccpa_enabled'] ) ? $cookie_options['ccpa_enabled'] : false ) );
            $cli_ccpa_datas = array (
                'opt_out_prompt' => __('Do you really wish to opt out?','webtoffee-gdpr-cookie-consent'),
                'opt_out_confirm' => __('Confirm','webtoffee-gdpr-cookie-consent'),
                'opt_out_cancel' => __('Cancel','webtoffee-gdpr-cookie-consent'),
            );
            if( $ccpa_enabled === true ) {
                wp_enqueue_script('cookie-law-info-ccpa',plugin_dir_url( __FILE__ ).'assets/js/cookie-law-info-ccpa.js', array( 'jquery','cookie-law-info'),CLI_VERSION,false);
                wp_localize_script('cookie-law-info-ccpa', 'ccpa_data', $cli_ccpa_datas );
            }
        }
    }
    public function cookie_add_ccpa_applicable_category() {
        ?>
		<div class="form-field">
			<label for="CLIccpaoptout"><?php _e( 'Sells Personal Information', 'webtoffee-gdpr-cookie-consent' ); ?></label>
			<input type="checkbox" name="CLIccpaoptout" id="CLIccpaoptout" value="1">
			<p class="description"><?php _e('If you enable this option, scripts under this category will be considered as personal data collecting scripts and will be blocked if opted out from CCPA', 'webtoffee-gdpr-cookie-consent' ); ?></p>
		</div>
	<?php
    }
    
	public function initialize_ccpa_applicable_category()
	{
	    $args = array(
	        'taxonomy' => 'cookielawinfo-category',
	        'hide_empty' => false,
	        'meta_query' => array(
	            array(
	                'key' => 'CLIccpaoptout',
	                'compare' => 'NOT EXISTS'
	            ),
	        )
	    );
	    $terms = get_terms($args);
	    if(!empty($terms)){
	        foreach ($terms as $term) {
	        update_term_meta($term->term_id, 'CLIccpaoptout',0);
	        }
	    }
    }
    public function cookie_edit_ccpa_applicable_category($term) 
	{
		// put the term ID into a variable
		$t_id = $term->term_id;	 
		$term_CLIccpaoptout = get_term_meta( $t_id,'CLIccpaoptout',true ); 
		?>
		<tr class="form-field">
			<th><label for="CLIccpaoptout"><?php _e('Sells Personal Information' ); ?></label></th>			 
			<td>	 
				<input type="checkbox" name="CLIccpaoptout" id="CLIccpaoptout" value="1" <?php echo $term_CLIccpaoptout==1 ? 'checked="checked"' : ''; ?>>
				<p class="description"><?php _e('If you enable this option, scripts under this category will be considered as personal data collecting scripts and will be blocked if opted out from CCPA', 'webtoffee-gdpr-cookie-consent' ); ?></p>
			</td>
		</tr>
	<?php
    }
    public function cookie_save_ccpa_applicable_category($term_id)
	{
	    if(isset($_POST['CLIccpaoptout'])) 
	    {
	        $term_CLIccpaoptout = sanitize_text_field($_POST['CLIccpaoptout']);
	        if($term_CLIccpaoptout)
	        {
	            update_term_meta($term_id,'CLIccpaoptout',$term_CLIccpaoptout);
	        }
	    }else
	    {
	        update_term_meta($term_id,'CLIccpaoptout',0);
	    }
    }    
    public function wt_cli_ccpa_optout_callback() {

        $ccpa_data           = '';
        $ccpa_enabled        = $this->ccpa_enabled;
        $ccpa_as_link        = $this->ccpa_as_link;
        $ccpa_text           = $this->ccpa_text;
        $ccpa_colour         = $this->ccpa_link_colour;  
        if( $ccpa_enabled === false ) {
            return '';
        }
        if( $ccpa_as_link === false ) {

            $ccpa_data = '<span class="wt-cli-form-group wt-cli-custom-checkbox wt-cli-ccpa-checkbox"><input type="checkbox" id="wt-cli-ccpa-opt-out" class="wt-cli-ccpa-opt-out wt-cli-ccpa-opt-out-checkbox" ><label for="wt-cli-ccpa-opt-out" style="color:'.$ccpa_colour.';" >'.$ccpa_text.'</label></span>';
        
        } else {
            $ccpa_data = '<a style="color:'.$ccpa_colour.';" role="button" class="wt-cli-ccpa-opt-out">'.$ccpa_text.'</a>';
        }
        return $ccpa_data;
    }
    public function wt_cli_message_toggler() {
        $ccpa_enabled   = $this->ccpa_enabled;
        $consent_type = $this->consent_type;
        $ccpa_only_content = $this->ccpa_content;
        $ccpa_gdpr_content = $this->ccpa_gdpr_content;
        $gdpr_content = $this->gdpr_content;
       
        echo '
            <tr valign="top">
                <th scope="row"><label for="is_on_field">'.__('Select the type of law', 'webtoffee-gdpr-cookie-consent').'</label></th>
                <td>
                    <div class="wt-cli-ccpa-message-toggler">
                        <div class="wt-cli-form-group">
                            <input type="radio" name="consent_type_field" value="gdpr" '.checked( $consent_type, 'gdpr',false).'><label><b>'.__('GDPR','webtoffee-gdpr-cookie-consent').'</b></label>
                            <div class="wt-cli-info-bar"><small>'.__('Customize the buttons, notice, themes from the relevant tabs to setup your cookie notice accordingly.','webtoffee-gdpr-cookie-consent').'</small></div>
                        </div>
                        <div class="wt-cli-form-group">
                            <input type="radio" name="consent_type_field" value="ccpa" '.checked( $consent_type, 'ccpa',false).'><label><b>'.__('CCPA','webtoffee-gdpr-cookie-consent').'</b></label>
                            <div class="wt-cli-info-bar"><small>'.__('Most of the customizations from the tabs for buttons, notice or themes are not relevant especially if you choose to not show the notice, except the Do not sell within the buttons.','webtoffee-gdpr-cookie-consent').'</small></div>
                        </div>
                        <div class="wt-cli-form-group">
                            <input type="radio" name="consent_type_field" value="ccpa_gdpr" '.checked( $consent_type, 'ccpa_gdpr',false).'><label><b>'.__('CCPA & GDPR','webtoffee-gdpr-cookie-consent').'</b></label>
                            <div class="wt-cli-info-bar"><small>'.__('Customize the buttons, notice, themes from the relevant tabs to setup your cookie notice accordingly.','webtoffee-gdpr-cookie-consent').'</small></div>
                        </div>
                        <textarea id="wt_ci_gdpr_only" name="gdpr_content_field" style="display:none">'.stripslashes( $gdpr_content ).'</textarea>
                        <textarea id="wt_ci_ccpa_only" name="ccpa_content_field" style="display:none">'.stripslashes( $ccpa_only_content ).'</textarea>
                        <textarea id="wt_ci_ccpa_gdpr" name="ccpa_gdpr_field" style="display:none">'.stripslashes( $ccpa_gdpr_content ).'</textarea>
                    </div>
                </td>
            </tr>
            
        ';

    }
    public function wt_cli_modify_plugin_settings($options, $post) {

        $ccpa_enabled = Cookie_Law_Info::sanitise_settings('ccpa_enabled',( isset( $post['ccpa_enabled_field'] ) ? $post['ccpa_enabled_field'] : false ));
        $ccpa_as_link = Cookie_Law_Info::sanitise_settings('button_6_as_link',( isset( $post['button_6_as_link_field'] ) ? $post['button_6_as_link_field'] : false ) );
        $ccpa_enable_bar = Cookie_Law_Info::sanitise_settings('ccpa_enable_bar',( isset( $post['ccpa_enable_bar_field'] ) ? $post['ccpa_enable_bar_field'] : false ) );
        $ccpa_text = Cookie_Law_Info::sanitise_settings('button_6_text',( isset( $post['button_6_text_field'] ) ? $post['button_6_text_field'] : 'Do not sell my personal information' ));
        $ccpa_region_based = Cookie_Law_Info::sanitise_settings('ccpa_region_based',( isset( $post['ccpa_region_based_field'] ) ? $post['ccpa_region_based_field'] : false ) );
        $cookie_content = ( isset( $options['notify_message'] ) ? $options['notify_message'] : '' );
        $consent_type = Cookie_Law_Info::sanitise_settings('consent_type',( isset( $post['consent_type_field'] ) && in_array( $post['consent_type_field'], self::$consent_allowed_values) ? $post['consent_type_field'] : 'gdpr' ));
        $ccpa_colour = Cookie_Law_Info::sanitise_settings('button_6_link_colour',( isset( $post['button_6_link_colour_field'] ) ? $post['button_6_link_colour_field'] : '#000000' ));
        
        $this->ccpa_enabled         =   $options['ccpa_enabled'] = $ccpa_enabled;
        $this->ccpa_as_link         =   $options['button_6_as_link'] = $ccpa_as_link;
        $this->ccpa_link_colour     =   $options['button_6_link_colour'] = $ccpa_colour;
        $this->ccpa_text            =   $options['button_6_text'] = $ccpa_text;
        $this->ccpa_region_based    =   $options['ccpa_region_based'] = $ccpa_region_based;
        $this->consent_type         =   $options['consent_type'] = $consent_type;
        $this->ccpa_enable_bar      =   $options['ccpa_enable_bar'] = $ccpa_enable_bar;

        if( $consent_type === 'ccpa') {
            $this->ccpa_content = $options['ccpa_content'] =  $cookie_content;
        }
        else if( $consent_type === 'ccpa_gdpr' ) {
            $this->ccpa_gdpr_content = $options['ccpa_gdpr_content'] =  $cookie_content; 
        }
        else {
            $this->gdpr_content = $options['gdpr_content'] =  $cookie_content; 
        }
        if( $this->ccpa_enabled === false ) {
            $options['notify_message'] = $this->gdpr_content;
        }
        return $options;
    }
    
    /**
    * Ajax call back to update consent type
    * @since 2.5.0
    **/
    public function wt_update_consent_type()
    {
        $settings = Cookie_Law_Info::get_settings();
        if(!empty($_POST) && isset($settings['consent_type']))
        {
            $value = false;
            if(isset($_POST['wt_cli_consent_type']))
            {
                $value = Wt_Cookie_Law_Info_Security_Helper::sanitize_item( $_POST['wt_cli_consent_type'] );
            }
            $settings['consent_type']=$value;
            update_option(CLI_SETTINGS_FIELD,$settings);
        }
    }

    /**
    * Ajax call back to enable/disable IAB
    * @since 2.5.0
    **/
    public function wt_enable_iab()
    {
        $settings = Cookie_Law_Info::get_settings();
        if(!empty($_POST) && isset($settings['iab_enabled']))
        {
            $value = false;
            if(isset($_POST['wt_cli_option_val']))
            {
                $value = Wt_Cookie_Law_Info_Security_Helper::sanitize_item( $_POST['wt_cli_option_val'] );
            }
            $settings['iab_enabled']=$value;
            update_option(CLI_SETTINGS_FIELD,$settings);
        }
    }
    
}
$CliCcpa = new Cookie_Law_Info_CCPA();
