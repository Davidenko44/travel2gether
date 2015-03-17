function submitfunction() {
	var from = $("#from")[0], to = $("#to")[0];
	
	queryNS(from.value, to.value);
}

function queryNS(fromStation, toStation) {
	var url = "http://webservices.ns.nl/ns-api-treinplanner?fromStation=" + fromStation + "&toStation=" + toStation;
	
	console.log(url);
	
	$.ajax(url, {
		complete: function (xmlhttprequest, response) {
			console.log(response);
			console.log(xmlhttprequest);
		}
	})
}