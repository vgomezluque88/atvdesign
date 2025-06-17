<?php
ob_start();
$cli_always_enable_text = __('Always Enabled', 'webtoffee-gdpr-cookie-consent');
$cli_enable_text = __('Enabled', 'webtoffee-gdpr-cookie-consent');
$cli_disable_text = __('Disabled', 'webtoffee-gdpr-cookie-consent');
$cli_legitimate_text = __('Legitimate Interest', 'webtoffee-gdpr-cookie-consent');
$cli_privacy_readmore = '<a id="wt-cli-privacy-readmore"  tabindex="0" role="button" class="cli-privacy-readmore" data-readmore-text="' . __('Show more', 'webtoffee-gdpr-cookie-consent') . '" data-readless-text="' . __('Show less', 'webtoffee-gdpr-cookie-consent') . '"></a>';

$necessary_categories = Cookie_Law_Info::get_strictly_necessory_categories();
$privacy_overview_content_cookie_cat = nl2br($privacy_overview_content);
$privacy_overview_content_cookie_cat = do_shortcode(stripslashes($privacy_overview_content_cookie_cat));
$privacy_overview_content = __('Customize your consent preferences for Cookie Categories and advertising tracking preferences for Purposes & Features and Vendors below. You can give granular consent for each <button class="wt-cli-link" id="wt-cli-iab-preference-toggle">Third Party Vendor</button>. Most vendors require explicit consent for personal data processing, while some rely on legitimate interest. However, you have the right to object to their use of legitimate interest.','webtoffee-gdpr-cookie-consent');
$privacy_overview_content = do_shortcode(stripslashes($privacy_overview_content));
$content_length = strlen(strip_tags($privacy_overview_content));
$privacy_overview_title = trim($privacy_overview_title);

