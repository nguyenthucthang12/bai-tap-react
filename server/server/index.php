<?php
/**
 * 
 */
include 'database.php';
/**
 * 
 */
class App extends DB
{
	function __construct()
	{
		$this->ketnoi = new DB();
	}
	public function login($user,$password){
		$data = $this->ketnoi->login($user,$password);
		return $data;
	}
	public function getallsp(){
		$data = $this->ketnoi->getAllProduct();
		return $data;
	}
	public function getallcate(){
		$data = $this->ketnoi->getAllCategory();
		return $data;
	}
	public function getProductByCategory($id)
	{
		$data = $this->ketnoi->getAllProductCategory($id);
		return $data;
	}
	public function getProductByID($id)
	{
		$data = $this->ketnoi->getProductByID($id);
		return $data;
	}
}