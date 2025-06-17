var obj;
var locations = [];
var markers;
var marker;
var bounds;
var image = {};
var markerCluster;
var map;
var mapSingle;
var markerSingle = false;
var browserLat;
var browserLng;
var browserLocation = false;
var hasAddress = false;
var geocoder;
var clicked = false;
var styles = [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
];



(function ($, window, document) {


    function searchRadius(location, multiply) {
        var inArea = []
        var searchArea = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            center: new google.maps.LatLng(location.lat(), location.lng()),
            radius: (hasAddress) ? multiply * 1000 : 500000 //meters
        }

        searchArea = new google.maps.Circle(searchArea);
        $.each(markers, function (i, marker) {

            if (marker !== undefined && marker.getPosition() !== undefined) {
                if (google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(), searchArea.getCenter()) <= searchArea.getRadius()) {
                    inArea.push(marker);
                }
            }


        });
        if (inArea.length == 0 && multiply < 6) {
            return searchRadius(location, multiply + 1);
        } else {
            return inArea;
        }

    }

    function geocodeAddress(geocoder, resultsMap, address, locations, browserLocation) {

        if (!browserLocation) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status === 'OK') {
                    bounds = new google.maps.LatLngBounds();
                    resultsMap.setCenter();
                    var area = searchRadius(results[0].geometry.location, 1);
                    if (area.length) {
                        $.each(area, function (i, marker) {
                            bounds.extend(marker.getPosition());
                        });
                    } else {
                        var nearest = nearestLocation(results[0].geometry.location, locations);
                        if (nearest !== undefined) {
                            bounds.extend(results[0].geometry.location);
                            bounds.extend(nearest);
                        }
                    }
                    map.fitBounds(bounds);
                } else {
                    alert("Location not founded");
                }
            });
        } else {
            bounds = new google.maps.LatLngBounds();
            resultsMap.setCenter();
            var currentLocation = new google.maps.LatLng(browserLat, browserLng);
            var area = searchRadius(currentLocation, 1);
            if (area.length) {
                $.each(area, function (i, marker) {
                    bounds.extend(marker.getPosition());
                });
            } else {
                var nearest = nearestLocation(currentLocation, locations);

                if (nearest !== undefined) {
                    bounds.extend(currentLocation);
                    bounds.extend(nearest);
                }
            }
            map.fitBounds(bounds);
        }



    }

    function nearestLocation(currentLocation, locations) {
        var minDif = 99999;
        var closest;

        for (index = 0; index < locations.length; ++index) {
            if (locations[index] !== undefined) {
                var dif = PythagorasEquirectangular(currentLocation.lat(), currentLocation.lng(), locations[index]['lat'], locations[index]['lng']);
            }

            if (dif < minDif) {
                closest = index;
                minDif = dif;
            }
        }
        return locations[closest];

    }
    $('body').on('click', '.close-distributor', function (event) {
        closeElement('distributor');
    }); // Función que carga el post pasando elemento

    function closeElement(type) {
        $('.single-' + type + '-ajax').addClass('single-' + type + '-loading');
        $('.single-' + type + '-ajax').addClass('single-' + type + '-animating');
        $('.single-' + type + '-ajax').removeClass('single-' + type + '-show');
        $('body').removeClass(type + '-open');

        $('#wrapper-navbar .navbar-toggler').removeClass('active close-' + type + '');
        setTimeout(function () {
            $('.single-' + type + '-ajax .cont__right').remove();
        }, 1000);
    }

    if (typeof distributors !== 'undefined') {
        obj = JSON.parse(distributors);

        $('body').on('submit', '#points-of-sale', function (e) {

            e.preventDefault();
            var $this = $(this);
            var validate = false;

            if ($("input[name=point_address]").val().length > 0) {
                $("#cbUse").prop("checked", false);
            } else {
                $("#cbUse").prop("checked", true);
            }

            browserLocation = (browserLat && browserLng && $('#cbUse:checked').length) ? true : false;

            hasAddress = ($('input[name=point_address]').val().length || browserLocation) ? true : false;


            $this.find('input[name=point_address]').each(function (index, element) {
                // element == this
                if ($(this).val().length) {
                    validate = true;
                }
            });

            if (browserLocation) {
                //$('input[name=point_address]').prop('disabled', true);
                //$('input[name=point_address]').addClass('disable-input');
            }

            if (!validate && !browserLocation) {
                //alert('Debes aceptar la localización o introducir ciudad o código postal.');
            }


            //if (validate || browserLocation) {
            if (markerCluster != undefined) {
                markerCluster.clearMarkers();
            }
            if (markers !== undefined) {
                for (var i = 0; i < markers.length; i++) {
                    if (markers[i] !== undefined) {
                        markers[i].setMap(null);
                    }

                }
                markers.length = 0;

            }
            $('#map-points-of-sale').addClass("active");
            var address = $this.find('input[name=point_address]').val();
            address = address + ', España';


            markers = obj.map(function (location, i) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    map: map,
                    icon: image,
                });
                if (obj[i] !== undefined) {
                    marker.set("id", i);
                    marker.set("post_id", obj[i].post_id);

                    marker.addListener('click', function () {

                        for (var j = 0; j < markers.length; j++) {
                            markers[j].setIcon(image);
                        }
                        this.setIcon(imageOn)

                        if (!clicked) {

                            clicked = true;
                            showElement(this.get('post_id'), 'distributor', location.lat, location.lng);
                        }
                    });
                }


                return marker;
            });
            var clusterStyles = [{
                    textColor: '#7ab639',
                    url: '/wp-content/themes/wp5/assets/map-cercle.png',
                    height: 58,
                    width: 58
                },
                {
                    textColor: '#7ab639',
                    url: '/wp-content/themes/wp5/assets/map-cercle.png',
                    height: 58,
                    width: 58
                },
                {
                    textColor: '#7ab639',
                    url: '/wp-content/themes/wp5/assets/map-cercle.png',
                    height: 58,
                    width: 58
                }
            ];
            markerCluster = new MarkerClusterer(map, markers, {
                gridSize: 50,
                styles: clusterStyles
            });

            geocodeAddress(geocoder, map, address, locations, browserLocation);

            //}



        });

        function showElement(id, type, locationLat, locationLng) {
            $('.single-' + type + '-ajax .wrapper .cont__right').remove();
            $('.single-' + type + '-ajax').addClass('single-' + type + '-loading');
            $('.single-' + type + '-ajax').addClass('single-' + type + '-animating');
            $('.single-' + type + '-ajax').removeClass('single-' + type + '-show');

            $('.points-of-sale-wrapper').addClass('loading');
            if (id.length !== 0) {
                var data = {
                    'action': 'get_ajax_distributor',
                    'id': id
                };
                var timeStart = Date.now();
                var successDelay = 600;


                $.ajax({
                    // you can also use $.post here
                    url: ajax_custom.ajaxurl,
                    // AJAX handler
                    data: data,
                    type: 'POST',
                    beforeSend: function beforeSend(xhr) {
                        setTimeout(function () {
                            $('.single-' + type + '-ajax').removeClass('single-' + type + '-loading');
                        }, 30);
                    },
                    success: function success(data) {
                        if (data) {
                            if (Date.now() - timeStart < successDelay) {

                                setTimeout(function () {

                                    loadContent(data, 'distributor', locationLat, locationLng);
                                }, successDelay - (Date.now() - timeStart));
                            } else {
                                loadContent(data, type, locationLat, locationLng);
                            }
                        }
                    },
                    error: function error(jqXHR, textStatus, errorThrown) {}
                });
            }
        }

        function loadContent(data, type, locationLat, locationLng) {

            $('.single-' + type + '-ajax .loader-holder').remove();
            $('.single-' + type + '-ajax .wrapper article').append(data);

            if ($('#single-point-element-map').length) {
                if (markerSingle) {
                    markerSingle.setMap(null);
                    markerSingle = false;
                }
                var myLatlng = new google.maps.LatLng(locationLat, locationLng);
                mapSingle.setCenter(myLatlng);

                markerSingle = new google.maps.Marker({
                    position: myLatlng,
                    icon: image
                });
                markerSingle.setMap(mapSingle);
                clicked = false;
                // The location of Uluru


            }

            $('body').addClass(type + '-open');
            $('.cont__' + type + '_anchors .cont_' + type + '_anchors--menu a:first-child').addClass('active');
            $('#wrapper-navbar .navbar-toggler').addClass('active close-' + type + '');
            $('.cont__' + type + '_content_top').css('padding-top', $('.cont__' + type + '_content_top--title').height());
            var title = $('.cont__' + type + '_content_top--title').find('h1').text();
            setTimeout(function () {
                $('.single-' + type + '-ajax').removeClass('single-' + type + '-animating');
                $('.single-' + type + '-ajax').addClass('single-' + type + '-show');
                $('.points-of-sale-wrapper').removeClass('loading');
            }, 0.1);
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, error);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            browserLat = position.coords.latitude
            browserLng = position.coords.longitude;

            $('.form-points-of-sale-item .checkbox-wrapper').addClass('active');
            $("#cbUse").prop("checked", true);
            $('#points-of-sale').submit();
        }

        function error(err) {
            var address = $('input[name=point_address]').val();
            address = address + ', España';
            $('#points-of-sale').submit();
        }
    }


    $(document).ready(function () {
        if ($('#points-of-sale').length) {
            getLocation();
        }

        $('#cbUse').change(function (e) {
            if ($(this).is(":checked")) {
                browserLocation = (browserLat && browserLng && $('#cbUse:checked').length) ? true : false;
                if (browserLocation) {
                    $('#point_country, input[name=point_address]').prop('disabled', true);
                    $('#point_country, input[name=point_address]').addClass('disable-input');
                } else {
                    alert("No puedes buscar por tu localización porque no has permitido tu localización");
                    $(this).prop('checked', false);
                    $('#point_country, input[name=point_address]').prop('disabled', false);
                    $('#point_country, input[name=point_address]').removeClass('disable-input');
                }

            } else {
                $('#point_country, input[name=point_address]').prop('disabled', false);
                $('#point_country, input[name=point_address]').removeClass('disable-input');
            }
        });

        //close overlay distributor
        $('body').on('click', '.single-distributor-ajax .content-single-distributor .cont__close', function (event) {
            for (var j = 0; j < markers.length; j++) {
                markers[j].setIcon(image);
            }
            $('.single-distributor-ajax.single-distributor-show').removeClass('single-distributor-show');
        });
    });

})(jQuery, window, document);


