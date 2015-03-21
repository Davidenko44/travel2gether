var directionsDisplay, directionsService, map, geocoder;
directionsService = new google.maps.DirectionsService;

function initialize() {
	geocoder = new google.maps.Geocoder();
	directionsDisplay = new google.maps.DirectionsRenderer({
		polylineOptions: {
			strokeColor: "red"
		}
	});

	var chicago = new google.maps.LatLng(41.850033, -87.6500523);
	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	directionsDisplay.setMap(map);
}

function calcRoute(start, end) {
  	var request = {
		origin:start + ' train station',
  		destination:end + ' train station',
  		travelMode: google.maps.TravelMode.TRANSIT
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}

function showFriendsOnTrip() {
	// voorbeeld showSingleFriend(naam, opstapstation):
	// showSingleFriend("Roy Hoeymans", "Almere Centraal");
}

function showSingleFriend(friendName, station) {
	geocoder.geocode( { 'address': station + ' train station' }, function (results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	    	var marker = new google.maps.Marker({
	    		map: map,
	    		position: results[0].geometry.location,
	    		title: friendName
	    	});
	    	
	    	var infowindow = new google.maps.InfoWindow({
	    		content: friendName
	    	});

	    	google.maps.event.addListener(marker, 'click', function() {
	    	    infowindow.open(map, marker);
	    	});
	    } else {
	    	alert('Geocode was not successful for the following reason: ' + status);
	    }
	});
}