?>
<div class="cli-modal-body">
    <div class="wt-cli-element cli-container-fluid cli-tab-container">
        <div class="cli-row">
            <?php if ($the_options['cookie_setting_popup'] === true) : ?>
                <div class="cli-col-12 cli-align-items-stretch cli-px-0">
                    <?php
                    if (isset($privacy_overview_title) === true && $privacy_overview_title !== '') {
                        if ( has_filter( 'wt_cli_change_privacy_overview_title_tag' ) ) {
                            echo apply_filters( 'wt_cli_change_privacy_overview_title_tag', $privacy_overview_title, '<h4 id="wt-cli-privacy-title">', '</h4>' );
                        } else {
                            echo "<h4 id='wt-cli-privacy-title'>" . esc_html( $privacy_overview_title ) . "</h4>";
                        }
                    }
                    ?>
                    <div class="cli-privacy-content-iab">
                        <div class="cli-privacy-content-text-iab"><?php echo wp_kses_post( $privacy_overview_content) ; ?></div>
                    </div>
                </div>
            	<?php endif; ?>
	            <div class="cli-col-12 wt-cli-iab-preference-wrapper">
					<button class="cli_settings_tab active" id ="cli_cookie_cat" onclick="_cliIABShowTab('cli_cookie_cat')"><?php _e('Cookie Categories', 'webtoffee-gdpr-cookie-consent'); ?></button>
					<button class="cli_settings_tab" id="cli_cookie_purpose" onclick="_cliIABShowTab('cli_cookie_purpose')"><?php _e('Purposes & Features', 'webtoffee-gdpr-cookie-consent'); ?></button>
					<button class="cli_settings_tab" id="cli_cookie_vendors" onclick="_cliIABShowTab('cli_cookie_vendors')"><?php _e('Vendors', 'webtoffee-gdpr-cookie-consent'); ?></button>

					<?php 
					$ccpa_applicable 		= '';
                    $category_description   = '';
                    $ccpa_category_identity = '';
                    $aria_described_by 		= '';
                    $checked 				= false;
        			/* Fetch current language code */
        			$current_language_code 	= Cookie_Law_Info_Languages::get_instance()->get_current_language_code()
        			;
        			/* Fetching json data IAB */
					$file 					= Cookie_Law_Iab_Tcf::get_vendor_list($current_language_code);
	            	$jsonData 				= file_get_contents($file);
	            	$arrayData 				= json_decode($jsonData, true);
	            	$key_arr 				= array();
					?>
					<div class="tab-content active" id="cli_cookie_cat_content">
						<div class="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container" role="tablist">
		                	<?php if ($the_options['accept_all'] != true && $the_options['cookie_setting_popup'] != true) : ?>
		                    <div class="cli-tab-section cli-privacy-tab">
		                        <div class="cli-tab-header">
		                            <a id="wt-cli-tab-link-privacy-overview" class="cli-nav-link cli-settings-mobile" tabindex="0" role="tab" aria-expanded="false" aria-describedby="wt-cli-tab-privacy-overview" aria-controls="wt-cli-tab-privacy-overview">
		                                <?php echo $privacy_overview_title; ?>
		                            </a>
		                        </div>
		                        <div class="cli-tab-content">
		                            <div id="wt-cli-tab-privacy-overview" class="cli-tab-pane cli-fade" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-tab-link-privacy-overview">
		                                <p><?php echo $privacy_overview_content;  ?></p>
		                            </div>
		                        </div>

		                    </div>
			                <?php endif; ?>
			                <?php
			     
			                foreach ($cookie_list as $key => $cookie) {

			                    $ccpa_applicable = $cookie['ccpa_optout'];
			                    $category_description   = ( isset( $cookie['description'] ) ? $cookie['description'] : '' );
			                    $aria_described_by = !empty( $category_description ) ? 'aria-describedby="wt-cli-tab-' . $key . '"' : '';
			                    $ccpa_category_identity = ( $ccpa_applicable === true ) ? 'data-cli-ccpa-optout' : '';
			                   
			                ?>
		                    <div class="cli-tab-section">
		                        <div class="cli-tab-header">
		                            <a id="wt-cli-tab-link-<?php echo $key; ?>" tabindex="0" role="tab" aria-expanded="false" <?php echo $aria_described_by; ?> aria-controls="wt-cli-tab-<?php echo $key; ?>" class="cli-nav-link cli-settings-mobile" data-target="<?php echo $key; ?>" data-toggle="cli-toggle-tab">
		                                <?php echo $cookie['title']; ?>
		                            </a>
		                            <?php
		                            $checked = false;
		                            if ( true === $cookie['default_state']) {
		                                $checked = true;
		                            }
		                            ?>
		                            <?php if ( true === $cookie['strict'] ) {
		                            ?>
		                                <div class="wt-cli-necessary-checkbox">
		                                    <input type="checkbox" class="cli-user-preference-checkbox" id="wt-cli-checkbox-<?php echo $key; ?>" aria-label="<?php echo $cookie['title']; ?>" data-id="checkbox-<?php echo $key; ?>" checked="checked" />
		                                    <label class="form-check-label" for="wt-cli-checkbox-<?php echo $key; ?>"> <?php echo $cookie['title']; ?> </label>
		                                </div>
		                                <span class="cli-necessary-caption">
		                                    <?php echo $cli_always_enable_text; ?>
		                                </span>
		                            <?php } else {
		                            ?>
		                                <div class="cli-switch">
		                                    <input type="checkbox" class="cli-user-preference-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-checkbox-<?php echo $key; ?>" aria-label="<?php echo $key; ?>" data-id="checkbox-<?php echo $key; ?>" role="switch" aria-controls="wt-cli-tab-link-<?php echo $key; ?>" aria-labelledby="wt-cli-tab-link-<?php echo $key; ?>" <?php checked($checked, true); ?> />
		                                    <label for="wt-cli-checkbox-<?php echo $key; ?>" class="cli-slider" data-cli-enable="<?php echo $cli_enable_text; ?>" data-cli-disable="<?php echo $cli_disable_text; ?>"><span class="wt-cli-sr-only"><?php echo $key; ?></span></label>
		                                </div>
		                            <?php } ?>
		                        </div>
		                        <div class="cli-tab-content">
			                        <div id="wt-cli-tab-<?php echo $key; ?>" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-tab-link-<?php echo $key; ?>" class="cli-tab-pane cli-fade" data-id="<?php echo $key; ?>">
			                            <div class="wt-cli-cookie-description"><?php echo do_shortcode( $category_description, 'cookielawinfo-category' ); ?></div>
		                            </div>
		                        </div>
		                    </div>
		                	<?php  
		            		} ?>
		            	</div>
					</div>
					
					<div class="tab-content cli-purposes-features" id="cli_cookie_purpose_content">
						<div class="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container" role="tablist">
		                	<?php if ($the_options['accept_all'] != true && $the_options['cookie_setting_popup'] != true) : ?>
		                    <div class="cli-tab-section cli-privacy-tab">
		                        <div class="cli-tab-header">
		                            <a id="wt-cli-tab-link-privacy-overview" class="cli-nav-link cli-settings-mobile" tabindex="0" role="tab" aria-expanded="false" aria-describedby="wt-cli-tab-privacy-overview" aria-controls="wt-cli-tab-privacy-overview">
		                                <?php echo $privacy_overview_title; ?>
		                            </a>
		                        </div>
		                        <div class="cli-tab-content">
		                            <div id="wt-cli-tab-privacy-overview" class="cli-tab-pane cli-fade" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-tab-link-privacy-overview">
		                                <p><?php echo $privacy_overview_content;  ?></p>
		                            </div>
		                        </div>

		                    </div>
			                <?php endif; 
			                /* Setting array which doesn't need legitimate interest */
	                    	$not_in_legitimate_interest_arr =array('1','3','4','5','6');
	                    	foreach ($arrayData as $key => $value) {
	                    		
	                    		if('purposes' === $key || 'specialFeatures' === $key)
	                    		{
	                    			if(!empty($value))
	                    			{
	                    				if('purposes' === $key)
	                    				{
	                    					$title=__('Purposes','webtoffee-gdpr-cookie-consent');
	                    					$key = 'purpose';
	                    				}
	                    				if('specialFeatures' === $key)
	                    				{
	                    					$title=__('Special Features','webtoffee-gdpr-cookie-consent');
	                    					$key = 'specialfeature';
	                    				}
	                    				$slider_switch = true;
	                    				?>
	                    				<div class="cli-tab-section">
					                        <?php
					                        Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_header_html($title,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$slider_switch);
					                        ?>
			                            	<div class="cli-tab-content">
				                            	<?php
				                            	if(is_array($value))
												{
													foreach ($value as $p_key => $p_value) {
														
														$key_arr[$key][$p_key]=$p_value;
														
														if(in_array($p_key,$not_in_legitimate_interest_arr) || 'specialfeature' === $key)
														{
															$legitimate_interest = false;
														}
														else
														{
															$legitimate_interest = true;
														}
														
														Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_body_html($p_value,$p_key,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$cli_legitimate_text,$legitimate_interest,$slider_switch);
													}
												}
				                            	?>
			                            	</div>
			                            </div>
	                    				<?php
	                    			}
	                    		}
	                    		if('specialPurposes' === $key || 'features' === $key)
	                    		{
	                    			
	                    			if('specialPurposes' === $key)
	                				{
	                					$title=__('Special purposes','webtoffee-gdpr-cookie-consent');
	                					$key = 'specialpurpose';
	                				}
	                				if('features' === $key)
	                				{
	                					$title=__('Features','webtoffee-gdpr-cookie-consent');
	                					$key = 'feature';
	                				}
	                    			$slider_switch = false;
	                				?>
	                				<div class="cli-tab-section">
				                        <?php
				                        Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_header_html($title,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$slider_switch);
				                        ?>
		                            	<div class="cli-tab-content">
			                            	<?php
			                            	if(is_array($value))
											{
												foreach ($value as $p_key => $p_value) {
													
													$key_arr[$key][$p_key]=$p_value;
													Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_body_html($p_value,$p_key,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$cli_legitimate_text,false,$slider_switch);
												}
											}
			                            	?>
		                            	</div>
		                            </div>
	                    			<?php
	                    		}
	                    		
	                    		
	                    		if('vendors' === $key)
	                    		{	
	                    			$vendors_arr[$key]=$value;
		                    		$key_arr[$key]=$value;
	                    		
	                    		}
	                    		
	                    		
	                    		if('dataCategories' === $key)
	                    		{	
	                    			$key_arr['dataDeclaration']=$value;
	                    		}
							    
							}
							
			               ?>

		            	</div>
	                </div>

	                <div class="tab-content" id="cli_cookie_vendors_content">
	                	<?php 
	                	if(empty($vendors_arr))
	                	{
	                		$file=Cookie_Law_Iab_Tcf::get_vendor_list();
			            	$jsonData = file_get_contents($file);
			            	$vendors_list_arr = json_decode($jsonData, true);
	                		foreach ($vendors_list_arr as $key => $value) {

	                			if('vendors' === $key)
	                    		{	
	                    			$vendors_arr[$key]=$value;
		                    		$key_arr[$key]=$value;
	                    		}
	                		}
	                	}
	                	if(!empty($vendors_arr))
	                	{
	                		foreach ($vendors_arr as $kl => $kv) {
	                		
		                		$title 					 = __('Third Party Vendors','webtoffee-gdpr-cookie-consent');
		                		$slider_switch 			 = true;
		                		$key 					 = $vendors_arr[$key];
		                		$excl_vendors_arr		 = Cookie_Law_Info_Settings_Popup_For_IAB::get_excluded_vendor_list();
		                		?>
		                		<div class="cli-tab-section">
			                        <?php
			                      	
			                        Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_header_html($title,$kl,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$slider_switch);
			                        ?>
			                        <div class="cli-tab-content">
		                            	<?php
		                            	if(is_array($kv))
										{
											foreach ($kv as $p_key => $p_value) {

												// checks whether vendor key not in excluded vendors list
												if(!in_array($p_key,$excl_vendors_arr))
												{
													Cookie_Law_Info_Settings_Popup_For_IAB::wt_cli_generate_vendor_body_html($p_value,$p_key,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$cli_legitimate_text,$legitimate_interest,$slider_switch,$key_arr);
												}
												
											}
										}
		                            	?>
	                            	</div>	
	                           	</div>
		                    <?php
		                	}
						}
                	?>
					</div>
	            </div>
		</div>
	</div>
