<?php

namespace project\model;

Class User{
    public function getAllUsers() {
       

        $allUsers = [
            [
                'areacode' => '503',
                'name' => 'Christina'
            ],
            [
                'areacode' => '646',
                'name' => 'Matthew'
            ],
            [
                'areacode'=>'971',
                'name'=>'Tracy'
            ]
        ];

        return ($allUsers);
    }

}

?>