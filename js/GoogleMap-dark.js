$(document).ready(function (){

	/* Google Map
	-----------------------------------------------------*/

	function mapInitialize() {

	var mapDark =  [
				  {
					  "stylers": [
						  {
							  "hue": "#ff1a00"
						  },
						  {
							  "invert_lightness": true
						  },
						  {
							  "saturation": -100
						  },
						  {
							  "lightness": 33
						  },
						  {
							  "gamma": 0.5
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						  {
							  "color": "#2D333C"
						  }
					  ]
				  }
			  ];

	  var mapLight =  [
				  {
					  "featureType": "landscape",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "transit",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "poi",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "labels",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "labels.icon",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "stylers": [
						  {
							  "hue": "#00aaff"
						  },
						  {
							  "saturation": -100
						  },
						  {
							  "gamma": 2.15
						  },
						  {
							  "lightness": 12
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "labels.text.fill",
					  "stylers": [
						  {
							  "visibility": "on"
						  },
						  {
							  "lightness": 24
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "geometry",
					  "stylers": [
						  {
							  "lightness": 57
						  }
					  ]
				  }
			  ]

	  var yourLatitude = 38.037047586310734;
	  var yourLongitude = -84.50510989141605;

	  var myOptions = {
		zoom: 14,
		center: new google.maps.LatLng(yourLatitude,yourLongitude-0.01),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		panControl: false,
		zoomControl: false,
		scaleControl: false,
		streetViewControl: false,
		styles: mapLight
	  };

	  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

	  var image = 'images/my-location.png';
	  var myLatLng = new google.maps.LatLng(yourLatitude,yourLongitude);
	  var myLocation = new google.maps.Marker({
		  position: myLatLng,
		  map: map,
		  icon: image
	  });

	}

	google.maps.event.addDomListener(window, 'load', mapInitialize);

});
