<?php
	include 'index.php';
	$app = new App();
	if(isset($_GET['a'])){
		$a = $_GET['a'];
		switch ($a) {
			case 'getall':
				$data = $app->getallsp();
				echo json_encode($data);
				break;
			case 'cate':
				$id =$_GET['id'];
				$data = $app->getProductByCategory($id);
				echo json_encode($data);
				break;
			case 'detail':
				$id =$_GET['id'];
				$data = $app->getProductByID($id);
				echo json_encode($data);
				break;
			default:
				# code...
				break;
		}
	}
 ?>