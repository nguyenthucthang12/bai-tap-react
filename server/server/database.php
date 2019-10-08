<?php 
	class DB
	{
		
		function __construct()
		{
			$this->conn = mysqli_connect("localhost","root","","dbplan");
			mysqli_set_charset($this->conn,"utf8");
		}
		public function cover($Array){
			$i = 0;
			$data = array();
			while($row = mysqli_fetch_assoc($Array)){
				$data[$i++] = $row;
			}
			return $data;
		}
		public function login($email,$password){
			$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
			$data = $this->cover(mysqli_query($this->conn,$sql));
			return $data;
		}
		public function getAllProduct(){
			$sql = "SELECT * FROM products";
			$data = $this->cover(mysqli_query($this->conn,$sql));
			return $data;
		}
		public function getAllCategory(){
			$sql = "SELECT * FROM category";
			$data = $this->cover(mysqli_query($this->conn,$sql));
			return $data;
		}
		public function getAllProductCategory($id){
			$sql = "SELECT * FROM products WHERE id_category=".$id;
			$data = $this->cover(mysqli_query($this->conn,$sql));
			return $data;
		}
		public function getProductByID($id){
			$sql = "SELECT * FROM products WHERE id=".$id." LIMIT 1";
			$data = $this->cover(mysqli_query($this->conn,$sql));
			return $data;
		}
	}
?>