 <?php
    header('Content-Type: application/json');

    $aResult = array();

    if( !isset($_POST['facebookId']) ) { $aResult['error'] = 'No facebook ID passed!'; }
    
    if( !isset($_POST['friendsIds']) ) { $aResult['error'] = 'No friends IDs passed!'; }

    if( !isset($aResult['error']) ) {
      	$aResult['result'] = 'I have a Facebook ID in PHP: '.$_POST['facebookId'].'! '.
    		'And I even found friends: '.implode(' ', $_POST['friendsIds']).'!';
    }

    echo json_encode($aResult);
?>