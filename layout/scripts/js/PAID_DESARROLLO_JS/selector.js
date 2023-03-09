var TablaPrincipal = function (tipo, body, identificador) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("identificador", identificador);

    axios({
        method: "post",
        url: "modelosBd/PAID_DESARROLLO/selector.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      
        })
        .catch((error) => {
        
        });


};
