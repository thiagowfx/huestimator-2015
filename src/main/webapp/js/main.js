$(document).ready(function() {
	$("#submitbtn").click(submit_form);
});

function populateResults(data) {
	if (data.error !== undefined) {
		$("#results")
				.html(
						'<p style="color: red; font-size: 1.3em;"><span style="font-weight: bold; text-decoration: underline;">Erro</span>: '
								+ data.error + "</p>");
	}
	else {
		$("#results").html(data.response);
	}
}

function submit_form() {
	$("#results").html('');

	var dataArr = [ 
	                'radius_m', 
	                'texture_m',
	                'perimeter_m',
	                'area_m',
	                'suavization_m',
	                'compacity_m',
	                'concavity_m',
	                'concave_points_m',
	                'simmetry_m',
	                'fractal_dimension_m',
	                'radius_e', 
	                'texture_e',
	                'perimeter_e',
	                'area_e',
	                'suavization_e',
	                'compacity_e',
	                'concavity_e',
	                'concave_points_e',
	                'simmetry_e',
	                'fractal_dimension_e',
	                'radius_w', 
	                'texture_w',
	                'perimeter_w',
	                'area_w',
	                'suavization_w',
	                'compacity_w',
	                'concavity_w',
	                'concave_points_w',
	                'simmetry_w',
	                'fractal_dimension_w',
	                ]

	var dataStr = '';
	for (var i = 0; i < dataArr.length; i++) {
		if (i > 0) {
			dataStr += ',';
		}
		dataStr += $("#" + dataArr[i]).val();
	}

	$.ajax({
		url : '/predict',
		method : 'POST',
		data : {
			'data' : dataStr
		},
		success : function(data, status, jqxhr) {
			$(window).scrollTo(0, 800);
			populateResults(data);
		},
		error : function() {
			window.alert("Ocorreu um erro: o servidor não pode ser acessado!");
		}
	});
}
