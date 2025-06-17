<?php

/**
 * Settings popup as module for IAB
 *
 * Manages all settings popup customizations for IAB
 *
 * @version 2.5.0
 * @package CookieLawInfo
 */

if (!defined('ABSPATH')) {
    exit;
}
if(!class_exists ( 'Cookie_Law_Info_Settings_Popup_For_IAB' ) ) /* common module class not found so return */
{
    return;
}

class Cookie_Law_Info_Settings_Popup_For_IAB
{
    public function __construct()
    {   
       
    }
    public static function wt_cli_generate_header_html($title,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$slider_switch)
	{
		if(isset($title))
		{
			?>
            <div class="cli-tab-header cli-<?php echo $key; ?> wt-cli-iab-<?php echo $key; ?>-consents">
                <a id="wt-cli-iab-<?php echo $key; ?>-consents" tabindex="0" role="tab" aria-expanded="false" <?php echo $aria_described_by; ?> aria-controls="wt-cli-tab-<?php echo $key; ?>" class="cli-nav-link cli-settings-mobile" data-target="<?php echo $key; ?>" data-toggle="cli-toggle-tab" style="font-weight: bold;">
                    <?php echo $title; ?>
        		</a>
        		<?php
        		if($slider_switch)
        		{
        			?>
	        		<div class="cli-switch">
	                	<input type="checkbox" class="cli-iab-checkbox wt-cli-consents-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-iab-<?php echo $key; ?>-consents-checkbox" aria-label="<?php echo $key; ?>" data-id="checkbox-<?php echo $key; ?>" role="switch" attr-key ="<?php echo $key; ?>" aria-controls="wt-cli-iab-<?php echo $key; ?>-consents-checkbox" aria-labelledby="wt-cli-tab-link-<?php echo $key; ?>" <?php checked($checked, true); ?> />
	               		<label for="wt-cli-iab-<?php echo $key; ?>-consents-checkbox" class="cli-slider" data-cli-enable="<?php echo $cli_enable_text; ?>" data-cli-disable="<?php echo $cli_disable_text; ?>"><span class="wt-cli-sr-only"><?php echo $key; ?></span></label>
	            	</div>
	            <?php } ?>
    		</div>
        	<?php
		}
	}
	public static function wt_cli_generate_body_html($p_value,$p_key,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$cli_legitimate_text,$legitimate_interest,$slider_switch)
	{
		if(isset($p_value))
		{
			$title   = ( isset( $p_value['name'] ) ? $p_value['name'] : '' );
			$description   = ( isset( $p_value['description'] ) ? $p_value['description'] : '' );
			$illustration   = ( isset( $p_value['illustrations'] ) ? array_filter($p_value['illustrations']) : '' );
			$vendor_consent_text=__('Number of Vendors seeking consent:','webtoffee-gdpr-cookie-consent');
			?>
            <div class="cli-tab-section cli-sub-tab-section">
				<div class="cli-sub-tab-header cli-<?php echo $key; ?>-<?php echo $p_key; ?>">
                    <a id="wt-cli-iab-<?php echo $key; ?>-consents-item-<?php echo $p_key; ?>" tabindex="0" role="tab" aria-expanded="false" <?php echo $aria_described_by; ?> aria-controls="wt-cli-tab-<?php echo $p_key; ?>" class="cli-nav-link cli-settings-mobile" data-target="<?php echo $p_key; ?>" data-toggle="cli-toggle-tab" >
                        <?php echo $title; ?>
            		</a>
            		<?php
	        		if ( $legitimate_interest ) {

	        			$vendor_consent_text=__('Number of Vendors seeking consent or relying on legitimate interest:','webtoffee-gdpr-cookie-consent');
		        		?>
		        		<div class="cli-switch cli-legitimate-switch">
		                	<input type="checkbox" class="cli-iab-checkbox cli-<?php echo $key; ?>-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-iab-<?php echo $key; ?>-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" aria-label="<?php echo $p_key; ?>" data-id="checkbox-legitimate-<?php echo $key; ?>-<?php echo $p_key; ?>" role="switch" aria-controls="wt-cli-iab-<?php echo $key; ?>-consents-checkbox-legitimate-interests-item-<?php echo $p_key; ?>" aria-labelledby="wt-cli-tab-link-legitimate-<?php echo $key; ?>-<?php echo $p_key; ?>" <?php checked($checked, true); ?> />
		               		<label for="wt-cli-iab-<?php echo $key; ?>-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" class="cli-slider" data-cli-enable="<?php echo $cli_legitimate_text; ?>" data-cli-disable="<?php echo $cli_legitimate_text; ?>"><span class="wt-cli-sr-only"><?php echo $p_key; ?></span></label>
		            	</div>
		        		<?php
		        	}
		        	
	        		if($slider_switch)
	        		{
	        			?>
	            		<div class="cli-switch">
	                    	<input type="checkbox" class="cli-iab-checkbox cli-<?php echo $key; ?>-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-iab-<?php echo $key; ?>-consents-checkbox-item-<?php echo $p_key; ?>" aria-label="<?php echo $key; ?>" data-id="checkbox-<?php echo $key; ?>-<?php echo $p_key; ?>" role="switch" aria-controls="wt-cli-iab-<?php echo $key; ?>-consents-checkbox-item-<?php echo $p_key; ?>" aria-labelledby="wt-cli-iab-<?php echo $key; ?>-consents-checkbox-item-<?php echo $p_key; ?>" <?php checked($checked, true); ?> />
	                   		<label for="wt-cli-iab-<?php echo $key; ?>-consents-checkbox-item-<?php echo $p_key; ?>" class="cli-slider" data-cli-enable="<?php echo $cli_enable_text; ?>" data-cli-disable="<?php echo $cli_disable_text; ?>"><span class="wt-cli-sr-only"><?php echo $p_key; ?></span></label>
	                	</div>
	                	<?php 
	               }?>
            	</div>
				<div class="cli-sub-tab-content" id="wt-cli-iab-<?php echo $key; ?>-consents-sub-content-tab-<?php echo $p_key; ?>">
					<div id="wt-cli-iab-<?php echo $key; ?>-consents-content-<?php echo $p_key; ?>" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-iab-<?php echo $key; ?>-consents-item-<?php echo $p_key; ?>" class="cli-tab-pane cli-fade wt-cli-iab-<?php echo $key; ?>-consents-item-<?php echo $p_key; ?>" data-id="<?php echo $key; ?>-<?php echo $p_key; ?>">
                        <div class="wt-cli-cookie-description"><?php echo do_shortcode( $description, 'cookielawinfo-category' ); ?></div>
                    </div>
                    <div>
                    	
                    	<?php if ( !empty($illustration) && is_array($illustration) ) {
                    		?>
                    		<label class="cli-tab-content-illustration-header"><?php _e('Illustrations', 'webtoffee-gdpr-cookie-consent'); ?></label>
	                    	<ul class="cli-iab-illustrations-des">
	                    		<?php
	                    		foreach ($illustration as $k => $vl) {
	                        		?>
	                              	<li>
	                                <?php esc_html_e($vl, 'webtoffee-gdpr-cookie-consent'); ?>
	                              	</li>
	                             	<?php 
	                         	} ?>
	                        </ul>
                        <?php } ?>
                    </div>
                    <div class="cli-no-of-vendor-consent">
                    	<label><?php echo esc_html_e($vendor_consent_text, 'webtoffee-gdpr-cookie-consent'); ?></label>
                    	<span class="wt-cli-vendors-seek-count"></span>
                    </div>
				</div>
			</div>
        	<?php
		}
	}

