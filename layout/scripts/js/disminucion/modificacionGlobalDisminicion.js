


var honorarios_data = function (parametro1, parametro2, parametro3) {

	$(parametro1).on('change', function () {

		var paqueteDeDatos = new FormData();

		let idSueldos = $(this).val();

		paqueteDeDatos.append("tipo", parametro3);
		paqueteDeDatos.append("idSueldos", idSueldos);

		$.ajax({

			type: "POST",
			url: "modelosBd/inserta/seleccionaAccionesDisminucion.md.php",
			contentType: false,
			data: paqueteDeDatos,
			processData: false,
			cache: false,
			success: function (response) {

				var elementos = JSON.parse(response);
				var indicadorInformacion = elementos['indicadorInformacion'];

				for (z of indicadorInformacion) {
					$("#cedula").val(z.cedula);
					$("#cargo").val(z.cargo);
					$("#tipo__cargo").val(z.tipoCargo);
					$("#honorarioMensual").val(z.honorarioMensual);
					$("#idHonorarios").val(z.idHonorarios);
					$("#enero__origen").val(parseFloat(z.enero).toFixed(2));
					$("#febrero__origen").val(parseFloat(z.febrero).toFixed(2));
					$("#marzo__origen").val(parseFloat(z.marzo).toFixed(2));
					$("#abril__origen").val(parseFloat(z.abril).toFixed(2));
					$("#mayo__origen").val(parseFloat(z.mayo).toFixed(2));
					$("#junio__origen").val(parseFloat(z.junio).toFixed(2));
					$("#julio__origen").val(parseFloat(z.julio).toFixed(2));
					$("#agosto__origen").val(parseFloat(z.agosto).toFixed(2));
					$("#septiembre__origen").val(parseFloat(z.septiembre).toFixed(2));
					$("#octubre__origen").val(parseFloat(z.octubre).toFixed(2));
					$("#noviembre__origen").val(parseFloat(z.noviembre).toFixed(2));
					$("#diciembre__origen").val(parseFloat(z.diciembre).toFixed(2));




				}

			},
			error: function () {

			}

		});

	});

}



var sueldos_honorarios_data = function (parametro1, parametro2) {

	indicador = 1;

	$.ajax({

		data: { indicador: indicador, idOrganismo: parametro2 },
		dataType: 'html',
		type: 'POST',
		url: 'modelosBd/validaciones/selectorDisminucion.modelo.php'

	}).done(function (listar__lugar) {

		$(parametro1).html(listar__lugar);


	}).fail(function () { });

}