function initMap() {

    if (typeof distributors !== 'undefined') {
        geocoder = new google.maps.Geocoder();
        image = {
            url: '/wp-content/themes/wp5/assets/pin-off.png',
            // This marker is 50 pixels wide by 50 pixels high.
            scaledSize: new google.maps.Size(44, 60),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 0)
        };
        imageOn = {
            url: '/wp-content/themes/wp5/assets/pin-on.png',
            // This marker is 50 pixels wide by 50 pixels high.
            scaledSize: new google.maps.Size(44, 60),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 0)
        };
        map = new google.maps.Map(document.getElementById('map-points-of-sale'), {
            center: {
                lat: 40.416775,
                lng: -3.703790
            },
            zoom: 6,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            rotateControl: false,
            styles: styles,
        });

        mapSingle = new google.maps.Map(document.getElementById('single-point-element-map'), {
            zoom: 18,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            rotateControl: false,
            styles: styles,
            zoomControl: false
        });


        google.maps.event.addListener(map, 'zoom_changed', function () {
            zoomChangeBoundsListener =
                google.maps.event.addListener(map, 'bounds_changed', function (event) {
                    if (this.getZoom() > 15 && this.initialZoom == true) {
                        // Change max/min zoom here
                        this.setZoom(15);
                        this.initialZoom = false;
                    }
                    google.maps.event.removeListener(zoomChangeBoundsListener);
                });
        });

        map.initialZoom = true;
    }

};