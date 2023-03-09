$(document).ready(function () {


    $.getScript("layout/scripts/js/validacionBasica.js",function(){

        funcion__solo__numero__montos($(".solo__numero__montos"));
        
    });


    $.getScript("layout/scripts/js/PAID_DESARROLLO_JS/datatablets.js",function(){
        
    });


    $.getScript("layout/scripts/js/PAID_DESARROLLO_JS/inserciones.js",function(){
        

    });
    
    $.getScript("layout/scripts/js/PAID_DESARROLLO_JS/eliminaciones.js",function(){
        
        
    });


    $.getScript("layout/scripts/js/PAID_DESARROLLO_JS/actualizaciones.js",function(){
        
        
    });

   $.getScript("layout/scripts/js/PAID_DESARROLLO_JS/selector.js",function(){
        
        tablaPrincipal("paid_general",$(".body__paid"),$("#ïdentificador").val());
        
    });

  
    
});
