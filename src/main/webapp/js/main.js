$(document).ready(function() {
	$("#submitbtn").click(submit_form);
});

function populateResults(data) {
	if(data.error !== undefined) {
		$("#results").html('<p style="color: red; font-size: 1.3em;"><span style="font-weight: bold; text-decoration: underline;">Erro</span>: ' + data.error + "</p>");
		return;
	}
	
	// TODO: popular os resultados
	$("#results").html('TODO: popular os resultados. Data:<br />' + JSON.stringify(data));
}

function submit_form() {
	$("#results").html('');

	var formData = {
		'radius': $("#radius").val(),
		'texture': $("#texture").val(),
		'perimeter': $("#perimeter").val(),
		'area': $("#area").val(),
		'suavization': $("#suavization").val(),
		'compacity': $("#compacity").val(),
		'concavity': $("#concavity").val(),
		'concave_points': $("#concave_points").val(),
		'simmetry': $("#simmetry").val(),
		'fractal_dimension': $("#fractal_dimension").val()
	};

	$.ajax({
		url: '/predict',
		method: 'POST',
		data: formData,
		success: function (data, status, jqxhr) {
			console.log('-- success --')
			$(window).scrollTo(0, 800);
			populateResults(data);
		},
		error: function() {
			window.alert("Ocorreu um erro: o servidor não pode ser acessado!");
		}
	});
}
