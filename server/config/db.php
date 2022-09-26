<?php

class db
{
    private $host = 'localhost';
    private $dbname = 'dieta_descomplicada';
    private $user = 'root';
    private $pass = '';

    public function connect(){
        $con_str = "mysql:host=$this->host;dbname=$this->dbname";
        $con = new PDO($con_str, $this->user, $this->pass);

        return $con;
    }
}