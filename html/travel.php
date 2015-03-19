<?php
$servername = "localhost";
$username = "root";
$password = "social";
$dbname = "socialweb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>

<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">

<head>
	<title>NS train planner</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="http://maps.googleapis.com/maps/api/js"></script>
	<script src="js/visualize.js"></script>
	<script type="text/javascript">
		function findRoute() {
			calcRoute('<?=$_POST['from']?>', '<?=$_POST['to']?>');
		}
	</script>
</head>

<body onload="initialize();findRoute();">
	<table>
		<thead>
			<tr>
				<th>Aantal Overstappen</th>
				<th>ReisTijd</th>
				<th>VertrekTijd</th>
				<th>AankomstTijd</th>
				<th>Vrienden op deze rit</th>
				<th>Plannen</th>
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

function test(){
	echo "<script>console.log('hi')</script>";
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
				<td> 				<?				
				echo $travelOption->ReisDeel->RitNummer;
				if(count($travelOption->ReisDeel) > 1){
					echo $travelOption->ReisDeel[1]->RitNummer;
				}
				?> </td>
				<td>
				<form method="POST" action="travel.php">
					<input type="submit" class="button" name="plannen" id="plannen" value="Plannen"/>
					<input type="hidden" name="from" id="from" value="<? echo $_POST[from];?>"/>
					<input type="hidden" name="to" id="to" value="<? echo $_POST['to'];?>"/>
					<input type="hidden" name="parts" id="parts" value="<? echo $travelOption->AantalOverstappen+1;?>"/>
					<?
					$counter = 0;
					foreach($travelOption->ReisDeel as $reisDeel){?>
						<input type="hidden" name="tripID<?echo $counter?>" id="tripID<?echo $counter?>" value="<? echo $reisDeel->RitNummer;?>"/>
					<?
						$counter++;
					}
					?>
				</form>
				</td>
			</tr>
		<?php
		}
	}
}

if(isset($_POST['plannen'])){
	$sql = "INSERT INTO trips(uid, tripid, fromStation, toStation) VALUES (859413107430474, $_POST[tripID0], '$_POST[from]', '$_POST[to]')";
	
	if (mysqli_query($conn, $sql)) {
		echo "Trip planned!";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
}

travelAdvice(getStationCodeByName($_POST['from']), getStationCodeByName($_POST['to']));
?>
		</tbody>
	</table>
	<div id="googleMap" style="width:500px;height:380px;"></div>
</body>
</html>