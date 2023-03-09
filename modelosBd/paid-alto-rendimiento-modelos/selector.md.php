<?php
	
	extract($_POST);
	require_once "../../config/config2.php";
	$objeto= new usuarioAcciones();
	
	session_start();
	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
    $idOrganismoSession=$_SESSION["idOrganismoSession"];

    switch ($tipo) {

		case "paid_general":
            $informacion=$objeto->getObtenerInformacionGeneral("SELECT b.nombreComponentes,d.nombreIndicadores,a.idComponentes,c.nombreRubros,a.idPaidInversion FROM poa_paid_asignacion AS a INNER JOIN poa_paid_componentes AS b ON a.idComponentes=b.idComponentes INNER JOIN poa_paid_rubros AS c ON c.idRubros=a.idRubros INNER JOIN poa_paid_indicadores AS d ON d.idIndicadores=b.idIndicador WHERE a.idOrganismo='$idOrganismoSession' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idComponentes;");
            $jason['informacion']=$informacion;
		break;
        
    }

    echo json_encode($jason);

