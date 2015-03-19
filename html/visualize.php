<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">

<head>
	<title>NS train planner</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="http://maps.googleapis.com/maps/api/js"></script>
	<script>
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': "Amsterdam Centraal"}, function(results, status) {
	    if (results == null)
	    {
	        // nothing found
	    }
	    else
	    {
	        // point is an instance of GLatLng with coordinates you need
	    	var latlng = results[0].geometry.location;

			function initialize() {
// 	    		var map=new google.maps.Map(document.getElementById("googleMap"), {
//	    			center: new google.maps.LatLng(latlng.k, latlng.D),
//	    			zoom: 10,
//	    			mapTypeId: google.maps.MapTypeId.ROADMAP
//	    		});
				var directionsDisplay = new google.maps.DirectionsRenderer({
					polylineOptions: {
						strokeColor: "red"
					}
				});
	
				var stationFrom = new google.maps.LatLng(latlng.k, latlng.D);
				var mapOptions = {
				    zoom: 10,
				    mapTypeId: google.maps.MapTypeId.ROADMAP,
				    center: stationFrom
			 	}
				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				directionsDisplay.setMap(map);
			}

			function calcRoute() {
			 	var start = "Amsterdam Centraal";
			  	var end = "Amsterdam Sloterdijk";
			  	var request = {
				    origin:start,
				    destination:end,
				    travelMode: google.maps.DirectionsTravelMode.DRIVING
				};
				directionsService.route(request, function(response, status) {
				    if (status == google.maps.DirectionsStatus.OK) {
				    	directionsDisplay.setDirections(response);
					}
				});
			}
	        
	    	// load google maps
	    	google.maps.event.addDomListener(window, 'load', initialize);
	    }
	});
	</script>
</head>

<body>
	<div id="googleMap" style="width:500px;height:380px;"></div>
</body>

</html>