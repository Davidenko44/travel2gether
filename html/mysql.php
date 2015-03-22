 <?php
    header('Content-Type: application/json');

    $aResult = array();

    if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function passed!'; }
    if( !isset($_POST['facebookId']) ) { $aResult['error'] = 'No facebook ID passed!'; }

    if( !isset($aResult['error']) ) {
    	switch($_POST['functionname']) {
    		case 'saveFriends':
    			if( !isset($_POST['friendsIds']) ) { $aResult['error'] = 'No friends IDs passed!'; }
    			else {
    				$aResult['result'] = 'I have a Facebook ID in PHP: '.$_POST['facebookId'].'! '.
    						'And I even found friends: '.implode(' ', $_POST['friendsIds']).'!';
    			}
    			break;
    		
    		case 'saveTrip':
    			if( !isset($_POST['tripId']) ) { $aResult['error'] = 'No trip ID passed!'; }
    			else if( !isset($_POST['from']) ) { $aResult['error'] = 'No from station passed!'; }
    			else if( !isset($_POST['to']) ) { $aResult['error'] = 'No to station passed!'; }
    			else { 
    				$aResult['result'] = saveTrip($_POST['facebookId'], $_POST['tripId'], $_POST['from'], $_POST['to']);	
    			}
    			break;
    		
    		default: 
    			$aResult['error'] = 'No function found for ' . $_POST['functionname'];
    	}
    }

    echo json_encode($aResult);
    
    function saveTrip() {
    	echo 'bla';
    }
?>