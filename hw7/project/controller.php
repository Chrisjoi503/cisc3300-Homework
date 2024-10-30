<?php
 class UserController{

// method to serve back an html page
public function html(){

    $htmlFile='ex.html';
    return file_get_contents($htmlFile);
}

// method to serve back JSON data
public function data(){
    return " "
}


 }

?>