</div>
<div class="cli-modal-footer">
    <div class="wt-cli-element cli-container-fluid cli-tab-container">
        <div class="cli-row">
            <div class="cli-col-12 cli-align-items-stretch cli-px-0">
				
                <div class="cli-tab-footer wt-cli-privacy-overview-actions">
					<div class="cli-preference-btn-wrapper">
						<?php echo do_shortcode('[cookie_reject]'); ?>
						<?php echo do_shortcode('[cookie_save_preferences]'); ?>
						<?php echo do_shortcode('[cookie_accept_all]'); ?>
					</div>
                </div>
                <?php if ( apply_filters( 'wt_cli_enable_ckyes_branding', true ) === true ) : ?>
                    <div class="wt-cli-ckyes-footer-section">
                        <div class="wt-cli-ckyes-brand-logo"><?php echo __( 'Powered by', 'webtoffee-gdpr-cookie-consent' ); ?> <a target="_blank" href="https://www.webtoffee.com/"><img src="<?php echo CLI_PLUGIN_URL . 'images/webtoffee-logo.svg'; ?>" alt="WebToffee Logo"></a></div>
                    </div>
                 <?php endif; ?>
            </div>
        </div>
    </div>
</div>
<style type="text/css">
.tab-content {
  display: none;
  margin-top: -4px;
}
.tab-content.active {
  display: block;
}
.cli_settings_tab{
	background-color: #fff;
	border-color: #fff;
	color: #A1A1A1;
	border: 0;
    border-radius: 0;
    background: none;
    cursor: pointer;
    padding: 0.6180469716em 1.41575em;
    text-decoration: none;
    font-weight: 600;
    text-shadow: none;
    display: inline-block;
    -webkit-appearance: none;
    font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
    line-height: 1.618;
    text-rendering: optimizeLegibility;
    text-transform: none;
    overflow: visible;
}
.cli_settings_tab:hover{
	background-color: #fff !important;
}
.cli_settings_tab:focus{
	outline: none;
}
.cli_settings_tab.active,.cli_settings_tab.active:hover {
  /* Styles for active tab button */
	border-bottom: 3px #000000 solid;
	color: #000000;
}
.cli-tab-content-illustration-header,.cli-no-of-vendor-consent{
	font-size: 12px;
	font-weight: 700;
}
.cli-iab-illustrations-des ol{
	margin: 0 0 1.41575em 2em;
	font-size: 14px;
}
.cli-iab-purposes li,.cli_vendor_subtab_header li{
	font-size: 13px !important;
}
.cli-iab-illustrations-des,.cli-iab-purposes {
	font-size: 14px;
}
.cli-iab-vendor-count,.cli-iab-vendor-count label,.cli-iab-vendor-count span{
	font-size: 12px;
	font-weight: 700;
}
.cli-tab-header .cli-switch .cli-slider:after,.cli-sub-tab-header .cli-switch .cli-slider:after{
	min-width: 1px !important;
}
.cli-sub-tab-header a{
	max-width: 50%;
	flex: 1;
}

