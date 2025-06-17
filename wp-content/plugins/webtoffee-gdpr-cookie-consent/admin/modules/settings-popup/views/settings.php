<?php
if (!defined('ABSPATH')) {
    exit;
}
ob_start();?>

<div class="wrap">
    <?php
    $style           = "pointer-events: auto;";
    $show_iab_notice = false;
    $opacity_style   = '';
    $the_options     = Cookie_Law_Info::get_settings();
    $is_iab_enabled  = isset($the_options['iab_enabled'])?$the_options['iab_enabled']:false; 
    $consent_type = $the_options['consent_type'];
    if( true === $is_iab_enabled && ( 'gdpr' === $consent_type || 'ccpa_gdpr' === $consent_type) )
    {
        $style = "pointer-events: none;";
        $opacity_style = "opacity:0.5;";
        $show_iab_notice = true;
    }
    ?>
    <div class="cookie-law-info-form-container" style="<?php echo esc_attr($style); ?>">
        <div class="cli-plugin-toolbar top">
            <h3><?php _e('Privacy Overview', 'webtoffee-gdpr-cookie-consent');?></h3>
        </div>
        <form method="post" action="<?php echo esc_url($_SERVER["REQUEST_URI"]); ?>">
            <?php wp_nonce_field('cookielawinfo-update-privacy-overview-content');
            
            if( true === $show_iab_notice)
            {
                ?>
                <div class="cli_iab_notice" style=" margin: 40px 10px 2px 10px;">
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
            <table class="form-table cli_privacy_overview_form" style="<?php echo esc_attr($opacity_style); ?>">
                <tr valign="top">
                    <td>
                        <label for="privacy_overview_title"><?php _e('Privacy Overview Title', 'webtoffee-gdpr-cookie-consent'); ?></label>
                        <input type="text" name="privacy_overview_title" value="<?php echo $privacy_overview_title; ?>" class="cli-textbox" />
                    </td>
                 </tr>
                <tr valign="top">
                    <td>
                    <label for="privacy_overview_content"><?php _e('This will be shown in the settings visible for user on consent screen.', 'webtoffee-gdpr-cookie-consent'); ?></label>
                        <?php 
                        $cli_use_editor= apply_filters('cli_use_editor_in_po',true);
                        if($cli_use_editor)
                        {
                            wp_editor( stripslashes( $privacy_overview_content ) , 'cli_privacy_overview_content', $wpe_settings = array('textarea_name'=>'privacy_overview_content','textarea_rows' => 10));
                        }else
                        {
                            ?>
                            <textarea style="width:100%; height:250px;" name="privacy_overview_content"><?php echo stripslashes( $privacy_overview_content ) ;?></textarea>
                            <?php
                        }
                        ?>     

                        <div class="clearfix"></div>
                        <span class="cli_form_help"><?php _e('This will be shown in the settings visible for user on consent screen.', 'webtoffee-gdpr-cookie-consent'); ?></span>
                    </td>
                </tr>

            </table>
            <div class="cli-plugin-toolbar bottom">
                <div class="left">
                </div>
                <div class="right" style="<?php echo esc_attr($opacity_style); ?>">
                    <input type="submit" name="update_privacy_overview_content_settings_form" value="<?php _e('Save Settings', 'webtoffee-gdpr-cookie-consent'); ?>" style="float: right;" class="button-primary" />
                    <span class="spinner" style="margin-top:9px"></span>
                </div>
            </div>
        </form>
    </div>
</div>
<?php
$ccpa_settings = ob_get_contents();
ob_end_clean();
echo $ccpa_settings;