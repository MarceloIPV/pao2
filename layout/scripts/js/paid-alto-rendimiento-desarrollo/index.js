$(document).ready(function () {

    $.getScript("layout/scripts/js/validacionBasica.js",function(){
        funcion__solo__numero__montos($(".solo__numero__montos"));
    });

    $.getScript("layout/scripts/js/paid-alto-rendimiento-desarrollo/datatablets.js",function(){
       
    });


    $.getScript("layout/scripts/js/paid-alto-rendimiento-desarrollo/insert.js",function(){
        

    });
    
    $.getScript("layout/scripts/js/paid-alto-rendimiento-desarrollo/delete.js",function(){
        
        
    });


    $.getScript("layout/scripts/js/paid-alto-rendimiento-desarrollo/update.js",function(){
        
        
    });


    $.getScript("layout/scripts/js/paid-alto-rendimiento-desarrollo/selector.js",function(){
        
        tablaPrincipal("paid_general",$(".body__paid"),$("#ïdentificador").val());
        
    });

    
});