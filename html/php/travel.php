<?php

function getStationCodeByName($station) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://webservices.ns.nl/ns-api-stations-v2");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_USERPWD, "royhoeymans@gmail.com:fbuXQtSqajhWzfScRoWIgBkrmZyzuAZHSElqvW0AJHl54T660uHCng");
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	$output = curl_exec($ch);
	curl_close($ch);
	
	$xml = simplexml_load_string($output) or die("Error: Cannot read XML data");
	
	$result = "Niks";
	foreach ($xml as $row) {
		$code = $row->Code;
		foreach (array('Kort', 'Middel', 'Lang') as $name) {
			if (strtolower($row->Namen->$name) == strtolower($station)) {
				$result = $code;
			}
		}
	}
	return $result;
}

function travelAdvice($from, $to) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://webservices.ns.nl/ns-api-treinplanner?fromStation=".$from."&toStation=".$to."");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_USERPWD, "royhoeymans@gmail.com:fbuXQtSqajhWzfScRoWIgBkrmZyzuAZHSElqvW0AJHl54T660uHCng");
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	$output = curl_exec($ch);
	$info = curl_getinfo($ch);
	curl_close($ch);
	
	if ($info['http_code'] === 200) {
		echo $output;
	}
}

travelAdvice(getStationCodeByName($_POST['from']), getStationCodeByName($_POST['to']));

?>