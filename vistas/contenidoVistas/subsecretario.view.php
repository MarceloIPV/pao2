
<?php $componentes= new componentes();?>

<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<?=$componentes->getComponentes(1,"BANDEJAS PARA REVISIÓN");?>

		<div class="row">

		<table id="organismoSubses" class="col col-12 cell-border">

			<thead>

				<tr>

					<th><center>Ruc</center></th>
					<th><center>Organismo deportivo</center></th>
					<th><center>Email</center></th>
					<th><center>Teléfonos</center></th>
					<th><center>Tipo organismo</center></th>
					<th><center>Representante</center></th>
					<th><center>Fecha<br>envío POA</center></th>
					<th><center>Provincia</center></th>
					<th><center>Reasignar</center></th>
					<th><center>Estado</center></th>

				</tr>

			</thead>

		</table>

		</div>

	</section>

</div>



<?=$componentes->getModalMatricezObserva("reasignarTra","formAsignarTraS","enviarTramite","Enviar");?>

<?=$componentes->getModalMatricezObserva2("modalVisualizaMatrices","formVisualizaM");?>