.cli-tab-content-privacy-policy,.cli-tab-content-privacy-policy label{
	font-size: 13px !important;
}
.cli-vendor-sub-title {
	font-weight: 600;
	font-size: 12px;
}
.cli-privacy-link,.cli-claim-link{
	text-decoration: underline !important;
	color: #1863DC;
	font-size: 13px !important;
}
body {
  font-family: "Inter", sans-serif;
}
.cli-purposes-features .cli-tab-header,#cli_cookie_vendors_content .cli-tab-header{background-color: #fff !important; border-top: 0.5px dashed #A1A1A1; border-radius: 0px;}
.cli-purposes-features .cli-sub-tab-section,#cli_cookie_vendors_content .cli-sub-tab-section{background-color: #f2f2f2;}
.cli-purposes-features .cli-sub-tab-content,#cli_cookie_vendors_content .cli-sub-tab-content{padding: 0px 14px 14px 14px;}
/* Use https://www.willpeavy.com/tools/minifier/ to minify this CSS before updating to db */

</style>
<script type="text/javascript">
	function _cliIABShowTab(tabIndex) {
		// Hide all tab contents
		var tabContents = document.getElementsByClassName("tab-content");
		for (var i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove("active");
		}

		// Show the selected tab content
		var selectedTab = document.getElementById(tabIndex + "_content");
		selectedTab.classList.add("active");
		// Hide all tab contents
		var tabContents = document.getElementsByClassName("cli_settings_tab");
		for (var i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove("active");
		}
		// Add active class to active tab 
		var selectedTab = document.getElementById(tabIndex);
		selectedTab.classList.add("active");
	}
	// Enable / disable all purposes/features consent based on user action
	const checkboxes = document.querySelectorAll('.wt-cli-consents-checkbox');
	checkboxes.forEach(function(checkbox) {
	 	checkbox.addEventListener('change', cli_enable_disable_consent);
	});
	function cli_enable_disable_consent() {
		var el=this.getAttribute('attr-key');
		const nestedInputs = document.getElementsByClassName('cli-'+el+'-checkbox');
		if (this.checked) {
			// To check the nested input fields
			for (let i = 0; i < nestedInputs.length; i++) {
				nestedInputs[i].checked = true;
			}
		} else {
    		// To uncheck the nested input fields
			for (let i = 0; i < nestedInputs.length; i++) {
			 	nestedInputs[i].checked = false;
			}
  		}
	}
</script>
<?php $pop_out = ob_get_contents();
ob_end_clean();
?>