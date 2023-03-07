<?php
	
	extract($_POST);

	require_once "../../config/config2.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');

	
    session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
    
	/*=====  End of Parametros Iniciales  ======*/
	

	$objeto= new usuarioAcciones();

	switch ($tipo) {

		case  "paidorganismos":

			$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];

			$nombreDocumentos=$fecha_actual."__".$organismos__id.".pdf";

			$direccionDocumentos="../../documentos/presupuestoPaidOrganismos/";

			$documento=$objeto->getEnviarPdf($_FILES["documento"]['type'],$_FILES["documento"]['size'],$_FILES["documento"]['tmp_name'],$_FILES["documento"]['name'],$direccionDocumentos,$nombreDocumentos);

			$inserta=$objeto->getInsertaNormal('poa_paid_proyecto_organismo', array("`idProyectoOrganismo`, ","`idOrganismo`, ","`monto`, ","`archivo`, ","`fecha`, ","`hora`, ","`idProyecto`, ","`perioIngreso`"),array("'$organismos__id', ","'$montoOrganismo', ","'$nombreDocumentos', ","'$fecha_actual', ","'$hora_actual', ","'$idProyecto', ","'$aniosPeriodos__ingesos'"));

			$mensaje=1;
			$jason['mensaje']=$mensaje;

		break;


		


    }