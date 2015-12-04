<?php


if (isset($_POST["personajes"])) {
	$file = fopen("personajes.txt", "w");
	$characters = $_POST["personajes"];
	
	foreach ($characters as $character) {
		fwrite($file, $character . PHP_EOL);
	}

	fclose($file);
}

if (isset($_POST["karts"])) {
	$file = fopen("karts.txt", "w");
	$karts = $_POST["karts"];
	
	foreach ($karts as $kart) {
		fwrite($file, $kart . PHP_EOL);
	}

	fclose($file);
}
 
echo json_encode(array("characters"=>$characters,"karts"=>$karts));