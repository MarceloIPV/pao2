
<?php $componentes= new componentes();

session_start();

$tipoProyecto=1;

$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
?>

<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionCompletaOrganismoDeportivo();?>


<?php $idOrganismoSession=$informacionObjeto[0][idOrganismo];?>




<div class="content-wrapper d d-flex flex-column align-items-center">
	
		<?=$componentes->getContenidoActividadesPAID("tablaPAIDGneral","
		
		<tr>
			<th colspan='3' class='uppercase__texto monto__especial__titulo'>
			<center>Monto: ".number_format((float)$inversionOrganismo[0][nombreInversion], 2, '.', '')."</center>
			</th>
			</tr>
			<tr class='monto__despejarEnvio'>
			<th colspan='1' class='uppercase__texto'>
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
		</tr> "
		
		,"

		<tr>
			<td class='uppercase__texto' >
			<center style='font-size: 14px;'>Planificar Items</center>
			</td>
			<td>
			<center style='font-size: 14px;'>Planificar Items</center>
			</td>
			<td>
			<center style='font-size: 14px;'><button type'button' class='btn btn-success'>Warning</button></center>
			</td>
		</tr>
	

		");
		
		?>		
	
	
</div>