<?php $objetoInformacion= new usuarioAcciones();?>

<?php 

	session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];

?>




<?php $anioActual = date('Y');?>

<?php $informacionObjeto=$objetoInformacion->getInformacionCompletaOrganismoDeportivo();?>

<?php $observaciones=$objetoInformacion->getObservacionesAprobacionUsuarios($informacionObjeto[0][idOrganismo]);?>

<?php $observacionOrganismo=$objetoInformacion->getObtenerInformacionGeneral("SELECT estado FROM poa_conclusion_observacion WHERE idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND estado='A' AND perioIngreso='$aniosPeriodos__ingesos';");?>

<?php $estadoFinal=$objetoInformacion->getObtenerInformacionGeneral("SELECT idOrganismo FROM poa_documentofinal WHERE idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND  perioIngreso='$aniosPeriodos__ingesos';");?>

<?php $estadoPAID=$objetoInformacion->getObtenerInformacionGeneral("SELECT COUNT(*) as existe,valor__comparativo FROM poa_paid_asignacion_dos where idOrganismo='".$informacionObjeto[0][idOrganismo]."' and estado='A' and perioIngreso='$aniosPeriodos__ingesos';");?>

<?php $estadoPAIDTipo=$objetoInformacion->getObtenerInformacionGeneral("SELECT valor__comparativo FROM poa_paid_asignacion_dos where idOrganismo='".$informacionObjeto[0][idOrganismo]."' and estado='A' and perioIngreso='$aniosPeriodos__ingesos'");?>

<?php $informacionSeleccionada__remanentes=$objetoInformacion->getObtenerInformacionGeneral("SELECT idRemanentes,monto__incrementoRemantes,archivo__saldoEstados,monto__autogestion FROM poa_remanentes_monto_asignacion WHERE idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idRemanentes DESC LIMIT 1;");?>

<?php $informacionSeleccionada__remanentes__seleccionables=$objetoInformacion->getObtenerInformacionGeneral("SELECT idOrganismo FROM poa_remanentes_informacion_organismo WHERE idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND perioIngreso='$aniosPeriodos__ingesos';");?>

<?php $cierres__anios=$objetoInformacion->getObtenerInformacionGeneral("SELECT estado FROM poa_cierre_fiscal WHERE periodo='$aniosPeriodos__ingesos' AND idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND estado='si';");?>

<?php $cierres__anios__trasnferencia=$objetoInformacion->getObtenerInformacionGeneral("SELECT estado FROM poa_cierre_fiscal_transferencia WHERE periodo='$aniosPeriodos__ingesos' AND idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND estado='si';");?>

<?php $cierres__anios__modificaciones=$objetoInformacion->getObtenerInformacionGeneral("SELECT estado FROM poa_cierre_fiscal_paid_modificaciones WHERE periodo='$aniosPeriodos__ingesos' AND idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND estado='si';");?>


<?php $cierres__anios__paid=$objetoInformacion->getObtenerInformacionGeneral("SELECT estado FROM poa_cierre_fiscal_paid WHERE periodo='$aniosPeriodos__ingesos' AND idOrganismo='".$informacionObjeto[0][idOrganismo]."' AND estado='si';");?>

<?php $envio__inicial__preliminal=$objetoInformacion->getObtenerInformacionGeneral("SELECT idOrganismo FROM poa_preliminar_envio WHERE idOrganismo='".$informacionObjeto[0][idOrganismo]."';");?>

<?php 
	$idOrganismoSession = $informacionObjeto[0][idOrganismo];
	$nombreOD = $informacionObjeto[0][nombreOrganismo];
	$_SESSION["idOrganismoSession"]=$idOrganismoSession;
	$_SESSION["nombreOD"]=$nombreOD;

?>



<input type="hidden" id="fechaPrincipalJ" name="fechaPrincipalJ" />

<input type="hidden" id="organismoIdPrin" name="organismoIdPrin" value="<?=$informacionObjeto[0][idOrganismo]?>">

<li class="nav-item">

	<a href="datosGenerales" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'datosGenerales');?>">

		<p>Datos generales</p>

	</a>

