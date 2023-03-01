
<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionGeneral();?>

<?php $zonalVariable=$objetoInformacion->getObtenerInformacionGeneral("SELECT zonal,fisicamenteEstructura FROM th_usuario WHERE id_usuario='$informacionObjeto[0]';");?>

<input type="hidden" id="fechaPrincipalJ" name="fechaPrincipalJ" />

<input type="hidden" id="zonalUsuario" name="zonalUsuario" value="<?=$zonalVariable[0][zonal]?>" />

<input type="hidden" id="idRolAd" name="idRolAd" value="<?=$informacionObjeto[1]?>" />

<input type="hidden" id="fisicamenteE" name="fisicamenteE" value="<?=$zonalVariable[0][fisicamenteEstructura]?>" />

<input type="hidden" id="idUsuarioC" name="idUsuarioC" value="<?=$informacionObjeto[0]?>" />


<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("coordinadorRe","reporteriaFinal","poaResolucionFinal","","coordinadorRecomendados"));?>">

	<a href="#" class="nav-link">
		<p>
	    	POA
	    	<i class="fas fa-angle-left right"></i>
	    	<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

		<a href="coordinadorRe" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRe');?>">

			<p>Trámites recibidos</p>

		</a>

		</li>	

		<li class="nav-item">

		<a href="coordinadorRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRecomendados');?>">

			<p>Trámites recomendados</p>

		</a>

		</li>

					
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

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidRecomendadosPlani"));?>">

<a href="#" class="nav-link">
	<p>
    	PAID
    	<i class="fas fa-angle-left right"></i>
    	<span class="badge badge-info right"></span>
	</p>
</a>

<ul class="nav nav-treeview">

<li class="nav-item">

<a href="paidRecomendadosPlani" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRecomendadosPlani');?>">

	<p>Recomendados</p>

</a>

</li>

</ul>

</li>


<!-- 
<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("directorMd","directorMd2"));?>">

	<a href="#" class="nav-link">
		<p>
			Modificaciones
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

			<a href="directorMd" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'directorMd');?>">

				<p>Trámite</p>

			</a>

		</li>
			
		<li class="nav-item">

			<a href="directorMd2" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'directorMd2');?>">

				<p>Reasignado</p>

			</a>

		</li>

	</ul>

</li> -->