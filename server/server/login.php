<?php 
	include 'index.php';
	$app = new App();
	$user = $_GET['email'];
	$password =  $_GET['password'];
	$data = $app->login($user,$password);
	echo json_encode($data);
	break;
 ?>