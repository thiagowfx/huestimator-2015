$(document).ready(function() {
	$("#submitbtn").click(submit_form);
});

function populateResults(data) {
	// TODO: remove this
	console.log('-- populateResults --');
	console.log(data);

	// TODO: stylize this
	if(data.error !== undefined) {
		$("#results").html('<b>Erro</b>: ' + data.error);
		return;
	}
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
			$("#results")[0].scrollIntoView(true);
			populateResults(data);
		},
		error: function() {
			window.alert("Ocorreu um erro, o servidor não pôde ser acessado por alguma razão.");
		}
	});

	console.log(data);
}
