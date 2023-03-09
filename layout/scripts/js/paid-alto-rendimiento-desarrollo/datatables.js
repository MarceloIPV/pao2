$(document).ready(function () {
//alert("HOLA datatables");
    /* paidRubrosEventos*/
    //datatablets($("#paidRubrosEventos"), "paidRubrosEventos", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], objetos([15],["boton"], ["<center><button class='estilo__botonDatatablets btn btn-info pointer__botones' onclick='funcionEliminarEvento()' ><i class='fas fa-pencil-alt'></i></button><center>"], [false], [false]), 1,  ["funcion__datatabletsEliminar"], [false], [false], false);

    datatablets($("#paidRubrosEventos"), "paidRubrosEventos", [$("#idUsuarioC").val(), $("#idRolAd").val(), $("#fisicamenteE").val(), "humano"], objetos([15, 16], ["boton", "boton"], ["<center><button class='estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#eventosEditaModal'><i class='fas fa-user-edit'></i></button><center>", "<center><button class='eliminarIndicadores estilo__botonDatatablets btn btn-danger pointer__botones' attr='15'><i class='fas fa-trash'></i></button><center>"], [false], [false]), 1, ["funcion__editar", "funcion__datatabletsEliminar"], ["editarIndicadores", "eliminarIndicadores"], ["indicadoresEdita", "eventosElimina"], ["edita", "elimina"], [1, 0], ['enviado', 'input__1']);
  
    
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

});

