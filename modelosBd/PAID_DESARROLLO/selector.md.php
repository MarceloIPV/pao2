<?php
	
	extract($_POST);
	require_once "../../config/config2.php";
	$objeto= new usuarioAcciones();
	
	session_start();
	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
    $idOrganismoSession=$_SESSION["idOrganismoSession"];

    switch ($tipo) {

		case "paid_general":
            $query="SELECT nombrePrograma,idPrograma FROM poa_paid_programa;";
            //$jason['mensaje']=false;
		break;
        
    }

    echo json_encode($jason);




