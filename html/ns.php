<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">

<head>
	<title>NS train planner</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/JavaScript" src="js/main.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</head>

<body>
<form action="php/travel.php" method="post" id="NSForm">
	<div id="title">Train Planning</div>
	<div class="row"><label class="col1">From:&nbsp;&nbsp;</label>
		<span class="col2"><input name="from" class="input" type="text" id="from" size="20" tabindex="1"></span>
	</div>
	
	<div class="row"><label class="col1">To:&nbsp;&nbsp;</label>
		<span class="col2"><input name="to" class="input" type="text" id="to" size="20" tabindex="2"></span>
	</div>
	
	<div align="center" class="submit"><input type="image" src="img/b_send.gif" alt="send" width="52" height="19" border="0">
	</div>
</form>
</body>
</html>