</li>

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("planificacion","ventanaObservaciones","reporteriaOrganismos","replicarInformacion","flujoTransferencias"));?>">

	<a href="#" class="nav-link">
		<p>
			POA
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">

		<?php if (empty($cierres__anios[0][estado])): ?>

			<?php if ($informacionObjeto[0][activado]=="A" && !empty($informacionObjeto[0][periodo]) && $informacionObjeto[0][periodo]!=null  && !empty($informacionObjeto[0][idInversion])): ?>

			<li class="nav-item">

				<a href="planificacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'planificacion');?>">

					<p>Registro de presupuesto</p>

				</a>

			</li>

			<?php endif ?> 

			<?php if (!empty($observacionOrganismo[0][estado]) && $observacionOrganismo[0][estado]!=null && $observacionOrganismo[0][estado]=="A"): ?>

			<li class="nav-item">

				<a href="ventanaObservaciones" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'ventanaObservaciones');?>">

					<p>Ventana de observaciones</p>

				</a>

			</li>

			<?php endif ?>

			<?php if (empty($estadoFinal[0][idOrganismo])): ?> 


			<li class="nav-item">

				<a href="replicarInformacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'replicarInformacion');?>">

					<p>Copia catalogo año anterior</p>

				</a>

			</li>

			<?php endif ?>


		<?php endif ?>

		<li class="nav-item">

			<a href="reporteriaOrganismos" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaOrganismos');?>">

				<p>Reportería</p>

			</a>

		</li>

	</ul>

</li>



<?php if (!empty($estadoFinal[0][idOrganismo]) && $estadoFinal[0][idOrganismo]!=null && !empty($informacionObjeto[0][idInversion])): ?> 

<?php if (empty($cierres__anios__trasnferencia[0][estado])): ?>
	
<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("registroTrasnferencia"));?>">

	<a href="#" class="nav-link">
		<p>
			TRANSFERENCIA
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

			<a href="registroTrasnferencia" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'registroTrasnferencia');?>">

				<p>Registro de transferencia</p>

			</a>

		</li> 

	</ul>

</li>


<?php endif ?>



<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("seguimiento","seguimientoRe","seguimientoControlC","reportesSeguimientos"));?>">

	<a href="#" class="nav-link">
		<p>
			SEGUIMIENTO
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">

		<?php if (empty($cierres__anios__paid[0][estado])): ?>
			
			<li class="nav-item">

				<a href="seguimiento" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'seguimiento');?>">

					<p>Registro seguimiento</p>

				</a>

			</li> 

			<li class="nav-item">

				<a href="seguimientoControlC" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'seguimientoControlC');?>">

					<p>Control de cambios</p>

				</a>

			</li> 

		<?php endif ?>

		<li class="nav-item">

			<a href="reportesSeguimientos" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reportesSeguimientos');?>">

				<p>Reporte seguimiento</p>

			</a>

		</li> 

		<li class="nav-item">

			<a href="seguimientoRe" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'seguimientoRe');?>">

				<p>Reportería</p>

			</a>

		</li> 

	</ul>

</li>	



	
<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("modificacionesOrganismo","infraestructuraOrganismo","modificacionesMontos","modificacionesSueldosSalarios","modificacionesInformes","modificacionesCuadroAvances","dashboard","modificacionesDesvinculacion","modificaciones2022"));?>">

	<a href="#" class="nav-link">
		<p>
			MODIFICACIONES
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<?php if (empty($cierres__anios__modificaciones[0][estado])): ?>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificaciones2022" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificaciones2022');?>">

				<p>Modificaciones <?=$aniosPeriodos__ingesos?></p>

			</a>

		</li> 

	</ul>	

	<?php endif ?>


	<ul class="nav nav-treeview"> 
	
		<li class="nav-item">

			<a href="dashboard" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'dashboard');?>">

				<p>Dashboard</p>

			</a>

		</li>

	</ul>

	<?php if (empty($cierres__anios__modificaciones[0][estado])): ?>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesOrganismo" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesOrganismo');?>">
				<p>Modificaciones (Act. 01 al 07)</p>
			</a>

		</li>

	</ul>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="infraestructuraOrganismo" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'infraestructuraOrganismo');?>">
				<p>Infraestructura (Act. 02)</p>
			</a>

		</li>

	</ul>


	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesMontos" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesMontos');?>">
				<p>Honorarios  (Act. 01 y 04)</p>
			</a>

		</li>

	</ul> 

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesSueldosSalarios" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesSueldosSalarios');?>">
				<p>Sueldos y Salarios  (Act. 01 y 04)</p>
			</a>

		</li>

	</ul>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesDesvinculacion" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesDesvinculacion');?>">
				<p>Desvinculación</p>
			</a>

		</li>

	</ul>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesInformes" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesInformes');?>">
				<p>Informes y observaciones</p>
			</a>

		</li>

	</ul>


	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="modificacionesCuadroAvances" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesCuadroAvances');?>">
				<p>Avance</p>
			</a>

		</li>

	</ul>

	<?php endif ?>

