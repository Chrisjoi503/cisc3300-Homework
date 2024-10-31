<?php

require "../controller/UserController.php";
require "../model/UserModel.php";

use project\controller\UserController;


$controller = new UserController();

$url = strtok($_SERVER["REQUEST_URI"], '?');
$uriArray = explode("/", $url);


if ($_SERVER['REQUEST_METHOD'] === 'GET' && $uriArray[1] === 'users') {
    $controller->getUsers();
} else {
    $controller->html();
}


?>