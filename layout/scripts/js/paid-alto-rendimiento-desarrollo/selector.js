var tablaPrincipal = function (tipo, body, identificador) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("identificador", identificador);

    axios({
        method: "post",
        url: "modelosBd/paid-alto-rendimiento-modelos/selector.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {

        var datos = response.data.informacion;
        var tabla = document.getElementById('tablaPAIDGeneral');
console.log(response.data.informacion);
        for (var i = 0; i < datos.length; i++) {
            // alert(x.nombreComponentes);
            var fila = tabla.insertRow();

            var celda1 = fila.insertCell(0);
            var celda2 = fila.insertCell(1);
            var celda3 = fila.insertCell(2);
            celda1.innerHTML = i+1;
            celda2.innerHTML = datos[i].nombreComponentes;
            celda3.innerHTML = datos[i].nombreIndicadores
            ;

        }


    }).catch((error) => {

    });

}