<?php
namespace inclass8\models;

class User {
    public $id;
    public $name;

    // Constructor
    public function __construct($id, $name) {
        $this->id = $id;
        $this->name = $name;
    }

    // Method to get all users
    public static function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Lilly'],
            ['id' => 2, 'name' => 'Barney'],
            ['id' => 3, 'name' => 'Marshall'],
        ];
    }
}