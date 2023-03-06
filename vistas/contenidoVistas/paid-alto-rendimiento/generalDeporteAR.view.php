
<?php $componentes= new componentes();

$componentesPaid= new componentesPaid();

session_start();

$tipoProyecto=1;

$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
?>

<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionCompletaOrganismoDeportivo();?>


<?php $idOrganismoSession=$informacionObjeto[0][idOrganismo];?>




<div class="content-wrapper d d-flex flex-column align-items-center">
	
		<?=$componentes->getContenidoActividadesPAID("tablaPAIDGeneral","
		
		<tr>
			<th colspan='5' class='uppercase__texto monto__especial__titulo'>
			<center>Monto: ".number_format((float)$inversionOrganismo[0][nombreInversion], 2, '.', '')."</center>
			</th>
		</tr>


		<tr class='monto__despejarEnvio'>
			<th colspan='3' class='uppercase__texto'>
			<center>Monto por asignar: ".number_format((float)$inversionRestante, 2, '.', '')."</center>
			</th>
			<th colspan='2' class='uppercase__texto'>
			<center>Monto asignado: ".number_format((float)$inversionOrganismoQueda[0][sumaItemTotal], 2, '.', '')."</center>
			</th>
		</tr>
		
		
		<tr>
			<th>
			<center>Nro.</center>
			</th>
			<th style='width:25%!important;'>
			<center>Componente</center>
			</th>
			<th style='width:25%!important;'>
			<center>Rubro</center>
			</th>
			<th style='width:25%!important;'>
			<center>Monto Asignado</center>
			</th>
			<th style='width:25%!important;'>
			<center>Monto Por Asignar</center>
			</th>


		</tr> "
		
		,"

		<tr>
			<td class='uppercase__texto' >
			<center style='font-size: 14px;'>1</center>
			</td>
			<td>
			<center style='font-size: 14px;'>Viajes</center>
			</td>
			<td>
			<center style='font-size: 14px;'><button type'button' class='btn btn-success'style='width=200px;'  data-bs-toggle='modal' data-bs-target='#programaCargado'> Ver </button></center>
			</td>
			<td>
			<center style='font-size: 14px;'>1000</center>
			</td>
			<td>
			<center style='font-size: 14px;'>200</center>
			</td>
		</tr>	

		");
		
		?>		
	
	
</div>


<?=$componentesPaid->getModalGeneralPaid("programaCargado","Rubros","indicadoresModalContent","agregarIndicadores","verIndicadores","tablaRubros",["nombreIndicador"],"tablaPrograma");?>
