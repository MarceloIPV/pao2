$(document).ready(function () {

    /* paidRubrosEventos*/
    //datatablets($("#paidRubrosEventos"), "paidRubrosEventos", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], objetos([15],["boton"], ["<center><button class='estilo__botonDatatablets btn btn-info pointer__botones' onclick='funcionEliminarEvento()' ><i class='fas fa-pencil-alt'></i></button><center>"], [false], [false]), 1,  ["funcion__datatabletsEliminar"], [false], [false], false);

    datatablets($("#paidRubrosEventos"), "paidRubrosEventos", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], objetos([15, 16], ["boton", "boton"], ["<center><button class='estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#eventosEditaModal'><i class='fas fa-user-edit'></i></button><center>", "<center><button class='eliminarIndicadores estilo__botonDatatablets btn btn-danger pointer__botones' attr='15'><i class='fas fa-trash'></i></button><center>"], [false], [false]), 1, ["funcion__editar", "funcion__datatabletsEliminar"], ["editarIndicadores", "eliminarIndicadores"], ["indicadoresEdita", "eventosElimina"], ["edita", "elimina"], [1, 0], ['enviado', 'input__1']);
    datatablets($("#paidRubrosNecesidadesGenerales"), "paidRubrosNecesidadesGenerales", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], false, false, false, false, false, false, false);
    datatablets($("#paidRubrosNecesidadesIndividuales"), "paidRubrosNecesidadesIndividuales", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], false, false, false, false, false, false, false);
    datatablets($("#paidRubrosInterdisciplinario"), "paidRubrosInterdisciplinario", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], false, false, false, false, false, false, false);
    datatablets($("#paidEncuentroActivo"), "paidEncuentroActivo", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], false, false, false, false, false, false, false);
    /**/
    /*=========================================
    =            Admnistración poa            =
    =========================================*/

datatablets($("#reporteriaDefinitiva__c"),"reporteriaDefinitiva__c",false,false,false,false,false,false,false);

datatablets($("#asignaciones__realizadas__finan__trazabilidad"),"asignaciones__realizadas__finan__trazabilidad",false,false,false,false,false,false,false);

datatablets($("#paid__poas__asignaciones"),"paid__poas__asignaciones",false,objetos([4],["enlace"],['documento'],["documentos/presupuestoPaidOrganismos/"],["documento"]),1,[false],false,false,false);

datatablets($("#aprobacionUsuarios"),"aprobacionUsuarios",[$("#idUsuarioPrincipal").val()],objetos([4],["boton"],["<center><button class='aprobacionUsuariosBoton estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalAprobar'><i class='fas fa-eye'></i>&nbsp;&nbsp;Ver</button><center>"],[false],[false]),1,["funcionObtener"],["nomprePresidente","emailPresidente","celularPresidente","nombreProvincia","nombreCanton","nombreParroquia","nombreResponsablePoa","correoResponsablePoa","telefonoOficina"],[4,22,23,5,6,7,25,26,3],30);


datatablets($("#intervencionesAsuntos"),"intervencionesAsuntos",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([9],["boton"],["<center><button class='eliminar__boton estilo__botonDatatablets btn btn-danger' data-toggle='modal' data-target='#modalEliminarIntervencio'>Eliminar</button><center>"],false,false),1,[false,"funcion__eliminar"],[9],["idOrganismo"],"eliminar__boton");


datatablets($("#esigef"),"esigef",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4],["boton"],["<center><button class='eliminar__boton estilo__botonDatatablets btn btn-danger' data-toggle='modal' data-target='#modalEliminarIntervencio'>Eliminar</button><center>"],false,false),1,[false,"funcion__eliminar__esigef"],[6],["idOrganismo"],"eliminar__boton");

datatablets($("#asignarPresupuesto"),"asignarPresupuesto",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([5,6,7,8,9],["texto","texto","texto","boton","boton"],[7,8,9,"<center><button class='asignar__boton estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalAsignarPre'>Asignar</button><center>","<center><button class='botonEditarOr estilo__botonDatatablets btn btn-info' data-toggle='modal' data-target='#orgaModalOrga'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionObtenerOrganismos","funcionEditarOrga"],[4,5],["idOrganismo","idOrganismo"],"asignar__boton");

datatablets($("#asignarPresupuestoMo"),"asignarPresupuestoMo",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4,5,6],["enlace","boton","boton"],['nombreInversion',"<center><button class='asignar__boton estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalAsignarPre'>Modificar</button><center>","<center><button class='botonEditarOr estilo__botonDatatablets btn btn-info' data-toggle='modal' data-target='#orgaModalOrga'><i class='fas fa-user-edit'></i></button><center>"],["documentos/asignacionRecursos/",false,false],["idInversion",false,false]),1,[false,"funcionObtenerOrganismosM","funcionEditarOrgaM"],[4,5,6],[false,"idOrganismo","idOrganismo"],"asignar__boton");


datatablets($("#aprobadosTecnicos__enviados"),"aprobadosTecnicos__enviados",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4],["boton"],["<center><button class='asignarBoton__coor estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalMatrizCoordinadores'>Asignar</button><center>"],false,false),1,[false,"funcionCoordinasOb"],[4],["idOrganismo"],"asignfuncionCoordinasObarBoton__coor");

datatablets($("#aprobadosTecnicos__enviados__2"),"aprobadosTecnicos__enviados__2",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4],["boton"],["<center><button class='asignarBoton__coor estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalMatrizCoordinadores'>Asignar</button><center>"],false,false),1,[false,"funcionCoordinasOb__2"],[4],["idOrganismo"],"asignfuncionCoordinasObarBoton__coor");


datatablets($("#aprobadosTecnicos__enviados__3"),"aprobadosTecnicos__enviados__3",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4],["boton"],["<center><button class='asignarBoton__coor estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalMatrizCoordinadores'>Asignar</button><center>"],false,false),1,[false,"funcionCoordinasOb__3"],[4],["idOrganismo"],"asignfuncionCoordinasObarBoton__coor");

datatablets($("#observciones__enviados"),"observciones__enviados",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([4],["boton"],["<center><button class='asignarBoton__coor estilo__botonDatatablets btn btn-primary' data-toggle='modal' data-target='#modalMatrizCoordinadores'>Asignar</button><center>"],false,false),1,[false,"funcionCoordinasObservacion"],[4],["idOrganismo"],"asignarBoton__coor");

datatablets($("#organismosActivosPre"),"organismosActivosPre",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([2,3],["texto__separadores","texto__separadores"],[2,3],false,false),false,false,false,false,false);

if ($("#usuarioP").val()=="si") {
	datatablets($("#poasGestionados"),"poasGestionados",false,objetos([6,9,10],["enlace","boton","boton"],['documento',"<center><button class='editarGestionados estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#editarInfor__gestionados'><i class='fas fa-user-edit'></i></button><center>","<center><button class='generarVerG btn btn-warning pointer__botones' data-toggle='modal' data-target='#verPoaGe'><i class='fas icono__boton fa-eye'></i></button><center>"],["documentos/aprobacion/",false,false],["documento",false,false]),1,[false,"funcionEditar__gestionados","funcionEditar__gestionados_s"],false,false,false);
}else{
	datatablets($("#poasGestionados"),"poasGestionados",false,objetos([6,9],["enlace","boton"],['documento',"<center><button class='generarVerG btn btn-warning pointer__botones' data-toggle='modal' data-target='#verPoaGe'><i class='fas icono__boton fa-eye'></i></button><center>"],["documentos/aprobacion/",false],["documento",false]),1,[false,"funcionEditar__gestionados_s"],false,false,false);
}




datatablets($("#organismosRegistrados_i"),"organismosRegistrados_i",false,false,false,false,false,false,false);

datatablets($("#usuariosAplicativo"),"usuariosAplicativo",[$("#idUsuarioPrincipal").val()],objetos([2,3],["boton","boton"],["<center><button class='editarUsuarios estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#editarUsuariosModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarUsuarios estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),1,["funcionObtener"],[false],[false],false);


datatablets($("#organismoSubses"),"organismoSubses",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7,8,9],["texto","boton","texto"],[11,"<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>",10],[false],[false]),1,["funcionReasingarTra"],[false],[false],false);


datatablets($("#poasGestionados__finan"),"poasGestionados__finan",[$("#idUsuarioPrincipal").val(),$("#fisicamenteE").val(),$("#idRolAd").val()],objetos([7],["boton__2"],[8],[5],[9],false),1,["funcionReasingarTra__finan"],[false],[false],false);

datatablets($("#poasGestionados__finan__rechado"),"poasGestionados__finan__rechado",[$("#idUsuarioPrincipal").val(),$("#fisicamenteE").val(),$("#idRolAd").val()],objetos([7],["boton__2"],[8],[5],[false],false),1,["funcionReasingarTra__finan__rechazar"],[false],[false],false);

datatablets($("#poasGestionados__finan__suspencion"),"poasGestionados__finan__suspencion",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],false,1,false,[false],[false],false);


/*===============================================
=            Aprobados para tecnicos            =
===============================================*/

datatablets($("#poasGestionados__finan__aprobado__dos"),"poasGestionados__finan__aprobado__dos",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([5],["boton"],["<center><button class='reasignarTramites__dos estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra__dos'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingar__aprobados__dos"],[false],[false],false);

/*=====  End of Aprobados para tecnicos  ======*/


datatablets($("#poasGestionados__finan__aprobado"),"poasGestionados__finan__aprobado",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],false,1,false,[false],[false],false);

datatablets($("#asignaciones__realizadas__finan"),"asignaciones__realizadas__finan",[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],objetos([7],["boton"],["<center><button class='terminarBoton__financieros estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#terminarFinanciero'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcion___termina__financiero"],[false],[false],false);


datatablets($("#organismoSubsesCoordinas"),"organismoSubsesCoordinas",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7,8],["boton","texto"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>",10],[false],[false]),1,["funcionReasingarTraCoordinas"],[false],[false],false);


datatablets($("#organismoSubsesCoordinasReco"),"organismoSubsesCoordinasReco",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraCoordinas__subsess"],[false],[false],false);


datatablets($("#organismoSubsesCoordinasFinanRe"),"organismoSubsesCoordinasFinanRe",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraCoordinas__financs"],[false],[false],false);



datatablets($("#organismoSubsesRecomen"),"organismoSubsesRecomen",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraCoordinas__instalaciones"],[false],[false],false);



datatablets($("#organismoSubsesCoordinasFinan"),"organismoSubsesCoordinasFinan",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7,8],["boton","texto"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>",10],[false],[false]),1,["funcionReasingarTraCoordinasFinan"],[false],[false],false);


datatablets($("#organismoSubsesRe"),"organismoSubsesRe",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraRe"],[false],[false],false);

datatablets($("#organismoSubsesReAdminis"),"organismoSubsesReAdminis",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val(),"administrativo"],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraReAdminis"],[false],[false],false);

datatablets($("#organismoSubsesReTalentoHu"),"organismoSubsesReTalentoHu",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val(),"humano"],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraRe_talento"],[false],[false],false);


datatablets($("#organismoSubsesReInsta"),"organismoSubsesReInsta",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val(),"humano"],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraReInstala"],[false],[false],false);


datatablets($("#organismoSubsesReInfra"),"organismoSubsesReInfra",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val(),"humano"],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraReInfran"],[false],[false],false);


datatablets($("#organismoGeneralEn"),"organismoGeneralEn",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraGe"],[false],[false],false);


datatablets($("#organismoGeneralEn__modificaciones"),"organismoGeneralEn__modificaciones",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([7],["boton"],["<center><button class='reasignarTramites__modificaciones estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funcionReasingarTraGe__modificaciones"],[false],[false],false);


/*=========================================
=            Admnistración poa            =
=========================================*/

datatablets($("#tablaLineaP"),"tablaLineaP",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarLinea estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#lineaPoliticaEdita'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarLinea estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarLinea","eliminarLinea"],["lineaEdita","lineaElimina"],["edita","elimina"],[1,0],['enviado','input__1']);



datatablets($("#tablaPrograma"),"tablaPrograma",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarPrograma estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#programaEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarPrograma estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarPrograma","eliminarPrograma"],["programaEdita","programaElimina"],["edita","elimina"],[1,0],['enviado','input__1']);


datatablets($("#tablaIndicadores"),"tablaIndicadores",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarIndicadores estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#indicadoresEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarIndicadores estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarIndicadores","eliminarIndicadores"],["indicadoresEdita","indicadoresElimina"],["edita","elimina"],[1,0],['enviado','input__1']);


datatablets($("#tablaDeportes"),"tablaDeportes",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarDeportes estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#deportesEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarDeportes estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarDeportes","eliminarDeportes"],["deportesEdita","deportesElimina"],["edita","elimina"],[1,0],['enviado','input__1']);



datatablets($("#tablaAlcance"),"tablaAlcance",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarAlcance estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#alcanceEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarAlcance estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarAlcance","eliminarAlcance"],["alcanceEdita","alcanceElimina"],["edita","elimina"],[1,0],['enviado','input__1']);


datatablets($("#tablaFinanciamiento"),"tablaFinanciamiento",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarFinanciamiento estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#fianncimientoEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarFinanciamiento estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarFinanciamiento","eliminarFinanciamiento"],["tipoFiEdita","tipoFiElimina"],["edita","elimina"],[1,0],['enviado','input__1']);

datatablets($("#tablaCargo"),"tablaCargo",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarcargo estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#cargoEdita'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarcargo estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarcargo","eliminarcargo"],["cargoEdita","cargoElimina"],["edita","elimina"],[1,0],['enviado','input__1']);


datatablets($("#tablaObjetivo"),"tablaObjetivo",[$("#idUsuarioPrincipal").val()],objetos([1,2,3],["texto","boton","boton"],[2,"<center><button class='editarObjetivos estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#objetivoEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarObjetivos estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarObjetivos","eliminarObjetivos"],["objetivosEdita","objetivosElimina"],["edita","elimina"],[1,0,4],['enviado','input__1','select__2Objetivos']);



datatablets($("#tablaTipoOrganismo"),"tablaTipoOrganismo",[$("#idUsuarioPrincipal").val()],objetos([1,2,3,4,5],["texto","texto","texto","boton","boton"],[2,3,4,"<center><button class='editarTipoOrganismo estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#tipoOrganismoEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarTipoOrganismos estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminares"],["editarTipoOrganismo","eliminarTipoOrganismos"],["tipoOrganismoEdita","tipoOrganismoElimina"],["edita","elimina"],[1,0,5,6,7],['enviado','input__1','select__1','select__2','select__3']);


datatablets($("#tablaAreaAccion"),"tablaAreaAccion",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarAccion estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#areaAccionEdita'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarAccion estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarAccion","eliminarAccion"],["accionEdita","accionElimina"],["edita","elimina"],[1,0],['enviado','input__1']);

datatablets($("#tablaAreaEncargada"),"tablaAreaEncargada",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarAreaEn estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#areaEncargadaEdita'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarAreaEn estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarAreaEn","eliminarAreaEn"],["areaEnEdita","areaEnElimina"],["edita","elimina"],[1,0],['enviado','input__1']);

datatablets($("#tablaGrupoGasto"),"tablaGrupoGasto",[$("#idUsuarioPrincipal").val()],objetos([1,2],["boton","boton"],["<center><button class='editarGrupoGastos estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#grupoGastoEdita'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarGrupoGastos estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarGrupoGastos","eliminarGrupoGastos"],["gastoEdita","gastosElimina"],["edita","elimina"],[1,0],['enviado','input__1']);

datatablets($("#tablaItems"),"tablaItems",[$("#idUsuarioPrincipal").val()],objetos([1,2,3],["texto","boton","boton"],[8,"<center><button class='editarItems estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#itemsEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarItems estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__editar","funcion__datatabletsEliminar"],["editarItems","eliminarItems"],["itemsEdita","itemsElimina"],["edita","elimina"],[1,0,8],['enviado','input__1','input__2Items']);

datatablets($("#tablaActividades"),"tablaActividades",[$("#idUsuarioPrincipal").val()],objetos([2,3,4,5,6],["boton","texto","texto","boton","boton"],["<center><button class='verItems estilo__botonDatatablets btn btn-warning pointer__botones' data-toggle='modal' data-target='#actividadesEditaModalAc'><i class='fas fa-eye'></i></button><center>",5,7,"<center><button class='editarActividades estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#actividadesEditaModal'><i class='fas fa-user-edit'></i></button><center>","<center><button class='eliminarActividades estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__verItems","funcion__editar","funcion__datatabletsEliminar"],["verItems","editarActividades","eliminarActividades"],["verItems","actividadesEdita","actividadesElimina"],["edita","edita","elimina"],[2,1,0,4],['enviado','input__1','select__grupoG','select__indiCadores',"inputActividades","inputActividadesdos"]);

/*=====  End of Admnistración poa  ======*/

/*====================================================
=            Opciones datatablets enlaces            =
====================================================*/

var agregarDatatablets__enlaces__repor__funcionarios=function(parametro1,parametro2,parametro3,parametro4){

$(parametro1).click(function (e){

	datatablets($(parametro2),parametro3,[parametro4],objetos([2],["enlace"],['documento'],["documentos/declaracionTerminos/"],["documento"]),false,[false],[false],false);

});

}

agregarDatatablets__enlaces__repor__funcionarios($("#documentacionGenerada__in"),$(".seguimiento__documentacionGenerada"),"seguimiento__documentacionGenerada",$("#idOrganismoPrincipal").val()); 


var agregarDatatablets__enlaces__repor__funcionarios__2=function(parametro1,parametro2,parametro3,parametro4){

$(parametro1).click(function (e){

    datatablets($(parametro2),parametro3,[parametro4],objetos([1],["enlace"],['documento'],["documentos/final__seguimiento/"],["documento"]),false,[false],[false],false);

});

}

agregarDatatablets__enlaces__repor__funcionarios__2($("#documentacionGenerada__in__final"),$(".seguimiento__documentacionGenerada__2"),"seguimiento__documentacionGenerada__2",$("#idOrganismoPrincipal").val()); 

/*=====  End of Opciones datatablets enlaces  ======*/

/*=============================================
=            Organismos deportivos            =
=============================================*/

var agregarDatatablets=function(parametro1,parametro2,parametro3,parametro4){

$(parametro1).click(function (e){

	datatablets($(parametro2),parametro3,[parametro4],false,false,false,[false],[false],false);

});

}

agregarDatatablets($("#sueldos"),$(".reporteria__sueldosySalarios"),"reporteria__sueldosySalarios",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#honorarios"),$(".reporteria__honorarios"),"reporteria__honorarios",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#actividades"),$(".reporteria__actividades"),"reporteria__actividades",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#administrativo"),$(".reporteria__administrativas"),"reporteria__administrativas",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#mantenimiento"),$(".reporteria__mantenimiento"),"reporteria__mantenimiento",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#suministros"),$(".reporteria__suministros"),"reporteria__suministros",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#actividades__4"),$(".reporteria__actividades__4"),"reporteria__actividades__4",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#actividades__5"),$(".reporteria__actividades__5"),"reporteria__actividades__5",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#actividades__6"),$(".reporteria__actividades__6"),"reporteria__actividades__6",$("#idOrganismoPrincipal").val());
agregarDatatablets($("#actividades__7"),$(".reporteria__actividades__7"),"reporteria__actividades__7",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#poaIn"),$(".poa__inicial__poa"),"poa__inicial__poa",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#poaIndica"),$(".poa__indicadores__poa"),"poa__indicadores__poa",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#autogestionPoas__in"),$(".seguimiento__autogestiones"),"seguimiento__autogestiones",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#indicadores__in"),$(".seguimiento__indicadores"),"seguimiento__indicadores",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#sueldos__in"),$(".seguimiento__sueldos__salarios"),"seguimiento__sueldos__salarios",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#honorarios__in"),$(".seguimiento__honorarios"),"seguimiento__honorarios",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#administrativo__in"),$(".seguimiento__administrativas"),"seguimiento__administrativas",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#mantenimiento__in"),$(".seguimiento__mantenimientos"),"seguimiento__mantenimientos",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#mantenimientoTec__in"),$(".seguimiento__mantenimientosTec"),"seguimiento__mantenimientosTec",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#capacitacion__in"),$(".seguimiento__capacitacion"),"seguimiento__capacitacion",$("#idOrganismoPrincipal").val());


agregarDatatablets($("#capacitacionTec__in"),$(".seguimiento__capacitacionTecni"),"seguimiento__capacitacionTecni",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#competencia__in"),$(".seguimiento__competencia"),"seguimiento__competencia",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#competenciaFormativa__in"),$(".seguimiento__competenciaFor"),"seguimiento__competenciaFor",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#competenciaAlto__in"),$(".seguimiento__competenciaAlto"),"seguimiento__competenciaAlto",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#recreativo__in"),$(".seguimiento__recreativo"),"seguimiento__recreativo",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#recreativoTec__in"),$(".seguimiento__recreativoTec"),"seguimiento__recreativoTec",$("#idOrganismoPrincipal").val());

agregarDatatablets($("#implementacion__in"),$(".seguimiento__implementacion"),"seguimiento__implementacion",$("#idOrganismoPrincipal").val());

/*=====  End of Organismos deportivos  ======*/


});


var objetos=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6){

	var objeto = [];

	/*=============================================
	=            Creación de elementos            =
	=============================================*/
	

	if (parametro1[0]!="" && parametro1[0]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[0]], 
			"mData": null,
			"mRender": (function (data, type, row) {

                if (parametro2[0]=="enlace" && row[parametro5[0]]!=null && row[parametro5[0]]!=undefined && row[parametro5[0]]!="" && row[parametro5[0]]!=" ") {

                    if (row[parametro5[0]].indexOf('.pdf') > -1 ){
                        return "<center><a href='"+parametro4[0]+row[parametro5[0]]+"' target='_blank'>"+row[parametro3[0]]+"</a></center>";
                    }else{
                        return "<center><a href='"+parametro4[0]+row[parametro5[0]]+".pdf' target='_blank'>"+row[parametro3[0]]+"</a></center>";
                    }

                }else if(parametro2[0]=="boton"){

					return parametro3[0];

				}else if(parametro2[0]=="texto__separadores"){


					if (row[parametro3[0]]!="" && row[parametro3[0]]!=null && row[parametro3[0]]!=undefined) {

						let arr = row[parametro3[0]].split(';;;;');

						if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}					

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[0]=="texto__separadores__2"){

					if (row[parametro3[0]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[0]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[6]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }

                    

                }else if(parametro2[0]=="texto__separadores__cierre__anio__fiscal__2"){

                    if (row[7]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }

                    

                }else if(parametro2[0]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[0]]+"' name='radio__select__"+row[parametro3[0]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[0]]+"' name='radio__select__"+row[parametro3[0]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[0]=="enlaces__definidos__2"){

					if (row[parametro3[0]]=="CUMPLE") {

						return "<a href='seguimientoRecorrido' target='_blank'>ENVIADO</a>";

					}else{
						return "NO ENVIADO";
					}

					

				}else if(parametro2[0]=="chekeds__2__paids"){

					return "<center><input type='checkbox' class='checkeds__seleccionables' attr='primerTrimestre' idOrganismos='"+row[parametro3[0]]+"'/></center>";

				}else{
					return row[parametro3[0]];
				}

			})

		});		

	}

	if (parametro1[1]!="" && parametro1[1]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[1]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[1]=="enlace" && row[parametro5[1]]!=null && row[parametro5[1]]!=undefined && row[parametro5[1]]!="" && row[parametro5[1]]!=" ") {

					if (row[parametro5[1]].indexOf('.pdf') > -1 ){
						return "<center><a href='"+parametro4[1]+row[parametro5[1]]+"' target='_blank'>"+row[parametro3[1]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[1]+row[parametro5[1]]+".pdf' target='_blank'>"+row[parametro3[1]]+"</a></center>";
					}

				}else if(parametro2[1]=="boton"){

					return parametro3[1];

				}else if(parametro2[1]=="texto__separadores"){


					if (row[parametro3[1]]!="" && row[parametro3[1]]!=null && row[parametro3[1]]!=undefined) {

						let arr = row[parametro3[1]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}						

					}else{

						return "No asignado";


					}

				}else if(parametro2[1]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[1]=="texto__separadores__2"){

					let arr = row[parametro3[1]].split('------');

					let primero="";
					let segundo="";
					let tercero="";

					if (arr[0]=="N/A"){

						 primero="";

					}else{

						 primero="<div><a href='documentos/seguimiento/informesSeguimientos/"+arr[0]+"' target='_blank'>Presupuestario</a></div><hr>";
						
					}

					if (arr[1]=="N/A"){

						 segundo="";

					}else{

						if (row[parametro6]=="FORMATIVO") {

							segundo="<div><a href='documentos/seguimiento/informe__formativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else if(row[parametro6]=="RECREACION"){

							segundo="<div><a href='documentos/seguimiento/informe__recreativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else{

							segundo="<div><a href='documentos/seguimiento/informes__altos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}
						
					}

					if (arr[2]=="N/A"){

						 tercero="";

					}else{

						 tercero="<div><a href='documentos/seguimiento/informesInfraestructuras/"+arr[2]+"' target='_blank'>Infraestructura y/o mantenimiento</a></div><hr>";
						
					}


					return primero+segundo+tercero;

				}else if(parametro2[1]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' attr='primerTrimestre' idOrganismos='"+row[parametro3[1]]+"'/>";

				}else if(parametro2[1]=="enlaces__definidos__2"){

					if (row[parametro3[1]]=="CUMPLE") {

						return "<a href='seguimientoRecorrido' target='_blank'>ENVIADO</a>";

					}else{
						return "NO ENVIADO";
					}

					

				}else if(parametro2[1]=="texto__separadores__2"){

					if (row[parametro3[1]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[1]=="texto__separadores__cierre__anio__fiscal"){


                    if (row[7]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }


                }else if(parametro2[1]=="motivo__adicional"){


                    if (row[8]=="" || row[8]==" " || row[8]==undefined || row[8]==null) {

                        return " ";

                    }else{

                        return row[8];

                    }

                }else if(parametro2[1]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[1]]+"' name='radio__select__"+row[parametro3[1]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[1]]+"' name='radio__select__"+row[parametro3[1]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[1]=="chekeds__2__paids"){

					return "<center><input type='checkbox' class='checkeds__seleccionables' attr='primerTrimestre' idOrganismos='"+row[parametro3[1]]+"'/></center>";

				}else{
					return row[parametro3[1]];
				}

			})

		});
	
	}

	if (parametro1[2]!="" && parametro1[2]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[2]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[2]=="enlace") {

					if (row[parametro5[2]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[2]+row[parametro5[2]]+"' target='_blank'>"+row[parametro3[2]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[2]+row[parametro5[2]]+".pdf' target='_blank'>"+row[parametro3[2]]+"</a></center>";
					}

				}else if(parametro2[2]=="boton"){

					return parametro3[2];

				}else if(parametro2[2]=="texto__separadores"){


					if (row[parametro3[2]]!="" && row[parametro3[2]]!=null && row[parametro3[2]]!=undefined) {

						let arr = row[parametro3[2]].split(';;;;');
					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}			
					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[2]=="enlaces__definidos__2"){

					if (row[parametro3[2]]=="CUMPLE") {

						return "<a href='seguimientoRecorrido' target='_blank'>ENVIADO</a>";

					}else{
						return "NO ENVIADO";
					}

					

				}else if(parametro2[2]=="texto__separadores__2"){

					if (row[parametro3[2]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado2'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado2'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[2]=="texto__separadores__cierre__anio__fiscal"){


                    if (row[7]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }
                    

                }else if(parametro2[2]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[2]]+"' name='radio__select__"+row[parametro3[2]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[2]]+"' name='radio__select__"+row[parametro3[2]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[2]=="texto__separadores__2"){

					if (row[parametro3[2]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado2'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado2'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[2]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[2]]+"'/>";

				}else if(parametro2[2]=="motivo__adicional"){


                    if (row[8]=="" || row[8]==" " || row[8]==undefined || row[8]==null) {

                        return " ";

                    }else{

                        return row[8];

                    }

                }else if(parametro2[2]=="motivo__adicional__2"){


                    if (row[9]=="" || row[9]==" " || row[9]==undefined || row[9]==null) {

                        return " ";

                    }else{

                        return row[9];

                    }

                }else{
					return row[parametro3[2]];
				}

			})

		});

	}

	if (parametro1[3]!="" && parametro1[3]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[3]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[3]=="enlace") {

					if (row[parametro5[3]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[3]+row[parametro5[3]]+"' target='_blank'>"+row[parametro3[3]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[3]+row[parametro5[3]]+".pdf' target='_blank'>"+row[parametro3[3]]+"</a></center>";
					}

				}else if(parametro2[3]=="boton"){

					return parametro3[3];

				}else if(parametro2[3]=="texto__separadores"){


					if (row[parametro3[3]]!="" && row[parametro3[3]]!=null && row[parametro3[3]]!=undefined) {

						let arr = row[parametro3[3]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}						

					}else{

						return "No asignado";


					}

				}else if(parametro2[3]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[3]=="texto__separadores__2"){

					let arr = row[parametro3[3]].split('------');

					let primero="";
					let segundo="";
					let tercero="";

					if (arr[0]=="N/A"){

						 primero="";

					}else{

						 primero="<div><a href='documentos/seguimiento/informesSeguimientos/"+arr[0]+"' target='_blank'>Presupuestario</a></div><hr>";
						
					}

					if (arr[1]=="N/A"){

						 segundo="";

					}else{

						if (row[parametro6]=="FORMATIVO") {

							segundo="<div><a href='documentos/seguimiento/informe__formativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else if(row[parametro6]=="RECREACION"){

							segundo="<div><a href='documentos/seguimiento/informe__recreativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else{

							segundo="<div><a href='documentos/seguimiento/informes__altos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}
						
					}

					if (arr[2]=="N/A"){

						 tercero="";

					}else{

						 tercero="<div><a href='documentos/seguimiento/informesInfraestructuras/"+arr[2]+"' target='_blank'>Infraestructura y/o mantenimiento</a></div><hr>";
						
					}


					return primero+segundo+tercero;

				}else if(parametro2[3]=="enlaces__definidos__2"){

					if (row[parametro3[3]]=="CUMPLE") {

						return "<a href='seguimientoRecorrido' target='_blank'>ENVIADO</a>";

					}else{
						return "NO ENVIADO";
					}

					

				}else if(parametro2[3]=="texto__separadores__2"){

					if (row[parametro3[3]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[3]=="texto__separadores__cierre__anio__fiscal"){


                    if (row[10]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }
                    

                }else if(parametro2[3]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[3]]+"' name='radio__select__"+row[parametro3[3]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[3]]+"' name='radio__select__"+row[parametro3[3]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[3]=="texto__separadores__2"){

					if (row[parametro3[3]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[3]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[3]]+"' name='radio__select__"+row[parametro3[3]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[3]]+"' name='radio__select__"+row[parametro3[3]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[3]=="texto__separadores__2"){

					if (row[parametro3[3]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[3]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[3]]+"' attr='segundoTrimestre'/>";

				}else{
					return row[parametro3[3]];
				}

			})

		});

	}

	
	if (parametro1[4]!="" && parametro1[4]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[4]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[4]=="enlace") {

					if (row[parametro5[4]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[4]+row[parametro5[4]]+"' target='_blank'>"+row[parametro3[4]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[4]+row[parametro5[4]]+".pdf' target='_blank'>"+row[parametro3[4]]+"</a></center>";
					}

				}else if(parametro2[4]=="boton"){

					return parametro3[4];

				}else if(parametro2[4]=="texto__separadores"){


					if (row[parametro3[4]]!="" && row[parametro3[4]]!=null && row[parametro3[4]]!=undefined) {

						let arr = row[parametro3[4]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}			
					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[4]=="texto__separadores__2"){

					if (row[parametro3[4]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado3'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado3'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[4]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[parametro3[4]]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else if(parametro2[4]=="radioSelectes__2"){

					return "<div style='display:flex;'>Si&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[4]]+"' name='radio__select__"+row[parametro3[4]]+"' value='A'/>&nbsp;&nbsp;No&nbsp;&nbsp;<input type='radio'  class='radio__conjuntos radios_"+row[parametro3[4]]+"' name='radio__select__"+row[parametro3[4]]+"' value='N'/></div><div style='display:flex; justify-content-center;'><button class='btn btn-primary guardar__informacion__conjuntos__radios mt-2'><i class='fa fa-floppy-o' aria-hidden='true'></i></button></div>";

				}else if(parametro2[4]=="texto__separadores__2"){

					if (row[parametro3[4]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado3'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado3'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[4]=="motivo__adicional"){

                    if (row[8]=="" || row[8]==" " || row[8]==undefined || row[8]==null) {

                        return " ";

                    }else{

                        return row[8];

                    }

                    

                }else if(parametro2[4]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[4]]+"'/>";

				}else if(parametro2[4]=="chekeds__2__1"){

                    return "<input type='checkbox' class='checkeds__seleccionables__transferencias' idOrganismos='"+row[5]+"'/>";

                }else{
					return row[parametro3[4]];
				}

			})

		});

	}

	if (parametro1[5]!="" && parametro1[5]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[5]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[5]=="enlace") {

					if (row[parametro5[5]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+"' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+".pdf' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}

				}else if(parametro2[5]=="boton"){

					return parametro3[5];

				}else if(parametro2[5]=="texto__separadores"){


					if (row[parametro3[5]]!="" && row[parametro3[5]]!=null && row[parametro3[5]]!=undefined) {

						let arr = row[parametro3[5]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[5]=="texto__separadores__2"){

					let arr = row[parametro3[5]].split('------');

					let primero="";
					let segundo="";
					let tercero="";

					if (arr[0]=="N/A"){

						 primero="";

					}else{

						 primero="<div><a href='documentos/seguimiento/informesSeguimientos/"+arr[0]+"' target='_blank'>Presupuestario</a></div><hr>";
						
					}

					if (arr[1]=="N/A"){

						 segundo="";

					}else{

						if (row[parametro6]=="FORMATIVO") {

							segundo="<div><a href='documentos/seguimiento/informe__formativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else if(row[parametro6]=="RECREACION"){

							segundo="<div><a href='documentos/seguimiento/informe__recreativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else{

							segundo="<div><a href='documentos/seguimiento/informes__altos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}
						
					}

					if (arr[2]=="N/A"){

						 tercero="";

					}else{

						 tercero="<div><a href='documentos/seguimiento/informesInfraestructuras/"+arr[2]+"' target='_blank'>Infraestructura y/o mantenimiento</a></div><hr>";
						
					}


					return primero+segundo+tercero;

				}else if(parametro2[5]=="texto__separadores__2"){

					if (row[parametro3[5]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[5]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[12]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else if(parametro2[5]=="motivo__adicional"){

                    if (row[12]=="" || row[12]==" " || row[12]==undefined || row[12]==null) {

                        return " ";

                    }else{

                        return row[12];

                    }

                }else if(parametro2[5]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[5]]+"' attr='tercerTrimestre'/>";

				}else{
					return row[parametro3[5]];
				}

			})

		});

	}



	if (parametro1[6]!="" && parametro1[6]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[6]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[6]=="enlace") {

					if (row[parametro6[6]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[6]+row[parametro6[6]]+"' target='_blank'>"+row[parametro3[6]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[6]+row[parametro6[6]]+".pdf' target='_blank'>"+row[parametro3[6]]+"</a></center>";
					}

				}else if(parametro2[6]=="boton"){

					return parametro3[6];

				}else if(parametro2[6]=="texto__separadores"){


					if (row[parametro3[6]]!="" && row[parametro3[6]]!=null && row[parametro3[6]]!=undefined) {

						let arr = row[parametro3[6]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[6]!=undefined && arr[6]!="undefined") {

								var sexto="<div>"+arr[6]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[6]=="texto__separadores__2"){

					let arr = row[parametro3[6]].split('------');

					let primero="";
					let segundo="";
					let tercero="";

					if (arr[0]=="N/A"){

						 primero="";

					}else{

						 primero="<div><a href='documentos/seguimiento/informesSeguimientos/"+arr[0]+"' target='_blank'>Presupuestario</a></div><hr>";
						
					}

					if (arr[1]=="N/A"){

						 segundo="";

					}else{

						if (row[parametro6]=="FORMATIVO") {

							segundo="<div><a href='documentos/seguimiento/informe__formativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else if(row[parametro6]=="RECREACION"){

							segundo="<div><a href='documentos/seguimiento/informe__recreativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else{

							segundo="<div><a href='documentos/seguimiento/informes__altos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}
						
					}

					if (arr[2]=="N/A"){

						 tercero="";

					}else{

						 tercero="<div><a href='documentos/seguimiento/informesInfraestructuras/"+arr[2]+"' target='_blank'>Infraestructura y/o mantenimiento</a></div><hr>";
						
					}


					return primero+segundo+tercero;

				}else if(parametro2[6]=="texto__separadores__2"){

					if (row[parametro3[6]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado4'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado4'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[6]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[11]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:red;color:white;'><option value='si'>CERRADO</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado' style='background:green;color:white;'><option value='no'>ABIERTO</option></select>";

                    }
                    

                }else if(parametro2[6]=="texto__separadores__4"){

					if (row[parametro3[6]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado4'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado4'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[6]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[6]]+"'/>";

				}else{
					return row[parametro3[6]];
				}

			})

		});

	}




	if (parametro1[7]!="" && parametro1[7]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[7]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[7]=="enlace") {

					if (row[parametro7[7]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[7]+row[parametro7[7]]+"' target='_blank'>"+row[parametro3[7]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[7]+row[parametro7[7]]+".pdf' target='_blank'>"+row[parametro3[7]]+"</a></center>";
					}

				}else if(parametro2[7]=="boton"){

					return parametro3[7];

				}else if(parametro2[7]=="texto__separadores"){


					if (row[parametro3[7]]!="" && row[parametro3[7]]!=null && row[parametro3[7]]!=undefined) {

						let arr = row[parametro3[7]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[7]!=undefined && arr[7]!="undefined") {

								var sexto="<div>"+arr[7]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[7]=="texto__separadores__2"){

					let arr = row[parametro3[7]].split('------');

					let primero="";
					let segundo="";
					let tercero="";

					if (arr[0]=="N/A"){

						 primero="";

					}else{

						 primero="<div><a href='documentos/seguimiento/informesSeguimientos/"+arr[0]+"' target='_blank'>Presupuestario</a></div><hr>";
						
					}

					if (arr[1]=="N/A"){

						 segundo="";

					}else{

						if (row[parametro6]=="FORMATIVO") {

							segundo="<div><a href='documentos/seguimiento/informe__formativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else if(row[parametro6]=="RECREACION"){

							segundo="<div><a href='documentos/seguimiento/informe__recreativos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}else{

							segundo="<div><a href='documentos/seguimiento/informes__altos/"+arr[1]+"' target='_blank'>Técnico</a></div><hr>";

						}
						
					}

					if (arr[2]=="N/A"){

						 tercero="";

					}else{

						 tercero="<div><a href='documentos/seguimiento/informesInfraestructuras/"+arr[2]+"' target='_blank'>Infraestructura y/o mantenimiento</a></div><hr>";
						
					}


					return primero+segundo+tercero;

				}else if(parametro2[7]=="texto__separadores__2"){

					if (row[parametro3[7]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					

				}else if(parametro2[5]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[parametro3[5]]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else if(parametro2[7]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[7]]+"' attr='cuartoTrimestre'/>";

				}else if(parametro2[7]=="chekeds__2__2"){

                    return "<input type='checkbox' class='checkeds__seleccionables__modificaciones' idOrganismos='"+row[5]+"'/>";

                }else{
					return row[parametro3[7]];
				}

			})

		});

	}


	if (parametro1[8]!="" && parametro1[8]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[8]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[8]=="enlace") {

					if (row[parametro8[8]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[8]+row[parametro8[8]]+"' target='_blank'>"+row[parametro3[8]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[8]+row[parametro8[8]]+".pdf' target='_blank'>"+row[parametro3[8]]+"</a></center>";
					}

				}else if(parametro2[8]=="boton"){

					return parametro3[8];

				}else if(parametro2[8]=="texto__separadores"){


					if (row[parametro3[8]]!="" && row[parametro3[8]]!=null && row[parametro3[8]]!=undefined) {

						let arr = row[parametro3[8]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[8]!=undefined && arr[8]!="undefined") {

								var sexto="<div>"+arr[8]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[8]=="texto__separadores__2"){

					if (row[parametro3[8]]=="si") {

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si'>Si</option><option value='no'>No</option></select>";

					}else{

						return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no'>No</option><option value='si'>Si</option></select>";

					}

					
				}else if(parametro2[5]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[parametro3[5]]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else if(parametro2[8]=="motivo__adicional"){

                    if (row[13]=="" || row[13]==" " || row[13]==undefined || row[13]==null) {

                        return " ";

                    }else{

                        return row[13];

                    }

                }else if(parametro2[8]=="chekeds__2"){

					return "<input type='checkbox' class='checkeds__seleccionables' idOrganismos='"+row[parametro3[8]]+"' attr='cuartoTrimestre'/>";

				}else{
					return row[parametro3[8]];
				}

			})

		});

	}



	if (parametro1[9]!="" && parametro1[9]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[9]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[5]=="enlace") {

					if (row[parametro5[5]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+"' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+".pdf' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}

				}else if(parametro2[5]=="boton"){

					return parametro3[5];

				}else if(parametro2[5]=="texto__separadores"){


					if (row[parametro3[5]]!="" && row[parametro3[5]]!=null && row[parametro3[5]]!=undefined) {

						let arr = row[parametro3[5]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[5]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[parametro3[5]]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else{
					return row[parametro3[5]];
				}

			})

		});

	}



	if (parametro1[10]!="" && parametro1[10]!=" ") {

		objeto.push({ 

			"aTargets":[parametro1[10]], 
			"mData": null,
			"mRender": (function (data, type, row) {

				if (parametro2[5]=="enlace") {

					if (row[parametro5[5]].indexOf('.pdf') > -1){
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+"' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}else{
						return "<center><a href='"+parametro4[5]+row[parametro5[5]]+".pdf' target='_blank'>"+row[parametro3[5]]+"</a></center>";
					}

				}else if(parametro2[5]=="boton"){

					return parametro3[5];

				}else if(parametro2[5]=="texto__separadores"){


					if (row[parametro3[5]]!="" && row[parametro3[5]]!=null && row[parametro3[5]]!=undefined) {

						let arr = row[parametro3[5]].split(';;;;');

					if (arr.length>0) {

							if (arr[0]!=undefined && arr[0]!="undefined") {

								var primero="<div>"+arr[0]+"</div>";

							}else{
								primero="<div></div>";
							}



							if (arr[1]!=undefined && arr[1]!="undefined") {

								var segundo="<div>"+arr[1]+"</div>";

							}else{
								segundo="<div></div>";
							}



							if (arr[2]!=undefined && arr[2]!="undefined") {

								var tercero="<div>"+arr[2]+"</div>";

							}else{
								tercero="<div></div>";
							}



							if (arr[3]!=undefined && arr[3]!="undefined") {

								var cuarto="<div>"+arr[3]+"</div>";

							}else{
								cuarto="<div></div>";
							}



							if (arr[4]!=undefined && arr[4]!="undefined") {

								var quinto="<div>"+arr[4]+"</div>";

							}else{
								quinto="<div></div>";
							}



							if (arr[5]!=undefined && arr[5]!="undefined") {

								var sexto="<div>"+arr[5]+"</div>";

							}else{
								sexto="<div></div>";
							}



							return primero+"<br>"+segundo+"<br>"+tercero+"<br>"+cuarto+"<br>"+quinto+"<br>"+sexto;

						}else{

							return "No asignado";

						}							

					}else{

						return "No asignado";


					}

				}else if(parametro2[0]=="boton__2"){

					if(row[parametro4[0]]=="Notificado por no presentación de requisitos"){

						return "Notificado por no presentación de requisitos";

					}else if (row[parametro3[0]]!="" && row[parametro3[0]]!=null) {

						return "<center><button class='reasignarTramites estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#reasignarTra'><i class='fas fa-user-edit'></i></button><center><br>";

					}else{

						return "Aún no presenta los documentos";

					}


				}else if(parametro2[5]=="texto__separadores__cierre__anio__fiscal"){

                    if (row[parametro3[5]]=="si") {

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='si' style='background:red;color:white;'>CERRADO</option><option value='no'>No</option></select>";

                    }else{

                        return "<select  class='selectores__bloqueos__seguimiento ancho__total__input__selects' attr='estado'><option value='no' style='background:green;color:white;'>No</option><option value='si'>APERTURADO</option></select>";

                    }

                    

                }else{
					return row[parametro3[5]];
				}

			})

		});

	}		


	/*=====  End of Creación de elementos  ======*/

	return objeto;

}


var datatablets=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12){

    if (parametro12!=false) {
        parametro12=true;
    }

   var table =$(parametro1).DataTable({

        "language":{

            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "No existen datos",
            "oPaginate":{
              "sFirst":    "Primero",
              "sLast":     "Último",
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
            },
            "oAria": {
              "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },

       dom: 'Bfrtip',
        buttons: [
             'excel',
              {
                extend: 'pdf',
                text: 'PDF',
                orientation: 'landscape',
                customize:function(doc) {

                    doc.defaultStyle.fontSize = 6;

                    doc.styles.title = {
                        color: 'black',
                        fontSize: '8',
                        alignment: 'left',
                        margin:'0'                                                
                    }

                    doc.styles.tableHeader = {

                        fillColor:'#311b92',
                        fontSize: '8',
                        color:'white',
                        alignment:'center',
                                        
                    }

                }

            }
        ],

        "bLengthChange": false,
        "pagingType": "full_numbers",
        "Paginate": true,
        "pagingType": "full_numbers",
         "retrieve": true, 
         "paging": parametro12, 
         "pageLength":4,
        //"scrollX": true,

        "ajax":{

            "method":"POST",
            "url":"modelosBd/datatablets/datatablets.md.php", 
            "data": { 
              "identificador": parametro2,
              "datos": parametro3
            }  

        }, 

        "aoColumnDefs":parametro4,


    });

    if (parametro6[0]=="funcionReasingarTraRe") {

        funcion__datatabletsReasignarTraRe("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

    } 


    if (parametro6[0]=="funcionReasingarTra") {

         funcion__datatabletsReasignarTra("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

    }



    if (parametro6[0]=="funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones__reales") {

         funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones__reales("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

    }


   for (var i =0; i<parametro6.length;i++) {


       if (parametro6[i]=="funcion__editar") {

            if (parametro9[i]=="edita") {
                funcion__datatabletsEditar("#"+parametro2+" tbody",table,parametro7[i],parametro8[i],parametro9[i],parametro10,parametro11);
            }

       }



       if (parametro6[i]=="funcion__verItems__2") {

            funcion__verItemsObtener__2("#"+parametro2+" tbody",table,parametro7);

       }

       if (parametro6[i]=="funcion__verComponentes__156") {

            funcion__verComponentes__156("#"+parametro2+" tbody",table,parametro7);

       }


       if (parametro6[i]=="funcion__verItems") {

            funcion__verItemsObtener("#"+parametro2+" tbody",table,parametro7);

       }

       if (parametro6[i]=="funcionObtener") {

            funcion__datatabletsObtener("#"+parametro2+" tbody",table,parametro7,parametro8,parametro5,parametro9,parametro2);

       }

       if (parametro6[i]=="funcion__datatabletsEliminar") {

            if (parametro9[i]=="elimina") {
                funcion__datatabletsEliminar("#"+parametro2+" tbody",table,parametro7[i],parametro8[i],parametro9[i]);
            }

       }

       if (parametro6[i]=="funcionObtenerOrganismos__paid") {

         funcion__datatabletsAsignarInfor__2("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionObtenerOrganismos__eventos__organismos") {

         funcion__eventos__nuevos__2("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }
       if (parametro6[i]=="funcionObtenerOrganismos__eventos__organismos__2") {

         funcionObtenerOrganismos__eventos__organismos__2("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

      if (parametro6[i]=="funcionObtenerOrganismos__eventos__organismos__3") {

         funcionObtenerOrganismos__eventos__organismos__3("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionObtenerOrganismos") {

         funcion__datatabletsAsignarInfor("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionObtenerOrganismosM") {

         funcion__datatabletsAsignarInforDos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__datatabletsEliminar__paid__componentes__s") {

         funcion__datatabletsEliminar__paid__componentes__s("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__datatabletsEliminar___849") {

         funcion__datatabletsEliminar___849("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }



        if (parametro6[i]=="funcion__editar__986") {
            funcion__editar__986("#"+parametro2+" tbody",table,parametro7[i],parametro8[i],parametro9[i],parametro10,parametro11);
        }

       if (parametro6[i]=="funcionEditarOrgaM") {

         funcion__datatabletsAsignarEditarDos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }



       if (parametro6[i]=="funcionEditarOrga") {

         funcion__datatabletsAsignarEditar("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionReasingarTraGe") {

         funcion__datatabletsReasignarTraGene("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraGe__modificaciones") {

         funcion__datatabletsReasignarTraGene__modificaciones("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }



       if (parametro6[i]=="funcionReasingarTra__finan") {

         funcion__datatabletsReasignarTra__finan("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionReasingarTra__finan__rechazar") {

         funcion__datatabletsReasignarTra__finan__rechazas("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraCoordinas") {

         funcion__datatabletsReasignarTraCoordinas("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraCoordinasFinan") {

         funcion__datatabletsReasignarTraFinan("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }




       if (parametro6[i]=="funcionReasingarTraRe_talento") {

         funcion__datatabletsReasignarTraRe__talento("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraReInfran") {

         funcion__datatabletsReasignarTraRe__infras("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraCoordinas__subsess") {

         funcionReasingarTraCoordinas__subsess("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionReasingarTraCoordinas__financs") {

         funcionReasingarTraCoordinas__financs("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionReasingarTraCoordinas__instalaciones") {

         funcionReasingarTraCoordinas__instalaciones("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionReasingarTraReAdminis") {

         funcion__ReasingarTraReAdminis("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }
       
       if (parametro6[i]=="funcionReasingarTraReInstala") {

         funcion__ReasingarTraReInstala("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }
       
       if (parametro6[i]=="funcionCoordinasOb") {

         funcion__enCordi("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionCoordinasOb__2") {

         funcion__enCordi__2("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcionCoordinasOb__3") {

         funcion__enCordi__3("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcionCoordinasObservacion") {

         funcion__enCordiObservi("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__eliminar") {

         funcion__eliminarI("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__eliminar__esigef") {

         funcion__eliminar__esigef("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }



       if (parametro6[i]=="funcionEditar__gestionados") {

        funcion__gestionados__i("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }       

       if (parametro6[i]=="funcionEditar__gestionados_s") {

        funcionEditar__gestionados_s("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }       


       if (parametro6[i]=="funcionReasingar__aprobados__dos") {

        funcionReasingar__aprobados__dos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion___termina__financiero") {

        funcion___termina__financiero("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos") {

        funcion__reasignar__seguimientos__unidos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__remanentes__asignados") {

        funcion__remanentes__asignados("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__reasignar__seguimientos__recorridos") {

        funcion__reasignar__seguimientos__recorridos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__reasignar__seguimientos__recorridos__anexos__reportes") {

        funcion__reasignar__seguimientos__recorridos__anexos__reportes("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__bloqueos__seguimientos") {

        funcion__bloqueos__seguimientos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__altos") {

        funcion__reasignar__seguimientos__unidos__altos("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__actividad__fisica") {

        funcion__reasignar__seguimientos__unidos__actividad__fisica("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__altos__recomendados") {

        funcion__reasignar__seguimientos__unidos__altos__recomendados("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__altos__recomendados__formaRe") {

        funcion__reasignar__seguimientos__unidos__altos__recomendados__formaRe("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe") {

        funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__ins") {

        funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__ins("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones") {

        funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funcion__control__de__cambios") {

        funcion__control__de__cambios("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funrion__reasignar__paid") {

        funrion__reasignar__paid("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

       if (parametro6[i]=="funrion__reasignar__paid__recomiendas") {

        funrion__reasignar__paid__recomiendas("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }


       if (parametro6[i]=="funrion__reasignar__paid__recomiendas__repoteria__recomiendas") {

        funrion__reasignar__paid__recomiendas__repoteria__recomiendas("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }



       if (parametro6[i]=="funrion__negar__paid__recomiendas") {

        funrion__negar__paid__recomiendas("#"+parametro2+" tbody",table,parametro7,parametro8,parametro9);

       }

   }

   if (parametro2=="tablaItemsAc1" || parametro2=="tablaItemsAc2" || parametro2=="tablaItemsAc3" || parametro2=="tablaItemsAc4" || parametro2=="tablaItemsAc5" || parametro2=="tablaItemsAc6" || parametro2=="tablaItemsAc7" || parametro2=="tablaItemsAc8" || parametro2=="tablaItemsAc9" || parametro2=="tablaItemsAc10" || parametro2=="tablaItemsAc11" || parametro2=="tablaItemsAc12" || parametro2=="tablaItemsAc13" || parametro2=="tablaItemsAc14" || parametro2=="tablaItemsAc15" || parametro2=="tablaItemsAc16") {

        funcion__datatabletsEliminar2("#"+parametro2+" tbody",table);

        funcion__datatabletsEditas2N("#"+parametro2+" tbody",table);

   }


    /*=========================================
    =            Actualiza modales            =
    =========================================*/
    
    var actualizaDatablets=function(parametro1){

        $(parametro1).click(function(e){

            table.ajax.reload();

        });

    }

    actualizaDatablets($(".refrezcar__tabla")); 
    
    /*=====  End of Actualiza modales  ======*/

}


/*======================================================
=            Función llamar data necesarias            =
======================================================*/


var funrion__reasignar__paid=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").html("<div class='text-center'>"+data[1]+"</div><div class='text-center'> Techo presupuestario: "+data[11]+"</div>");

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	let idRolAd=$("#idRolAd").val();

  	console.log(data);


  	$("#idUsuarioEn").val($("#idUsuarioPrincipal").val());

  	if (idRolAd==3) {

  		$(".calificar__eliminantes__paid__analistas").show();

  		/*===========================================
  		=            Calificar defaultas            =
  		===========================================*/
  		

  		var change__cambio__real=function(parametro1,parametro2){

			$(parametro1).change(function(){
			
				$(".contenedor__boton__negacion").hide();
				$(".contenedor__boton__recomendacion").hide();

			});


		}
		change__cambio__real($(".conjunto__selects__desarrollo"));

  		var calificar__botones=function(parametro1,parametro2){

			$(parametro1).click(function(){

				function validacionRegistro(parametro1){

					var sumadorErrores=0;

					$(parametro1).each(function(index) {

						if($(this).val()==0){
					     	sumadorErrores++;
						}

					});

					if (sumadorErrores==0) {
						return true;
					}else{
						return false;
					}

				}

				var validacionRegistroMostrarErrores=function(parametro1){

					var sumadorErrores=0;

					$(parametro1).each(function(index) {

						if($(this).val()==0){
					    	$(this).addClass('error');
						}else{
					    	$(this).removeClass('error');
						}
					  
					});

				}


				var validador=validacionRegistro($(".conjunto__selects__desarrollo"));

				validacionRegistroMostrarErrores($(".conjunto__selects__desarrollo"));


	
				if (validador==false) {

					alertify.set("notifier","position", "top-center");
				    alertify.notify("Obligatorio calificar todos los criterios", "error", 5, function(){});

				}else{

					function comparaciones__selectores(parametro1){

						var sumadoresDependencias=0;

						$(parametro1).each(function(index) {

							if($(this).val()=="No"){
						     	sumadoresDependencias++;
							}

						});

						if (sumadoresDependencias==0) {
							return true;
						}else{
							return false;
						}

					}

					let realizacionEnvios=comparaciones__selectores($(".conjunto__selects__desarrollo"));

					if (realizacionEnvios==false) {

						$(".recomendacion__ocultando").hide();

						$(".contenedor__boton__negacion").show();


					}else{

						$(".recomendacion__ocultando").show();

						$(".contenedor__boton__negacion").hide();


					}
					

				}


			});


		}
		calificar__botones($("#calificar__secciones__alto")); 
		calificar__botones($("#calificar__secciones__desarrollo")); 		
  		
  		/*=====  End of Calificar defaultas  ======*/
  		

  		$(".ocultos__en__funcionarios").hide();

  		$(".recomendacion__activo__funcionarios").append("<div class='col col-4' style='font-weight:bold!important;'>Regresar al director</div><div class='col col-8' style='text-align:left;'><input type='checkbox' id='regresarCheckeds' class='checkeds'></div>");


  		$(".contenedor__boton__generacion__pdf").show();

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(parametro2).hide();

			    	$(".oculto__paid__informacion").show();

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();


			    }else{

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();

					$(".oculto__paid__informacion").hide();

			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  		var checkboxFunciones__2=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(parametro2).hide();

			    	if (data[10]==1) {

						$(".oculto__calificaciones__altos").hide();
						$(".oculto__calificaciones__desarrollos").show();

					}else{

						$(".oculto__calificaciones__altos").show();
						$(".oculto__calificaciones__desarrollos").hide();

					}

					$(".oculto__paid__informacion").hide();


			    }else{

			    	$(".oculto__paid__informacion").hide();

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();

			    }


			});


		}
		checkboxFunciones__2($("#calificar__checkeds"),$(".ocultos__en__funcionarios"));


  		var checkboxFunciones=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			      $(parametro2).show();

				  $("#guardarRecomendacion__paid").hide();	
				  $("#observaciones__recomendaciones__recomiendas").hide();
				  $(".oculto__archivos__recomendaciones").hide();
				  $(".contenedor__boton__generacion__pdf__desarrollo").hide();			
				  $(".contenedor__boton__generacion__pdf").hide();
				  $(".contenedor__boton__generacion__pdf__alto").hide();		


		      	  $(".oculto__paid__informacion").hide();

				  $(".oculto__calificaciones__altos").hide();
				  $(".oculto__calificaciones__desarrollos").hide();


			    }else{


			      $(".oculto__paid__informacion").hide();

				  $(".oculto__calificaciones__altos").hide();
				  $(".oculto__calificaciones__desarrollos").hide();

			      $(parametro2).hide();

			      $("#guardarRecomendacion__paid").show();	
			      $("#observaciones__recomendaciones__recomiendas").show();	
			      $(".oculto__archivos__recomendaciones").show();

				if (data[10]==1) {

					$(".contenedor__boton__generacion__pdf__alto").hide();
					$(".contenedor__boton__generacion__pdf__desarrollo").show();

				}else{

					$(".contenedor__boton__generacion__pdf__alto").show();
					$(".contenedor__boton__generacion__pdf__desarrollo").hide();

				}



			   }


			});


		}
		checkboxFunciones($("#regresarCheckeds"),$(".ocultos__en__funcionarios"));

		if (data[10]==1) {

			$(".contenedor__boton__generacion__pdf__alto").remove();
			$(".contenedor__boton__generacion__pdf__desarrollo").show();

			$("#tipoPdf").val('paid__informe__desarrollo__tecnico');

			$(".eventos__vinculacion__general").hide();
			$(".interdisciplinario__vinculacion__general").hide();
			$(".individuales__vinculacion__general").hide();
			$(".generales__vinculacion__general").hide();
			$(".encuentro__activo__vinculacion__general").show();


		}else{

			$(".contenedor__boton__generacion__pdf__alto").show();
			$(".contenedor__boton__generacion__pdf__desarrollo").remove();

			$("#tipoPdf").val('paid__informe__alto__tecnico');


			$(".eventos__vinculacion__general").show();
			$(".interdisciplinario__vinculacion__general").show();
			$(".individuales__vinculacion__general").show();
			$(".generales__vinculacion__general").show();
			$(".encuentro__activo__vinculacion__general").hide();


		}


  	}else{

  		$(".oculto__archivos__recomendaciones").remove();

  		$(".ocultos__en__funcionarios").show();

  		$("#guardarRecomendacion__paid").remove();

  		$("#observaciones__recomendaciones__recomiendas").remove();

  		$(".contenedor__boton__generacion__pdf").remove();

  		$(".contenedor__boton__generacion__pdf").remove();

		$(".contenedor__boton__negacion").remove();

		$(".contenedor__boton__generacion__pdf__alto").remove();

		$(".contenedor__boton__generacion__pdf__desarrollo").show();

		$(".calificar__eliminantes__paid__analistas").remove();

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").show();
			    	$(".paid__vinculacion__general").show();
			    	$(".indicadores__vinculacion__general").show();


					if (data[10]==1) {

						$(".eventos__vinculacion__general").hide();
						$(".interdisciplinario__vinculacion__general").hide();
						$(".individuales__vinculacion__general").hide();
						$(".generales__vinculacion__general").hide();
						$(".encuentro__activo__vinculacion__general").show();

					}else{


						$(".eventos__vinculacion__general").show();
						$(".interdisciplinario__vinculacion__general").show();
						$(".individuales__vinculacion__general").show();
						$(".generales__vinculacion__general").show();
						$(".encuentro__activo__vinculacion__general").hide();

					}

			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));



  	}

	console.log(data);

  });

}


var funrion__negar__paid__recomiendas=function(tbody,table){

  $(tbody).on("click","button.negadosDirector__regresados",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos2 = new FormData();

	paqueteDeDatos2.append('tipo','seguimiento__control__cambios__negacion');
	paqueteDeDatos2.append("idOrganismo",data[9]);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos2,
		processData: false,
		cache: false, 
		success:function(response){

			let elementos=JSON.parse(response);

			let envio__informaciones=elementos['envio__informaciones'];
			let idtipo=elementos['idtipo'];

			$(".titulo__asignacion__paid").text(data[1]);

		  	$("#idOrganismoPaid").val(data[9]);

		  	if (idtipo==0) {

		  		$(".oculto__calificaciones__altos__negados").show();
		  		$(".oculto__calificaciones__desarrollos__negados").hide();

		  		for(w of envio__informaciones){

		  			$(".observacion__1").text(w.opcion1);
		  			$(".observacion__2").text(w.opcion2);
		  			$(".observacion__3").text(w.opcion3);
		  			$(".observacion__4").text(w.opcion4);
		  			$(".observacion__5").text(w.opcion5);
		  			$(".observacion__6").text(w.opcion6);
		  			$(".observacion__7").text(w.opcion7);
		  			$(".observacion__8").text(w.opcion8);
		  			$(".observacion__9").text(w.opcion9);


		  			$(".comentario__1").text(w.comentario1);
		  			$(".comentario__2").text(w.comentario2);
		  			$(".comentario__3").text(w.comentario3);
		  			$(".comentario__4").text(w.comentario4);
		  			$(".comentario__5").text(w.comentario5);
		  			$(".comentario__6").text(w.comentario6);
		  			$(".comentario__7").text(w.comentario7);
		  			$(".comentario__8").text(w.comentario8);
		  			$(".comentario__9").text(w.comentario9);

		  		}


		  	}else{

		  		$(".oculto__calificaciones__desarrollos__negados").show();
		  		$(".oculto__calificaciones__altos__negados").hide();

		  		for(w of envio__informaciones){

		  			$(".observacion__1").text(w.opcion1);
		  			$(".observacion__2").text(w.opcion2);
		  			$(".observacion__3").text(w.opcion3);
		  			$(".observacion__4").text(w.opcion4);
		  			$(".observacion__5").text(w.opcion5);
		  			$(".observacion__6").text(w.opcion6);
		  			$(".observacion__7").text(w.opcion7);

		  			$(".comentario__1").text(w.comentario1);
		  			$(".comentario__2").text(w.comentario2);
		  			$(".comentario__3").text(w.comentario3);
		  			$(".comentario__4").text(w.comentario4);
		  			$(".comentario__5").text(w.comentario5);
		  			$(".comentario__6").text(w.comentario6);
		  			$(".comentario__7").text(w.comentario7);

		  		}


		  	}


			console.log(data);

		},
		error:function(){

		}
							
	});	  


  });

}


var funrion__reasignar__paid__recomiendas__repoteria__recomiendas=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid__recomiendas__repor__final",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','seleccion__designacion__tramites__repors__finales');
  	paqueteDeDatos.append("idOrganismo",data[9]);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			var elementos=JSON.parse(response);

			var envio__informaciones=elementos['envio__informaciones'];

			for (x of envio__informaciones) {

				$(".contenedor__contenidos").append('<tr class="fila__e'+x.idAsignacion+'"><td><center>'+x.area+'</center></td><td><center>'+x.fechaHora+'</center></td><td><center>'+x.accion+'</center></td><td><center>'+x.de+'</center></td><td><center>'+x.para+'</center></td><td><center>'+x.dias+'</center></td><td><center>'+x.observacion+'</center></td></tr>');

			}


			$(".oficio__ante").append('<a href="documentos/paid/oficioAprobacion/'+x.oficio+'" target="_blank">Oficio</a>');

			$(".informe__ante").append('<a href="documentos/paid/informesTecnicos/'+x.informe+'" target="_blank">Informe</a>');



		},
		error:function(){

		}
				
	});	


  	var checkboxFunciones__3=function(parametro1,parametro2){

		$(parametro1).click(function(){
			
			var condicion = $(this).is(":checked");

			if (condicion) {

				$(".oculto__paid__informacion").show();

				if (data[11]==1) {

					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").show();

				}else{


					$(".eventos__vinculacion__general").show();
					$(".interdisciplinario__vinculacion__general").show();
					$(".individuales__vinculacion__general").show();
					$(".generales__vinculacion__general").show();
					$(".encuentro__activo__vinculacion__general").hide();

				}

			}else{

				$(".oculto__paid__informacion").hide();
				$(".paid__vinculacion__general").hide();
				$(".indicadores__vinculacion__general").hide();
				$(".eventos__vinculacion__general").hide();
				$(".interdisciplinario__vinculacion__general").hide();
				$(".individuales__vinculacion__general").hide();
				$(".generales__vinculacion__general").hide();
				$(".encuentro__activo__vinculacion__general").hide();

			}

		});


	}
	checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  });

}


var funrion__reasignar__paid__recomiendas=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid__recomiendas",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	$("#informeEnlacesDescargar").attr('href','documentos/paid/informesTecnicos/'+data[10]);

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").show();
			    	$(".paid__vinculacion__general").show();
			    	$(".indicadores__vinculacion__general").show();


					if (data[11]==1) {

						$(".eventos__vinculacion__general").hide();
						$(".interdisciplinario__vinculacion__general").hide();
						$(".individuales__vinculacion__general").hide();
						$(".generales__vinculacion__general").hide();
						$(".encuentro__activo__vinculacion__general").show();

					}else{


						$(".eventos__vinculacion__general").show();
						$(".interdisciplinario__vinculacion__general").show();
						$(".individuales__vinculacion__general").show();
						$(".generales__vinculacion__general").show();
						$(".encuentro__activo__vinculacion__general").hide();

					}

			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();


			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  	let idRolAd=$("#idRolAd").val();
  	let fisicamenteE=$("#fisicamenteE").val();

  	console.log(data);

	var asignacion__usuarios__re__contrarios__coordinadores=function(parametro1){


		indicador=502;
		let idUsuario=$("#idUsuarioPrincipal").val();
		let idOrganismoPaid=$("#idOrganismoPaid").val();

		$.ajax({

		  data: {indicador:indicador,idUsuario:idUsuario,idOrganismoPaid:idOrganismoPaid},
	      dataType: 'html',
	      type:'POST',
		  url:'modelosBd/validaciones/selector.modelo.php'

		}).done(function(lista_tipo__organismos){

		  $(parametro1).html(lista_tipo__organismos);


		}).fail(function(){

		  

		});

	}

	asignacion__usuarios__re__contrarios__coordinadores($("#selectorUsuarios__asignar__plani__coordinadores"));


  	if (idRolAd==3 && fisicamenteE==18) {

  		$(".planificacion__director__variables").remove();

  		$(".ocultos__en__funcionarios__paids").hide();

  		$(".recomendacion__activo__funcionarios").append("<div class='col col-4' style='font-weight:bold!important;'>Regresar</div><div class='col col-8 text-left'><input type='checkbox' id='regresarCheckeds__paids' class='checkeds'></div>");

  		$("#guardarReasignacion__paid__recomendacion").text("REGRESAR");

  		var checkboxFunciones=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			      $(parametro2).show();

				  $("#guardarRecomendacion__final__paid").hide();	
				  $("#observaciones__recomendaciones__recomiendas__final").hide();	

				  $(".file__final__paid").hide();		      

			    }else{

			      $(parametro2).hide();

			      $("#guardarRecomendacion__final__paid").show();	
			      $("#observaciones__recomendaciones__recomiendas__final").show();	

			      $(".file__final__paid").show();

			   }


			});


		}
		checkboxFunciones($("#regresarCheckeds__paids"),$(".ocultos__en__funcionarios__paids"));

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();

  		$(".oculto__archivos__recomendaciones__de__finales").remove();

  		$(".recomendaciones__directores").remove();

  		$(".ocultando__necesarios__directores").remove();

  		$("#observaciones__recomendaciones__recomiendas__final").remove();

  		$("#observaciones__recomendaciones__recomiendas__final").remove();

  		$(".contenido__asignaciones__directores__apruebas").remove();



  	}else if (idRolAd==2 && fisicamenteE==18) {

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();


		$(".contenido__asignaciones__directores").hide();
		$(".contenido__asignaciones__directores__apruebas").hide();

		$(".oculto__archivos__recomendaciones__de__finales").remove();

		$(".encuentro__activo__vinculacion__general").show();

		$(".recomendacion__analista__director__planificaciones").remove();

  		var checkboxFunciones__5=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").hide();
			    	$(".paid__vinculacion__general").hide();
			    	$(".indicadores__vinculacion__general").hide();
					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

					$(".contenido__asignaciones__directores").hide();
					$(".contenido__asignaciones__directores__apruebas").hide();

					$(parametro2).show();


			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

					$(".contenido__asignaciones__directores").hide();
					$(".contenido__asignaciones__directores__apruebas").hide();

					$(parametro2).hide();


			    }


			});


		}
		checkboxFunciones__5($("#asignar__directorPlanificacion"),$(".contenido__asignaciones__directores"));
		checkboxFunciones__5($("#aprobar__directorPlanificacion"),$(".contenido__asignaciones__directores__apruebas"));

		$(".recomendaciones__directores").remove();

  	}else if (idRolAd==4 && fisicamenteE==3) {

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".oculto__archivos__recomendaciones__de__finales").remove();

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();


  	}else if (idRolAd==7) {

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();

  	}else{

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();

  	}

	console.log(data);

  });

}

/*=====  End of Función llamar data necesarias  ======*/


/*========================================================================
=            Funcion realizar seguimientos admin seguimientos            =
========================================================================*/

var funcion__control__de__cambios=function(tbody,table){

  $(tbody).on("click","button.guardar__informacion__conjuntos__radios",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	let radiosValues=$('input:radio[name=radio__select__'+data[5]+']:checked').val();

  	if (radiosValues==undefined || radiosValues==null || radiosValues=="" || radiosValues==" ") {

  		alertify.set("notifier","position", "top-center");
		alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});
		

  	}else{

		var confirm= alertify.confirm('¿Está seguro de confirmar la acción?','¿Está seguro de confirmar la acción?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo

  		var paqueteDeDatos2 = new FormData();

		paqueteDeDatos2.append('tipo','seguimiento__control__cambios');
		paqueteDeDatos2.append("idSeguimientoCmabios",data[6]);
		paqueteDeDatos2.append("radiosValues",radiosValues);

		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/insertaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos2,
			processData: false,
			cache: false, 
			success:function(response){

				let elementos=JSON.parse(response);

				let mensaje=elementos['mensaje'];

				if(mensaje==1){

					alertify.set("notifier","position", "top-center");
					alertify.notify("Acción realizada correctamente", "success", 5, function(){});

			   	 	window.setTimeout(function(){ 

				       location.reload();

				    } ,3000); 


			    }

			},
			error:function(){

			}
							
		});	  		

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){
			}); 
		}); 

  	}


  });

}

/*=====  End of Funcion realizar seguimientos admin seguimientos  ======*/



/*===============================================================
=             formatos relacionales infraestructuras            =
===============================================================*/

var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__ins=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados__insta",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	console.log(data);

	if ($("#idRolAd").val()==3) {

		$(".observacionesReasignaciones").show();

	}else{

		$(".observacionesReasignaciones").show();

	} 	

  	$("#idOrganismo").val(data[16]);
  	$("#periodo").val(data[5]);
  	$("#idUSeguimientos").val($("#idUsuarioC").val());
  	$("#tipoAct").val(data[18]);

  	if ($("#idRolAd").val()==4) {

  		$(".fila__reasignar").show();
  		$(".fila__regresar__a").remove();

  	}else if($("#idRolAd").val()==2){

  		$(".fila__regresar__a").show();
  		$(".fila__reasignar").show();
  		$(".oculto__file__recomendaciones").hide();

  	}else if($("#idRolAd").val()==3){

  		$(".fila__regresar__a").show();
  		$(".fila__reasignar").remove();

  	}

  });

}

/*=====  End of  formatos relacionales infraestructuras  ======*/


/*=============================================
=            Recomendar formativos            =
=============================================*/

var funcion__reasignar__seguimientos__unidos__altos__recomendados__formaRe=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos__f__r');

  	paqueteDeDatos.append("idOrganismo",data[4]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__2",data[3]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let envio__tecnicos=elementos['envio__tecnicos'];
		    let zonal__eu=elementos['zonal__eu'];
		    let documentos__tecnicos=elementos['documentos__tecnicos'];

		    $("#organismoOculto__modal").val(data[4]);

		    if($("#idRolAd").val()==7){

		    	$(".direccion__seguimientos__ocultos").show();

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();


		    }else if (zonal__eu==1 || zonal__eu=="1") {

		    	$("#selects__superiores__regresar").show();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();

		    	$("#selects__superiores__regresar__coors__acFisicas").remove();

		    }else{

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores__regresar__coors").show();

		    	$("#selects__superiores").remove();
		    	$("#selects__superiores__subsess").show();

		    	$("#selects__superiores__regresar").remove();

		    }

		    for (w of envio__tecnicos) {

		    	$(".funcionario__recomendaste").text(w.nombreCompleto);
		    	$(".fecha__recomendaste").text(w.fecha);

		    }

		    for (z of documentos__tecnicos) {

		    	if (data[3]=="FORMATIVO") {
		    		$("#informe__recomendados").attr('href','documentos/seguimiento/informe__formativos/'+z.archivo);
		    	}else{
		    		$("#informe__recomendados").attr('href','documentos/seguimiento/informe__recreativos/'+z.archivo);
		    	}

		    	

		    	$(".observaciones__recomendaste").text(z.observacion);
		    	$("#nombreDocumento").val(z.archivo);
		    	$(".recomendaciones__recomendaste").text(z.recomendacion);

		    }

		    if ($("#idRolAd").val()==7) {

		    	$(".oculto__subsess__deseados").attr('style','visibility: hidden!important;');

		    }

		    $("#periodo").val(data[2]);

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}

/*=====  End of Recomendar formativos  ======*/



/*==================================================================
=            Funcion reasignar seguimientos segimientos            =
==================================================================*/

var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[4]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__dos",data[3]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let documentos__tecnico__2__seguimientos=elementos['documentos__tecnico__2__seguimientos'];
		    let envio__tecnicos__seguimientos=elementos['envio__tecnicos__seguimientos'];
		    let varaible__culminados=elementos['varaible__culminados'];
		    let documentos__tecnicos__2=elementos['documentos__tecnicos__2'];
		    let var_n_se_in=elementos['var_n_se_in'];
		    let envio__tecnicos__seguimientos__infraestructuras=elementos['envio__tecnicos__seguimientos__infraestructuras'];

		    let var_n_se_in__45=elementos['var_n_se_in__45'];

		    $("#organismoOculto__modal").val(data[4]);

		    $("#periodo").val(data[2]);

		    for (z of envio__tecnicos__seguimientos) {

		    	$(".funcionario__recomendaste").text(z.nombreCompleto);
		    	$(".fecha__recomendaste").text(z.fecha);

		    }

		    for (z of documentos__tecnico__2__seguimientos) {

		    	$("#informe__recomendados").attr('href','documentos/seguimiento/informesSeguimientos/'+z.documentos);

		    	$(".observaciones__recomendaste").text(z.observaciones);
		    	$("#nombreDocumento").val(z.documentos);
		    	$(".recomendaciones__recomendaste").text(z.recomendaciones);

		    }


		    if (var_n_se_in==1 && envio__tecnicos__seguimientos__infraestructuras!="" && envio__tecnicos__seguimientos__infraestructuras!=undefined && envio__tecnicos__seguimientos__infraestructuras!=" " && envio__tecnicos__seguimientos__infraestructuras!=null && var_n_se_in__45==1) {

		    	for (z of envio__tecnicos__seguimientos__infraestructuras) {

			    	$(".boton__pdfs__infraestructuras").show();

			    	$("#documentos__tecnicos__i").attr('href','documentos/seguimiento/informesInfraestructuras/'+z.documentoInfras);

		    	}

		    }



			if (varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null) {

				for (zC of documentos__tecnicos__2) {

					if (data[2]=="FORMATIVO") {

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informe__formativos/'+zC.archivo);

					}else if (data[2]=="RECREACION") {

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informe__recreativos/'+zC.archivo);

					}else{

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informes__altos/'+zC.archivo);

					}

				}

				$(".boton__pdfs__tecnicas").show();


			}else{

				$(".oculto__subsess__deseados").hide();

				$(".clases__puedes__recomendares").text("FALTA EL INFORME DEL ÁREA TÉCNICA");


			}

		    if (var_n_se_in==1 && (envio__tecnicos__seguimientos__infraestructuras=="" || envio__tecnicos__seguimientos__infraestructuras==undefined && envio__tecnicos__seguimientos__infraestructuras==" " || envio__tecnicos__seguimientos__infraestructuras==null || var_n_se_in__45==0)) {

				$(".clases__puedes__recomendares").text("FALTA EL INFORME DEL ÁREA DE INFRAESTRUCTURA");

		    }

		    if (var_n_se_in==1 && envio__tecnicos__seguimientos__infraestructuras!="" && envio__tecnicos__seguimientos__infraestructuras!=undefined && envio__tecnicos__seguimientos__infraestructuras!=" " && envio__tecnicos__seguimientos__infraestructuras!=null && varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null && var_n_se_in__45==1) {

		    	$("#enviar__orgnaismosDeportivos").show();

		    }else if(var_n_se_in==0 && varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null){

		    	$("#enviar__orgnaismosDeportivos").show();                        

		    }



		});	

		},
		error:function(){

		}
				
	});	  	

  });

}

/*=====  End of Funcion reasignar seguimientos segimientos  ======*/


/*=============================
=            Función recomendar altos            =
=============================*/

var funcion__reasignar__seguimientos__unidos__altos__recomendados=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[3]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let envio__tecnicos=elementos['envio__tecnicos'];
		    let zonal__eu=elementos['zonal__eu'];
		    let documentos__tecnicos=elementos['documentos__tecnicos'];

		    $("#organismoOculto__modal").val(data[3]);

			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}


		    if($("#idRolAd").val()==7){

		    	$(".direccion__seguimientos__ocultos").show();

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();


		    }else if (zonal__eu==1 || zonal__eu=="1") {

		    	$("#selects__superiores__regresar").show();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();

		    }else{

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores__regresar__coors").show();

		    	$("#selects__superiores").remove();
		    	$("#selects__superiores__subsess").show();

		    }

		    for (w of envio__tecnicos) {

		    	$(".funcionario__recomendaste").text(w.nombreCompleto);
		    	$(".fecha__recomendaste").text(w.fecha);

		    }

		    for (z of documentos__tecnicos) {

		    	$("#informe__recomendados").attr('href','documentos/seguimiento/informes__altos/'+z.archivo);

		    	$(".observaciones__recomendaste").text(z.observacion);
		    	$("#nombreDocumento").val(z.archivo);
		    	$(".recomendaciones__recomendaste").text(z.recomendacion);

		    }

		    if ($("#idRolAd").val()==7) {

		    	$(".oculto__subsess__deseados").attr('style','visibility: hidden!important;');

		    }

		    $("#periodo").val(data[2]);

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Función recomendar altos  ======*/


/*==============================================================
=            Funcion seguimientos actividad fisicas            =
==============================================================*/


var funcion__reasignar__seguimientos__unidos__actividad__fisica=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosActividad",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var indicadores__altos=elementos['indicadores__altos'];

		    var autogestionesV=elementos['autogestionesV'];

		     var medallas__altos__formativos=elementos['medallas__altos__formativos'];


		    $(".presupuesto__autogestion__asignado__pais__altos").text(autogestionesV);
		    $("#presupuesto__autogestion__asignado__pais__altos").val(autogestionesV);

			/*==================================================
			=            Registrar datos necesarios            =
			==================================================*/
			

			$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center'>SUBSECRETARIA DE DESARROLLO DE LA ACTIVIDAD FISICA</div><input type='hidden' id='subsecretarias__escritas' name='subsecretarias__escritas' value='SUBSECRETARIA DE DESARROLLO DE LA ACTIVIDAD FISICA'/>");

			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}			


			if (data[18]=="FORMATIVO") {

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE DEPORTE FORMATIVO Y EDUCACION FISICA</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE DEPORTE FORMATIVO Y EDUCACION FISICA'/>");

				$(".tabla__formativo__1").show();
				$(".tabla__recreativo__1").remove();


				$(".foramtivo__enlaces__medalleros").show();
				$(".recreativo__enlaces__medalleros").remove();

				$("#tipoAct").val("Formativo");

				$("#rotulo__recomendado").val("formativo");

			}else{

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE RECREACION</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE RECREACION'/>");

				$(".tabla__formativo__1").remove();
				$(".tabla__recreativo__1").show();

				$(".foramtivo__enlaces__medalleros").remove();
				$(".recreativo__enlaces__medalleros").show();

				$(".ocultos__paid__documentos").remove();

				$("#tipoAct").val("Recreativo");

				$("#rotulo__recomendado").val("recreativo");

			}


			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/

			
			if (parseInt(data[8], 10)<10) {

				$(".numerico__dinamicas").text("0"+data[8]);

				$("#numerico__dinamicas__inputs").val("0"+data[8]);

			}else{

				$(".numerico__dinamicas").text(data[8]);

				$("#numerico__dinamicas__inputs").val(data[8]);

			}


			/*=====  End of Registrar datos necesarios  ======*/


			/*=====================================================
			=            Asignar datos del datatablets            =
			=====================================================*/

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			if (data[5]=="primerTrimestre") {

				$(".trimestre__evaluados__al").text("I TRIMESTRE");
				$("#trimestre__evaluados__al").val("I TRIMESTRE");

			}else if (data[5]=="segundoTrimestre") {


				$(".trimestre__evaluados__al").text("II TRIMESTRE");
				$("#trimestre__evaluados__al").val("II TRIMESTRE");

			}else if (data[5]=="tercerTrimestre") {

				$(".trimestre__evaluados__al").text("III TRIMESTRE");
				$("#trimestre__evaluados__al").val("III TRIMESTRE");

			}else if (data[5]=="cuartoTrimestre") {

				$(".trimestre__evaluados__al").text("IV TRIMESTRE");
				$("#trimestre__evaluados__al").val("IV TRIMESTRE");
			}

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$("#periodo").val(data[5]);

			$(".nombre__organizacion__deportivas").text(data[1]);

			$("#nombre__organizacion__deportivas").val(data[1]);

			$(".ruc__organizacion__deportivas").text(data[0]);

			$("#ruc__organizacion__deportivas").val(data[0]);

			$(".presidente__organizacion__deportivas").text(data[10]);

			$("#presidente__organizacion__deportivas").val(data[10]);

			$(".correo__organizacion__deportivas").text(data[11]);

			$("#correo__organizacion__deportivas").val(data[11]);

			$(".direccion__organizacion__deportivas").text(data[12]);

			$("#direccion__organizacion__deportivas").val(data[12]);

			$(".provincia__organizacion__deportivas").text(data[2]);

			$("#provincia__organizacion__deportivas").val(data[2]);

			$(".canton__organizacion__deportivas").text(data[3]);

			$("#canton__organizacion__deportivas").val(data[3]);

			$(".parroquia__organizacion__deportivas").text(data[4]);

			$("#parroquia__organizacion__deportivas").val(data[4]);

			$(".barrio__organizacion__deportivas").text(data[13]);

			$("#barrio__organizacion__deportivas").val(data[13]);

			$(".presupuesto__asignado__pais__altos").text(poa__invers);

			$("#presupuesto__asignado__pais__altos").val(poa__invers);

			$("#idUSeguimientos").val($("#idUsuarioC").val());


			if ($("#idRolAd").val()=="7" || $("#idRolAd").val()==7) {

				$(".fila__reasignar").show();
				$(".fila__regresar__a").hide();

			}else if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2 || $("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".fila__reasignar").show();
				$(".fila__regresar__a").show();

				$(".reasignar__solo").removeClass('col');

				$(".reasignar__solo").removeClass('col-2');

				$(".reasignar__solo").addClass('col');

				$(".reasignar__solo").addClass('col-6');

			}else{

				$(".fila__reasignar").hide();
				$(".fila__regresar__a").show();

			}

			if ($("#idRolAd").val()=="3" || $("#idRolAd").val()==3) {

				$(".ocultos__en__altos").show();

			}else{

				$(".ocultos__en__altos").remove();

			}

			/*=====  End of Asignar datos del datatablets  ======*/



			if (medallas__altos__formativos!=undefined && medallas__altos__formativos!=null && medallas__altos__formativos!="" && medallas__altos__formativos!=" ") {

				for (w of medallas__altos__formativos) {

					if (data[18]=="FORMATIVO") {

						$("#oro__alto").val(w.oro);
						$("#plata__alto").val(w.plata);
						$("#bronce__alto").val(w.bronce);

					}else{

						$("#hombres__alto").val(w.oro);
						$("#mujeres__alto").val(w.plata);

					}

				}

			}else{

				$("#oro__alto").val(0);
				$("#plata__alto").val(0);
				$("#bronce__alto").val(0);

				$("#hombres__alto").val(0);
				$("#mujeres__alto").val(0);
				$("#personas__con__discapacidad__alto").val(0);				

			}			

			/*=========================================================
			=            Construción tablas de indicadores            =
			=========================================================*/

			let porcentajesCumplimientos=0;

			let div="";

			let sumaProgramado=0;
			let sumaAlcanzado=0;

			let porcentajeFinalAl=0;

			for (w of indicadores__altos) {

				sumaProgramado=parseFloat(sumaProgramado) + parseFloat(w.totalProgramado);
				sumaAlcanzado=parseFloat(sumaAlcanzado) + parseFloat(w.totalEjecutado);

				porcentajesCumplimientos=(parseFloat(w.totalEjecutado) / parseFloat(w.totalProgramado))*100;

				if (parseFloat(porcentajesCumplimientos).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)>=70 && parseFloat(porcentajesCumplimientos).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}



				$(".cuerpo__items__alto__rendimientos").append('<tr><td>'+w.nombreActividades+'</td><td>'+w.nombreIndicador+'</td><td>'+w.totalProgramado+'</td><td>'+w.totalEjecutado+'</td><td><center><div style="display:flex!important;">'+div+" "+parseFloat(porcentajesCumplimientos).toFixed(2)+'%</div></center></td></tr>');

			}

			porcentajeFinalAl=(parseFloat(sumaAlcanzado)/parseFloat(sumaProgramado))*100;

			$(".footer__altos__indicadores").append('<tr><th colspan="2"><center>Total</center></th><th><center>'+parseFloat(sumaProgramado).toFixed(2)+'</center></th><th><center>'+parseFloat(sumaAlcanzado).toFixed(2)+'</center></th><th><center>'+parseFloat(porcentajeFinalAl).toFixed(2)+' %</center></th></tr>');
			
			/*=====  End of Construción tablas de indicadores  ======*/
			

			if($("#idRolAd").val()=="7" || $("#idRolAd").val()==7){

				$(".superior__sin").remove();
				$(".superior__con").show();

			}else{

				$(".superior__sin").show();
				$(".superior__con").remove();

			}

			if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".regresar__superior__prin").remove();
				$(".regresar__superior__con").show();

			}else{

				$(".regresar__superior__prin").show();
				$(".regresar__superior__con").remove();

			}

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Funcion seguimientos actividad fisicas  ======*/


/*====================================================
=            Funcion de seguimiento altos            =
====================================================*/

var funcion__reasignar__seguimientos__unidos__altos=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var indicadores__altos=elementos['indicadores__altos'];

		    var medallas__altos__sumas=elementos['medallas__altos__sumas'];

			/*==================================================
			=            Registrar datos necesarios            =
			==================================================*/
			
			$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center'>SUBSECRETARÍA DE ALTO RENDIMIENTO</div><input type='hidden' id='subsecretarias__escritas' name='subsecretarias__escritas' value='SUBSECRETARÍA DE ALTO RENDIMIENTO'/>");


			if ($("#fisicamenteE").val()=="12" || $("#fisicamenteE").val()=="24") {

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCIÓN DE DE ALTO RENDIMIENTO</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCIÓN DE DE ALTO RENDIMIENTO'/>");

			}else{

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE DEPORTE PARA PERSONAS CON DISCAPACIDAD</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE DEPORTE PARA PERSONAS CON DISCAPACIDAD'/>");

			}



			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}			

			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/

			
			if (parseInt(data[8], 10)<10) {

				$(".numerico__dinamicas").text("0"+data[8]);

				$("#numerico__dinamicas__inputs").val("0"+data[8]);

			}else{

				$(".numerico__dinamicas").text(data[8]);

				$("#numerico__dinamicas__inputs").val(data[8]);

			}


			/*=====  End of Registrar datos necesarios  ======*/


			/*=====================================================
			=            Asignar datos del datatablets            =
			=====================================================*/

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			if (data[5]=="primerTrimestre") {

				$(".trimestre__evaluados__al").text("I TRIMESTRE");
				$("#trimestre__evaluados__al").val("I TRIMESTRE");

			}else if (data[5]=="segundoTrimestre") {


				$(".trimestre__evaluados__al").text("II TRIMESTRE");
				$("#trimestre__evaluados__al").val("II TRIMESTRE");

			}else if (data[5]=="tercerTrimestre") {

				$(".trimestre__evaluados__al").text("III TRIMESTRE");
				$("#trimestre__evaluados__al").val("III TRIMESTRE");

			}else if (data[5]=="cuartoTrimestre") {

				$(".trimestre__evaluados__al").text("IV TRIMESTRE");
				$("#trimestre__evaluados__al").val("IV TRIMESTRE");
			}

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$("#periodo").val(data[5]);

			$(".nombre__organizacion__deportivas").text(data[1]);

			$("#nombre__organizacion__deportivas").val(data[1]);

			$(".ruc__organizacion__deportivas").text(data[0]);

			$("#ruc__organizacion__deportivas").val(data[0]);

			$(".presidente__organizacion__deportivas").text(data[10]);

			$("#presidente__organizacion__deportivas").val(data[10]);

			$(".correo__organizacion__deportivas").text(data[11]);

			$("#correo__organizacion__deportivas").val(data[11]);

			$(".direccion__organizacion__deportivas").text(data[12]);

			$("#direccion__organizacion__deportivas").val(data[12]);

			$(".provincia__organizacion__deportivas").text(data[2]);

			$("#provincia__organizacion__deportivas").val(data[2]);

			$(".canton__organizacion__deportivas").text(data[3]);

			$("#canton__organizacion__deportivas").val(data[3]);

			$(".parroquia__organizacion__deportivas").text(data[4]);

			$("#parroquia__organizacion__deportivas").val(data[4]);

			$(".barrio__organizacion__deportivas").text(data[13]);

			$("#barrio__organizacion__deportivas").val(data[13]);

			$(".presupuesto__asignado__pais__altos").text(poa__invers);

			$("#presupuesto__asignado__pais__altos").val(poa__invers);

			$("#idUSeguimientos").val($("#idUsuarioC").val());

			if ($("#idRolAd").val()=="7" || $("#idRolAd").val()==7) {

				$(".fila__reasignar").show();
				$(".fila__regresar__a").hide();

			}else if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2 || $("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".fila__reasignar").show();
				$(".fila__regresar__a").show();

				$(".reasignar__solo").removeClass('col');

				$(".reasignar__solo").removeClass('col-2');

				$(".reasignar__solo").addClass('col');

				$(".reasignar__solo").addClass('col-6');

			}else{

				$(".fila__reasignar").hide();
				$(".fila__regresar__a").show();

			}

			if ($("#idRolAd").val()=="3" || $("#idRolAd").val()==3) {

				$(".ocultos__en__altos").show();

			}else{

				$(".ocultos__en__altos").remove();

			}

			/*=====  End of Asignar datos del datatablets  ======*/

			if (medallas__altos__sumas!=undefined && medallas__altos__sumas!=null && medallas__altos__sumas!="" && medallas__altos__sumas!=" ") {

				for (w of medallas__altos__sumas) {

					$("#oro__alto").val(w.oro);
					$("#plata__alto").val(w.plata);
					$("#bronce__alto").val(w.bronce);

				}

			}else{

				$("#oro__alto").val(0);
				$("#plata__alto").val(0);
				$("#bronce__alto").val(0);

			}

			/*=========================================================
			=            Construción tablas de indicadores            =
			=========================================================*/

			let porcentajesCumplimientos=0;

			let div="";

			let sumaProgramado=0;
			let sumaAlcanzado=0;

			let porcentajeFinalAl=0;

			for (w of indicadores__altos) {

				sumaProgramado=parseFloat(sumaProgramado) + parseFloat(w.totalProgramado);
				sumaAlcanzado=parseFloat(sumaAlcanzado) + parseFloat(w.totalEjecutado);

				porcentajesCumplimientos=(parseFloat(w.totalEjecutado) / parseFloat(w.totalProgramado))*100;

				if (parseFloat(porcentajesCumplimientos).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)>=70 && parseFloat(porcentajesCumplimientos).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}



				$(".cuerpo__items__alto__rendimientos").append('<tr><td>'+w.nombreActividades+'</td><td>'+w.nombreIndicador+'</td><td>'+w.totalProgramado+'</td><td>'+w.totalEjecutado+'</td><td><center><div style="display:flex!important;">'+div+" "+porcentajesCumplimientos+'%</div></center></td></tr>');

			}

			porcentajeFinalAl=(parseFloat(sumaAlcanzado)/parseFloat(sumaProgramado))*100;

			$(".footer__altos__indicadores").append('<tr><th colspan="2"><center>Total</center></th><th><center>'+parseFloat(sumaProgramado).toFixed(2)+'</center></th><th><center>'+parseFloat(sumaAlcanzado).toFixed(2)+'</center></th><th><center>'+parseFloat(porcentajeFinalAl).toFixed(2)+'</center></th></tr>');
			
			/*=====  End of Construción tablas de indicadores  ======*/
			

			if($("#idRolAd").val()=="7" || $("#idRolAd").val()==7){

				// $(".superior__sin").remove();
				// $(".superior__con").show();

				
				$(".superior__sin").show();
				$(".superior__con").remove();

			}else{

				$(".superior__sin").show();
				$(".superior__con").remove();

			}

			if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".regresar__superior__prin").remove();
				$(".regresar__superior__con").show();

			}else{

				$(".regresar__superior__prin").show();
				$(".regresar__superior__con").remove();

			}

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}



/*=====  End of Funcion de seguimiento altos  ======*/


/*===============================================
=            Seguimientos recorridos            =
===============================================*/

var funcion__reasignar__seguimientos__recorridos=function(tbody,table){

  $(tbody).on("click","button.reasignar__seguimientos__recorridos__boton",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos__recorridos');

  	paqueteDeDatos.append("idOrganismo",data[8]);

  	paqueteDeDatos.append("periodo",data[9]);

  	$(".cuerpo__contenedor__recorridos").html(' ');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){
				
			var elementos=JSON.parse(response);

		    var envio__informaciones=elementos['envio__informaciones'];

			for (w of envio__informaciones) {

				$(".cuerpo__contenedor__recorridos").append('<tr><td>'+w.fecha+'</td><td>'+w.tipo+'</td><td>'+w.estructura+'</td><td>'+w.usuarioActual+'</td><td>'+w.observacionesTecnicas+'</td></tr>')

			}

		});

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Seguimientos recorridos  ======*/


/*===============================================
=            Función de seguimientos            =
===============================================*/

var funcion__reasignar__seguimientos__unidos=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validacionBasica.js",function(){
				
			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var sumas__programados=elementos['sumas__programados'];

		    var primer__sumas__p=elementos['primer__sumas__p'];
		    var primer__sumas__e=elementos['primer__sumas__e'];
		    var segundo__sumas__p=elementos['segundo__sumas__p'];
		    var segundo__sumas__e=elementos['segundo__sumas__e'];
		    var tercero__sumas__p=elementos['tercero__sumas__p'];
		    var tercero__sumas__e=elementos['tercero__sumas__e'];
		    var cuarto__sumas__p=elementos['cuarto__sumas__p'];
		    var cuarto__sumas__e=elementos['cuarto__sumas__e'];

		    var varaible__culminados=elementos['varaible__culminados'];
		    var documentos__tecnicos__2=elementos['documentos__tecnicos__2'];

		    var variable__1__suma__programados=elementos['variable__1__suma__programados'];
		    var variable__1__suma__ejecutado=elementos['variable__1__suma__ejecutado'];
		    var variable__1__suma__planificado=elementos['variable__1__suma__planificado'];

		    $("#presupuesto__segun__poas").val(poa__invers);


		    if ($("#idRolAd").val()==2 && $("#fisicamenteE").val()==20) {

		    	$(".fila__reasignar").show();
		    	$(".fila__regresar__a").hide();

		    }else if($("#idRolAd").val()==3 && $("#fisicamenteE").val()==20){

		    	$(".fila__reasignar").hide();
		    	$(".fila__regresar__a").show();

		    }

		    $("#tipos__nomenclaturas").val(data[18]);

			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/
			
		/*=========================================
		=            Evaluar los datos            =
		=========================================*/
		
			
		if (parseInt(data[8], 10)<10) {

			$(".numerico__dinamicas").text("0"+data[8]);

			$("#numerico__dinamicas__inputs").val("0"+data[8]);

		}else{

			$(".numerico__dinamicas").text(data[8]);

			$("#numerico__dinamicas__inputs").val(data[8]);

		}

		$(".periodo__evaluados__anuales").text(data[9]);

		$("#periodo__evaluados__anuales").val(data[9]);

		$("#organismoOculto__modal").val(data[16]);

		$("#idOrganismo").val(data[16]);

		$(".nombre__organizacion__deportivas").text(data[1]);

		$("#nombre__organizacion__deportivas").val(data[1]);

		$(".ruc__organizacion__deportivas").text(data[0]);

		$("#ruc__organizacion__deportivas").val(data[0]);

		$(".presidente__organizacion__deportivas").text(data[10]);

		$("#presidente__organizacion__deportivas").val(data[10]);

		$(".correo__organizacion__deportivas").text(data[11]);

		$("#correo__organizacion__deportivas").val(data[11]);

		$(".direccion__organizacion__deportivas").text(data[12]);

		$("#direccion__organizacion__deportivas").val(data[12]);

		$(".provincia__organizacion__deportivas").text(data[2]);

		$("#provincia__organizacion__deportivas").val(data[2]);

		$(".canton__organizacion__deportivas").text(data[3]);

		$("#canton__organizacion__deportivas").val(data[3]);

		$(".parroquia__organizacion__deportivas").text(data[4]);

		$("#parroquia__organizacion__deportivas").val(data[4]);

		$(".barrio__organizacion__deportivas").text(data[13]);

		$("#barrio__organizacion__deportivas").val(data[13]);

		$(".area__de__accion__llamados").text(data[14]);

		$("#area__de__accion__llamados").val(data[14]);

		$(".objetivo__institucional__estrategicos").text(data[15]);

		$("#objetivo__institucional__estrategicos").val(data[15]);

		if (data[5]=="primerTrimestre") {

			$("#periodo__evaluado").val("ENERO - JUNIO");

		}else if (data[5]=="segundoTrimestre") {

			$("#periodo__evaluado").val("ENERO - JUNIO");

		}else if (data[5]=="tercerTrimestre") {

			$("#periodo__evaluado").val("JULIO - DICIEMBRE");

		}else if (data[5]=="cuartoTrimestre") {

			$("#periodo__evaluado").val("JULIO - DICIEMBRE");

		}

		if (data[17]=="si") {

			$(".con__sin__e").text("Con e-SIGEF2");

		}else{

			$(".con__sin__e").text("Sin e-SIGEF2");

		}

		$("#periodo").val(data[5]);

		let idUsuariosC=$("#idUsuarioC").val();

		$("#idUSeguimientos").val(idUsuariosC);
		
		/*=====  End of Evaluar los datos  ======*/

		if ($("#idRolAd").val()==3) {

			$(".observacionesReasignaciones").hide();

		}else{

			$(".observacionesReasignaciones").show();

		}

		/*======================================
		=            Armando tablas            =
		======================================*/

		let porcentajes=0;
		let porcentajesExigefts=0;

		let planificadoA=0;
		let programadoA=0;
		let ejecuadoA=0;
		let exigeftA=0;

		let programadoAB=0;

		$.getScript("layout/scripts/js/validacionesGenerales.js",function(){

			for (w of sumas__programados) {

				programadoAB=programadoAB+parseFloat(w.programado).toFixed(2);

			}

			let div="";

			let porcentajeA1 = new Array();

			let programado1=0;
			let programado2=0;
			let programado3=0;
			let programado4=0;

			let ejecutado1=0;
			let ejecutado2=0;	
			let ejecutado3=0;
			let ejecutado4=0;


			for (z of sumas__programados) {

				planificadoA=parseFloat(planificadoA)+parseFloat(z.sumaPlanificacion);
				programadoA=parseFloat(programadoA)+parseFloat(z.programado);
				ejecuadoA=parseFloat(ejecuadoA)+parseFloat(z.ejecutado);


				porcentajes=(parseFloat(z.ejecutado)/parseFloat(z.programado)) * 100;

				porcentajeA1.push(parseFloat(porcentajes).toFixed(2));

				if (parseFloat(porcentajes).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajes).toFixed(2)>=70 && parseFloat(porcentajes).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajes).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}



				if (data[17]=="si") {

					$(".cuerpo__matricez__seguimientos").append('<tr><td><center>'+z.actividades+'</center></td><td><center>'+parseFloat(z.sumaPlanificacion).toFixed(2)+'</center></td><td><center>'+parseFloat(z.programado).toFixed(2)+'</center></td><td><center>'+parseFloat(z.ejecutado).toFixed(2)+'</center></td><td><center><div style="display:flex!important;">'+div+" "+parseFloat(porcentajes).toFixed(2)+'</div></center></td><td><center><input type="text" class="ancho__total__input solo__numero__montos sumadores__exigets__ex" id="input__esigets'+z.idActividad+'" idEjecutados="'+parseFloat(z.programado).toFixed(2)+'" idContador="'+z.idActividad+'" value="0"/></center></td><td><center><div style="display:flex!important;"><span class="circulos__'+z.idActividad+'"></span><input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes" id="porcentajes__esigefts'+z.idActividad+'" readonly="" style="border:none!important;" value="0"><span>%</span></div></center></td></tr>');

				}else{

					$(".cuerpo__matricez__seguimientos").append('<tr><td><center>'+z.actividades+'</center></td><td><center>'+parseFloat(z.sumaPlanificacion).toFixed(2)+'</center></td><td><center>'+parseFloat(z.programado).toFixed(2)+'</center></td><td><center>'+parseFloat(z.ejecutado).toFixed(2)+'</center></td><td><center><div style="display:flex!important;">'+div+" "+parseFloat(porcentajes).toFixed(2)+'</div></center></td></tr>');

					$(".oculto__sin__esiguefts").hide();


				}
			
				

				funcion__solo__numero__montos($(".solo__numero__montos"));

				

				funcion__cambio__de__numero($("#input__esigets"+z.idActividad));

				$("#input__esigets"+z.idActividad).on('input', function () {


					let esigefA1 = new Array();
					let porcentajeExigefA1 = new Array();

					let sum=0;

					let idContador=$(this).attr('idContador');
					let idEjecutados=$(this).attr('idEjecutados');

					let per=0;
					let per2=0;

					per=(parseFloat($(this).val())/parseFloat(idEjecutados)) * 100;

					$("#porcentajes__esigefts"+idContador).val(parseFloat(per).toFixed(2));


					$(".porcs__esigeftes").each(function(){

					    porcentajeExigefA1.push($(this).val());

					});


					$(".sumadores__exigets__ex").each(function(){

					    sum += parseFloat($(this).val());

					    esigefA1.push($(this).val());

					});

					$("#montosExig").val(parseFloat(sum).toFixed(2));

					per2=(parseFloat(sum)/parseFloat(programadoAB)) * 100;

					$("#procentajeExigefSas").val(parseFloat(per2).toFixed(2));

					$("#arrayEsigefts").val(esigefA1);
					$("#arrayPorcenEsigefts").val(porcentajeExigefA1);

					$(".circulos__"+idContador).html(" ");

					let div="";

					if (parseFloat(per).toFixed(2)>=85) {

						 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

					}else if (parseFloat(per).toFixed(2)>=70 && parseFloat(per).toFixed(2)<85) {

						 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

					}else if (parseFloat(per).toFixed(2)<70) {

						 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

					}

					$(".circulos__"+idContador).append(div);


				});

			}

			$("#arrayPorcen").val(porcentajeA1);

			let porcentajesZA=0;

			porcentajesZA=(parseFloat(variable__1__suma__ejecutado)/parseFloat(variable__1__suma__programados)) * 100;

			$("#monto__ejecutado__trimestre").val(parseFloat(programadoA).toFixed(2));

			$("#monto__reportado__tri").val(parseFloat(ejecuadoA).toFixed(2));

			if (data[17]=="si") {

				$(".footer__matricez__seguimientos").append('<tr><th><center>Total</center></th><th><center><input type="text" id="planificadoSas" name="planificadoSas" value="'+parseFloat(planificadoA).toFixed(2)+'" style="border:none!important; color:black!important;" readonly=""/></center></th><th><center><input type="text" id="programadoSas" name="programadoSas" value="'+parseFloat(programadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th><center><input type="text" id="ejecutadoSas" name="ejecutadoSas" value="'+parseFloat(ejecuadoA)+'" style="border:none!important;color:black!important;"/></center></th><th><center><input type="text" id="procentajeSas" name="procentajeSas" value="'+parseFloat(100).toFixed(2)+'" style="border:none!important; color:black!important;" readonly=""/></center></th><th class="exigeft__fila__holguras"><center><input type="text" id="montosExig" name="montosExig" style="border:none!important; color:black!important;" value="0"  readonly=""/><center></center></th><th class="exigeft__fila__holguras__porcentajes"><input type="text" id="procentajeExigefSas" name="procentajeExigefSas"  reandoly="" style="border:none!important; color:black!important;" value="0"/><center></th></tr>');
			}else{

				$(".footer__matricez__seguimientos").append('<tr><th><center>Total</center></th><th><center><input type="text" id="planificadoSas" name="planificadoSas" value="'+parseFloat(planificadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th><center><input type="text" id="programadoSas" name="programadoSas" value="'+parseFloat(programadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th><center><input type="text" id="ejecutadoSas" name="ejecutadoSas" value="'+parseFloat(ejecuadoA).toFixed(2)+'" style="border:none!important;color:black!important;" readonly=""/></center></th><th><center><input type="text" id="procentajeSas" name="procentajeSas" value="'+parseFloat(100).toFixed(2)+'" style="border:none!important; color:black!important;" readonly=""/></center></th></tr>');


			}
			
			/*=====  End of Armando tablas  ======*/

			$("#avance__trimestre__porcentaje").val($("#procentajeSas").val()+"%");


			if (data[5]=="primerTrimestre" || data[5]=="segundoTrimestre") {

				/*============================================
				=            Calculos programados            =
				============================================*/
			
				programado1=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#primer__esperado").val(parseFloat(programado1).toFixed(2)+" %");


				programado2=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#segundo__esperado").val(parseFloat(programado2).toFixed(2)+" %");

				$("#tercero__esperado").val("-");

				$("#cuarto__esperado").val("-");
				
				/*=====  End of Calculos programados  ======*/
			

			}else{

				/*============================================
				=            Calculos programados            =
				============================================*/
			
				programado1=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#primer__esperado").val(parseFloat(programado1).toFixed(2)+" %");


				programado2=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#segundo__esperado").val(parseFloat(programado2).toFixed(2)+" %");

				programado3=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#tercero__esperado").val(parseFloat(programado3).toFixed(2)+" %");


				programado4=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#cuarto__esperado").val(parseFloat(programado4).toFixed(2)+" %");
				
				/*=====  End of Calculos programados  ======*/				

			}


			
			let montoEjecutadoU=$("#presupuesto__segun__poas").val();

			let ejecutadoSasU=$("#ejecutadoSas").val();


			if (data[5]=="primerTrimestre" || data[5]=="segundoTrimestre") {


				/*===========================================
				=            Calculos ejecutados            =
				===========================================*/
				
				ejecutado1=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#primer__ejecucion").val(parseFloat(ejecutado1).toFixed(2)+" %");

				/*=====  End of Calculos ejecutados  ======*/

				ejecutado2=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#segundo__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$("#cuarto__ejecucion").val("-");

				$(".ejecutados__al__segundo").show();

			}else{

				/*===========================================
				=            Calculos ejecutados            =
				===========================================*/
				
				ejecutado1=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#primer__ejecucion").val(parseFloat(ejecutado1).toFixed(2)+" %");

				/*=====  End of Calculos ejecutados  ======*/

				ejecutado2=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#segundo__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$("#cuarto__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$(".ejecutados__al__cuarto").show();
				$(".ejecutados__al__segundo").show();

			}



			if (data[17]=="no") {

				$(".oculto__sin__esiguefts").remove();

			}
			

			console.log(data);

		});

		});

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Función de seguimientos  ======*/


/*==========================================
=            Aprobados tecnicos            =
==========================================*/

var funcionReasingar__aprobados__dos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites__dos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".titulo__mS").text(data[1]);

  	$("#idOrganismo").val(data[8]);

  	cargarFileSevidor__transferencias($("#gaurdarTransferencias"),$("#quipux__Suscritos"));


  });

}


/*=====  End of Aprobados tecnicos  ======*/


/*====================================================
=             Visualizar poas gestionados            =
====================================================*/

var funcionEditar__gestionados_s=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.generarVerG",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();
 	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('idOrganismo',data[9]);
  	paqueteDeDatos.append('tipo','seleccionasCoordinas');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validacionBasica.js",function(){

				var elementos=JSON.parse(response);

				var obtenernombre__organismos=elementos['obtenernombre__organismos'];

				var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
				var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
				var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

				var obtenerInformacion=elementos['obtenerInformacion'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				if (!$(".creado__indefinidamentes").length > 0 ) {

				$("#idOrganismoM").val(data[5]);

				for (w of obtenernombre__organismos) {

					$(".titulo__mS").text(w.nombreOrganismo);

				}

				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter creado__indefinidamentes" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();			

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}


				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));						


				for (x of obtenerArchivoCoordinas__infras) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+x.documento+'" target="_blank">Documento coordinación de Instalaciones deportivas</a></div>');

				}



				for (y of obtenerArchivoCoordinas__administrativos) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+y.documento+'" target="_blank">Documento coordinación financiera</a></div>');

				}

				for (z of obtenerArchivoCoordinas__subcess) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+z.documento+'" target="_blank">Documento subsecretaría</a></div>');

				}


				}


			});

		},
		error:function(){

		}

	});


  });

}

/*=====  End of  Visualizar poas gestionados  ======*/

/*====================================================
=            Función terminar financieros            =
====================================================*/

var funcion___termina__financiero=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.terminarBoton__financieros ",function(e){

  	var data=table.row($(this).parents("tr")).data();

  	$.getScript("layout/scripts/js/validaGlobal.js",function(){

	  	e.preventDefault();

	  	$(".titulo__mS").text(data[1]);

	  	$("#idOrganismo").val(data[9]);

	  	$(".documento__total__financiero").attr('href','documentos/quipux__transferencia/'+data[10]);

	  	regresa__tramite__final($("#regresarTramite"));

	  	terminar__tramites__financieros($("#cerrarTramiteTransferencias"));

	  	console.log(data);

    });

  });

}


/*=====  End of Función terminar financieros  ======*/



/*========================================
=            Eliminar función           =
========================================*/

var funcion__eliminar__esigef=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.eliminar__boton ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

		var confirm= alertify.confirm('¿Está seguro de eliminar el registro?','¿Está seguro de eliminar el registro?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','eliminaresigeft');		

			paqueteDeDatos.append("idEsiget",data[5]);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/eliminaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

		          	var elementos=JSON.parse(response);

		          	var mensaje=elementos['mensaje'];

					if(mensaje==1){

				    	alertify.set("notifier","position", "top-center");
				    	alertify.notify("Registro eliminado correctamente", "success", 5, function(){});

				   	 	window.setTimeout(function(){ 

				        	location.reload();

				    	} ,5000); 

		          	}

				},
				error:function(){

				}
				
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(this).show();

			}); 
		}); 


  });

}


/*=====  End of Eliminar función  ======*/



/*========================================
=            Eliminar función            =
========================================*/

var funcion__eliminarI=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.eliminar__boton ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$("#organismoId").val(data[9]);

  });

}


/*=====  End of Eliminar función  ======*/


/*================================================
=            Observaciones realizadas            =
================================================*/

var funcion__enCordiObservi=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignarBoton__coor ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('idOrganismo',data[5]);
  	paqueteDeDatos.append('tipo','seleccionasCoordinas');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			var elementos=JSON.parse(response);

			var obtenernombre__organismos=elementos['obtenernombre__organismos'];

			var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
			var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
			var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

			$("#idOrganismoM").val(data[5]);

			for (w of obtenernombre__organismos) {

				$(".titulo__mS").text(w.nombreOrganismo);

			}

			if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2){

				// $(".contenedor__bodyCMatriz").append('<div class="row"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

				// funcionarios__normalesPlanifi($(".alto__fisiR"),$("#idUsuarioPrincipal").val());

			}

			if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2){

				enviarInforPlani__observaciones($("#guardaEnvio_coors"),$("#idOrganismoM").val(),"d",$("#idUsuarioPrincipal").val());

			}else{

				enviarInforPlani__observaciones($("#guardaEnvio_coors"),$("#idOrganismoM").val(),"a",$("#idUsuarioPrincipal").val());

			}

		},
		error:function(){

		}

	});

  });

}

/*=====  End of Observaciones realizadas  ======*/

/*==========================================
=             Actualizar nuevos            =
==========================================*/

var funcion__gestionados__i=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.editarGestionados ",function(e){

	e.preventDefault();

	var data=table.row($(this).parents("tr")).data();

  	$.getScript("layout/scripts/js/validacionBasica.js",function(){

	  	$("#organismoId").val(data[9]);

	  	$("#fecha__poasE").val(data[7]);

	  	$("#numeroResolucion__ed").val(data[5]);

	  	$("#notificado__sin").val(data[8]);

	  	/*==================================
	  	=            Checkboxes            =
	  	==================================*/
	  	
		checkboxFunciones($("#aceptarDocumentos__c"),$(".documento__ocultos")); 	
	  	
	  	/*=====  End of Checkboxes  ======*/
	  	
	  	// console.log(data);

  	});

  });

}

/*=====  End of  Actualizar nuevos  ======*/



var funcion__datatabletsEditas2N=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","a.itemsEscogidosEditar",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


	var paqueteDeDatos = new FormData();

	$(".idFinancierosIP").val(data[15]);

	$(".titulos__financierosI").text(data[1]);

	paqueteDeDatos.append('tipo','seleccionaItemsEditables');	
	paqueteDeDatos.append('idEnviado',data[15]);


	var indexVe = data[0].indexOf('51');
	var indexVeDoces = data[0].indexOf('530606');

	if(indexVe >= 0 || indexVeDoces>=0 || 4>3) {
	 $(".guardar__itemsItems").show();
	}else{
	 $(".guardar__itemsItems").hide();
	}

	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			var elementos=JSON.parse(response);
			var obtenerInformacion=elementos['obtenerInformacion'];

			for (x of obtenerInformacion) {

				$(".enero__items").val(parseFloat(x.enero).toFixed(2));
				$(".febrero__items").val(parseFloat(x.febrero).toFixed(2));
				$(".marzo__items").val(parseFloat(x.marzo).toFixed(2));
				$(".abril__items").val(parseFloat(x.abril).toFixed(2));
				$(".mayo__items").val(parseFloat(x.mayo).toFixed(2));
				$(".junio__items").val(parseFloat(x.junio).toFixed(2));
				$(".julio__items").val(parseFloat(x.julio).toFixed(2));
				$(".agosto__items").val(parseFloat(x.agosto).toFixed(2));
				$(".septiembre__items").val(parseFloat(x.septiembre).toFixed(2));
				$(".octubre__items").val(parseFloat(x.octubre).toFixed(2));
				$(".noviembre__items").val(parseFloat(x.noviembre).toFixed(2));
				$(".diciembre__items").val(parseFloat(x.diciembre).toFixed(2));
				$(".total__items").val(parseFloat(x.totalSumaItem).toFixed(2));


			}


			var sumarIndicadoresGlobal=function(parametro1,parametro2){

				$(parametro1).on('input', function () {

					var sum = 0;

					$(parametro1).each(function(){
					    sum += parseFloat($(this).val());
					});

					$(parametro2).val(sum.toFixed(2));

				});

			}


			sumarIndicadoresGlobal($(".meses__atadosItems"),$(".total__items"));

			/*======================================
			=             Inserta meses            =
			======================================*/

			var enviarMesesRelativos=function(parametro1,parametro2,parametro3,parametro4){

			$(parametro1).click(function (e){

				e.preventDefault();	

				var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

				confirm.set({transition:'slide'});    

				confirm.set('onok', function(){ //callbak al pulsar botón positivo
						  
					var paqueteDeDatos__dos = new FormData();

					paqueteDeDatos__dos.append('tipo',parametro3);		

					var other_data = $('.'+parametro4).serializeArray();

					var organismoIdPrin=$("#organismoIdPrin").val();

					$.each(other_data,function(key,input){
							paqueteDeDatos__dos.append(input.name,input.value);
					});

					var asignadoP=$("#montoAsginadoFe").val();
					var disponibleP=$("#montoDisponible").val();

					paqueteDeDatos__dos.append("organismoIdPrin",organismoIdPrin);

					paqueteDeDatos__dos.append("asignadoP",asignadoP);
					paqueteDeDatos__dos.append("disponibleP",disponibleP);
					paqueteDeDatos__dos.append('montoRestar',data[14]);

                    let enero__items__2=$('input[name="enero__items"]').val();
                    let febrero__items__2=$('input[name="febrero__items"]').val();
                    let marzo__items__2=$('input[name="marzo__items"]').val();
                    let abril__items__2=$('input[name="abril__items"]').val();
                    let mayo__items__2=$('input[name="mayo__items"]').val();
                    let junio__items__2=$('input[name="junio__items"]').val();
                    let julio__items__2=$('input[name="julio__items"]').val();
                    let agosto__items__2=$('input[name="agosto__items"]').val();
                    let septiembre__items__2=$('input[name="septiembre__items"]').val();
                    let octubre__items__2=$('input[name="octubre__items"]').val();
                    let noviembre__items__2=$('input[name="noviembre__items"]').val();
                    let diciembre__items__2=$('input[name="diciembre__items"]').val();
                    let total__items__2=$('input[name="total__items"]').val();



                    paqueteDeDatos__dos.append("enero__items__2",enero__items__2);
                    paqueteDeDatos__dos.append("febrero__items__2",febrero__items__2);
                    paqueteDeDatos__dos.append("marzo__items__2",marzo__items__2);
                    paqueteDeDatos__dos.append("abril__items__2",abril__items__2);
                    paqueteDeDatos__dos.append("mayo__items__2",mayo__items__2);
                    paqueteDeDatos__dos.append("junio__items__2",junio__items__2);
                    paqueteDeDatos__dos.append("julio__items__2",julio__items__2);
                    paqueteDeDatos__dos.append("agosto__items__2",agosto__items__2);
                    paqueteDeDatos__dos.append("septiembre__items__2",septiembre__items__2);
                    paqueteDeDatos__dos.append("octubre__items__2",octubre__items__2);
                    paqueteDeDatos__dos.append("noviembre__items__2",noviembre__items__2);
                    paqueteDeDatos__dos.append("diciembre__items__2",diciembre__items__2);
                    paqueteDeDatos__dos.append("total__items__2",total__items__2);


					$.ajax({

						type:"POST",
						url:"modelosBd/inserta/insertaAccionesDos.md.php",
						contentType: false,
						data:paqueteDeDatos__dos,
						processData: false,
						cache: false, 
						success:function(response){

						    var elementos=JSON.parse(response);


					      	var elementos=JSON.parse(response);

					      	var mensaje=elementos['mensaje'];

					      	var sumatoreComparas=elementos['sumatoreComparas'];

							if(mensaje==2){

								alertify.set("notifier","position", "top-center");
								alertify.notify("Su presupuesto suma"+sumatoreComparas+" superando el monto asignado", "error", 4, function(){});

					      	}


							if(mensaje==1){

								alertify.set("notifier","position", "top-center");
								alertify.notify("Edición realizada correctamente", "success", 4, function(){});

								table.ajax.reload();

					      	}


						},
						error:function(){

						}
							
					});	

				});

				confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
					alertify.set("notifier","position", "top-center");
					alertify.notify("Acción cancelada", "error", 1, function(){}); 
				}); 

			});

			}

			enviarMesesRelativos($(".guardar__itemsItems")," de la información ingresada","editaInforItemsF","formMesesNece");

			/*=====  End of  Inserta meses  ======*/


		},
		error:function(){

		}
				
	});		 


  });

}


var funcion__datatabletsEliminar2=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","a.itemsEscogidosEliminar",function(e){

  	e.preventDefault();

  	var boton=$(this);

  	$(boton).hide();

  	var data=table.row($(this).parents("tr")).data();


	var confirm= alertify.confirm('¿Está seguro de eliminar?','¿Está seguro de eliminar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','eliminasItemsFin');	
		paqueteDeDatos.append('idEnviado2',data[15]);
			  
		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/eliminaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

		      	var elementos=JSON.parse(response);

		      	var mensaje=elementos['mensaje'];

				if(mensaje==1){

					alertify.set("notifier","position", "top-center");
					alertify.notify("Registro eliminado", "success", 4, function(){});

					table.ajax.reload();

		      	}

			},
			error:function(){

			}
				
		});		    

	});

	confirm.set('oncancel', function(){ 

		alertify.set("notifier","position", "top-center");
		alertify.notify("Acción cancelada", "error", 1, function(){

			$(boton).show();

		}); 

	});   


  });

}

/*==========================================================
=            Función instalaciones recomendados            =
==========================================================*/

var funcion__ReasingarTraReInstala=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);

				if (fisicamenteE==24 || fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorRecomen_coorI($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}

				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				var variableNotificaciones="instalaciones";


				enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A",variableNotificaciones);

			});

		},
		error:function(){

		}
				
	});		



  });

}



/*=====  End of Función instalaciones recomendados  ======*/


/*===========================================================
=            Función administrativo recomendados            =
===========================================================*/

var funcion__ReasingarTraReAdminis=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);

				if (fisicamenteE==24 || fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorRecomen_coorAdminis($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}

				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				var variableNotificaciones="administrativo";


				enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A",variableNotificaciones);

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Función administrativo recomendados  ======*/

/*====================================================================
=            Función reasignar recomendados instalaciones            =
====================================================================*/

var funcionReasingarTraCoordinas__instalaciones=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);



				var idRolE=$("#idRolAd").val();

				if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCor($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}


				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A","subsesAsigna__corInstalaciones");

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Función reasignar recomendados instalaciones  ======*/



/*===================================================================
=            Función reasignar recomendados subess zonal            =
===================================================================*/

var funcionReasingarTraCoordinas__subsess=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){



  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');


				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);


				var idRolE=$("#idRolAd").val();

				if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorSucenrFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				} 				


				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}

				if (obtenerInformacionObservaciones!="") {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


					for (dLC of obtenerInformacionObservaciones) {

						$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

					}

					$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


				}

				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');


				enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A","subsesAsigna__cor");

			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Función reasignar recomendados subess zonal  ======*/


/*=============================================================
=            Reasignar recomendados talento humano            =
=============================================================*/

var funcion__datatabletsReasignarTraRe__talento=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();

				let zonal1 = data[9].indexOf("__27__4.pdf");
				let zonal2 = data[9].indexOf("__28__4.pdf");
				let zonal3 = data[9].indexOf("__29__4.pdf");
				let zonal4 = data[9].indexOf("__30__4.pdf");
				let zonal6 = data[9].indexOf("__31__4.pdf");
				let zonal7 = data[9].indexOf("__32__4.pdf");
				let zonal8 = data[9].indexOf("__33__4.pdf");

				if (!$(".respon__tramites").length > 0 ) {

					if (zonal1 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 1</div>');

					}else if(zonal2 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 2</div>');

					}else if(zonal3 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 3</div>');
						
					}else if(zonal4 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 4</div>');
						
					}else if(zonal6 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 6</div>');
						
					}else if(zonal7 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 7</div>');
						
					}else if(zonal8 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 8</div>');
						
					}

				}

				if (!$(".ver__Tabla").length > 0 ) {


					// $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


					// $(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					// $(".elementosCreados__M").hide();

					// for (c of obtenerInformacion) {

					// 	$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					// }

					// execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					// verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				}



				if (!$(".actividades__rotulandos").length > 0 ) {

					if (obtenerAcCa!="") {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center actividades__rotulandos" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

						for (d of obtenerAcCa) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}


					}

					console.log(data);

				}


				if (!$(".alto__fisiR").length > 0 ) {

					if (fisicamenteE==24 || fisicamenteE==26) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorRecomen($(".alto__fisiR"),$("#idUsuarioC").val());

					}else if($("#idRolAd").val()==4){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorRecomen_coorTalento($(".alto__fisiR"),$("#idUsuarioC").val());

					}else if($("#idRolAd").val()!=3){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					}

				}

				if (!$(".observa__necesarios").length > 0 ) {

					if ($("#idRolAd").val()!=3) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 observa__necesarios" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

					}

					if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

						$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

					}

				}

				if (!$(".informe__tecnicos__recomiendas").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center informe__tecnicos__recomiendas" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

					enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","talentosHumanos");

				}


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Reasignar recomendados talento humano  ======*/


/*==============================================================
=            Modificaciones recibidas planificacion            =
==============================================================*/

var funcion__datatabletsReasignarTraGene__modificaciones=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites__modificaciones",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite").hide();
  	
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

  	var idRolAd=$("#idRolAd").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__modificas');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	paqueteDeDatos.append('idRolAd',idRolAd);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');



				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (!$("#indicador__creaciones").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;" id="indicador__creaciones">Indicadores</div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Actividad - indicador</div><div class="col col-2 text-center" style="font-weight:bold;">Primer trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Segundo Trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Tercer trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Cuarto trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Meta indicador</div>');

					for (z of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center">'+z.indicador+'</div><div class="col col-2 text-center">'+z.primertrimestre+'</div><div class="col col-1 text-center">'+z.segundotrimestre+'</div><div class="col col-1 text-center">'+z.tercertrimestre+'</div><div class="col col-2 text-center">'+z.cuartotrimestre+'</div><div class="col col-2 text-center">'+z.metaindicador+'</div>');


					}				


				}

				if (obtenerAcCa!="") {

					if (!$("#rotulo__ac").length > 0 ) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" id="rotulo__ac" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					}

					for (d of obtenerAcCa) {

						if (!$(".ver__matrices"+d.idActividades).length > 0 ) {
						  

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__2 text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val(),true);

						}						

					}


				}

				


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Modificaciones recibidas planificacion  ======*/


/*====================================================
=            General Tramites reasignados            =
====================================================*/

var funcion__datatabletsReasignarTraGene=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite").hide();
  	
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

  	var idRolAd=$("#idRolAd").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	paqueteDeDatos.append('idRolAd',idRolAd);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__na text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');



				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (!$(".sumado__indicadores").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center sumado__indicadores" style="font-size:14px; font-weight:bold;">Indicadores</div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Actividad - indicador</div><div class="col col-2 text-center" style="font-weight:bold;">Primer trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Segundo Trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Tercer trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Cuarto trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Meta indicador</div>');


					for (z of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center">'+z.indicador+'</div><div class="col col-2 text-center">'+z.primertrimestre+'</div><div class="col col-1 text-center">'+z.segundotrimestre+'</div><div class="col col-1 text-center">'+z.tercertrimestre+'</div><div class="col col-2 text-center">'+z.cuartotrimestre+'</div><div class="col col-2 text-center">'+z.metaindicador+'</div>');


					}				


					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						for (var i = 0 ; i<arreglo.length; i++) {
							

							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/anexosPoa/'+arreglo[i]+'" target="_blank">'+arreglo[i]+'</a></div>');

						}


					}

				}

				if (obtenerAcCa!="") {

					if (!$("#rotulo__ac").length > 0 ) {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;" id="rotulo__ac">ACTIVIDADES A ANALIZAR</div><br><br>');

					}

					for (d of obtenerAcCa) {

						if (!$(".ver__matrices"+d.idActividades).length > 0 ) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}

					}


				}

				


			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of General Tramites reasignados  ======*/


/*===========================================================
=            Reasigna coordinaciones financieras            =
===========================================================*/

var funcion__datatabletsReasignarTraFinan=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsessFinan');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				var obtenerInformacionPre=elementos['obtenerInformacionPre'];

				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];

				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();

				if (!$(".anexos__descubiertos").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


					$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					$(".elementosCreados__M").hide();


					for (c of obtenerInformacion) {

						$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					}

					execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));


					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center anexos__descubiertos" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						let contador__Doc=0;

						let banderaDi=false;

						for (var i = 0 ; i<arreglo.length; i++) {


							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center doc__anexos" id="doc__fila'+contador__Doc+'"><a href="documentos/anexosPoa/'+arreglo[i]+'" target="_blank" id="enlace__'+contador__Doc+'">Documento '+(i+1)+": "+arreglo[i]+'</a></div>');


							if(banderaDi==false){

								$("#doc__fila"+i).attr('style','background-color: rgba(33,42,92,.95)!important;');

								$("#enlace__"+i).attr('style','color:white;');

								banderaDi=true;

							}else{

								$("#doc__fila"+i).attr('style','background-color: var(--bs-white)!important;');

								$("#enlace__"+i).attr('style','color:#212121;');

								banderaDi=false;

							}
							

							contador__Doc++;

						}


					}


				}

				if (!$(".indicadores__asonantes").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center indicadores__asonantes" style="font-size:14px; font-weight:bold;">Planificación de indicadores</div><br><br>');

					for (dLCIn of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center mb-0" style="font-weight:bold; text-align:justify; color: rgba(33,42,92,.95);">'+dLCIn.indicador+'</div><hr><div class="col col-2" style="">I Trimestre: '+dLCIn.primertrimestre+'</div><div class="col col-2" style="">II Trimestre: '+dLCIn.segundotrimestre+'</div><div class="col col-2" style="">III Trimestre: '+dLCIn.tercertrimestre+'</div><div class="col col-2" style="">IV Trimestre: '+dLCIn.cuartotrimestre+'</div><div class="col col-4" style="">Meta Anual del indicador: '+dLCIn.metaindicador+'</div><br><br>');

					}


				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				if (obtenerInformacionObservaciones!="") {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


					for (dLC of obtenerInformacionObservaciones) {

						$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

					}

					$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


				}

				console.log(data);

				var idRolE=$("#idRolAd").val();					

				}
				
				if (!$(".desdea__devolver").length > 0 ) {

					if($("#idRolAd").val()==3){

						$(".contenedor__bodyCMatriz").append('<br><br><div class="desdea__devolver col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');

					}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div>');

						subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div>');

						subsecretariasSelectorCorFunCorFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					}else if (fisicamenteE==26) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div>');

						subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

					}else if(fisicamenteE==24){


						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div>');

						subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


					}else if(fisicamenteE==1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

						subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


					}else if(fisicamenteE==2){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver" style="width:100%!important; height:40px!important;"></select></div>');

						subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


					}else if($("#idRolAd").val()!=3){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR desdea__devolver ancho__total__input__selects"></select></div>');

						funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					}


					if ($("#idRolAd").val()!=3) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 desdea__devolver" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 desdea__devolver"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

					}

				}

				if (!$(".generarDocumento").length > 0 ) {

				if ($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==27 ||  $("#fisicamenteE").val()==28 || $("#fisicamenteE").val()==29 || $("#fisicamenteE").val()==30 || $("#fisicamenteE").val()==31 || $("#fisicamenteE").val()==32 || $("#fisicamenteE").val()==33)) {


					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="zonalFinan"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">Presenta el  Informe de justificación del gasto operativo y de mantenimiento en escenarios deportivos que debe contener el cuadro comparativo como estudio de mercado respaldado por 3 cotizaciones, el registro fotográfico, así como la documentación de la legalidad del predio.</td><td><select class="gastoOperativo obligatorios__tabla ancho__total__input__selects" name="gastoOperativo"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_gastoOperativo" class="text_gastoOperativo ancho__total__textareas"></textarea></td></tr><tr><td align="center">2</td><td align="left">Mantiene concordancia  la descripción del escenario o infraestructura y demás campos correspondiente a su mantenimiento.</td><td><select class="descripcionCon obligatorios__tabla ancho__total__input__selects" name="descripcionCon"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_descripcionCon" class="text_descripcionCon ancho__total__textareas"></textarea></td></tr><tr><td align="center">3</td><td align="left">La descripción de materiales o servicios para el mantenimiento es completa y adecuada para el tipo de mantenimiento.</td><td><select class="descripMate obligatorios__tabla ancho__total__input__selects" name="descripMate"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_descripMate" class="text_descripMate ancho__total__textareas"></textarea></td></tr><tr><td align="center">4</td><td align="left">Detalla satisfactoriamente la contratación o  adquisición de bienes o servicios.</td><td><select class="adquiBienes obligatorios__tabla ancho__total__input__selects" name="adquiBienes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_adquiBienes" class="text_adquiBienes ancho__total__textareas"></textarea></td></tr><tr><td align="center">5</td><td align="left">Justifica satisfactoriamente la contratación o adquisición del bien o servicio.</td><td><select class="justificaCrea obligatorios__tabla ancho__total__input__selects" name="justificaCrea"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificaCrea" class="text_justificaCrea ancho__total__textareas"></textarea></td></tr><tr><td align="center">6</td><td align="left">Describe satisfactoriamente los bienes y servicios que se adquirirán de acuerdo a su tipo o característica (contratación pública, pago de impuestos y tasas).</td><td><select class="bienesImpuestos obligatorios__tabla ancho__total__input__selects" name="bienesImpuestos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_bienesImpuestos" class="text_bienesImpuestos ancho__total__textareas"></textarea></td></tr><tr><td align="center">7</td><td align="left">El monto de la contratación o adquisición del bien o servicio es igual o inferior al monto ejecutado el año anterior o el monto establecido en materia de contratación pública.</td><td><select class="montoIn obligatorios__tabla ancho__total__input__selects" name="montoIn"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_montoIn" class="text_montoIn ancho__total__textareas"></textarea></td></tr><tr><td align="center">8</td><td align="left">Presenta el reporte de inventarios de los vehículos, inmuebles, bienes de larga duración, bienes de control administrativo y existencias descargado de su sistema contable (donde conste toda la información financiera, fecha compra, descripción del bien, depreciación, valor en libros, saldos etc.) debidamente suscrito por el responsable financiero (contador/a) y el representante legal.</td><td><select class="reporteInven obligatorios__tabla ancho__total__input__selects" name="reporteInven"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_reporteInven" class="text_reporteInven ancho__total__textareas"></textarea></td></tr><tr><td align="center">9</td><td align="left">Presenta Plan de mantenimiento de vehículos, bienes muebles e inmuebles, maquinaria y equipo debidamente suscrito por el representante legal.</td><td><select class="planVehiculos obligatorios__tabla ancho__total__input__selects" name="planVehiculos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_planVehiculos" class="text_planVehiculos ancho__total__textareas"></textarea></td></tr><tr><td align="center">10</td><td align="left">Presenta Declaración de Contrataciones y Adquisiciones donde conste el tipo de contratación pública de las actividades descritas en el POA y el trimestre en el que se contratará.</td><td><select class="declaracionCon obligatorios__tabla ancho__total__input__selects" name="declaracionCon"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_declaracionCon" class="text_declaracionCon ancho__total__textareas"></textarea></td></tr><tr><td align="center">11</td><td align="left">Presenta Informe de seguridad y riesgos de las instalaciones donde se describa los puntos de seguridad y vigilancia privada necesarios.</td><td><select class="informeSegu obligatorios__tabla ancho__total__input__selects" name="informeSegu"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_informeSegu" class="text_informeSegu ancho__total__textareas"></textarea></td></tr><tr><td align="center">12</td><td align="left">Presenta el informe debidamente suscrito por el representante legal, en el que se detalle qué tipo de servicio de limpieza requiere contratar y los metros cuadrados de la infraestructura administrativa anexando documentos de respaldo.</td><td><select class="legalDetalle obligatorios__tabla ancho__total__input__selects" name="legalDetalle"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_legalDetalle" class="text_legalDetalle ancho__total__textareas"></textarea></td></tr><tr><td align="center">13</td><td align="left">La planificación del  indicador tiene coherencia con el nombre del indicador y  se encuentra redactado en número entero.</td><td><select class="indicaCoherente obligatorios__tabla ancho__total__input__selects" name="indicaCoherente"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_indicaCoherente" class="text_indicaCoherente ancho__total__textareas"></textarea></td></tr><tr><td align="center">14</td><td align="left">Ejecuta la Planificación anual del personal administrativo y de servicios amparado en el Código de Trabajo.</td><td><select class="personalAdmin obligatorios__tabla ancho__total__input__selects" name="personalAdmin"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_personalAdmin" class="text_personalAdmin ancho__total__textareas"></textarea></td></tr><tr><td align="center">15</td><td align="left">Ejecuta la Planificación anual del personal administrativo, relacionado a Contratos Civiles de servicios profesionales.</td><td><select class="contratosCivi obligatorios__tabla ancho__total__input__selects" name="contratosCivi"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_contratosCivi" class="text_contratosCivi ancho__total__textareas"></textarea></td></tr><tr><td align="center">16</td><td align="left">La Organización Deportiva no ha creado nuevos puestos de trabajo administrativos y de servicios respecto del POA 2022 (Acta de certificación  suscrita por el responsable).</td><td><select class="nuevosServicios obligatorios__tabla ancho__total__input__selects" name="nuevosServicios"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_nuevosServicios" class="text_nuevosServicios ancho__total__textareas"></textarea></td></tr><tr><td align="center">17</td><td align="left">La Organización Deportiva no ha incrementado  Contratos Civiles de servicios profesionales de personal administrativo,  respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="personalCertifi obligatorios__tabla ancho__total__input__selects" name="personalCertifi"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_personalCertifi" class="text_personalCertifi ancho__total__textareas"></textarea></td></tr><tr><td align="center">18</td><td align="left">La Organización Deportiva no incrementa la masa salarial relacionada al personal administrativo y de servicios respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="masaAdmin obligatorios__tabla ancho__total__input__selects" name="masaAdmin"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_masaAdmin" class="text_masaAdmin ancho__total__textareas"></textarea></td></tr><tr><td align="center">19</td><td align="left">La Organización Deportiva no incrementa presupuesto relacionado a honorarios para Contratos Civiles de servicios profesionales de personal administrativo, respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="honorariosIncre obligatorios__tabla ancho__total__input__selects" name="honorariosIncre"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_honorariosIncre" class="text_honorariosIncre ancho__total__textareas"></textarea></td></tr><tr><td align="center">20</td><td align="left">Si planificó servicios básicos verificar que en la matriz de suministro el número de suministro cuente con informe de aprobación del Ministerio del Deporte.</td><td><select class="matrizServicios obligatorios__tabla ancho__total__input__selects" name="matrizServicios"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_matrizServicios" class="text_matrizServicios ancho__total__textareas"></textarea></td></tr><tr><td align="center">21</td><td align="left">En caso que planifique seguros de bienes y vehículos presenta el listado de bienes o vehículos con la respectiva cobertura.</td><td><select class="segurosBienes obligatorios__tabla ancho__total__input__selects" name="segurosBienes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_segurosBienes" class="text_segurosBienes ancho__total__textareas"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-warning generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;GENERAR CALIFICACIÓN</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();

						
				}

				}

				if ($("#idRolAd").val()==3){

					$("#idOrganismo").val($(".idOrganismoM").val());

					$("#fisicamenteEn").val("cordinacionFinan");

					$("#idUsuarioEn").val($("#idUsuarioC").val());

					$("#enviarTramite").hide();
						
				}



				if($("#idRolAd").val()==3){

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					$(".observaciones__nestD").hide();

					$(".contenedor__reasignaciones").hide();

					segmentosSelectsCOncendidos($(".alto__fisiR"),$(".observaciones__nestD"));

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$("#generarDocumento"));

				}

				enviarTramitesGeneradosFinans($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","N/A","N/A","tramiteFinan__coordinas");

				enviarTramitesGeneradosFinans($(".enviar__rFuncionarios"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento",false,"no__tramite");

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Reasigna coordinaciones financieras  ======*/


/*=========================================================
=            Acciones reasignar coordinaciones            =
=========================================================*/

var funcion__datatabletsReasignarTraCoordinas=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsessCoordina');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				var obtenerInformacionPre=elementos['obtenerInformacionPre'];

				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];


				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				if (!$(".anexos__descubiertos").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


					$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					$(".elementosCreados__M").hide();


					for (c of obtenerInformacion) {

						$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					}

					execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center anexos__descubiertos" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						let contador__Doc=0;

						let banderaDi=false;

						for (var i = 0 ; i<arreglo.length; i++) {


							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center doc__anexos" id="doc__fila'+contador__Doc+'"><a href="documentos/anexosPoa/'+arreglo[i]+'" target="_blank" id="enlace__'+contador__Doc+'">Documento '+(i+1)+": "+arreglo[i]+'</a></div>');


							if(banderaDi==false){

								$("#doc__fila"+i).attr('style','background-color: rgba(33,42,92,.95)!important;');

								$("#enlace__"+i).attr('style','color:white;');

								banderaDi=true;

							}else{

								$("#doc__fila"+i).attr('style','background-color: var(--bs-white)!important;');

								$("#enlace__"+i).attr('style','color:#212121;');

								banderaDi=false;

							}
							

							contador__Doc++;

						}


					}

				}


				if (!$(".planificador__indicadores").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center planificador__indicadores" style="font-size:14px; font-weight:bold;">Planificación de indicadores</div><br><br>');

					

					for (dLCIn of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center mb-0" style="font-weight:bold; text-align:justify; color: rgba(33,42,92,.95);">'+dLCIn.indicador+'</div><hr><div class="col col-2" style="">I Trimestre: '+dLCIn.primertrimestre+'</div><div class="col col-2" style="">II Trimestre: '+dLCIn.segundotrimestre+'</div><div class="col col-2" style="">III Trimestre: '+dLCIn.tercertrimestre+'</div><div class="col col-2" style="">IV Trimestre: '+dLCIn.cuartotrimestre+'</div><div class="col col-4" style="">Meta Anual del indicador: '+dLCIn.metaindicador+'</div><br><br>');

					}

				}


				if (!$(".analizas__actis").length > 0 ) {
				 
					if (obtenerAcCa!="") {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center analizas__actis" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

						for (d of obtenerAcCa) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}


					}


				}

				if (!$(".observaciones__in").length > 0 ) {


				if (obtenerInformacionObservaciones!="") {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center observaciones__in" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


					for (dLC of obtenerInformacionObservaciones) {

						$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

					}

					$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


				}

				}


				console.log(data);

				var idRolE=$("#idRolAd").val();


				if (!$("#checksDesicion").length > 0 ) {

				if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorSucenrFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				} 



				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}


				}


				if (!$(".generarDocumento").length > 0 ) {


				if ($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==27 ||  $("#fisicamenteE").val()==28 ||  $("#fisicamenteE").val()==29 ||  $("#fisicamenteE").val()==30 ||  $("#fisicamenteE").val()==31 ||  $("#fisicamenteE").val()==32 ||  $("#fisicamenteE").val()==33)) {



					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="subFisica"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">La meta anual del indicador coincide  con el No. de eventos planificados  en el PDA</td><td><select class="numerosEventosPlanificadosPda obligatorios__tabla ancho__total__input__selects" name="numerosEventosPlanificadosPda"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_numerosEventosPlanificadosPda" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">Utiliza la sintaxis clara (verbos en infinitivo) para el registro de los eventos</td><td><select class="sintaxis__clara obligatorios__tabla ancho__total__input__selects" name="sintaxis__clara"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_sintaxis__clara" class="text_sintaxis__clara ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Presenta el certificado de validación de eventos, registrados en el PDA suscrito por el director técnico metodológico (solo provinciales)</td><td><select class="validacionEventos obligatorios__tabla ancho__total__input__selects" name="validacionEventos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_validacionEventos" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">Detalla satisfactoriamente la contratación o  adquisición de bienes o servicios orientados al fomento deportivo de acuerdo a la característica del deporte (implementación deportiva) con la debida justificación técnica</td><td><select class="detalleContratacion obligatorios__tabla ancho__total__input__selects" name="detalleContratacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleContratacion" class="text_detalleContratacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">No se han incrementado nuevos puestos de trabajo de técnicos en relación de dependencia con respecto al POA OD 2022</td><td><select class="nuevosPuestos obligatorios__tabla ancho__total__input__selects" name="nuevosPuestos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_nuevosPuestos" class="text_nuevosPuestos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">Justifica satisfactoriamente la contratación de personal técnico bajo la modalidad de contratos de servicios de honorarios profesionales</td><td><select class="justificaTecnico obligatorios__tabla ancho__total__input__selects" name="justificaTecnico"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificaTecnico" class="text_justificaTecnico ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">7</td><td align="left">En caso que planifique bienes de larga duración presenta el informe justificado de acuerdo a la característica del deporte para implementación deportiva, equipos tecnológicos y electrónicos</td><td><select class="bienesLarga obligatorios__tabla ancho__total__input__selects" name="bienesLarga"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_bienesLarga" class="text_bienesLarga ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">8</td><td align="left">Planifica seguros contra accidentes, vida y de salud para los deportistas que participarán en los eventos deportivos.</td><td><select class="seguroAccidentes obligatorios__tabla ancho__total__input__selects" name="seguroAccidentes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_seguroAccidentes" class="text_seguroAccidentes ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">9</td><td align="left">Detalla las especificaciones de la implementación y equipamiento deportivo que sea adquirido por cada deporte beneficiario y demuestre la no duplicidad en el presente año fiscal</td><td><select class="detalleImplementacion obligatorios__tabla ancho__total__input__selects" name="detalleImplementacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleImplementacion" class="text_detalleImplementacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">10</td><td align="left">La Planificación Operativa Anual del Organismo Deportivo se encuentra enmarcada en lo establecido en el Acuerdo Ministerial 456 y el Acuerdo Ministerial 457</td><td><select class="acuerdoEnmarcado obligatorios__tabla ancho__total__input__selects" name="acuerdoEnmarcado"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_acuerdoEnmarcado" class="text_acuerdoEnmarcado ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-warning generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;GENERAR CALIFICACIÓN</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();

						
				}

				}



				if ($("#idRolAd").val()==3){

					$("#idOrganismo").val($(".idOrganismoM").val());

					$("#fisicamenteEn").val("subsecretariaSubse");

					$("#idUsuarioEn").val($("#idUsuarioC").val());

					$("#enviarTramite").hide();
						
				}



				if($("#idRolAd").val()==3){

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					$(".observaciones__nestD").hide();

					$(".contenedor__reasignaciones").hide();

					segmentosSelectsCOncendidos($(".alto__fisiR"),$(".observaciones__nestD"));

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$("#generarDocumento"));

				}

				enviarTramitesGeneradosSubsess($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","N/A","N/A","corrdinacionSubsecc");

				enviarTramitesGeneradosSubsess($(".enviar__rFuncionarios"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento",false,"no__tramite");


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones reasignar coordinaciones  ======*/

/*=====================================================
=            Acciones rechazar financieras            =
=====================================================*/

var funcion__datatabletsReasignarTra__finan__rechazas=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite__Financiero__rechazos").hide();


  	console.log(data);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__finan__rechazos');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerInformacion__docus=elementos['obtenerInformacion__docus'];
				var obtenerInformacion__docus__observas=elementos['obtenerInformacion__docus__observas'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();


				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">Documentos</div>');

	
				for (d of obtenerInformacion__docus) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="polizaOriginal" name="polizaOriginal"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__polizaOriginal" name="observa__polizaOriginal" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="caucionOrginal" name="caucionOrginal"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__caucionOrginal" name="observa__caucionOrginal" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copiaCertificadoBancario" name="copiaCertificadoBancario"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copiaCertificadoBancario" name="observa__copiaCertificadoBancario" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copiaRegistroD" name="copiaRegistroD"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copiaRegistroD" name="observa__copiaRegistroD" ></textarea style="border:none!important;" disabled="disabled"></div>');

					if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_adminFinanciero" name="copia_adminFinanciero"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_adminFinanciero" name="observa__copia_adminFinanciero" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}

					if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_adminGeneral" name="copia_adminGeneral"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_adminGeneral" name="observa__copia_adminGeneral" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}

					if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia__registroIn" name="copia__registroIn"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia__registroIn" name="observa__copia__registroIn" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}
						
					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_acuerdoRegistro" name="copia_acuerdoRegistro"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_acuerdoRegistro" name="observa__copia_acuerdoRegistro" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_ruc" name="copia_ruc"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_ruc" name="observa__copia_ruc" ></textarea style="border:none!important;" disabled="disabled"></div>');

				}

				for (c of obtenerInformacion__docus__observas) {

					$("#polizaOriginal").val(c.polizaOriginal);
					$("#caucionOrginal").val(c.caucionOrginal);
					$("#copiaCertificadoBancario").val(c.copiaCertificadoBancario);
					$("#copiaRegistroD").val(c.copiaRegistroD);
					$("#copia_adminFinanciero").val(c.copia_adminFinanciero);
					$("#copia_adminGeneral").val(c.copia_adminGeneral);
					$("#copia__registroIn").val(c.copia__registroIn);
					$("#copia_acuerdoRegistro").val(c.copia_acuerdoRegistro);
					$("#copia_ruc").val(c.copia_ruc);


					$("#observa__polizaOriginal").val(c.observa__polizaOriginal);
					$("#observa__caucionOrginal").val(c.observa__caucionOrginal);
					$("#observa__copiaCertificadoBancario").val(c.observa__copiaCertificadoBancario);
					$("#observa__copiaRegistroD").val(c.observa__copiaRegistroD);
					$("#observa__copia_adminFinanciero").val(c.observa__copia_adminFinanciero);
					$("#observa__copia_adminGeneral").val(c.observa__copia_adminGeneral);
					$("#observa__copia__registroIn").val(c.observa__copia__registroIn);
					$("#observa__copia_acuerdoRegistro").val(c.observa__copia_acuerdoRegistro);
					$("#observa__copia_ruc").val(c.observa__copia_ruc);




				}
			
			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones rechazar financieras  ======*/


/*============================================================
=            Acciones reasignar Trans financieros            =
============================================================*/

var funcion__datatabletsReasignarTra__finan=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);


  	console.log(data);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__finan');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerInformacion__docus=elementos['obtenerInformacion__docus'];
				var obtenerInformacion__docus__negados=elementos['obtenerInformacion__docus__negados'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();




				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();


				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">Documentos a analizar</div>');

				if($("#idRolAd").val()!=3){

					for (d of obtenerInformacion__docus) {

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a>');

						if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a>');
						}

						if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a>');
						}

						if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a>');
						}
						
						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a>');


					}

				}else{

					for (d of obtenerInformacion__docus) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select class="col col-2" id="polizaOriginal" name="polizaOriginal"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__polizaOriginal" name="observa__polizaOriginal" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select class="col col-2" id="caucionOrginal" name="caucionOrginal"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__caucionOrginal" name="observa__caucionOrginal" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a><select class="col col-2" id="copiaCertificadoBancario" name="copiaCertificadoBancario"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copiaCertificadoBancario" name="observa__copiaCertificadoBancario" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a><select class="col col-2" id="copiaRegistroD" name="copiaRegistroD"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copiaRegistroD" name="observa__copiaRegistroD" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a><select class="col col-2" id="copia_adminFinanciero" name="copia_adminFinanciero"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_adminFinanciero" name="observa__copia_adminFinanciero" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}

						if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a><select class="col col-2" id="copia_adminGeneral" name="copia_adminGeneral"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_adminGeneral" name="observa__copia_adminGeneral" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}

						if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a><select class="col col-2" id="copia__registroIn" name="copia__registroIn"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia__registroIn" name="observa__copia__registroIn" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a><select class="col col-2" id="copia_acuerdoRegistro" name="copia_acuerdoRegistro"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_acuerdoRegistro" name="observa__copia_acuerdoRegistro" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a><select class="col col-2" id="copia_ruc" name="copia_ruc"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_ruc" name="observa__copia_ruc" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');


						if (obtenerInformacion__docus__negados!="no") {

							for (w of obtenerInformacion__docus__negados) {

								if (w.polizaOriginal=="p") {
									$("#polizaOriginal").val("r");
								}else{
									$("#polizaOriginal").val(w.polizaOriginal);
								}
								$("#observa__polizaOriginal").val(w.observa__polizaOriginal);

								if (w.caucionOrginal=="p") {
									$("#caucionOrginal").val("r");
								}else{
									$("#caucionOrginal").val(w.caucionOrginal);
								}
								$("#observa__caucionOrginal").val(w.observa__caucionOrginal);


								if (w.copiaCertificadoBancario=="p") {
									$("#copiaCertificadoBancario").val("r");
								}else{
									$("#copiaCertificadoBancario").val(w.copiaCertificadoBancario);
								}
								$("#observa__copiaCertificadoBancario").val(w.observa__copiaCertificadoBancario);

								if (w.copiaRegistroD=="p") {
									$("#copiaRegistroD").val("r");
								}else{
									$("#copiaRegistroD").val(w.copiaRegistroD);
								}
								$("#observa__copiaRegistroD").val(w.observa__copiaRegistroD);

								if (w.copia_adminFinanciero=="p") {
									$("#copia_adminFinanciero").val("r");
								}else{
									$("#copia_adminFinanciero").val(w.copia_adminFinanciero);
								}
								$("#observa__copia_adminFinanciero").val(w.observa__copia_adminFinanciero);

								if (w.copia_adminGeneral=="p") {
									$("#copia_adminGeneral").val("r");
								}else{
									$("#copia_adminGeneral").val(w.copia_adminGeneral);
								}
								$("#observa__copia_adminGeneral").val(w.observa__copia_adminGeneral);

								if (w.copia__registroIn=="p") {
									$("#copia__registroIn").val("r");
								}else{
									$("#copia__registroIn").val(w.copia__registroIn);
								}
								$("#observa__copia__registroIn").val(w.observa__copia__registroIn);


								if (w.copia_acuerdoRegistro=="p") {
									$("#copia_acuerdoRegistro").val("r");
								}else{
									$("#copia_acuerdoRegistro").val(w.copia_acuerdoRegistro);
								}
								$("#observa__copia_acuerdoRegistro").val(w.observa__copia_acuerdoRegistro);
								

								if (w.copia_ruc=="p") {
									$("#copia_ruc").val("r");
								}else{
									$("#copia_ruc").val(w.copia_ruc);
								}
								$("#observa__copia_ruc").val(w.observa__copia_ruc);


							}

						}


					}


				}


				var idRolE=$("#idRolAd").val();

				if($("#idRolAd").val()==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretarias__finanA__c($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan";

					enviarTramitesGenerados__financieros($("#enviarTramite__Financiero"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),variableF],variableF,tipo__enviados);

				}else if($("#idRolAd").val()==4){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretarias__finanA__c__c($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan__coordinas";



				}else if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Regresar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

					$(".contenedor__reasignaciones").hide();

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$(".bloques__financieros__documentos"));

					subsecretarias__finanA__c__a($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan__funcionarios";

				}

				$(".alto__fisiR").change(function (e){

					$("#texto__finan").val($(this).val());

				});

				var variableF=$("#texto__finan").val();

				enviarTramitesGenerados__financieros($("#enviarTramite__Financiero"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),variableF],variableF,tipo__enviados);


				
			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones reasignar Trans financieros  ======*/


var funcion__datatabletsAsignarEditarDos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.botonEditarOr",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".input__1").val(data[2]);

  	$(".enviado").val(data[4]);

  	$(".modal-title").text(data[1]);

  	$(".select__tipoOrga").val(data[5]);

  	console.log(data)

  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10){

	$(parametro1).click(function (e){


		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

						$(".boton__enlacesOcultos").show();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editarOrganismoC"),"de la información ingresada","confirm","editarCorreoOrga",null,null,null,"orgasModalOrForm");

	  	
  /*=====  End of Insertar  ======*/
  


  });

}


var funcion__datatabletsAsignarEditar=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.botonEditarOr",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".input__1").val(data[2]);

  	$(".enviado").val(data[5]);

  	$(".modal-title").text(data[1]);

  	$(".select__tipoOrga").val(data[6]);

  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10){

	$(parametro1).click(function (e){


		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

						$(".boton__enlacesOcultos").show();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editarOrganismoC"),"de la información ingresada","confirm","editarCorreoOrga",null,null,null,"orgasModalOrForm");

	  	
  /*=====  End of Insertar  ======*/
  


  });

}


var funcion__datatabletsAsignarInforDos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button."+parametro5,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".asignado__titulos").text(data[1]);

  	for (var i =0;i<parametro4.length;i++) {
  		
  		$("."+parametro4[0]).val(data[parametro3[i]]);

  	}

  	$(".idOrganismo").val(data[4]);

  	var idUsuarioPrincipal=$("#idUsuarioPrincipal").val();

  	$(".idUsuarioPrincipalDos").val(idUsuarioPrincipal);


  });

}

var funcionObtenerOrganismos__eventos__organismos__3=function(tbody,table){

  $(tbody).on("click","button.asignar__boton__paid__3",function(e){

    e.preventDefault();

    let data=table.row($(this).parents("tr")).data();

    var sumarIndicadoresGlobalNormal=function(parametro1,parametro2){

        $(parametro1).on('input', function () {

            var sum = 0;

            $(parametro1).each(function(){
                sum += parseFloat($(this).val());
            });

            $(parametro2).val(parseFloat(sum).toFixed(2));

        });

    }

    sumarIndicadoresGlobalNormal($(".enlazados__sumas__de__dos__dos"),$(".totalSumatoriasMontos__dos"));


    $(".enero__2").val(data[21]);
    $(".febrero__2").val(data[22]);
    $(".marzo__2").val(data[23]);
    $(".abril__2").val(data[24]);
    $(".mayo__2").val(data[25]);
    $(".junio__2").val(data[26]);
    $(".julio__2").val(data[27]);
    $(".agosto__2").val(data[28]);
    $(".septiembre__2").val(data[29]);
    $(".octubre__2").val(data[30]);
    $(".noviembre__2").val(data[31]);
    $(".diciembre__2").val(data[32]);
    $(".totalSumatoriasMontos__dos").val(data[33]);

    $("#proyectoHidden").val(data[3]);

    console.log(data);

  });

}

var funcionObtenerOrganismos__eventos__organismos__2=function(tbody,table){

  $(tbody).on("click","button.asignar__boton__paid__2",function(e){

    e.preventDefault();

    let data=table.row($(this).parents("tr")).data();

    var paqueteDeDatos = new FormData();

    paqueteDeDatos.append('tipo','actividadesDepor');  

    let idOrganismo=$("#organismoIdPrin").val();


    let actividad__determinantes=$("#actividad__determinantes").val();

    var matrizD=$("#enlaceMatriz"+actividad__determinantes).attr('attr');

    paqueteDeDatos.append("actividad__determinantes",actividad__determinantes); 

    var arrayMatrizD = matrizD.split(",");


    paqueteDeDatos.append('arrayMatrizD', JSON.stringify(arrayMatrizD));

    paqueteDeDatos.append('idOrganismo', idOrganismo);

    paqueteDeDatos.append('idActividad', actividad__determinantes);

    paqueteDeDatos.append('idPda', data[1]);

    $.ajax({

        type:"POST",
        url:"modelosBd/inserta/seleccionaAcciones.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        success:function(response){

            $.getScript("layout/scripts/js/validaGlobal.js",function(){

                let elementos=JSON.parse(response);

                let arrayInformacionSecond=elementos['arrayInformacion'];

                let obtenerInformacion__solitaraias=elementos['obtenerInformacion__solitaraias'];

                let z=0;

                var array = new Array(); 

                $(".items__escogidos__2").html(" ");

                 $(".items__escogidos__2").append("<option value='0'>--Seleccione un ítem--</option>");

                 $(".items__escogidos__2").val(0);

                for(var w=0; w<arrayInformacionSecond.length;w++){

                    for(x of arrayInformacionSecond[w]){

                        let encontrar = array.indexOf(x.nombreItem);

                        if (encontrar===-1) {

                            let $option = $('<option />', {
                                text: x.nombreItem,
                                value: x.idItem+"__"+x.nombreItem,
                            });

                            $(".items__escogidos__2").prepend($option);

                        } 

                        array.push(x.nombreItem);

                        console.log(encontrar)

                    }

                }

                console.log(array);

                agregar__en__contenedores($(".items__escogidos__2"),actividad__determinantes,false,data[1]);

                $(".contenedores__absoluties").html(" ");

                $(".tablas__items__n").remove();

                $(".contenedor__realizados__mes").append("<table class='tablas__items__n'><tr><th>Ítem</th><th>Enero</th><th>Febrero</th><th>Marzo</th><th>Abril</th><th>Mayo</th><th>Junio</th><th>Julio</th><th>Agosto</th><th>Septiembre</th><th>Octubre</th><th>Noviembre</th><th>Diciembre</th><th>Total</th><th>Eliminar</th></tr></table>");

                for(z of obtenerInformacion__solitaraias){

                     if (!$(".alineados"+z.idPda).length > 0 ) {

                        $(".tablas__items__n").append('<tr class="col col-11 alineados'+z.idItem+' mt-2 contenedores__absoluties"><td>'+z.nombreItem+'</td><td>'+z.enero+'</td><td>'+z.febrero+'</td><td>'+z.marzo+'</td><td>'+z.abril+'</td><td>'+z.mayo+'</td><td>'+z.junio+'</td><td>'+z.julio+'</td><td>'+z.agosto+'</td><td>'+z.septiembre+'</td><td>'+z.octubre+'</td><td>'+z.noviembre+'</td><td>'+z.diciembre+'</td><td>'+z.totalElem+'</td><td><a class="btn btn-danger mt-2 contenedores__absoluties alineados'+z.idItem+'" id="eliminates__'+z.idPda+'" idContador="'+z.idItem+'" idPda="'+z.idPda+'"><i class="fas fa-trash"></i></a></td></tr>');

                        $("#eliminates__"+z.idPda).click(function(e){

                            let idContador=$(this).attr('idContador');

                            let idPda=$(this).attr('idPda');

                            var paqueteDeDatos = new FormData();

                            paqueteDeDatos.append('parametros',idContador);

                            let idOrganismoPrincipal=$("#idOrganismoPrincipal").val();

                            paqueteDeDatos.append('idOrganismoPrincipal',idOrganismoPrincipal);

                            paqueteDeDatos.append('idPda',idPda);

                            paqueteDeDatos.append('idActividad',actividad__determinantes);

                            paqueteDeDatos.append('tipo','eliminar__poa__pda__admin__nuevo');

                            $.ajax({

                                type:"POST",
                                url:"modelosBd/inserta/eliminaAcciones.md.php",
                                contentType: false,
                                data:paqueteDeDatos,
                                processData: false,
                                cache: false, 
                                success:function(response){

                                    var elementos=JSON.parse(response);

                                    var mensaje=elementos['mensaje'];

                                    if(mensaje==1){

                                        alertify.set("notifier","position", "top-center");
                                        alertify.notify("Registro eliminado", "success", 4, function(){});

                                        $(".alineados"+idContador).remove();

                                    }

                                },
                                error:function(){

                                }
                                    
                            }); 


                        });

                      
                    }                   

                }


                var enviar__eventos__totales__items__montos__dos=function(parametro1,parametro2){

                $(parametro1).click(function (e){

                    e.preventDefault(); 

                        var paqueteDeDatos = new FormData();

                        paqueteDeDatos.append('tipo',parametro2);   

                        let idOrganismo=$("#organismoIdPrin").val();

                        paqueteDeDatos.append("idOrganismos",idOrganismo);


                        var valoresArray = concatenarValores($(".enlazados__items__sin"));

                        const eliminaDuplicados = (arr) => {
                         
                          const unicos = [];
                         
                          for(var i = 0; i < arr.length; i++) {
                         
                            const elemento = arr[i];
                          
                            if (!unicos.includes(arr[i])) {
                              unicos.push(elemento);
                            }
                          }
                          
                          return unicos;
                        }

                        let arraySin=eliminaDuplicados(valoresArray);

                        paqueteDeDatos.append("arraySin",JSON.stringify(arraySin));

                        paqueteDeDatos.append("idActividad",actividad__determinantes);

                        paqueteDeDatos.append('evento',data[3]);  

                        $(this).hide();

                    if (arraySin.length==0) {

                        alertify.set("notifier","position", "top-center");
                        alertify.notify("Obligatorio seleccionar ítem para el evento", "error", 5, function(){});

                        $(this).show();

                    }else{

                        var confirm= alertify.confirm('¿Está seguro de guardar la información ingresada?','¿Está seguro de guardar la información ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                            confirm.set({transition:'slide'});    

                            confirm.set('onok', function(){ //callbak al pulsar botón positivo


                                $.ajax({

                                    type:"POST",
                                    url:"modelosBd/inserta/insertaAcciones.md.php",
                                    contentType: false,
                                    data:paqueteDeDatos,
                                    processData: false,
                                    cache: false, 
                                    success:function(response){

                                        var elementos=JSON.parse(response);

                                        var mensaje=elementos['mensaje'];

                                        if(mensaje==1){

                                            alertify.set("notifier","position", "top-center");
                                            alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});


                                            window.setTimeout(function(){ 

                                                location.reload();

                                            } ,5000); 


                                        }else{

                                            alertify.set("notifier","position", "top-center");
                                            alertify.notify("El valor supera al monto asignado", "error", 5, function(){});

                                            $(parametro1).show();

                                        }           
                                

                                    },
                                    error:function(){

                                    }
                                                    
                                }); 

                            }); 

                            confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
                                alertify.set("notifier","position", "top-center");
                                alertify.notify("Acción cancelada", "error", 1, function(){

                                    $(parametro1).show();

                                }); 
                            }); 


                    }

                });

                }

                enviar__eventos__totales__items__montos__dos($(".guardarMontos__eventos__2"),"guardar__eventos__inicial__montos__2");

             });

        },
        error:function(){

        }
                                
    });     

    console.log(data);

  });

}

var funcion__eventos__nuevos__2=function(tbody,table){

  $(tbody).on("click","button.asignar__boton__paid",function(e){

    e.preventDefault();

    let data=table.row($(this).parents("tr")).data();

    $(".proyecto").val(data[3]);
    $(".proyectoHidden").val(data[3]);
    $(".tipoFinanciamiento").val(data[2]);
    $(".deporte").val(data[4]);
    $(".provinciaE").val(data[5]);
    $(".ciudadPais").val(data[6]);
    $(".alcanceE").val(data[7]);
    $(".fecha__inicio").val(data[8]);
    $(".fecha__fin").val(data[9]);
    $(".genero").val(data[10]);
    $(".categoria").val(data[11]);
    $(".numero__entrenadores").val(data[12]);
    $(".numero__atletas").val(data[13]);
    $(".total").val(data[14]);
    $(".mujeresBeneficiarios").val(data[15]);
    $(".hombresBeneficiarios").val(data[16]);
    $(".cantidadBienAquirir").val(data[18]);
    $(".detalleOrganismoAd").val(data[34]);
    $(".justificacionAdquisBien").val(data[17]);

    console.log(data);

  });

}

var funcion__datatabletsAsignarInfor__2=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignar__boton__paid",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismo").val(data[5]);

  	let valorComparativo=$("#valorComparativo").val();

  	$("#guardarAsignacion__paid").hide();


  	console.log(data);

  });

}

var funcion__datatabletsAsignarInfor=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button."+parametro5,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".asignado__titulos").text(data[1]);

  	for (var i =0;i<parametro4.length;i++) {
  		
  		$("."+parametro4[0]).val(data[parametro3[i]]);

  	}

  	$(".idOrganismo").val(data[5]);

  	var idUsuarioPrincipal=$("#idUsuarioPrincipal").val();

  	$(".idUsuarioPrincipalDos").val(idUsuarioPrincipal);


  });

}

var funcion__verComponentes__156=function(tbody,table,parametro3){

  $(tbody).on("click","a.verRubrosC",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();

    $("#tablaItemsRubrosContentPrincipal").dataTable().fnDestroy();

    $(".titulo__modalItems").text("RUBROS DEL COMPONENTE "+data[0]);


    $(".elemento__escondidoI").val(data[2]);

    $("#idUsados__items").val(data[1]);


    datatablets($("#tablaItemsRubrosContentPrincipal"),"tablaItemsRubrosContentPrincipal",[$("#idUsados__items").val(),$("#valorComparativo").val()],objetos([1],["boton"],["<button class='eliminarItemAc estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__datatabletsEliminar__paid__componentes__s"],["eliminarItemAc"],["itemAcEliminaRubros"],["elimina"],[1,0],['enviado','input__1']);

    $(".botones__ideales").removeClass("modales__reload");


     var nuevoNavs=function(parametro1){

        $(parametro1).click(function(e){

            $("#componentesCargado").attr('style','padding-right: 17px; display: block;');
            $("#rubrosEditaModalComponentes").removeAttr('style');

        });

    }

    nuevoNavs($(".botones__ideales"));

    $(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

    
  
  });

}

var funcion__datatabletsEliminar__paid__componentes__s=function(tbody,table,parametro3){

  $(tbody).on("click","button."+parametro3,function(e){

    e.preventDefault();

    var boton=$(this);

    $(boton).hide();

    var data=table.row($(this).parents("tr")).data();


     let idEnviado=data[1];


    var confirm= alertify.confirm('¿Está seguro de eliminar?','¿Está seguro de eliminar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

    confirm.set({transition:'slide'});    

    confirm.set('onok', function(){ //callbak al pulsar botón positivo

        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('tipo','eliminar__componente__rubros__s');
        paqueteDeDatos.append('idEnviado',idEnviado);

        $.ajax({

            type:"POST",
            url:"modelosBd/inserta/eliminaAcciones.md.php",
            contentType: false,
            data:paqueteDeDatos,
            processData: false,
            cache: false, 
            success:function(response){

                var elementos=JSON.parse(response);

                var mensaje=elementos['mensaje'];

                if(mensaje==1){

                    alertify.set("notifier","position", "top-center");
                    alertify.notify("Registro eliminado", "success", 4, function(){});

                    table.ajax.reload();

                }

            },
            error:function(){

            }
                
        });         

    });

    confirm.set('oncancel', function(){ 

        alertify.set("notifier","position", "top-center");
        alertify.notify("Acción cancelada", "error", 1, function(){

            $(boton).show();

        }); 

    });   


  });

}


var funcion__datatabletsEliminar___849=function(tbody,table,parametro3){

  $(tbody).on("click","a.eliminarComponente",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();


     let idEnviado=data[1];


    var confirm= alertify.confirm('¿Está seguro de eliminar?','¿Está seguro de eliminar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

    confirm.set({transition:'slide'});    

    confirm.set('onok', function(){ //callbak al pulsar botón positivo

        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('tipo','eliminar__componente__rubros__principales__s');
        paqueteDeDatos.append('idEnviado',idEnviado);

        $.ajax({

            type:"POST",
            url:"modelosBd/inserta/eliminaAcciones.md.php",
            contentType: false,
            data:paqueteDeDatos,
            processData: false,
            cache: false, 
            success:function(response){

                var elementos=JSON.parse(response);

                var mensaje=elementos['mensaje'];

                if(mensaje==1){

                    alertify.set("notifier","position", "top-center");
                    alertify.notify("Registro eliminado", "success", 4, function(){});

                    table.ajax.reload();

                }

            },
            error:function(){

            }
                
        });         

    });

    confirm.set('oncancel', function(){ 

        alertify.set("notifier","position", "top-center");
        alertify.notify("Acción cancelada", "error", 1, function(){

            $(boton).show();

        }); 

    });   
    console.log(data);

  });

}


var funcion__verItemsObtener__2=function(tbody,table,parametro3){

  $(tbody).on("click","a.verItems",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$("#tablaItemsRubros").dataTable().fnDestroy();

  	$(".titulo__modalItems").text("ITEMS DEL RUBRO "+data[0]);


  	datatablets($("#tablaItemsRubros"),"tablaItemsRubros",[data[1],$("#valorComparativo").val()],objetos([1],["boton"],["<button class='eliminarItemAc estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__datatabletsEliminar"],["eliminarItemAc"],["itemAcEliminaRubros"],["elimina"],[1,0],['enviado','input__1']);

  	//$(".elemento__escondidoI").val(data[2]);

  	$("#idUsados__items").val(data[1]);


	 var nuevoNavs=function(parametro1,parametro2){

		$(parametro1).click(function(e){

			if (parametro2=="verItems,editarRubros,eliminarRubros") {

				$("#rubrosCargados").attr('style','padding-right: 17px; display: block;');
				$("#rubrosEditaModalAc").removeAttr('style');

			}

		});

	}

	nuevoNavs($(".botones__ideales"),parametro3);

	$(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

  	
  
  });

}

var funcion__verItemsObtener=function(tbody,table,parametro3){

  $(tbody).on("click","button.verItems",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$("#tablaItemsAc").dataTable().fnDestroy();

  	$(".titulo__modalItems").text("ITEMS DE "+data[1]);


  	$("#exampleModalLabel").text("Items de "+data[1]);

  	datatablets($("#tablaItemsAc"),"tablaItemsAc",[data[2]],objetos([1],["boton"],["<button class='eliminarItemAc estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__datatabletsEliminar"],["eliminarItemAc"],["itemAcElimina"],["elimina"],[1,0],['enviado','input__1']);

  	$(".elemento__escondidoI").val(data[2]);
  
  });

}


var funcion__datatabletsEditar=function(tbody,table,parametro3,parametro4,parametro5,parametro10,parametro11){

  $(tbody).on("click","button."+parametro3,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

	var nuevoNavs=function(parametro1,parametro2){

		$(parametro1).click(function(e){


			if (parametro2=="editarRubros") {

				$("#rubrosCargados").attr('style','padding-right: 17px; display: block;');
				$("#rubrosEditaModal").removeAttr('style');

			}

			if (parametro2=="editarPrograma") {

				$("#programaCargado").attr('style','padding-right: 17px; display: block;');
				$("#programaEdita").removeAttr('style');

			}


			if (parametro2=="editarComponente") {

				$("#componentesCargado").attr('style','padding-right: 17px; display: block;');
				$("#componenteEdita").removeAttr('style');

			}

			if (parametro2=="editarItems") {

				$("#itemsCargados").attr('style','padding-right: 17px; display: block;');
				$("#itemEdita").removeAttr('style');

			}

			if (parametro2=="editarEstrategicos") {

				$("#objetivosEstrategicosCargados").attr('style','padding-right: 17px; display: block;');
				$("#estrategicosEdita").removeAttr('style');

			}

			if (parametro2=="editarEncargada") {

				$("#areaEncargada").attr('style','padding-right: 17px; display: block;');
				$("#encargadaEdita").removeAttr('style');

			}


			if (parametro2=="editarAccion") {

				$("#areaAccion").attr('style','padding-right: 17px; display: block;');
				$("#accionEdita").removeAttr('style');

			}


			if (parametro2=="editarTipoOr") {

				$("#tipoOrganizacionDeportiva").attr('style','padding-right: 17px; display: block;');
				$("#tipoOrEdita").removeAttr('style');

			}


			if (parametro2=="editarIndicador") {

				$("#indicadoresCargado").attr('style','padding-right: 17px; display: block;');
				$("#indicadorEdita").removeAttr('style');

			}


			if (parametro2=="editarDeportePaid") {

				$("#deportesCargados").attr('style','padding-right: 17px; display: block;');
				$("#deportePaidEdita").removeAttr('style');

			}

			if (parametro2=="editarModalidad") {

				$("#modalidadCargados").attr('style','padding-right: 17px; display: block;');
				$("#modalidadEdita").removeAttr('style');

			}


			if (parametro2=="editarPrueba") {

				$("#pruebaCargados").attr('style','padding-right: 17px; display: block;');
				$("#pruebaEdita").removeAttr('style');

			}



			if (parametro2=="editarCatgoria") {

				$("#categoriaCargados").attr('style','padding-right: 17px; display: block;');
				$("#categoriaEdita").removeAttr('style');

			}

		});

	}

	nuevoNavs($(".botones__ideales"),parametro3);

	$(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

  	console.log(data);

  	$(".input__2__rubroPaid").val(data[4]);

  	$(".input__3__rubroPaid").val(data[5]);


  	$(".input__2Items__paid").val(data[1]);


  	$(".input__2__tipoPaid").val(data[3]);

  	$(".input__3__tipoPaid").val(data[4]);

  	for (var i =0;i<parametro11.length;i++) {

  		if(parametro11[i]=="select__indiCadores"){

  			$("."+parametro11[i]).val(data[6]);

  		}else if (parametro11[i]=="select__grupoG") {

  			$("."+parametro11[i]).val(data[4]);

  		}else if(parametro11[i]=="inputActividades"){

  			$("."+parametro11[i]).val(data[0]);

  		}else if(parametro11[i]=="inputActividadesdos"){

  			$("."+parametro11[i]).val(data[0]);

  		}else if(parametro11[i]=="input__2Items"){

  			$("."+parametro11[i]).val(data[8]);

  		}else if(parametro11[i]=="select__2Objetivos"){

  			$("."+parametro11[i]).val(data[3]);

  		}else{

  			$("."+parametro11[i]).val(data[parametro10[i]]);

  		}
  		
  		

  	}


  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11){

	$(parametro1).click(function (e){

		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		$('.reload__Enviosrealizados').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			var emailPrincipal=$("#emailPrincipal").val();
			var nombrePrincipalU=$("#nombrePrincipalU").val();
			var idOrganismoPrincipal=$("#idOrganismoPrincipal").val();

			paqueteDeDatos.append("emailPrincipal",emailPrincipal);
			paqueteDeDatos.append("tabla",parametro5);
			paqueteDeDatos.append("valoresArray",JSON.stringify(parametro6));
			paqueteDeDatos.append("idBuscado",parametro7);
			paqueteDeDatos.append("nombrePrincipalU",nombrePrincipalU);
			paqueteDeDatos.append("idOrganismoPrincipal",idOrganismoPrincipal);

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			paqueteDeDatos.append("idPaid",parametro11);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editaItemPrincipal"),"de la información ingresada","confirm","itemsPrincipalActualiza",null,null,null,"itemPrincipalForm");

	insertaValidaciones($("#editarActividades"),"de la información ingresada","confirm","actividadesActualiza",null,null,null,"actividadesForm");

	insertaValidaciones($("#editarGrupoGasto"),"de la información ingresada","confirm","grupoGastoActualiza",null,null,null,"grupoGastoForm");

	insertaValidaciones($("#editarLinea"),"de la información ingresada","confirm","lineaBaseActualiza",null,null,null,"lineaPoliticaForm");

	insertaValidaciones($("#editarPrograma"),"de la información ingresada","confirm","programaActualiza",null,null,null,"programaForm");

	insertaValidaciones($("#editarIndicadores"),"de la información ingresada","confirm","indicadoresActualiza",null,null,null,"indicadoresForm");

	insertaValidaciones($("#editarDeportes"),"de la información ingresada","confirm","deportesActualiza",null,null,null,"deportesForm");

	insertaValidaciones($("#editarAlcance"),"de la información ingresada","confirm","alcanceActualiza",null,null,null,"alcanceForm");

	insertaValidaciones($("#editarTipoFinan"),"de la información ingresada","confirm","tipoFinanActualiza",null,null,null,"financiamientoForm");

	insertaValidaciones($("#editarTipoFinan"),"de la información ingresada","confirm","tipoFinanActualiza",null,null,null,"financiamientoForm");

	insertaValidaciones($("#editarcargo"),"de la información ingresada","confirm","cargosActualiza",null,null,null,"cargoForm");

	insertaValidaciones($("#editarObjetivos"),"de la información ingresada","confirm","objetivosActualiza",null,null,null,"objetivoForm");

	insertaValidaciones($("#editarTipoOrganismo"),"de la información ingresada","confirm","tipoOrganismoActualiza",null,null,null,"tipoOrganismoForm");

	insertaValidaciones($("#editarAreaAccion"),"de la información ingresada","confirm","areaAccionActualiza",null,null,null,"areaAccionForm");

	insertaValidaciones($("#editaAreaEncargada"),"de la información ingresada","confirm","areaEncargadaActualiza",null,null,null,"areaEncargadaForm");


	insertaValidaciones($("#editarPrograma"),"de la información ingresada","confirm","programaActualiza__paid",null,null,null,"programaForm");

	insertaValidaciones($("#editarComponentes"),"de la información ingresada","confirm","componenteActualiza__paid",null,null,null,"componenteForm");

	insertaValidaciones($("#editaItemPaid"),"de la información ingresada","confirm","itemActualiza__paid",null,null,null,"itemPrincipalForm",false,false,data[2]);
	  	
	insertaValidaciones($("#editarEstrategico"),"de la información ingresada","confirm","estrategicoActualiza__paid",null,null,null,"estrategicosForm");

	insertaValidaciones($("#editarEncargada"),"de la información ingresada","confirm","encargadaActualiza__paid",null,null,null,"encargadaForm");

	insertaValidaciones($("#editaAccion"),"de la información ingresada","confirm","accionActualiza__paid",null,null,null,"accionForm");

	insertaValidaciones($("#editaTipoOr"),"de la información ingresada","confirm","tipoOrActualiza__paid",null,null,null,"tipoOrForm",false,false,data[5]);

	insertaValidaciones($("#editaIndicador"),"de la información ingresada","confirm","indicadorActualiza__paid",null,null,null,"indicadoresForm");

	insertaValidaciones($("#editaRubro"),"de la información ingresada","confirm","rubroActualiza__paid",null,null,null,"rubrosForm",false,false,data[1]);

	insertaValidaciones($("#editaDeportePaid"),"de la información ingresada","confirm","deporteActualiza__paid",null,null,null,"deportePaidForm");

	insertaValidaciones($("#editaModalidad"),"de la información ingresada","confirm","modalidadActualiza__paid",null,null,null,"modalidadPaidForm");

	insertaValidaciones($("#editaPrueba"),"de la información ingresada","confirm","modalidadPrueba__paid",null,null,null,"pruebaForm");

	insertaValidaciones($("#editaCategoria"),"de la información ingresada","confirm","categoria__paid",null,null,null,"categoriaForm");

  /*=====  End of Insertar  ======*/
  
});

}




var funcion__datatabletsEliminar=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button."+parametro3,function(e){

  	e.preventDefault();

  	var boton=$(this);

  	$(boton).hide();

  	var data=table.row($(this).parents("tr")).data();


    // if (parametro3=="eliminarPrograma" || parametro3=="eliminarComponente" || parametro3=="eliminarItem" || parametro3=="estrategicosElimina" || parametro3=="encargadaElimina" || parametro3=="eliminarAccion" || parametro3=="eliminarTipoOr" || parametro3=="eliminarIndicador" || parametro3=="rubrosElimina" || parametro3=="deportePaidElimina" || parametro3=="modalidadElimina" || parametro3=="pruebaElimina" || parametro3=="eliminarCategoria") {

        let idEnviado=data[1];

    // }

    

	var confirm= alertify.confirm('¿Está seguro de eliminar?','¿Está seguro de eliminar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo',parametro4);
		paqueteDeDatos.append('idEnviado',idEnviado);

		paqueteDeDatos.append('idEnviado2',data[2]);
		paqueteDeDatos.append('paid',data[3]);
		paqueteDeDatos.append('paid2',data[5]);
		paqueteDeDatos.append('paid4',data[1]);
			  
		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/eliminaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

		      	var elementos=JSON.parse(response);

		      	var mensaje=elementos['mensaje'];

				if(mensaje==1){

					alertify.set("notifier","position", "top-center");
					alertify.notify("Registro eliminado", "success", 4, function(){});

					table.ajax.reload();

		      	}

			},
			error:function(){

			}
				
		});		    

	});

	confirm.set('oncancel', function(){ 

		alertify.set("notifier","position", "top-center");
		alertify.notify("Acción cancelada", "error", 1, function(){

			$(boton).show();

		}); 

	});   


  });

}

var funcion__datatabletsObtener=function(tbody,table,parametro3,parametro4,parametro5,parametro6,parametro7){

  $(tbody).on("click","button.aprobacionUsuariosBoton",function(e){

      var data=table.row($(this).parents("tr")).data();

      $("#enviado").val(data[parametro6]);

      if (parametro5>=0) {
      	$("#tituloModalGenerico").text(data[parametro5]);
      }

      for(var i=0;i<parametro3.length;i++){

      	var variableId=parametro3[i];

      	 $("#"+variableId).text(data[parametro4[i]]);

      }

      /*==========================================
      =            Acciones por modal            =
      ==========================================*/

 	  switch (parametro7) {

	  	case "aprobacionUsuarios":

	  		$("#acuerdoMinisterial").html('<a href="documentos/acuerdosMinisteriales/'+data[17]+data[0]+'.pdf" targe="_blank">Acuerdo minsiterial</a>');

	  		if (data[31]!=null && data[31]!=null) {

	  			$(".modal-body").append("<div class='row mt-4 estilo__enlaces__modales primario__21 pointer__botones'><div class='col col-11 titulo__enfasis modales__titulos text-left'>Observaciones realizadas</div><div class='col col-1 item__remplazoModales'><i class='fas fa-angle-left'></i></div></div><div class='row d d-flex justify-content-center mt-2 atado__21'><div class='col col-4 titulo__enfasis atado__21'>Observación</div><div class='col col-8 atado__21 justificado__textos'>"+data[31]+"</div></div></div>");

	  			if (data[32]=="A") {

	  				var estadoCorrecion="En revisión por parte del organismo deportivo";

	  			}else if(data[32]=="C"){

	  				var estadoCorrecion="Revisión realizada por parte del organismo deportivo";

	  			}

	  			$(".modal-body").append("<div class='row d d-flex justify-content-center mt-2 atado__21'><div class='col col-4 titulo__enfasis atado__21'>Estado de  observación</div><div class='col col-8 text-left atado__21'>"+estadoCorrecion+"</div></div></div>");

	  		}else{

	  			$(".modal-body").append('');

	  		}
	  		

	  	break;

	  }     

	var cerrandoMenus=function(parametro1,parametro2){

		$(parametro1).click(function(e){

			if ($(parametro1).find('.item__remplazoModales').hasClass("sub__menuElementos")) {

				$(parametro1).find('.item__remplazoModales').removeClass("sub__menuElementos");

				$(parametro1).find('.item__remplazoModales').html('<i class="fas fa-angle-left"></i>');

				$(parametro2).hide();

			}else{

				$(parametro1).find('.item__remplazoModales').addClass("sub__menuElementos");

				$(parametro1).find('.item__remplazoModales').html('<i class="fal fa-angle-down" style="font-weight:bold; white;"></i>');

				$(parametro2).show();

			}

			

		});

	}

	cerrandoMenus($(".primario__21"),$(".atado__21"));
	cerrandoMenus($(".primario__22"),$(".atado__22"));
	cerrandoMenus($(".primario__22"),$(".atado__22"));
	cerrandoMenus($(".primario__23"),$(".atado__23"));
	cerrandoMenus($(".primario__24"),$(".atado__24"));
	cerrandoMenus($(".primario__25"),$(".atado__25"));
	cerrandoMenus($(".primario__26"),$(".atado__26"));
	cerrandoMenus($(".primario__27"),$(".atado__27"));
	cerrandoMenus($(".primario__28"),$(".atado__28"));
	cerrandoMenus($(".primario__29"),$(".atado__29"));
	cerrandoMenus($(".primario__30"),$(".atado__30"));
	cerrandoMenus($(".primario__31"),$(".atado__31"));


	$(".atado__21").hide();
	$(".atado__22").hide();
	$(".atado__23").hide();
	$(".atado__24").hide();
	$(".atado__25").hide();
	$(".atado__26").hide();
	$(".atado__27").hide();
	$(".atado__28").hide();
	$(".atado__29").hide();
	$(".atado__30").hide();
	$(".atado__31").hide();

      /*=====  End of Acciones por modal  ======*/



      console.log(data);


  });

 }

/*======================================================
=            Función llamar data necesarias            =
======================================================*/

var funrion__reasignar__paid=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").html("<div class='text-center'>"+data[1]+"</div><div class='text-center'> Techo presupuestario: "+data[11]+"</div>");

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	let idRolAd=$("#idRolAd").val();

  	console.log(data);


  	$("#idUsuarioEn").val($("#idUsuarioPrincipal").val());

  	if (idRolAd==3) {

  		$(".calificar__eliminantes__paid__analistas").show();

  		/*===========================================
  		=            Calificar defaultas            =
  		===========================================*/
  		

  		var change__cambio__real=function(parametro1,parametro2){

			$(parametro1).change(function(){
			
				$(".contenedor__boton__negacion").hide();
				$(".contenedor__boton__recomendacion").hide();

			});


		}
		change__cambio__real($(".conjunto__selects__desarrollo"));

  		var calificar__botones=function(parametro1,parametro2){

			$(parametro1).click(function(){

				function validacionRegistro(parametro1){

					var sumadorErrores=0;

					$(parametro1).each(function(index) {

						if($(this).val()==0){
					     	sumadorErrores++;
						}

					});

					if (sumadorErrores==0) {
						return true;
					}else{
						return false;
					}

				}

				var validacionRegistroMostrarErrores=function(parametro1){

					var sumadorErrores=0;

					$(parametro1).each(function(index) {

						if($(this).val()==0){
					    	$(this).addClass('error');
						}else{
					    	$(this).removeClass('error');
						}
					  
					});

				}


				var validador=validacionRegistro($(".conjunto__selects__desarrollo"));

				validacionRegistroMostrarErrores($(".conjunto__selects__desarrollo"));


	
				if (validador==false) {

					alertify.set("notifier","position", "top-center");
				    alertify.notify("Obligatorio calificar todos los criterios", "error", 5, function(){});

				}else{

					function comparaciones__selectores(parametro1){

						var sumadoresDependencias=0;

						$(parametro1).each(function(index) {

							if($(this).val()=="No"){
						     	sumadoresDependencias++;
							}

						});

						if (sumadoresDependencias==0) {
							return true;
						}else{
							return false;
						}

					}

					let realizacionEnvios=comparaciones__selectores($(".conjunto__selects__desarrollo"));

					if (realizacionEnvios==false) {

						$(".recomendacion__ocultando").hide();

						$(".contenedor__boton__negacion").show();


					}else{

						$(".recomendacion__ocultando").show();

						$(".contenedor__boton__negacion").hide();


					}
					

				}


			});


		}
		calificar__botones($("#calificar__secciones__alto")); 
		calificar__botones($("#calificar__secciones__desarrollo")); 		
  		
  		/*=====  End of Calificar defaultas  ======*/
  		

  		$(".ocultos__en__funcionarios").hide();

  		$(".recomendacion__activo__funcionarios").append("<div class='col col-4' style='font-weight:bold!important;'>Regresar al director</div><div class='col col-8' style='text-align:left;'><input type='checkbox' id='regresarCheckeds' class='checkeds'></div>");


  		$(".contenedor__boton__generacion__pdf").show();

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(parametro2).hide();

			    	$(".oculto__paid__informacion").show();

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();


			    }else{

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();

					$(".oculto__paid__informacion").hide();

			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  		var checkboxFunciones__2=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(parametro2).hide();

			    	if (data[10]==1) {

						$(".oculto__calificaciones__altos").hide();
						$(".oculto__calificaciones__desarrollos").show();

					}else{

						$(".oculto__calificaciones__altos").show();
						$(".oculto__calificaciones__desarrollos").hide();

					}

					$(".oculto__paid__informacion").hide();


			    }else{

			    	$(".oculto__paid__informacion").hide();

					$(".oculto__calificaciones__altos").hide();
					$(".oculto__calificaciones__desarrollos").hide();

			    }


			});


		}
		checkboxFunciones__2($("#calificar__checkeds"),$(".ocultos__en__funcionarios"));


  		var checkboxFunciones=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			      $(parametro2).show();

				  $("#guardarRecomendacion__paid").hide();	
				  $("#observaciones__recomendaciones__recomiendas").hide();
				  $(".oculto__archivos__recomendaciones").hide();
				  $(".contenedor__boton__generacion__pdf__desarrollo").hide();			
				  $(".contenedor__boton__generacion__pdf").hide();
				  $(".contenedor__boton__generacion__pdf__alto").hide();		


		      	  $(".oculto__paid__informacion").hide();

				  $(".oculto__calificaciones__altos").hide();
				  $(".oculto__calificaciones__desarrollos").hide();


			    }else{


			      $(".oculto__paid__informacion").hide();

				  $(".oculto__calificaciones__altos").hide();
				  $(".oculto__calificaciones__desarrollos").hide();

			      $(parametro2).hide();

			      $("#guardarRecomendacion__paid").show();	
			      $("#observaciones__recomendaciones__recomiendas").show();	
			      $(".oculto__archivos__recomendaciones").show();

				if (data[10]==1) {

					$(".contenedor__boton__generacion__pdf__alto").hide();
					$(".contenedor__boton__generacion__pdf__desarrollo").show();

				}else{

					$(".contenedor__boton__generacion__pdf__alto").show();
					$(".contenedor__boton__generacion__pdf__desarrollo").hide();

				}



			   }


			});


		}
		checkboxFunciones($("#regresarCheckeds"),$(".ocultos__en__funcionarios"));

		if (data[10]==1) {

			$(".contenedor__boton__generacion__pdf__alto").remove();
			$(".contenedor__boton__generacion__pdf__desarrollo").show();

			$("#tipoPdf").val('paid__informe__desarrollo__tecnico');

			$(".eventos__vinculacion__general").hide();
			$(".interdisciplinario__vinculacion__general").hide();
			$(".individuales__vinculacion__general").hide();
			$(".generales__vinculacion__general").hide();
			$(".encuentro__activo__vinculacion__general").show();


		}else{

			$(".contenedor__boton__generacion__pdf__alto").show();
			$(".contenedor__boton__generacion__pdf__desarrollo").remove();

			$("#tipoPdf").val('paid__informe__alto__tecnico');


			$(".eventos__vinculacion__general").show();
			$(".interdisciplinario__vinculacion__general").show();
			$(".individuales__vinculacion__general").show();
			$(".generales__vinculacion__general").show();
			$(".encuentro__activo__vinculacion__general").hide();


		}


  	}else{

  		$(".oculto__archivos__recomendaciones").remove();

  		$(".ocultos__en__funcionarios").show();

  		$("#guardarRecomendacion__paid").remove();

  		$("#observaciones__recomendaciones__recomiendas").remove();

  		$(".contenedor__boton__generacion__pdf").remove();

  		$(".contenedor__boton__generacion__pdf").remove();

		$(".contenedor__boton__negacion").remove();

		$(".contenedor__boton__generacion__pdf__alto").remove();

		$(".contenedor__boton__generacion__pdf__desarrollo").show();

		$(".calificar__eliminantes__paid__analistas").remove();

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").show();
			    	$(".paid__vinculacion__general").show();
			    	$(".indicadores__vinculacion__general").show();


					if (data[10]==1) {

						$(".eventos__vinculacion__general").hide();
						$(".interdisciplinario__vinculacion__general").hide();
						$(".individuales__vinculacion__general").hide();
						$(".generales__vinculacion__general").hide();
						$(".encuentro__activo__vinculacion__general").show();

					}else{


						$(".eventos__vinculacion__general").show();
						$(".interdisciplinario__vinculacion__general").show();
						$(".individuales__vinculacion__general").show();
						$(".generales__vinculacion__general").show();
						$(".encuentro__activo__vinculacion__general").hide();

					}

			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));



  	}

	console.log(data);

  });

}


var funrion__negar__paid__recomiendas=function(tbody,table){

  $(tbody).on("click","button.negadosDirector__regresados",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos2 = new FormData();

	paqueteDeDatos2.append('tipo','seguimiento__control__cambios__negacion');
	paqueteDeDatos2.append("idOrganismo",data[9]);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos2,
		processData: false,
		cache: false, 
		success:function(response){

			let elementos=JSON.parse(response);

			let envio__informaciones=elementos['envio__informaciones'];
			let idtipo=elementos['idtipo'];

			$(".titulo__asignacion__paid").text(data[1]);

		  	$("#idOrganismoPaid").val(data[9]);

		  	if (idtipo==0) {

		  		$(".oculto__calificaciones__altos__negados").show();
		  		$(".oculto__calificaciones__desarrollos__negados").hide();

		  		for(w of envio__informaciones){

		  			$(".observacion__1").text(w.opcion1);
		  			$(".observacion__2").text(w.opcion2);
		  			$(".observacion__3").text(w.opcion3);
		  			$(".observacion__4").text(w.opcion4);
		  			$(".observacion__5").text(w.opcion5);
		  			$(".observacion__6").text(w.opcion6);
		  			$(".observacion__7").text(w.opcion7);
		  			$(".observacion__8").text(w.opcion8);
		  			$(".observacion__9").text(w.opcion9);


		  			$(".comentario__1").text(w.comentario1);
		  			$(".comentario__2").text(w.comentario2);
		  			$(".comentario__3").text(w.comentario3);
		  			$(".comentario__4").text(w.comentario4);
		  			$(".comentario__5").text(w.comentario5);
		  			$(".comentario__6").text(w.comentario6);
		  			$(".comentario__7").text(w.comentario7);
		  			$(".comentario__8").text(w.comentario8);
		  			$(".comentario__9").text(w.comentario9);

		  		}


		  	}else{

		  		$(".oculto__calificaciones__desarrollos__negados").show();
		  		$(".oculto__calificaciones__altos__negados").hide();

		  		for(w of envio__informaciones){

		  			$(".observacion__1").text(w.opcion1);
		  			$(".observacion__2").text(w.opcion2);
		  			$(".observacion__3").text(w.opcion3);
		  			$(".observacion__4").text(w.opcion4);
		  			$(".observacion__5").text(w.opcion5);
		  			$(".observacion__6").text(w.opcion6);
		  			$(".observacion__7").text(w.opcion7);

		  			$(".comentario__1").text(w.comentario1);
		  			$(".comentario__2").text(w.comentario2);
		  			$(".comentario__3").text(w.comentario3);
		  			$(".comentario__4").text(w.comentario4);
		  			$(".comentario__5").text(w.comentario5);
		  			$(".comentario__6").text(w.comentario6);
		  			$(".comentario__7").text(w.comentario7);

		  		}


		  	}


			console.log(data);

		},
		error:function(){

		}
							
	});	  


  });

}


var funrion__reasignar__paid__recomiendas__repoteria__recomiendas=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid__recomiendas__repor__final",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','seleccion__designacion__tramites__repors__finales');
  	paqueteDeDatos.append("idOrganismo",data[9]);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			var elementos=JSON.parse(response);

			var envio__informaciones=elementos['envio__informaciones'];

			for (x of envio__informaciones) {

				$(".contenedor__contenidos").append('<tr class="fila__e'+x.idAsignacion+'"><td><center>'+x.area+'</center></td><td><center>'+x.fechaHora+'</center></td><td><center>'+x.accion+'</center></td><td><center>'+x.de+'</center></td><td><center>'+x.para+'</center></td><td><center>'+x.dias+'</center></td><td><center>'+x.observacion+'</center></td></tr>');

			}


			$(".oficio__ante").append('<a href="documentos/paid/oficioAprobacion/'+x.oficio+'" target="_blank">Oficio</a>');

			$(".informe__ante").append('<a href="documentos/paid/informesTecnicos/'+x.informe+'" target="_blank">Informe</a>');



		},
		error:function(){

		}
				
	});	


  	var checkboxFunciones__3=function(parametro1,parametro2){

		$(parametro1).click(function(){
			
			var condicion = $(this).is(":checked");

			if (condicion) {

				$(".oculto__paid__informacion").show();

				if (data[11]==1) {

					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").show();

				}else{


					$(".eventos__vinculacion__general").show();
					$(".interdisciplinario__vinculacion__general").show();
					$(".individuales__vinculacion__general").show();
					$(".generales__vinculacion__general").show();
					$(".encuentro__activo__vinculacion__general").hide();

				}

			}else{

				$(".oculto__paid__informacion").hide();
				$(".paid__vinculacion__general").hide();
				$(".indicadores__vinculacion__general").hide();
				$(".eventos__vinculacion__general").hide();
				$(".interdisciplinario__vinculacion__general").hide();
				$(".individuales__vinculacion__general").hide();
				$(".generales__vinculacion__general").hide();
				$(".encuentro__activo__vinculacion__general").hide();

			}

		});


	}
	checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  });

}


var funrion__reasignar__paid__recomiendas=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__paid__recomiendas",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismoPaid").val(data[9]);

  	$("#idOrganismo__principalAsgnacion").val(data[9]);

  	$("#informeEnlacesDescargar").attr('href','documentos/paid/informesTecnicos/'+data[10]);

  		var checkboxFunciones__3=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").show();
			    	$(".paid__vinculacion__general").show();
			    	$(".indicadores__vinculacion__general").show();


					if (data[11]==1) {

						$(".eventos__vinculacion__general").hide();
						$(".interdisciplinario__vinculacion__general").hide();
						$(".individuales__vinculacion__general").hide();
						$(".generales__vinculacion__general").hide();
						$(".encuentro__activo__vinculacion__general").show();

					}else{


						$(".eventos__vinculacion__general").show();
						$(".interdisciplinario__vinculacion__general").show();
						$(".individuales__vinculacion__general").show();
						$(".generales__vinculacion__general").show();
						$(".encuentro__activo__vinculacion__general").hide();

					}

			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();


			    }


			});


		}
		checkboxFunciones__3($("#informacion__checkeds"),$(".ocultos__en__funcionarios"));


  	let idRolAd=$("#idRolAd").val();
  	let fisicamenteE=$("#fisicamenteE").val();

  	console.log(data);

	var asignacion__usuarios__re__contrarios__coordinadores=function(parametro1){


		indicador=502;
		let idUsuario=$("#idUsuarioPrincipal").val();
		let idOrganismoPaid=$("#idOrganismoPaid").val();

		$.ajax({

		  data: {indicador:indicador,idUsuario:idUsuario,idOrganismoPaid:idOrganismoPaid},
	      dataType: 'html',
	      type:'POST',
		  url:'modelosBd/validaciones/selector.modelo.php'

		}).done(function(lista_tipo__organismos){

		  $(parametro1).html(lista_tipo__organismos);


		}).fail(function(){

		  

		});

	}

	asignacion__usuarios__re__contrarios__coordinadores($("#selectorUsuarios__asignar__plani__coordinadores"));


  	if (idRolAd==3 && fisicamenteE==18) {

  		$(".planificacion__director__variables").remove();

  		$(".ocultos__en__funcionarios__paids").hide();

  		$(".recomendacion__activo__funcionarios").append("<div class='col col-4' style='font-weight:bold!important;'>Regresar</div><div class='col col-8 text-left'><input type='checkbox' id='regresarCheckeds__paids' class='checkeds'></div>");

  		$("#guardarReasignacion__paid__recomendacion").text("REGRESAR");

  		var checkboxFunciones=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			      $(parametro2).show();

				  $("#guardarRecomendacion__final__paid").hide();	
				  $("#observaciones__recomendaciones__recomiendas__final").hide();	

				  $(".file__final__paid").hide();		      

			    }else{

			      $(parametro2).hide();

			      $("#guardarRecomendacion__final__paid").show();	
			      $("#observaciones__recomendaciones__recomiendas__final").show();	

			      $(".file__final__paid").show();

			   }


			});


		}
		checkboxFunciones($("#regresarCheckeds__paids"),$(".ocultos__en__funcionarios__paids"));

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();

  		$(".oculto__archivos__recomendaciones__de__finales").remove();

  		$(".recomendaciones__directores").remove();

  		$(".ocultando__necesarios__directores").remove();

  		$("#observaciones__recomendaciones__recomiendas__final").remove();

  		$("#observaciones__recomendaciones__recomiendas__final").remove();

  		$(".contenido__asignaciones__directores__apruebas").remove();



  	}else if (idRolAd==2 && fisicamenteE==18) {

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();


		$(".contenido__asignaciones__directores").hide();
		$(".contenido__asignaciones__directores__apruebas").hide();

		$(".oculto__archivos__recomendaciones__de__finales").remove();

		$(".encuentro__activo__vinculacion__general").show();

		$(".recomendacion__analista__director__planificaciones").remove();

  		var checkboxFunciones__5=function(parametro1,parametro2){

			$(parametro1).click(function(){
			
			    var condicion = $(this).is(":checked");

			    if (condicion) {

			    	$(".oculto__paid__informacion").hide();
			    	$(".paid__vinculacion__general").hide();
			    	$(".indicadores__vinculacion__general").hide();
					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

					$(".contenido__asignaciones__directores").hide();
					$(".contenido__asignaciones__directores__apruebas").hide();

					$(parametro2).show();


			    }else{

					$(".oculto__paid__informacion").hide();
					$(".paid__vinculacion__general").hide();
					$(".indicadores__vinculacion__general").hide();
					$(".eventos__vinculacion__general").hide();
					$(".interdisciplinario__vinculacion__general").hide();
					$(".individuales__vinculacion__general").hide();
					$(".generales__vinculacion__general").hide();
					$(".encuentro__activo__vinculacion__general").hide();

					$(".contenido__asignaciones__directores").hide();
					$(".contenido__asignaciones__directores__apruebas").hide();

					$(parametro2).hide();


			    }


			});


		}
		checkboxFunciones__5($("#asignar__directorPlanificacion"),$(".contenido__asignaciones__directores"));
		checkboxFunciones__5($("#aprobar__directorPlanificacion"),$(".contenido__asignaciones__directores__apruebas"));

		$(".recomendaciones__directores").remove();

  	}else if (idRolAd==4 && fisicamenteE==3) {

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".oculto__archivos__recomendaciones__de__finales").remove();

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();


  	}else if (idRolAd==7) {

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();

  	}else{

  		$(".recomendacion__analista__director__planificaciones").remove();

  		$("#selectorUsuarios__asignar__contrarios__subsecretarias").remove();
  		$("#selectorUsuarios__asignar__plani__coordinadores").remove();
  		$("#selectorUsuarios__asignar__plani__directores").remove();
  		$("#selectorUsuarios__asignar__plani__analistas").remove();

  		$("#guardarRecomendacion__final__paid").remove();	
		$("#observaciones__recomendaciones__recomiendas__final").remove();	

		$(".file__final__paid").remove();

		$(".planificacion__director__variables").remove();

		$(".recomendaciones__directores").remove();

		$(".ocultando__necesarios__directores").remove();

  	}

	console.log(data);

  });

}

/*=====  End of Función llamar data necesarias  ======*/


/*========================================================================
=            Funcion realizar seguimientos admin seguimientos            =
========================================================================*/

var funcion__control__de__cambios=function(tbody,table){

  $(tbody).on("click","button.guardar__informacion__conjuntos__radios",function(e){

  	e.preventDefault();

  	let data=table.row($(this).parents("tr")).data();

  	let radiosValues=$('input:radio[name=radio__select__'+data[5]+']:checked').val();

  	if (radiosValues==undefined || radiosValues==null || radiosValues=="" || radiosValues==" ") {

  		alertify.set("notifier","position", "top-center");
		alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});
		

  	}else{

		var confirm= alertify.confirm('¿Está seguro de confirmar la acción?','¿Está seguro de confirmar la acción?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo

  		var paqueteDeDatos2 = new FormData();

		paqueteDeDatos2.append('tipo','seguimiento__control__cambios');
		paqueteDeDatos2.append("idSeguimientoCmabios",data[6]);
		paqueteDeDatos2.append("radiosValues",radiosValues);

		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/insertaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos2,
			processData: false,
			cache: false, 
			success:function(response){

				let elementos=JSON.parse(response);

				let mensaje=elementos['mensaje'];

				if(mensaje==1){

					alertify.set("notifier","position", "top-center");
					alertify.notify("Acción realizada correctamente", "success", 5, function(){});

			   	 	window.setTimeout(function(){ 

				       location.reload();

				    } ,3000); 


			    }

			},
			error:function(){

			}
							
		});	  		

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){
			}); 
		}); 

  	}


  });

}

/*=====  End of Funcion realizar seguimientos admin seguimientos  ======*/


/*==========================================================
=            Seguimientos__recorridos__bloqueos            =
==========================================================*/


var funcion__bloqueos__seguimientos=function(tbody,table){

  $(tbody).on("change","select.selectores__bloqueos__seguimiento",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	var paqueteDeDatos2 = new FormData();

  	let dato=$(this).val();

	paqueteDeDatos2.append('tipo','seguimiento__bloqueos');
	paqueteDeDatos2.append("idOrganismo",data[5]);
	paqueteDeDatos2.append("dato",dato);

	let attr=$(this).attr('attr');

	paqueteDeDatos2.append("attr",attr);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/insertaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos2,
		processData: false,
		cache: false, 
		success:function(response){

			let elementos=JSON.parse(response);

			let mensaje=elementos['mensaje'];

			if(mensaje==1){

				alertify.set("notifier","position", "top-center");
				alertify.notify("Acción realizada correctamente", "success", 5, function(){});


		    }

		},
		error:function(){

		}
						
	});	  		

  	console.log(data[5]);


  });

}

/*=====  End of Seguimientos__recorridos__bloqueos  ======*/

/*===================================================================
=            Funciones realaciones seguimientos levantar           =
===================================================================*/

var funcion__reasignar__seguimientos__recorridos__anexos__reportes=function(tbody,table){

  $(tbody).on("click","button.reasignar__seguimientos__recorridos__boton__anexos__reportes",function(e){

  	e.preventDefault();

  	var paqueteDeDatos = new FormData();

  	var data=table.row($(this).parents("tr")).data();

  	let variableTrimestral=$(this).attr('idTrimestres');

  	if (variableTrimestral==1) {
  		trimestreN="Primer Trimestre";
  	}else if (variableTrimestral==2){
  		trimestreN="Segundo Trimestre";
  	}else if (variableTrimestral==3){
  		trimestreN="Tercer Trimestre";
  	}else if (variableTrimestral==4){
  		trimestreN="Cuarto Trimestre";
  	}

  	if (variableTrimestral==1) {
  		trimestreN__2="primerTrimestre";
  	}else if (variableTrimestral==2){
  		trimestreN__2="segundoTrimestre";
  	}else if (variableTrimestral==3){
  		trimestreN__2="tercerTrimestre";
  	}else if (variableTrimestral==4){
  		trimestreN__2="cuartoTrimestre";
  	}

  	let selector__anios__se=$("#selector__anios__se").val();

	var paqueteDeDatos2 = new FormData();

	paqueteDeDatos2.append('tipo','seguimiento__global__interacciones');

	paqueteDeDatos2.append("idOrganismo",data[7]);
	paqueteDeDatos2.append("anio2",selector__anios__se);
	paqueteDeDatos2.append("trimestres",trimestreN__2);

    $("#idOrganismo").val(data[7]);
    $("#trimestreEvaluadorDos").val(trimestreN__2);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos2,
		processData: false,
		cache: false, 
		success:function(response){

		let elementos=JSON.parse(response);

		let envio__informaciones=elementos['envio__informaciones'];
        let envio__informaciones__documentos=elementos['envio__informaciones__documentos'];

        $(".contendor__bodys__entrantes").append('<form class="col col-12 text-center mt-4" action="modelosBd/pdf/pdf.modelo.php" method="post"><input type="hidden" name="idOrganismo" value="'+data[7]+'" /><input type="hidden" id="tipoPdf" name="tipoPdf" value="documento__seguimiento__final" /><input type="hidden" id="trimestreEvaluadorDos" name="trimestreEvaluadorDos" value="'+trimestreN__2+'"/><button class="btn btn-info"><i class="fa fa-cloud" aria-hidden="true"></i>&nbsp;&nbsp;GENERAR PDF</button></form>');
        

		for(z of envio__informaciones){

			if (z.autogestionT==null || z.autogestionT==undefined || z.autogestionT=="" || z.autogestionT==" ") {

					$(".autogestion__verificables").hide();

			}else{

					$(".autogestion__verificables").show();

			}

			if (z.indicadoresT==null || z.indicadoresT==undefined || z.indicadoresT=="" || z.indicadoresT==" ") {

					$(".indicadores__verificables").hide();

			}else{

					$(".indicadores__verificables").show();

			}

			if (z.sueldosT==null || z.sueldosT==undefined || z.sueldosT=="" || z.sueldosT==" ") {

					$(".sueldos__verificables").hide();

			}else{

					$(".sueldos__verificables").show();

			}

			if (z.honorariosT==null || z.honorariosT==undefined || z.honorariosT=="" || z.honorariosT==" ") {

					$(".honorarios__verificables").hide();

			}else{

					$(".honorarios__verificables").show();

			}


			if (z.administrativoT==null || z.administrativoT==undefined || z.administrativoT=="" || z.administrativoT==" ") {

					$(".administrativos__verificables").hide();

			}else{

					$(".administrativos__verificables").show();

			}

			if (z.mantenimientoT==null || z.mantenimientoT==undefined || z.mantenimientoT=="" || z.mantenimientoT==" ") {

					$(".mantenimiento__verificables").hide();

			}else{

					$(".mantenimiento__verificables").show();

			}


			if (z.mantenimientoTT==null || z.mantenimientoTT==undefined || z.mantenimientoTT=="" || z.mantenimientoTT==" ") {

					$(".mantenimientoTEC__verificables").hide();

			}else{

					$(".mantenimientoTEC__verificables").show();

			}


			if (z.capacitacionT==null || z.capacitacionT==undefined || z.capacitacionT=="" || z.capacitacionT==" ") {

					$(".capacitacion__verificables").hide();

			}else{

					$(".capacitacion__verificables").show();

			}

			if (z.capacitacionTT==null || z.capacitacionTT==undefined || z.capacitacionTT=="" || z.capacitacionTT==" ") {

					$(".capacitacionTecnicos__verificables").hide();

			}else{

					$(".capacitacionTecnicos__verificables").show();

			}

			if (z.competenciaT==null || z.competenciaT==undefined || z.competenciaT=="" || z.competenciaT==" ") {

					$(".competencias__verificables").hide();

			}else{

					$(".competencias__verificables").show();

			}

			if (z.competenciaFor==null || z.competenciaFor==undefined || z.competenciaFor=="" || z.competenciaFor==" ") {

					$(".competenciasForma__verificables").hide();

			}else{

					$(".competenciasForma__verificables").show();

			}


			if (z.altoT==null || z.altoT==undefined || z.altoT=="" || z.altoT==" ") {

					$(".competenciasAlto__verificables").hide();

			}else{

					$(".competenciasAlto__verificables").show();

			}

			if (z.recreacionT==null || z.recreacionT==undefined || z.recreacionT=="" || z.recreacionT==" ") {

					$(".recreativo__verificables").hide();

			}else{

					$(".recreativo__verificables").show();

			}

			if (z.recreativosTT==null || z.recreativosTT==undefined || z.recreativosTT=="" || z.recreativosTT==" ") {

					$(".recreativoTecnicos__verificables").hide();

			}else{

					$(".recreativoTecnicos__verificables").show();
                    $(".recreativo__verificables").show();

			}


			if (z.implementacionT==null || z.implementacionT==undefined || z.implementacionT=="" || z.implementacionT==" ") {

					$(".implementacion__verificables").hide();

			}else{

					$(".implementacion__verificables").show();

			}


		}							

		$(".texto__evidenciales").text(data[1]+" ("+trimestreN+")");

	  	
		var agregarDatatablets=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,false,[false],[false],false);

		});

		}

		agregarDatatablets($("#autogestionPoas__in__2"),$(".seguimiento__autogestiones__2"),"seguimiento__autogestiones__2",variableTrimestral,selector__anios__se); 
		agregarDatatablets($("#mantenimientoTec__in__2"),$(".seguimiento__mantenimientosTec__2"),"seguimiento__mantenimientosTec__2",variableTrimestral,selector__anios__se); 	
		agregarDatatablets($("#capacitacionTec__in__2"),$(".seguimiento__capacitacionTecni__2"),"seguimiento__capacitacionTecni__2",variableTrimestral,selector__anios__se);

		agregarDatatablets($("#competenciaFormativa__in__2"),$(".seguimiento__competenciaFor__2"),"seguimiento__competenciaFor__2",variableTrimestral,selector__anios__se); 

		agregarDatatablets($("#competenciaAlto__in__2"),$(".seguimiento__competenciaAlto__2"),"seguimiento__competenciaAlto__2",variableTrimestral,selector__anios__se); 

		agregarDatatablets($("#recreativoTec__in__2"),$(".seguimiento__recreativoTec__2"),"seguimiento__recreativoTec__2",variableTrimestral,selector__anios__se); 


		var agregarDatatablets__indicadores=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],objetos([5],["enlace"],['documento'],["documentos/seguimiento/indicadoresDocumento/"],["documento"]),false,[false],[false],false);

		});

		}

		agregarDatatablets__indicadores($("#indicadores__in__2"),$(".seguimiento__indicadores__2"),"seguimiento__indicadores__2",variableTrimestral,selector__anios__se); 



        var agregarDatatablets__competencia__altos__formativos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

        $(parametro1).click(function (e){

            $(".contenedor__sueldos__salarios").html(" ");

            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2__formativos');

            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);

            $.ajax({

                type:"POST",
                url:"modelosBd/inserta/seleccionaAcciones.md.php",
                contentType: false,
                data:paqueteDeDatos,
                processData: false,
                cache: false, 
                success:function(response){

                $.getScript("layout/scripts/js/validacionBasica.js",function(){

                    let elementos=JSON.parse(response);

                    let indicadorInformacion3=elementos['indicadorInformacion3'];


                    if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

                        $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Documento</th></tr></table>");

                        for(z of indicadorInformacion3){

                            $(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="documentos/seguimiento/otrosCompentencia_formativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

                        }                           

                    }


                }); 

                },
                error:function(){

                }
                        
            });     

        });

        }

        agregarDatatablets__competencia__altos__formativos($("#competenciaFormativa__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se); 



        var agregarDatatablets__competencia__altos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

        $(parametro1).click(function (e){

            $(".contenedor__sueldos__salarios").html(" ");

            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2');

            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);

            $.ajax({

                type:"POST",
                url:"modelosBd/inserta/seleccionaAcciones.md.php",
                contentType: false,
                data:paqueteDeDatos,
                processData: false,
                cache: false, 
                success:function(response){

                $.getScript("layout/scripts/js/validacionBasica.js",function(){

                    let elementos=JSON.parse(response);

                    let indicadorInformacion3=elementos['indicadorInformacion3'];


                    if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

                        $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Documento</th></tr></table>");

                        for(z of indicadorInformacion3){

                            $(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="documentos/seguimiento/otrosCompentencia_alto/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

                        }                           

                    }


                }); 

                },
                error:function(){

                }
                        
            });     

        });

        }

        agregarDatatablets__competencia__altos($("#competenciaAlto__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se); 


		var agregarDatatablets__sueldos__salarios=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','sueldos__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);


					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Planilla</th><th>Rol</th><th>Comprobante</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion3){

							$(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="documentos/seguimiento/planilla/'+z.planilla+'" target="_blank">'+z.planilla+'</a></td><td><a href="documentos/seguimiento/rol/'+z.rol+'" target="_blank">'+z.rol+'</a></td><td><a href="documentos/seguimiento/comprobante/'+z.comprobante+'" target="_blank">'+z.comprobante+'</a></td><td>'+z.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__sueldos__salarios($("#sueldos__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se); 

		var agregarDatatablets__honorarios__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','honorarios__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="documentos/seguimiento/facturasHonorarios/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="documentos/seguimiento/otrosHonorarios/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__honorarios__seguimientos($("#honorarios__in__2"),$(".seguimiento__honorarios__2"),"seguimiento__honorarios__2",variableTrimestral,selector__anios__se); 


		var agregarDatatablets__administrativos__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','administrativo__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombreItem+'</td><td><a href="documentos/seguimiento/facturas__administrativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombreItem+'</td><td><a href="documentos/seguimiento/otrosHabilitantes__administrativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__administrativos__seguimientos($("#administrativo__in__2"),$(".seguimiento__administrativas__2"),"seguimiento__administrativas__2",variableTrimestral,selector__anios__se); 

		var agregarDatatablets__mantenimiento__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','mantenimiento__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="documentos/seguimiento/facturas__administrativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="documentos/seguimiento/otrosHabilitantes__administrativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__mantenimiento__seguimientos($("#mantenimiento__in__2"),$(".seguimiento__mantenimientos__2"),"seguimiento__mantenimientos__2",variableTrimestral,selector__anios__se); 


		var agregarDatatablets__capacitacion__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','capacitacion__seguimiento__tablas__ms__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="documentos/seguimiento/facturasCapacitacion/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="documentos/seguimiento/otrosCapacitacion/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__capacitacion__seguimientos($("#capacitacion__in__2"),$(".seguimiento__capacitacion__2"),"seguimiento__capacitacion__2",variableTrimestral,selector__anios__se); 


		var agregarDatatablets__competencia__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','competencias__competencias__implementacion__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombreItem+'</td><td><a href="documentos/seguimiento/facturasCompetencias/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombreItem+'</td><td><a href="documentos/seguimiento/otrosCompetencia/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__competencia__seguimientos($("#competencia__in__2"),$(".seguimiento__competencia__2"),"seguimiento__competencia__2",variableTrimestral,selector__anios__se); 


	var agregarDatatablets__recreativo__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recreativos__seguimiento__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="documentos/seguimiento/facturasRecreativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="documentos/seguimiento/otrosRecreativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__recreativo__seguimientos($("#recreativo__in__2"),$(".seguimiento__recreativo__2"),"seguimiento__recreativo__2",variableTrimestral,selector__anios__se); 


	var agregarDatatablets__implementacion__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','competencia__implementacion__tablas__2');

			paqueteDeDatos.append("idOrganismo",data[7]);
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",trimestreN__2);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/seleccionaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatablets($(parametro2),parametro3,[data[7],parametro4,parametro5],false,false,[false],[false],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="documentos/seguimiento/facturasImplementacion/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');

						}							

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="documentos/seguimiento/otrosInstalaciones/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');

						}							

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

		agregarDatatablets__implementacion__seguimientos($("#implementacion__in__2"),$(".seguimiento__implementacion__2"),"seguimiento__implementacion__2",variableTrimestral,selector__anios__se); 



		},
		error:function(){

		}
					
	});	  	
  	
  });

}

/*=====  End of Funciones realaciones seguimientos levantar  ======*/


/*===============================================================
=             formatos relacionales infraestructuras            =
===============================================================*/

var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__ins=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados__insta",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	console.log(data);

	if ($("#idRolAd").val()==3) {

		$(".observacionesReasignaciones").show();

	}else{

		$(".observacionesReasignaciones").show();

	} 	


    if ($("#idRolAd").val()!=3) {

        $(".fila__regresar__a__informe__recomendacion").remove();

    }


    if ($("#zonalEstruct__na").val()==1) {

        $(".fila__regresar__a").remove();

    }

  	$("#idOrganismo").val(data[16]);
  	$("#periodo").val(data[5]);
  	$("#idUSeguimientos").val($("#idUsuarioC").val());
  	$("#tipoAct").val(data[18]);

  	if ($("#idRolAd").val()==4 && $("#fisicamenteEstructura__na").val()==1) {

  		$(".fila__reasignar").show();
  		$(".fila__regresar__a").remove();

  	}else if($("#idRolAd").val()==2 || ($("#idRolAd").val()==4 && $("#fisicamenteEstructura__na").val()>1)){

  		$(".fila__regresar__a").show();
  		$(".fila__reasignar").show();
  		$(".oculto__file__recomendaciones").hide();

  	}else if($("#idRolAd").val()==3){

  		$(".fila__regresar__a").show();
  		$(".fila__reasignar").remove();

  	}

  });

}

/*=====  End of  formatos relacionales infraestructuras  ======*/


/*=============================================
=            Recomendar formativos            =
=============================================*/

var funcion__reasignar__seguimientos__unidos__altos__recomendados__formaRe=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos__f__r');

  	paqueteDeDatos.append("idOrganismo",data[4]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__2",data[3]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let envio__tecnicos=elementos['envio__tecnicos'];
		    let zonal__eu=elementos['zonal__eu'];
		    let documentos__tecnicos=elementos['documentos__tecnicos'];

		    $("#organismoOculto__modal").val(data[4]);

		    if($("#idRolAd").val()==7){

		    	$(".direccion__seguimientos__ocultos").show();

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();


		    }else if (zonal__eu==1 || zonal__eu=="1") {

		    	$("#selects__superiores__regresar").show();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();

		    	$("#selects__superiores__regresar__coors__acFisicas").remove();

		    }else{

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores__regresar__coors").show();

		    	$("#selects__superiores").remove();
		    	$("#selects__superiores__subsess").show();

		    	$("#selects__superiores__regresar").remove();

		    }

		    for (w of envio__tecnicos) {

		    	$(".funcionario__recomendaste").text(w.nombreCompleto);
		    	$(".fecha__recomendaste").text(w.fecha);

		    }

		    for (z of documentos__tecnicos) {

		    	if (data[3]=="FORMATIVO") {
		    		$("#informe__recomendados").attr('href','documentos/seguimiento/informe__formativos/'+z.archivo);
		    	}else{
		    		$("#informe__recomendados").attr('href','documentos/seguimiento/informe__recreativos/'+z.archivo);
		    	}

		    	

		    	$(".observaciones__recomendaste").text(z.observacion);
		    	$("#nombreDocumento").val(z.archivo);
		    	$(".recomendaciones__recomendaste").text(z.recomendacion);

		    }

		    if ($("#idRolAd").val()==7) {

		    	$(".oculto__subsess__deseados").attr('style','visibility: hidden!important;');

		    }

		    $("#periodo").val(data[2]);

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}

/*=====  End of Recomendar formativos  ======*/


/*=============================================================
=            Recomendados isntalaciones deportivas            =
=============================================================*/

var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones__reales=function(tbody,table){

 $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados__instalaciones",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();


    var paqueteDeDatos = new FormData();

    paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

    paqueteDeDatos.append("idOrganismo",data[4]);

    paqueteDeDatos.append("periodo",data[2]);

    let idUsuarioC=$("#idUsuarioC").val();

    paqueteDeDatos.append("idUsuarioC",idUsuarioC);

    console.log(data);

    $.ajax({

        type:"POST",
        url:"modelosBd/inserta/seleccionaAcciones.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        success:function(response){

        $.getScript("layout/scripts/js/validacionBasica.js",function(){


            let elementos=JSON.parse(response);

            let envio__tecnicos__seguimientos__infraestructuras=elementos['envio__tecnicos__seguimientos__infraestructuras'];           

            $(".ancho__total__input__selects selects__superiores superior__sin option[value='496']").remove();

            $("#evaluador__movimientos").val("si");

            for (z of envio__tecnicos__seguimientos__infraestructuras) {

                $(".funcionario__recomendaste").text(z.nombreCompleto);
                $(".fecha__recomendaste").text(z.fecha);

                $("#documentos__tecnicos__t__infras").attr('href','documentos/seguimiento/informesInstalaciones/'+z.documentoInfras);

                $("#nombre__archivo").val(z.documentoInfras);

            }

            if ($("#idRolAd").val()==4) {

                $(".recomendar__final__ins").show();
                $(".recomendar__ins__ins").remove();

            }else if($("#idRolAd").val()==2){

                $(".recomendar__ins__ins").show();
                $(".recomendar__final__ins").remove();

            }


            $("#organismoOculto__modal").val(data[4]);
            $("#periodo").val(data[2]);


        }); 

        },
        error:function(){

        }
                
    });     

  });

}



var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe__instalaciones=function(tbody,table){

 $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados__instalaciones",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[4]);

  	paqueteDeDatos.append("periodo",data[2]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);


    if ($("#idRolAd").val()==4) {

        $(".recomendar__final__ins").show();
        $(".recomendar__ins__ins").remove();

        $(".eliminados__al__de").remove();

         $(".acciones__recomendaciones__finales").hide();

    }


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){


			let elementos=JSON.parse(response);

		    let envio__tecnicos__seguimientos__infraestructuras=elementos['envio__tecnicos__seguimientos__infraestructuras'];			

            let estadoIR__estados=elementos['estadoIR__estados'];
            let estadoINR__estados=elementos['estadoINR__estados'];

            let bandera__instalaciones1=false;
            let bandera__infraestructuras1=false;

 

		    // for (z of envio__tecnicos__seguimientos__infraestructuras) {

		    // 	$(".funcionario__recomendaste").text(z.nombreCompleto);
		    // 	$(".fecha__recomendaste").text(z.fecha);
      //           if ($("#fisicamenteEstructura__na").val()==6) {

      //               $("#documentos__tecnicos__t__infras").attr('href','documentos/seguimiento/informesInstalaciones/'+z.documentoInfras);

      //           }else{

      //               $("#documentos__tecnicos__t__infras").attr('href','documentos/seguimiento/informesInfraestructuras/'+z.documentoInfras);

      //           }

		    // 	$("#nombre__archivo").val(z.documentoInfras);

		    // }

		    if ($("#idRolAd").val()==4) {

		  		$(".recomendar__final__ins").show();
		  		$(".recomendar__ins__ins").remove();

             for (z of envio__tecnicos__seguimientos__infraestructuras) {

                if (estadoIR__estados=="N/A") {

                     $("#documentos__tecnicos__t__infras").text('NO CORRESPONDE');

                     bandera__infraestructuras1=true;

                }else if($("#idUsuarioC").val()==estadoIR__estados){

                    $("#documentos__tecnicos__t__infras").attr('href','documentos/seguimiento/informesInfraestructuras/'+z.documentoInfras);

                     $("#documentos__tecnicos__t__infras").text("INFORME INFRAESTRUCTURA");

                    bandera__infraestructuras1=true;

                }else{

                     $("#documentos__tecnicos__t__infras").text("NO PRESENTA");

                      bandera__infraestructuras1=false;

                }


               if (estadoINR__estados=="N/A") {

                     $("#documentos__tecnicos__t__infras__instalaciones").text('NO CORRESPONDE');

                      bandera__instalaciones1=true;

                }else if($("#idUsuarioC").val()==estadoINR__estados){


                     $("#documentos__tecnicos__t__infras__instalaciones").attr('href','documentos/seguimiento/informesInstalaciones/'+z.documentoInstalaciones);

                      $("#documentos__tecnicos__t__infras__instalaciones").text('INFORME INSTALACIONES');

                      bandera__instalaciones1=true;


                }else{

                     $("#documentos__tecnicos__t__infras__instalaciones").text("NO PRESENTA");

                      bandera__infraestructuras1=false;


                }

            }

                if (bandera__infraestructuras1==false) {

                    $(".acciones__recomendaciones__finales").remove();

                }else{
                     $(".acciones__recomendaciones__finales").show();
                }

                $(".eliminados__al__de").remove();

		  	}else if($("#idRolAd").val()==2){


                if ($("#fisicamenteE").val()==6) {

                     for (z of envio__tecnicos__seguimientos__infraestructuras) {

                        $("#documentos__tecnicos__t__infras__instalaciones").attr('href','documentos/seguimiento/informesInstalaciones/'+z.documentoInstalaciones);

                        $("#documentos__tecnicos__t__infras__instalaciones").text('INFORME INSTALACIONES');

 
                    }


                    $(".insfraestructuras__re").remove(); 

                }else{

                    $(".instalaciones__re").remove();

                  
                   
                   for (z of envio__tecnicos__seguimientos__infraestructuras) {


                        $("#documentos__tecnicos__t__infras").attr('href','documentos/seguimiento/informesInfraestructuras/'+z.documentoInfras);

                        $("#documentos__tecnicos__t__infras").text("INFORME INFRAESTRUCTURA");

                   }


                }

                 $(".eliminados__al__de").remove();

                $(".recomendar__ins__ins").show();

		  	}


			$("#organismoOculto__modal").val(data[4]);
			$("#periodo").val(data[2]);


		});	

		},
		error:function(){

		}
				
	});	  	

  });

}

/*=====  End of Recomendados isntalaciones deportivas  ======*/


/*==================================================================
=            Funcion reasignar seguimientos segimientos            =
==================================================================*/

var funcion__reasignar__seguimientos__unidos__seguimientos__seguimientos__recomendados__formaRe=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosSeguimientos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[4]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__dos",data[3]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let documentos__tecnico__2__seguimientos=elementos['documentos__tecnico__2__seguimientos'];
		    let envio__tecnicos__seguimientos=elementos['envio__tecnicos__seguimientos'];
		    let varaible__culminados=elementos['varaible__culminados'];
		    let documentos__tecnicos__2=elementos['documentos__tecnicos__2'];
		    let var_n_se_in=elementos['var_n_se_in'];
		    let envio__tecnicos__seguimientos__infraestructuras=elementos['envio__tecnicos__seguimientos__infraestructuras'];

		    let var_n_se_in__45=elementos['var_n_se_in__45'];

		    $("#organismoOculto__modal").val(data[4]);

		    $("#periodo").val(data[2]);

		    for (z of envio__tecnicos__seguimientos) {

		    	$(".funcionario__recomendaste").text(z.nombreCompleto);
		    	$(".fecha__recomendaste").text(z.fecha);

		    }

		    for (z of documentos__tecnico__2__seguimientos) {

		    	$("#informe__recomendados").attr('href','documentos/seguimiento/informesSeguimientos/'+z.documentos);

		    	$(".observaciones__recomendaste").text(z.observaciones);
		    	$("#nombreDocumento").val(z.documentos);
		    	$(".recomendaciones__recomendaste").text(z.recomendaciones);

		    }


		    if (var_n_se_in==1 && envio__tecnicos__seguimientos__infraestructuras!="" && envio__tecnicos__seguimientos__infraestructuras!=undefined && envio__tecnicos__seguimientos__infraestructuras!=" " && envio__tecnicos__seguimientos__infraestructuras!=null && var_n_se_in__45==1) {

		    	for (z of envio__tecnicos__seguimientos__infraestructuras) {

			    	$(".boton__pdfs__infraestructuras").show();

			    	$("#documentos__tecnicos__i").attr('href','documentos/seguimiento/informesInfraestructuras/'+z.documentoInfras);

		    	}

		    }



			if (varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null) {

				for (zC of documentos__tecnicos__2) {

					if (data[2]=="FORMATIVO") {

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informe__formativos/'+zC.archivo);

					}else if (data[2]=="RECREACION") {

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informe__recreativos/'+zC.archivo);

					}else{

						$("#documentos__tecnicos__t").attr('href','documentos/seguimiento/informes__altos/'+zC.archivo);

					}

				}

				$(".boton__pdfs__tecnicas").show();


			}else{

				$(".oculto__subsess__deseados").hide();

				$(".clases__puedes__recomendares").text("FALTA EL INFORME DEL ÁREA TÉCNICA");


			}

		    if (var_n_se_in==1 && (envio__tecnicos__seguimientos__infraestructuras=="" || envio__tecnicos__seguimientos__infraestructuras==undefined && envio__tecnicos__seguimientos__infraestructuras==" " || envio__tecnicos__seguimientos__infraestructuras==null || var_n_se_in__45==0)) {

				$(".clases__puedes__recomendares").text("FALTA EL INFORME DEL ÁREA DE INFRAESTRUCTURA");

		    }

		    if (var_n_se_in==1 && envio__tecnicos__seguimientos__infraestructuras!="" && envio__tecnicos__seguimientos__infraestructuras!=undefined && envio__tecnicos__seguimientos__infraestructuras!=" " && envio__tecnicos__seguimientos__infraestructuras!=null && varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null && var_n_se_in__45==1) {

		    	$("#enviar__orgnaismosDeportivos").show();

		    }else if(var_n_se_in==0 && varaible__culminados!="" && varaible__culminados!=" " && varaible__culminados!=undefined && varaible__culminados!=null){

		    	$("#enviar__orgnaismosDeportivos").show();                        

		    }



		});	

		},
		error:function(){

		}
				
	});	  	

  });

}

/*=====  End of Funcion reasignar seguimientos segimientos  ======*/


/*=============================
=            Función recomendar altos            =
=============================*/

var funcion__reasignar__seguimientos__unidos__altos__recomendados=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos__recomendados",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[3]);

  	paqueteDeDatos.append("periodo",data[2]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	let idUsuarioC=$("#idUsuarioC").val();

  	paqueteDeDatos.append("idUsuarioC",idUsuarioC);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			let elementos=JSON.parse(response);

		    let envio__tecnicos=elementos['envio__tecnicos'];
		    let zonal__eu=elementos['zonal__eu'];
		    let documentos__tecnicos=elementos['documentos__tecnicos'];

		    $("#organismoOculto__modal").val(data[3]);

			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}


		    if($("#idRolAd").val()==7){

		    	$(".direccion__seguimientos__ocultos").show();

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();


		    }else if (zonal__eu==1 || zonal__eu=="1") {

		    	$("#selects__superiores__regresar").show();
		    	$("#selects__superiores").show();

		    	$("#selects__superiores__regresar__coors").remove();
		    	$("#selects__superiores__subsess").remove();

		    }else{

		    	$("#selects__superiores__regresar").remove();
		    	$("#selects__superiores__regresar__coors").show();

		    	$("#selects__superiores").remove();
		    	$("#selects__superiores__subsess").show();

		    }

		    for (w of envio__tecnicos) {

		    	$(".funcionario__recomendaste").text(w.nombreCompleto);
		    	$(".fecha__recomendaste").text(w.fecha);

		    }

		    for (z of documentos__tecnicos) {

		    	$("#informe__recomendados").attr('href','documentos/seguimiento/informes__altos/'+z.archivo);

		    	$(".observaciones__recomendaste").text(z.observacion);
		    	$("#nombreDocumento").val(z.archivo);
		    	$(".recomendaciones__recomendaste").text(z.recomendacion);

		    }

		    if ($("#idRolAd").val()==7) {

		    	$(".oculto__subsess__deseados").attr('style','visibility: hidden!important;');

		    }

		    $("#periodo").val(data[2]);

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Función recomendar altos  ======*/


/*==============================================================
=            Funcion seguimientos actividad fisicas            =
==============================================================*/


var funcion__reasignar__seguimientos__unidos__actividad__fisica=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosActividad",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var indicadores__altos=elementos['indicadores__altos'];

		    var autogestionesV=elementos['autogestionesV'];

		     var medallas__altos__formativos=elementos['medallas__altos__formativos'];


		    $(".presupuesto__autogestion__asignado__pais__altos").text(autogestionesV);
		    $("#presupuesto__autogestion__asignado__pais__altos").val(autogestionesV);

			/*==================================================
			=            Registrar datos necesarios            =
			==================================================*/
			

			$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center'>SUBSECRETARIA DE DESARROLLO DE LA ACTIVIDAD FISICA</div><input type='hidden' id='subsecretarias__escritas' name='subsecretarias__escritas' value='SUBSECRETARIA DE DESARROLLO DE LA ACTIVIDAD FISICA'/>");

			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}			


			if (data[18]=="FORMATIVO") {

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE DEPORTE FORMATIVO Y EDUCACION FISICA</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE DEPORTE FORMATIVO Y EDUCACION FISICA'/>");

				$(".tabla__formativo__1").show();
				$(".tabla__recreativo__1").remove();


				$(".foramtivo__enlaces__medalleros").show();
				$(".recreativo__enlaces__medalleros").remove();

				$("#tipoAct").val("Formativo");

				$("#rotulo__recomendado").val("formativo");

			}else{

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE RECREACION</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE RECREACION'/>");

				$(".tabla__formativo__1").remove();
				$(".tabla__recreativo__1").show();

				$(".foramtivo__enlaces__medalleros").remove();
				$(".recreativo__enlaces__medalleros").show();

				$(".ocultos__paid__documentos").remove();

				$("#tipoAct").val("Recreativo");

				$("#rotulo__recomendado").val("recreativo");

			}


			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/

			
			if (parseInt(data[8], 10)<10) {

				$(".numerico__dinamicas").text("0"+data[8]);

				$("#numerico__dinamicas__inputs").val("0"+data[8]);

			}else{

				$(".numerico__dinamicas").text(data[8]);

				$("#numerico__dinamicas__inputs").val(data[8]);

			}


			/*=====  End of Registrar datos necesarios  ======*/


			/*=====================================================
			=            Asignar datos del datatablets            =
			=====================================================*/

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			if (data[5]=="primerTrimestre") {

				$(".trimestre__evaluados__al").text("I TRIMESTRE");
				$("#trimestre__evaluados__al").val("I TRIMESTRE");

			}else if (data[5]=="segundoTrimestre") {


				$(".trimestre__evaluados__al").text("II TRIMESTRE");
				$("#trimestre__evaluados__al").val("II TRIMESTRE");

			}else if (data[5]=="tercerTrimestre") {

				$(".trimestre__evaluados__al").text("III TRIMESTRE");
				$("#trimestre__evaluados__al").val("III TRIMESTRE");

			}else if (data[5]=="cuartoTrimestre") {

				$(".trimestre__evaluados__al").text("IV TRIMESTRE");
				$("#trimestre__evaluados__al").val("IV TRIMESTRE");
			}

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$("#periodo").val(data[5]);

			$(".nombre__organizacion__deportivas").text(data[1]);

			$("#nombre__organizacion__deportivas").val(data[1]);

			$(".ruc__organizacion__deportivas").text(data[0]);

			$("#ruc__organizacion__deportivas").val(data[0]);

			$(".presidente__organizacion__deportivas").text(data[10]);

			$("#presidente__organizacion__deportivas").val(data[10]);

			$(".correo__organizacion__deportivas").text(data[11]);

			$("#correo__organizacion__deportivas").val(data[11]);

			$(".direccion__organizacion__deportivas").text(data[12]);

			$("#direccion__organizacion__deportivas").val(data[12]);

			$(".provincia__organizacion__deportivas").text(data[2]);

			$("#provincia__organizacion__deportivas").val(data[2]);

			$(".canton__organizacion__deportivas").text(data[3]);

			$("#canton__organizacion__deportivas").val(data[3]);

			$(".parroquia__organizacion__deportivas").text(data[4]);

			$("#parroquia__organizacion__deportivas").val(data[4]);

			$(".barrio__organizacion__deportivas").text(data[13]);

			$("#barrio__organizacion__deportivas").val(data[13]);

			$(".presupuesto__asignado__pais__altos").text(poa__invers);

			$("#presupuesto__asignado__pais__altos").val(poa__invers);

			$("#idUSeguimientos").val($("#idUsuarioC").val());


			if ($("#idRolAd").val()=="7" || $("#idRolAd").val()==7) {

				$(".fila__reasignar").show();
				$(".fila__regresar__a").hide();

			}else if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2 || $("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".fila__reasignar").show();
				$(".fila__regresar__a").show();

				$(".reasignar__solo").removeClass('col');

				$(".reasignar__solo").removeClass('col-2');

				$(".reasignar__solo").addClass('col');

				$(".reasignar__solo").addClass('col-6');

			}else{

				$(".fila__reasignar").hide();
				$(".fila__regresar__a").show();

			}

			if ($("#idRolAd").val()=="3" || $("#idRolAd").val()==3) {

				$(".ocultos__en__altos").show();

			}else{

				$(".ocultos__en__altos").remove();

			}

			/*=====  End of Asignar datos del datatablets  ======*/



			if (medallas__altos__formativos!=undefined && medallas__altos__formativos!=null && medallas__altos__formativos!="" && medallas__altos__formativos!=" ") {

				for (w of medallas__altos__formativos) {

					if (data[18]=="FORMATIVO") {

						$("#oro__alto").val(w.oro);
						$("#plata__alto").val(w.plata);
						$("#bronce__alto").val(w.bronce);

					}else{

						$("#hombres__alto").val(w.oro);
						$("#mujeres__alto").val(w.plata);

					}

				}

			}else{

				$("#oro__alto").val(0);
				$("#plata__alto").val(0);
				$("#bronce__alto").val(0);

				$("#hombres__alto").val(0);
				$("#mujeres__alto").val(0);
				$("#personas__con__discapacidad__alto").val(0);				

			}			

			/*=========================================================
			=            Construción tablas de indicadores            =
			=========================================================*/

			let porcentajesCumplimientos=0;

			let div="";

			let sumaProgramado=0;
			let sumaAlcanzado=0;

			let porcentajeFinalAl=0;

			for (w of indicadores__altos) {

				sumaProgramado=parseFloat(sumaProgramado) + parseFloat(w.totalProgramado);
				sumaAlcanzado=parseFloat(sumaAlcanzado) + parseFloat(w.totalEjecutado);

				porcentajesCumplimientos=(parseFloat(w.totalEjecutado) / parseFloat(w.totalProgramado))*100;

				if (parseFloat(porcentajesCumplimientos).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)>=70 && parseFloat(porcentajesCumplimientos).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}



				$(".cuerpo__items__alto__rendimientos").append('<tr><td>'+w.nombreActividades+'</td><td>'+w.nombreIndicador+'</td><td>'+w.totalProgramado+'</td><td>'+w.totalEjecutado+'</td><td><center><div style="display:flex!important;">'+div+" "+parseFloat(porcentajesCumplimientos).toFixed(2)+'%</div></center></td></tr>');

			}

			porcentajeFinalAl=(parseFloat(sumaAlcanzado)/parseFloat(sumaProgramado))*100;

			$(".footer__altos__indicadores").append('<tr><th colspan="2"><center>Total</center></th><th><center>'+parseFloat(sumaProgramado).toFixed(2)+'</center></th><th><center>'+parseFloat(sumaAlcanzado).toFixed(2)+'</center></th><th><center>'+parseFloat(porcentajeFinalAl).toFixed(2)+' %</center></th></tr>');
			
			/*=====  End of Construción tablas de indicadores  ======*/
			

			if($("#idRolAd").val()=="7" || $("#idRolAd").val()==7){

				$(".superior__sin").remove();
				$(".superior__con").show();

			}else{

				$(".superior__sin").show();
				$(".superior__con").remove();

			}

			if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".regresar__superior__prin").remove();
				$(".regresar__superior__con").show();

			}else{

				$(".regresar__superior__prin").show();
				$(".regresar__superior__con").remove();

			}

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Funcion seguimientos actividad fisicas  ======*/


/*====================================================
=            Funcion de seguimiento altos            =
====================================================*/

var funcion__reasignar__seguimientos__unidos__altos=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientosAltos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){

			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var indicadores__altos=elementos['indicadores__altos'];

		    var medallas__altos__sumas=elementos['medallas__altos__sumas'];

			/*==================================================
			=            Registrar datos necesarios            =
			==================================================*/
			
			$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center'>SUBSECRETARÍA DE ALTO RENDIMIENTO</div><input type='hidden' id='subsecretarias__escritas' name='subsecretarias__escritas' value='SUBSECRETARÍA DE ALTO RENDIMIENTO'/>");


			if ($("#fisicamenteE").val()=="12" || $("#fisicamenteE").val()=="24") {

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCIÓN DE DE ALTO RENDIMIENTO</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCIÓN DE DE ALTO RENDIMIENTO'/>");

			}else{

				$(".titulo__alto__rendimientos").append("<div class='col col-12 text-center mt-2'>DIRECCION DE DEPORTE PARA PERSONAS CON DISCAPACIDAD</div><input type='hidden' id='direccion__escritas' name='direccion__escritas' value='DIRECCION DE DEPORTE PARA PERSONAS CON DISCAPACIDAD'/>");

			}



			if ($("#idRolAd").val()==3) {

				$(".observacionesReasignaciones").hide();

			}else{

				$(".observacionesReasignaciones").show();

			}			

			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/

			
			if (parseInt(data[8], 10)<10) {

				$(".numerico__dinamicas").text("0"+data[8]);

				$("#numerico__dinamicas__inputs").val("0"+data[8]);

			}else{

				$(".numerico__dinamicas").text(data[8]);

				$("#numerico__dinamicas__inputs").val(data[8]);

			}


			/*=====  End of Registrar datos necesarios  ======*/


			/*=====================================================
			=            Asignar datos del datatablets            =
			=====================================================*/

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			if (data[5]=="primerTrimestre") {

				$(".trimestre__evaluados__al").text("I TRIMESTRE");
				$("#trimestre__evaluados__al").val("I TRIMESTRE");

			}else if (data[5]=="segundoTrimestre") {


				$(".trimestre__evaluados__al").text("II TRIMESTRE");
				$("#trimestre__evaluados__al").val("II TRIMESTRE");

			}else if (data[5]=="tercerTrimestre") {

				$(".trimestre__evaluados__al").text("III TRIMESTRE");
				$("#trimestre__evaluados__al").val("III TRIMESTRE");

			}else if (data[5]=="cuartoTrimestre") {

				$(".trimestre__evaluados__al").text("IV TRIMESTRE");
				$("#trimestre__evaluados__al").val("IV TRIMESTRE");
			}

			$(".periodo__evaluados__anuales").text(data[9]);

			$("#periodo__evaluados__anuales").val(data[9]);

			$("#organismoOculto__modal").val(data[16]);

			$("#idOrganismo").val(data[16]);

			$("#periodo").val(data[5]);

			$(".nombre__organizacion__deportivas").text(data[1]);

			$("#nombre__organizacion__deportivas").val(data[1]);

			$(".ruc__organizacion__deportivas").text(data[0]);

			$("#ruc__organizacion__deportivas").val(data[0]);

			$(".presidente__organizacion__deportivas").text(data[10]);

			$("#presidente__organizacion__deportivas").val(data[10]);

			$(".correo__organizacion__deportivas").text(data[11]);

			$("#correo__organizacion__deportivas").val(data[11]);

			$(".direccion__organizacion__deportivas").text(data[12]);

			$("#direccion__organizacion__deportivas").val(data[12]);

			$(".provincia__organizacion__deportivas").text(data[2]);

			$("#provincia__organizacion__deportivas").val(data[2]);

			$(".canton__organizacion__deportivas").text(data[3]);

			$("#canton__organizacion__deportivas").val(data[3]);

			$(".parroquia__organizacion__deportivas").text(data[4]);

			$("#parroquia__organizacion__deportivas").val(data[4]);

			$(".barrio__organizacion__deportivas").text(data[13]);

			$("#barrio__organizacion__deportivas").val(data[13]);

			$(".presupuesto__asignado__pais__altos").text(poa__invers);

			$("#presupuesto__asignado__pais__altos").val(poa__invers);

			$("#idUSeguimientos").val($("#idUsuarioC").val());

			if ($("#idRolAd").val()=="7" || $("#idRolAd").val()==7) {

				$(".fila__reasignar").show();
				$(".fila__regresar__a").hide();

			}else if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2 || $("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".fila__reasignar").show();
				$(".fila__regresar__a").show();

				$(".reasignar__solo").removeClass('col');

				$(".reasignar__solo").removeClass('col-2');

				$(".reasignar__solo").addClass('col');

				$(".reasignar__solo").addClass('col-6');

			}else{

				$(".fila__reasignar").hide();
				$(".fila__regresar__a").show();

			}

			if ($("#idRolAd").val()=="3" || $("#idRolAd").val()==3) {

				$(".ocultos__en__altos").show();

			}else{

				$(".ocultos__en__altos").remove();

			}

			/*=====  End of Asignar datos del datatablets  ======*/

			if (medallas__altos__sumas!=undefined && medallas__altos__sumas!=null && medallas__altos__sumas!="" && medallas__altos__sumas!=" ") {

				for (w of medallas__altos__sumas) {

					$("#oro__alto").val(w.oro);
					$("#plata__alto").val(w.plata);
					$("#bronce__alto").val(w.bronce);

				}

			}else{

				$("#oro__alto").val(0);
				$("#plata__alto").val(0);
				$("#bronce__alto").val(0);

			}

			/*=========================================================
			=            Construción tablas de indicadores            =
			=========================================================*/

			let porcentajesCumplimientos=0;

			let div="";

			let sumaProgramado=0;
			let sumaAlcanzado=0;

			let porcentajeFinalAl=0;

			for (w of indicadores__altos) {

				sumaProgramado=parseFloat(sumaProgramado) + parseFloat(w.totalProgramado);
				sumaAlcanzado=parseFloat(sumaAlcanzado) + parseFloat(w.totalEjecutado);

				porcentajesCumplimientos=(parseFloat(w.totalEjecutado) / parseFloat(w.totalProgramado))*100;

				if (parseFloat(porcentajesCumplimientos).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)>=70 && parseFloat(porcentajesCumplimientos).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajesCumplimientos).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}



				$(".cuerpo__items__alto__rendimientos").append('<tr><td>'+w.nombreActividades+'</td><td>'+w.nombreIndicador+'</td><td>'+w.totalProgramado+'</td><td>'+w.totalEjecutado+'</td><td><center><div style="display:flex!important;">'+div+" "+porcentajesCumplimientos+'%</div></center></td></tr>');

			}

			porcentajeFinalAl=(parseFloat(sumaAlcanzado)/parseFloat(sumaProgramado))*100;

			$(".footer__altos__indicadores").append('<tr><th colspan="2"><center>Total</center></th><th><center>'+parseFloat(sumaProgramado).toFixed(2)+'</center></th><th><center>'+parseFloat(sumaAlcanzado).toFixed(2)+'</center></th><th><center>'+parseFloat(porcentajeFinalAl).toFixed(2)+'</center></th></tr>');
			
			/*=====  End of Construción tablas de indicadores  ======*/
			

			if($("#idRolAd").val()=="7" || $("#idRolAd").val()==7){

				// $(".superior__sin").remove();
				// $(".superior__con").show();

				
				$(".superior__sin").show();
				$(".superior__con").remove();

			}else{

				$(".superior__sin").show();
				$(".superior__con").remove();

			}

			if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

				$(".regresar__superior__prin").remove();
				$(".regresar__superior__con").show();

			}else{

				$(".regresar__superior__prin").show();
				$(".regresar__superior__con").remove();

			}

		});	

		},
		error:function(){

		}
				
	});	  	

  });

}



/*=====  End of Funcion de seguimiento altos  ======*/


/*===============================================
=            Seguimientos recorridos            =
===============================================*/

var funcion__reasignar__seguimientos__recorridos=function(tbody,table){

  $(tbody).on("click","button.reasignar__seguimientos__recorridos__boton",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos__recorridos');

  	paqueteDeDatos.append("idOrganismo",data[8]);

  	paqueteDeDatos.append("periodo",data[9]);

  	$(".cuerpo__contenedor__recorridos").html(' ');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/validacionBasica.js",function(){
				
			var elementos=JSON.parse(response);

		    var envio__informaciones=elementos['envio__informaciones'];

			for (w of envio__informaciones) {

				$(".cuerpo__contenedor__recorridos").append('<tr><td>'+w.fecha+'</td><td>'+w.tipo+'</td><td>'+w.estructura+'</td><td>'+w.usuarioActual+'</td><td>'+w.observacionesTecnicas+'</td></tr>')

			}

		});

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Seguimientos recorridos  ======*/

/*============================================
=            Función de reamentes            =
============================================*/

var funcion__remanentes__asignados=function(tbody,table){

  $(tbody).on("click","button.remantes__asignados",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();

    $(".titulos__remanentes").text(data[1]);

    $("#organismoIdPrin__realizados").val(data[5]);

    console.log(data);

  });

}


/*=====  End of Función de reamentes  ======*/


/*===============================================
=            Función de seguimientos            =
===============================================*/

var funcion__reasignar__seguimientos__unidos=function(tbody,table){

  $(tbody).on("click","button.reasignarTramites__seguimientos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();


  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos');

  	paqueteDeDatos.append("idOrganismo",data[16]);

  	paqueteDeDatos.append("periodo",data[5]);

  	paqueteDeDatos.append("tipo__dos",data[18]);

  	console.log(data);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validacionBasica.js",function(){
				
			var elementos=JSON.parse(response);

		    var poa__invers=elementos['poa__invers'];

		    var sumas__programados=elementos['sumas__programados'];

		    var primer__sumas__p=elementos['primer__sumas__p'];
		    var primer__sumas__e=elementos['primer__sumas__e'];
		    var segundo__sumas__p=elementos['segundo__sumas__p'];
		    var segundo__sumas__e=elementos['segundo__sumas__e'];
		    var tercero__sumas__p=elementos['tercero__sumas__p'];
		    var tercero__sumas__e=elementos['tercero__sumas__e'];
		    var cuarto__sumas__p=elementos['cuarto__sumas__p'];
		    var cuarto__sumas__e=elementos['cuarto__sumas__e'];

		    var varaible__culminados=elementos['varaible__culminados'];
		    var documentos__tecnicos__2=elementos['documentos__tecnicos__2'];

		    var variable__1__suma__programados=elementos['variable__1__suma__programados'];
		    var variable__1__suma__ejecutado=elementos['variable__1__suma__ejecutado'];
		    var variable__1__suma__planificado=elementos['variable__1__suma__planificado'];

		    $("#presupuesto__segun__poas").val(poa__invers);


		    if ($("#idRolAd").val()==2 && $("#fisicamenteE").val()==20) {

		    	$(".fila__reasignar").show();
		    	$(".fila__regresar__a").hide();

		    }else if($("#idRolAd").val()==3 && $("#fisicamenteE").val()==20){

		    	$(".fila__reasignar").hide();
		    	$(".fila__regresar__a").show();

		    }

		    $("#tipos__nomenclaturas").val(data[18]);

			/*====================================
			=            Sacar siglas            =
			====================================*/
			
		  	let palabras = data[1];
		    let array = palabras.split(" ");
		    let total = array.length;
		    let resultado = "";
			 
			for (var i = 0; i < total; i++){

				if (array[i].length>2) {

					resultado += array[i][0];

				}

			}
			
			$(".siglas__dinamicas").text(resultado);	

			$("#siglas__dinamicas__inputs").val(resultado);	
			
			/*=====  End of Sacar siglas  ======*/
			
		/*=========================================
		=            Evaluar los datos            =
		=========================================*/
		
			
		if (parseInt(data[8], 10)<10) {

			$(".numerico__dinamicas").text("0"+data[8]);

			$("#numerico__dinamicas__inputs").val("0"+data[8]);

		}else{

			$(".numerico__dinamicas").text(data[8]);

			$("#numerico__dinamicas__inputs").val(data[8]);

		}

		$(".periodo__evaluados__anuales").text(data[9]);

		$("#periodo__evaluados__anuales").val(data[9]);

		$("#organismoOculto__modal").val(data[16]);

		$("#idOrganismo").val(data[16]);

		$(".nombre__organizacion__deportivas").text(data[1]);

		$("#nombre__organizacion__deportivas").val(data[1]);

		$(".ruc__organizacion__deportivas").text(data[0]);

		$("#ruc__organizacion__deportivas").val(data[0]);

		$(".presidente__organizacion__deportivas").text(data[10]);

		$("#presidente__organizacion__deportivas").val(data[10]);

		$(".correo__organizacion__deportivas").text(data[11]);

		$("#correo__organizacion__deportivas").val(data[11]);

		$(".direccion__organizacion__deportivas").text(data[12]);

		$("#direccion__organizacion__deportivas").val(data[12]);

		$(".provincia__organizacion__deportivas").text(data[2]);

		$("#provincia__organizacion__deportivas").val(data[2]);

		$(".canton__organizacion__deportivas").text(data[3]);

		$("#canton__organizacion__deportivas").val(data[3]);

		$(".parroquia__organizacion__deportivas").text(data[4]);

		$("#parroquia__organizacion__deportivas").val(data[4]);

		$(".barrio__organizacion__deportivas").text(data[13]);

		$("#barrio__organizacion__deportivas").val(data[13]);

		$(".area__de__accion__llamados").text(data[14]);

		$("#area__de__accion__llamados").val(data[14]);

		$(".objetivo__institucional__estrategicos").text(data[15]);

		$("#objetivo__institucional__estrategicos").val(data[15]);

		if (data[5]=="primerTrimestre") {

			$("#periodo__evaluado").val("ENERO - JUNIO");

		}else if (data[5]=="segundoTrimestre") {

			$("#periodo__evaluado").val("ENERO - JUNIO");

		}else if (data[5]=="tercerTrimestre") {

			$("#periodo__evaluado").val("JULIO - DICIEMBRE");

		}else if (data[5]=="cuartoTrimestre") {

			$("#periodo__evaluado").val("JULIO - DICIEMBRE");

		}

		if (data[17]=="si") {

			$(".con__sin__e").text("Con e-SIGEF2");

		}else{

			$(".con__sin__e").text("Sin e-SIGEF2");

		}

		$("#periodo").val(data[5]);

		let idUsuariosC=$("#idUsuarioC").val();

		$("#idUSeguimientos").val(idUsuariosC);
		
		/*=====  End of Evaluar los datos  ======*/

		if ($("#idRolAd").val()==3) {

			$(".observacionesReasignaciones").hide();

		}else{

			$(".observacionesReasignaciones").show();

		}

		/*======================================
		=            Armando tablas            =
		======================================*/

		let porcentajes=0;
		let porcentajesExigefts=0;

		let planificadoA=0;
		let programadoA=0;
		let ejecuadoA=0;
		let exigeftA=0;

		let programadoAB=0;

		$.getScript("layout/scripts/js/validacionesGenerales.js",function(){

			for (w of sumas__programados) {

				programadoAB=programadoAB+parseFloat(w.programado).toFixed(2);

			}

			let div="";

			let porcentajeA1 = new Array();

			let programado1=0;
			let programado2=0;
			let programado3=0;
			let programado4=0;

			let ejecutado1=0;
			let ejecutado2=0;	
			let ejecutado3=0;
			let ejecutado4=0;


			for (z of sumas__programados) {

				planificadoA=parseFloat(planificadoA)+parseFloat(z.sumaPlanificacion);
				programadoA=parseFloat(programadoA)+parseFloat(z.programado);
				ejecuadoA=parseFloat(ejecuadoA)+parseFloat(z.ejecutado);


				porcentajes=(parseFloat(z.ejecutado)/parseFloat(z.programado)) * 100;

				porcentajeA1.push(parseFloat(porcentajes).toFixed(2));

				if (parseFloat(porcentajes).toFixed(2)>=85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajes).toFixed(2)>=70 && parseFloat(porcentajes).toFixed(2)<85) {

					 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

				}else if (parseFloat(porcentajes).toFixed(2)<70) {

					 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

				}

                if (isNaN(porcentajes)) {
                    porcentajes=0;
                }


				if (data[17]=="si") {

					$(".cuerpo__matricez__seguimientos").append('<tr><td><center>'+z.actividades+'</center></td><td style="display:none!important;"><center>'+parseFloat(z.sumaPlanificacion).toFixed(2)+'</center></td><td><center><input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes__iniciales__montos__programados" id="porcentajes__esigefts__nomenclaturas__programados'+z.idActividad+'"  value="'+parseFloat(z.programado).toFixed(2)+'"></center></td><td><center>'+parseFloat(z.ejecutado).toFixed(2)+'</center></td><td><center><div style="display:flex!important;">'+div+" "+'<input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes__iniciales__montos" id="porcentajes__esigefts__nomenclaturas'+z.idActividad+'"  value="'+parseFloat(porcentajes).toFixed(2)+'"><span>%</span></div></center></td><td><center><input type="text" class="ancho__total__input solo__numero__montos sumadores__exigets__ex" id="input__esigets'+z.idActividad+'" idEjecutados="'+parseFloat(z.programado).toFixed(2)+'" idContador="'+z.idActividad+'" value="0"/></center></td><td><center><div style="display:flex!important;"><span class="circulos__'+z.idActividad+'"></span><input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes" id="porcentajes__esigefts'+z.idActividad+'"  value="0"><span>%</span></div></center></td></tr>');

				}else{

					$(".cuerpo__matricez__seguimientos").append('<tr><td><center>'+z.actividades+'</center></td><td style="display:none!important;"><center>'+parseFloat(z.sumaPlanificacion).toFixed(2)+'</center></td><td><center><input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes__iniciales__montos__programados" id="porcentajes__esigefts__nomenclaturas__programados'+z.idActividad+'"  value="'+parseFloat(z.programado).toFixed(2)+'"></center></td><td><center>'+parseFloat(z.ejecutado).toFixed(2)+'</center></td><td><center><div style="display:flex!important;">'+div+" "+'<input type="text" class="ancho__total__input solo__numero__montos porcs__esigeftes__iniciales__montos" id="porcentajes__esigefts__nomenclaturas'+z.idActividad+'"  value="'+parseFloat(porcentajes).toFixed(2)+'"><span>%</span></div></center></td></tr>');

					$(".oculto__sin__esiguefts").hide();


				}

            
                $("#porcentajes__esigefts__nomenclaturas__programados"+z.idActividad).on('input', function () {

                    let porcentajeExigefA1Programados = new Array();

 
                    $(".porcs__esigeftes__iniciales__montos__programados").each(function(){

                        porcentajeExigefA1Programados.push($(this).val());

                    });

                    $("#arrayPorcenEsigefts__programados").val(porcentajeExigefA1Programados);

                });                
			
                $("#porcentajes__esigefts"+z.idActividad).on('input', function () {

                    let porcentajeExigefA1 = new Array();

 
                    $(".porcs__esigeftes").each(function(){

                        porcentajeExigefA1.push($(this).val());

                    });

                    $("#arrayPorcenEsigefts").val(porcentajeExigefA1);

                });


                $("#procentajeSas").removeAttr('readonly');
				$("#montosExig").removeAttr('readonly');
                $("#procentajeExigefSas").removeAttr('readonly');

				funcion__solo__numero__montos($(".solo__numero__montos"));

				

				funcion__cambio__de__numero($("#input__esigets"+z.idActividad));

                $("#porcentajes__esigefts__nomenclaturas"+z.idActividad).on('input', function () {

                    let arrayAnadidosIniciales = new Array();


                    $(".porcs__esigeftes__iniciales__montos").each(function(){

                        arrayAnadidosIniciales.push($(this).val());

                    });

                    $("#arrayPorcen__inicializados").val(arrayAnadidosIniciales);
                    


                });

				$("#input__esigets"+z.idActividad).on('input', function () {


					let esigefA1 = new Array();
					let porcentajeExigefA1 = new Array();

 

					let sum=0;

					let idContador=$(this).attr('idContador');
					let idEjecutados=$(this).attr('idEjecutados');

					let per=0;
					let per2=0;

					per=(parseFloat($(this).val())/parseFloat(idEjecutados)) * 100;

					$("#porcentajes__esigefts"+idContador).val(parseFloat(per).toFixed(2));


					$(".porcs__esigeftes").each(function(){

					    porcentajeExigefA1.push($(this).val());

					});


					$(".sumadores__exigets__ex").each(function(){

					    sum += parseFloat($(this).val());

					    esigefA1.push($(this).val());

					});



					$("#montosExig").val(parseFloat(sum).toFixed(2));

					per2=(parseFloat(sum)/parseFloat(programadoAB)) * 100;

					$("#procentajeExigefSas").val(parseFloat(per2).toFixed(2));

					$("#arrayEsigefts").val(esigefA1);
					$("#arrayPorcenEsigefts").val(porcentajeExigefA1);


					$(".circulos__"+idContador).html(" ");

                    $("#procentajeSas").removeAttr('readonly');

                    $("#montosExig").removeAttr('readonly');

                    $("#procentajeExigefSas").removeAttr('readonly');

					let div="";

					if (parseFloat(per).toFixed(2)>=85) {

						 div="<div style='border-radius: 50%!important; margin-right:1em; background:green; height:15px!important; width:15px!important;'></div>";

					}else if (parseFloat(per).toFixed(2)>=70 && parseFloat(per).toFixed(2)<85) {

						 div="<div style='border-radius: 50%!important; margin-right:1em; background:yellow; height:15px!important; width:15px!important;'></div>";

					}else if (parseFloat(per).toFixed(2)<70) {

						 div="<div style='border-radius: 50%!important; margin-right:1em;  background:red; height:15px!important; width:15px!important;'></div>";

					}

					$(".circulos__"+idContador).append(div);


				});

			}

			$("#arrayPorcen").val(porcentajeA1);

			let porcentajesZA=0;

			porcentajesZA=(parseFloat(variable__1__suma__ejecutado)/parseFloat(variable__1__suma__programados)) * 100;

			$("#monto__ejecutado__trimestre").val(parseFloat(programadoA).toFixed(2));

			$("#monto__reportado__tri").val(parseFloat(ejecuadoA).toFixed(2));

            let porcentajesAdminRealizados=(parseFloat(ejecuadoA) / parseFloat(programadoA)) * 100;

			if (data[17]=="si") {

				$(".footer__matricez__seguimientos").append('<tr><th><center>Total</center></th><th style="display:none!important;"><center><input type="text" id="planificadoSas" name="planificadoSas" value="'+parseFloat(planificadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th ><center><input type="text" id="programadoSas" name="programadoSas" value="'+parseFloat(programadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th><center><input type="text" id="ejecutadoSas" name="ejecutadoSas" value="'+parseFloat(ejecuadoA)+'" style="border:none!important;color:black!important;" /></center></th><th><center><input type="text" id="procentajeSas" name="procentajeSas" value="'+parseFloat(porcentajesAdminRealizados).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th class="exigeft__fila__holguras"><center><input type="text" id="montosExig" name="montosExig" style="border:none!important; color:black!important;" value="0"  /><center></center></th><th class="exigeft__fila__holguras__porcentajes"><input type="text" id="procentajeExigefSas" name="procentajeExigefSas"  reandoly="" style="border:none!important; color:black!important;" value="0"/><center></th></tr>');
			}else{

				$(".footer__matricez__seguimientos").append('<tr><th><center>Total</center></th><th style="display:none!important;"><center><input type="text" id="planificadoSas" name="planificadoSas" value="'+parseFloat(planificadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th ><th><center><input type="text" id="programadoSas" name="programadoSas" value="'+parseFloat(programadoA).toFixed(2)+'" style="border:none!important; color:black!important;" /></center></th><th><center><input type="text" id="ejecutadoSas" name="ejecutadoSas" value="'+parseFloat(ejecuadoA).toFixed(2)+'" style="border:none!important;color:black!important;"/></center></th><th><center><input type="text" id="procentajeSas" name="procentajeSas" value="'+parseFloat(porcentajesAdminRealizados).toFixed(2)+'" style="border:none!important; color:black!important;"/></center></th></tr>');


			}
			
			/*=====  End of Armando tablas  ======*/

			$("#avance__trimestre__porcentaje").val($("#procentajeSas").val()+"%");


			if (data[5]=="primerTrimestre" || data[5]=="segundoTrimestre") {

				/*============================================
				=            Calculos programados            =
				============================================*/
			
				programado1=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#primer__esperado").val(parseFloat(programado1).toFixed(2)+" %");


				programado2=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#segundo__esperado").val(parseFloat(programado2).toFixed(2)+" %");

				$("#tercero__esperado").val("-");

				$("#cuarto__esperado").val("-");
				
				/*=====  End of Calculos programados  ======*/
			

			}else{

				/*============================================
				=            Calculos programados            =
				============================================*/
			
				programado1=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#primer__esperado").val(parseFloat(programado1).toFixed(2)+" %");


				programado2=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#segundo__esperado").val(parseFloat(programado2).toFixed(2)+" %");

				programado3=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#tercero__esperado").val(parseFloat(programado3).toFixed(2)+" %");


				programado4=(parseFloat($("#programadoSas").val())/parseFloat($("#presupuesto__segun__poas").val())) * 100;
				$("#cuarto__esperado").val(parseFloat(programado4).toFixed(2)+" %");
				
				/*=====  End of Calculos programados  ======*/				

			}


			
			let montoEjecutadoU=$("#presupuesto__segun__poas").val();

			let ejecutadoSasU=$("#ejecutadoSas").val();


			if (data[5]=="primerTrimestre" || data[5]=="segundoTrimestre") {


				/*===========================================
				=            Calculos ejecutados            =
				===========================================*/
				
				ejecutado1=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#primer__ejecucion").val(parseFloat(ejecutado1).toFixed(2)+" %");

				/*=====  End of Calculos ejecutados  ======*/

				ejecutado2=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#segundo__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$("#cuarto__ejecucion").val("-");

				$(".ejecutados__al__segundo").show();

			}else{

				/*===========================================
				=            Calculos ejecutados            =
				===========================================*/
				
				ejecutado1=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#primer__ejecucion").val(parseFloat(ejecutado1).toFixed(2)+" %");

				/*=====  End of Calculos ejecutados  ======*/

				ejecutado2=(parseFloat(ejecutadoSasU)/parseFloat(montoEjecutadoU)) * 100;
				$("#segundo__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$("#cuarto__ejecucion").val(parseFloat(ejecutado2).toFixed(2)+" %");

				$(".ejecutados__al__cuarto").show();
				$(".ejecutados__al__segundo").show();

			}



			if (data[17]=="no") {

				$(".oculto__sin__esiguefts").remove();

			}
			

			console.log(data);

		});

		});

		},
		error:function(){

		}
				
	});	  	

  });

}


/*=====  End of Función de seguimientos  ======*/


/*==========================================
=            Aprobados tecnicos            =
==========================================*/

var funcionReasingar__aprobados__dos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites__dos",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".titulo__mS").text(data[1]);

  	$("#idOrganismo").val(data[8]);

  	cargarFileSevidor__transferencias($("#gaurdarTransferencias"),$("#quipux__Suscritos"));


  });

}


/*=====  End of Aprobados tecnicos  ======*/


/*====================================================
=             Visualizar poas gestionados            =
====================================================*/

var funcionEditar__gestionados_s=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.generarVerG",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();
 	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('idOrganismo',data[9]);
  	paqueteDeDatos.append('tipo','seleccionasCoordinas');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validacionBasica.js",function(){

				var elementos=JSON.parse(response);

				var obtenernombre__organismos=elementos['obtenernombre__organismos'];

				var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
				var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
				var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

				var obtenerInformacion=elementos['obtenerInformacion'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				if (!$(".creado__indefinidamentes").length > 0 ) {

				$("#idOrganismoM").val(data[5]);

				for (w of obtenernombre__organismos) {

					$(".titulo__mS").text(w.nombreOrganismo);

				}

				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter creado__indefinidamentes" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();			

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}


				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));						


				for (x of obtenerArchivoCoordinas__infras) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+x.documento+'" target="_blank">Documento coordinación de Instalaciones deportivas</a></div>');

				}



				for (y of obtenerArchivoCoordinas__administrativos) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+y.documento+'" target="_blank">Documento coordinación financiera</a></div>');

				}

				for (z of obtenerArchivoCoordinas__subcess) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/informesTecnicos/'+z.documento+'" target="_blank">Documento subsecretaría</a></div>');

				}


				}


			});

		},
		error:function(){

		}

	});


  });

}

/*=====  End of  Visualizar poas gestionados  ======*/

/*====================================================
=            Función terminar financieros            =
====================================================*/

var funcion___termina__financiero=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.terminarBoton__financieros ",function(e){

  	var data=table.row($(this).parents("tr")).data();

  	$.getScript("layout/scripts/js/validaGlobal.js",function(){

	  	e.preventDefault();

	  	$(".titulo__mS").text(data[1]);

	  	$("#idOrganismo").val(data[9]);

	  	$(".documento__total__financiero").attr('href','documentos/quipux__transferencia/'+data[10]);

	  	regresa__tramite__final($("#regresarTramite"));

	  	terminar__tramites__financieros($("#cerrarTramiteTransferencias"));

	  	console.log(data);

    });

  });

}


/*=====  End of Función terminar financieros  ======*/



/*========================================
=            Eliminar función           =
========================================*/

var funcion__eliminar__esigef=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.eliminar__boton ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

		var confirm= alertify.confirm('¿Está seguro de eliminar el registro?','¿Está seguro de eliminar el registro?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','eliminaresigeft');		

			paqueteDeDatos.append("idEsiget",data[5]);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/eliminaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

		          	var elementos=JSON.parse(response);

		          	var mensaje=elementos['mensaje'];

					if(mensaje==1){

				    	alertify.set("notifier","position", "top-center");
				    	alertify.notify("Registro eliminado correctamente", "success", 5, function(){});

				   	 	window.setTimeout(function(){ 

				        	location.reload();

				    	} ,5000); 

		          	}

				},
				error:function(){

				}
				
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(this).show();

			}); 
		}); 


  });

}


/*=====  End of Eliminar función  ======*/



/*========================================
=            Eliminar función            =
========================================*/

var funcion__eliminarI=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.eliminar__boton ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$("#organismoId").val(data[9]);

  });

}


/*=====  End of Eliminar función  ======*/


/*================================================
=            Observaciones realizadas            =
================================================*/

var funcion__enCordiObservi=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignarBoton__coor ",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	var paqueteDeDatos = new FormData();

  	paqueteDeDatos.append('idOrganismo',data[5]);
  	paqueteDeDatos.append('tipo','seleccionasCoordinas');

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			var elementos=JSON.parse(response);

			var obtenernombre__organismos=elementos['obtenernombre__organismos'];

			var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
			var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
			var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

			$("#idOrganismoM").val(data[5]);

			for (w of obtenernombre__organismos) {

				$(".titulo__mS").text(w.nombreOrganismo);

			}

			if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2){

				// $(".contenedor__bodyCMatriz").append('<div class="row"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

				// funcionarios__normalesPlanifi($(".alto__fisiR"),$("#idUsuarioPrincipal").val());

			}

			if($("#idRolAd").val()=="2" || $("#idRolAd").val()==2){

				enviarInforPlani__observaciones($("#guardaEnvio_coors"),$("#idOrganismoM").val(),"d",$("#idUsuarioPrincipal").val());

			}else{

				enviarInforPlani__observaciones($("#guardaEnvio_coors"),$("#idOrganismoM").val(),"a",$("#idUsuarioPrincipal").val());

			}

		},
		error:function(){

		}

	});

  });

}

/*=====  End of Observaciones realizadas  ======*/

/*==========================================
=             Actualizar nuevos            =
==========================================*/

var funcion__gestionados__i=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.editarGestionados ",function(e){

	e.preventDefault();

	var data=table.row($(this).parents("tr")).data();

  	$.getScript("layout/scripts/js/validacionBasica.js",function(){

	  	$("#organismoId").val(data[9]);

	  	$("#fecha__poasE").val(data[7]);

	  	$("#numeroResolucion__ed").val(data[5]);

	  	$("#notificado__sin").val(data[8]);

	  	/*==================================
	  	=            Checkboxes            =
	  	==================================*/
	  	
		checkboxFunciones($("#aceptarDocumentos__c"),$(".documento__ocultos")); 	
	  	
	  	/*=====  End of Checkboxes  ======*/
	  	
	  	// console.log(data);

  	});

  });

}

/*=====  End of  Actualizar nuevos  ======*/


/*========================================================
=            Actualizar valores coordinadores            =
========================================================*/

var funcion__enCordi__3=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignarBoton__coor",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();

    var paqueteDeDatos = new FormData();

    console.log(data);

    paqueteDeDatos.append('idOrganismo',data[5]);
    paqueteDeDatos.append('tipo','seleccionasCoordinas');

    $(".contenedor__bodyCMatriz").html(" ");

    $.ajax({

        type:"POST",
        url:"modelosBd/inserta/seleccionaAcciones.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        success:function(response){

            $.getScript("layout/scripts/js/validacionBasica.js",function(){

            var elementos=JSON.parse(response);

            var obtenernombre__organismos=elementos['obtenernombre__organismos'];

            var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
            var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
            var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

            var obtenerInformacion=elementos['obtenerInformacion'];
            var indicadorInformacion=elementos['indicadorInformacion'];

            var obtenerAcCa=elementos['obtenerAcCa'];
            var indicadorInformacion__dos=elementos['indicadorInformacion__dos'];

            let documentoPLanificacion=elementos['documentoPLanificacion'];

            $("#idOrganismoM").val(data[5]);



            for (w of obtenernombre__organismos) {

                $(".titulo__mS").text(w.nombreOrganismo);

            }

            let contador1=0;
            let contador2=0;
            let contador3=0;

            let documentoTransferencias__s=elementos['documentoTransferencias__s'];

            $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-4">Descargar flujo</div><div class="col col-8"><a href="documentos/flujoTransferencia/'+documentoTransferencias__s+'.pdf" target="_blank">Flujo de transferencia</a></div></div>');

            $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__documentos__tecnicos text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver Documentación técnica</div><div class="col col-6"><button class="ver__tecnicas__documentacion btn btn-warning creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton__tecnicos"></i></button></div>');
              


            for (x of obtenerArchivoCoordinas__infras) {

                $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador1+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+x.documento+'" target="_blank">Informe coordinación de Instalaciones deportivas</a></div>');
                contador1++;

            }


            for (y of obtenerArchivoCoordinas__administrativos) {

                if (!$(".unico__financiero").length > 0 ) {

                    $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador2+' unico__financiero documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+y.documento+'" target="_blank">Informe coordinación financiera</a></div>');
                    contador2++;

                }

            }



            for (z of obtenerArchivoCoordinas__subcess) {

                $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador3+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+z.documento+'" target="_blank">Informe subsecretaría</a></div>');
                contador3++;

            }


            $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center documentos__tecnicos__vision"><a href="documentos/informesPlanificacion/'+documentoPLanificacion+'" target="_blank">Informe de planifiación</a></div>');
                contador3++;

            $(".documentos__tecnicos__vision").hide();

            verOjoContrasenas2($(".ver__tecnicas__documentacion"),$(".icono__boton__tecnicos"),$(".documentos__tecnicos__vision"),$(".letras__ver__poa__documentos__tecnicos"));

            let idUsuarioPrincipal=$("#idUsuarioPrincipal").val();



             $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Devolver a</div><div class="col col-4"><select id="coordinador__enlaces__enviadores" class="ancho__total__input__selects coordinador__enlaces__enviadores"></select></div></div>');

             selector__cordinadores__a__planificacion__documento__final__aprobacion($("#coordinador__enlaces__enviadores"));


            let cnabiadores__especiales=function(parametro1,parametro2){

                $(parametro1).change(function (e){

                    $(parametro2).val($(this).val());

                });

            }

            cnabiadores__especiales($(".coordinador__enlaces__enviadores"),$("#asignando__estudios"));

            $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Ingresar número de resolución</div><div class="col col-4"><input type="text" id="numeroOficioNoti" name="numeroOficioNoti" style="margin-bottom:1em;"/></div></div>');

            $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Techo notificado sin incluir descuentos</div><div class="col col-4"><input type="text" id="montoTechoSin" class="solo__numero__montos" name="montoTechoSin" style="margin-bottom:1em;"/></div></div>');

            $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Fecha de Aprobación de la Resolución POA (Fecha del quipux de la resolución)</div><div class="col col-4"><input type="date" id="fecha__quipux" name="fecha__quipux" style="margin-bottom:1em;"/></div></div>');

             $(".contenedor__bodyCMatriz").append('<input type="hidden" id="numeroNotificacion" name="numeroNotificacion" style="margin-bottom:1em;"/>');

              $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Subir documento</div><div class="col col-4"><input type="file" id="archivoFinal" name="archivoFinal" style="margin-bottom:1em;"/></div></div>');


            $("#guardaEnvio_coors").click(function (e){

                e.preventDefault(); 

                let condicionante=0;

                let mensaje="";


                if ($("#asignando__estudios").val()==" " || $("#asignando__estudios").val()=="" || $("#asignando__estudios").val()==0 ||  $("#asignando__estudios").val()=="0") {
                    mensaje="¿Está seguro de aprobar el trámite?";
                }else{
                    mensaje="¿Está seguro de devolver el trámite?";
                    condicionante=1;
                }

                let confirm= alertify.confirm(mensaje,mensaje,null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   
                 
                confirm.set({transition:'slide'});    

                confirm.set('onok', function(){ //callbak al pulsar botón positivod

                let paqueteDeDatos = new FormData();

  
                paqueteDeDatos.append('tipo',"recomendacion__director__coordinaciones__terminadores__dos__aprobaciones");

                let idOrganismo=data[5];

                let coordinador__enlaces__enviadores=$("#coordinador__enlaces__enviadores").val();

                paqueteDeDatos.append('idOrganismo',idOrganismo);

                paqueteDeDatos.append('idUsuarioPrincipal',idUsuarioPrincipal);

                paqueteDeDatos.append('condicionante',condicionante);

                paqueteDeDatos.append('coordinador__enlaces__enviadores',coordinador__enlaces__enviadores);

                if (condicionante==0) {

                    let numeroOficioNoti= $("#numeroOficioNoti").val();
                    let numeroNotificacion= $("#numeroNotificacion").val();
                    let fecha__quipux= $("#fecha__quipux").val();
                    let montoTechoSin= $("#montoTechoSin").val();

                    paqueteDeDatos.append("numeroOficioNoti",numeroOficioNoti);
                    paqueteDeDatos.append("numeroNotificacion",numeroNotificacion);
                    paqueteDeDatos.append("fecha__quipux",fecha__quipux);
                    paqueteDeDatos.append("montoTechoSin",montoTechoSin);
                    paqueteDeDatos.append('documentoFinal', $('#archivoFinal')[0].files[0]);


                }

                $.ajax({

                    type:"POST",
                    url:"modelosBd/inserta/insertaAcciones.md.php",
                    contentType: false,
                    data:paqueteDeDatos,
                    processData: false,
                    cache: false, 
                    success:function(response){

                        var elementos=JSON.parse(response);
                        var mensaje=elementos['mensaje'];

                        if(mensaje==2){

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Trámite devuelto al coordinador", "success", 5, function(){});

                            window.setTimeout(function(){ 
                                location.reload();
                            } ,5000); 

                        }


                        if(mensaje==1){

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Trámite aprobado correctamente", "success", 5, function(){});

                            window.setTimeout(function(){ 
                                location.reload();
                            } ,5000); 

                        }

                    },
                    error:function(){}
                                        
                    }); 

                });

                confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

                    alertify.set("notifier","position", "top-center");
                    alertify.notify("Acción cancelada", "error", 1, function(){

                            $("#guardaEnvio_coors").show();
                            $('.reolad__mMa').html(' ');

                        }); 

                    }); 

                });                

            });

        },
        error:function(){

        }

    });

  });

}

var funcion__enCordi__2=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignarBoton__coor",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();

    var paqueteDeDatos = new FormData();

    console.log(data);

    paqueteDeDatos.append('idOrganismo',data[5]);
    paqueteDeDatos.append('tipo','seleccionasCoordinas');

    $(".contenedor__bodyCMatriz").html(" ");

    $.ajax({

        type:"POST",
        url:"modelosBd/inserta/seleccionaAcciones.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        success:function(response){

            $.getScript("layout/scripts/js/validacionBasica.js",function(){

            var elementos=JSON.parse(response);

            var obtenernombre__organismos=elementos['obtenernombre__organismos'];

            var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
            var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
            var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

            var obtenerInformacion=elementos['obtenerInformacion'];
            var indicadorInformacion=elementos['indicadorInformacion'];

            var obtenerAcCa=elementos['obtenerAcCa'];
            var indicadorInformacion__dos=elementos['indicadorInformacion__dos'];

            let documentoPLanificacion=elementos['documentoPLanificacion'];

            $("#idOrganismoM").val(data[5]);



            for (w of obtenernombre__organismos) {

                $(".titulo__mS").text(w.nombreOrganismo);

            }

            let contador1=0;
            let contador2=0;
            let contador3=0;


            $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__documentos__tecnicos text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver Documentación técnica</div><div class="col col-6"><button class="ver__tecnicas__documentacion btn btn-warning creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton__tecnicos"></i></button></div>');

              


            for (x of obtenerArchivoCoordinas__infras) {

                $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador1+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+x.documento+'" target="_blank">Informe coordinación de Instalaciones deportivas</a></div>');
                contador1++;

            }


            for (y of obtenerArchivoCoordinas__administrativos) {

                if (!$(".unico__financiero").length > 0 ) {

                    $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador2+' unico__financiero documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+y.documento+'" target="_blank">Informe coordinación financiera</a></div>');
                    contador2++;

                }

            }



            for (z of obtenerArchivoCoordinas__subcess) {

                $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador3+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+z.documento+'" target="_blank">Informe subsecretaría</a></div>');
                contador3++;

            }


                $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center documentos__tecnicos__vision"><a href="documentos/informesPlanificacion/'+documentoPLanificacion+'" target="_blank">Informe de planifiación</a></div>');
                contador3++;

            $(".documentos__tecnicos__vision").hide();

            verOjoContrasenas2($(".ver__tecnicas__documentacion"),$(".icono__boton__tecnicos"),$(".documentos__tecnicos__vision"),$(".letras__ver__poa__documentos__tecnicos"));

            let idUsuarioPrincipal=$("#idUsuarioPrincipal").val();


            if ($("#idRolAd").val()==2) {

                 let documentoTransferencias__s=elementos['documentoTransferencias__s'];

                $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-4">Descargar flujo</div><div class="col col-8"><a href="documentos/flujoTransferencia/'+documentoTransferencias__s+'.pdf" target="_blank">Flujo de transferencia</a></div></div>');

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-6"><select id="coordinador__enlaces__enviadores" class="ancho__total__input__selects coordinador__enlaces__enviadores"></select></div></div>');

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Subir informe de planificación</div><div class="col col-4"><input type="file" id="archivoFiles" class="archivoFiles" /></div>');

            }else if ($("#idRolAd").val()==4) {

                let documentoTransferencias__s=elementos['documentoTransferencias__s'];

                $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-4">Descargar flujo</div><div class="col col-8"><a href="documentos/flujoTransferencia/'+documentoTransferencias__s+'.pdf" target="_blank">Flujo de transferencia</a></div></div>');

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-6"><select id="coordinador__enlaces__enviadores" class="ancho__total__input__selects coordinador__enlaces__enviadores"></select></div></div>');

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Subir informe de planificación</div><div class="col col-4"><input type="file" id="archivoFiles" class="archivoFiles" /></div>');

            }else{

                $("#guardaEnvio_coors").show();

            }

            var comprobador1=elementos['comprobador1'];
            var comprobador2=elementos['comprobador2'];
            var comprobador3=elementos['comprobador3'];



            if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

                selector__cordinadores__a__planificacion__treces($("#coordinador__enlaces__enviadores"));


                let cnabiadores__especiales=function(parametro1,parametro2){

                    $(parametro1).change(function (e){

                        let opcionAtributos = $('option:selected',parametro1).attr('attr');

                        $(parametro2).val($(this).val());

                        $("#asignando__estudios__atributos").val(opcionAtributos);

                    });

                }

                cnabiadores__especiales($(".coordinador__enlaces__enviadores"),$("#asignando__estudios"));

                $("#guardaEnvio_coors").click(function (e){

                    e.preventDefault(); 

                    $('.reolad__mMa').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    let confirm= alertify.confirm('¿Está seguro de reasignar el trámite?','¿Está seguro de reasignar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                        confirm.set({transition:'slide'});    

                        confirm.set('onok', function(){ //callbak al pulsar botón positivod

                        let paqueteDeDatos = new FormData();

  
                        paqueteDeDatos.append('tipo',"recomendacion__director__coordinaciones__terminadores__dos");

                        let idOrganismo=data[5];

                        paqueteDeDatos.append('idOrganismo',idOrganismo);

                        paqueteDeDatos.append('idUsuarioPrincipal',idUsuarioPrincipal);

                        let elaces__escogidos=$("#asignando__estudios").val();

                        let asignando__estudios__atributos=$("#asignando__estudios__atributos").val();

                        paqueteDeDatos.append('idEscogido',elaces__escogidos);

                        paqueteDeDatos.append('asignando__estudios__atributos',asignando__estudios__atributos);

                        paqueteDeDatos.append('archivo', $("#archivoFiles")[0].files[0]);


                        $.ajax({

                            type:"POST",
                            url:"modelosBd/inserta/insertaAcciones.md.php",
                            contentType: false,
                            data:paqueteDeDatos,
                            processData: false,
                            cache: false, 
                            success:function(response){

                                var elementos=JSON.parse(response);
                                var mensaje=elementos['mensaje'];

                                if(mensaje==1){

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

                                    window.setTimeout(function(){ 
                                        location.reload();
                                    } ,5000); 

                                }

                            },
                            error:function(){}
                                        
                            }); 

                        });

                        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Acción cancelada", "error", 1, function(){

                                $(parametro1).show();
                                $('.reolad__mMa').html(' ');

                            }); 

                        }); 

                    });                

            }else{


                selector__cordinadores__a__planificacion__2($("#coordinador__enlaces__enviadores"));


                let cnabiadores__especiales=function(parametro1,parametro2){

                    $(parametro1).change(function (e){

                        $(parametro2).val($(this).val());

                    });

                }

                cnabiadores__especiales($(".coordinador__enlaces__enviadores"),$("#asignando__estudios"));


                $("#guardaEnvio_coors").click(function (e){

                    e.preventDefault(); 

                    $('.reolad__mMa').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    let confirm= alertify.confirm('¿Está seguro de reasignar el trámite?','¿Está seguro de reasignar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                        confirm.set({transition:'slide'});    

                        confirm.set('onok', function(){ //callbak al pulsar botón positivod

                        let paqueteDeDatos = new FormData();

  

                        paqueteDeDatos.append('tipo',"recomendacion__director__coordinaciones__terminadores");

                        let idOrganismo=data[5];

                        paqueteDeDatos.append('idOrganismo',idOrganismo);

                        paqueteDeDatos.append('idUsuarioPrincipal',idUsuarioPrincipal);

                        let elaces__escogidos=$("#asignando__estudios").val();

                        paqueteDeDatos.append('idEscogido',elaces__escogidos);

                        paqueteDeDatos.append('archivo', $("#archivoFiles")[0].files[0]);


                        $.ajax({

                            type:"POST",
                            url:"modelosBd/inserta/insertaAcciones.md.php",
                            contentType: false,
                            data:paqueteDeDatos,
                            processData: false,
                            cache: false, 
                            success:function(response){

                                var elementos=JSON.parse(response);
                                var mensaje=elementos['mensaje'];

                                if(mensaje==1){

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

                                    window.setTimeout(function(){ 
                                        location.reload();
                                    } ,5000); 

                                }

                            },
                            error:function(){}
                                        
                            }); 

                        });

                        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Acción cancelada", "error", 1, function(){

                                $(parametro1).show();
                                $('.reolad__mMa').html(' ');

                            }); 

                        }); 

                    });


            }


            });

        },
        error:function(){

        }

    });

  });

}

var funcion__enCordi=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignarBoton__coor",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	var paqueteDeDatos = new FormData();

    console.log(data);

  	paqueteDeDatos.append('idOrganismo',data[5]);
  	paqueteDeDatos.append('tipo','seleccionasCoordinas');

    $(".contenedor__bodyCMatriz").html(" ");

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validacionBasica.js",function(){

			var elementos=JSON.parse(response);

			var obtenernombre__organismos=elementos['obtenernombre__organismos'];

			var obtenerArchivoCoordinas__infras=elementos['obtenerArchivoCoordinas__infras'];
			var obtenerArchivoCoordinas__administrativos=elementos['obtenerArchivoCoordinas__administrativos'];
			var obtenerArchivoCoordinas__subcess=elementos['obtenerArchivoCoordinas__subcess'];

			var obtenerInformacion=elementos['obtenerInformacion'];
			var indicadorInformacion=elementos['indicadorInformacion'];

            var obtenerAcCa=elementos['obtenerAcCa'];
            var indicadorInformacion__dos=elementos['indicadorInformacion__dos'];

			$("#idOrganismoM").val(data[5]);

            if ((data[7]==null || data[5]==undefined || data[5]==""  || data[5]==" ") && $("#idRolAd").val()==4) {

                // $("#guardaEnvio_coors").remove();
            }

           
            if ($("#idRolAd").val()==4) {

                $("#guardaEnvio_coors").text("REASIGNAR DPI");

            }

            if (data[6]!=null && data[6]!="") {

               

                let arreglo = data[6].split("_________");
                let contador__Doc=0;
                let banderaDi=false;
                let unicos = [];

                for(var i = 0; i < arreglo.length; i++) {
                         
                    let elemento = arreglo[i];
                         
                    if (!unicos.includes(arreglo[i])) {
                        unicos.push(elemento);
                    }
                }


                 $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__indicadores__anexos text-center" style="font-weight:bold; font-size:15px;">Documentos anexos</div><div class="col col-6"><button class="ver__Tabla__indicadores__anexos btn btn-primary" style="cursor:pointer;"><i class="fas fa-eye icono__boton__indicadores__anexos"></i></button></div>');


                for (var i = 0 ; i<unicos.length; i++) {


                    $(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center doc__anexos anexos__doc__ocultos" id="doc__fila'+contador__Doc+'"><a href="documentos/anexosPoa/'+unicos[i]+'" target="_blank" id="enlace__'+contador__Doc+'">Documento '+(i+1)+": "+unicos[i]+'</a></div>');


                    if(banderaDi==false){

                        $("#doc__fila"+i).attr('style','background-color: rgba(33,42,92,.95)!important;');

                        $("#enlace__"+i).attr('style','color:white;');

                        banderaDi=true;

                    }else{

                        $("#doc__fila"+i).attr('style','background-color: var(--bs-white)!important;');

                        $("#enlace__"+i).attr('style','color:#212121;');

                        banderaDi=false;

                    }
                            

                    contador__Doc++;

                }

                $(".anexos__doc__ocultos").hide();

                verOjoContrasenas2($(".ver__Tabla__indicadores__anexos"),$(".icono__boton__indicadores__anexos"),$(".anexos__doc__ocultos"),$(".letras__ver__poa__indicadores__anexos"));  


            }


			for (w of obtenernombre__organismos) {

				$(".titulo__mS").text(w.nombreOrganismo);

			}

             $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__indicadores text-center" style="font-weight:bold; font-size:15px;">Ver Indicadores</div><div class="col col-6"><button class="ver__Tabla__indicadores btn btn-primary" style="cursor:pointer;"><i class="fas fa-eye icono__boton__indicadores"></i></button></div>');


            for (dLCIn of indicadorInformacion__dos) {

                 $(".contenedor__bodyCMatriz").append('<div class="indicadores__ocultos row"><div class="col col-12 text-center mb-0 indicadores__ocultos" style="font-weight:bold; text-align:justify; color: rgba(33,42,92,.95);">'+dLCIn.indicador+'</div><hr><div class="col col-2 indicadores__ocultos" style="">I Trimestre: '+dLCIn.primertrimestre+'</div><div class="col col-2 indicadores__ocultos" style="">II Trimestre: '+dLCIn.segundotrimestre+'</div><div class="col col-2 indicadores__ocultos" style="">III Trimestre: '+dLCIn.tercertrimestre+'</div><div class="col col-2 indicadores__ocultos" style="">IV Trimestre: '+dLCIn.cuartotrimestre+'</div><div class="col col-4 indicadores__ocultos" style="">Meta Anual del indicador: '+dLCIn.metaindicador+'</div></div><br><br>');

                 $(".indicadores__ocultos").hide();

            }

            verOjoContrasenas2($(".ver__Tabla__indicadores"),$(".icono__boton__indicadores"),$(".indicadores__ocultos"),$(".letras__ver__poa__indicadores"));  


            if (obtenerAcCa!="") {

                $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__indicadores__actividades text-center" style="font-weight:bold; font-size:15px;">ACTIVIDADES A ANALIZAR</div><div class="col col-6"><button class="ver__Tabla__actividades btn btn-primary" style="cursor:pointer;"><i class="fas fa-eye icono__boton__indicadores__actividades"></i></button></div>');


                 for (d of obtenerAcCa) {

                     $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center ocultos__actividades" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6 ocultos__actividades"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row ocultos__actividades"></div>');

                    verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

                }

                $(".ocultos__actividades").hide();

                 verOjoContrasenas2($(".ver__Tabla__actividades"),$(".icono__boton__indicadores__actividades"),$(".ocultos__actividades"),$(".letras__ver__poa__indicadores__actividades"));  

            }

			if (!$(".creados__letter").length > 0 ) {

				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();			

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}


				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));						
			}

			let contador1=0;
			let contador2=0;
			let contador3=0;



            $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__documentos__tecnicos text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver Documentación técnica</div><div class="col col-6"><button class="ver__tecnicas__documentacion btn btn-warning creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton__tecnicos"></i></button></div>');

              


				for (x of obtenerArchivoCoordinas__infras) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador1+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+x.documento+'" target="_blank">Documento coordinación de Instalaciones deportivas</a></div>');
					contador1++;

				}


				for (y of obtenerArchivoCoordinas__administrativos) {

                    if (!$(".unico__financiero").length > 0 ) {

					   $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador2+' unico__financiero documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+y.documento+'" target="_blank">Documento coordinación financiera</a></div>');
					   contador2++;

                    }

				}



				for (z of obtenerArchivoCoordinas__subcess) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center dif'+contador3+' documentos__tecnicos__vision"><a href="documentos/informesTecnicos/'+z.documento+'" target="_blank">Documento subsecretaría</a></div>');
					contador3++;

				}

                $(".documentos__tecnicos__vision").hide();

                 verOjoContrasenas2($(".ver__tecnicas__documentacion"),$(".icono__boton__tecnicos"),$(".documentos__tecnicos__vision"),$(".letras__ver__poa__documentos__tecnicos"));

            let idUsuarioPrincipal=$("#idUsuarioPrincipal").val();


			if ($("#idRolAd").val()==2) {

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-6"><select id="coordinador__enlaces__enviadores" class="ancho__total__input__selects coordinador__enlaces__enviadores"></select></div></div>');

			}else if ($("#idRolAd").val()==3) {

                 var presupuestos__flujo__transferencias=elementos['presupuestos__flujo__transferencias'];

                 var nombre1__flujo=elementos['nombre1__flujo'];
                 var rubro1__flujo=elementos['rubro1__flujo'];
                 var nombre2__flujo=elementos['nombre2__flujo'];
                 var rubro2__flujo=elementos['rubro2__flujo'];
                 var nombre3__flujo=elementos['nombre3__flujo'];
                 var rubro3__flujo=elementos['rubro3__flujo'];
                 var nombre4__flujo=elementos['nombre4__flujo'];
                 var rubro4__flujo=elementos['rubro4__flujo'];
                 var nombre5__flujo=elementos['nombre5__flujo'];
                 var rubro5__flujo=elementos['rubro5__flujo'];
                 var nombre6__flujo=elementos['nombre6__flujo'];
                 var rubro6__flujo=elementos['rubro6__flujo'];
                 var nombre7__flujo=elementos['nombre7__flujo'];
                 var rubro7__flujo=elementos['rubro7__flujo'];
                 var inversion__flujos=elementos['inversion__flujos'];

               $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__flujos__anexos text-center" style="font-weight:bold; font-size:15px;">Flujo de transferencias</div><div class="col col-6"><button class="ver__flujo__transferencias btn btn-primary" style="cursor:pointer;"><i class="fas fa-eye icono__flujo__transferencias"></i></button></div>');
               
                $(".contenedor__bodyCMatriz").append('<div class="col col-6 flujo__oculto__transferencias text-center"><input type="hidden" id="tipoPdf" name="tipoPdf" value="flujo__transferencias__informes"><input type="hidden" id="idOrganismo" name="idOrganismo" value="'+data[5]+'"/><table><thead><tr><th style="vertical-align:middle;" rowspan="2">DETALLE</th><th style="vertical-align:middle;" rowspan="2">MONTO</th><th colspan="14" rowspan="1">GASTO CORRIENTE</th></tr><tr><th colspan="1" rowspan="1">ENERO</th><th colspan="1" rowspan="1">FEBRERO</th><th colspan="1" rowspan="1">MARZO</th><th colspan="1" rowspan="1">ABRIL</th><th colspan="1" rowspan="1">MAYO</th><th colspan="1" rowspan="1">JUNIO</th><th colspan="1" rowspan="1">JULIO</th><th colspan="1" rowspan="1">AGOSTO</th><th colspan="1" rowspan="1">SEPTIEMBRE</th><th colspan="1" rowspan="1">OCTUBRE</th><th colspan="1" rowspan="1">NOVIEMBRE</th><th colspan="1" rowspan="1">DICIEMBRE</th><th colspan="2" rowspan="1">TOTAL</th></tr></thead><tbody class="body__contenidos__transferencias"></tbody><tfooter class="footer__contenidos__transferencias"><tr><td>MONTO A TRANSFERIR A ORGANISMO DEPORTIVO</td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" id="monto__total__transfer__montoTrans__OD" class="moto__totales__transfer__od" readonly="" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="enero__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="febrero__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="marzo__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="abril__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="mayo__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="junio__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="julio__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="agosto__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="septiembre__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="octubre__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="noviembre__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od" id="diciembre__transfer__od" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;" colspan="2"><input type="text" style="width:40px!important;" class="moto__totales__transfer__od"  value="'+parseFloat(0).toFixed(2)+'" readonly=""/></td></tr><tr><td colspan="2">5 X MIL PARA CONTRALORÍA GENERAL DEL ESTADO</td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="enero__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="febrero__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="marzo__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="abril__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="mayo__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="junio__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="julio__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="agosto__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="septiembre__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="octubre__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="noviembre__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;"><input type="text" style="width:40px!important;" class="montos__grabados__OD__transfer__od__organismo__cinco" id="diciembre__transfer__od__organismo__cinco" value="'+parseFloat(0).toFixed(2)+'" /></td><td style="vertical-align:middle;" colspan="2"><div class="flex d-flex"><input type="text" style="width:40px!important;" id="cinco__total" class="moto__totales__transfer__od__organismo__cinco"  value="'+parseFloat(0).toFixed(2)+'" readonly=""/>&nbsp;&nbsp;<a class-"btn btn-primary" id="calcular__final__cinco" style="background:blue;color:white!important; padding:.5em;">CALCULAR</a></div></td></tr><tr><td colspan="15"><a  class="btn btn-primary" id="guardarGenerar">GUARDAR</a></td></tr></tfooter></table><form method="post" id="formularioPdfTransfers" action="modelosBd/pdf/pdf.modelo.php"><input type="hidden" id="tipoPdf" name="tipoPdf" value="informe__flujos__transferencias"/><input type="hidden" id="idOrganismo5Transfer" name="idOrganismo" value="'+data[5]+'" /><button type="submit" class="btn btn-warning">Generar PDF&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></form></div>');

                // $("#formularioPdfTransfers").hide();

                let sumadorTransferencias=0;

                for(x of presupuestos__flujo__transferencias){

                    $(".body__contenidos__transferencias").append("<tr><td>PROGRAMACIÓN DE ASIGNACIÓN NOTIFICADA (SIN INCLUIR 5 X 1000)</td><td style='vertical-align:middle;'>"+parseFloat(x.inversion).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.enero).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.febrero).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.marzo).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.abril).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.mayo).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.junio).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.julio).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.agosto).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.septiembre).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.octubre).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.noviembre).toFixed(2)+"</td><td style='vertical-align:middle;'>"+parseFloat(x.diciembre).toFixed(2)+"</td><td style='vertical-align:middle;' colspan='2'>"+parseFloat(x.inversion).toFixed(2)+"<input type='hidden' id='moviemiento__nuevo' value='"+x.inversion+"'></td></tr><tr><td>FLUJO DE TRANSFERENCIA</td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' id='monto__total__transfer' class='moto__totales__transfer' readonly='' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados enero__suma__globales__rema' id='enero__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados febrero__suma__globales__rema' id='febrero__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados marzo__suma__globales__rema' id='marzo__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados abril__suma__globales__rema' id='abril__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados mayo__suma__globales__rema' id='mayo__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados junio__suma__globales__rema' id='junio__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados julio__suma__globales__rema' id='julio__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados agosto__suma__globales__rema' id='agosto__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados septiembre__suma__globales__rema' id='septiembre__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados octubre__suma__globales__rema' id='octubre__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados noviembre__suma__globales__rema' id='noviembre__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados diciembre__suma__globales__rema' id='diciembre__transfer' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='moto__totales__transfer' id='total__transferidos__tra'  value='"+parseFloat(0).toFixed(2)+"' readonly=''/></td><td class='agregar__flujos__transfer'></td></tr>");


                        let funcion__sumador__real__dos = function (parametro1, parametro2, parametro3,parametro4) {

                            $(parametro1).on('input', function () {

                                let sum = 0;

                                $(parametro3).each(function () {

                                    sum += parseFloat($(this).val());

                                });

                                $(parametro2).val(sum.toFixed(2));

                                if (parseFloat($("#monto__total__transfer").val())>=parseFloat($("#moviemiento__nuevo").val())) {

                                    if (!$("#agregar__flujo__anteriores").length ) {

                                        $(".agregar__flujos__transfer").append('<a id="agregar__flujo__anteriores" class="btn btn-primary">Agregar</a>');

                                        agregar__datos__flujos($("#agregar__flujo__anteriores"),$(".body__contenidos__transferencias"));

                                    }



                                }else{

                                    $(".agregar__flujos__transfer").html(" ");

                                }


                            });

                        }

                        funcion__sumador__real__dos($("#enero__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#febrero__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#marzo__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#abril__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#mayo__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#junio__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#julio__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#agosto__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#septiembre__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#octubre__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#noviembre__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));
                        funcion__sumador__real__dos($("#diciembre__transfer"),$(".moto__totales__transfer"),$(".montos__grabados"));



                }


                let calcular__boton__cinco = function (parametro1, parametro2) {

                    $(parametro1).on('click', function () {

                        let restaEnero=0;
                        let restaFebrero=0;
                        let restaMarzo=0;
                        let restaAbril=0;
                        let restaMayo=0;
                        let restaJunio=0;
                        let restaJulio=0;
                        let restaAgosto=0;
                        let restaSeptiembre=0;
                        let restaOctubre=0;
                        let restaNoviembre=0;
                        let restaDiciembre=0;

                        $(".enero__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaEnero) {

                                 restaEnero= parseFloat($(this).val()) - restaEnero;

                            }else{

                                 restaEnero= restaEnero - parseFloat($(this).val());

                            }

                        });

                        $(".febrero__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaFebrero) {

                                 restaFebrero= parseFloat($(this).val()) - restaFebrero;

                            }else{

                                 restaFebrero= restaFebrero - parseFloat($(this).val());

                            }

                        });


                        $(".marzo__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaMarzo) {

                                 restaMarzo= parseFloat($(this).val()) - restaMarzo;

                            }else{

                                 restaMarzo= restaMarzo - parseFloat($(this).val());

                            }

                        });


                        $(".abril__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaAbril) {

                                 restaAbril= parseFloat($(this).val()) - restaAbril;

                            }else{

                                 restaAbril= restaAbril - parseFloat($(this).val());

                            }

                        });


                        $(".mayo__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaMayo) {

                                 restaMayo= parseFloat($(this).val()) - restaMayo;

                            }else{

                                 restaMayo= restaMayo - parseFloat($(this).val());

                            }

                        });


                        $(".junio__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaJunio) {

                                 restaJunio= parseFloat($(this).val()) - restaJunio;

                            }else{

                                 restaJunio= restaJunio - parseFloat($(this).val());

                            }

                        });


                        $(".julio__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaJulio) {

                                 restaJulio= parseFloat($(this).val()) - restaJulio;

                            }else{

                                 restaJulio= restaJulio - parseFloat($(this).val());

                            }

                        });

                        $(".agosto__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaAgosto) {

                                 restaAgosto= parseFloat($(this).val()) - restaAgosto;

                            }else{

                                 restaAgosto= restaAgosto - parseFloat($(this).val());

                            }

                        });

                        $(".septiembre__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaSeptiembre) {

                                 restaSeptiembre= parseFloat($(this).val()) - restaSeptiembre;

                            }else{

                                 restaSeptiembre= restaSeptiembre - parseFloat($(this).val());

                            }

                        });

                        $(".octubre__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaOctubre) {

                                 restaOctubre= parseFloat($(this).val()) - restaOctubre;

                            }else{

                                 restaOctubre= restaOctubre - parseFloat($(this).val());

                            }

                        });

                        $(".noviembre__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaNoviembre) {

                                 restaNoviembre= parseFloat($(this).val()) - restaNoviembre;

                            }else{

                                 restaNoviembre= restaNoviembre - parseFloat($(this).val());

                            }

                        });

                        $(".diciembre__suma__globales__rema").each(function () {

                            if (parseFloat($(this).val())>restaDiciembre) {

                                 restaDiciembre= parseFloat($(this).val()) - restaDiciembre;

                            }else{

                                 restaDiciembre= restaDiciembre - parseFloat($(this).val());

                            }

                        });


                        $("#enero__transfer__od").val(restaEnero.toFixed(2));
                        $("#febrero__transfer__od").val(restaFebrero.toFixed(2));
                        $("#marzo__transfer__od").val(restaMarzo.toFixed(2));
                        $("#abril__transfer__od").val(restaAbril.toFixed(2));
                        $("#mayo__transfer__od").val(restaMayo.toFixed(2));
                        $("#junio__transfer__od").val(restaJunio.toFixed(2));
                        $("#julio__transfer__od").val(restaJulio.toFixed(2));
                        $("#agosto__transfer__od").val(restaAgosto.toFixed(2));
                        $("#septiembre__transfer__od").val(restaSeptiembre.toFixed(2));
                        $("#octubre__transfer__od").val(restaOctubre.toFixed(2));
                        $("#noviembre__transfer__od").val(restaNoviembre.toFixed(2));
                        $("#diciembre__transfer__od").val(restaDiciembre.toFixed(2));

                        let enero__transfer__od=$("#enero__transfer__od").val();
                        let febrero__transfer__od=$("#febrero__transfer__od").val();
                        let marzo__transfer__od=$("#marzo__transfer__od").val();
                        let abril__transfer__od=$("#abril__transfer__od").val();
                        let mayo__transfer__od=$("#mayo__transfer__od").val();
                        let junio__transfer__od=$("#junio__transfer__od").val();
                        let julio__transfer__od=$("#julio__transfer__od").val();
                        let agosto__transfer__od=$("#agosto__transfer__od").val();
                        let septiembre__transfer__od=$("#septiembre__transfer__od").val();
                        let octubre__transfer__od=$("#octubre__transfer__od").val();
                        let noviembre__transfer__od=$("#noviembre__transfer__od").val();
                        let diciembre__transfer__od=$("#diciembre__transfer__od").val();

                        let sumatoreFilas1= parseFloat(enero__transfer__od) + parseFloat(febrero__transfer__od) + parseFloat(marzo__transfer__od) + parseFloat(abril__transfer__od) + parseFloat(mayo__transfer__od) + parseFloat(junio__transfer__od) + parseFloat(julio__transfer__od) + parseFloat(agosto__transfer__od) + parseFloat(septiembre__transfer__od) + parseFloat(octubre__transfer__od) + parseFloat(noviembre__transfer__od) + parseFloat(diciembre__transfer__od);

                        let formulaEnero=(parseFloat(enero__transfer__od) / 0.95) - parseFloat(enero__transfer__od);
                        let formulaFebrero=(parseFloat(febrero__transfer__od) / 0.95) - parseFloat(febrero__transfer__od);
                        let formulaMarzo=(parseFloat(marzo__transfer__od) / 0.95) - parseFloat(marzo__transfer__od);
                        let formulaAbril=(parseFloat(abril__transfer__od) / 0.95) - parseFloat(abril__transfer__od);
                        let formulaMayo=(parseFloat(mayo__transfer__od) / 0.95) - parseFloat(mayo__transfer__od);
                        let formulaJunio=(parseFloat(junio__transfer__od) / 0.95) - parseFloat(junio__transfer__od);
                        let formulaJulio=(parseFloat(julio__transfer__od) / 0.95) - parseFloat(julio__transfer__od);
                        let formulaAgosto=(parseFloat(agosto__transfer__od) / 0.95) - parseFloat(agosto__transfer__od);
                        let formulaSeptiembre=(parseFloat(septiembre__transfer__od) / 0.95) - parseFloat(septiembre__transfer__od);
                        let formulaOctubre=(parseFloat(octubre__transfer__od) / 0.95) - parseFloat(octubre__transfer__od);
                        let formulaNoviembre=(parseFloat(noviembre__transfer__od) / 0.95) - parseFloat(noviembre__transfer__od);
                        let formulaDiciembre=(parseFloat(diciembre__transfer__od) / 0.95) - parseFloat(diciembre__transfer__od);

                        $("#diciembre__transfer__od").val(restaDiciembre.toFixed(2));

                        $("#enero__transfer__od__organismo__cinco").val(parseFloat(formulaEnero).toFixed(2));
                        $("#febrero__transfer__od__organismo__cinco").val(parseFloat(formulaFebrero).toFixed(2));
                        $("#marzo__transfer__od__organismo__cinco").val(parseFloat(formulaMarzo).toFixed(2));
                        $("#abril__transfer__od__organismo__cinco").val(parseFloat(formulaAbril).toFixed(2));
                        $("#mayo__transfer__od__organismo__cinco").val(parseFloat(formulaMayo).toFixed(2));
                        $("#junio__transfer__od__organismo__cinco").val(parseFloat(formulaJunio).toFixed(2));
                        $("#julio__transfer__od__organismo__cinco").val(parseFloat(formulaJulio).toFixed(2));
                        $("#agosto__transfer__od__organismo__cinco").val(parseFloat(formulaAgosto).toFixed(2));
                        $("#septiembre__transfer__od__organismo__cinco").val(parseFloat(formulaSeptiembre).toFixed(2));
                        $("#octubre__transfer__od__organismo__cinco").val(parseFloat(formulaOctubre).toFixed(2));
                        $("#noviembre__transfer__od__organismo__cinco").val(parseFloat(formulaNoviembre).toFixed(2));
                        $("#diciembre__transfer__od__organismo__cinco").val(parseFloat(formulaDiciembre).toFixed(2));


                        let enero__transfer__od__organismo__cinco=$("#enero__transfer__od__organismo__cinco").val();
                        let febrero__transfer__od__organismo__cinco=$("#febrero__transfer__od__organismo__cinco").val();
                        let marzo__transfer__od__organismo__cinco=$("#marzo__transfer__od__organismo__cinco").val();
                        let abril__transfer__od__organismo__cinco=$("#abril__transfer__od__organismo__cinco").val();
                        let mayo__transfer__od__organismo__cinco=$("#mayo__transfer__od__organismo__cinco").val();
                        let junio__transfer__od__organismo__cinco=$("#junio__transfer__od__organismo__cinco").val();
                        let julio__transfer__od__organismo__cinco=$("#julio__transfer__od__organismo__cinco").val();
                        let agosto__transfer__od__organismo__cinco=$("#agosto__transfer__od__organismo__cinco").val();
                        let septiembre__transfer__od__organismo__cinco=$("#septiembre__transfer__od__organismo__cinco").val();
                        let octubre__transfer__od__organismo__cinco=$("#octubre__transfer__od__organismo__cinco").val();
                        let noviembre__transfer__od__organismo__cinco=$("#noviembre__transfer__od__organismo__cinco").val();
                        let diciembre__transfer__od__organismo__cinco=$("#diciembre__transfer__od__organismo__cinco").val();

                        let sumatoreFilasFormulas= parseFloat(enero__transfer__od__organismo__cinco) + parseFloat(febrero__transfer__od__organismo__cinco) + parseFloat(marzo__transfer__od__organismo__cinco) + parseFloat(abril__transfer__od__organismo__cinco) + parseFloat(mayo__transfer__od__organismo__cinco) + parseFloat(junio__transfer__od__organismo__cinco) + parseFloat(julio__transfer__od__organismo__cinco) + parseFloat(agosto__transfer__od__organismo__cinco) + parseFloat(septiembre__transfer__od__organismo__cinco) + parseFloat(octubre__transfer__od__organismo__cinco) + parseFloat(noviembre__transfer__od__organismo__cinco) + parseFloat(diciembre__transfer__od__organismo__cinco);

                        $("#cinco__total").val(parseFloat(sumatoreFilasFormulas).toFixed(2));


                    });

                }

                let agregar__datos__flujos = function (parametro1, parametro2) {

                    $(parametro1).on('click', function () {

                        sumadorTransferencias++;

                        $(parametro2).append("<tr class='eliminar__flujos__filas"+sumadorTransferencias+"'><td display='flex'><div>DESCUENTO REMANENTE</div><div><select class='anios__transferencias__remanentes ancho__total__input__selects' id='aniosRemanentes"+sumadorTransferencias+"'><option value='0'>--Seleccione año--</option></select></div></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' id='monto__total__transfer__re"+sumadorTransferencias+"' class='moto__totales__transfer__re monto__rema__"+sumadorTransferencias+"' readonly='' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" enero__suma__globales__rema enero__remanentes' id='enero__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" febrero__suma__globales__rema febrero__remanentes' id='febrero__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" marzo__suma__globales__rema marzo__remanentes' id='marzo__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" abril__suma__globales__rema abril__remanentes' id='abril__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" mayo__suma__globales__rema mayo__remanentes' id='mayo__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" junio__suma__globales__rema junio__remanentes' id='junio__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" julio__suma__globales__rema julio__remanentes' id='julio__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" agosto__suma__globales__rema agosto__remanentes' id='agosto__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" septiembre__suma__globales__rema septiembre__remanentes' id='septiembre__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" octubre__suma__globales__rema octubre__remanentes' id='octubre__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" noviembre__suma__globales__rema noviembre__remanentes' id='noviembre__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td style='vertical-align:middle;'><input type='text' style='width:40px!important;' class='montos__grabados__re montos__grabados__re__de__"+sumadorTransferencias+" diciembre__suma__globales__rema diciembre__remanentes' id='diciembre__transfer__re"+sumadorTransferencias+"' value='"+parseFloat(0).toFixed(2)+"' /></td><td colspan='2'><div style='display:flex; align-items:center;'><input type='text' style='width:40px!important; margin-top:1em;' class='moto__totales__transfer__re monto__rema__"+sumadorTransferencias+" total__totales__t__remanentes'  value='"+parseFloat(0).toFixed(2)+"' readonly=''/>&nbsp;&nbsp;<button class='btn btn-danger' id='eliminarFlujos__"+sumadorTransferencias+"' attr='"+sumadorTransferencias+"' style='margin-top:1em;'><i class='fa fa-trash' aria-hidden='true'></i></button></td></div></tr>");

                        for (var i = 1999; i <= 2026; i++) {
                            $("#aniosRemanentes"+sumadorTransferencias).append("<option value='"+i+"'>"+i+"</option>");;                                         
                        }


                        $("#eliminarFlujos__"+sumadorTransferencias).on('click', function () {

                            let attr=$(this).attr("attr");

                            $(".eliminar__flujos__filas"+attr).remove();

                        });


                        let funcion__sumador__real__dos__tres = function (parametro1, parametro2, parametro3) {

                            let sumadorTransferencias=0;

                            $(parametro1).on('input', function () {

                                let sum = 0;

                                $(parametro3).each(function () {

                                    sum += parseFloat($(this).val());

                                });

                                $(parametro2).val(sum.toFixed(2));


                            });

                        }

                        funcion__sumador__real__dos__tres($("#enero__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#febrero__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#marzo__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#abril__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#mayo__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#junio__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#julio__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#agosto__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#septiembre__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#octubre__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#noviembre__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));
                        funcion__sumador__real__dos__tres($("#diciembre__transfer__re"+sumadorTransferencias),$(".monto__rema__"+sumadorTransferencias),$(".montos__grabados__re__de__"+sumadorTransferencias));

                    });

                }

                $(".contenedor__bodyCMatriz").append('<table><thead><tr><th>ACTIVIDADES</th><th>MONTO EN DÓLARES</th><th>PORCENTAJE</th></tr></thead><tbody class="tabla__referenciadas__exas"></tfooter></table>');

                if (nombre1__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre1__flujo+'</td><td>'+rubro1__flujo+'</td><td>'+parseFloat((parseFloat(rubro1__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }

                if (nombre2__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre2__flujo+'</td><td>'+rubro2__flujo+'</td><td>'+parseFloat((parseFloat(rubro2__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }
 
                if (nombre3__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre3__flujo+'</td><td>'+rubro3__flujo+'</td><td>'+parseFloat((parseFloat(rubro3__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }

                if (nombre4__flujo!=null) {
                     $(".tabla__referenciadas__exas").append('<tr><td>'+nombre4__flujo+'</td><td>'+rubro4__flujo+'</td><td>'+parseFloat((parseFloat(rubro4__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }

                if (nombre5__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre5__flujo+'</td><td>'+rubro5__flujo+'</td><td>'+parseFloat((parseFloat(rubro5__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }

                if (nombre6__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre6__flujo+'</td><td>'+rubro6__flujo+'</td><td>'+parseFloat((parseFloat(rubro6__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr>');
                }

                if (nombre7__flujo!=null) {
                    $(".tabla__referenciadas__exas").append('<tr><td>'+nombre7__flujo+'</td><td>'+rubro7__flujo+'</td><td>'+parseFloat((parseFloat(rubro7__flujo) * 100)/inversion__flujos).toFixed(2)+'</td></tr></tbody><tfooter><tr><th>Total</th><th colspan="2">'+inversion__flujos+'</th></tr>');
                }


                calcular__boton__cinco($("#calcular__final__cinco"));

                 $(".flujo__oculto__transferencias").hide();

                 verOjoContrasenas2($(".ver__flujo__transferencias"),$(".icono__flujo__transferencias"),$(".flujo__oculto__transferencias"),$(".letras__ver__poa__flujos__anexos"));  

                 function concatenarValores__flujos(parametro1){
    
                    var array = new Array(); 

                    $(parametro1).each(function(index) {

                        array.push($(this).val());

                    });

                    return array;

                }

                let guardar__transferencias__ejecutables = function (parametro1) {

                    $(parametro1).on('click', function () {

                        var paqueteDeDatos = new FormData();

                        $("#formularioPdfTransfers").show();

                        paqueteDeDatos.append('tipo','flujo__transferencias');

                        paqueteDeDatos.append('idOrganismo',data[5]);
                        paqueteDeDatos.append('enero__transfer', $('#enero__transfer').prop('value'));
                        paqueteDeDatos.append('febrero__transfer', $('#febrero__transfer').prop('value'));
                        paqueteDeDatos.append('marzo__transfer', $('#marzo__transfer').prop('value'));
                        paqueteDeDatos.append('abril__transfer', $('#abril__transfer').prop('value'));
                        paqueteDeDatos.append('mayo__transfer', $('#mayo__transfer').prop('value'));
                        paqueteDeDatos.append('junio__transfer', $('#junio__transfer').prop('value'));
                        paqueteDeDatos.append('julio__transfer', $('#julio__transfer').prop('value'));
                        paqueteDeDatos.append('agosto__transfer', $('#agosto__transfer').prop('value'));
                        paqueteDeDatos.append('septiembre__transfer', $('#septiembre__transfer').prop('value'));
                        paqueteDeDatos.append('octubre__transfer', $('#octubre__transfer').prop('value'));
                        paqueteDeDatos.append('noviembre__transfer', $('#noviembre__transfer').prop('value'));
                        paqueteDeDatos.append('diciembre__transfer', $('#diciembre__transfer').prop('value'));
                        paqueteDeDatos.append('total__transferidos__tra', $('#total__transferidos__tra').prop('value'));
                        paqueteDeDatos.append('monto__total__transfer__montoTrans__OD', $('#monto__total__transfer__montoTrans__OD').prop('value'));
                        paqueteDeDatos.append('enero__transfer__od', $('#enero__transfer__od').prop('value'));
                        paqueteDeDatos.append('febrero__transfer__od', $('#febrero__transfer__od').prop('value'));
                        paqueteDeDatos.append('marzo__transfer__od', $('#marzo__transfer__od').prop('value'));
                        paqueteDeDatos.append('abril__transfer__od', $('#abril__transfer__od').prop('value'));
                        paqueteDeDatos.append('mayo__transfer__od', $('#mayo__transfer__od').prop('value'));
                        paqueteDeDatos.append('junio__transfer__od', $('#junio__transfer__od').prop('value'));
                        paqueteDeDatos.append('julio__transfer__od', $('#julio__transfer__od').prop('value'));
                        paqueteDeDatos.append('agosto__transfer__od', $('#agosto__transfer__od').prop('value'));
                        paqueteDeDatos.append('septiembre__transfer__od', $('#septiembre__transfer__od').prop('value'));
                        paqueteDeDatos.append('octubre__transfer__od', $('#octubre__transfer__od').prop('value'));
                        paqueteDeDatos.append('noviembre__transfer__od', $('#noviembre__transfer__od').prop('value'));
                        paqueteDeDatos.append('diciembre__transfer__od', $('#diciembre__transfer__od').prop('value'));
                        paqueteDeDatos.append('enero__transfer__od__organismo__cinco', $('#enero__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('febrero__transfer__od__organismo__cinco', $('#febrero__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('marzo__transfer__od__organismo__cinco', $('#marzo__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('abril__transfer__od__organismo__cinco', $('#abril__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('mayo__transfer__od__organismo__cinco', $('#mayo__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('junio__transfer__od__organismo__cinco', $('#junio__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('julio__transfer__od__organismo__cinco', $('#julio__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('agosto__transfer__od__organismo__cinco', $('#agosto__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('septiembre__transfer__od__organismo__cinco', $('#septiembre__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('octubre__transfer__od__organismo__cinco', $('#octubre__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('noviembre__transfer__od__organismo__cinco', $('#noviembre__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('diciembre__transfer__od__organismo__cinco', $('#diciembre__transfer__od__organismo__cinco').prop('value'));
                        paqueteDeDatos.append('cinco__total', $('#cinco__total').prop('value'));

                        let total__totales__t__remanentes = concatenarValores__flujos($(".total__totales__t__remanentes"));
                        let anios__transferencias__remanentes = concatenarValores__flujos($(".anios__transferencias__remanentes"));
                        let enero__remanentes = concatenarValores__flujos($(".enero__remanentes"));
                        let febrero__remanentes = concatenarValores__flujos($(".febrero__remanentes"));
                        let marzo__remanentes = concatenarValores__flujos($(".marzo__remanentes"));
                        let abril__remanentes = concatenarValores__flujos($(".abril__remanentes"));
                        let mayo__remanentes = concatenarValores__flujos($(".mayo__remanentes"));
                        let junio__remanentes = concatenarValores__flujos($(".junio__remanentes"));
                        let julio__remanentes = concatenarValores__flujos($(".julio__remanentes"));
                        let agosto__remanentes = concatenarValores__flujos($(".agosto__remanentes"));
                        let septiembre__remanentes = concatenarValores__flujos($(".septiembre__remanentes"));
                        let octubre__remanentes = concatenarValores__flujos($(".octubre__remanentes"));
                        let noviembre__remanentes = concatenarValores__flujos($(".noviembre__remanentes"));
                        let diciembre__remanentes = concatenarValores__flujos($(".diciembre__remanentes"));

                        paqueteDeDatos.append("total__totales__t__remanentes",JSON.stringify(total__totales__t__remanentes));
                        paqueteDeDatos.append("anios__transferencias__remanentes",JSON.stringify(anios__transferencias__remanentes));
                        paqueteDeDatos.append("enero__remanentes",JSON.stringify(enero__remanentes));
                        paqueteDeDatos.append("febrero__remanentes",JSON.stringify(febrero__remanentes));
                        paqueteDeDatos.append("marzo__remanentes",JSON.stringify(marzo__remanentes));
                        paqueteDeDatos.append("abril__remanentes",JSON.stringify(abril__remanentes));
                        paqueteDeDatos.append("mayo__remanentes",JSON.stringify(mayo__remanentes));
                        paqueteDeDatos.append("junio__remanentes",JSON.stringify(junio__remanentes));
                        paqueteDeDatos.append("julio__remanentes",JSON.stringify(julio__remanentes));
                        paqueteDeDatos.append("agosto__remanentes",JSON.stringify(agosto__remanentes));
                        paqueteDeDatos.append("septiembre__remanentes",JSON.stringify(septiembre__remanentes));
                        paqueteDeDatos.append("octubre__remanentes",JSON.stringify(octubre__remanentes));
                        paqueteDeDatos.append("noviembre__remanentes",JSON.stringify(noviembre__remanentes));
                        paqueteDeDatos.append("diciembre__remanentes",JSON.stringify(diciembre__remanentes));

                        $.ajax({

                            type:"POST",
                            url:"modelosBd/inserta/insertaAcciones.md.php",
                            contentType: false,
                            data:paqueteDeDatos,
                            processData: false,
                            cache: false, 
                            success:function(response){

                                 var elementos=JSON.parse(response);

                                 var mensaje=elementos['mensaje'];

                                if(mensaje==1){

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});

                                 }          

                            },
                            error:function(){

                            }
                                    
                        });                        


                    });

                }            

                guardar__transferencias__ejecutables($("#guardarGenerar"));     


                $(".contenedor__bodyCMatriz").append('<form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="documentoPlanifiacion"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico__planifiacion"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" value="'+data[5]+'"/><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">El POA de la OD esta alineada al Plan Decenal del Deporte Educación Física y Recreación, a la Planificación Estratégica Institucional del Ministerio del Deporte y al Plan Nacional de Desarrollo.</td><td><select class="plan__desecenal obligatorios__tabla ancho__total__input__selects" name="plan__desecenal"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="plan__desecenal__texto" class="plan__desecenal__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">Ejecuta la Planificación anual del personal administrativo, de mantenimiento y técnicos y de servicios amparado en el Código de Trabajo.</td><td><select class="planificacion__anual__administrativos obligatorios__tabla ancho__total__input__selects" name="planificacion__anual__administrativos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="planificacion__anual__administrativos__texto" class="planificacion__anual__administrativos__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Ejecuta la Planificación anual del personal administrativo y técnicos, relacionado a Contratos Civiles de servicios profesionales.</td><td><select class="planificacion__organismos__deportivos obligatorios__tabla ancho__total__input__selects" name="planificacion__organismos__deportivos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="planificacion__organismos__deportivos__texto" class="planificacion__organismos__deportivos__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">La Organización Deportiva no ha creado nuevos puestos de trabajo administrativo, de mantenimiento y técnicos respecto del POA 2022.</td><td><select class="nuevos__puestos__trabajos obligatorios__tabla ancho__total__input__selects" name="nuevos__puestos__trabajos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="nuevos__puestos__trabajos__texto" class="nuevos__puestos__trabajos__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">La Organización Deportiva no ha incrementado Contratos Civiles de servicios profesionales de personal administrativo y técnico respecto del POA 2022.</td><td><select class="increamentado__civiles obligatorios__tabla ancho__total__input__selects" name="increamentado__civiles"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="increamentado__civiles__texto" class="increamentado__civiles__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">La Organización Deportiva no incrementa la masa salarial relacionada al personal administrativo, de mantenimiento y técnicos de servicios respecto del POA 2022.</td><td><select class="deportiva__masa__salaria obligatorios__tabla ancho__total__input__selects" name="deportiva__masa__salaria"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="deportiva__masa__salaria__texto" class="deportiva__masa__salaria__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">7</td><td align="left">La Organización Deportiva no incrementa presupuesto relacionado a honorarios para Contratos Civiles de servicios profesionales de personal administrativo y técnicos respecto del POA 2022.</td><td><select class="puesto__relacionado__honorarios obligatorios__tabla ancho__total__input__selects" name="puesto__relacionado__honorarios"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="puesto__relacionado__honorarios__texto" class="puesto__relacionado__honorarios__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">8</td><td align="left">Si planificó servicios básicos verificar que en la matriz de suministro el número de suministro cuente con informe de aprobación del Ministerio del Deporte.</td><td><select class="sueldos__totales obligatorios__tabla ancho__total__input__selects" name="sueldos__totales"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="sueldos__totales__texto" class="sueldos__totales__texto ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">9</td><td align="left">En caso que planifique seguros de bienes y vehículos presenta el listado de bienes o vehículos con la respectiva cobertura.</td><td><select class="suministros__informes obligatorios__tabla ancho__total__input__selects" name="suministros__informes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="suministros__informes__texto" class="suministros__informes__texto ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div></div></form>');

                $("#idUsuarioEn").val($("#idUsuarioPrincipal").val());
                $("#idOrganismo").val(data[5]);
                $("#fisicamenteEn").val($("#fisicamenteEstructura__na").val());

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-6"><select id="coordinador__enlaces__enviadores" class="ancho__total__input__selects coordinador__enlaces__enviadores"></select></div></div>');

                 $(".contenedor__bodyCMatriz").append('<div class="row d d-flex justify-content-center"><div class="col col-2" style="font-weight:bold;">Subir informe de planificación</div><div class="col col-4"><input type="file" id="archivoFiles" class="archivoFiles" /></div>');

            }else{

				$("#guardaEnvio_coors").show();

			}

			var comprobador1=elementos['comprobador1'];
			var comprobador2=elementos['comprobador2'];
			var comprobador3=elementos['comprobador3'];



            if($("#idRolAd").val()=="4" || $("#idRolAd").val()==4){

                enviarInforPlani($("#guardaEnvio_coors"),data[5],"c");

            }else if ($("#idRolAd").val()=="2" || $("#idRolAd").val()==2){


                selector__cordinadores__a__planificacion($("#coordinador__enlaces__enviadores"));


                let cnabiadores__especiales=function(parametro1,parametro2){

                    $(parametro1).change(function (e){

                        $(parametro2).val($(this).val());

                    });

                }

                cnabiadores__especiales($(".coordinador__enlaces__enviadores"),$("#asignando__estudios"));


                $("#guardaEnvio_coors").click(function (e){

                    e.preventDefault(); 

                    $('.reolad__mMa').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    let confirm= alertify.confirm('¿Está seguro de reasignar el trámite?','¿Está seguro de reasignar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                        confirm.set({transition:'slide'});    

                        confirm.set('onok', function(){ //callbak al pulsar botón positivod

                        let paqueteDeDatos = new FormData();

  

                        paqueteDeDatos.append('tipo',"recomendacion__director__coordinaciones");

                        let idOrganismo=data[5];

                        paqueteDeDatos.append('idOrganismo',idOrganismo);

                        paqueteDeDatos.append('idUsuarioPrincipal',idUsuarioPrincipal);

                        let elaces__escogidos=$("#asignando__estudios").val();

                        paqueteDeDatos.append('idEscogido',elaces__escogidos);


                        $.ajax({

                            type:"POST",
                            url:"modelosBd/inserta/insertaAcciones.md.php",
                            contentType: false,
                            data:paqueteDeDatos,
                            processData: false,
                            cache: false, 
                            success:function(response){

                                var elementos=JSON.parse(response);
                                var mensaje=elementos['mensaje'];

                                if(mensaje==1){

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

                                    window.setTimeout(function(){ 
                                        location.reload();
                                    } ,5000); 

                                }

                            },
                            error:function(){}
                                        
                            }); 

                        });

                        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Acción cancelada", "error", 1, function(){

                                $(parametro1).show();
                                $('.reolad__mMa').html(' ');

                            }); 

                        }); 

                    });


            }else if ($("#idRolAd").val()=="3" || $("#idRolAd").val()==3){

                selector__cordinadores__a__planificacion__treces($("#coordinador__enlaces__enviadores"));


                let cnabiadores__especiales=function(parametro1,parametro2){

                    $(parametro1).change(function (e){


                        let opcionAtributos = $('option:selected',parametro1).attr('attr');

                        $(parametro2).val($(this).val());

                        $("#asignando__estudios__atributos").val(opcionAtributos);

                    });

                }

                cnabiadores__especiales($(".coordinador__enlaces__enviadores"),$("#asignando__estudios"));


                $("#guardaEnvio_coors").click(function (e){

                    e.preventDefault(); 

                    $('.reolad__mMa').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    let confirm= alertify.confirm('¿Está seguro de reasignar el trámite?','¿Está seguro de reasignar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                        confirm.set({transition:'slide'});    

                        confirm.set('onok', function(){ //callbak al pulsar botón positivod

                        let paqueteDeDatos = new FormData();

  
                        paqueteDeDatos.append('tipo',"recomendacion__director__coordinaciones__dos");

                        let idOrganismo=data[5];

                        paqueteDeDatos.append('idOrganismo',idOrganismo);

                        paqueteDeDatos.append('idUsuarioPrincipal',idUsuarioPrincipal);

                        let elaces__escogidos=$("#asignando__estudios").val();

                        let asignando__estudios__atributos=$("#asignando__estudios__atributos").val();

                        paqueteDeDatos.append('idEscogido',elaces__escogidos);

                        paqueteDeDatos.append('asignando__estudios__atributos',asignando__estudios__atributos);

                        paqueteDeDatos.append('archivo', $("#archivoFiles")[0].files[0]);


                        $.ajax({

                            type:"POST",
                            url:"modelosBd/inserta/insertaAcciones.md.php",
                            contentType: false,
                            data:paqueteDeDatos,
                            processData: false,
                            cache: false, 
                            success:function(response){

                                var elementos=JSON.parse(response);
                                var mensaje=elementos['mensaje'];

                                if(mensaje==1){

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

                                    window.setTimeout(function(){ 
                                        location.reload();
                                    } ,5000); 

                                }

                            },
                            error:function(){}
                                        
                            }); 

                        });

                        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

                            alertify.set("notifier","position", "top-center");
                            alertify.notify("Acción cancelada", "error", 1, function(){

                                $(parametro1).show();
                                $('.reolad__mMa').html(' ');

                            }); 

                        }); 

                    });

            }


			if (comprobador1==false || comprobador2==false || comprobador3==false) {

				$("#enviarFinal").hide();


				if(comprobador2==false && !$(".cont--fn").length > 0 ){

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 cont--fn" style="text-align:justify;">Falta la generación del informe de la "COORDINACIÓN DE INFRAESTRUCTURA"</div>');

				}

				if(comprobador1==false && !$(".cont--fn2").length > 0 ){

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 cont--fn2" style="text-align:justify;">Falta la generación del informe de la "COORDINACIÓN  FINANCIERA"</div>');

				}

				if(comprobador3==false && !$(".cont--fn3").length > 0 ){


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 cont--fn3" style="text-align:justify;">Falta la generación del informe de la "SUBSECRETARÍA"</div>');


				}


			}

            if ($("#idRolAd").val()==4) {

    			if(!$(".nuevos__filas__a").length > 0 ){


                    $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__documentos__devolver__areas text-center creados__letter" style="font-weight:bold; font-size:15px;">Devolver</div><div class="col col-6"><button class="ver__devolver__areas btn btn-warning creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton__devolver__areas"></i></button></div>');

    				$(".contenedor__bodyCMatriz").append('<div class="col col-12 row nuevos__filas__a" style="position:relative; left:5%;"><div class="col col-4 devolver__areas"><button class="btn btn-primary" id="devolverSub">DEVOLVER SUBSECRETARÍA</button></div><div class="col col-4 devolver__areas"><button class="btn btn-info" id="devolverInstalciones">DEVOLVER INSTALACIONES</button></div><div class="col col-4 devolver__areas"><button class="btn btn-secondary" id="devolverFinanciero">DEVOLVER FINANCIERO</button></div></div>');

    				enviarDevuelto__plani($("#devolverSub"),data[5],"subsecretaria");
    				enviarDevuelto__plani($("#devolverInstalciones"),data[5],"instalaciones");
    				enviarDevuelto__plani($("#devolverFinanciero"),data[5],"financiero");

                    $(".devolver__areas").hide();

                    verOjoContrasenas2($(".ver__devolver__areas"),$(".icono__boton__devolver__areas"),$(".devolver__areas"),$(".letras__ver__poa__documentos__devolver__areas"));


    			}

            }


			var actividad1__en=elementos['actividad1__en'];
			var actividad2__en=elementos['actividad2__en'];
			var actividad3__en=elementos['actividad3__en'];

			if (actividad1__en=="null" || actividad1__en==null) {
				$("#devolverFinanciero").hide();
			}

			if (actividad2__en=="null" || actividad2__en==null) {
				$("#devolverInstalciones").hide();
			}

			if (actividad3__en=="null" || actividad3__en==null) {
				$("#devolverSub").hide();
			}

			});

		},
		error:function(){

		}

	});

  });

}

/*=====  End of Actualizar valores coordinadores  ======*/



var funcion__datatabletsEliminar2=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","a.itemsEscogidosEliminar",function(e){

  	e.preventDefault();

  	var boton=$(this);

  	$(boton).hide();

  	var data=table.row($(this).parents("tr")).data();


	var confirm= alertify.confirm('¿Está seguro de eliminar?','¿Está seguro de eliminar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','eliminasItemsFin');	
		paqueteDeDatos.append('idEnviado2',data[15]);
			  
		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/eliminaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

		      	var elementos=JSON.parse(response);

		      	var mensaje=elementos['mensaje'];

				if(mensaje==1){

					alertify.set("notifier","position", "top-center");
					alertify.notify("Registro eliminado", "success", 4, function(){});

					table.ajax.reload();

		      	}

			},
			error:function(){

			}
				
		});		    

	});

	confirm.set('oncancel', function(){ 

		alertify.set("notifier","position", "top-center");
		alertify.notify("Acción cancelada", "error", 1, function(){

			$(boton).show();

		}); 

	});   


  });

}

/*==========================================================
=            Función instalaciones recomendados            =
==========================================================*/

var funcion__ReasingarTraReInstala=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);

				if (fisicamenteE==24 || fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorRecomen_coorI($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}

				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				var variableNotificaciones="instalaciones";


				enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A",variableNotificaciones);

			});

		},
		error:function(){

		}
				
	});		



  });

}



/*=====  End of Función instalaciones recomendados  ======*/


/*===========================================================
=            Función administrativo recomendados            =
===========================================================*/

var funcion__ReasingarTraReAdminis=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);

				if (fisicamenteE==24 || fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if($("#idRolAd").val()==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorRecomen_coorAdminis($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}

				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				var variableNotificaciones="administrativo";


				enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A",variableNotificaciones);

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Función administrativo recomendados  ======*/

/*====================================================================
=            Función reasignar recomendados instalaciones            =
====================================================================*/

var funcionReasingarTraCoordinas__instalaciones=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);



				var idRolE=$("#idRolAd").val();

				if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCor($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				}


				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}


				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

				enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A","subsesAsigna__corInstalaciones");

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Función reasignar recomendados instalaciones  ======*/


/*============================================================
=            Función reasignar recomendados finan            =
============================================================*/

var funcionReasingarTraCoordinas__financs=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


                $(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

                $(".elementosCreados__M").hide();


                for (c of obtenerInformacion) {

                    $(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


                }


                execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

                verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

                if (obtenerAcCa!="") {

                    if (!$(".respon__tramites").length > 0 ) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center respon__tramites" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

                        for (d of obtenerAcCa) {

                            $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center respon__tramites" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6 respon__tramites"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row respon__tramites"></div>');

                            verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

                        }

                    }

                }

                var idRolE=$("#idRolAd").val();

                if (!$(".respon__tramites__2").length > 0 ) {

                    if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

                    }else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-cente respon__tramites__2r" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelectorCorFunCorFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

                    }else if (fisicamenteE==26) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

                    }else if(fisicamenteE==24){


                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


                    }else if(fisicamenteE==1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

                        subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


                    }else if(fisicamenteE==2){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

                        subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


                    }else if($("#idRolAd").val()!=3){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center respon__tramites__2" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__2"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

                    }

                }


                if (!$(".documento__unico").length > 0 ) {

                    if ($("#idRolAd").val()!=3) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 documento__unico" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 documento__unico"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

                    }

                    if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

                        $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center documento__unico" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

                    }

                     $(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center documento__unico" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center documento__unico" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

                 }

                enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A","subsesAsigna__corFinans");


                console.log(data);


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Función reasignar recomendados finan  ======*/


/*===================================================================
=            Función reasignar recomendados subess zonal            =
===================================================================*/

var funcionReasingarTraCoordinas__subsess=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){



  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');


				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

				console.log(data);


				var idRolE=$("#idRolAd").val();

				if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorSucenrFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				} 				


				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}

				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

				}

				if (obtenerInformacionObservaciones!="") {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


					for (dLC of obtenerInformacionObservaciones) {

						$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

					}

					$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


				}

				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');


				enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","N/A","subsesAsigna__cor");

			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Función reasignar recomendados subess zonal  ======*/

/*================================================
=            Funcion reasignar infras       e     =
================================================*/

var funcion__datatabletsReasignarTraRe__infras=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

                var instalacionesE__variables=elementos['instalacionesE__variables'];
                var instalacionesE2__variables=elementos['instalacionesE2__variables'];


                var documentosInfra__variables=elementos['documentosInfra__variables'];
                var documentosInstala__variables=elementos['documentosInstala__variables'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();

				
                if (data[9]!=undefined && data[9]!=null && data[9]!="" && data[9]!=" ") {


                let zonal1 = data[9].indexOf("__27__4.pdf");
                let zonal2 = data[9].indexOf("__28__4.pdf");
                let zonal3 = data[9].indexOf("__29__4.pdf");
                let zonal4 = data[9].indexOf("__30__4.pdf");
                let zonal6 = data[9].indexOf("__31__4.pdf");
                let zonal7 = data[9].indexOf("__32__4.pdf");
                let zonal8 = data[9].indexOf("__33__4.pdf");


                if (!$(".respon__tramites").length > 0 ) {

                    if (zonal1 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 1</div>');

                    }else if(zonal2 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 2</div>');

                    }else if(zonal3 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 3</div>');
                        
                    }else if(zonal4 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 4</div>');
                        
                    }else if(zonal6 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 6</div>');
                        
                    }else if(zonal7 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 7</div>');
                        
                    }else if(zonal8 !== -1){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 8</div>');
                        
                    }

                    $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter respon__tramites" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6 respon__tramites"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


                    $(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M respon__tramites"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M respon__tramites" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

                    $(".elementosCreados__M").hide();

                    for (c of obtenerInformacion) {

                        $(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


                    }

                    execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

                    verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));


                }



                }

                if (!$(".analizares__fuego").length > 0 ) {

				if (obtenerAcCa!="") {


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center analizares__fuego" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					for (d of obtenerAcCa) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center analizares__fuego" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

						verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

					}


				}

                }

				console.log(data);

                if (!$(".respon__tramites__dos").length > 0 ) {

                    if (fisicamenteE==24 || fisicamenteE==26) {

                        $(".contenedor__bodyCMatriz").append('<div class="row respon__tramites__dos"><div class="col col-4 text-center respon__tramites__dos" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__dos"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

                        subsecretariasSelectorRecomen($(".alto__fisiR"),$("#idUsuarioC").val());

                    }else if($("#idRolAd").val()==4){

                        if (fisicamenteE==1) {
        
                            if ((instalacionesE__variables==$("#idUsuarioC").val() || instalacionesE__variables=="NC") && (instalacionesE2__variables==$("#idUsuarioC").val() || instalacionesE2__variables=="NC")) {

                            }else{

                                // $("#enviarTramiteRecomendado").remove();

                            }

                        }

                        $(".contenedor__bodyCMatriz").append('<div class="row respon__tramites__dos"><div class="col col-4 text-center respon__tramites__dos" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__dos"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

                        subsecretariasSelectorRecomen_coorIn($(".alto__fisiR"),$("#idUsuarioC").val());

                    }else if($("#idRolAd").val()!=3){

                        $(".contenedor__bodyCMatriz").append('<div class="row respon__tramites__dos"><div class="col col-4 text-center respon__tramites__dos" style="font-weight:bold;">Asignar a</div><div class="col col-8 respon__tramites__dos"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

                        funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

                    }

                }

                if (!$(".respon__tramites__tres").length > 0 ) {

                    if ($("#idRolAd").val()!=3) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 respon__tramites__tres" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 respon__tramites__tres"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

                    }


                    // if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

                        if (fisicamenteE==1) {


                            if (instalacionesE__variables=="NC") {

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;">NO CORRESPONDE INFRAESTRUCTURA</div><br><br>');

                            }else if(documentosInfra__variables!=null && documentosInfra__variables!="" && documentosInfra__variables!=" "){

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+documentosInfra__variables+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico infraesctructura</a></div><br><br>');

                                 $(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center respon__tramites__tres" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico de infraestructura con su firma</div><div class="respon__tramites__tres col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivosInfraestructuras" name="pdfArchivosInfraestructuras"/></div></div>');

                            }else{

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;">NO PRESENTA INFRAESTRUCTURA</div><br><br>');

                            }

                            if (instalacionesE2__variables=="NC") {

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;">NO CORRESPONDE INSTALACIONES</div><br><br>');

                            }else if(documentosInstala__variables!=null && documentosInstala__variables!="" && documentosInstala__variables!=" "){

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+documentosInstala__variables+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico instalaciones</a></div><br><br>');

                                 $(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center respon__tramites__tres" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico de instalaciones con su firma</div><div class="respon__tramites__tres col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

                            }else{

                                $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;">NO PRESENTA INSTALACIONES</div><br><br>');

                            }

                        }else{

                            $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center respon__tramites__tres" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

                             $(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center respon__tramites__tres" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="respon__tramites__tres col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

                        }

                    // }



                    enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val(),documentosInfra__variables,documentosInstala__variables],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","infrasEspecificos"); 

                }




			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Funcion reasignar infras  ======*/

/*=============================================================
=            Reasignar recomendados talento humano            =
=============================================================*/

var funcion__datatabletsReasignarTraRe__talento=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();

				let zonal1 = data[9].indexOf("__27__4.pdf");
				let zonal2 = data[9].indexOf("__28__4.pdf");
				let zonal3 = data[9].indexOf("__29__4.pdf");
				let zonal4 = data[9].indexOf("__30__4.pdf");
				let zonal6 = data[9].indexOf("__31__4.pdf");
				let zonal7 = data[9].indexOf("__32__4.pdf");
				let zonal8 = data[9].indexOf("__33__4.pdf");

				if (!$(".respon__tramites").length > 0 ) {

					if (zonal1 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 1</div>');

					}else if(zonal2 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 2</div>');

					}else if(zonal3 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 3</div>');
						
					}else if(zonal4 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 4</div>');
						
					}else if(zonal6 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 6</div>');
						
					}else if(zonal7 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 7</div>');
						
					}else if(zonal8 !== -1){

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 respon__tramites" style="font-weight:bold; font-size:15px; text-align:center;">TRÁMITE ENVIADO DESDE LA ZONAL 8</div>');
						
					}

				}

				if (!$(".ver__Tabla").length > 0 ) {


					// $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


					// $(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					// $(".elementosCreados__M").hide();

					// for (c of obtenerInformacion) {

					// 	$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					// }

					// execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					// verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				}



				if (!$(".actividades__rotulandos").length > 0 ) {

					if (obtenerAcCa!="") {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center actividades__rotulandos" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

						for (d of obtenerAcCa) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}


					}

					console.log(data);

				}


				if (!$(".alto__fisiR").length > 0 ) {

					if (fisicamenteE==24 || fisicamenteE==26) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorRecomen($(".alto__fisiR"),$("#idUsuarioC").val());

					}else if($("#idRolAd").val()==4){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorRecomen_coorTalento($(".alto__fisiR"),$("#idUsuarioC").val());

					}else if($("#idRolAd").val()!=3){

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					}

				}

				if (!$(".observa__necesarios").length > 0 ) {

					if ($("#idRolAd").val()!=3) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 observa__necesarios" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

					}

					if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

						$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

					}

				}

				if (!$(".informe__tecnicos__recomiendas").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center informe__tecnicos__recomiendas" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');

					enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni","talentosHumanos");

				}


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Reasignar recomendados talento humano  ======*/


/*======================================================
=            Función reasignar Recomendados            =
======================================================*/

var funcion__datatabletsReasignarTraRe=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

                var documentoAdministrativo=elementos['documentoAdministrativo'];
                var documentoSubsess=elementos['documentoSubsess'];
                var documentoCompras=elementos['documentoCompras'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


                if (!$(".nuevos__unicos").length > 0) {

    				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter nuevos__unicos" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6 nuevos__unicos"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


    				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');



                    $(".elementosCreados__M").hide();

                    for (c of obtenerInformacion) {

                        $(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


                    }

                    execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

                    verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));


                }

                if (!$(".nuevos__unicos__2").length > 0 ) {


                    if (obtenerAcCa!="") {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center nuevos__unicos__2" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

                        for (d of obtenerAcCa) {

                            $(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

                            verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

                        }


                    }

                }



				console.log(data);

                if (!$(".nuevos__unicos__3").length > 0 ) {

                    if (fisicamenteE==24 || fisicamenteE==26) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center nuevos__unicos__3" style="font-weight:bold;">Asignar a</div><div class="col col-8 nuevos__unicos__3"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelectorRecomen($(".alto__fisiR"),$("#idUsuarioC").val());

                    }else if($("#idRolAd").val()==4){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center nuevos__unicos__3" style="font-weight:bold;">Asignar a</div><div class="col col-8 nuevos__unicos__3"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        subsecretariasSelectorRecomen_coorI($(".alto__fisiR"),$("#idUsuarioC").val());

                    }else if($("#idRolAd").val()!=3){

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center nuevos__unicos__3" style="font-weight:bold;">Asignar a</div><div class="col col-8 nuevos__unicos__3"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

                        funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

                    }

                }

                if (!$(".nuevos__unicos__4").length > 0 ) {

    				if ($("#idRolAd").val()!=3) {

    					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 nuevos__unicos__4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 nuevos__unicos__4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

    				}

    				if (data[9]!=" " && data[9]!=undefined && data[9]!=null) {

                        if ($("#fisicamenteE").val()==5) {

    					   $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center nuevos__unicos__4" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+documentoAdministrativo+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

                        }else{

                            $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center nuevos__unicos__4" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/informesTecnicos/'+data[9]+'" target="_blank" style="text-transform:uppercase;">Descargue dando click aquí el Informe técnico</a></div><br><br>');

                        }

    				}

                    if ($("#fisicamenteE").val()==5 || $("#fisicamenteE").val()==2) {

                        $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-12 text-center d d-flex justify-content-center nuevos__unicos__4" style="tex-transform:uppercase!important; margin-top:2em!important;"><a href="documentos/comprasPublicas/'+documentoAdministrativo+'" target="_blank" style="text-transform:uppercase;">Descargue el catalogo  dando click aquí</a></div><br><br>');

                    }



    				$(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center nuevos__unicos__4" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir el informe técnico con su firma</div><div class="col col-8 d d-flex justify-content-center nuevos__unicos__4" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div>');


                    if ($("#fisicamenteE").val()==5 || $("#fisicamenteE").val()==2) {

                        $(".contenedor__bodyCMatriz").append('<div class="col col-4 d d-flex justify-content-center nuevos__unicos__4" style="font-weight:bold; position:relative; top:2em; margin-bottom:2em;">Subir compras públicas</div><div class="col col-8 d d-flex justify-content-center nuevos__unicos__4" style="position:relative; top:2em; margin-bottom:2em;"><input type="file" id="pdfGenerados__catalogos" name="pdfGenerados__catalogos"/></div></div>');
                        
                    }


    				enviarTramitesGenerados($("#enviarTramiteRecomendado"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","recomendadoUni");

                }

			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of Función reasignar Recomendados  ======*/

/*==============================================================
=            Modificaciones recibidas planificacion            =
==============================================================*/

var funcion__datatabletsReasignarTraGene__modificaciones=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites__modificaciones",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite").hide();
  	
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

  	var idRolAd=$("#idRolAd").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__modificas');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	paqueteDeDatos.append('idRolAd',idRolAd);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');



				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (!$("#indicador__creaciones").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;" id="indicador__creaciones">Indicadores</div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Actividad - indicador</div><div class="col col-2 text-center" style="font-weight:bold;">Primer trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Segundo Trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Tercer trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Cuarto trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Meta indicador</div>');

					for (z of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center">'+z.indicador+'</div><div class="col col-2 text-center">'+z.primertrimestre+'</div><div class="col col-1 text-center">'+z.segundotrimestre+'</div><div class="col col-1 text-center">'+z.tercertrimestre+'</div><div class="col col-2 text-center">'+z.cuartotrimestre+'</div><div class="col col-2 text-center">'+z.metaindicador+'</div>');


					}				


				}

				if (obtenerAcCa!="") {

					if (!$("#rotulo__ac").length > 0 ) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" id="rotulo__ac" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

					}

					for (d of obtenerAcCa) {

						if (!$(".ver__matrices"+d.idActividades).length > 0 ) {
						  

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__2 text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val(),true);

						}						

					}


				}

				


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Modificaciones recibidas planificacion  ======*/


/*====================================================
=            General Tramites reasignados            =
====================================================*/

var funcion__datatabletsReasignarTraGene=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite").hide();
  	
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

  	var idRolAd=$("#idRolAd").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	paqueteDeDatos.append('idRolAd',idRolAd);


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];
				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa__na text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');



				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();

				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				if (!$(".sumado__indicadores").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center sumado__indicadores" style="font-size:14px; font-weight:bold;">Indicadores</div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Actividad - indicador</div><div class="col col-2 text-center" style="font-weight:bold;">Primer trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Segundo Trimestre</div><div class="col col-1 text-center" style="font-weight:bold;">Tercer trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Cuarto trimestre</div><div class="col col-2 text-center" style="font-weight:bold;">Meta indicador</div>');


					for (z of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center">'+z.indicador+'</div><div class="col col-2 text-center">'+z.primertrimestre+'</div><div class="col col-1 text-center">'+z.segundotrimestre+'</div><div class="col col-1 text-center">'+z.tercertrimestre+'</div><div class="col col-2 text-center">'+z.cuartotrimestre+'</div><div class="col col-2 text-center">'+z.metaindicador+'</div>');


					}				


					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						for (var i = 0 ; i<arreglo.length; i++) {
							

							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center"><a href="documentos/anexosPoa/'+arreglo[i]+'" target="_blank">'+arreglo[i]+'</a></div>');

						}


					}

				}

				if (obtenerAcCa!="") {

					if (!$("#rotulo__ac").length > 0 ) {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-size:14px; font-weight:bold;" id="rotulo__ac">ACTIVIDADES A ANALIZAR</div><br><br>');

					}

					for (d of obtenerAcCa) {

						if (!$(".ver__matrices"+d.idActividades).length > 0 ) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}

					}


				}

				


			});

		},
		error:function(){

		}
				
	});		



  });

}


/*=====  End of General Tramites reasignados  ======*/


/*=========================================================
=            Acciones reasignar coordinaciones            =
=========================================================*/

var funcion__datatabletsReasignarTraCoordinas=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsessCoordina');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				var obtenerInformacionPre=elementos['obtenerInformacionPre'];

				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];


				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				if (!$(".anexos__descubiertos").length > 0 ) {


					$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


					$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					$(".elementosCreados__M").hide();


					for (c of obtenerInformacion) {

						$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					}

					execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center anexos__descubiertos" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						let contador__Doc=0;

						let banderaDi=false;

						for (var i = 0 ; i<arreglo.length; i++) {


							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center doc__anexos" id="doc__fila'+contador__Doc+'"><a href="documentos/anexosPoa/'+arreglo[i]+'" target="_blank" id="enlace__'+contador__Doc+'">Documento '+(i+1)+": "+arreglo[i]+'</a></div>');


							if(banderaDi==false){

								$("#doc__fila"+i).attr('style','background-color: rgba(33,42,92,.95)!important;');

								$("#enlace__"+i).attr('style','color:white;');

								banderaDi=true;

							}else{

								$("#doc__fila"+i).attr('style','background-color: var(--bs-white)!important;');

								$("#enlace__"+i).attr('style','color:#212121;');

								banderaDi=false;

							}
							

							contador__Doc++;

						}


					}

				}


				if (!$(".planificador__indicadores").length > 0 ) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center planificador__indicadores" style="font-size:14px; font-weight:bold;">Planificación de indicadores</div><br><br>');

					

					for (dLCIn of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center mb-0" style="font-weight:bold; text-align:justify; color: rgba(33,42,92,.95);">'+dLCIn.indicador+'</div><hr><div class="col col-2" style="">I Trimestre: '+dLCIn.primertrimestre+'</div><div class="col col-2" style="">II Trimestre: '+dLCIn.segundotrimestre+'</div><div class="col col-2" style="">III Trimestre: '+dLCIn.tercertrimestre+'</div><div class="col col-2" style="">IV Trimestre: '+dLCIn.cuartotrimestre+'</div><div class="col col-4" style="">Meta Anual del indicador: '+dLCIn.metaindicador+'</div><br><br>');

					}

				}


				if (!$(".analizas__actis").length > 0 ) {
				 
					if (obtenerAcCa!="") {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center analizas__actis" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

						for (d of obtenerAcCa) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}


					}


				}

				if (!$(".observaciones__in").length > 0 ) {


				if (obtenerInformacionObservaciones!="") {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center observaciones__in" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


					for (dLC of obtenerInformacionObservaciones) {

						$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

					}

					$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


				}

				}


				console.log(data);

				var idRolE=$("#idRolAd").val();


				if (!$("#checksDesicion").length > 0 ) {

				if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorSucenrFin($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

				}else if (fisicamenteE==26) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

				}else if(fisicamenteE==24){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==1){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

					subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if(fisicamenteE==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());


				}else if($("#idRolAd").val()!=3){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

				} 



				if ($("#idRolAd").val()!=3) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

				}


				}


				if (!$(".generarDocumento").length > 0 ) {


				if ($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==27 ||  $("#fisicamenteE").val()==28 ||  $("#fisicamenteE").val()==29 ||  $("#fisicamenteE").val()==30 ||  $("#fisicamenteE").val()==31 ||  $("#fisicamenteE").val()==32 ||  $("#fisicamenteE").val()==33)) {



					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="subFisica"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">La meta anual del indicador coincide  con el No. de eventos planificados  en el PDA</td><td><select class="numerosEventosPlanificadosPda obligatorios__tabla ancho__total__input__selects" name="numerosEventosPlanificadosPda"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_numerosEventosPlanificadosPda" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">Utiliza la sintaxis clara (verbos en infinitivo) para el registro de los eventos</td><td><select class="sintaxis__clara obligatorios__tabla ancho__total__input__selects" name="sintaxis__clara"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_sintaxis__clara" class="text_sintaxis__clara ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Presenta el certificado de validación de eventos, registrados en el PDA suscrito por el director técnico metodológico (solo provinciales)</td><td><select class="validacionEventos obligatorios__tabla ancho__total__input__selects" name="validacionEventos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_validacionEventos" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">Detalla satisfactoriamente la contratación o  adquisición de bienes o servicios orientados al fomento deportivo de acuerdo a la característica del deporte (implementación deportiva) con la debida justificación técnica</td><td><select class="detalleContratacion obligatorios__tabla ancho__total__input__selects" name="detalleContratacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleContratacion" class="text_detalleContratacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">No se han incrementado nuevos puestos de trabajo de técnicos en relación de dependencia con respecto al POA OD 2022</td><td><select class="nuevosPuestos obligatorios__tabla ancho__total__input__selects" name="nuevosPuestos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_nuevosPuestos" class="text_nuevosPuestos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">Justifica satisfactoriamente la contratación de personal técnico bajo la modalidad de contratos de servicios de honorarios profesionales</td><td><select class="justificaTecnico obligatorios__tabla ancho__total__input__selects" name="justificaTecnico"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificaTecnico" class="text_justificaTecnico ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">7</td><td align="left">En caso que planifique bienes de larga duración presenta el informe justificado de acuerdo a la característica del deporte para implementación deportiva, equipos tecnológicos y electrónicos</td><td><select class="bienesLarga obligatorios__tabla ancho__total__input__selects" name="bienesLarga"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_bienesLarga" class="text_bienesLarga ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">8</td><td align="left">Planifica seguros contra accidentes, vida y de salud para los deportistas que participarán en los eventos deportivos.</td><td><select class="seguroAccidentes obligatorios__tabla ancho__total__input__selects" name="seguroAccidentes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_seguroAccidentes" class="text_seguroAccidentes ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">9</td><td align="left">Detalla las especificaciones de la implementación y equipamiento deportivo que sea adquirido por cada deporte beneficiario y demuestre la no duplicidad en el presente año fiscal</td><td><select class="detalleImplementacion obligatorios__tabla ancho__total__input__selects" name="detalleImplementacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleImplementacion" class="text_detalleImplementacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">10</td><td align="left">La Planificación Operativa Anual del Organismo Deportivo se encuentra enmarcada en lo establecido en el Acuerdo Ministerial 456 y el Acuerdo Ministerial 457</td><td><select class="acuerdoEnmarcado obligatorios__tabla ancho__total__input__selects" name="acuerdoEnmarcado"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_acuerdoEnmarcado" class="text_acuerdoEnmarcado ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-warning generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;GENERAR CALIFICACIÓN</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();

						
				}

				}



				if ($("#idRolAd").val()==3){

					$("#idOrganismo").val($(".idOrganismoM").val());

					$("#fisicamenteEn").val("subsecretariaSubse");

					$("#idUsuarioEn").val($("#idUsuarioC").val());

					$("#enviarTramite").hide();
						
				}



				if($("#idRolAd").val()==3){

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					$(".observaciones__nestD").hide();

					$(".contenedor__reasignaciones").hide();

					segmentosSelectsCOncendidos($(".alto__fisiR"),$(".observaciones__nestD"));

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$("#generarDocumento"));

				}

				enviarTramitesGeneradosSubsess($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","N/A","N/A","corrdinacionSubsecc");

				enviarTramitesGeneradosSubsess($(".enviar__rFuncionarios"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento",false,"no__tramite");


			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones reasignar coordinaciones  ======*/

/*=====================================================
=            Acciones rechazar financieras            =
=====================================================*/

var funcion__datatabletsReasignarTra__finan__rechazas=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  	$("#enviarTramite__Financiero__rechazos").hide();


  	console.log(data);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__finan__rechazos');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerInformacion__docus=elementos['obtenerInformacion__docus'];
				var obtenerInformacion__docus__observas=elementos['obtenerInformacion__docus__observas'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();


				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();


				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">Documentos</div>');

	
				for (d of obtenerInformacion__docus) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="polizaOriginal" name="polizaOriginal"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__polizaOriginal" name="observa__polizaOriginal" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="caucionOrginal" name="caucionOrginal"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__caucionOrginal" name="observa__caucionOrginal" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copiaCertificadoBancario" name="copiaCertificadoBancario"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copiaCertificadoBancario" name="observa__copiaCertificadoBancario" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copiaRegistroD" name="copiaRegistroD"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copiaRegistroD" name="observa__copiaRegistroD" ></textarea style="border:none!important;" disabled="disabled"></div>');

					if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_adminFinanciero" name="copia_adminFinanciero"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_adminFinanciero" name="observa__copia_adminFinanciero" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}

					if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_adminGeneral" name="copia_adminGeneral"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_adminGeneral" name="observa__copia_adminGeneral" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}

					if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia__registroIn" name="copia__registroIn"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia__registroIn" name="observa__copia__registroIn" ></textarea style="border:none!important;" disabled="disabled"></div>');
					}
						
					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_acuerdoRegistro" name="copia_acuerdoRegistro"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_acuerdoRegistro" name="observa__copia_acuerdoRegistro" ></textarea style="border:none!important;" disabled="disabled"></div>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a><select style="border:none!important;" disabled="disabled" class="col col-2" id="copia_ruc" name="copia_ruc"><option value="A">Aprobado</option><option value="r">Rechazado</option><option value="p">Rechazado</option></select style="border:none!important;" disabled="disabled"><textarea style="border:none!important;" disabled="disabled" class="col col-4" id="observa__copia_ruc" name="observa__copia_ruc" ></textarea style="border:none!important;" disabled="disabled"></div>');

				}

				for (c of obtenerInformacion__docus__observas) {

					$("#polizaOriginal").val(c.polizaOriginal);
					$("#caucionOrginal").val(c.caucionOrginal);
					$("#copiaCertificadoBancario").val(c.copiaCertificadoBancario);
					$("#copiaRegistroD").val(c.copiaRegistroD);
					$("#copia_adminFinanciero").val(c.copia_adminFinanciero);
					$("#copia_adminGeneral").val(c.copia_adminGeneral);
					$("#copia__registroIn").val(c.copia__registroIn);
					$("#copia_acuerdoRegistro").val(c.copia_acuerdoRegistro);
					$("#copia_ruc").val(c.copia_ruc);


					$("#observa__polizaOriginal").val(c.observa__polizaOriginal);
					$("#observa__caucionOrginal").val(c.observa__caucionOrginal);
					$("#observa__copiaCertificadoBancario").val(c.observa__copiaCertificadoBancario);
					$("#observa__copiaRegistroD").val(c.observa__copiaRegistroD);
					$("#observa__copia_adminFinanciero").val(c.observa__copia_adminFinanciero);
					$("#observa__copia_adminGeneral").val(c.observa__copia_adminGeneral);
					$("#observa__copia__registroIn").val(c.observa__copia__registroIn);
					$("#observa__copia_acuerdoRegistro").val(c.observa__copia_acuerdoRegistro);
					$("#observa__copia_ruc").val(c.observa__copia_ruc);




				}
			
			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones rechazar financieras  ======*/


/*============================================================
=            Acciones reasignar Trans financieros            =
============================================================*/

var funcion__datatabletsReasignarTra__finan=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);


  	console.log(data);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess__finan');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerInformacion__docus=elementos['obtenerInformacion__docus'];
				var obtenerInformacion__docus__negados=elementos['obtenerInformacion__docus__negados'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();




				$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

				$(".elementosCreados__M").hide();


				for (c of obtenerInformacion) {

					$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


				}

				execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

				verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));

				$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center" style="font-weight:bold;">Documentos a analizar</div>');

				if($("#idRolAd").val()!=3){

					for (d of obtenerInformacion__docus) {

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a>');

						if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a>');
						}

						if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a>');
						}

						if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
							$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a>');
						}
						
						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a>');

						$(".contenedor__bodyCMatriz").append('<a class="col col-12 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a>');


					}

				}else{

					for (d of obtenerInformacion__docus) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/polizaOriginal/'+d.polizaOriginal+'" target="_blank">1) Póliza original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select class="col col-2" id="polizaOriginal" name="polizaOriginal"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__polizaOriginal" name="observa__polizaOriginal" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/caucionOrginal/'+d.caucionOrginal+'" target="_blank">2) Caución original con vigencia de por lo menos 18 meses, garantizando mínimo el 10% del recurso aprobado;</a><select class="col col-2" id="caucionOrginal" name="caucionOrginal"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__caucionOrginal" name="observa__caucionOrginal" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaCertificadoBancario/'+d.copiaCertificadoBancario+'" target="_blank">3) Copia del certificado bancario;</a><select class="col col-2" id="copiaCertificadoBancario" name="copiaCertificadoBancario"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copiaCertificadoBancario" name="observa__copiaCertificadoBancario" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copiaRegistroD/'+d.copiaRegistroD+'" target="_blank">4) Copia de registro de Directorio actualizado y vigente;</a><select class="col col-2" id="copiaRegistroD" name="copiaRegistroD"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copiaRegistroD" name="observa__copiaRegistroD" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						if (d.copia_adminFinanciero!="" && d.copia_adminFinanciero!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminFinanciero/'+d.copia_adminFinanciero+'" target="_blank">5) Copia del registro de Administrador Financiero actualizado y vigente, solo si aplica;</a><select class="col col-2" id="copia_adminFinanciero" name="copia_adminFinanciero"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_adminFinanciero" name="observa__copia_adminFinanciero" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}

						if (d.copia_adminGeneral!="" && d.copia_adminGeneral!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_adminGeneral/'+d.copia_adminGeneral+'" target="_blank">6) Copia del registro de Administrador General actualizado y vigente; solo si aplica;</a><select class="col col-2" id="copia_adminGeneral" name="copia_adminGeneral"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_adminGeneral" name="observa__copia_adminGeneral" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}

						if (d.copia__registroIn!="" && d.copia__registroIn!=null) {
							$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia__registroIn/'+d.copia__registroIn+'" target="_blank">7) Copia del registro de Intervención actualizado y vigente, solo si aplica;</a><select class="col col-2" id="copia__registroIn" name="copia__registroIn"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia__registroIn" name="observa__copia__registroIn" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');
						}
						
						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_acuerdoRegistro/'+d.copia_acuerdoRegistro+'" target="_blank">8) Copia del Acuerdo de registro de estatutos vigente;</a><select class="col col-2" id="copia_acuerdoRegistro" name="copia_acuerdoRegistro"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_acuerdoRegistro" name="observa__copia_acuerdoRegistro" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 row bloques__financieros__documentos"><a class="col col-6 text-left bloques__financieros__documentos" href="documentos/financiero/copia_ruc/'+d.copia_ruc+'" target="_blank">9) Copia del RUC actualizado, vigente y activo;</a><select class="col col-2" id="copia_ruc" name="copia_ruc"><option value="A">Aprobar</option><option value="r">Rechazar</option></select><textarea class="col col-4" id="observa__copia_ruc" name="observa__copia_ruc" placeholder="Ingrese observaciones en caso de rechazo o de requerirlo"></textarea></div>');


						if (obtenerInformacion__docus__negados!="no") {

							for (w of obtenerInformacion__docus__negados) {

								if (w.polizaOriginal=="p") {
									$("#polizaOriginal").val("r");
								}else{
									$("#polizaOriginal").val(w.polizaOriginal);
								}
								$("#observa__polizaOriginal").val(w.observa__polizaOriginal);

								if (w.caucionOrginal=="p") {
									$("#caucionOrginal").val("r");
								}else{
									$("#caucionOrginal").val(w.caucionOrginal);
								}
								$("#observa__caucionOrginal").val(w.observa__caucionOrginal);


								if (w.copiaCertificadoBancario=="p") {
									$("#copiaCertificadoBancario").val("r");
								}else{
									$("#copiaCertificadoBancario").val(w.copiaCertificadoBancario);
								}
								$("#observa__copiaCertificadoBancario").val(w.observa__copiaCertificadoBancario);

								if (w.copiaRegistroD=="p") {
									$("#copiaRegistroD").val("r");
								}else{
									$("#copiaRegistroD").val(w.copiaRegistroD);
								}
								$("#observa__copiaRegistroD").val(w.observa__copiaRegistroD);

								if (w.copia_adminFinanciero=="p") {
									$("#copia_adminFinanciero").val("r");
								}else{
									$("#copia_adminFinanciero").val(w.copia_adminFinanciero);
								}
								$("#observa__copia_adminFinanciero").val(w.observa__copia_adminFinanciero);

								if (w.copia_adminGeneral=="p") {
									$("#copia_adminGeneral").val("r");
								}else{
									$("#copia_adminGeneral").val(w.copia_adminGeneral);
								}
								$("#observa__copia_adminGeneral").val(w.observa__copia_adminGeneral);

								if (w.copia__registroIn=="p") {
									$("#copia__registroIn").val("r");
								}else{
									$("#copia__registroIn").val(w.copia__registroIn);
								}
								$("#observa__copia__registroIn").val(w.observa__copia__registroIn);


								if (w.copia_acuerdoRegistro=="p") {
									$("#copia_acuerdoRegistro").val("r");
								}else{
									$("#copia_acuerdoRegistro").val(w.copia_acuerdoRegistro);
								}
								$("#observa__copia_acuerdoRegistro").val(w.observa__copia_acuerdoRegistro);
								

								if (w.copia_ruc=="p") {
									$("#copia_ruc").val("r");
								}else{
									$("#copia_ruc").val(w.copia_ruc);
								}
								$("#observa__copia_ruc").val(w.observa__copia_ruc);


							}

						}


					}


				}


				var idRolE=$("#idRolAd").val();

				if($("#idRolAd").val()==2){

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretarias__finanA__c($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan";

					enviarTramitesGenerados__financieros($("#enviarTramite__Financiero"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),variableF],variableF,tipo__enviados);

				}else if($("#idRolAd").val()==4){


					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretarias__finanA__c__c($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan__coordinas";



				}else if($("#idRolAd").val()==3){

					$(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Regresar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div></div>');

					$(".contenedor__reasignaciones").hide();

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$(".bloques__financieros__documentos"));

					subsecretarias__finanA__c__a($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					var tipo__enviados="inserta__funcionario__finan__funcionarios";

				}

				$(".alto__fisiR").change(function (e){

					$("#texto__finan").val($(this).val());

				});

				var variableF=$("#texto__finan").val();

				enviarTramitesGenerados__financieros($("#enviarTramite__Financiero"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),variableF],variableF,tipo__enviados);


				
			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones reasignar Trans financieros  ======*/


/*================================================
=            Acciones reasignar trans            =
================================================*/

let funcion__datatabletsReasignarTra=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.reasignarTramites",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".idOrganismoM").val(data[7]);

  
  	var idOrganismo=$(".idOrganismoM").val();

  	var fisicamenteE=$("#fisicamenteE").val();

	var paqueteDeDatos = new FormData();

	paqueteDeDatos.append('tipo','informacioSubsess');

	paqueteDeDatos.append('idOrganismo',idOrganismo);

	paqueteDeDatos.append('fisicamenteE',fisicamenteE);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

			$.getScript("layout/scripts/js/validaGlobal.js",function(){

				var elementos=JSON.parse(response);

				var obtenerInformacion=elementos['obtenerInformacion'];
				var obtenerAcCa=elementos['obtenerAcCa'];

				var obtenerInformacionPre=elementos['obtenerInformacionPre'];

				var obtenerInformacionObservaciones=elementos['obtenerInformacionObservaciones'];

				var actividad3=elementos['actividad3'];
				var actividad4=elementos['actividad4'];
				var actividad5=elementos['actividad5'];
				var actividad6=elementos['actividad6'];
				var actividad7=elementos['actividad7'];

				var indicadorInformacion=elementos['indicadorInformacion'];

				$(".titulo__mS").text(data[1]);

				$(".contenedor__bodyCMatriz").append(' ');

				$(".elementosCreados__M").remove();

				$(".creados__letter").remove();

				if (!$(".nuevo__creates__nuevos").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center creados__letter nuevo__creates__nuevos" style="font-weight:bold; font-size:15px;">Ver POA</div><div class="col col-6"><button class="ver__Tabla btn btn-primary creados__letter" style="cursor:pointer;"><i class="fas fa-eye icono__boton"></i></button></div>');


				}
				
				if (!$(".elementosCreados__M").length > 0) {

					$(".contenedor__bodyCMatriz").append('<button type="button" class="btn btn-success excelProyectos col col-1 elementosCreados__M"><i class="fas fa-file-excel"></i>&nbsp;&nbsp;EXCEL</button><table class="tabla__itemsM elementosCreados__M" style="margin-top:2em;" id="tablaPoaPrincipal"><thead><tr><th align="center">Actividad</th><th align="center">Item</th><th align="center">Enero</th><th align="center">Febrero</th><th align="center">Marzo</th><th align="center">Abril</th><th align="center">Mayo</th><th align="center">Junio</th><th align="center">Julio</th><th align="center">Agosto</th><th align="center">Septiembre</th><th align="center">Octubre</th><th align="center">Noviembre</th><th align="center">Diciembre</th><th align="center">Total</th></tr></thead></table><br><br>');

					$(".elementosCreados__M").hide();


					for (c of obtenerInformacion) {

						$(".tabla__itemsM").append('<tr><td>'+c.idActividades+"-"+c.nombreActividades+'</td><td>'+c.itemPreesupuestario+"-"+c.nombreItem+'</td><td><center>'+parseFloat(c.enero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.febrero).toFixed(2)+'</center></td><td><center>'+parseFloat(c.marzo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.abril).toFixed(2)+'</center></td><td><center>'+parseFloat(c.mayo).toFixed(2)+'</center></td><td><center>'+parseFloat(c.junio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.julio).toFixed(2)+'</center></td><td><center>'+parseFloat(c.agosto).toFixed(2)+'</center></td><td><center>'+parseFloat(c.septiembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.octubre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.noviembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.diciembre).toFixed(2)+'</center></td><td><center>'+parseFloat(c.totalSumaItem).toFixed(2)+'</center></td></tr>');


					}


					execelGenerados($(".excelProyectos"),"tablaPoaPrincipal","poa");

					verOjoContrasenas2($(".ver__Tabla"),$(".icono__boton"),$(".elementosCreados__M"),$(".letras__ver__poa"));					

				}

				if (!$(".documentos__anexos__nuevos").length > 0) {

					if (data[9]!=null && data[9]!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center documentos__anexos__nuevos" style="font-size:14px; font-weight:bold;">Documentos anexos</div><br><br>');

						var arreglo = data[9].split("_________");

						let contador__Doc=0;

						let banderaDi=false;

						let unicos = [];

						for(var i = 0; i < arreglo.length; i++) {
						 
						  let elemento = arreglo[i];
						 
						  if (!unicos.includes(arreglo[i])) {
						    unicos.push(elemento);
						  }
						}


						for (var i = 0 ; i<unicos.length; i++) {


							$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center doc__anexos" id="doc__fila'+contador__Doc+'"><a href="documentos/anexosPoa/'+unicos[i]+'" target="_blank" id="enlace__'+contador__Doc+'">Documento '+(i+1)+": "+unicos[i]+'</a></div>');


							if(banderaDi==false){

								$("#doc__fila"+i).attr('style','background-color: rgba(33,42,92,.95)!important;');

								$("#enlace__"+i).attr('style','color:white;');

								banderaDi=true;

							}else{

								$("#doc__fila"+i).attr('style','background-color: var(--bs-white)!important;');

								$("#enlace__"+i).attr('style','color:#212121;');

								banderaDi=false;

							}
							

							contador__Doc++;

						}


					}

				}

				if (!$(".planificacion__letreros").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center planificacion__letreros" style="font-size:14px; font-weight:bold;">Planificación de indicadores</div><br><br>');


					for (dLCIn of indicadorInformacion) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center mb-0" style="font-weight:bold; text-align:justify; color: rgba(33,42,92,.95);">'+dLCIn.indicador+'</div><hr><div class="col col-2" style="">I Trimestre: '+dLCIn.primertrimestre+'</div><div class="col col-2" style="">II Trimestre: '+dLCIn.segundotrimestre+'</div><div class="col col-2" style="">III Trimestre: '+dLCIn.tercertrimestre+'</div><div class="col col-2" style="">IV Trimestre: '+dLCIn.cuartotrimestre+'</div><div class="col col-4" style="">Meta Anual del indicador: '+dLCIn.metaindicador+'</div><br><br>');

					}

				}
				
				if (!$(".a__analizar__activadesd").length > 0) {

					if (obtenerAcCa!="") {


						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center a__analizar__activadesd" style="font-size:14px; font-weight:bold;">ACTIVIDADES A ANALIZAR</div><br><br>');

						for (d of obtenerAcCa) {

							$(".contenedor__bodyCMatriz").append('<div class="col col-6 letras__ver__poa text-center" style="font-weight:bold; font-size:12px; ; margin-bottom:2em;">'+d.idActividades+"-"+d.nombreActividades+'</div><div class="col col-6"><button class="ver__matrices'+d.idActividades+' btn btn-info" attr="'+d.idActividades+'" style="cursor:pointer;"><i class="fas fa-eye icono__'+d.idActividades+'"></i></button></div><br><div class="col col-12 matrices__'+d.idActividades+' row"></div>');

							verOjoAjaxMatrices($(".ver__matrices"+d.idActividades),$(".icono__"+d.idActividades),$(".matrices__"+d.idActividades),d.idActividades,d.idOrganismo,$("#idRolAd").val(),$("#fisicamenteE").val());

						}

					}

				}

				if (!$(".observacioneS__a__l").length > 0) {

					if (obtenerInformacionObservaciones!="") {

						$(".contenedor__bodyCMatriz").append('<div class="col col-12 text-center observacioneS__a__l" style="font-weight:bold;">SECCIÓN DE OBSERVACIONES</div><br>');


						for (dLC of obtenerInformacionObservaciones) {

							$(".contenedor__bodyCMatriz").append('<div class="row col col-12" style="margin-left:5%;"><div class="col col-4">Observación realizada por '+dLC.nombreCompleto+':</div><div class="col col-8">'+dLC.observaciones+'</div></div>');

						}

						$(".contenedor__bodyCMatriz").append('<div></div><br><br>');


					}

				}


				console.log(data);

				var idRolE=$("#idRolAd").val();

				if($("#idRolAd").val()==3){

					if (!$(".enviador__enviados").length > 0) {


                        if ($("#idRolAd").val()!=3 && ($("#fisicamenteEstructura__na").val()!=6 && $("#fisicamenteEstructura__na").val()!=15)) {

                            $(".contenedor__bodyCMatriz").append('<br><br><div class="col col-8 text-center d d-flex justify-content-center enviador__enviados align-items:center" style="font-weight:bold">Si desea devolver el trámite dar click en el check&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="checksDesicion" name="checksDesicion" style="width:20px; height:20px;"></div><br><br>');


                            $(".contenedor__bodyCMatriz").append('<div class="col col-12 row contenedor__reasignaciones"><div class="col col-4 text-center" style="font-weight:bold;">Asignar a</div><div class="col col-6"><select class="alto__fisiR ancho__total__input__selects"></select></div><div class="col col-2"><button class="btn btn-primary enviar__rFuncionarios">Reasignar</button></div><br><br><div class="col col-4 text-center mt-4 observaciones__nestD" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4 observaciones__nestD"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div></div>');                           

                        }               


					}

				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==3){

					if (!$(".enviador__enviados").length > 0) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorCorFun($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					}


				}else if((fisicamenteE==27 || fisicamenteE==28 || fisicamenteE==29 || fisicamenteE==30 || fisicamenteE==31 || fisicamenteE==32 || fisicamenteE==33) && idRolE==4){


					if (!$(".enviador__enviados").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					subsecretariasSelectorCor($(".alto__fisiR"),$("#idUsuarioC").val(),"insta");

					}

				}else if (fisicamenteE==26) {

					if (!$(".enviador__enviados").length > 0) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelector($(".alto__fisiR"),$("#idUsuarioC").val());

					}

				}else if(fisicamenteE==24){

					if (!$(".enviador__enviados").length > 0) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

						subsecretariasSelectorDos($(".alto__fisiR"),$("#idUsuarioC").val());

					}

				}else if(fisicamenteE==1){

					if (!$(".enviador__enviados").length > 0) {

						$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" multiple="multiple"  style="width:100%!important; height:400px!important;"></select></div>');

						subsecretariasSelectorIntras($(".alto__fisiR"),$("#idUsuarioC").val());

					}


				}else if(fisicamenteE==2){

					if (!$(".enviador__enviados").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR" style="width:100%!important; height:40px!important;"></select></div>');

					subsecretariasSelectorFinancieros($(".alto__fisiR"),$("#idUsuarioC").val());

					}


				}else if($("#idRolAd").val()!=3){

					if (!$(".enviador__enviados").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center enviador__enviados" style="font-weight:bold;">Asignar a</div><div class="col col-8"><select class="alto__fisiR ancho__total__input__selects"></select></div>');

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					}

				}

				if ($("#idRolAd").val()!=3) {

					if (!$(".enviador__enviados").length > 0) {

					$(".contenedor__bodyCMatriz").append('<div class="col col-4 text-center mt-4 enviador__enviados" style="font-weight:bold;">Detalle observaciones (solo en caso de ser necesario)</div><div class="col col-8 mt-4"><textarea class="detalle__observaPri ancho__total__textareas" placeholder="Detalle observaciones en caso de ser necesario"></textarea></div>');

					}

				}


				if (!$("#generarDocumento").length > 0) {


				if ($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==13 ||  $("#fisicamenteE").val()==19 ||  $("#fisicamenteE").val()==26)) {


					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="subFisica"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">La meta anual del indicador coincide  con el No. de eventos planificados  en el PDA</td><td><select class="numerosEventosPlanificadosPda obligatorios__tabla ancho__total__input__selects" name="numerosEventosPlanificadosPda"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_numerosEventosPlanificadosPda" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">Utiliza la sintaxis clara (verbos en infinitivo) para el registro de los eventos</td><td><select class="sintaxis__clara obligatorios__tabla ancho__total__input__selects" name="sintaxis__clara"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_sintaxis__clara" class="text_sintaxis__clara ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Presenta el certificado de validación de eventos, registrados en el PDA suscrito por el director técnico metodológico (solo provinciales)</td><td><select class="validacionEventos obligatorios__tabla ancho__total__input__selects" name="validacionEventos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_validacionEventos" class="text_numerosEventosPlanificadosPda ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">Detalla satisfactoriamente la contratación o  adquisición de bienes o servicios orientados al fomento deportivo de acuerdo a la característica del deporte (implementación deportiva) con la debida justificación técnica</td><td><select class="detalleContratacion obligatorios__tabla ancho__total__input__selects" name="detalleContratacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleContratacion" class="text_detalleContratacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">No se han incrementado nuevos puestos de trabajo de técnicos en relación de dependencia con respecto al POA OD 2022</td><td><select class="nuevosPuestos obligatorios__tabla ancho__total__input__selects" name="nuevosPuestos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_nuevosPuestos" class="text_nuevosPuestos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">Justifica satisfactoriamente la contratación de personal técnico bajo la modalidad de contratos de servicios de honorarios profesionales</td><td><select class="justificaTecnico obligatorios__tabla ancho__total__input__selects" name="justificaTecnico"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificaTecnico" class="text_justificaTecnico ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">7</td><td align="left">En caso que planifique bienes de larga duración presenta el informe justificado de acuerdo a la característica del deporte para implementación deportiva, equipos tecnológicos y electrónicos</td><td><select class="bienesLarga obligatorios__tabla ancho__total__input__selects" name="bienesLarga"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_bienesLarga" class="text_bienesLarga ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">8</td><td align="left">Planifica seguros contra accidentes, vida y de salud para los deportistas que participarán en los eventos deportivos.</td><td><select class="seguroAccidentes obligatorios__tabla ancho__total__input__selects" name="seguroAccidentes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_seguroAccidentes" class="text_seguroAccidentes ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">9</td><td align="left">Detalla las especificaciones de la implementación y equipamiento deportivo que sea adquirido por cada deporte beneficiario y demuestre la no duplicidad en el presente año fiscal</td><td><select class="detalleImplementacion obligatorios__tabla ancho__total__input__selects" name="detalleImplementacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detalleImplementacion" class="text_detalleImplementacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">10</td><td align="left">La Planificación Operativa Anual del Organismo Deportivo se encuentra enmarcada en lo establecido en el Acuerdo Ministerial 456 y el Acuerdo Ministerial 457</td><td><select class="acuerdoEnmarcado obligatorios__tabla ancho__total__input__selects" name="acuerdoEnmarcado"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_acuerdoEnmarcado" class="text_acuerdoEnmarcado ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-info generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;CALIFICAR</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();

						
				}else if($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==12 ||  $("#fisicamenteE").val()==14 ||  $("#fisicamenteE").val()==24)) {


					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="altoRendi"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12" border="1" style="border:1px solid black!important;"><tbody class="contenido__altoRen"></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-info generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;CALIFICAR</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

					segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

					$(".columna__generadoraVe").hide();

					for (cActividad3 of actividad3) {

						if (cActividad3.totalActividad3!="0" || cActividad3.totalActividad3!=null) {

							$("#generarDocumento").append('<input type="hidden" name="salario3" value="'+parseFloat(cActividad3.totalActividad3).toFixed(2)+'">');


							$(".contenido__altoRen").append('<tr><th rowspan="2" colspan="3" style="vertical-align:middle;">003 CAPACITACIÓN DEPORTIVA O RECREATIVA</th><th colspan="1">MONTO POA</th></tr><tr><th colspan="1">'+parseFloat(cActividad3.totalActividad3).toFixed(2)+'</th></tr><tr><th>N°</th><th>ANÁLISIS DE LA CONDICIÓN</th><th>CUMPLE</th><th>OBSERVACIONES PARA LA<br>ORGANIZACIÓN<br> DEPORTIVA<br><span style="color:red!important;">(MANDATORIA)</span></th></tr><tr><td>1</td><td>REGISTRA EN LA PROGRAMACION DEPORTIVA ANUAL ACTIVIDADES CORRESPONDIENTES A LA ACTIVIDAD 003 GASTOS EN TEMAS DE CAPACITACIÓN DEPORTIVA</td><td><select class="ancho__total__textareas text_verificados obligatorios__tabla ancho__total__input__selects" name="ancho__total__textareas text_verificados"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_ancho__total__textareas text_verificados" class="text_ancho__total__textareas text_verificados ancho__total__textareas"></textarea></td></tr><tr><td>2</td><td>REGISTRA EVENTOS DE CAPACITACIÓN (TALLERES, SEMINARIOS, CONGRESOS, ETC) PARA PARA CIENCIAS APLICADAS DE MANERA PROGRESIVA ORIENTADOS A ATLETAS, FUERZA TÉCNICA, CIENCIAS APLICADAS, DIRECTIVOS Y PERSONAL DE JUZGAMIENTO</td><td><select class="talleresSeminarios obligatorios__tabla ancho__total__input__selects" name="talleresSeminarios"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_talleresSeminarios" class="text_talleresSeminarios ancho__total__textareas text_verificados"></textarea></td></tr>');

						}else{

							$("#generarDocumento").append('<input type="hidden" name="salario3">');

						}

					}


					for (cActividad4 of actividad4) {

						if (cActividad4.totalActividad4!="0" || cActividad4.totalActividad4!=null) {

							$("#generarDocumento").append('<input type="hidden" name="salario4" value="'+parseFloat(cActividad4.totalActividad4).toFixed(2)+'">');

							$(".contenido__altoRen").append('<tr><th rowspan="2" colspan="3" style="vertical-align:middle;">004 OPERACIÓN DEPORTIVA</th><th colspan="1">MONTO POA</th></tr><tr><th colspan="1">'+parseFloat(cActividad4.totalActividad4).toFixed(2)+'</th></tr><tr><td>1</td><td>REGISTRA LOS RECURSOS DESTINADOS PARA SUELDOS Y SALARIOS DE ENTRENADORES, EQUIPO TÉCNICO DE APOYO (MONITOR, INSTRUCTOR), EQUPO TÉCNICO DE CIENCIAS APLICADAS, Y ESTÁ ACORDE AL OBJETO DEL ORGANISMO DEPORTIVO</td><td><select class="recursosSueldos obligatorios__tabla ancho__total__input__selects" name="recursosSueldos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_recursosSueldos" class="text_recursosSueldos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>2</td><td>NO SE HAN CREADO NUEVOS PUESTOS DE TRABAJO DE TÉCNICOS EN RELACIÓN AL POA OD 2022</td><td><select class="noCreacionP obligatorios__tabla ancho__total__input__selects" name="noCreacionP"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_noCreacionP" class="text_noCreacionP ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>3</td><td>EL ORGANISMO DEPORTIVO NO INCREMENTA EL MONTO TOTAL DE HONORARIOS DEL PERSONAL TÉCNICO RESPECTO DEL POA OD 2022</td><td><select class="noIncrementaH obligatorios__tabla ancho__total__input__selects" name="noIncrementaH"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_noIncrementaH" class="text_noIncrementaH ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>4</td><td>LOS RECURSOS DESTINADOS PARA SUELDOS Y SALARIOS DE ENTRENADORES, EQUIPO TÉCNICO DE APOYO (MONITOR, INSTRUCTOR), EQUPO TÉCNICO DE CIENCIAS APLICADAS, ESTÁN ACORDE A LA PRIORIDAD DEPORTIVA DE LA INSITUCIÓN </td><td><select class="prioridadInstitucion obligatorios__tabla ancho__total__input__selects" name="prioridadInstitucion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_prioridadInstitucion" class="text_prioridadInstitucion ancho__total__textareas text_verificados"></textarea></td></tr>');

						}else{

							$("#generarDocumento").append('<input type="hidden" name="salario4">');

						}

					}

					for (cActividad5 of actividad5) {

						if (cActividad5.totalActividad5!="0" || cActividad5.totalActividad5!=null) {

							$("#generarDocumento").append('<input type="hidden" name="salario5" value="'+parseFloat(cActividad5.totalActividad5).toFixed(2)+'">');

							$(".contenido__altoRen").append('<tr><th rowspan="2" colspan="3" style="vertical-align:middle;">005 EVENTOS DE PREPARACIÓN Y COMPETENCIA</th><th colspan="1">MONTO POA</th></tr><tr><th colspan="1">'+parseFloat(cActividad5.totalActividad5).toFixed(2)+'</th></tr><tr><td>1</td><td>REGISTRA EN LAS ACTIVIDADES DEPORTIVAS CORRESPONDIENTES A LA ACTIVIDAD  CONCENTRADO, CAMPAMENTO, BASE DE ENTRENAMIENTO, EVALUACIONES Y CAMPEONATO ACORDE A LA PRIORIDAD DE LA DISCIPLIAN DEPORTIVA</td><td><select class="registraConcentrado obligatorios__tabla ancho__total__input__selects" name="registraConcentrado"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_registraConcentrado" class="text_registraConcentrado ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>2</td><td>PRESENTA EL CERTIFICADO DE VALIDACIÓN DE EVENTOS, SUSCRITO POR EL DIRECTOR TÉCNICO METODOLÓGICO (SOLO PROVINCIALES)</td><td><select class="certificadoValidacion obligatorios__tabla ancho__total__input__selects" name="certificadoValidacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_certificadoValidacion" class="text_certificadoValidacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>3</td><td>LA PLANIFICACIÓN DEL INDICADOR COINCIDE CON LOS EVENTOS DEPORTIVOS PLANIFICADOS </td><td><select class="coincidePla obligatorios__tabla ancho__total__input__selects" name="coincidePla"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_coincidePla" class="text_coincidePla ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>4</td><td>UTILIZA LA SINTAXIS CLARA PARA EL REGISTRO DE LOS EVENTOS</td><td><select class="sintaxisClaraRe obligatorios__tabla ancho__total__input__selects" name="sintaxisClaraRe"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_noIncrementaH" class="text_sintaxisClaraRe ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>5</td><td>REGISTRA CONCENTRADO, CAMPAMENTO, BASE DE ENTRENAMIENTO, EVALUACIONES Y CAMPEONATO PARA LA CATEGORÍA MENORES, PREJUVENIL, JUVENIL Y ABSOLUTO A NIVEL INTERNACIONAL</td><td><select class="registraConcentradoA5Inter obligatorios__tabla ancho__total__input__selects" name="registraConcentradoA5Inter"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_registraConcentradoA5Inter" class="text_registraConcentradoA5Inter ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>6</td><td>REGISTRA CONCENTRADO, CAMPAMENTO, BASE DE ENTRENAMIENTO, EVALUACIONES Y CAMPEONATO PARA LA CATEGORÍA MENORES, PREJUVENIL, JUVENIL Y ABSOLUTO A NIVEL NACIONAL</td><td><select class="registraConcentradoA5Nacio obligatorios__tabla ancho__total__input__selects" name="registraConcentradoA5Nacio"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_registraConcentradoA5Nacio" class="text_registraConcentradoA5Nacio ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>7</td><td>UTILIZA RECURSOS PARA CUBRIR GASTOS AUTORIZADOS DE: PASAJES, ALIMENTACIÓN, HOSPEDAJE,  HIDRATACIÓN, MEDICINAS, ATENCIÓN MÉDICA, HONORARIOS DE ÁRBITROS Y JUECES, UNIFORMES, MOVILIZACIÓN INTERNA Y AL EXTERIOR DE LA DELEGACIÓN</td><td><select class="gastosDelega obligatorios__tabla ancho__total__input__selects" name="gastosDelega"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_gastosDelega" class="text_gastosDelega ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>8</td><td>UTILIZA RECURSOS PARA CUBRIR PAGOS POR CONCEPTO DE SEGUROS Y BONO DEPORTIVO EN CONCENTRADO, CAMPAMENTO, BASE DE ENTRENAMIENTO, EVALUACIONES Y CAMPEONATO A NIVEL INTERNACIONAL</td><td><select class="segurosBonosI obligatorios__tabla ancho__total__input__selects" name="segurosBonosI"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_segurosBonosI" class="text_segurosBonosI ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>9</td><td>LA PLANIFICACIÓN OPERATIVA ANUAL DEL ORGANISMO DEPORTIVO SE ENCUENTRA ENMARCADA EN LO ESTABLECIDO EN EL ACUERDO MINISTERIAL 456 Y EL ACUERDO MINISTERIAL 457.</td><td><select class="acuerdoC7 obligatorios__tabla ancho__total__input__selects" name="acuerdoC7"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_acuerdoC7" class="text_acuerdoC7 ancho__total__textareas text_verificados"></textarea></td></tr>');

						}else{

								$("#generarDocumento").append('<input type="hidden" name="salario5">');

						}

					}


					for (cActividad6 of actividad6) {

						if (cActividad6.totalActividad6!="0" || cActividad6.totalActividad6!=null) {

							$("#generarDocumento").append('<input type="hidden" name="salario6" value="'+parseFloat(cActividad6.totalActividad6).toFixed(2)+'">');

							$(".contenido__altoRen").append('<tr><th rowspan="2" colspan="3" style="vertical-align:middle;">006 ACTIVIDADES RECREATIVAS</th><th colspan="1">MONTO POA</th></tr><tr><th colspan="1">'+parseFloat(cActividad6.totalActividad6).toFixed(2)+'</th></tr><tr><td>1</td><td>REGISTRA EN LA PROGRAMACION DEPORTIVA ANUAL ACTIVIDADES  006 ACTIVIDADES RECREATIVAS</td><td><select class="actividadesSe obligatorios__tabla ancho__total__input__selects" name="actividadesSe"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_actividadesSe" class="text_actividadesSe ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>2</td><td>UTILIZA RECURSOS PARA CUBRIR PAGOS POR CONCEPTO DE: MOVILIZACIÓN, ALIMENTACIÓN, HOSPEDAJE, INSCRIPCIONES, MEDICINAS, ATENCIÓN MÉDICA, HONORARIOS ÁRBITROS Y JUECES, INAUGURACIÓN Y CLAUSURA DEL EVENTO</td><td><select class="moMed obligatorios__tabla ancho__total__input__selects" name="moMed"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_moMed" class="text_moMed ancho__total__textareas text_verificados"></textarea></td></tr>');

						}else{

							$("#generarDocumento").append('<input type="hidden" name="salario6">');

						}

					}

					for (cActividad7 of actividad7) {

						if (cActividad7.totalActividad7!="0" || cActividad7.totalActividad7!=null) {

							$("#generarDocumento").append('<input type="hidden" name="salario7" value="'+parseFloat(cActividad7.totalActividad7).toFixed(2)+'">');

							$(".contenido__altoRen").append('<tr><th rowspan="2" colspan="3" style="vertical-align:middle;">007 IMPLEMENTACIÓN DEPORTIVA</th><th colspan="1">MONTO POA</th></tr><tr><th colspan="1">'+parseFloat(cActividad7.totalActividad7).toFixed(2)+'</th></tr><tr><td>1</td><td>EN EL CASO QUE PLANIFIQUE  IMPLEMENTACIÓN Y EQUIPAMIENTO DEPORTIVO REGISTRA EL DETALLE Y CANTIDADES REQUERIDAS DE CADA  IMPLEMENTO Y EQUIPO DEPORTIVO.</td><td><select class="implementaEqui obligatorios__tabla ancho__total__input__selects" name="implementaEqui"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_implementaEqui" class="text_implementaEqui ancho__total__textareas text_verificados"></textarea></td></tr><tr><td>2</td><td>UTILIZA  RECURSOS PARA LA COMPRA DE  IMPLEMENTACIÓN Y EQUIPAMIENTO DEPORTIVO ACORDE A LA NORMATIVA TÉCNICA DE LAS DISCIPLINAS DEPORTIVAS</td><td><select class="comprasDisci obligatorios__tabla ancho__total__input__selects" name="comprasDisci"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_comprasDisci" class="text_comprasDisci ancho__total__textareas text_verificados"></textarea></td></tr>');

						}else{

							$("#generarDocumento").append('<input type="hidden" name="salario7">');

						}

					}

					$(".contenido__altoRen").append('<tr><th rowspan="1" colspan="4" style="vertical-align:middle;">CONDICIÓNES GENERALES</th></tr><tr><td>1</td><td>LA PLANIFICACIÓN OPERATIVA ANUAL DEL ORGANISMO DEPORTIVO SE ENCUENTRA ENMARCADA EN LO ESTABLECIDO EN EL ACUERDO MINISTERIAL 456 Y EL ACUERDO MINISTERIAL 457.</td><td><select class="enmarcada456 obligatorios__tabla ancho__total__input__selects" name="enmarcada456"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_enmarcada456" class="text_enmarcada456 ancho__total__textareas text_verificados"></textarea></td></tr>');


				}else if($("#idRolAd").val()==3 && $("#fisicamenteE").val()==5){

					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="administrativo"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">Detalla satisfactoriamente el objeto de la adquisición de bienes o contratación de servicios</td><td><select class="detallaContratacion obligatorios__tabla ancho__total__input__selects" name="detallaContratacion"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_detallaContratacion" class="text_detallaContratacion ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">No se contempla financiamiento para pago de arreglos extrajudiciales, arrendamiento y licencias de uso de paquetes informáticos, Desarrollo, Actualización, Asistencia Técnica y Soporte de Sistemas Informáticos, dichos gastos deberán ser pagados con recursos de autogestión</td><td><select class="adquisicionBien obligatorios__tabla ancho__total__input__selects" name="adquisicionBien"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_adquisicionBien" class="text_adquisicionBien ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Utiliza el ítem presupuestario acorde al objeto de la adquisición de bienes o contratación de servicios</td><td><select class="montoAc53 obligatorios__tabla ancho__total__input__selects" name="montoAc53"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_montoAc53" class="text_montoAc53 ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">Detalla satisfactoriamente la justificación para el pago de impuestos, tasas y contribuciones</td><td><select class="tasasContri obligatorios__tabla ancho__total__input__selects" name="tasasContri"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_tasasContri" class="text_tasasContri ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">El pago de cada suministro de servicios básicos descrito, se encuentra en el informe aprobado del Ministerio del Deporte remitido por la Dirección de Planificación e Inversión</td><td><select class="informeRemitido obligatorios__tabla ancho__total__input__selects" name="informeRemitido"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_informeRemitido" class="text_informeRemitido ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-info generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;CALIFICAR</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas">Se ha identificado que el organismos planifica ejecutar procedimientos de contratación pública, conforme la DECLARACIÓN DE RESPONSABILIDAD DE PROCEDIMIENTOS DE CONTRATACIÓN PÚBLICA. La correcta ejecución de los recursos públicos financiados por parte del Ministerio del Deporte, para la adquisición de bienes, contratación de servicios, consultoría y obra; es de estricta responsabilidad del Organismo Deportivo conforme lo establecido en el artículo 1 literal b) de la Ley Orgánica del Sistema Nacional de Contratación Pública.</textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas" readonly="">Una vez que se ha revisado la información enviada por la Dirección de Planificación e Inversión del Ministerio del Deporte, se consigna el registro de información, en virtud de lo cual el presente documento podrá ser considerado como un elemento de opinión para la formación de la voluntad administrativa conforme lo determinado en el artículo 122 del Código Orgánico Administrativo.</textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar informe técnico de viavilidad</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form><form class="col col-12 row generarDocumentoCatalogoE" id="generarDocumentoCatalogoE" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoPdf" name="tipoPdf" value="catalogoElectronico"/><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" value="'+$("#idUsuarioPrincipal").val()+'"/><input type="hidden" id="idOrganismo" name="idOrganismo" value="'+data[7]+'"/><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar informe de procedimientos de contratación pública</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-primary">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir catalogo firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfGenerados__catalogos" name="pdfGenerados__catalogos"/></div></form>');


						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();


				}else if($("#idRolAd").val()==3 && $("#fisicamenteE").val()==7){


					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="talentoHumano"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">La planificación del  indicador tiene coherencia con el nombre del indicador y  se encuentra redactado en número entero</td><td><select class="coherenciaIndica obligatorios__tabla ancho__total__input__selects" name="coherenciaIndica"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_coherenciaIndica" class="text_coherenciaIndica ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">Ejecuta la Planificación anual del personal administrativo y de servicios amparado en el Código de Trabajo.</td><td><select class="codigoTrabajo obligatorios__tabla ancho__total__input__selects" name="codigoTrabajo"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_codigoTrabajo" class="text_codigoTrabajo ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Ejecuta la Planificación anual del personal administrativo, relacionado a Contratos Civiles de servicios profesionales.</td><td><select class="ejecutaPlani obligatorios__tabla ancho__total__input__selects" name="ejecutaPlani"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_ejecutaPlani" class="text_ejecutaPlani ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">El organismo deportivo no ha creado nuevos puestos de trabajo administrativos y de serviciosrespecto del POA 2022 (Acta de certificación suscritapor el responsable).</td><td><select class="nuevosPuestos obligatorios__tabla ancho__total__input__selects" name="nuevosPuestos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_nuevosPuestos" class="text_nuevosPuestos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">El organismo deportivo no ha incrementado Contratos Civiles de servicios profesionales de personal administrativo, respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="incrementoCiviles obligatorios__tabla ancho__total__input__selects" name="incrementoCiviles"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_incrementoCiviles" class="text_incrementoCiviles ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">El organismo deportivo no incrementa la masa salarial relacionada al personal administrativo y de servicios respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="masaSa obligatorios__tabla ancho__total__input__selects" name="masaSa"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_masaSa" class="text_masaSa ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">7</td><td align="left">El organismo deportivo no incrementa presupuesto relacionado a honorarios para Contratos Civiles de servicios profesionales de personal administrativo, respecto del POA 2022 (Acta de certificación suscrita por el responsable).</td><td><select class="contratosCiviles obligatorios__tabla ancho__total__input__selects" name="contratosCiviles"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_contratosCiviles" class="text_contratosCiviles ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">8</td><td align="left">Si planificó servicios básicos verificar que en la matriz de suministro el número de suministro cuente con informe de aprobación del Ministerio del Deporte</td><td><select class="serviciosVeri obligatorios__tabla ancho__total__input__selects" name="serviciosVeri"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_serviciosVeri" class="text_serviciosVeri ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">9</td><td align="left">En caso que planifique seguros de bienes y vehículos presenta el listado de bienes o vehículos con la respectiva cobertura</td><td><select class="planificoBienes obligatorios__tabla ancho__total__input__selects" name="planificoBienes"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_planificoBienes" class="text_planificoBienes ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-info generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;CALIFICAR</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

						segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

						$(".columna__generadoraVe").hide();


				}else if($("#idRolAd").val()==3 && ($("#fisicamenteE").val()==6 || $("#fisicamenteE").val()==15 || $("#fisicamenteE").val()==27 || $("#fisicamenteE").val()==28 || $("#fisicamenteE").val()==29 || $("#fisicamenteE").val()==30 || $("#fisicamenteE").val()==31 || $("#fisicamenteE").val()==32 || $("#fisicamenteE").val()==33)){

                    $(".contenedor__bodyCMatriz").append('<div class="col col-4">No corresponde</div><div class="col col-8"><a class="btn btn-primary" id="noCorresponde">NO CORRESPONDE</a></div>');


                    var noCorrespondes__poa__infras=function(parametro1){

                    $(parametro1).click(function (e){

                        e.preventDefault(); 

                        var confirm= alertify.confirm('¿Está seguro de enviar como no corresponde el trámite?','¿Está seguro de enviar como no corresponde el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

                        confirm.set({transition:'slide'});    

                        confirm.set('onok', function(){ //callbak al pulsar botón positivo
                                  
                            var paqueteDeDatos22 = new FormData();

                            let fisicamente=$("#fisicamenteEstructura__na").val();

                            paqueteDeDatos22.append('tipo','noCorrespondePoasIns');       

                            paqueteDeDatos22.append("idOrganismo",data[7]);

                            paqueteDeDatos22.append("fisicamente",fisicamente);

                            $.ajax({

                                type:"POST",
                                url:"modelosBd/inserta/insertaAcciones.md.php",
                                contentType: false,
                                data:paqueteDeDatos22,
                                processData: false,
                                cache: false, 
                                success:function(response){

                                    var elementos=JSON.parse(response);

                                    var mensaje=elementos['mensaje'];

                                    alertify.set("notifier","position", "top-center");
                                    alertify.notify("Acción realizada correctamente", "success", 5, function(){});


                                },
                                error:function(){

                                }
                                    
                            }); 

                        });

                        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
                                alertify.set("notifier","position", "top-center");
                                alertify.notify("Acción cancelada", "error", 1, function(){}); 
                        }); 

                    });

                    }
                    noCorrespondes__poa__infras($("#noCorresponde"));


					$(".contenedor__bodyCMatriz").append('<br><form class="col col-12 row generarDocumento" id="generarDocumento" action="modelosBd/pdf/pdf.modelo.php"  method="post"><input type="hidden" id="tipoDocumento" name="tipoDocumento" value="zonalE"/><input type="hidden" id="tipoPdf" name="tipoPdf" value="informeTecnico"><input type="hidden" id="idUsuarioEn" name="idUsuarioEn" /><input type="hidden" id="idOrganismo" name="idOrganismo" /><input type="hidden" id="fisicamenteEn" name="fisicamenteEn" /><table class="col col-12"><thead><tr><th  align="center">N</th><th  align="center">CONDICIÓN</th><th  align="center">CUMPLE</th><th  align="center">OBSERVACIONES PARA LA ORGANIZACIÓN DEPORTIVA</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">Declara toda la infraestructura deportiva a su cargo, adjuntando la legalidad respectiva.</td><td><select class="tieneCoherencia obligatorios__tabla ancho__total__input__selects" name="tieneCoherencia"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_tieneCoherencia" class="text_tieneCoherencia ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">2</td><td align="left">La planificación del indicador tiene coherencia con el nombre del indicador de la actividad 002 y se encuentra redactado con número entero.</td><td><select class="gastosRea obligatorios__tabla ancho__total__input__selects" name="gastosRea"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_gastosRea" class="text_gastosRea ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">3</td><td align="left">Planifican únicamente intervenciones de rehabilitación, y/o mantenimiento en aquellos escenarios deportivos que sean propiedad de la organización deportiva Anexo: Documentación de la legalidad del predio (escritura, certificado de propiedad, etc.).</td><td><select class="dentroRecursos obligatorios__tabla ancho__total__input__selects" name="dentroRecursos"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_dentroRecursos" class="text_dentroRecursos ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">4</td><td align="left">Dentro de la planificación, destinan recursos para gastos de rehabilitación, y/o mantenimiento de los escenarios deportivos que son propiedad del Ministerio del Deporte, precautelando su correcto uso y funcionamiento.Anexo: Documentación de la legalidad del predio (escritura, certificado de propiedad etc.),</td><td><select class="itemsAnexo1 obligatorios__tabla ancho__total__input__selects" name="itemsAnexo1"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_itemsAnexo1" class="text_itemsAnexo1 ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">5</td><td align="left">Utiliza los ítems presupuestarios aprobados del anexo XX, para la contratación de bienes y servicios respecto al tipo de intervenciones propuestas para la rehabilitación, y/o mantenimiento.</td><td><select class="interRea obligatorios__tabla ancho__total__input__selects" name="interRea"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_interRea" class="text_interRea ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6</td><td align="left">Mantiene concordancia el nombre de la intervención para rehabilitación, y/o mantenimiento con el escenario deportivo a intervenir y, los bienes y servicios involucrados en la intervención.</td><td><select class="justificacionOperativaIn obligatorios__tabla ancho__total__input__selects" name="justificacionOperativaIn"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificacionOperativaIn" class="text_justificacionOperativa ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6.1</td><td align="left">Presenta el Informe justificativo del gasto para la contratación o  adquisición de bienes o servicios en escenarios deportivo respecto a Rehabilitación y readecuación incluye:<br>- Análisis de precios unitarios<br>-Presupuesto<br>-Planos y anexos gráficos (debidamente suscritos por el profesional en la rama<br>-Registro fotográfico de la intervención a subsanar,<br>-Contemplar parámetros de accesibilidad universal; según corresponda al tipo de intervención aprobada en los lineamientos (fachadas exteriores, interiores, cubierta, pisos interiores, pisos exteriores, piscinas, instalaciones hidrosanitarias de las edificaciones deportivas, sistema eléctrico-electrónico).</td><td><select class="justificacionOperativa obligatorios__tabla ancho__total__input__selects" name="justificacionOperativa"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_justificacionOperativa" class="text_justificacionOperativa ancho__total__textareas text_verificados"></textarea></td></tr><tr><td align="center">6.2</td><td align="left">Presenta el Informe justificativo del gasto para la contratación o adquisición de bienes o servicios en escenarios deportivos respecto Mantenimiento incluye:<br>-Cuadro comparativo como estudio de mercado con análisis de precios unitarios respaldado por 3 cotizaciones<br>-Registro fotográfico de la intervención a subsanar <br>-Documentación de la legalidad del predio; según corresponda al tipo de intervención aprobada en los lineamientos (fachadas exteriores, interiores, cubierta, pisos interiores, pisos exteriores, piscinas, instalaciones hidrosanitarias de las edificaciones deportivas, sistema eléctrico-electrónico).</td><td><select class="informeJus obligatorios__tabla ancho__total__input__selects" name="informeJus"><option value="cumple">Cumple</option><option value="No cumple">No cumple</option><option value="No aplica">No aplica</option></select></td><td><textarea name="text_informeJus" class="text_informeJus ancho__total__textareas text_verificados"></textarea></td></tr></tbody></table><br><div class="col col-12 text-center"><a class="btn btn-info generar__caliFocal" style="cursor:pointer;"><i class="fas fa-save"></i>&nbsp;&nbsp;CALIFICAR</a></div><div class="row col col-12 columna__generadoraVe"><br><br><div class="col col-4" style="margin-top:2em!important;">OBSERVACIONES ADICIONALES:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese observaciones adicionales" name="observaAdicionales" class="ancho__total__textareas"></textarea></div><br><br><div class="col col-4" style="margin-top:2em!important;">CONCLUSIÓN:</div><div class="col col-8"><textarea style="margin-top:2em!important;" placeholder="Ingrese conclusión" name="conlcusion" id="conlcusion" class="ancho__total__textareas"></textarea></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Generar pdf</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><button type="submit" class="btn btn-warning">Generar&nbsp;&nbsp;<i class="fas fa-share-square"></i></button></div><br><div class="col col-4 d d-flex justify-content-center" style="margin-top:2em!important;">Subir pdf firmado electronicamente</div><div class="col col-8 d d-flex justify-content-center" style="margin-top:2em!important;"><input type="file" id="pdfArchivos" name="pdfArchivos"/></div></div></form>');

					segmentosSelectsCOncendidosPrimero($(".generar__caliFocal"),"select",$(".columna__generadoraVe"),$("#enviarTramite"));

					$(".columna__generadoraVe").hide();

				}

				}

				if ($("#idRolAd").val()==3){

					$("#idOrganismo").val($(".idOrganismoM").val());

					$("#fisicamenteEn").val($("#fisicamenteE").val());

					$("#idUsuarioEn").val($("#idUsuarioC").val());

					$("#enviarTramite").hide();
						
				}



				if($("#idRolAd").val()==3){

					funcionarios__normales($(".alto__fisiR"),$("#idUsuarioC").val());

					$(".observaciones__nestD").hide();

					$(".contenedor__reasignaciones").hide();

					segmentosSelectsCOncendidos($(".alto__fisiR"),$(".observaciones__nestD"));

					checkboxFunciones($("#checksDesicion"),$(".contenedor__reasignaciones"),$("#generarDocumento"));

				}

				if ($("#fisicamenteE").val()==27 || $("#fisicamenteE").val()==28 || $("#fisicamenteE").val()==29 || $("#fisicamenteE").val()==30 || $("#fisicamenteE").val()==31 || $("#fisicamenteE").val()==32 || $("#fisicamenteE").val()==33) {

					enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento","N/A","N/A","subsesAsigna__corInstalac");

				}else{

					enviarTramitesGenerados($("#enviarTramite"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento");

				}




				enviarTramitesGenerados($(".enviar__rFuncionarios"),[$("#idOrganismoM").val(),$("#fisicamenteE").val(),$("#idUsuarioC").val(),$(".alto__fisiR").val()],$(".alto__fisiR"),$(".detalle__observaPri"),$("#idRolAd").val(),"generarDocumento",false,"no__tramite");

			});

		},
		error:function(){

		}
				
	});		



  });

}

/*=====  End of Acciones reasignar trans  ======*/



var funcion__datatabletsAsignarEditarDos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.botonEditarOr",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".input__1").val(data[2]);

  	$(".enviado").val(data[4]);

  	$(".modal-title").text(data[1]);

  	$(".select__tipoOrga").val(data[5]);

  	console.log(data)

  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10){

	$(parametro1).click(function (e){


		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

						$(".boton__enlacesOcultos").show();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editarOrganismoC"),"de la información ingresada","confirm","editarCorreoOrga",null,null,null,"orgasModalOrForm");

	  	
  /*=====  End of Insertar  ======*/
  


  });

}


var funcion__datatabletsAsignarEditar=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.botonEditarOr",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".input__1").val(data[2]);

  	$(".enviado").val(data[5]);

  	$(".modal-title").text(data[1]);

  	$(".select__tipoOrga").val(data[6]);

  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10){

	$(parametro1).click(function (e){


		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

						$(".boton__enlacesOcultos").show();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editarOrganismoC"),"de la información ingresada","confirm","editarCorreoOrga",null,null,null,"orgasModalOrForm");

	  	
  /*=====  End of Insertar  ======*/
  


  });

}


var funcion__datatabletsAsignarInforDos=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button."+parametro5,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".asignado__titulos").text(data[1]);

  	for (var i =0;i<parametro4.length;i++) {
  		
  		$("."+parametro4[0]).val(data[parametro3[i]]);

  	}

  	$(".idOrganismo").val(data[4]);

  	var idUsuarioPrincipal=$("#idUsuarioPrincipal").val();

  	$(".idUsuarioPrincipalDos").val(idUsuarioPrincipal);


  });

}


var funcion__datatabletsAsignarInfor__2=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button.asignar__boton__paid",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".titulo__asignacion__paid").text(data[1]);

  	$("#idOrganismo").val(data[5]);

  	let valorComparativo=$("#valorComparativo").val();

  	$("#guardarAsignacion__paid").hide();


  	console.log(data);

  });

}

var funcion__datatabletsAsignarInfor=function(tbody,table,parametro3,parametro4,parametro5){

  $(tbody).on("click","button."+parametro5,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$(".asignado__titulos").text(data[1]);

  	for (var i =0;i<parametro4.length;i++) {
  		
  		$("."+parametro4[0]).val(data[parametro3[i]]);

  	}

  	$(".idOrganismo").val(data[5]);

  	var idUsuarioPrincipal=$("#idUsuarioPrincipal").val();

  	$(".idUsuarioPrincipalDos").val(idUsuarioPrincipal);


  });

}

var funcion__verItemsObtener__2=function(tbody,table,parametro3){

  $(tbody).on("click","a.verItems",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	//$("#tablaItemsRubros").dataTable().fnDestroy();

  	$(".titulo__modalItems").text("ITEMS DEL RUBRO "+data[0]);


  	datatablets($("#tablaItemsRubros"),"tablaItemsRubros",[data[1],$("#valorComparativo").val()],objetos([1],["boton"],["<button class='eliminarItemAc estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__datatabletsEliminar"],["eliminarItemAc"],["itemAcEliminaRubros"],["elimina"],[1,0],['enviado','input__1']);

  	//$(".elemento__escondidoI").val(data[2]);

  	$("#idUsados__items").val(data[1]);


	 var nuevoNavs=function(parametro1,parametro2){

		$(parametro1).click(function(e){

			if (parametro2=="verItems,editarRubros,eliminarRubros") {

				$("#rubrosCargados").attr('style','padding-right: 17px; display: block;');
				$("#rubrosEditaModalAc").removeAttr('style');

			}

		});

	}

	nuevoNavs($(".botones__ideales"),parametro3);

	$(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

  	
  
  });

}

var funcion__verItemsObtener=function(tbody,table,parametro3){

  $(tbody).on("click","button.verItems",function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

  	$("#tablaItemsAc").dataTable().fnDestroy();

  	$(".titulo__modalItems").text("ITEMS DE "+data[1]);


  	$("#exampleModalLabel").text("Items de "+data[1]);

  	datatablets($("#tablaItemsAc"),"tablaItemsAc",[data[2]],objetos([1],["boton"],["<button class='eliminarItemAc estilo__botonDatatablets btn btn-danger pointer__botones'><i class='fas fa-trash'></i></button><center>"],[false],[false]),-1,["funcion__datatabletsEliminar"],["eliminarItemAc"],["itemAcElimina"],["elimina"],[1,0],['enviado','input__1']);

  	$(".elemento__escondidoI").val(data[2]);
  
  });

}

var funcion__editar__986=function(tbody,table){

 $(tbody).on("click","a.editarComponente",function(e){

    e.preventDefault();

    var data=table.row($(this).parents("tr")).data();

    var nuevoNavs=function(parametro1){

        $(parametro1).click(function(e){

            $("#componentesCargado").attr('style','padding-right: 17px; display: block;');
            $("#componenteEdita").removeAttr('style');

        });

    }

    nuevoNavs($(".botones__ideales"));

    $(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

    console.log(data);

    $(".input__1").val(data[0]);


    var indicadores=function(parametro1){

        indicador=103;
        let idUsados__items= $("#valorComparativo").val();

        $.ajax({

          data: {indicador:indicador,evaluador:idUsados__items},
          dataType: 'html',
          type:'POST',
          url:'modelosBd/validaciones/selector.modelo.php'

        }).done(function(listar__lugar){

          $(parametro1).html(listar__lugar);
          $(parametro1).val(data[4]);

        }).fail(function(){

          

        });


    }

    indicadores($(".input__2__tipoPaid"));

    /*================================
    =            Insertar            =
    ================================*/
    
    var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11){

    $(parametro1).click(function (e){

        e.preventDefault(); 

        $(".boton__enlacesOcultos").hide();

        $('.reload__Enviosrealizados').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

        var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

        confirm.set({transition:'slide'});    

        confirm.set('onok', function(){ //callbak al pulsar botón positivo
                  
            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('tipo',parametro4);       

            var other_data = $('#componenteForm').serializeArray();

            var array = new Array(); 

            $.each(other_data,function(key,input){
                paqueteDeDatos.append(input.name,input.value);
                array.push(input.value);
            });

            paqueteDeDatos.append("idComponente",data[1]);

            $.ajax({

                type:"POST",
                url:"modelosBd/inserta/insertaAcciones.md.php",
                contentType: false,
                data:paqueteDeDatos,
                processData: false,
                cache: false, 
                success:function(response){

                    var elementos=JSON.parse(response);

                    var mensaje=elementos['mensaje'];

                    alertify.set("notifier","position", "top-center");
                    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

                    if(mensaje==1){

                        table.ajax.reload();

                    }

                },
                error:function(){

                }
                    
            }); 

        });

        confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

            alertify.set("notifier","position", "top-center");
            alertify.notify("Acción cancelada", "error", 1, function(){

                $(".boton__enlacesOcultos").show();
                $('.reload__Enviosrealizados').html(' ');

            }); 

        }); 

    });

    }   

    insertaValidaciones($("#editarComponentes"),"de la información ingresada","confirm","componenteActualiza__paid",null,null,null,"componenteForm");


  /*=====  End of Insertar  ======*/
  
});

}

var funcion__datatabletsEditar=function(tbody,table,parametro3,parametro4,parametro5,parametro10,parametro11){

  $(tbody).on("click","button."+parametro3,function(e){

  	e.preventDefault();

  	var data=table.row($(this).parents("tr")).data();

	var nuevoNavs=function(parametro1,parametro2){

		$(parametro1).click(function(e){


			if (parametro2=="editarRubros") {

				$("#rubrosCargados").attr('style','padding-right: 17px; display: block;');
				$("#rubrosEditaModal").removeAttr('style');

			}

			if (parametro2=="editarPrograma") {

				$("#programaCargado").attr('style','padding-right: 17px; display: block;');
				$("#programaEdita").removeAttr('style');

			}


			if (parametro2=="editarComponente") {

				$("#componentesCargado").attr('style','padding-right: 17px; display: block;');
				$("#componenteEdita").removeAttr('style');

			}

			if (parametro2=="editarItems") {

				$("#itemsCargados").attr('style','padding-right: 17px; display: block;');
				$("#itemEdita").removeAttr('style');

			}

			if (parametro2=="editarEstrategicos") {

				$("#objetivosEstrategicosCargados").attr('style','padding-right: 17px; display: block;');
				$("#estrategicosEdita").removeAttr('style');

			}

			if (parametro2=="editarEncargada") {

				$("#areaEncargada").attr('style','padding-right: 17px; display: block;');
				$("#encargadaEdita").removeAttr('style');

			}


			if (parametro2=="editarAccion") {

				$("#areaAccion").attr('style','padding-right: 17px; display: block;');
				$("#accionEdita").removeAttr('style');

			}


			if (parametro2=="editarTipoOr") {

				$("#tipoOrganizacionDeportiva").attr('style','padding-right: 17px; display: block;');
				$("#tipoOrEdita").removeAttr('style');

			}


			if (parametro2=="editarIndicador") {

				$("#indicadoresCargado").attr('style','padding-right: 17px; display: block;');
				$("#indicadorEdita").removeAttr('style');

			}


			if (parametro2=="editarDeportePaid") {

				$("#deportesCargados").attr('style','padding-right: 17px; display: block;');
				$("#deportePaidEdita").removeAttr('style');

			}

			if (parametro2=="editarModalidad") {

				$("#modalidadCargados").attr('style','padding-right: 17px; display: block;');
				$("#modalidadEdita").removeAttr('style');

			}


			if (parametro2=="editarPrueba") {

				$("#pruebaCargados").attr('style','padding-right: 17px; display: block;');
				$("#pruebaEdita").removeAttr('style');

			}



			if (parametro2=="editarCatgoria") {

				$("#categoriaCargados").attr('style','padding-right: 17px; display: block;');
				$("#categoriaEdita").removeAttr('style');

			}

		});

	}

	nuevoNavs($(".botones__ideales"),parametro3);

	$(".modal").attr('style','left: 0;z-index: 1050;width: 103%;height: 1200px; overflow-x: hidden; overflow-y: auto;');

  	console.log(data);

  	$(".input__2__rubroPaid").val(data[4]);

  	$(".input__3__rubroPaid").val(data[5]);


  	$(".input__2Items__paid").val(data[1]);


  	$(".input__2__tipoPaid").val(data[3]);

  	$(".input__3__tipoPaid").val(data[4]);

  	for (var i =0;i<parametro11.length;i++) {

  		if(parametro11[i]=="select__indiCadores"){

  			$("."+parametro11[i]).val(data[6]);

  		}else if (parametro11[i]=="select__grupoG") {

  			$("."+parametro11[i]).val(data[4]);

  		}else if(parametro11[i]=="inputActividades"){

  			$("."+parametro11[i]).val(data[0]);

  		}else if(parametro11[i]=="inputActividadesdos"){

  			$("."+parametro11[i]).val(data[0]);

  		}else if(parametro11[i]=="input__2Items"){

  			$("."+parametro11[i]).val(data[8]);

  		}else if(parametro11[i]=="select__2Objetivos"){

  			$("."+parametro11[i]).val(data[3]);

  		}else{

  			$("."+parametro11[i]).val(data[parametro10[i]]);

  		}
  		
  		

  	}


  	/*================================
  	=            Insertar            =
  	================================*/
  	
	var insertaValidaciones=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11){

	$(parametro1).click(function (e){

		e.preventDefault();	

		$(".boton__enlacesOcultos").hide();

		$('.reload__Enviosrealizados').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

		var confirm= alertify.confirm('¿Está seguro de '+parametro2+'?','¿Está seguro de '+parametro2+'?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

		confirm.set({transition:'slide'});    

		confirm.set('onok', function(){ //callbak al pulsar botón positivo
				  
			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',parametro4);		

			var other_data = $('#'+parametro8).serializeArray();

			var array = new Array(); 

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
				array.push(input.value);
			});

			var emailPrincipal=$("#emailPrincipal").val();
			var nombrePrincipalU=$("#nombrePrincipalU").val();
			var idOrganismoPrincipal=$("#idOrganismoPrincipal").val();

			paqueteDeDatos.append("emailPrincipal",emailPrincipal);
			paqueteDeDatos.append("tabla",parametro5);
			paqueteDeDatos.append("valoresArray",JSON.stringify(parametro6));
			paqueteDeDatos.append("idBuscado",parametro7);
			paqueteDeDatos.append("nombrePrincipalU",nombrePrincipalU);
			paqueteDeDatos.append("idOrganismoPrincipal",idOrganismoPrincipal);

			paqueteDeDatos.append('arrayInformacion', JSON.stringify(array));

			paqueteDeDatos.append("idPaid",parametro11);

			$.ajax({

				type:"POST",
				url:"modelosBd/inserta/insertaAcciones.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	var elementos=JSON.parse(response);

			    	var mensaje=elementos['mensaje'];

			    	alertify.set("notifier","position", "top-center");
				    alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					if(mensaje==1){

						table.ajax.reload();

			    	}

				},
				error:function(){

				}
					
			});	

		});

		confirm.set('oncancel', function(){ //callbak al pulsar botón negativo

			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){

				$(".boton__enlacesOcultos").show();
				$('.reload__Enviosrealizados').html(' ');

			}); 

		}); 

	});

	}  	

	insertaValidaciones($("#editaItemPrincipal"),"de la información ingresada","confirm","itemsPrincipalActualiza",null,null,null,"itemPrincipalForm");

	insertaValidaciones($("#editarActividades"),"de la información ingresada","confirm","actividadesActualiza",null,null,null,"actividadesForm");

	insertaValidaciones($("#editarGrupoGasto"),"de la información ingresada","confirm","grupoGastoActualiza",null,null,null,"grupoGastoForm");

	insertaValidaciones($("#editarLinea"),"de la información ingresada","confirm","lineaBaseActualiza",null,null,null,"lineaPoliticaForm");

	insertaValidaciones($("#editarPrograma"),"de la información ingresada","confirm","programaActualiza",null,null,null,"programaForm");

	insertaValidaciones($("#editarIndicadores"),"de la información ingresada","confirm","indicadoresActualiza",null,null,null,"indicadoresForm");

	insertaValidaciones($("#editarDeportes"),"de la información ingresada","confirm","deportesActualiza",null,null,null,"deportesForm");

	insertaValidaciones($("#editarAlcance"),"de la información ingresada","confirm","alcanceActualiza",null,null,null,"alcanceForm");

	insertaValidaciones($("#editarTipoFinan"),"de la información ingresada","confirm","tipoFinanActualiza",null,null,null,"financiamientoForm");

	insertaValidaciones($("#editarTipoFinan"),"de la información ingresada","confirm","tipoFinanActualiza",null,null,null,"financiamientoForm");

	insertaValidaciones($("#editarcargo"),"de la información ingresada","confirm","cargosActualiza",null,null,null,"cargoForm");

	insertaValidaciones($("#editarObjetivos"),"de la información ingresada","confirm","objetivosActualiza",null,null,null,"objetivoForm");

	insertaValidaciones($("#editarTipoOrganismo"),"de la información ingresada","confirm","tipoOrganismoActualiza",null,null,null,"tipoOrganismoForm");

	insertaValidaciones($("#editarAreaAccion"),"de la información ingresada","confirm","areaAccionActualiza",null,null,null,"areaAccionForm");

	insertaValidaciones($("#editaAreaEncargada"),"de la información ingresada","confirm","areaEncargadaActualiza",null,null,null,"areaEncargadaForm");


	insertaValidaciones($("#editarPrograma"),"de la información ingresada","confirm","programaActualiza__paid",null,null,null,"programaForm");

	insertaValidaciones($("#editarComponentes"),"de la información ingresada","confirm","componenteActualiza__paid",null,null,null,"componenteForm");

	insertaValidaciones($("#editaItemPaid"),"de la información ingresada","confirm","itemActualiza__paid",null,null,null,"itemPrincipalForm",false,false,data[2]);
	  	
	insertaValidaciones($("#editarEstrategico"),"de la información ingresada","confirm","estrategicoActualiza__paid",null,null,null,"estrategicosForm");

	insertaValidaciones($("#editarEncargada"),"de la información ingresada","confirm","encargadaActualiza__paid",null,null,null,"encargadaForm");

	insertaValidaciones($("#editaAccion"),"de la información ingresada","confirm","accionActualiza__paid",null,null,null,"accionForm");

	insertaValidaciones($("#editaTipoOr"),"de la información ingresada","confirm","tipoOrActualiza__paid",null,null,null,"tipoOrForm",false,false,data[5]);

	insertaValidaciones($("#editaIndicador"),"de la información ingresada","confirm","indicadorActualiza__paid",null,null,null,"indicadoresForm");

	insertaValidaciones($("#editaRubro"),"de la información ingresada","confirm","rubroActualiza__paid",null,null,null,"rubrosForm",false,false,data[1]);

	insertaValidaciones($("#editaDeportePaid"),"de la información ingresada","confirm","deporteActualiza__paid",null,null,null,"deportePaidForm");

	insertaValidaciones($("#editaModalidad"),"de la información ingresada","confirm","modalidadActualiza__paid",null,null,null,"modalidadPaidForm");

	insertaValidaciones($("#editaPrueba"),"de la información ingresada","confirm","modalidadPrueba__paid",null,null,null,"pruebaForm");

	insertaValidaciones($("#editaCategoria"),"de la información ingresada","confirm","categoria__paid",null,null,null,"categoriaForm");

  /*=====  End of Insertar  ======*/
  
});

}

var funcion__datatabletsObtener=function(tbody,table,parametro3,parametro4,parametro5,parametro6,parametro7){

  $(tbody).on("click","button.aprobacionUsuariosBoton",function(e){

      var data=table.row($(this).parents("tr")).data();

      $("#enviado").val(data[parametro6]);

      if (parametro5>=0) {
      	$("#tituloModalGenerico").text(data[parametro5]);
      }

      for(var i=0;i<parametro3.length;i++){

      	var variableId=parametro3[i];

      	 $("#"+variableId).text(data[parametro4[i]]);

      }

      /*==========================================
      =            Acciones por modal            =
      ==========================================*/

 	  switch (parametro7) {

	  	case "aprobacionUsuarios":

	  		$("#acuerdoMinisterial").html('<a href="documentos/acuerdosMinisteriales/'+data[17]+data[0]+'.pdf" targe="_blank">Acuerdo minsiterial</a>');

	  		if (data[31]!=null && data[31]!=null) {

	  			$(".modal-body").append("<div class='row mt-4 estilo__enlaces__modales primario__21 pointer__botones'><div class='col col-11 titulo__enfasis modales__titulos text-left'>Observaciones realizadas</div><div class='col col-1 item__remplazoModales'><i class='fas fa-angle-left'></i></div></div><div class='row d d-flex justify-content-center mt-2 atado__21'><div class='col col-4 titulo__enfasis atado__21'>Observación</div><div class='col col-8 atado__21 justificado__textos'>"+data[31]+"</div></div></div>");

	  			if (data[32]=="A") {

	  				var estadoCorrecion="En revisión por parte del organismo deportivo";

	  			}else if(data[32]=="C"){

	  				var estadoCorrecion="Revisión realizada por parte del organismo deportivo";

	  			}

	  			$(".modal-body").append("<div class='row d d-flex justify-content-center mt-2 atado__21'><div class='col col-4 titulo__enfasis atado__21'>Estado de  observación</div><div class='col col-8 text-left atado__21'>"+estadoCorrecion+"</div></div></div>");

	  		}else{

	  			$(".modal-body").append('');

	  		}
	  		

	  	break;

	  }     

	var cerrandoMenus=function(parametro1,parametro2){

		$(parametro1).click(function(e){

			if ($(parametro1).find('.item__remplazoModales').hasClass("sub__menuElementos")) {

				$(parametro1).find('.item__remplazoModales').removeClass("sub__menuElementos");

				$(parametro1).find('.item__remplazoModales').html('<i class="fas fa-angle-left"></i>');

				$(parametro2).hide();

			}else{

				$(parametro1).find('.item__remplazoModales').addClass("sub__menuElementos");

				$(parametro1).find('.item__remplazoModales').html('<i class="fal fa-angle-down" style="font-weight:bold; white;"></i>');

				$(parametro2).show();

			}

			

		});

	}

	cerrandoMenus($(".primario__21"),$(".atado__21"));
	cerrandoMenus($(".primario__22"),$(".atado__22"));
	cerrandoMenus($(".primario__22"),$(".atado__22"));
	cerrandoMenus($(".primario__23"),$(".atado__23"));
	cerrandoMenus($(".primario__24"),$(".atado__24"));
	cerrandoMenus($(".primario__25"),$(".atado__25"));
	cerrandoMenus($(".primario__26"),$(".atado__26"));
	cerrandoMenus($(".primario__27"),$(".atado__27"));
	cerrandoMenus($(".primario__28"),$(".atado__28"));
	cerrandoMenus($(".primario__29"),$(".atado__29"));
	cerrandoMenus($(".primario__30"),$(".atado__30"));
	cerrandoMenus($(".primario__31"),$(".atado__31"));


	$(".atado__21").hide();
	$(".atado__22").hide();
	$(".atado__23").hide();
	$(".atado__24").hide();
	$(".atado__25").hide();
	$(".atado__26").hide();
	$(".atado__27").hide();
	$(".atado__28").hide();
	$(".atado__29").hide();
	$(".atado__30").hide();
	$(".atado__31").hide();

      /*=====  End of Acciones por modal  ======*/



      console.log(data);


  });

 }




