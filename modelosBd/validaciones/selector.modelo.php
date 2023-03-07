<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	extract($_POST);

	class lugar{

		public static function lugarFuncion($indicador){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


			/*============================================
			=            Parametros Iniciales            =
			============================================*/
			
			date_default_timezone_set("America/Guayaquil");

			$fecha_actual = date('Y-m-d');

			$hora_actual= date('H:i:s');	

			$hora_actual2= date('s');
			

			$hora__dos=date('H:i');

			$anioa=date('Y');

			/*=====  End of Parametros Iniciales  ======*/

 			// $conexionEstablecida->exec("set names utf8");

			session_start();

			$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];

 			extract($_POST);

 			if ($indicador==1) {

	 			$query="SELECT DISTINCT idProvincia,nombreProvincia FROM in_md_provincias ORDER BY nombreProvincia;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una provincia--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idProvincia"]."'>".utf8_decode(utf8_encode($registro["nombreProvincia"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==2){


 				$query="SELECT DISTINCT idCanton,nombreCanton FROM in_md_canton WHERE idProvincia='$provincia' ORDER BY nombreCanton;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un cantón-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idCanton"]."'>".utf8_decode(utf8_encode($registro["nombreCanton"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==3){

 				$query="SELECT DISTINCT idParroquia,nombreParroquia FROM in_md_parroquia WHERE idCanton='$canton' ORDER BY nombreParroquia;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una parroquia-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idParroquia"]."'>".utf8_decode(utf8_encode($registro["nombreParroquia"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==4){

 				$query="SELECT id,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(paisnombre , 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Í'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),'','') AS paisnombre  FROM poa_pais ORDER BY paisnombre;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un país-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["id"]."'>".utf8_decode(utf8_encode($registro["paisnombre"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==5){

 				$query="SELECT DISTINCT idCanton,nombreCanton FROM in_md_canton ORDER BY nombreCanton;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un cantón-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idCanton"]."'>".utf8_decode(utf8_encode($registro["nombreCanton"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==6){


 				$query="SELECT DISTINCT idParroquia,nombreParroquia FROM in_md_parroquia ORDER BY nombreParroquia;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una parroquia-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idParroquia"]."'>".utf8_decode(utf8_encode($registro["nombreParroquia"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==7){

 				$query="SELECT idLineas,nombreLinea FROM poa_linea_base WHERE estado='A' AND nombreLinea!='';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una línea política-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idLineas"]."'>".utf8_decode(utf8_encode($registro["nombreLinea"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==8){

 				$query="SELECT idAreaAccion,accion FROM poa_area_accion WHERE estado='A' AND accion!='';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una àrea de acciòn--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idAreaAccion"]."'>".utf8_decode(utf8_encode($registro["accion"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==9){

 				$query="SELECT nombreObjetivo,idObjetivos FROM poa_objetivos WHERE estado='A';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un objetivo--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idObjetivos"]."'>".utf8_decode(utf8_encode($registro["nombreObjetivo"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==10){

 				$query="SELECT idAreaEncargada,nombreArea FROM poa_areaencargada WHERE estado='A' ";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un área--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idAreaEncargada"]."'>".utf8_decode(utf8_encode($registro["nombreArea"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==11){

 				$query="SELECT a.idTipoOrganismo,a.nombreTipo,b.idAreaAccion,b.accion,c.idObjetivos,c.nombreObjetivo,e.idLineas,e.nombreLinea,f.idAreaEncargada,f.nombreArea FROM poa_tipo_organismo AS a INNER JOIN poa_area_accion AS b ON b.idAreaAccion=a.idAreaAccion INNER JOIN poa_objetivos AS c ON c.idObjetivos=a.idObjetivos INNER JOIN poa_objetivos_usuario AS d ON d.idObjetivos=c.idObjetivos LEFT JOIN poa_linea_base AS e ON e.idLineas=d.idLineaBase LEFT JOIN poa_areaencargada AS f ON f.idAreaEncargada=a.idAreaEncargada;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un tipo de organismo--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idTipoOrganismo"]."' idAreaAccion='".$registro["idAreaAccion"]."' accion='".$registro["accion"]."' idObjetivos='".$registro["idObjetivos"]."' nombreObjetivo='".$registro["nombreObjetivo"]."' idLineas='".$registro["idLineas"]."' nombreLinea='".$registro["nombreLinea"]."' idAreaEncargada='".$registro["idAreaEncargada"]."' nombreArea='".$registro["nombreArea"]."'>".utf8_decode(utf8_encode($registro["nombreTipo"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==12){

 				$sumador=2021;

			 	$listas="<option value=''>--Elige un periodo--</option>";

			 	for ($i=0; $i < 100; $i++) { 

			 		$sumador=$sumador+1;

			 		$listas.="<option value='".$sumador."'>".$sumador."</option>";

			 	}

			 	return $listas;


 			}else if($indicador==13){


 				$query="SELECT idClasificacionGastos,nombreClasificacionGastos FROM poa_clasificaciongastos";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un grupo de gasto--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idClasificacionGastos"]."'>".utf8_decode(utf8_encode($registro["nombreClasificacionGastos"]))."</option>";

			 	}

			 	return $listas;



 			}else if($indicador==14){

 				$array = [];

 				$query="SELECT c.idItem,c.nombreItem FROM poa_item_actividad AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_item AS c ON c.idItem=a.idItem WHERE a.idActividad='$elementos' GROUP BY c.idItem;";

			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {
			 	
			 		array_push($array, $registro["idItem"]);

			 	}

			 	$validaItem = implode(",",$array);  

			 	$listas="<option value=''>--Elige un item--</option>";

			 	if (count($array)>0) {
			 		$query2="SELECT idItem,nombreItem,itemPreesupuestario FROM poa_item WHERE idItem NOT IN ($validaItem) ORDER BY itemPreesupuestario ASC;";
			 	}else{
			 		$query2="SELECT idItem,nombreItem,itemPreesupuestario FROM poa_item  ORDER BY itemPreesupuestario ASC;";
			 	}


	 			

				$resultado2 = $conexionEstablecida->query($query2);

				while($registro2 = $resultado2->fetch()) {
				 	
					$listas.="<option value='".$registro2["idItem"]."'>".utf8_decode(utf8_encode("(".$registro2["itemPreesupuestario"].")".$registro2["nombreItem"]))."</option>";

				} 	

			 	return $listas;


 			}else if($indicador==15){

 				$query="SELECT idPrograma,nombrePrograma FROM poa_programa;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un programa--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idPrograma"]."'>".utf8_decode(utf8_encode($registro["nombrePrograma"]))."</option>";

			 	}

			 	return $listas;


 			}else if($indicador==16){

 				$query="SELECT idTipo,nombreTipo FROM poa_tipo WHERE estado='A' AND nombreTipo!='';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un programa--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idTipo"]."'>".utf8_decode(utf8_encode($registro["nombreTipo"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==17){

 				$query="SELECT b.idPrograma,b.nombrePrograma FROM poa_objetivos_usuario AS a INNER JOIN poa_programa AS b ON a.idPrograma=b.idPrograma WHERE a.idObjetivos='$parametro2';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un programa--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idPrograma"]."'>".utf8_decode(utf8_encode($registro["nombrePrograma"]))."</option>";

			 	}

			 	return $listas; 				

 			}else if($indicador==18){

 				$query="SELECT b.idPrograma,b.nombrePrograma FROM poa_objetivos_usuario AS a INNER JOIN poa_programa AS b ON a.idPrograma=b.idPrograma;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un programa--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idPrograma"]."'>".utf8_decode(utf8_encode($registro["nombrePrograma"]))."</option>";

			 	}

			 	return $listas; 				

 			}else if($indicador==19){

 				$arraySeleccionado = [];

 				$arrayItemsActividades=[];


 				$querySeleccionado="SELECT idItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND idActividad='$elementos';";

			 	$resultadoSeleccionado = $conexionEstablecida->query($querySeleccionado);

			 	while($registroSeleccionado = $resultadoSeleccionado->fetch()) {
			 	
			 		array_push($arraySeleccionado, $registroSeleccionado["idItem"]);

			 	}


 				$querySeleccionadoSegus="SELECT idItem AS itemActEn FROM poa_item_actividad WHERE idActividad='$elementos';";

			 	$resultadoSeleccionadoSegus = $conexionEstablecida->query($querySeleccionadoSegus);

			 	while($registroSeleccionadoSegus = $resultadoSeleccionadoSegus->fetch()) {
			 	
			 		array_push($arrayItemsActividades, $registroSeleccionadoSegus["itemActEn"]);

			 	}

			 	if (count($arraySeleccionado)>0) {
			 		$validaItem = implode(",",$arraySeleccionado);  
			 	}


			 
			 	$validaItem2 = implode(",",$arrayItemsActividades);  



			 	$listas="<option value=''>--Elige un item usuario--</option>";

			 	if (count($arraySeleccionado)<=0 || count($arraySeleccionado)=="0") {
			 		$query2="SELECT idItem,nombreItem,itemPreesupuestario FROM poa_item WHERE idItem  IN($validaItem2) ORDER BY nombreItem;";
			 	}else{
			 		$query2="SELECT idItem,nombreItem,itemPreesupuestario FROM poa_item WHERE idItem NOT IN ($validaItem) AND idItem  IN($validaItem2) ORDER BY nombreItem;";
			 	}

				 $resultado2 = $conexionEstablecida->query($query2);

				 while($registro2 = $resultado2->fetch()) {
				 	
					$listas.="<option value='".$registro2["idItem"]."'>".utf8_decode(utf8_encode("(".$registro2["itemPreesupuestario"].") ".$registro2["nombreItem"]))."</option>";

				 } 	

				 return $listas;


 			}else if($indicador==20){


 				$query="SELECT idIndicadores,nombreIndicador FROM poa_indicadores;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un indicador--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idIndicadores"]."'>".utf8_decode(utf8_encode($registro["nombreIndicador"]))."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==21){

 				$query="SELECT idDeporte,nombreDeporte FROM poa_deporte;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idDeporte"]."'>".utf8_decode(utf8_encode($registro["nombreDeporte"]))."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==22){

 				$query="SELECT id,paisnombre FROM poa_pais;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["id"]."'>".utf8_decode(utf8_encode($registro["paisnombre"]))."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==23){

 				$query="SELECT idAlcanse,nombreAlcanse FROM poa_alcanse;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idAlcanse"]."'>".utf8_decode(utf8_encode($registro["nombreAlcanse"]))."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==24){

 				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (b.id_rol='4' AND a.zonal>1) OR (a.fisicamenteEstructura='24' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND b.id_rol!='3' AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==25){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT PersonaACargo FROM th_usuario WHERE id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";


			 	while($registro3 = $resultado3->fetch()) {


			 		$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
			 	

			 	}


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==26){

 				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='26' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	return $listas; 

 			}else if($indicador==27){

 				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura,e.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_fisicamenteestructura AS e ON e.id_FisicamenteEstructura=a.fisicamenteEstructura  WHERE a.estadoUsuario='A' AND (b.id_rol='4' AND a.zonal>1 AND a.estadoUsuario='A') OR (a.PersonaACargo='$idUsuario' AND a.estadoUsuario='A' AND b.id_rol='2') AND a.estadoUsuario='A'  ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).") DIECCIÓN: ".$registro["descripcionFisicamenteEstructura"]."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==28){

 				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura,e.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_fisicamenteestructura AS e ON e.id_FisicamenteEstructura=a.fisicamenteEstructura  WHERE a.estadoUsuario='A' AND (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' AND (a.fisicamenteEstructura='5') OR (b.id_rol='4' AND a.zonal>1) ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).") DIECCIÓN: ".$registro["descripcionFisicamenteEstructura"]."</option>";

			 	}

			 	return $listas; 

 			}else if($indicador==29){

 				$conexionEstablecida->exec("set names utf8");

 				if ($identificador=="subses") {
 					
 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='26' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}else{

 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='1' AND b.id_rol='4') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}

 				

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==30){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT PersonaACargo FROM th_usuario WHERE id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";


			 	while($registro3 = $resultado3->fetch()) {


			 		$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
			 	

			 	}


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas;  				
 				
 			}else if($indicador==31){


 				$conexionEstablecida->exec("set names utf8");

 				if ($identificador=="subses") {
 					
 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='26' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}else{

 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='2' AND b.id_rol='4') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}

 				

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";

			 	

			 	}

			 	return $listas; 

 			}else if($indicador==32){


 				$conexionEstablecida->exec("set names utf8");

 				if ($identificador=="subses") {
 					
 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='26' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}else{

 					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.fisicamenteEstructura='26' AND b.id_rol='7') OR (a.PersonaACargo='$idUsuario') AND a.estadoUsuario='A' ORDER BY b.id_rol DESC;";

 				}

 				

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==33){

				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.zonal=1 AND a.PersonaACargo='$idUsuario')  AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


 				$queryCoordinador="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4' AND a.fisicamenteEstructura='3';";

			 	$resultadoCoordinador = $conexionEstablecida->query($queryCoordinador);


 				$queryCoordinador__zonales="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4' AND a.zonal>1 ORDER BY a.zonal;";

			 	$resultadoCoordinador__zonales = $conexionEstablecida->query($queryCoordinador__zonales);			 	

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registroCoordinador = $resultadoCoordinador->fetch()) {

			 		$listas.="<option value='".$registroCoordinador["id_usuario"]."'>".utf8_decode(utf8_encode($registroCoordinador["nombreCompleto"])." (".utf8_encode($registroCoordinador["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	while($registro__zonales = $resultadoCoordinador__zonales->fetch()) {

			 		$listas.="<option value='".$registro__zonales["id_usuario"]."'>".utf8_decode(utf8_encode($registro__zonales["nombreCompleto"])." (".utf8_encode($registro__zonales["descripcionZonal"])).")"."</option>";
			 	

			 	}
			 	

			 	return $listas; 

 			}else if($indicador==34){

				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.zonal=1 AND a.PersonaACargo='$idUsuario') AND b.id_rol!='3' AND a.fisicamenteEstructura='5' AND a.estadoUsuario='A' OR (a.zonal>1 AND b.id_rol='4' AND a.estadoUsuario='A') ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


 				$queryCoordinador="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4'  AND a.fisicamenteEstructura='3';";

			 	$resultadoCoordinador = $conexionEstablecida->query($queryCoordinador);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registroCoordinador = $resultadoCoordinador->fetch()) {

			 		$listas.="<option value='".$registroCoordinador["id_usuario"]."'>".utf8_decode(utf8_encode($registroCoordinador["nombreCompleto"])." (".utf8_encode($registroCoordinador["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==35){

				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.zonal=1 AND a.PersonaACargo='$idUsuario') AND b.id_rol!='3' AND a.fisicamenteEstructura='15' AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


 				$queryCoordinador="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4'  AND a.fisicamenteEstructura='3';";

			 	$resultadoCoordinador = $conexionEstablecida->query($queryCoordinador);




 				$queryCoordinador__zonales="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4' AND a.zonal>1 ORDER BY a.zonal;";

			 	$resultadoCoordinador__zonales = $conexionEstablecida->query($queryCoordinador__zonales);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registroCoordinador = $resultadoCoordinador->fetch()) {

			 		$listas.="<option value='".$registroCoordinador["id_usuario"]."'>".utf8_decode(utf8_encode($registroCoordinador["nombreCompleto"])." (".utf8_encode($registroCoordinador["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	while($registro__zonales = $resultadoCoordinador__zonales->fetch()) {

			 		$listas.="<option value='".$registro__zonales["id_usuario"]."'>".utf8_decode(utf8_encode($registro__zonales["nombreCompleto"])." (".utf8_encode($registro__zonales["descripcionZonal"])).")"."</option>";
			 	

			 	}



			 	return $listas; 

 			}else if($indicador==36){

				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.zonal=1 AND a.PersonaACargo='$idUsuario') AND b.id_rol!='3' AND a.fisicamenteEstructura='7' AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


 				$queryCoordinador="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4'  AND a.fisicamenteEstructura='3';";

			 	$resultadoCoordinador = $conexionEstablecida->query($queryCoordinador);




 				$queryCoordinador__zonales="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4' AND a.zonal>1 ORDER BY a.zonal;";

			 	$resultadoCoordinador__zonales = $conexionEstablecida->query($queryCoordinador__zonales);


			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registroCoordinador = $resultadoCoordinador->fetch()) {

			 		$listas.="<option value='".$registroCoordinador["id_usuario"]."'>".utf8_decode(utf8_encode($registroCoordinador["nombreCompleto"])." (".utf8_encode($registroCoordinador["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	while($registro__zonales = $resultadoCoordinador__zonales->fetch()) {

			 		$listas.="<option value='".$registro__zonales["id_usuario"]."'>".utf8_decode(utf8_encode($registro__zonales["nombreCompleto"])." (".utf8_encode($registro__zonales["descripcionZonal"])).")"."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==37){

				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.estadoUsuario='A' AND (a.zonal=1 AND a.PersonaACargo='$idUsuario') AND b.id_rol!='3' AND a.fisicamenteEstructura='5' AND a.estadoUsuario='A' ORDER BY b.id_rol,a.zonal;";

			 	$resultado = $conexionEstablecida->query($query);


 				$queryCoordinador="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4'  AND a.fisicamenteEstructura='3';";

			 	$resultadoCoordinador = $conexionEstablecida->query($queryCoordinador);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	while($registroCoordinador = $resultadoCoordinador->fetch()) {

			 		$listas.="<option value='".$registroCoordinador["id_usuario"]."'>".utf8_decode(utf8_encode($registroCoordinador["nombreCompleto"])." (".utf8_encode($registroCoordinador["descripcionZonal"])).")"."</option>";
			 	
			 	}

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==38){

 				$conexionEstablecida->exec("set names utf8");


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario' AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";


			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==39){


 				$conexionEstablecida->exec("set names utf8");


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario' AND a.estadoUsuario='A' AND a.fisicamenteEstructura='23' ORDER BY c.id_Zonal;";


			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==40){


 				$conexionEstablecida->exec("set names utf8");


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario' AND a.estadoUsuario='A' AND a.fisicamenteEstructura='23' ORDER BY c.id_Zonal;";


			 	$resultado = $conexionEstablecida->query($query);



 				$queryCoordinador__zonales="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE a.estadoUsuario='A' AND b.id_rol='4' AND a.zonal>1 ORDER BY a.zonal;";

			 	$resultadoCoordinador__zonales = $conexionEstablecida->query($queryCoordinador__zonales);


			 	$listas="<option value='' class='text-center'>--Seleccione--</option>";

			 	$listas.=" <optgroup label = 'FUNCIONARIOS QUE PERTENECEN A LA DIRECCIÓN ADMINISTRATIVA' class='text-center'>";


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	$listas.="</optgroup>";

			 	$listas.=" <optgroup label = 'COORDINACIONES ZONALES' class='text-center'>";

			 	while($registro__zonales = $resultadoCoordinador__zonales->fetch()) {

			 		$listas.="<option value='".$registro__zonales["id_usuario"]."'>".utf8_decode(utf8_encode($registro__zonales["nombreCompleto"])." (".utf8_encode($registro__zonales["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	$listas.="</optgroup>";			 	

			 	return $listas; 

 			}else if($indicador==41){

 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario' AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";
			 	$resultado = $conexionEstablecida->query($query);



 				$query__DOS="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE b.id_rol='2' AND a.fisicamenteEstructura='23' ORDER BY a.id_usuario DESC LIMIT 1";
			 	$resultado__DOS = $conexionEstablecida->query($query__DOS);



			 	$listas="<option value='' class='text-center'>--Seleccione--</option>";

			 	$listas.=" <optgroup label = 'DIRECTOR FINANCIERO (Seleccionar en caso de querer devolver el trámite)' class='text-center'>";

			 	while($registro__DOS = $resultado__DOS->fetch()) {


			 		$listas.="<option value='".$registro__DOS["id_usuario"]."'>".utf8_decode(utf8_encode($registro__DOS["nombreCompleto"])." (".utf8_encode($registro__DOS["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	$listas.=" <optgroup label = 'FUNCIONARIOS QUE PERTENECEN A LA COORDINACIÓN' class='text-center'>";

			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"]).")"."</option>";
			 	

			 	}

			 	return $listas; 


 			}else if($indicador==42){


 				$query="SELECT PersonaACargo FROM th_usuario WHERE id_usuario='$idUsuario';";
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		$idJefe=$registro["PersonaACargo"];
			 	
			 	}			 	


 				$query__DOS="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.id_usuario='$idJefe'";
			 	$resultado__DOS = $conexionEstablecida->query($query__DOS);


			 	$listas="<option value='' class='text-center'>--Seleccione--</option>";

			 	$listas.=" <optgroup label = 'SUPERIOR INMEDIATO (Seleccionar en caso de querer devolver el trámite)' class='text-center'>";

			 	while($registro__DOS = $resultado__DOS->fetch()) {


			 		$listas.="<option value='".$registro__DOS["id_usuario"]."'>".utf8_decode(utf8_encode($registro__DOS["nombreCompleto"])." (".utf8_encode($registro__DOS["descripcionZonal"])).")"."</option>";
			 	

			 	}

			 	return $listas; 


 			}else if($indicador==43){


 				$query="SELECT b.idActividades,b.nombreActividades,a.idProgramacionFinanciera FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY  a.idActividad;";
			 	$resultado = $conexionEstablecida->query($query);


			 	$listas="<option value='' class='text-center'>--Seleccione una actividad--</option>";


			 	while($registro = $resultado->fetch()) {


			 		$listas.="<option value='".$registro["idActividades"]."'>".$registro["nombreActividades"].""."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==44){


 				$query="SELECT c.idItem,c.nombreItem,a.idProgramacionFinanciera FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_item AS c ON c.idItem=a.idItem WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND idActividad='$idActividades';";
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {


			 		$listas.="<div class='d d-flex'><div class='col col-10'>".$registro["nombreItem"]."</div><div class='col col-2'><input type='checkbox' class='check_modificaciones text-center' attr='".$registro["idProgramacionFinanciera"]."' nombreItems='".$registro["nombreItem"]."'></div></div>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==45){


 				$query="SELECT id_FisicamenteEstructura,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(descripcionFisicamenteEstructura, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS descripcionFisicamenteEstructura  FROM th_fisicamenteestructura WHERE estado='A' ORDER BY descripcionFisicamenteEstructura ASC;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='' class='text-center'>--Seleccione un área responsable--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_FisicamenteEstructura"]."'>".utf8_decode($registro["descripcionFisicamenteEstructura"])."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==46){

 				if ($idFisicamente==1 || $idFisicamente==2 || $idFisicamente==3 || $idFisicamente==27 || $idFisicamente==28 || $idFisicamente==29 || $idFisicamente==30 || $idFisicamente==31 || $idFisicamente==32 || $idFisicamente==33) {
 					
 					$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='$idFisicamente' AND a.estadoUsuario='A' LIMIT 1;";

 				}else if($idFisicamente==5){

 					$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='5' AND a.fisicamenteEstructura='$idFisicamente' AND a.estadoUsuario='A' LIMIT 1;";

 				}else if ($idFisicamente==24 || $idFisicamente==25 || $idFisicamente==26) {
 					
 					$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='7' AND a.fisicamenteEstructura='$idFisicamente' AND a.estadoUsuario='A' LIMIT 1;";

 				}else{

 					$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='$idFisicamente' AND a.estadoUsuario='A' LIMIT 1;";

 				}

			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode($registro["nombreCompleto"])."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==47){

 				if (empty($valoresAplicados)) {
 					$query="SELECT idProyectoPaid,proyecto__inversion FROM poa_paid_proyecto;";
 				}else{
 					$query="SELECT idProyectoPaid,proyecto__inversion FROM poa_paid_proyecto WHERE idProyectoPaid NOT IN($valoresAplicados);";
 				}

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione un proyecto de inversión--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idProyectoPaid"]."'>".utf8_decode($registro["proyecto__inversion"])."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==48){

 				$query="SELECT idOrganismo,nombreOrganismo FROM poa_organismo;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='' class='text-center'>--Seleccione nombre del organismo deportivo--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idOrganismo"]."'>".utf8_decode($registro["nombreOrganismo"])."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==49){
 				
 				$query="SELECT idProyectoPaid,proyecto__inversion FROM poa_paid_proyecto;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione un proyecto de inversión--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idProyectoPaid"]."'>".utf8_decode($registro["proyecto__inversion"])."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==50){

 				$query="SELECT a.idOrganismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreOrganismo FROM poa_organismo AS a WHERE NOT EXISTS (SELECT t1.idEsigef FROM poa_esigef AS t1 WHERE t1.idOrganismo=a.idOrganismo) ORDER BY a.nombreOrganismo ASC;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='' class='text-center'>--Seleccione nombre del organismo deportivo--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idOrganismo"]."'>".$registro["nombreOrganismo"]."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==51){

 				$query="SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idActividades"]."'>".$registro["nombreActividades"]."</option>";
			 	

			 	}


			 	return $listas; 

 			}else if($indicador==52){

				$query="SELECT a.idProgramacionFinanciera,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_item AS d ON d.idItem=a.idItem WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='$idActividad';";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Seleccione ítem--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idProgramacionFinanciera"]."'>".$registro["nombreItem"]."</option>";
					 	
				}

			 	return $listas; 

 			}else if($indicador==53){

 				if ($clave==true) {


 					$query2 = $conexionEstablecida->prepare("SELECT a.idItem FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idProgramacionFinanciera='$idProgrmacionFinanciera';");
					$query2->execute();
					$resultado2 = $query2->fetchAll(\PDO::FETCH_ASSOC); 		
					$idItem__traidos=$resultado2[0][idItem];			
 					

 					$query = $conexionEstablecida->prepare("SELECT idActividadModificacion FROM poa_modificacion_actividad_administra_origen WHERE idActividadOrigen='$actividadOrigen' AND idActividadDestino='$actividad__modificaciones__destino' AND idItem='$idItem__traidos' ORDER BY idActividadModificacion DESC LIMIT 1;");
					$query->execute();
					$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

					if (!empty($resultado[0][idActividadModificacion])) {
				
						$listas=false;

					}else{

						$listas="<option value='0' class='text-center'>--Seleccione mes--</option>";

					 	$listas.="<option value='enero'>Enero</option>";
					 	$listas.="<option value='febrero'>Febrero</option>";
					 	$listas.="<option value='marzo'>Marzo</option>";
					 	$listas.="<option value='abril'>Abril</option>";
					 	$listas.="<option value='mayo'>Mayo</option>";
					 	$listas.="<option value='junio'>Junio</option>";
					 	$listas.="<option value='julio'>Julio</option>";
					 	$listas.="<option value='agosto'>Agosto</option>";
					 	$listas.="<option value='septiembre'>Septiembre</option>";
					 	$listas.="<option value='octubre'>Octubre</option>";
					 	$listas.="<option value='noviembre'>Noviembre</option>";
					 	$listas.="<option value='diciembre'>Diciembre</option>";

					}


 				}else{

				 	$listas="<option value='0' class='text-center'>--Seleccione mes--</option>";

				 	$listas.="<option value='enero'>Enero</option>";
				 	$listas.="<option value='febrero'>Febrero</option>";
				 	$listas.="<option value='marzo'>Marzo</option>";
				 	$listas.="<option value='abril'>Abril</option>";
				 	$listas.="<option value='mayo'>Mayo</option>";
				 	$listas.="<option value='junio'>Junio</option>";
				 	$listas.="<option value='julio'>Julio</option>";
				 	$listas.="<option value='agosto'>Agosto</option>";
				 	$listas.="<option value='septiembre'>Septiembre</option>";
				 	$listas.="<option value='octubre'>Octubre</option>";
				 	$listas.="<option value='noviembre'>Noviembre</option>";
				 	$listas.="<option value='diciembre'>Diciembre</option>";


 				}

			 	return $listas; 

 			}else if($indicador==54){


		 		$query = $conexionEstablecida->prepare("SELECT a.idProgramacionFinanciera,d.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_item AS d ON d.idItem=a.idItem WHERE a.idProgramacionFinanciera='$idProgrmacionFinanciera';");
				$query->execute();

				$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

			 	$listas=$resultado[0][itemPreesupuestario];

			 	return $listas; 

 			}else if($indicador==55){

				/*============================================
				=            Parametros Iniciales            =
				============================================*/
				
				date_default_timezone_set("America/Guayaquil");

				$fecha_actual = date('Y');
				
				/*=====  End of Parametros Iniciales  ======*/

 				$query = $conexionEstablecida->prepare("SELECT a.$mes FROM poa_programacion_financiera AS a WHERE a.idProgramacionFinanciera='$programacionFinanciera';");
				$query->execute();
				$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);
			 	$listas=$resultado[0][$mes];


 				$queryDisminucion= $conexionEstablecida->prepare("SELECT disminucionOrigen FROM poa_modificacion_organismo_actividades WHERE idFinancieroOrigen='$programacionFinanciera' AND YEAR(fecha)='$fecha_actual' AND mesOrigen='$mes' ORDER BY idModificacionOr DESC LIMIT 1;");
 				$queryDisminucion->execute();
				$resultadoDisminucion = $queryDisminucion->fetchAll(\PDO::FETCH_ASSOC);

				if (!empty($resultadoDisminucion[0][disminucionOrigen])) {
					
					$listas=floatval($listas) - floatval($resultadoDisminucion[0][disminucionOrigen]);

				}

 				$queryAumento= $conexionEstablecida->prepare("SELECT aumentoDestino FROM poa_modificacion_organismo_actividades WHERE idFinancieroDestino='$programacionFinanciera' AND YEAR(fecha)='$fecha_actual' AND mesDestino='$mes' ORDER BY idModificacionOr DESC LIMIT 1;");
 				$queryAumento->execute();
				$resultadoAumento = $queryAumento->fetchAll(\PDO::FETCH_ASSOC);


				if (!empty($resultadoAumento[0][aumentoDestino])) {
					
					$listas=floatval($listas) + floatval($resultadoAumento[0][aumentoDestino]);

				}


				if(floatval($listas)<0){

					$listas=0;

				}

			 	return $listas; 

 			}else if($indicador==56){

 				$query="SELECT idSueldos, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idSueldos"]."'>".$registro["nombres"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==57){

 				$query="SELECT c.nombre AS rol,a.id_usuario,a.zonal,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_roles AS c ON c.id_rol=b.id_rol WHERE a.PersonaACargo='$idUsuarioC'  OR (a.fisicamenteEstructura=27 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=28 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=29 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=30 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=31 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=32 AND b.id_rol=4 AND a.estadoUsuario='A') OR (a.fisicamenteEstructura=33 AND b.id_rol=4 AND a.estadoUsuario='A') AND a.estadoUsuario='A' AND b.estado='A' ORDER BY b.id_rol;";
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		if ($registro["zonal"]==1) {
			 			$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]." Cargo: ".$registro["rol"]."</option>";
			 		}else{
			 			$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]." Zonal: ".$registro["zonal"]." Cargo: ".$registro["rol"]."</option>";
			 		}

			 		
			 	
			 	}


 				// $query="SELECT id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario WHERE PersonaACargo='$idUsuarioC';";
			 	// $resultado = $conexionEstablecida->query($query);

			 	// $listas="<option value='0' class='text-center'>--Seleccione--</option>";

			 	// while($registro = $resultado->fetch()) {

			 	// 	$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]."</option>";
			 	

			 	// }

			 	return $listas; 

 			}else if($indicador==58){

 				session_start();
 				$idUsuario__ingresos=$_SESSION["idUsuario"];

 				$query2="SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario__ingresos' AND a.zonal>1 AND b.id_rol='4';";
			 	$resultado2 = $conexionEstablecida->query($query2);


			 	while($registro2 = $resultado2->fetch()) {

			 		$idUsuarios__reasignados=$registro2["id_usuario"];
			 	
			 	}


			 	$queryAumento= $conexionEstablecida->prepare("SELECT PersonaACargo FROM th_usuario WHERE id_usuario='$idUsuarioC';");

 				$queryAumento->execute();
				$resultadoAumento = $queryAumento->fetchAll(\PDO::FETCH_ASSOC);

				$idUsuarios__x=$resultadoAumento[0][PersonaACargo];

				if (!empty($idUsuarios__reasignados)) {
					$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='1' AND a.estadoUsuario='A';";
				}else{
					$query="SELECT id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario WHERE id_usuario='$idUsuarios__x';";
				}

 				
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==59){

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido,(SELECT a1.descripcionZonal FROM th_zonal AS a1 WHERE a1.id_Zonal=a.zonal) AS zonal FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE PersonaACargo='$idUsuarioC' OR (a.fisicamenteEstructura=27 AND b.id_rol=4) OR (a.fisicamenteEstructura=28 AND b.id_rol=4) OR (a.fisicamenteEstructura=29 AND b.id_rol=4) OR (a.fisicamenteEstructura=30 AND b.id_rol=4) OR (a.fisicamenteEstructura=31 AND b.id_rol=4) OR (a.fisicamenteEstructura=32 AND b.id_rol=4) OR (a.fisicamenteEstructura=33 AND b.id_rol=4) AND a.estadoUsuario='A' ORDER BY a.fisicamenteEstructura;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]." (".$registro["zonal"].") "."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==65){

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='7' AND a.fisicamenteEstructura='24' AND a.estadoUsuario='A' AND b.estado='A' AND a.loginOne='1';";
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==66){

 				$query="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS apellido FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='7' AND a.fisicamenteEstructura='26' AND a.estadoUsuario='A' AND b.estado='A' AND a.loginOne='1';";
			 	$resultado = $conexionEstablecida->query($query);

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombre"]." ".$registro["apellido"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==100){

 				$query="SELECT idAreaEncargada,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreArea, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreArea FROM poa_areaencargada WHERE identificador IS NULL OR identificador='$evaluador';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Área encargada--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idAreaEncargada"]."'>".$registro["nombreArea"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==101){

 				$query="SELECT idAreaAccion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(accion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS accion FROM poa_area_accion WHERE identificador IS NULL OR identificador='$evaluador';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Área de acción--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idAreaAccion"]."'>".$registro["accion"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==102){

 				$query="SELECT idComponentes,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreComponentes, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreComponentes FROM poa_paid_componentes WHERE identificador='$evaluador';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='' class='text-center'>--Componente--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idComponentes"]."'>".$registro["nombreComponentes"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==103){

 				$query="SELECT idIndicadores,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreIndicadores, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicadores FROM poa_paid_indicadores WHERE identificador='$evaluador';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='' class='text-center'>--Indicador--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idIndicadores"]."'>".$registro["nombreIndicadores"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==104){

 				$query="SELECT idAreaEncargada,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreArea, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreArea FROM poa_areaencargada WHERE identificador='$variables' OR identificador IS NULL;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Área encargada--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idAreaEncargada"]."'>".$registro["nombreArea"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==105){

 				$query="SELECT idAreaAccion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(accion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS accion FROM poa_area_accion WHERE identificador='$variables' OR identificador IS NULL;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Área de acción--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idAreaAccion"]."'>".$registro["accion"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==106){

 				$query="SELECT idItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS item FROM poa_item WHERE identificador='$variables' OR identificador IS NULL;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Ítem--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idItem"]."'>".$registro["item"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==107){

 				$query="SELECT idComponentes,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreComponentes, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS componentes FROM poa_paid_componentes WHERE identificador='$variables' OR identificador IS NULL;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Componentes--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idComponentes"]."'>".$registro["componentes"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==108){

 				$query="SELECT idIndicadores,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreIndicadores, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicadores FROM poa_paid_indicadores WHERE identificador='$variables' OR identificador IS NULL;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Indicadores--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idIndicadores"]."'>".$registro["nombreIndicadores"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==109){

 				$query="SELECT idRubros,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreRubros, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreRubros FROM poa_paid_rubros WHERE identificador='$variables';";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value='0' class='text-center'>--Seleccione rubro--</option>";

			 	while($registro = $resultado->fetch()) {

			 		$listas.="<option value='".$registro["idRubros"]."'>".$registro["nombreRubros"]."</option>";
			 	

			 	}

			 	return $listas; 

 			}else if($indicador==110){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	if ($id_rolActes!='7') {
			 		
			 		$listas.="<optgroup label='Devolver a'>";

				 	while($registro3 = $resultado3->fetch()) {


				 		$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	if ($id_rolActes!='3') {

				 	$listas.="<optgroup label='Asignar a'>";

				 	while($registro = $resultado->fetch()) {


				 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	return $listas; 

 			}else if($indicador==151){

			$query="SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' and a.idActividad = 1 or a.idActividad = 3 or a.idActividad = 5 or a.idActividad = 7 or a.idActividad = 6   group BY a.idActividad ;";
			$resultado = $conexionEstablecida->query($query);

			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$listas.="<option value='".$registro["idActividades"]."'>".$registro["nombreActividades"]."</option>";
				

			}


			return $listas; 

		}else if($indicador==152){

			$query="SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' and a.idActividad = 2  group BY a.idActividad ;";
			$resultado = $conexionEstablecida->query($query);

			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$listas.="<option value='".$registro["idActividades"]."'>".$registro["nombreActividades"]."</option>";
				

			}


			return $listas; 

		}else if($indicador==153){

			$query="SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_documentofinal AS c ON c.idOrganismo=a.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' and a.idActividad = 1 or a.idActividad = 2 or a.idActividad = 3 or a.idActividad = 4 or a.idActividad = 5 or a.idActividad = 6 or a.idActividad = 7  group BY a.idActividad ;";
			$resultado = $conexionEstablecida->query($query);

			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$listas.="<option value='".$registro["idActividades"]."'>".$registro["nombreActividades"]."</option>";
				

			}


			return $listas; 

		}else if($indicador==200){
			
			$query="SELECT * FROM poa_programacion_financiera AS a INNER JOIN poa_actdeportivas AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera 
			WHERE idActividad='$idActividad' and idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' group by nombreEvento asc";

			$resultado = $conexionEstablecida->query($query);

			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$listas.="<option value='".$registro["nombreEvento"]."'>".$registro["nombreEvento"]."</option>";
				

			}


			return $listas; 

		}else if($indicador==201){
			
			$query="SELECT * FROM poa_programacion_financiera AS a INNER JOIN poa_mantenimiento AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera 
			WHERE idActividad='$idActividad' and idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' group by nombreInfras asc";
			$resultado = $conexionEstablecida->query($query);
		
			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$listas.="<option value='".$registro["nombreInfras"]."'>".$registro["nombreInfras"]."</option>";
				

			}


			return $listas; 

		}else if($indicador==202){
			
			$query="SELECT * FROM poa_programacion_financiera AS a INNER JOIN poa_actdeportivas AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera 
			WHERE  idActividad='$idActividad' and idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos'  and nombreEvento='$eventos_intervencion' group by idItem asc";
			$resultado = $conexionEstablecida->query($query);
		
			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$idItem=$registro["idItem"];

				$query="SELECT * FROM poa_item where idItem=$idItem;";
				$resultado = $conexionEstablecida->query($query);
			
				$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";
	
				while($registro = $resultado->fetch()) {	
					$listas.="<option value='".$registro["itemPreesupuestario"]."'>".$registro["nombreItem"]."</option>";
				}
				

			}


			return $listas; 

		}else if($indicador==203){

			$query="SELECT * FROM poa_programacion_financiera AS a INNER JOIN poa_mantenimiento AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera 
			WHERE idActividad='$idActividad' and idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' and nombreInfras='$eventos_intervencion' group by nombreInfras asc";
			
			$resultado = $conexionEstablecida->query($query);
		
			$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";

			while($registro = $resultado->fetch()) {

				$idItem=$registro["idItem"];
				

				$query="SELECT * FROM poa_item where idItem=$idItem;";
				$resultado = $conexionEstablecida->query($query);
			
				$listas="<option value='0' class='text-center'>--Seleccione actividad--</option>";
	
				while($registro = $resultado->fetch()) {	
					$listas.="<option value='".$registro["itemPreesupuestario"]."'>".$registro["nombreItem"]."</option>";
				}
				

			}


			return $listas; 

		}else if($indicador==204){

			$query="SELECT * FROM poa_item where idItem=30;";
			
			$resultado = $conexionEstablecida->query($query);
		
			while($registro = $resultado->fetch()) {

				$listas=$registro["idItem"];

			}


			return $listas; 

		}else if($indicador==205){


			$query="SELECT * FROM poa_item where itemPreesupuestario=$idProgrmacionFinanciera1;";
			
			$resultado = $conexionEstablecida->query($query);
		
			while($registro = $resultado->fetch()) {

				$item=$registro["idItem"];

			}

			$query="SELECT count(*) as num from poa_modificacion_actividad_administra_origen  where idActividadOrigen=$origen1 and idActividadDestino=$idActividadDestino and idItem=$item ";
			//$query="SELECT count(*) as num from poa_modificacion_actividad_administra_origen  where idActividadOrigen=1 and idActividadDestino=7 and idItem=43 ";
		
			$resultado = $conexionEstablecida->query($query);
		
			while($registro = $resultado->fetch()) {

				$listas=$registro["num"];

			}




			return $listas; 

		}else if($indicador==500){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	if ($id_rolActes!='7') {
			 		
			 		$listas.="<optgroup label='Recomendar a'>";

				 	while($registro3 = $resultado3->fetch()) {


				 		$listas.="<option value='".$registro3["id_usuario"]."' attr='superior'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	if ($id_rolActes!='3') {

				 	$listas.="<optgroup label='Devolver a'>";

				 	while($registro = $resultado->fetch()) {


				 		$listas.="<option value='".$registro["id_usuario"]."' attr='no__superior'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	return $listas; 

 			}else if($indicador==501){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional  WHERE b.id_rol='4' AND a.fisicamenteEstructura='3' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	$listas.="<optgroup label='Recomendar a'>";

				while($registro3 = $resultado3->fetch()) {

					$listas.="<option value='".$registro3["id_usuario"]."' attr='superior'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				}

				 $listas.="</optgroup>";

				 $listas.="<optgroup label='Devolver a'>";

				 while($registro = $resultado->fetch()) {


				 	$listas.="<option value='".$registro["id_usuario"]."' attr='no__superior'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";

			 	return $listas; 

 			}else if($indicador==502){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.idUsuario FROM poa_paid_reasignacion_seguimiento AS a INNER JOIN th_usuario_roles AS b ON a.idUsuario=b.id_usuario WHERE a.idOrganismo='$idOrganismoPaid' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.id_rol='7' ORDER BY a.idAsignacion DESC LIMIT 1;";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idUsuario__r=$registro2["idUsuario"];

			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional  WHERE a.id_usuario='$idUsuario__r' ORDER BY a.id_usuario DESC LIMIT 1;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' AND b.id_rol='2' AND a.fisicamenteEstructura='18' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	$listas.="<optgroup label='Devolver a'>";

				while($registro3 = $resultado3->fetch()) {

					$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				}

				 $listas.="</optgroup>";

				 $listas.="<optgroup label='Recomendar a'>";

				 while($registro = $resultado->fetch()) {


				 	$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";

			 	return $listas; 

 			}else if($indicador==510){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	if ($id_rolActes!='7') {
			 		
			 		$listas.="<optgroup label='Devoler a'>";

				 	while($registro3 = $resultado3->fetch()) {


				 		$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	if ($id_rolActes!='3') {

				 	$listas.="<optgroup label='Recomendar a'>";

				 	while($registro = $resultado->fetch()) {


				 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	return $listas; 

 			}else if($indicador==511){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	if ($id_rolActes!='7') {
			 		
			 		$listas.="<optgroup label='Devolver a'>";

				 	while($registro3 = $resultado3->fetch()) {


				 		$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	if ($id_rolActes!='3') {

				 	$listas.="<optgroup label='Recomendar a'>";

				 	while($registro = $resultado->fetch()) {


				 		$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 	}

				 	$listas.="</optgroup>";

			 	}

			 	return $listas; 

 			}else if($indicador==512){

 				$conexionEstablecida->exec("set names utf8");

 				$query="SELECT idTipoOrganismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo FROM poa_tipo_organismo ;";
					$resultado = $conexionEstablecida->query($query);
			 

			 	$listas="<option value='0' class='text-center'>--Tipo organismo--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idTipoOrganismo"]."'>".$registro["nombreTipo"]."</option>";
				

				}


			 	return $listas; 

 			}else if($indicador==513){

				$query="SELECT idRDinamico,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreDinamico, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreDinamico FROM poa_paid_rubros_dinamicos ;";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Matriz--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idRDinamico"]."'>".$registro["nombreDinamico"]."</option>";
				

				}

				return $listas; 

			}else if($indicador==1000){

				$query="SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividades FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismoPrincipal' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad;";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Elegir una actividad--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idActividades"]."'>".$registro["actividades"]."</option>";
				

				}

				return $listas; 

			}else if($indicador==1001){

				$query="SELECT a.idProgramacionFinanciera,c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividad,b.itemPreesupuestario,b.idItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS item,a.totalTotales FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismoPrincipal' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='$idActividad' GROUP BY a.idItem;";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Elegir un Ítem--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idItem"]."' itemPresupuestario='".$registro["itemPreesupuestario"]."' nombreItem='".$registro["item"]."' nombreActividades='".$registro["actividad"]."' montoTotal='".$registro["totalTotales"]."' idProgramacionFinanciera='".$registro["idProgramacionFinanciera"]."'>".$registro["item"]."</option>";
				

				}

				return $listas; 

			}else if($indicador==1002){

 				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	$listas.="<optgroup label='Devolver a'>";

				 while($registro3 = $resultado3->fetch()) {


				 	$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";


				 $listas.="<optgroup label='Asignar a'>";

				 while($registro = $resultado->fetch()) {


				 	$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";

			 	return $listas; 

 			}else if($indicador==1003){

 				$conexionEstablecida->exec("set names utf8");


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A';";

			 	$resultado = $conexionEstablecida->query($query);


 				$query2="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A';";

			 	$resultado2 = $conexionEstablecida->query($query2);


			 	$listas="<option value=''>--Seleccione--</option>";

			 	$listas.="<optgroup label='Devolver a'>";

				 while($registro = $resultado->fetch()) {


				 	$listas.="<option value='".$registro["id_usuario"]."' attr='devolver'>".utf8_decode(utf8_encode($registro["nombreCompleto"]))."</option>";
				 	

				 }

				 $listas.="</optgroup>";


				 $listas.="<optgroup label='Asignar a'>";

				 while($registro2 = $resultado2->fetch()) {


				 	$listas.="<option value='".$registro2["id_usuario"]."' attr='asignar'>".utf8_decode(utf8_encode($registro2["nombreCompleto"]))." </option>";
				 	

				 }

				 $listas.="</optgroup>";

			 	return $listas; 

 			}else if($indicador==1004){

 				$conexionEstablecida->exec("set names utf8");

				$conexionEstablecida->exec("set names utf8");

 				$query2="SELECT a.PersonaACargo,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='$idUsuario';";
			 	$resultado2 = $conexionEstablecida->query($query2);

			 	while($registro2 = $resultado2->fetch()) {

			 		$idBuscadorDic=$registro2["PersonaACargo"];
			 		$id_rolActes=$registro2["id_rol"];
			 	
			 	}

			 	$query3="SELECT a.id_usuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT_WS(' ',a.nombre,a.apellido), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol  WHERE a.id_usuario='$idBuscadorDic'  ORDER BY c.id_Zonal;";

			 	$resultado3 = $conexionEstablecida->query($query3);


 				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto, CONCAT_WS('-',c.descripcionZonal,d.nombre) AS descripcionZonal,b.id_rol,a.fisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_zonal AS c ON c.id_Zonal=a.zonal INNER JOIN th_roles AS d ON d.id_rol=b.id_rol INNER JOIN th_puestoinstitucional AS e ON e.id_PuestoInstitucional=a.puestoInstitucional WHERE a.estadoUsuario='A' AND a.PersonaACargo='$idUsuario'  AND a.estadoUsuario='A' ORDER BY c.id_Zonal;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Seleccione--</option>";

			 	$listas.="<optgroup label='Recomendar a'>";

				 while($registro3 = $resultado3->fetch()) {


				 	$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombreCompleto"])." (".utf8_encode($registro3["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";


				 $listas.="<optgroup label='Devolver a'>";

				 while($registro = $resultado->fetch()) {


				 	$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombreCompleto"])." (".utf8_encode($registro["descripcionZonal"])).")"."</option>";
				 	

				 }

				 $listas.="</optgroup>";

			 	return $listas; 
 
 			}else if($indicador==1005){

				$query="SELECT a.id_usuario,CONCAT_WS(' ',a.nombre,a.apellido) AS nombreCompleto FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='3' AND a.estadoUsuario='A';";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Devolver a--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["id_usuario"]."'>".$registro["nombreCompleto"]."</option>";
				

				}

				return $listas; 

			}else if($indicador==1006){

				$query="SELECT idRubros,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreRubros, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreRubros FROM poa_paid_rubros WHERE identificador='$evaluador';";
				$resultado = $conexionEstablecida->query($query);

				$listas="";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idRubros"]."'>".$registro["nombreRubros"]."</option>";
				

				}

				return $listas; 


			}else if($indicador==1007){

				$query="SELECT idRubros,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreRubros, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreRubros FROM poa_paid_rubros WHERE identificador='$evaluador';";
				$resultado = $conexionEstablecida->query($query);

				$listas="<option value='0' class='text-center'>--Seleccione un rubro--</option>";

				while($registro = $resultado->fetch()) {

					$listas.="<option value='".$registro["idRubros"]."'>".$registro["nombreRubros"]."</option>";
				

				}

				return $listas; 


			}



		}

	}


	echo lugar::lugarFuncion($indicador);

