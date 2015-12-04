<?php

$tipo = $_GET["tipo"];
$json = [];
$file = fopen($tipo.".txt", "r");

while(!feof($file)) {
	$linea = fgets($file);
	$linea = preg_replace("/\r\n+|\r+|\n+|\t+/i", " ", $linea);
	array_push($json, $linea);
}
array_pop($json);
fclose($file);
echo json_encode($json);
