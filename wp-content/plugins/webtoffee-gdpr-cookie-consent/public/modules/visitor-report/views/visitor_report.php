<style>
    .metabox-holder{ width:100%;}
    .column-version{ width: 25%;}
    .column-date{ width: 15% !important;}
    .column-actions{ width: 7% !important;}
    .column-visitor_cookie .cli-report-td{padding: 5px !important; padding-left: 0px !important; line-height: 0.9em !important;}
</style>
<?php
$the_options =Cookie_Law_Info::get_settings();
?>
<div class="wrap" id="cli_visitor_report_wrap">
    <h1 class="wp-heading-inline"><?php _e('GDPR Consent History', 'webtoffee-gdpr-cookie-consent'); ?></h1>

    <a href="<?php print wp_nonce_url(admin_url('edit.php?post_type='.CLI_POST_TYPE.'&page=cli_visitor_report&report_history=export'), 'export', 'cookie_law_info_nonce');?>" class="page-title-action"><?php _e('Export Report', 'webtoffee-gdpr-cookie-consent'); ?></a>
    <div class="cli_enable_consent_log">
        <label class="cli_enable_consent_log_label"><?php _e("Enable consent logging",'webtoffee-gdpr-cookie-consent')?></label>
        <label class="wt-cli-gdpr-plugin-toggle-switch">
        <input class="wt-cli-gdpr-plugin-toggle-checkbox" name = "cli_logging_on_field" id ="cli_logging_on_field" type="checkbox" value="true" <?php checked($the_options['logging_on'], true); ?> data-id="cli_logging_on_field">
        <span class="wt-cli-gdpr-plugin-toggle-slider round" title="<?php _e("Enable",'webtoffee-gdpr-cookie-consent')?>"></span>
        </label>
    </div>
    <hr class="wp-header-end">
    <div id="poststuff">
        <div id="post-body" class="metabox-holder columns-2">
            <div id="post-body-content">
                <div class="meta-box-sortables ui-sortable">
                    <form method="POST" action="<?php echo admin_url("edit.php?post_type=".CLI_POST_TYPE."&page=cli_visitor_report"); ?>">
                        <input type="hidden" name="page" value="cli_visitor_report">
                            <?php
                            $this->report_history->search = $search;
                            $this->report_history->prepare_items();
                            $this->report_history->search_box('Search Report', 'keyword');
                            $this->report_history->display();
                            ?>
                    </form>
                </div>
            </div>
        </div>
        <br class="clear">
    </div>
</div>