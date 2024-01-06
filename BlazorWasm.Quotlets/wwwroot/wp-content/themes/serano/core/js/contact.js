jQuery(function ($) {

/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/
	window.ContactMap = function() {

		if( $('#map_canvas').length > 0 ){

			var map_marker_image 	= 'images/marker.png';
			var map_address 		= 'New York City'
			var map_zoom			= 16;
			var marker_title 		= 'Hello Friend!';
			var marker_text			= 'Here we are. Come to drink a coffee!';
			var map_type			= google.maps.MapTypeId.SATELLITE;

			if( typeof ClapatMapOptions != 'undefined' ){

				map_marker_image 	= ClapatMapOptions.map_marker_image;
				map_address 		= ClapatMapOptions.map_address;
				map_zoom			= Number(ClapatMapOptions.map_zoom);
				marker_title 		= ClapatMapOptions.marker_title;
				marker_text			= ClapatMapOptions.marker_text;
				if( ClapatMapOptions.map_type == 0 ){

					map_type = google.maps.MapTypeId.SATELLITE;
				}
				else{

					map_type = google.maps.MapTypeId.ROADMAP;
				}

			}

			var newstyle = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
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
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			];

			var settings = {
				zoom: map_zoom,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false,
				mapTypeId: map_type,
				styles: newstyle
			};


			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;"><strong style="color:#000!important;">' + marker_title + '</strong></h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">' + marker_text + '</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var companyImage = new google.maps.MarkerImage(map_marker_image,
				new google.maps.Size(58,63),
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)
			);

			var latitude = 43.270441;
			var longitude = 6.640888;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address':map_address}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {

					map.setCenter(results[0].geometry.location);

					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();

					var companyPos = new google.maps.LatLng(latitude, longitude);
					var companyMarker = new google.maps.Marker({
										position: companyPos,
										map: map,
										icon: companyImage,
										title:"Our Office",
										zIndex: 3});
									google.maps.event.addListener(companyMarker, 'click', function() {
										infowindow.open(map,companyMarker);
									});
				}
			});

		}

		return false

	} // End ContactMap

	window.InitContactMap = function() {

		if( $('#map_canvas').length > 0 ){

			if (typeof google != 'undefined' && typeof google.maps != 'undefined'){

				// google maps already loaded, call the function which draws the map
				ContactMap();

			} else {

				var map_api_key = '';
				if( typeof ClapatMapOptions != 'undefined' ){
					map_api_key = 'key=' + ClapatMapOptions.map_api_key;
				}
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
							'&callback=ContactMap';
				document.body.appendChild(script);
			}

		}
	} // End InitContactMap
	
});
	
	// Export functions to scripts
	var ContactMap = window.ContactMap;
	var InitContactMap = window.InitContactMap;