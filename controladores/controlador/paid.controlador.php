<?php

	class componentesPaid{


		public function getModalGeneralPaid($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7,$parametro8){

			$modal= "
			
			<div class='modal fade modal__1' id='$parametro1' aria-hidden='true' data-backdrop='static' data-keyboard='false' tabindex='-1'>";

			$modal.="<div class='modal-dialog modal-xl'>";

			
			$modal.="	<form class='modal-content formularioConfiguracion'>

						<div class='modal-header row'>

					        <div class='col' style='z-index: 1;'>

					        	<h5 class='modal-title titulo__modalItems' id='exampleModalLabel'>$parametro2</h5>

					        </div>

					        <div class='col col-1' style='z-index: 2;'>
							
								<button type='button' class='btn-close modales__reload pointer__botones' data-bs-dismiss='modal' aria-label='Close'><i class='far fa-times-circle'></i></button>
							
							</div>

						</div>
							
							";

				

				$modal.= "

						<div class='modal-body row $parametro3'>

							<div class='col col-6 d d-flex justify-content-center'>

								<a class='btn btn-warning pointer__botones' id='$parametro4' name='$parametro4'><i class='fas fa-th-list'></i>&nbsp;&nbsp;Agregar</a>


								<input type='hidden' class='elemento__escondidoI' name='elemento__escondidoI'>


							</div>

							<div class='col col-6 d d-flex justify-content-center'>


								<a class='btn btn-info pointer__botones refrezcar__tabla' id='$parametro5' name='$parametro5'><i class='fas fa-eye' style='color: white;'></i>&nbsp;&nbsp;Ver</a>


							</div>

							<div class='$parametro8 overflow_c eliminar__en__etapas__b'>

							<table id='$parametro6'>

							

								<thead>

									<tr>

									<th colspan='18' class='uppercase__texto monto__especial__titulo'>

									<center>Rubro: Viajes</center>
									</th>
									</tr>
									
									<tr>
										<th colspan='18' class='uppercase__texto monto__especial__titulo'>
										<center>Monto: ".number_format((float)$inversionOrganismo[0][nombreInversion], 2, '.', '')."</center>
										</th>
									</tr>
							
							
									<tr class='monto__despejarEnvio'>
										<th colspan='9' class='uppercase__texto'>
										<center>Monto por asignar: ".number_format((float)$inversionRestante, 2, '.', '')."</center>
										</th>
										<th colspan='9' class='uppercase__texto'>
										<center>Monto asignado: ".number_format((float)$inversionOrganismoQueda[0][sumaItemTotal], 2, '.', '')."</center>
										</th>
									</tr>
									
									
									<tr>";


									
				$modal.= "

										<th>
										<center>Cod. Item</center>
										</th>
										<th style='width:25%!important;'>
										<center>Item</center>
										</th>
										<th style='width:25%!important;'>
										<center>Justificación de Adquisición</center>
										</th>
										<th style='width:25%!important;'>
										<center>Cantidad a Adquirir</center>
										</th>
										<th style='width:25%!important;'>
										<center> Tipo de Contratación</center>
										</th>

										<th COLSPAN=1><center>ENE</center></th>
										<th COLSPAN=1><center>FEB</center></th>
										<th COLSPAN=1><center>MAR</center></th>	
										<th COLSPAN=1><center>ABR</center></th>
										<th COLSPAN=1><center>MAY</center></th>
										<th COLSPAN=1><center>JUN</center></th>	
										<th COLSPAN=1><center>JUL</center></th>		
										<th COLSPAN=1><center>AGO</center></th>	
										<th COLSPAN=1><center>SEP</center></th>
										<th COLSPAN=1><center>OCT</center></th>
										<th COLSPAN=1><center>NOV</center></th>	
										<th COLSPAN=1><center>DIC</center></th>	



										<th COLSPAN=1><center>Total Programación Financiera</center></th>	


									</tr> 
			
								</thead>
			
								<tbody >
								
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
								
			
								</tbody>
								

							</table>

						  </div>

						</div>

					</form>

				</div>

			</div>";

			return $modal;


		}




		public function getModalConfiguracion($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7,$parametro8){

			$modal= "
			
			<div class='modal fade modal__1' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>";

			if ($parametro8=="contenedorItemsAc") {
				$modal.="<div class='modal-dialog modal-xl'>";
			}else{
				$modal.="<div class='modal-dialog modal-lg'>";
			}

			
			$modal.="	<form class='modal-content formularioConfiguracion'>

						<div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__modalItems' id='exampleModalLabel'>$parametro2</h5>

					        </div>

					        <div class='col col-1'>";

				if ($parametro1=="actividadesEditaModalAc" || $parametro1=="rubrosEditaModalAc") {

					
					$modal.="<span class='button pointer__botones botones__ideales' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>";

				}else{

					$modal.="<span class='button modales__reload pointer__botones botones__ideales' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>";

				}


				$modal.= "
					        </div>

						</div>

						<div class='modal-body row $parametro3'>

							<div class='col col-6 d d-flex justify-content-center'>

								<a class='btn btn-warning pointer__botones' id='$parametro4' name='$parametro4'><i class='fas fa-user-plus'></i>&nbsp;&nbsp;Agregar</a>

								<input type='hidden' class='elemento__escondidoI' name='elemento__escondidoI'>

							</div>

							<div class='col col-6 d d-flex justify-content-center'>

								<a class='btn btn-info pointer__botones refrezcar__tabla' id='$parametro5' name='$parametro5'><i class='fas fa-eye'></i>&nbsp;&nbsp;Ver</a>

							</div>

							<div class='$parametro8'>

							<table id='$parametro6' class='col col-12 cell-border mt-4'>

								<thead>

									<tr>";


								foreach ($parametro7 as $clave => $valor) {
								
									$modal.="<th><center>$valor</center></th>";

								}

								if ($parametro1!="actividadesEditaModalAc" &&  $parametro1!="rubrosEditaModalAc") {
									$modal.="<th>Editar</th>";
								}

								


								$modal.="<th>Eliminar</th>";

								$modal.="</tr>

								</thead>

							</table>

						  </div>

						</div>

					</form>

				</div>

			</div>";

			return $modal;


		}

		public function getModalEditargetModal($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6){

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog'>

						<form id='$parametro2' class='modal-content'>

						  <input type='hidden' class='enviado' name='enviado'/>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title'>$parametro3</h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div>

					      <div class='modal-body row'>

					      ";		



			foreach ($parametro4 as $clavePrincipal => $valorPrincipal) {

				if ($valorPrincipal=="select__1" || $valorPrincipal=="select__2" || $valorPrincipal=="select__3" || $valorPrincipal=="select__grupoG" || $valorPrincipal=="select__2Objetivos" || $valorPrincipal=="select__indiCadores"  ||  $valorPrincipal=="input__2__tipoPaid"  ||  $valorPrincipal=="input__3__tipoPaid" ||  $valorPrincipal=="input__2__rubroPaid" ||  $valorPrincipal=="input__3__rubroPaid") {

					$modal.="
						<div class='col col-4 titulo__enfasis'>$parametro5[$clavePrincipal]</div>
						<select type='text' class='$parametro4[$clavePrincipal]' name='$parametro4[$clavePrincipal]' class='col col-8 text-left'></select>
					";


				}else if($parametro5[$clavePrincipal]=="escondido"){

				$modal.="
						<input type='hidden' class='$parametro4[$clavePrincipal]' name='$parametro4[$clavePrincipal]' class='col col-8 text-left' />
					";



				}else{

					$modal.="
						<div class='col col-4 titulo__enfasis'>$parametro5[$clavePrincipal]</div>
						<input type='text' class='$parametro4[$clavePrincipal]' name='$parametro4[$clavePrincipal]'/>
					";

				}

			}


			$modal.="
							</div>

							<div class='modal-footer d d-flex justify-content-center row'>

								<div class='col col-12 d d-flex justify-content-center flex-wrap'>

									<a type='button' class='btn btn-primary  left__margen' id='$parametro6' name='$parametro6'>Editar</a>

								</div>

							</div>

						</form>

					</div>

				</div>

			";

			return $modal;

		}



		public function getModalAsignacion__paid($parametro1,$parametro2,$parametro3,$parametro4){

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog modal-xl'>

						<form id='$parametro2' class='modal-content' >

						  <input type='hidden' class='tipoPdf' id='tipoPdf' name='tipoPdf' value='asignacion__paid__presupuestarias'/>

						  <input type='hidden' class='idOrganismo' id='idOrganismo' name='idOrganismo'/>

						  <input type='hidden' id='valorComparativo' value='0'>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__asignacion__paid'></h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales modales__reload' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div>

					      <div class='modal-body row'>

					      	<table class='col col-12'>

					      		<thead>

					      		<tr>


					      	";


				foreach ($parametro3 AS $valor) {
					
					$modal.="	
						     
						      	<th class='cambio__textos'><center>".$valor."</center></th>

							 ";

				}


				$modal.="
							</tr>

							</thead>

								<tbody>

					      			<tr>";


			foreach ($parametro3 AS $key =>  $valor) {
					
				$modal.="	
					<td>
						 <input type='text' id='".$valor."' name='".$valor."' attr='".$parametro4[$key]."' class='agrupados__valores__totales ancho__total__input cambio__de__numero__f solo__numero__montos enlaces__sumas sujetos__totales' value='0'/>
						
					</td>";

			}


			$modal.="
					      			</tr>

					      		</tbody>

					      		<tfoot>

						      		<tr>

						      			<th colspan='2'>
						      				Techo presupuestario
						      			</th>


						      			<td colspan='2'>
						      				<input type='text' id='techo__presupuestario' name='techo__presupuestario' class='ancho__total__input' value='0' readonly=''/>
						      			</td>	

						      		</tr>

						      		<tr>

						      			<td colspan='2'>
						      				
						      				 <center>

						      				 	<button id='generarPdf__asignacion__paid' name='generarPdf__asignacion__paid' class='btn btn-info'>
						      				 		<i class='fa fa-download' aria-hidden='true'></i>&nbsp;&nbsp;GENERAR NOTIFICACIÓN
						      				 	</button>

						      				 </center>

						      			</td>

						      			<td colspan='2'>

						      				 <a class='enlaces__dedicados__paids'>Descargar documento</a>

						      			</td>

						      		</tr>

						      	</tfoot>


					      	</table>

						  </div>

						  <div class='modal-footer d d-flex justify-content-center row oculto__elemento__guardar'>

							<div class='col col-12 d d-flex justify-content-center flex-wrap oculto__elemento__guardar'>

								<a type='button' class='btn btn-primary oculto__elemento__guardar left__margen' id='guardarAsignacion__paid' name='guardarAsignacion__paid'>NOTIFICAR</a>

							</div>

						  </div>

						</form>

					</div>

				</div>

			";

			return $modal;

		}

		public function modalReenvioPaid($parametro1,$parametro2){

			$componentes= new componentes();

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog modal-xl'>

						<form id='$parametro2' class='modal-content' action='modelosBd/pdf/pdf.modelo.php' method='post'>

						  <input type='hidden' class='tipoPdf' id='tipoPdf' name='tipoPdf' value='asignacion__paid__presupuestarias'/>

						  <input type='hidden' class='idOrganismoPaid' id='idOrganismoPaid' name='idOrganismoPaid'/>

						  <input type='hidden' class='idOrganismo' id='idOrganismo' name='idOrganismo'/>

						   <input type='hidden' class='idUsuarioEn' id='idUsuarioEn' name='idUsuarioEn'/>

						  <input type='hidden' id='valorComparativo' value='0'>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__asignacion__paid row'>


					          </h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales modales__reload' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div>


					      <div class='modal-body row'>


					      	<div class='col col-12 row recomendacion__activo__funcionarios'></div>

					      	<div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar' class='ancho__total__input__selects'></select>
					      	</div>

					      	<div class='col col-12 ocultos__en__funcionarios'>
					      		<textarea id='observaciones' class='ancho__total__textareas' placeholder='Ingrese observación en caso de requerirlo'></textarea>
					      	</div>

						  </div>

						  <div class='modal-footer d d-flex justify-content-center row oculto__elemento__guardar ocultos__en__funcionarios'>

							<div class='col col-12 d d-flex justify-content-center flex-wrap oculto__elemento__guardar'>

								<a type='button' class='btn btn-primary oculto__elemento__guardar left__margen ocultos__en__funcionarios' id='guardarReasignacion__paid' name='guardarReasignacion__paid'>ENVIAR</a>

							</div>

						  </div>


						  <div class='modal-body row'>

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar información</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";



					   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["Mátriz PAID"],"idPaidGenera__tablets")."</div>";

					   $modal.="<div class='indicadores__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["indicadoresPaidModales"],["Indicadores"],"idIndicadoresGenera__tablets")."</div>";

					   $modal.="<div class='eventos__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["eventosPaidModales"],["Eventos"],"idVinculacionGenera__tablets")."</div>";

					   $modal.="<div class='interdisciplinario__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["interdisiplinarioModal"],["Interdisiplinario"],"idInterdisciplinarioGenera__tablets")."</div>";

					   $modal.="<div class='individuales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesIndividualesModal"],["Necesidades Individuales"],"idIndividualesGenera__tablets")."</div>";

					   $modal.="<div class='generales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesGeneralesModal"],["Necesidades Generales"],"idVinculacionGenera__generales__tablets")."</div>";

					   $modal.="<div class='encuentro__activo__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["ecuentroActivoModal"],["Encuentro Activo"],"idEncuentroActivoGenera__tablets")."</div>";

					$modal.="

							  </div>

						  </div>


						  <div class='modal-body row'>

							  <div class='col col-4 calificar__eliminantes__paid__analistas' style='font-weight:bold!important;'>Calificar</div>

							  <div class='col col-8 calificar__eliminantes__paid__analistas text-left'>
							  	<input type='checkbox' id='calificar__checkeds' class='checkeds'>
							  </div>

						  </div>

						   <div class='modal-body row  contenedor__boton__generacion__pdf__alto contenedores__pdfs'>

						   		<table class='oculto__calificaciones__altos'>

						   			<thead>

						   				<tr>


						   					<td style='text-align:justify;'>

						   						Especifíque (Ejemplo: Mediante ACUERDO MINISTERIAL Nro. 0051 de fecha 20 de febrero de 2021, ACUERDA: Artículo 1.- Expídase el “Modelo de asignación presupuestaria de la Planificación Anual de Inversión Deportiva para las organizaciones pertenecientes al Alto Rendimiento correspondiente al ejercicio fiscal 2022”, constante en el “Anexo 1” del presente Acuerdo Ministerial.) 

						   					</td>

						   					<td colspan='1' style='width:68%;'>
						   						<textarea id='especificar__textos' name='especificar__textos' class='enlace__1__alto ancho__total__textareas'></textarea>
						   					</td>

						   				</tr>

						   			</thead>


						   		</table>


						   		<table class='oculto__calificaciones__altos'>

						   			<thead>

						   				<tr>

						   					<th style='width:20px!important;'>
						   						<center>
						   							N-
						   						</center>
						   					</th>

						   					<th>
						   						<center>
						   							Condición
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organización deportiva
						   						</center>
						   					</th>

						   				</tr>

						   			</thead>

						   			<tbody>

						   				<tr>

						   					<td style='width:20px!important;'>
						   						<center>
						   							1
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Se han creado nuevos puestos de trabajo de técnicos en relación al PAID OD anterior.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='puestos__alto' name='puestos__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__1__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='puestos__alto__text' name='puestos__alto__text' class='enlace__1__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							2
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra recursos destinados para sueldos y salarios de entrenadores, equipo técnico de apoyo (monitor, instructor), y está acorde al objeto del organismo deportivo.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='recursos__destinados__alto' name='recursos__destinados__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__2__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='recursos__destinados__alto__text' name='recursos__destinados__alto__text' class='enlace__2__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							3
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra en las actividades deportivas correspondientes a la actividad concentrado, campamento, base de entrenamiento, evaluaciones y campeonato acorde a la prioridad de la disciplina deportiva.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='campamento__alto' name='campamento__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__3__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='campamento__alto__text' name='campamento__alto__text' class='enlace__3__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							4
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra concentrado, campamento, base de entrenamiento, evaluaciones y campeonatos acorde a los lineamientos del proyecto 'Fortalecimiento del deporte de alto rendimiento del Ecuador' a nivel nacional. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='campamento__evaluaciones__alto' name='campamento__evaluaciones__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__4__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='campamento__evaluaciones__alto__text' name='campamento__evaluaciones__alto__text' class='enlace__4__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							5
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra concentrado, campamento, base de entrenamiento, evaluaciones y campeonatos acorde a los lineamientos del proyecto 'Fortalecimiento del deporte de alto rendimiento del Ecuador' a nivel internacional. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='evaluaciones__campamento__alto' name='evaluaciones__campamento__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__5__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='evaluaciones__campamento__alto__text' name='evaluaciones__campamento__alto__text' class='enlace__5__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							6
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en evento de preparación y competencias autorizados en el 'Fortalecimiento del deporte de alto rendimiento del Ecuador' como : pasajes, alimentación, hospedaje, hidratación, seguro, medicinas, atención médica, movilización interna y al exterior de la delegación, Bono deportivo, hidratación, visa,  y otros que permita la normativa vigente. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='recursos__gastos__alto' name='recursos__gastos__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__6__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='recursos__gastos__alto__text' name='recursos__gastos__alto__text' class='enlace__6__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							7
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La planificación operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='deportiva__enmarcada__alto' name='deportiva__enmarcada__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__7__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='deportiva__enmarcada__alto__text' name='deportiva__enmarcada__alto__text' class='enlace__7__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

				   						<tr>

						   					<td>
						   						<center>
						   							8
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, artículos requeridos de cada implemento y equipo deportivo. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='cubrir__necesedidades__alto' name='cubrir__necesedidades__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__8__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='cubrir__necesedidades__alto__text' name='cubrir__necesedidades__alto__text' class='enlace__8__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>


				   						<tr>

						   					<td>
						   						<center>
						   							9
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La Planificación Anual de Inversión Deportiva de la Organización Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='planificacion__anual__alto' name='planificacion__anual__alto' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__9__alto'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='planificacion__anual__alto__text' name='planificacion__anual__alto__text' class='enlace__9__alto ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>


						   			</tbody>

						   			<tfoot>

						   				<tr>

						   					<th colspan='4'>

						   						<center>

						   							<a id='calificar__secciones__alto' class='btn btn-warning' style='color:white!important;'>
						   								CALIFICAR
						   							</a>

						   						</center>

						   					</th>

						   				</tr>

						   			</tfoot>

						   		</table>

						   </div>

						   <div class='modal-body  row contenedor__boton__generacion__pdf__desarrollo contenedores__pdfs'>

						   		<table style='width:100%!important;' class='oculto__calificaciones__desarrollos'>

						   			<thead>

						   				<tr>

						   					<th style='width:10px!important;'>
						   						<center>
						   							N-
						   						</center>
						   					</th>

						   					<th>
						   						<center>
						   							Condición
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organización deportiva
						   						</center>
						   					</th>

						   				</tr>

						   			</thead>

						   			<tbody>

						   				<tr>

						   					<td>
						   						<center>
						   							1
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra en las actividades deportivas correspondientes a la actividad concentrado, campamento, base de entrenamiento, evaluaciones y campeonato acorde a la prioridad de la disciplina deportiva.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='deportivas__desarrollo' name='deportivas__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__1__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='deportivas__desarrollo__text' name='deportivas__desarrollo__text' class='enlace__1__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							2
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra sus actividades en base a los requerimientos para la ejecución de los eventos deportivos.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='campamento__desarrollo' name='campamento__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__2__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='campamento__desarrollo__text' name='campamento__desarrollo__text' class='enlace__2__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							3
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Establece sus actividades en base a lo necesario para generar procesos formativos. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='procesos__desarrollo' name='procesos__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__3__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='procesos__desarrollo__text' name='procesos__desarrollo__text' class='enlace__3__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							4
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en evento de preparación y competencias autorizados en el 'ENCUENTRO ACTIVO DEL DEPORTE PARA EL DESARROLLO ' como: pasajes, alimentación, hospedaje, hidratación, seguro, medicinas, atención médica, movilización interna y al exterior de la delegación, Bono deportivo, hidratación, visa,  y otros que permita la normativa vigente.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='gastos__evento__desarrollo' name='gastos__evento__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__4__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='gastos__evento__desarrollo__text' name='gastos__evento__desarrollo__text' class='enlace__4__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							5
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La planificación operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='operativa__anual__desarrollo' name='operativa__anual__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__5__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='operativa__anual__desarrollo__text' name='operativa__anual__desarrollo__text' class='enlace__5__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							6
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, artículos requeridos de cada implemento y equipo deportivo. 
						   					</td>

						   					<td>
						   						<center>
						   							<select id='recursos__desarrollo' name='recursos__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__6__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='recursos__desarrollo__text' name='recursos__desarrollo__text' class='enlace__6__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							7
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La Planificación Anual de Inversión Deportiva de la Organización Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente.
						   					</td>

						   					<td>
						   						<center>
						   							<select id='anual__inversion__desarrollo' name='anual__inversion__desarrollo' class='conjunto__selects__desarrollo ancho__total__input__selects enlace__7__desarrollo'>

						   								<option value='0'>--Seleccione--</option>
						   								<option value='Si'>Si</option>
						   								<option value='No'>No</option>
						   								<option value='N-A'>N-A</option>

						   							</select>
						   						</center>
						   					</td>


						   					<td>
						   						<center>
						   							<textarea id='anual__inversion__desarrollo__text' name='anual__inversion__desarrollo__text' class='enlace__7__desarrollo ancho__total__textareas'></textarea>
						   						</center>
						   					</td>

						   				</tr>


						   			</tbody>

						   			<tfoot>

						   				<tr>

						   					<th colspan='4'>

						   						<center>

						   							<a id='calificar__secciones__desarrollo' class='btn btn-warning' style='color:white!important;'>
						   								CALIFICAR
						   							</a>

						   						</center>

						   					</th>

						   				</tr>

						   			</tfoot>

						   		</table>

						   </div>

						  <div class='modal-body row contenedor__boton__negacion anulacion_ocultando'>

						  	<div class='col col-12'>
					      		<textarea id='observaciones__recomendaciones__recomiendas__negacion' class='ancho__total__textareas' placeholder='Ingrese observación general de negación en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-12 text-center'>
						  		<a type='button' class='btn btn-info oculto__elemento__guardar left__margen' id='guardarNegacion__paid' name='guardarNegacion__paid'>OBSERVAR</a>
						  	</div>

						  </div>

						  <div class='modal-body row contenedor__boton__recomendacion recomendacion__ocultando'>

		

						  	<div class='col col-12'>
					      		<textarea id='observaciones__recomendaciones__recomiendas' name='observaciones__recomendaciones__recomiendas' class='ancho__total__textareas' placeholder='Ingrese observación de recomendación en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-12'>
					      		<textarea id='concluciones__recomendaciones__recomiendas' name='concluciones__recomendaciones__recomiendas' class='ancho__total__textareas' placeholder='Ingrese conclusión'></textarea>
					      	</div>

					      	<div class='col col-8' style='font-weight:bold!important; oculto__archivos__recomendaciones'>
						  		<div class='oculto__archivos__recomendaciones'>Generar informe</div>
						  	</div>

						  	<div class='col col-4 oculto__archivos__recomendaciones'>
					      		<input type='submit' id='generarPdfs__informe' name='generarPdfs__informe' class='oculto__archivos__recomendaciones btn btn-success' value='Generar'/>
					      	</div>

					  		<div class='col col-8' style='font-weight:bold!important; oculto__archivos__recomendaciones'>
						  		<div class='oculto__archivos__recomendaciones'>Subir informe</div>
						  	</div>

						  	<div class='col col-4 oculto__archivos__recomendaciones'>
					      		<input type='file' id='archivoRecomendacion' name='archivoRecomendacion' class='oculto__archivos__recomendaciones'/>
					      	</div>


						  	<div class='col col-12 text-center'>
						  		<a type='button' class='btn btn-info oculto__elemento__guardar left__margen' id='guardarRecomendacion__paid' name='guardarRecomendacion__paid'>RECOMENDAR</a>
						  	</div>

						  </div>

						</form>

					</div>

				</div>

			";

			return $modal;

		}

		public function modalReenvioPaid__recomiendas($parametro1,$parametro2){

			$componentes= new componentes();

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog modal-xl'>

						<form id='$parametro2' class='modal-content' >

						  <input type='hidden' class='tipoPdf' id='tipoPdf' name='tipoPdf' value='asignacion__paid__presupuestarias'/>

						  <input type='hidden' class='idOrganismoPaid' id='idOrganismoPaid' name='idOrganismoPaid'/>

						  <input type='hidden' id='valorComparativo' value='0'>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__asignacion__paid'></h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales modales__reload' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div> 

  						  <div class='modal-body row'>

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar información</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";

							   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["Mátriz PAID"],"idPaidGenera__tablets")."</div>";

							   $modal.="<div class='indicadores__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["indicadoresPaidModales"],["Indicadores"],"idIndicadoresGenera__tablets")."</div>";

							   $modal.="<div class='eventos__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["eventosPaidModales"],["Eventos"],"idVinculacionGenera__tablets")."</div>";

							   $modal.="<div class='interdisciplinario__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["interdisiplinarioModal"],["Interdisiplinario"],"idInterdisciplinarioGenera__tablets")."</div>";

							   $modal.="<div class='individuales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesIndividualesModal"],["Necesidades Individuales"],"idIndividualesGenera__tablets")."</div>";

							   $modal.="<div class='generales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesGeneralesModal"],["Necesidades Generales"],"idVinculacionGenera__generales__tablets")."</div>";

							   $modal.="<div class='encuentro__activo__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["ecuentroActivoModal"],["Encuentro Activo"],"idEncuentroActivoGenera__tablets")."</div>";

								$modal.="

							  </div>

						  </div>						  

						  <div class='modal-body row ocultando__necesarios__directores'>

							  <div class='col col-4' style='font-weight:bold!important;'>Asignar</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='asignar__directorPlanificacion' class='checkeds'>
							  </div>

						  </div>

					  	  <div class='modal-body row ocultando__necesarios__directores'>

							  <div class='col col-4' style='font-weight:bold!important;'>Aprobar</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='aprobar__directorPlanificacion' class='checkeds'>
							  </div>

						  </div>


					      <div class='modal-body row'>

					      	<div class='col col-12 row recomendacion__activo__funcionarios'></div>

					        <div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar__plani__analistas' class='ancho__total__input__selects ocultos__en__funcionarios__paids'></select>
					      	</div>


					        <div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar__plani__directores' class='ancho__total__input__selects contenido__asignaciones__directores'></select>
					      	</div>


					        <div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar__plani__coordinadores' class='ancho__total__input__selects'></select>
					      	</div>

					      	<div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar__contrarios' class='ancho__total__input__selects'></select>
					      	</div>

					      	<div class='col col-12 ocultos__en__funcionarios'>
					      		<select id='selectorUsuarios__asignar__contrarios__subsecretarias' class='ancho__total__input__selects'></select>
					      	</div>

					      	<div class='col col-12 ocultos__en__funcionarios'>
					      		<textarea id='observaciones' class='ancho__total__textareas ocultos__en__funcionarios__paids contenido__asignaciones__directores' placeholder='Ingrese observación en caso de requerirlo'></textarea>
					      	</div>

							  <div class='col col-8 contenido__asignaciones__directores' style='font-weight:bold!important;'>
							  	<div class='contenido__asignaciones__directores'>Descargar informe</div>
							  </div>


							  <div class='col col-4 contenido__asignaciones__directores'>
						      	<a  id='informeEnlacesDescargar' name='informeEnlacesDescargar' class='contenido__asignaciones__directores' target='_blank'>Descargar documento (click aquí)</a>
						      </div>



							  <div class='col col-8' style='font-weight:bold!important; oculto__archivos__recomendaciones__de__finales'>
							  	<div class='oculto__archivos__recomendaciones__de__finales'>Subir informe</div>
							  </div>

							  <div class='col col-4 oculto__archivos__recomendaciones__de__finales'>
						      	<input type='file' id='archivoRecomendacion' name='archivoRecomendacion' class='oculto__archivos__recomendaciones__de__finales'/>
						      </div>


						  </div>

						  <div class='modal-footer d d-flex justify-content-center row oculto__elemento__guardar ocultos__en__funcionarios'>

							<div class='col col-12 d d-flex justify-content-center flex-wrap oculto__elemento__guardar'>

								<a type='button' class='btn btn-primary oculto__elemento__guardar left__margen ocultos__en__funcionarios ocultos__en__funcionarios__paids contenido__asignaciones__directores' id='guardarReasignacion__paid__recomendacion' name='guardarReasignacion__paid__recomendacion'>ENVIAR</a>

							</div>

						  </div>

						  <div class='modal-body row contenedor__boton__recomendacion__finales'>

						  	<div class='col col-12 contenido__asignaciones__directores__apruebas'>
					      		<textarea id='observaciones__recomendaciones__recomiendas__final' class='ancho__total__textareas contenido__asignaciones__directores__apruebas' placeholder='Ingrese observación de recomendación en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-4 text-cenrter file__final__paid contenido__asignaciones__directores__apruebas' style='font-weight:bold;'>
						  		Subir resolución de aprobación
						  	</div>



						  	<div class='col col-8 text-cenrter file__final__paid contenido__asignaciones__directores__apruebas'>
						  		<input type='file' id='resolucion__aprobacion' name='resolucion__aprobacion' class='oculto__elemento__guardar contenido__asignaciones__directores__apruebas'>
						  	</div>


						  	<div class='col col-12 text-center contenido__asignaciones__directores__apruebas'>
						  		<a type='button' class='btn btn-info oculto__elemento__guardar left__margen contenido__asignaciones__directores__apruebas' id='guardarRecomendacion__final__paid' name='guardarRecomendacion__final__paid'>APROBAR</a>
						  	</div>

						  </div>


						  <div class='modal-body row contenedor__boton__recomendacion__finales'>

						  	<div class='col col-12 recomendacion__analista__director__planificaciones'>
					      		<textarea id='observa__recomienda__directores__planificacion' class='ancho__total__textareas recomendacion__analista__director__planificaciones' placeholder='Ingrese observación de recomendación en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-12 text-center recomendacion__analista__director__planificaciones'>
						  		<a type='button' class='btn btn-info oculto__elemento__guardar left__margen recomendacion__analista__director__planificaciones' id='guardarRecomendacion__director__planificacion__analista' name='guardarRecomendacion__director__planificacion__analista'>RECOMENDAR</a>
						  	</div>

						  </div>

						</form>

					</div>

				</div>

			";

			return $modal;

		}

		public function modalReenvioPaid__niegas($parametro1,$parametro2){

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog modal-xl'>

						<form id='$parametro2' class='modal-content' >

						  <input type='hidden' class='tipoPdf' id='tipoPdf' name='tipoPdf' value='asignacion__paid__presupuestarias'/>

						  <input type='hidden' class='idOrganismoPaid' id='idOrganismoPaid' name='idOrganismoPaid'/>

						  <input type='hidden' id='valorComparativo' value='0'>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__asignacion__paid'></h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales modales__reload' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div>

					      <div class='modal-body row'>
					      	<input type='hidden' id='idOrganismoPaid' name='idOrganismoPaid' />

					      	<a class='btn btn-primary' id='enviarObservacionesOrganismoDeportivo'>
					      		Notificar
					      	</a>

					      </div>

						   <div class='modal-body row'>

						   		<table class='oculto__calificaciones__altos__negados'>

						   			<thead>

						   				<tr>

						   					<th>
						   						<center>
						   							N-
						   						</center>
						   					</th>

						   					<th>
						   						<center>
						   							Condición
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organización deportiva
						   						</center>
						   					</th>

						   				</tr>

						   			</thead>

						   			<tbody>

						   				<tr>

						   					<td>
						   						<center>
						   							1
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Se han creado nuevos puestos de trabajo de técnicos en relación al PAID OD anterior.
						   					</td>

						   					<td class='observacion__1'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__1'>
						   						<center>
						   							
						   						</center>
						   					</td>

						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							2
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra recursos destinados para sueldos y salarios de entrenadores, equipo técnico de apoyo (monitor, instructor), y está acorde al objeto del organismo deportivo.
						   					</td>

				   							<td class='observacion__2'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__2'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							3
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra en las actividades deportivas correspondientes a la actividad concentrado, campamento, base de entrenamiento, evaluaciones y campeonato acorde a la prioridad de la disciplina deportiva.
						   					</td>

				   							<td class='observacion__3'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__3'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							4
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra concentrado, campamento, base de entrenamiento, evaluaciones y campeonatos acorde a los lineamientos del proyecto 'Fortalecimiento del deporte de alto rendimiento del Ecuador' a nivel nacional. 
						   					</td>

					   						<td class='observacion__4'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__4'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							5
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra concentrado, campamento, base de entrenamiento, evaluaciones y campeonatos acorde a los lineamientos del proyecto 'Fortalecimiento del deporte de alto rendimiento del Ecuador' a nivel internacional. 
						   					</td>

				   							<td class='observacion__5'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__5'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							6
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en evento de preparación y competencias autorizados en el 'Fortalecimiento del deporte de alto rendimiento del Ecuador' como : pasajes, alimentación, hospedaje, hidratación, seguro, medicinas, atención médica, movilización interna y al exterior de la delegación, Bono deportivo, hidratación, visa,  y otros que permita la normativa vigente. 
						   					</td>

				   							<td class='observacion__6'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__6'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							7
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La planificación operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
						   					</td>

				   							<td class='observacion__7'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__7'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

				   						<tr>

						   					<td>
						   						<center>
						   							8
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, artículos requeridos de cada implemento y equipo deportivo. 
						   					</td>

				   							<td class='observacion__8'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__8'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>


				   						<tr>

						   					<td>
						   						<center>
						   							9
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La Planificación Anual de Inversión Deportiva de la Organización Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente. 
						   					</td>

				   							<td class='observacion__9'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__9'>
						   						<center>
						   							
						   						</center>
						   					</td>

						   				</tr>


						   			</tbody>


						   		</table>

						   </div>

						   <div class='modal-body  row'>

						   		<table class='oculto__calificaciones__desarrollos__negados'>

						   			<thead>

						   				<tr>

						   					<th style='width:10px!important;'>
						   						<center>
						   							N-
						   						</center>
						   					</th>

						   					<th>
						   						<center>
						   							Condición
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organización deportiva
						   						</center>
						   					</th>

						   				</tr>

						   			</thead>

						   			<tbody>

						   				<tr>

						   					<td>
						   						<center>
						   							1
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra en las actividades deportivas correspondientes a la actividad concentrado, campamento, base de entrenamiento, evaluaciones y campeonato acorde a la prioridad de la disciplina deportiva.
						   					</td>

				   							<td class='observacion__1'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__1'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							2
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Registra sus actividades en base a los requerimientos para la ejecución de los eventos deportivos.
						   					</td>

				   							<td class='observacion__2'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__2'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							3
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Establece sus actividades en base a lo necesario para generar procesos formativos. 
						   					</td>

				   							<td class='observacion__3'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__3'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							4
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en evento de preparación y competencias autorizados en el 'ENCUENTRO ACTIVO DEL DEPORTE PARA EL DESARROLLO ' como: pasajes, alimentación, hospedaje, hidratación, seguro, medicinas, atención médica, movilización interna y al exterior de la delegación, Bono deportivo, hidratación, visa,  y otros que permita la normativa vigente.
						   					</td>

				   							<td class='observacion__4'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__4'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							5
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La planificación operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
						   					</td>

				   							<td class='observacion__5'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__5'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							6
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, artículos requeridos de cada implemento y equipo deportivo. 
						   					</td>

				   							<td class='observacion__6'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__6'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>

						   				<tr>

						   					<td>
						   						<center>
						   							7
						   						</center>
						   					</td>

						   					<td style='text-align:justify!important;'>
						   						La Planificación Anual de Inversión Deportiva de la Organización Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente.
						   					</td>

				   							<td class='observacion__7'>
						   						<center>
													
						   						</center>
						   					</td>


						   					<td class='comentario__7'>
						   						<center>
						   							
						   						</center>
						   					</td>


						   				</tr>


						   			</tbody>
						   		</table>

						   </div>					      	

						</form>

					</div>

				</div>

			";

			return $modal;

		}

		public function modalReenvioPaid__recomiendas__final__recomiendas($parametro1,$parametro2){

			$componentes= new componentes();

			$modal="

				<div class='modal fade' id='$parametro1' aria-hidden='true'  data-backdrop='static' data-keyboard='false' tabindex='-1'>

					<div class='modal-dialog modal-xl'>

						<form id='$parametro2' class='modal-content' >

						  <input type='hidden' class='tipoPdf' id='tipoPdf' name='tipoPdf' value='asignacion__paid__presupuestarias'/>

						  <input type='hidden' class='idOrganismoPaid' id='idOrganismoPaid' name='idOrganismoPaid'/>

						  <input type='hidden' id='valorComparativo' value='0'>

					      <div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__asignacion__paid'></h5>

					        </div>

					        <div class='col col-1'>

					        <span class='button pointer__botones botones__ideales modales__reload' data-dismiss='modal' aria-label='Close' aria-label='Close'><i class='fas fa-times-circle'></i></span>

					        </div>

					      </div> 

  						  <div class='modal-body row'>

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar información</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";

							   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["Mátriz PAID"],"idPaidGenera__tablets")."</div>";

							   $modal.="<div class='indicadores__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["indicadoresPaidModales"],["Indicadores"],"idIndicadoresGenera__tablets")."</div>";

							   $modal.="<div class='eventos__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["eventosPaidModales"],["Eventos"],"idVinculacionGenera__tablets")."</div>";

							   $modal.="<div class='interdisciplinario__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["interdisiplinarioModal"],["Interdisiplinario"],"idInterdisciplinarioGenera__tablets")."</div>";

							   $modal.="<div class='individuales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesIndividualesModal"],["Necesidades Individuales"],"idIndividualesGenera__tablets")."</div>";

							   $modal.="<div class='generales__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["necesidadesGeneralesModal"],["Necesidades Generales"],"idVinculacionGenera__generales__tablets")."</div>";

							   $modal.="<div class='encuentro__activo__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["ecuentroActivoModal"],["Encuentro Activo"],"idEncuentroActivoGenera__tablets")."</div>";

								$modal.="

							  </div>

						  </div>	

						  <div class='modal-body row'>					  
					  		<table> 

						  		<tr> 

						  			<th> 
						  				<center> 
						  					Informe
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Oficio
						  				</center> 
						  			</th>

						  		</tr>

						  		<tbody class='informesOficios'>	

				  				<tr> 

						  			<td class='informe__ante'> 
			
						  			</td>

						  			<td class='oficio__ante'> 
						  				
						  			</td>

						  		</tr>

						  		</tbody>	

						  	</table>


						  	<table> 

						  		<tr> 

						  			<th> 
						  				<center> 
						  					Área
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Fecha Hora
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Acción
						  				</center> 
						  			</th>

		  							<th> 
						  				<center> 
						  					De
						  				</center> 
						  			</th>

		  							<th> 
						  				<center> 
						  					Para
						  				</center> 
						  			</th>


		  							<th> 
						  				<center> 
						  					Nro. días
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Comentario
						  				</center> 
						  			</th>

						  		</tr>

						  		<tbody class='contenedor__contenidos'>	

						  		</tbody>	

						  	</table>



						  </div>	

						</form>

					</div>

				</div>

			";

			return $modal;

		}


	}