<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">

<head>
	<title>NS train planner</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
	<table>
		<thead>
			<tr>
				<th>Aantal Overstappen</th>
				<th>ReisTijd</th>
				<th>VertrekTijd</th>
				<th>AankomstTijd</th>
				<th>Vrienden op deze rit</th>
			</tr>
		</thead>
		<tbody>
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
		$travelOptions = simplexml_load_string($output) or die("Could not load results");
		foreach ($travelOptions->ReisMogelijkheid as $travelOption) { ?>
			<tr>
				<td><?php echo $travelOption->AantalOverstappen ?></td>
				<td><?php echo $travelOption->ActueleReisTijd ?></td>
				<td><?php echo date_format(date_create($travelOption->ActueleVertrekTijd), 'H:i') ?></td>
				<td><?php echo date_format(date_create($travelOption->ActueleAankomstTijd), 'H:i') ?></td>
				
				<!-- ROBIN: hier kun je aan de hand van $travelOption en zijn values de ritten vinden (en dus de vrienden) -->
				<!-- met het uitvoeren van var_dump($travelOption); kun je zien welke values hij heeft -->
			</tr>
		<?php
		}
	}
}

travelAdvice(getStationCodeByName($_POST['from']), getStationCodeByName($_POST['to']));

?>
		</tbody>
	</table>
</body>
</html>