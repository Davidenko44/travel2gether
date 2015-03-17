function submitfunction() {
	var from = $("#from")[0], to = $("#to")[0];
	
	queryNS(from.value, to.value);
}

function queryNS(fromStation, toStation) {
	var from = getStationCodeByName(fromStation);
	var to = getStationCodeByName(toStation);
	var url = "http://webservices.ns.nl/ns-api-treinplanner?fromStation=" + from + "&toStation=" + to;
	
	$.ajax(url, {
		complete: function (xmlhttprequest, response) {
			console.log(response);
			console.log(xmlhttprequest);
		}
	});
}

function getStationCodeByName(name) {
	// @todo should be a call to NS
	var xmlDoc = loadXMLDoc("xml/ns-api-stations-v2.xml");
	var stations = xmlDoc.getElementsByTagName("Station");
	var foundCode = "";
		
	for (i=0; i<stations.length; i++) {
		var code = stations[i].getElementsByTagName("Code")[0].textContent;
		
		["Kort", "Middel", "Lang"].forEach(function (nameTag) {
			var possibleName = stations[i].getElementsByTagName("Namen")[0].getElementsByTagName(nameTag)[0].textContent;
			
			if (possibleName.toLowerCase() === name.toLowerCase()) {
				foundCode = code;
			}
		});
	}
	
	return foundCode;
}

function loadXMLDoc(filename) {
	if (window.XMLHttpRequest) {
	  xhttp=new XMLHttpRequest();
	} else {
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",filename,false);
	xhttp.send();
	return xhttp.responseXML;
}