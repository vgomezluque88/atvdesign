jQuery( function($) {

    var ccpaEnabledState = jQuery('input[name="ccpa_enabled_field"]:checked').val();
    var geoIP = jQuery('input[name="is_eu_on_field"]:checked').val();
    function changeMessage( $event = false ) {
        var message = '';
        var toggler = jQuery('input[type="radio"][name="consent_type_field"]:checked');
        var consentType = toggler.val();
        var ccpaSettingsEnabled = false;
        var gdprEnabled = true;
        var toggleTarget = toggler.attr('data-cli-toggle-target');
        var iab_row = jQuery('#cli_enable_iab').parents('tr');

        jQuery('.wt-cli-section-gdpr-ccpa .wt-cli-section-inner').hide();
        jQuery('.wt-cli-toggle-content').hide();

        if (consentType == 'ccpa') {
            message = jQuery('#wt_ci_ccpa_only').val();
            ccpaSettingsEnabled = true;
            gdprEnabled = false;
            iab_row.hide();
        }
        else if ( consentType == 'ccpa_gdpr') {
            message = jQuery('#wt_ci_ccpa_gdpr').val();
            jQuery('.wt-cli-section-gdpr-ccpa .wt-cli-section-inner').show();
            ccpaSettingsEnabled = true;
            iab_row.show();
        } 
        else { 
            message = jQuery('#wt_ci_gdpr_only').val(); 
            ccpaSettingsEnabled = false;
            iab_row.show();
        }
        jQuery.ajax({
            url: cli_admin.ajax_url,
            type: 'POST',
            dataType: 'json',
            data: '&wt_cli_consent_type=' + consentType + '&action=wt_cli_update_consent_type&_wpnonce=' + cli_admin.nonce,
            success: function (data)
            {
                
            },
        });
        jQuery('textarea[name="notify_message_field"]').val( message );
        jQuery('.wt-cli-section-gdpr-ccpa .wt-cli-section-inner-'+consentType).show();
        if( ccpaSettingsEnabled === false ) {
            jQuery('.wt-cli-ccpa-element').hide();
            jQuery('input[name="ccpa_enabled_field"]').prop("checked",false);
        }
        else {
            jQuery('.wt-cli-ccpa-element').show();
            jQuery('input[name="ccpa_enabled_field"][value="'+ccpaEnabledState+'"]').prop('checked', true);
            if( $event === true ) {
                jQuery('input[name="ccpa_enabled_field"]').prop("checked",true);
            }
            
        }
        if( gdprEnabled === false ) {
            jQuery('input[name="is_eu_on_field"][value="false"]').prop('checked', true);
        }
        else {
            jQuery('input[name="is_eu_on_field"][value="'+geoIP+'"]').prop('checked', true);
        }
        jQuery('.wt-cli-toggle-content[data-cli-toggle-id='+toggleTarget+']').show();
    }
    changeMessage();
    jQuery('input[type="radio"][name="consent_type_field"]').change(function() {
        changeMessage(true);
    });
    // show/hide IAB notice.
    var consentType = jQuery('input[type="radio"][name="consent_type_field"]:checked').val();
    jQuery('.cli_iab_notice').hide();
    if(jQuery('[name="cli_enable_iab"]').is(':checked') && 'ccpa' !== consentType)
    {
        jQuery('.cli_iab_notice').show();
        jQuery('.cli_theme_customize .cli_theme_customizebutton , .cli_theme_customize .cli_theme_customizebox , .cli_theme_customize div textarea').css({'opacity':0.5,'pointer-events':'none'});
    }
    jQuery('input[type=checkbox][name=cli_enable_iab]').on('change',function(){

        var option_name = jQuery(this).attr("id");
        if(jQuery('[name="cli_enable_iab"]').is(':checked') && 'ccpa' !== consentType)
        {
            jQuery('.cli_iab_notice').show();
            var wt_iab_val = 'true';
            jQuery('.cli_theme_customize .cli_theme_customizebutton , .cli_theme_customize .cli_theme_customizebox , .cli_theme_customize div textarea').css({'opacity':0.5,'pointer-events':'none'});
        }
        else{

            jQuery('.cli_iab_notice').hide();
            var wt_iab_val = 'false';
        }
        jQuery.ajax({
            url: cli_admin.ajax_url,
            type: 'POST',
            dataType: 'json',
            data: '&option_name=' + option_name + '&wt_cli_option_val=' + wt_iab_val + '&action=wt_cli_enable_or_disable_iab&_wpnonce=' + cli_admin.nonce,
            success: function (data)
            {
                
            },
        });
    });
});