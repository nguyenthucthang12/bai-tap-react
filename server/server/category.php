<?php 
	include 'index.php';
	$app = new App();
	if(isset($_GET['a'])){
		$a = $_GET['a'];
		switch ($a) {
			case 'getall':
				$data = $app->getallcate();
				echo json_encode($data);
				break;
			
			default:
				# code...
				break;
		}
	}
 ?>