	public static function wt_cli_generate_vendor_body_html($p_value,$p_key,$key,$aria_described_by,$ccpa_category_identity,$checked,$cli_enable_text,$cli_disable_text,$cli_legitimate_text,$legitimate_interest,$slider_switch,$key_arr)
	{
		if(isset($p_value))
		{
			$title   = ( isset( $p_value['name'] ) ? $p_value['name'] : '' );
			$description   = ( isset( $p_value['description'] ) ? $p_value['description'] : '' );
			$illustration   = ( isset( $p_value['illustrations'] ) ? array_filter($p_value['illustrations']) : '' );
			$purposes   = ( isset( $p_value['purposes'] ) ? array_filter($p_value['purposes']) : array() );
			$specialPurposes   = ( isset( $p_value['specialPurposes'] ) ? array_filter($p_value['specialPurposes']) : array() );
			$features   = ( isset( $p_value['features'] ) ? array_filter($p_value['features']) : array() );
			$specialFeatures   = ( isset( $p_value['specialFeatures'] ) ? array_filter($p_value['specialFeatures']) : array() );
			$legIntPurposes = ( isset( $p_value['legIntPurposes'] ) ? array_filter($p_value['legIntPurposes']) : array() );
			$urls   = ( isset( $p_value['urls'] ) ? array_filter($p_value['urls']) : array() );
			$dataDeclaration =  ( isset( $p_value['dataDeclaration'] ) ? array_filter($p_value['dataDeclaration']) : array() );
			$dataRetention = ( isset( $p_value['dataRetention'] ) ? array_filter($p_value['dataRetention']) : array() );
			$use_cookies = ( isset( $p_value['usesCookies'] ) ? $p_value['usesCookies'] : '' );
			$usesnoncookieaccess = ( isset( $p_value['usesNonCookieAccess'] ) ? $p_value['usesNonCookieAccess'] : '' );
			$cookie_refresh = ( isset( $p_value['cookieRefresh'] ) ? $p_value['cookieRefresh'] : '' );
			$cookie_age = ( isset( $p_value['cookieMaxAgeSeconds'] ) ? $p_value['cookieMaxAgeSeconds'] : '' );
			$storage_url = ( isset( $p_value['deviceStorageDisclosureUrl'] ) ? $p_value['deviceStorageDisclosureUrl'] : '' );
			$retention_period = '';
			$retention_period_arr = array();
			if(is_array($dataRetention))
			{
				if(array_key_exists('stdRetention',$dataRetention))
				{
					$retention_period= $dataRetention['stdRetention'];
				}
				elseif (array_key_exists('purposes',$dataRetention)) {

					$retention_period_arr['purpose']= $dataRetention['purposes'];
				}
				elseif (array_key_exists('specialPurposes',$dataRetention)) {

					$retention_period_arr['specialpurposes']= $dataRetention['specialPurposes'];
				}
			}
			$current_language_code = Cookie_Law_Info_Languages::get_instance()->get_current_language_code();		
			$privacy_url='';
			$old_key = '';
			$claim_url='';
			$purpose_arr=array();
			$special_purpose_arr=array();
			$feature_arr=array();
			$special_feature_arr=array();
			$data_dec_arr=array();
			$lang_arr =array();
			$not_in_legitimate_interest_arr=array();
			if(!empty($legIntPurposes))
			{
				$legitimate_interest = true;
			}
			else
			{
				$legitimate_interest = false;
			}
			if(is_array($urls))
			{
				foreach ($urls as $key => $url) {
					
					if(is_array($url))
					{
						foreach ($url as $lang_key => $lang_val) {
							
							if('langId' === $lang_key)
							{
								$lang_arr[$lang_val]=$url['privacy'];
								if(isset($url['legIntClaim']))
								{
									$lang_arr['legIntClaim']=$url['legIntClaim'];
								}
								
							}
						}
					}
				}
				if(!empty($lang_arr))
				{
					foreach ($lang_arr as $lang_key => $url) {
						
						
						if(array_key_exists($current_language_code,$lang_arr)){

							if($lang_key === $current_language_code)
							{
								$privacy_url = $url; 
							}
							if('legIntClaim'=== $lang_key)
							{
								$claim_url = $url;
							}
						}
						else
						{
							$current_language_code = $lang_key;
							if($lang_key === $current_language_code)
							{
								$privacy_url = $url;
							}
							if('legIntClaim'=== $lang_key)
							{
								$claim_url = $url;
							}
						}
					}
				}
			}
			
			?>
            <div class="cli-tab-section cli-sub-tab-section">
				<div class="cli-sub-tab-header wt-cli-iab-vendor-consents-item-<?php echo $p_key; ?>">
                    <a id="wt-cli-iab-vendor-consents-item-<?php echo $p_key; ?>" tabindex="0" role="tab" aria-expanded="false" <?php echo $aria_described_by; ?> aria-controls="wt-cli-tab-<?php echo $p_key; ?>" class="cli-nav-link cli-settings-mobile" data-target="<?php echo $key; ?>-<?php echo $p_key; ?>" data-toggle="cli-toggle-tab">
                        <?php echo $title; ?>
            		</a>

            		<?php
	        		if ( $legitimate_interest ) {
		        		?>
		        		<div class="cli-switch cli-legitimate-switch">
		                	<input type="checkbox" class="cli-iab-checkbox cli-vendors-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-iab-vendor-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" aria-label="<?php echo $p_key; ?>" data-id="checkbox-legitimate-<?php echo $key; ?>-<?php echo $p_key; ?>" role="switch" aria-controls="wt-cli-iab-vendor-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" aria-labelledby="wt-cli-iab-vendor-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" <?php checked($checked, true); ?> />
		               		<label for="wt-cli-iab-vendor-legitimate-interests-checkbox-item-<?php echo $p_key; ?>" class="cli-slider" data-cli-enable="<?php echo $cli_legitimate_text; ?>" data-cli-disable="<?php echo $cli_legitimate_text; ?>"><span class="wt-cli-sr-only"><?php echo $p_key; ?></span></label>
		            	</div>
		        		<?php
		        	}
            		
	        		if($slider_switch)
	        		{
	        			?>
	            		<div class="cli-switch">
	                    	<input type="checkbox" class="cli-iab-checkbox cli-vendors-checkbox" <?php echo $ccpa_category_identity; ?> id="wt-cli-iab-vendor-consents-checkbox-item-<?php echo $p_key; ?>" aria-label="<?php echo $key; ?>-<?php echo $p_key; ?>" data-id="checkbox-<?php echo $key; ?>-<?php echo $p_key; ?>" role="switch" aria-controls="wt-cli-tab-link-<?php echo $key; ?>-<?php echo $p_key; ?>" aria-labelledby="wt-cli-tab-link-<?php echo $p_key; ?>" <?php checked($checked, true); ?> />
	                   		<label for="wt-cli-iab-vendor-consents-checkbox-item-<?php echo $p_key; ?>" class="cli-slider" data-cli-enable="<?php echo $cli_enable_text; ?>" data-cli-disable="<?php echo $cli_disable_text; ?>"><span class="wt-cli-sr-only"><?php echo $p_key; ?></span></label>
	                	</div>
	                	<?php 
	               }?>
            	</div>
				<div class="cli-sub-tab-content">
					<div id="wt-cli-iab-vendor-consents-content-<?php echo $p_key; ?>" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-iab-vendor-consents-item-<?php echo $p_key; ?>" class="cli-tab-pane cli-fade" data-id="<?php echo $key; ?>-<?php echo $p_key; ?>">
						<?php 
						if(!empty($privacy_url))
						{
							?>
	                        <div class="cli-tab-content-privacy-policy">
	                        	<label class="cli-privacy-link-title cli-vendor-sub-title"> <?php _e('Privacy Policy : ', 'webtoffee-gdpr-cookie-consent') ?></label>
	                        	<a class="cli-privacy-link" target="_blank" href="<?php echo esc_url($privacy_url);?>"> <?php echo esc_html_e($privacy_url); ?></a>
	                        </div>
	                       	<?php
	                    }
	                    if(!empty($claim_url))
						{
							?>
	                        <div class="cli-tab-content-leg-policy">
	                        	<label class="cli-claim-link-title cli-vendor-sub-title"> <?php _e('Legitimate Interest Claim : ', 'webtoffee-gdpr-cookie-consent') ?></label>
	                        	<a class="cli-claim-link" target="_blank" href="<?php echo esc_url($claim_url);?>"> <?php echo esc_html_e($claim_url); ?></a>
	                        </div>
	                       	<?php
	                    }
	                    if(!empty($retention_period) && !is_array($retention_period))
						{
							?>
	                        <div class="cli-tab-content-retention-period">
	                        	<label class="cli-retention-title cli-vendor-sub-title"> <?php _e('  Data Retention Period : ', 'webtoffee-gdpr-cookie-consent') ?></label>
	                        	<span class="cli-retention-link cli-vendor-sub-title"> <?php echo esc_html_e($retention_period).__(' days','webtoffee-gdpr-cookie-consent'); ?></span>
	                        </div>
	                       	<?php
	                    }
	                    if(is_array($key_arr) &&  !empty($key_arr))
						{
							foreach ($key_arr as $key => $value) 
							{
								switch ($key) {
									case 'purpose':
										$title=__('Purposes (Consent)','webtoffee-gdpr-cookie-consent');
										$purpose_arr=$value;
										$old_key='purposes';
										break;
									case 'specialpurpose':
										$title=__('Special Purposes','webtoffee-gdpr-cookie-consent');
										$special_purpose_arr=$value;
										$old_key='specialPurposes';
										break;
									case 'feature':
										$title=__('Features','webtoffee-gdpr-cookie-consent');
										$feature_arr=$value;
										$old_key='features';
										break;
									case 'specialfeature':
										$title=__('Special Features','webtoffee-gdpr-cookie-consent');
										$special_feature_arr=$value;
										$old_key='specialFeatures';
										break;
									case 'dataDeclaration':
										$title=__('Data categories','webtoffee-gdpr-cookie-consent');
										$data_dec_arr=$value;
										$old_key='dataDeclaration';
										break;
									case 'vendors':
										$title=__('Purposes (Legitimate interest)','webtoffee-gdpr-cookie-consent');
										$old_key='legIntPurposes';
										break;
									
									default:
										$title =$key;
										$old_key=$key;
										break;
								}
								if(is_array($value) && !empty($p_value[$old_key]))
								{
									?>
									<label class="cli-<?php echo $key; ?>-title cli-vendor-sub-title"> <?php _e($title, 'webtoffee-gdpr-cookie-consent') ?></label>
									<ul class="cli-<?php echo $key; ?> cli_vendor_subtab_header">
									<?php	
									if( is_array($p_value) )
									{	
										foreach ($p_value as $k_key => $v_val) {
											
											if('legIntPurposes' === $k_key && 'legIntPurposes' === $old_key && !empty($legIntPurposes))
											{
												foreach ($purpose_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
																	
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                                <?php
										                        if(is_array($retention_period_arr) && !empty($retention_period_arr))
																{			
																	foreach ($retention_period_arr as $r_key => $days) {
																		
																		if( $key === $r_key)
																		{
																			if(is_array($days))
																			{
																				foreach ($days as $d_key => $day) {
																					
																					if( $v_key === $d_key)
																					{
																						?>
																						<div class="cli-retention-days" style="display: inline-block;">
																							<label class="cli-data-retention-title cli-vendor-sub-title"> <?php _e(' ( Data Retention Period : ', 'webtoffee-gdpr-cookie-consent') ?>
																							</label>
								                        									<span class="cli-retention-link cli-vendor-sub-title"> <?php echo esc_html_e($day).__(' days )','webtoffee-gdpr-cookie-consent'); ?>
								                        									</span>
								                        								</div>
						                        										<?php
						                        									}
						                        								}
						                        							}
																		}
																	}
																}
																?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
											
											if('purposes' === $k_key && 'purposes' === $old_key && !empty($purposes))
											{
												foreach ($purpose_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
											
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                                <?php
										                        if(is_array($retention_period_arr))
																{			
																	foreach ($retention_period_arr as $r_key => $days) {
																		
																		if( $key === $r_key)
																		{
																			if(is_array($days))
																			{
																				foreach ($days as $d_key => $day) {
																					
																					if( $v_key === $d_key)
																					{
																						?>
																						<div class="cli-retention-days" style="display: inline-block;">
																							<label class="cli-data-retention-title cli-vendor-sub-title"> <?php _e(' ( Data Retention Period : ', 'webtoffee-gdpr-cookie-consent') ?>
																							</label>
								                        									<span class="cli-retention-link cli-vendor-sub-title"> <?php echo esc_html_e($day).__(' days )','webtoffee-gdpr-cookie-consent'); ?>
								                        									</span>
								                        								</div>
						                        										<?php
						                        									}
						                        								}
						                        							}
																		}
																	}
																	
																}
																?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
											if( 'specialPurposes' === $k_key && !empty($specialPurposes) && 'specialPurposes' === $old_key)
											{
												foreach ($special_purpose_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
											
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
											if( 'features' === $k_key && !empty($features) && 'features' === $old_key)
											{
												foreach ($feature_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
											
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
											if( 'specialFeatures' === $k_key && !empty($specialFeatures) && 'specialFeatures' === $old_key)
											{
												foreach ($special_feature_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
											
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
											if( 'dataDeclaration' === $k_key && !empty($dataDeclaration) && 'dataDeclaration' === $old_key)
											{
												foreach ($data_dec_arr as $pur_key => $pur_value) {

													foreach ($v_val as $v_key => $v_value) {
											
														if($v_value === $pur_key)
														{
															?>	 
															<li>
								                                <?php esc_html_e($pur_value['name'], 'webtoffee-gdpr-cookie-consent'); ?>
								                           	</li>
						                        			<?php
														}
													}
												}
											}
										}	
									}							
									?>
									</ul>
									<?php
								}
							}
						}
						?>
						<div class="cli-iab-device-storage-overview">
							<?php
							if(!empty($use_cookies) || !empty($usesnoncookieaccess) || !empty($cookie_age) || !empty($cookie_refresh))
							{
								?>
								<label class="cli-vendor-sub-title">
									<?php _e('Device storage overview','webtoffee-gdpr-cookie-consent')?>
								</label>
								<ul class="cli_vendor_subtab_header">
									<?php
									if(!empty($use_cookies))
									{
										$tracking_method = __('Cookies','webtoffee-gdpr-cookie-consent') ;
										if(!empty($usesnoncookieaccess))
										{
											$tracking_method .= __(' and others.','webtoffee-gdpr-cookie-consent');
										}
										$days=self::wt_cli_convert_seconds_to_days($cookie_age);
										?>
										<li>
											<label><?php echo _e('Tracking method : ').$tracking_method; ?></label>
										</li>
										<?php
									}
									if(!empty($cookie_age))
									{
										$days=self::wt_cli_convert_seconds_to_days($cookie_age);
										?>
										<li>
											<label><?php echo _e('Maximum duration of cookies : ').$days.__(' days','webtoffee-gdpr-cookie-consent');  ?> </label>
										</li>
										<?php
									}
									if(isset($cookie_refresh))
									{
										if(!empty($cookie_refresh))
										{
											$refresh_text = __('Cookie lifetime is being refreshed','webtoffee-gdpr-cookie-consent');
										}
										else{

											$refresh_text = __('Cookie lifetime is not being refreshed','webtoffee-gdpr-cookie-consent');
										}
										?>
										<li>
											<label> <?php echo $refresh_text; ?> </label>
										</li>
										<?php
										}
									?>
									</ul>
									<?php
								}
								?>
						</div>
						<div class="wt-cli-iab-vendor-storage-disclosure-section"></div>
                    </div>
				</div>
			</div>
							
        	<?php
		}
	}
	public static function wt_cli_convert_seconds_to_days($sec)
	{
		$days = floor($sec/86400);
		return $days;
	}
	/**
	* @since    2.5.0
	* return excluded vendors array
	*/
	
	public static function get_excluded_vendor_list()
	{
		$excl_vendors_arr 		 = array();
		$excl_vendors_arr 		 = apply_filters('wt_cli_excluded_vendor_list',$excl_vendors_arr);
		return $excl_vendors_arr;
	}
	/**
	* @since    2.5.0
	* return allowed vendors key array
	*/

	public static function get_allowed_vendor_list()
	{
		$allowed_array    = array();
		$vendor_key_arr   = array();
		$file    		  = Cookie_Law_Iab_Tcf::get_vendor_list();
    	$jsonData 		  = file_get_contents($file);
    	$vendors_list_arr = json_decode($jsonData, true);
		foreach ($vendors_list_arr as $key => $value) {

			if('vendors' === $key)
    		{	
    			$vendors_arr=$value;
    		}
		}
		if(!empty($vendors_arr))
	    {
	        foreach ($vendors_arr as $kl => $kv) {
	        	 
				$vendor_key_arr[]=$kl;
	        }

	    }
	    $excl_vendors_arr = self::get_excluded_vendor_list();
	    if( !empty($excl_vendors_arr) && !empty($vendor_key_arr) )
	    {
	    	$allowed_vendor_key_arr = array_diff($vendor_key_arr, $excl_vendors_arr);
	    }
	    else{
	    	$allowed_vendor_key_arr = $vendor_key_arr;
	    }
		$allowed_vendor_key_arr = apply_filters('wt_cli_allowed_vendor_list',$allowed_vendor_key_arr);
		return array_values($allowed_vendor_key_arr);
	}
}   

new Cookie_Law_Info_Settings_Popup_For_IAB();