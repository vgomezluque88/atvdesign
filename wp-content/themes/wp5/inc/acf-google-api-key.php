<?php

function my_acf_init() {
	
	acf_update_setting('google_api_key', 'AIzaSyDal1A14ft9vEhJrHUHtnQwwpz-8vvuBAc');
}

add_action('acf/init', 'my_acf_init');




// Get location data from Google
function parse_address_google( $address = '' ) {
    if( empty( $address ) ) {
        return;
    }
    $geolocate_api_key = acf_get_setting('google_api_key');
    $address = urlencode( $address );
    $request = wp_remote_get("https://maps.googleapis.com/maps/api/geocode/json?address=$address|country:ES&key=$geolocate_api_key");
	error_log("https://maps.googleapis.com/maps/api/geocode/json?address=$address&key=$geolocate_api_key");
    $json = wp_remote_retrieve_body( $request );
	ob_start();
	var_dump($json);
	error_log(ob_get_clean());
    $data = json_decode( $json );
    if ( !$data ) {
		// ERROR! Google Maps returned an invalid response, expected JSON data
		return;
	}
	if ( isset($data->{'error_message'}) ) {
		// ERROR! Google Maps API returned an error
		return;
	}
	if ( empty($data->{'results'}[0]->{'geometry'}->{'location'}->{'lat'}) || empty($data->{'results'}[0]->{'geometry'}->{'location'}->{'lng'}) ) {
		// ERROR! Latitude/Longitude could not be found
		return;
	}
    $array = json_decode( $json, true );
    $result = $array['results'][0];
    $location = array();
    // street_number, street_name, city, state, post_code and country
    foreach ($result['address_components'] as $component) {
        switch ($component['types']) {
          case in_array('street_number', $component['types']):
            $location['street_number'] = $component['long_name'];
            break;
          case in_array('route', $component['types']):
            $location['street_name'] = $component['long_name'];
            break;
          case in_array('sublocality', $component['types']):
            $location['sublocality'] = $component['long_name'];
            break;
          case in_array('locality', $component['types']):
            $location['city'] = $component['long_name'];
            break;
          case in_array('administrative_area_level_2', $component['types']):
            $location['region'] = $component['long_name'];
            break;
          case in_array('administrative_area_level_1', $component['types']):
            $location['state'] = $component['long_name'];
            $location['state_short'] = $component['short_name'];
            break;
          case in_array('postal_code', $component['types']):
            $location['postal_code'] = $component['long_name'];
            break;
          case in_array('country', $component['types']):
            $location['country'] = $component['long_name'];
            $location['country_short'] = $component['short_name'];
            break;
        }
      }
      $location['lat'] = $data->{'results'}[0]->{'geometry'}->{'location'}->{'lat'};
	  $location['lng'] = $data->{'results'}[0]->{'geometry'}->{'location'}->{'lng'};
      return $location;
} 

// run on import
function _s_acf_update_map_field( $id ) {
    // Get ACF map field    
    $field = get_field( 'distributor_location', $id );
    if( empty( $field['address'] ) ) {
        return;
    }
    $location = parse_address_google( $field['address'] );
    $args = wp_parse_args( $location, $field );
    $locationLatLng = array(
      'post_id' => $id,
      'lat' => $location['lat'],
      'lng' => $location['lng']
    );
    update_field( 'distributor_location', $args, $id );
    update_field( 'info_json', json_encode($locationLatLng), $id );
}
add_action( 'pmxi_saved_post', '_s_acf_update_map_field', 10, 1 );