</li>


<?php if (!empty($informacionSeleccionada__remanentes[0][idRemanentes]) && !empty($informacionObjeto[0][idInversion])): ?>
			
<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("remanentes","reportesRemanentes","resumenRemanente"));?>">

	<a href="#" class="nav-link">
		<p>
			REMANENTE 
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">

		<?php if (empty($informacionSeleccionada__remanentes__seleccionables[0][idOrganismo])): ?>
				
			
		<li class="nav-item">

			<a href="remanentes" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'remanentes');?>">

				<p>Registro remanentes</p>

			</a>

		</li> 

		<?php endif ?>


		<li class="nav-item">

			<a href="resumenRemanente" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'resumenRemanente');?>">

				<p>Resumen remanente</p>

			</a>

		</li> 

	</ul>


</li>
			
<?php endif ?> 


<?php endif ?> 



<?php if ($estadoPAID[0][existe] > 0): ?>

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("planificacion","ventanaObservaciones","reporteriaOrganismos","generalDeporteEA","paidRubrosEncuentroActivo", "generalDeporteAR", "paidRubrosEventos", "paidRubrosInterdisciplinario", "paidRubrosNecesidadesIndividuales", "paidRubrosNecesidadesGenerales"));?>">

	<a href="#" class="nav-link">
		<p>
			PAID
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">

		<?php if ($estadoPAIDTipo[0][valor__comparativo] == 0): ?>
			
		<li class="nav-item">

			<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("planificacion","ventanaObservaciones","reporteriaOrganismos","generalDeporteAR", "paidRubrosEventos", "paidRubrosInterdisciplinario", "paidRubrosNecesidadesIndividuales", "paidRubrosNecesidadesGenerales"));?>">

				<a href="#" class="nav-link">
					<p>
						Fortalecimiento del deporte de alto rendimiento del ecuador
						<i class="fas fa-angle-left right"></i>
						<span class="badge badge-info right"></span>
					</p>
				</a>

				<ul class="nav nav-treeview">

					<li class="nav-item">

						<a href="generalDeporteAR" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'generalDeporteAR');?>">

							<p>General</p>

						</a>

					</li> 


					<li class="nav-item">

						<a href="paidRubrosEventos" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRubrosEventos');?>">

							<p>Eventos</p>

						</a>

					</li> 


					<li class="nav-item">

						<a href="paidRubrosInterdisciplinario" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRubrosInterdisciplinario');?>">

							<p>Interdisciplinario</p>

						</a>

					</li>


					<li class="nav-item">

						<a href="paidRubrosNecesidadesIndividuales" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRubrosNecesidadesIndividuales');?>">

							<p>Necesidades Individuales</p>

						</a>

					</li>

					<li class="nav-item">

						<a href="paidRubrosNecesidadesGenerales" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRubrosNecesidadesGenerales');?>">

							<p>Necesidades Generales</p>

						</a>

					</li>

				</ul>

			</li>

		</li>

		<?php endif ?>

		<?php if ($estadoPAIDTipo[0][valor__comparativo] == 1): ?>

		<li class="nav-item">

			<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("planificacion","ventanaObservaciones","reporteriaOrganismos","generalDeporteEA","paidRubrosEncuentroActivo"));?>">

				<a href="#" class="nav-link">
					<p>Encuentro activo del deporte para el desarrollo
						<i class="fas fa-angle-left right"></i>
						<span class="badge badge-info right"></span>
					</p>
				</a>

				<ul class="nav nav-treeview">

					<li class="nav-item">

						<a href="generalDeporteEA" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'generalDeporteEA');?>">

							<p>General</p>

						</a>

					</li> 

					<li class="nav-item">

						<a href="paidRubrosEncuentroActivo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRubrosEncuentroActivo');?>">

							<p>Juegos Nacionales</p>

						</a>

					</li> 

					
				</ul>

			</li>


		</li>

		<?php endif ?>

	</ul>

</li>

<?php endif ?>