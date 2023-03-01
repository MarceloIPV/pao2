<?php
	
	extract($_POST);

	
	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../config/config2.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$anio = date('Y');

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');	
	
	/*=====  End of Parametros Iniciales  ======*/
	
	session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];

	$objeto= new usuarioAcciones();

	switch ($tipo) {



		case "completa_informacion_salarios_data":
			$sql="SELECT * FROM poa_honorarios2022 WHERE idHonorarios='$idSueldos';";

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral($sql);

			$jason['indicadorInformacion']=$indicadorInformacion;
		

		break;	

		case "completa_informacion_honorarios_data":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT * FROM poa_honorarios2022 WHERE idHonorarios='$idSueldos' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;	

	

	}

	echo json_encode($jason);





