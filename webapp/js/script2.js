$.getJSON('servicios.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<article>';
		output += '<h3>' + val.name + '</h3>';
		output += '<a href="' + val.link +'"><img src="images/'+ val.shortname +'"></a>';
		output += '</article>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});

$.getJSON('productos.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<article>';
		output += '<h3>' + val.name + '</h3>';
		output += '<a href="' + val.link +'"><img src="images/'+ val.shortname +'"></a>';
		output += '</article>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update2').prepend(output);
});

$.getJSON('clientes.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<article>';
		output += '<h3>' + val.name + '</h3>';
		output += '<a href="' + val.link +'" target="_blank"><img src="images/socios/'+ val.shortname +'"></a>';
		output += '</article>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update3').prepend(output);
});

$.getJSON('socios.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<article>';
		output += '<h3>' + val.name + '</h3>';
		output += '<a href="' + val.link +'" target="_blank"><img src="images/'+ val.shortname +'"></a>';
		output += '</article>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update4').prepend(output);
});