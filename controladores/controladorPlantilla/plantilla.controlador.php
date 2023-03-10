<?php

	class plantilla{


		// carpetas
		private static $nomenclatura='.view.php';

		private static $vista = 'vistas/'; 

		private static $vistaGeneral = 'vistasGenerales/'; 

		private static $contenidoVistas = 'contenidoVistas/'; 

		private static $menuSeccionales = 'menuSeccionales/'; 

		private static $dasboard = 'dasboard/'; 

		private static $componentes = 'componentes/'; 
		
		// nomenclaturas iniciales

		private $rutaInicial='ingreso';

		private static $header = 'header'; 
		private static $header2 = 'header2'; 

		private static $menu = 'menu'; 

		private static $footer = 'footer'; 

		
		/*====================================================
		=            Funciones principales clases            =
		====================================================*/
		
		public static function ctrPlantilla(){

			include "controladores/controladorPlantilla/plantilla.general.controlador.php";

		}


		public function plantillaHead(){

			if($_GET["ruta"]=="modificaciones") {

				require_once self::$vista.self::$vistaGeneral.self::$header2.self::$nomenclatura;

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$header.self::$nomenclatura;

			}

			

		}	

		public function disparadorEstilosDasboards(){

			if (isset($_GET["ruta"])) {

				if($_GET["ruta"]!="ingreso" || $_GET["ruta"]!="capacitacion") {

					require_once self::$vista.self::$vistaGeneral."estilosDasboards".self::$nomenclatura;

				}

			}

		}		
		
		public function plantillaMenu(){


			if (isset($_GET["ruta"])) {

				if($_GET["ruta"]!="ingreso" && $_GET["ruta"]!="capacitacion") {

					require_once self::$vista.self::$vistaGeneral.self::$dasboard."menuDasboardPrincipal".self::$nomenclatura;

				}else{

					require_once self::$vista.self::$vistaGeneral.self::$menu.self::$nomenclatura;

				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$menu.self::$nomenclatura;

			}

		}	


		public function disparadorMenu(){

			if (isset($_GET["ruta"])) {

				switch ($_GET["ruta"]) {

					case "ingreso":
						require_once self::$vista.self::$vistaGeneral.self::$menuSeccionales."ingresoMenu".self::$nomenclatura;
					break;

				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$menuSeccionales."ingresoMenu".self::$nomenclatura;

			}

		}


		public function plantillaContenido(){

			if (isset($_GET["ruta"])) {
				
				if($_GET["ruta"]=="generalDeporteEA" || $_GET["ruta"]=="paidRubrosEncuentroActivo"){
					require_once self::$vista.self::$contenidoVistas."PAID_DESARROLLO/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="generalDeporteAR" || $_GET["ruta"]=="paidRubrosEventos" || $_GET["ruta"]=="paidRubrosInterdisciplinario" || $_GET["ruta"]=="paidRubrosNecesidadesGenerales" || $_GET["ruta"]=="paidRubrosNecesidadesIndividuales"){
					require_once self::$vista.self::$contenidoVistas."paid-alto-rendimiento/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="paidencuentroactivo" || $_GET["ruta"]=="paidAsignacion" || $_GET["ruta"]=="paidAsignacionDesarrollo" || $_GET["ruta"]=="paidfortalecimiento" || $_GET["ruta"]=="reporteriaAsignacion" || $_GET["ruta"]=="reporteriaAsignacionDesarrollo"){
					require_once self::$vista.self::$contenidoVistas."PAID-ADMINISTRACION/".$_GET["ruta"].self::$nomenclatura;
				}
				else{
					require_once self::$vista.self::$contenidoVistas.$_GET["ruta"].self::$nomenclatura;
				}

			}else{

				require_once self::$vista.self::$contenidoVistas.$this->rutaInicial.self::$nomenclatura;

			}


		}

		public function plantillaFooter(){

			if (isset($_GET["ruta"])) {

				if ($_GET["ruta"]=="ingreso") {
					require_once self::$vista.self::$vistaGeneral.self::$footer.self::$nomenclatura;
				}else{
					require_once self::$vista.self::$vistaGeneral."footerIngreso".self::$nomenclatura;
				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$footer.self::$nomenclatura;

			}

		}	

		/*=====  End of Funciones principales clases  ======*/
		


	}