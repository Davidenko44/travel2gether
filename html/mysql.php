 <?php
    header('Content-Type: application/json');

    $aResult = array();

    if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function passed!'; }
    if( !isset($_POST['facebookId']) ) { $aResult['error'] = 'No facebook ID passed!'; }
    if( !isset($_POST['friendsIds']) ) { $aResult['error'] = 'No friends IDs passed!'; }

    if( !isset($aResult['error']) ) {
    	switch($_POST['functionname']) {
    		case 'saveFriends':
    			$aResult['result'] = 'I have a Facebook ID in PHP: '.$_POST['facebookId'].'! '.
    					'And I even found friends: '.implode(' ', $_POST['friendsIds']).'!';
    			break;
    	}
    }

    echo json_encode($aResult);
?>