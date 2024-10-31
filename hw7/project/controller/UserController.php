<?php
namespace project\controller;

use project\model\User;


 class UserController{

    // method to serve back an html page from the html file in views
    public function html(){

        $this->returnView('./views/ex.html');
    }

    // method to serve back JSON data from UserModel get user method 


    public function getUsers() {
        $userModel = new User();
        $users = $userModel->getAllUsers();
        header("Content-Type: application/json");
        echo json_encode($users);
        exit();
    }


}
?>

