<?php

class Chip{
// Properties
public string $name;
public string $flavor;
// constructor 
public function __construct($name, $flavor){
    $this->name = $name;
    $this->flavor = $flavor;
}

// getter and setter for name 
public function setname($name)
{
    $this->name = $name;
}

public function getname()
{
    return $this->protectedString;
}
// getter and setter for flavor 
public function flavor($flavor)
{
    $this->flavor = $flavor;
}

//getter
public function getProtectedString()
{
    return $this->flavor;
}

// static method 
public static function yummy(){
    echo "yummy";
}
}
