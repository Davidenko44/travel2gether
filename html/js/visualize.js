var directionsDisplay, directionsService;
directionsService = new google.maps.DirectionsService;

function initialize() {
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
		origin:start,
  		destination:end,
  		travelMode: google.maps.DirectionsTravelMode.TRANSIT
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}