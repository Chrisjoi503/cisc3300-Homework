<?php
namespace inclass8\controllers;
use inclass8\models\User;

class UserController{

    // <!-- method -->
    public function index() {
     
        $user = new User(4, 'Christina');
        $users = User::getAllUsers();
        var_dump($users);
    }


}
