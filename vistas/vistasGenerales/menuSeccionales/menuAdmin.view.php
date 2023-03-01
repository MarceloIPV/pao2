<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionGeneral();?>

<?php $zonalVariable=$objetoInformacion->getObtenerInformacionGeneral("SELECT zonal,fisicamenteEstructura FROM th_usuario WHERE id_usuario='$informacionObjeto[0]';");?>


<input type="hidden" id="fechaPrincipalJ" name="fechaPrincipalJ" />

<input type="hidden" id="zonalUsuario" name="zonalUsuario" value="<?=$zonalVariable[0][zonal]?>" />

<input type="hidden" id="idRolAd" name="idRolAd" value="<?=$informacionObjeto[1]?>" />

<input type="hidden" id="fisicamenteE" name="fisicamenteE" value="<?=$zonalVariable[0][fisicamenteEstructura]?>" />

<input type="hidden" id="idUsuarioC" name="idUsuarioC" value="<?=$informacionObjeto[0]?>" />

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("bloqueador"));?>">

	<a href="#" class="nav-link">
		<p>
			CIERRE DEL AÑO FISCAL
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

			<a href="bloqueador" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'bloqueador');?>">

				<p>CIERRE DE AÑO</p>

			</a>

		</li> 

	</ul>

</li>



<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("asignacionPresupuesto","modificacionPresupuestaria","administracionGeneral","administracionModificaciones","administracionModificaciones","asignacionPresupuesto","modificacionPresupuestaria","coordinadorRe","observadosP","reporteriaFinal","poaResolucionFinal","poasGlobalesRecibidosM2022","poasGlobalesRecibidos","coordinadorRecomendados","coordinadorRecomendadosCorPla"));?>">

	<a href="#" class="nav-link">

		<p>
	    	POA
	    	<i class="fas fa-angle-left right"></i>
	    	<span class="badge badge-info right"></span>
		</p>

	</a>
	<ul class="nav nav-treeview">
		<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("administracion","administracionGeneral","administracionUsuarios","administracionModificaciones"));?>">
	
<a href="#" class="nav-link">
	<p>
    	Administración
    	<i class="fas fa-angle-left right"></i>
    	<span class="badge badge-info right"></span>
	</p>
</a>

<ul class="nav nav-treeview">

	<li class="nav-item">

		<a href="administracionGeneral" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'administracionGeneral');?>">
			<p>Administración general</p>
		</a>

	</li>

</ul>

<ul class="nav nav-treeview">

	<li class="nav-item">

		<a href="administracionModificaciones" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'administracionModificaciones');?>">
			<p>Administración modificaciones</p>
		</a>

	</li>

</ul>


</li>

	</ul>

	<ul class="nav nav-treeview">


		<li class="nav-item">

			<a href="asignacionPresupuesto" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'asignacionPresupuesto');?>">

				<p>Asignar</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="modificacionPresupuestaria" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionPresupuestaria');?>">

				<p>Modificar</p>

			</a>

		</li>



<?php if ($informacionObjeto[1]==1 || $informacionObjeto[1]==2 || ($informacionObjeto[1]==3 && $zonalVariable[0][fisicamenteEstructura]==18)): ?>
	
<li class="nav-item">

<a href="poasGlobalesRecibidos" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poasGlobalesRecibidos');?>">

	<p>Poas enviados</p>

</a>

</li> 


<li class="nav-item">

<a href="poasGlobalesRecibidosM2022" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poasGlobalesRecibidosM2022');?>">

	<p>Modificaciones enviadas</p>

</a>

</li>


	
<li class="nav-item">

<a href="coordinadorRe" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRe');?>">

	<p>Recibidos</p>

</a>

</li>	

<?php if ($informacionObjeto[1]==2): ?>
	
<li class="nav-item">

<a href="coordinadorRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRecomendados');?>">

	<p>Recomendados</p>

</a>

</li>	

<li class="nav-item">

<a href="coordinadorRecomendadosCorPla" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRecomendadosCorPla');?>">

	<p>Recomendados (Coordinación)</p>

</a>

</li>	
	
<?php endif ?>

<?php if ($informacionObjeto[1]==2): ?>

<li class="nav-item">

<a href="observadosP" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'observadosP');?>">

	<p>Poas Observados</p>

</a>

</li>

<?php endif ?>



<?php endif ?>


<li class="nav-item">

<a href="reporteriaFinal" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaFinal');?>">

	<p>Trámites</p>

</a>

</li>



<li class="nav-item">

<a href="poaResolucionFinal" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poaResolucionFinal');?>">

	<p>Poas gestionados</p>

</a>

</li>

	</ul>

</li>



<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidRecomendadosPlani","paidAprobadosPlani","paidfortalecimiento","paidAsignacion","reporteriaAsignacion","paidencuentroactivo","paidAsignacionDesarrollo","reporteriaAsignacionDesarrollo","negadosPlanificaPaid","paidRecomendadosPlaniRecomendados","reporteriaPaidF"));?>">

<a href="#" class="nav-link">
	<p>
    	PAID
    	<i class="fas fa-angle-left right"></i>
    	<span class="badge badge-info right"></span>
	</p>
</a>

<ul class="nav nav-treeview">


<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidfortalecimiento","paidAsignacion","reporteriaAsignacion"));?>">

	<a href="#" class="nav-link">

		<p>
			Fortalecimiento del deporte de alto rendimiento del Ecuador
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>

	</a>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="paidfortalecimiento" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidfortalecimiento');?>">

				<p>Administración</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="paidAsignacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignacion');?>">

				<p>Asignación</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="paidAsignado" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignado');?>">

				<p>Asignado</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="reporteriaAsignacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaAsignacion');?>">

				<p>Reportería</p>

			</a>

		</li>

	</ul>

</li>

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidencuentroactivo","paidAsignacionDesarrollo","reporteriaAsignacionDesarrollo"));?>">

	<a href="#" class="nav-link">

		<p>
			Encuentro activo del deporte para el desarrollo
		    <i class="fas fa-angle-left right"></i>
		    <span class="badge badge-info right"></span>
		</p>

	</a>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="paidencuentroactivo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidencuentroactivo');?>">

				<p>Administración</p>

			</a>

		</li>


		<li class="nav-item">

			<a href="paidAsignacionDesarrollo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignacionDesarrollo');?>">

				<p>Asignación</p>

			</a>

		</li>


		<li class="nav-item">

			<a href="reporteriaAsignacionDesarrollo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaAsignacionDesarrollo');?>">

				<p>Reportería</p>

			</a>

		</li>

	</ul>

</li>


<li class="nav-item">

<a href="paidRecomendadosPlani" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRecomendadosPlani');?>">

	<p>Asignados</p>

</a>

</li>


<?php if ($informacionObjeto[1]==2): ?>

<li class="nav-item">

<a href="paidRecomendadosPlaniRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRecomendadosPlaniRecomendados');?>">

	<p>Recomendados</p>

</a>

</li>


<li class="nav-item">

<a href="paidAprobadosPlani" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAprobadosPlani');?>">

	<p>Aprobados</p>

</a>

</li>

<li class="nav-item">

<a href="negadosPlanificaPaid" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'negadosPlanificaPaid');?>">

	<p>Observados</p>

</a>

</li>

<?php endif ?>

<li class="nav-item">

<a href="reporteriaPaidF" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaPaidF');?>">

	<p>Reportería</p>

</a>

</li>


</ul>

</li>


