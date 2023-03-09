var TablaPrincipal = function (tipo, body, identificador) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("identificador", identificador);

    axios({
        method: "post",
        url: "modelosBd/paid-alto-rendimiento-modelos/selector.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {

        for(x of response.data.informacion){
            alert(x.nombreComponentes);
        }

        
    }).catch((error) => {
        
    });



};
