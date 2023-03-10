<?php

	class componentesPaid{
		

		public function getModalIndicadorPaid($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7,$parametro8,$parametro9){

			$modal="
			<div class='modal fade modal__ItemsGrup' id='$parametro1' aria-hidden='true'>

				<div class='modal-dialog modal-lg'>

					<form class='modal-content $parametro2'>

						<div class='modal-header row'>

					        <div class='col' style='z-index: 1;'>

					          <h5 class='modal-title' id='modalTitulo'>$parametro3<br><span class='asignado__titulos'></span></h5>

					        </div>

					        <div class='col col-1' style='z-index: 2;'>

							<button type='button' class='btn-close modales_reload pointer_botones' data-bs-dismiss='modal' aria-label='Close'><i class='far fa-times-circle'></i></button>

					        </div>

						</div>

						<div class='modal-body row'>

							<input type='hidden' class='idOrganismo' name='idOrganismo'/>

							<input type='hidden' class='idAtributoEscondido' name='idAtributoEscondido'/>

						";


			foreach ($parametro5 as $clave => $valor) {

				if ($parametro7[$clave]=="input") {

					if ($parametro8[$clave]=="disabled") {

						$modal.="

						<div class='col col-4 titulo__enfasis mt-2'>
							$parametro5[$clave]
						</div>


						<div class='col col-8 mt-2'>
							<input type='text' class='$parametro6[$clave] ancho__total__input solo__numero campos__obligatorios text-center' name='$parametro6[$clave]' readonly='readonly' value='0'/>
						</div>

						";

					
					}else if ($parametro8[$clave]=="numero") {

						$modal.="

						<div class='col col-4 titulo__enfasis mt-2'>
							$parametro5[$clave]
						</div>


						<div class='col col-8 mt-2'>
							<input type='text' class='$parametro6[$clave] ancho__total__input solo__numero campos__obligatorios text-center' name='$parametro6[$clave]' value='0'/>
						</div>

						";

					}else if($parametro8[$clave]=="monto"){


						$modal.="

						<div class='col col-4 titulo__enfasis mt-2'>
							$parametro5[$clave]
						</div>


						<div class='col col-8 mt-2'>
							<input type='text' class='$parametro6[$clave] ancho__total__input solo__numero__montos campos__obligatorios text-center' name='$parametro6[$clave]' value='0.00'/>
						</div>

						";						
						
					}else{

						$modal.="

						<div class='col col-4 titulo__enfasis mt-2'>
							$parametro5[$clave]
						</div>


						<div class='col col-8 mt-2'>
							<input type='text' class='$parametro6[$clave] ancho__total__input campos__obligatorios text-center' name='$parametro6[$clave]'/>
						</div>

						";

					}
		

				}else if($parametro7[$clave]=="boton"){

					$modal.="

						<div class='col col-10 titulo__enfasis mt-2'>
							$parametro5[$clave]
						</div>

						<div class='col col-2 mt-2 text-center'>
							<a data-bs-toggle='modal' data-bs-target='#$parametro6[$clave]' class='btn btn-secondary botonAc$parametro6[$clave]'><i class='fas fa-address-card'></i>&nbsp;&nbsp;Agregar</a>'
						</div>

						";						

				}else if($parametro7[$clave]=="select"){

					$modal.="

					<div class='col col-12 titulo__enfasis mt-2'>
						$parametro5[$clave]
					</div>

					<div class='col col-12 mt-2'>
						<select class='$parametro6[$clave] ancho__total__input campos__obligatorios' name='$parametro6[$clave]'></select>
					</div>

					";				

				}else if($parametro7[$clave]=="file"){



					$modal.="

					<div class='col col-12 titulo__enfasis mt-2'>
						$parametro5[$clave]
					</div>

					<div class='col col-12 mt-2'>
						<input type='file' class='$parametro6[$clave] ancho__total__input campos__obligatorios' name='$parametro6[$clave]' accept='application/pdf'/>
					</div>

					";				

				}else if ($parametro8[$clave]=="textos") {
						
					$modal.="

					<div class='col col-12 titulo__enfasis mt-2 uppercase__texto text-center textos__titulazos'>
						
					</div>

					";


				}


			}

			$modal.="
					</div>

						<div class='modal-footer d d-flex justify-content-center row'>

							<div class='col col-12 d d-flex justify-content-center flex-wrap'>

								<a type='button' class='btn btn-primary  left__margen boton__enlacesOcultos' id='$parametro4' name='$parametro4'>$parametro9</a>

								&nbsp;&nbsp;&nbsp;&nbsp;

								<a type='button' class='btn btn-danger  left__margen modales__reload pointer__botones' data-dismiss='modal' aria-label='Close' aria-label='Close'>CERRAR</a>


							</div>

							<div class='col col-1 reload__Enviosrealizados text-center'></div>

						</div>

					</form>

				</div>

			</div>
			";

			return $modal;

		} 


		public function getModalGeneralRubroPaid($parametro1,$parametro2,$parametro3,$parametro4){

			$modal= "
			
			<div class='modal fade modal__1' id='$parametro1' aria-hidden='true' data-backdrop='static' data-keyboard='false' tabindex='-1'>
			
			<div class='modal-dialog modal-xl'>
			
			<form class='modal-content formularioConfiguracion'>

						<div class='modal-header row'>

					        <div class='col' style='z-index: 1;'>

					        	<h5 class='modal-title titulo__modalItems' id='exampleModalLabel'>$parametro2</h5>

					        </div>

					        <div class='col col-1' style='z-index: 2;'>
							


								<button type='button' class='btn-close pointer__botones' data-bs-dismiss='modal' aria-label='Close'><i class='far fa-times-circle'></i></button>

							
							</div>

						</div>
							

						<div class='modal-body row $parametro3'>

							<table class='cell-border' >

								<thead>

									
									<tr>

										<th>
										<center>Cod. Rubro</center>
										</th>

										<th style='width:15%!important;'>
										<center>Rubro</center>
										</th>

										<th style='width:15%!important;'>
										<center>Monto</center>
										</th>

										<th style='width:15%!important;'>
										<center>Valor Asignado</center>
										</th>

										<th style='width:15%!important;'>
										<center>Valor por Asignar</center>
										</th>

										<th style='width:15%!important;'>
										<center>Items</center>
										</th>

										
									
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
										<center style='font-size: 14px;'>Viajes</center>
										</td>
										<td>
										<center style='font-size: 14px;'>Viajes</center>
										</td>
										<td>
										<center style='font-size: 14px;'>Viajes</center>
										</td>
										<td>

										$parametro4
										
										</td>


									</tr>
								
			
								</tbody>
								

							</table>

						

						</div>

					</form>

				</div>

			</div>";

			return $modal;

			


		}


		public function getModalGeneralPaid($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7,$parametro8){

			$modal= "
			
			<div class='modal fade modal__1' id='$parametro1' aria-hidden='true' data-backdrop='static' data-keyboard='false' tabindex='-1'>";

			$modal.="<div class='modal-dialog modal-lg'>";

			
			$modal.="	<form class='modal-content formularioConfiguracion'>

						<div class='modal-header row'>

					        <div class='col' style='z-index: 1;'>

					        	<h5 class='modal-title titulo__modalItems' id='exampleModalLabel'>$parametro2: Viajes</h5>

					        </div>

					        <div class='col col-1' style='z-index: 2;'>
							

								<button type='button' class='btn-close pointer__botones' data-bs-dismiss='modal' aria-label='Close'><i class='far fa-times-circle'></i></button>
							
							</div>

						</div>
							
							";

				

				$modal.= "

						<div class='modal-body row $parametro3'>

							<div class='col col-6 d d-flex justify-content-center'>

								<a class='btn btn-warning pointer__botones' id='$parametro4' name='$parametro4'><i class='fas fa-th-list'></i>&nbsp;&nbsp;Agregar</a>

								<input type='hidden' class='elemento_escondidoI' name='elemento_escondidoI'>


							</div>

							<div class='col col-6 d d-flex justify-content-center'>



								<a class='btn btn-info pointer__botones refrezcar__tabla' id='$parametro5' name='$parametro5'><i class='fas fa-eye' style='color: white;'></i>&nbsp;&nbsp;Ver</a>



							</div>


							<div class='$parametro8 overflow_c eliminar__en__etapas__b'>


							<table id='$parametro6' class='cell-border' >

							

								<thead>
									<tr>";
										
				$modal.= "

										<th>
										<center>Cod. Item</center>
										</th>

										<th style='width:15%!important;'>
										<center>Item</center>
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


										<th COLSPAN=1><center>Total</center></th>	

										<th COLSPAN=1><center>Guardar</center></th>	


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
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225 solo__numero__montos' value='0'  style='width:40px;'>

										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>

										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>

										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>

										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>
										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>

										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>
										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>
										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>
										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>
										</center>
										</td>

										<td>
										<center style='font-size: 14px;'>

										<input type='text' class='enero37225 meses__atados37225  meses__atadosAjax37225' value='0'  style='width:40px;'>

										</center>
										</td>


										<td>
										<center style='font-size: 14px;'>200</center>
										</td>


										
										<td>
										<center><button id='guardarMatriz37225'  class='btn btn-primary'><i class='fas fa-save'></i></button>
										</center>
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

				if ($parametro1=="actividadesEditaModalAc" || $parametro1=="rubrosEditaModalAc" || $parametro1=="rubrosEditaModalComponentes") {

					
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

								if ($parametro1!="actividadesEditaModalAc" &&  $parametro1!="rubrosEditaModalAc" &&  $parametro1!="rubrosEditaModalComponentes") {
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

			$objeto= new usuarioAcciones();
			$array = array();

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


					      	";

					foreach ($parametro3 as $clave =>  $valor) {

						$arrayInformacionPaid=$objeto->getObtenerInformacionGeneral("SELECT a.idRubros,b.nombreRubros FROM poa_paid_componentes_rubros AS a INNER JOIN poa_paid_rubros AS b ON a.idRubros=b.idRubros WHERE a.idComponente='".$valor."';");

						foreach ($arrayInformacionPaid as $valor2) {
							array_push($array, $valor2["idRubros"]);
						}

						$contador=count($array);


						$modal.="

						<table class='col col-12'>

							<thead>

								<tr>

									<th colspan='$contador'>".strtoupper($parametro4[$clave])."</th>

								</tr>

							</thead>

							<tbody>

								<tr>

							";


							foreach ($arrayInformacionPaid as $valor2) {

								$modal.="

								<th>".strtoupper($valor2["nombreRubros"])."</th>

								";

							}

				$modal.="
								</tr>";

				$modal.="<tr>";

					foreach ($arrayInformacionPaid as $valor3) {

						$modal.="

						<td>
							<input type='text' id='rubro".$valor3["idRubros"]."' name='rubro".$valor3["idRubros"]."' attr='".$valor3["idRubros"]."' attrcomponentes='".$valor."' class='agrupados__valores__totales ancho__total__input cambio__de__numero__f solo__numero__montos enlaces__sumas sujetos__totales' value='0'/>
						</td>

						";

					}

				$modal.="</tr>";


				$modal.=	"</tbody>


						</table>";

					}
					

				$modal.="		

						<table>

					      		<tfoot>

						      		<tr>

						      			<th colspan='1'>
						      				Techo asignado
						      			</th>


						      			<td colspan='1'>
						      				<input type='text' id='techo__presupuestario' name='techo__presupuestario' class='ancho__total__input' value='0' readonly=''/>
						      			</td>	

						      		</tr>

						      		<tr>

						      			<td colspan='1'>
						      				
						      				 <center>

						      				 	<button id='generarPdf__asignacion__paid' name='generarPdf__asignacion__paid' class='btn btn-info'>
						      				 		<i class='fa fa-download' aria-hidden='true'></i>&nbsp;&nbsp;GENERAR NOTIFICACI??N
						      				 	</button>

						      				 </center>

						      			</td>

						      			<td colspan='1'>

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
					      		<textarea id='observaciones' class='ancho__total__textareas' placeholder='Ingrese observaci??n en caso de requerirlo'></textarea>
					      	</div>

						  </div>

						  <div class='modal-footer d d-flex justify-content-center row oculto__elemento__guardar ocultos__en__funcionarios'>

							<div class='col col-12 d d-flex justify-content-center flex-wrap oculto__elemento__guardar'>

								<a type='button' class='btn btn-primary oculto__elemento__guardar left__margen ocultos__en__funcionarios' id='guardarReasignacion__paid' name='guardarReasignacion__paid'>ENVIAR</a>

							</div>

						  </div>


						  <div class='modal-body row'>

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar informaci??n</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";



					   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["M??triz PAID"],"idPaidGenera__tablets")."</div>";

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

						   						Especif??que (Ejemplo: Mediante ACUERDO MINISTERIAL Nro. 0051 de fecha 20 de febrero de 2021, ACUERDA: Art??culo 1.- Exp??dase el ???Modelo de asignaci??n presupuestaria de la Planificaci??n Anual de Inversi??n Deportiva para las organizaciones pertenecientes al Alto Rendimiento correspondiente al ejercicio fiscal 2022???, constante en el ???Anexo 1??? del presente Acuerdo Ministerial.) 

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
						   							Condici??n
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organizaci??n deportiva
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
						   						Se han creado nuevos puestos de trabajo de t??cnicos en relaci??n al PAID OD anterior.
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
						   						Registra recursos destinados para sueldos y salarios de entrenadores, equipo t??cnico de apoyo (monitor, instructor), y est?? acorde al objeto del organismo deportivo.
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
						   						Utiliza recursos para cubrir gastos en evento de preparaci??n y competencias autorizados en el 'Fortalecimiento del deporte de alto rendimiento del Ecuador' como : pasajes, alimentaci??n, hospedaje, hidrataci??n, seguro, medicinas, atenci??n m??dica, movilizaci??n interna y al exterior de la delegaci??n, Bono deportivo, hidrataci??n, visa,  y otros que permita la normativa vigente. 
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
						   						La planificaci??n operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
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
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, art??culos requeridos de cada implemento y equipo deportivo. 
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
						   						La Planificaci??n Anual de Inversi??n Deportiva de la Organizaci??n Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente. 
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
						   							Condici??n
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organizaci??n deportiva
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
						   						Registra sus actividades en base a los requerimientos para la ejecuci??n de los eventos deportivos.
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
						   						Utiliza recursos para cubrir gastos en evento de preparaci??n y competencias autorizados en el 'ENCUENTRO ACTIVO DEL DEPORTE PARA EL DESARROLLO ' como: pasajes, alimentaci??n, hospedaje, hidrataci??n, seguro, medicinas, atenci??n m??dica, movilizaci??n interna y al exterior de la delegaci??n, Bono deportivo, hidrataci??n, visa,  y otros que permita la normativa vigente.
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
						   						La planificaci??n operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
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
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, art??culos requeridos de cada implemento y equipo deportivo. 
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
						   						La Planificaci??n Anual de Inversi??n Deportiva de la Organizaci??n Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente.
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
					      		<textarea id='observaciones__recomendaciones__recomiendas__negacion' class='ancho__total__textareas' placeholder='Ingrese observaci??n general de negaci??n en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-12 text-center'>
						  		<a type='button' class='btn btn-info oculto__elemento__guardar left__margen' id='guardarNegacion__paid' name='guardarNegacion__paid'>OBSERVAR</a>
						  	</div>

						  </div>

						  <div class='modal-body row contenedor__boton__recomendacion recomendacion__ocultando'>

		

						  	<div class='col col-12'>
					      		<textarea id='observaciones__recomendaciones__recomiendas' name='observaciones__recomendaciones__recomiendas' class='ancho__total__textareas' placeholder='Ingrese observaci??n de recomendaci??n en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-12'>
					      		<textarea id='concluciones__recomendaciones__recomiendas' name='concluciones__recomendaciones__recomiendas' class='ancho__total__textareas' placeholder='Ingrese conclusi??n'></textarea>
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

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar informaci??n</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";

							   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["M??triz PAID"],"idPaidGenera__tablets")."</div>";

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
					      		<textarea id='observaciones' class='ancho__total__textareas ocultos__en__funcionarios__paids contenido__asignaciones__directores' placeholder='Ingrese observaci??n en caso de requerirlo'></textarea>
					      	</div>

							  <div class='col col-8 contenido__asignaciones__directores' style='font-weight:bold!important;'>
							  	<div class='contenido__asignaciones__directores'>Descargar informe</div>
							  </div>


							  <div class='col col-4 contenido__asignaciones__directores'>
						      	<a  id='informeEnlacesDescargar' name='informeEnlacesDescargar' class='contenido__asignaciones__directores' target='_blank'>Descargar documento (click aqu??)</a>
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
					      		<textarea id='observaciones__recomendaciones__recomiendas__final' class='ancho__total__textareas contenido__asignaciones__directores__apruebas' placeholder='Ingrese observaci??n de recomendaci??n en caso de requerirlo'></textarea>
					      	</div>


						  	<div class='col col-4 text-cenrter file__final__paid contenido__asignaciones__directores__apruebas' style='font-weight:bold;'>
						  		Subir resoluci??n de aprobaci??n
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
					      		<textarea id='observa__recomienda__directores__planificacion' class='ancho__total__textareas recomendacion__analista__director__planificaciones' placeholder='Ingrese observaci??n de recomendaci??n en caso de requerirlo'></textarea>
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
						   							Condici??n
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organizaci??n deportiva
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
						   						Se han creado nuevos puestos de trabajo de t??cnicos en relaci??n al PAID OD anterior.
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
						   						Registra recursos destinados para sueldos y salarios de entrenadores, equipo t??cnico de apoyo (monitor, instructor), y est?? acorde al objeto del organismo deportivo.
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
						   						Utiliza recursos para cubrir gastos en evento de preparaci??n y competencias autorizados en el 'Fortalecimiento del deporte de alto rendimiento del Ecuador' como : pasajes, alimentaci??n, hospedaje, hidrataci??n, seguro, medicinas, atenci??n m??dica, movilizaci??n interna y al exterior de la delegaci??n, Bono deportivo, hidrataci??n, visa,  y otros que permita la normativa vigente. 
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
						   						La planificaci??n operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
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
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, art??culos requeridos de cada implemento y equipo deportivo. 
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
						   						La Planificaci??n Anual de Inversi??n Deportiva de la Organizaci??n Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente. 
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
						   							Condici??n
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Cumple (Si/No/N-A)
						   						</center>
						   					</th>


						   					<th>
						   						<center>
						   							Obsservaciones para la organizaci??n deportiva
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
						   						Registra sus actividades en base a los requerimientos para la ejecuci??n de los eventos deportivos.
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
						   						Utiliza recursos para cubrir gastos en evento de preparaci??n y competencias autorizados en el 'ENCUENTRO ACTIVO DEL DEPORTE PARA EL DESARROLLO ' como: pasajes, alimentaci??n, hospedaje, hidrataci??n, seguro, medicinas, atenci??n m??dica, movilizaci??n interna y al exterior de la delegaci??n, Bono deportivo, hidrataci??n, visa,  y otros que permita la normativa vigente.
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
						   						La planificaci??n operativa anual del organismo deportivo se encuentra enmarcada en lo establecido en la normativa vigente.
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
						   						Utiliza recursos para cubrir gastos en necesidades generales e individuales, y registra el detalle de cantidades, art??culos requeridos de cada implemento y equipo deportivo. 
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
						   						La Planificaci??n Anual de Inversi??n Deportiva de la Organizaci??n Deportiva se encuentra enmarcada en lo establecido en la normativa legal vigente.
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

							  <div class='col col-4' style='font-weight:bold!important;'>Visualizar informaci??n</div>

							  <div class='col col-8 text-left'>
							  	<input type='checkbox' id='informacion__checkeds' class='checkeds'>
							  </div>

							  <div class='col col-12 oculto__paid__informacion'>

							  	";

							   $modal.="<div class='paid__vinculacion__general'>".$componentes->getLinksConfiguracion__parametros(["matrizPaidModales__revisor"],["M??triz PAID"],"idPaidGenera__tablets")."</div>";

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
						  					??rea
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Fecha Hora
						  				</center> 
						  			</th>

						  			<th> 
						  				<center> 
						  					Acci??n
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
						  					Nro. d??as
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