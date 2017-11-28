/*
--------AJAX (Asynchronous JavaScript And Xml)----------------
No es un lenguaje de programación, por lo tanto son distintas tecnologias

Metodos GET y POST
	GET: Usado para obtener informacion del servidor.
	POST: Usado para enviar o intercambiar información.

XMLHttpRequest -> Clave de AJAX y es usado paraintercambiar datos detrás de escenas
	Metodos:
		New crea un nuevo request.
		.abort() Cancela el request.
		.getAllResponseHeaders() Retorna información del Header.
		.open() Información básica del request.
			.open("POST o GET", "datos.txt",true o flase) -> 3 campo de false=sincrono o true=asincrono
		.send() Envia el request al servidor.
		.setRequestHeader()- Agrega valoresal header que se desea enviar.

	Propiedades:
		readyState = Indica el estado del XMLHttpRequest y regresa un número.
			0 = request no se ha iniciado.
			1 = conexión establecida, es cuando se hace open.
			2 = request ya recibido.
			3 = se esta procesando el request.
			4 = request finalizado y la respuesta está lista.
		onreadystatechange = define una funcion que deberá ser llamada cuando el estado cambie.
		responseText = retorna la respuesta como string.
		responseXML = retornala respuesta como XML.
		innerHTML = reemplaza el texto
		status = Retorna el estado del request
			200: Correcto / ok	
			403: Prohibido/Forbidden
			404: No encontrado/ Not Found
*/
$.getJSON('clientes.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<article>';
		output += '<h3>' + val.name + '</h3>';

		output += '</article>';
		output += '</li>';
	});
	output +='</ul>';
	$('#updatetres').prepend(output);
});
