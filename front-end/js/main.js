$(document).ready(function() {
	$("#submitbtn").click(submit_form);
});

function populateResults(data) {
	console.log('-- populateResults --');
	console.log(data);
}

function submit_form() {
	$("#results")[0].scrollIntoView(true);
	$("#results_title").show();
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
			populateResults(data);
		},
		error: function() {
			window.alert("Ocorreu um erro.");
		}
	});

	console.log(data);
}
