<?php

$hostname = 'localhost';
$database = 'to_do';
$username = 'postgres';
$password = '1234';


try {
    $pdo = new PDO("pgsql:host=$hostname;dbname=$database", $username, $password);
} catch (PDOException $e) {
    echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
}