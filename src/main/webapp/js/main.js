$(document).ready(function() {
	$("#submitbtn").click(submit_form);
	$("#randombtn").click(populateRandom);
});

function getRandomDouble(){
	return Math.random() * 5;
}

function populateRandom(){
	$("#radius_m").val(getRandomDouble());
	$("#texture_m").val(getRandomDouble());
	$("#perimeter_m").val(getRandomDouble());
	$("#area_m").val(getRandomDouble());
	$("#suavization_m").val(getRandomDouble());
	$("#compacity_m").val(getRandomDouble());
	$("#concavity_m").val(getRandomDouble());
	$("#concave_points_m").val(getRandomDouble());
	$("#simmetry_m").val(getRandomDouble());
	$("#fractal_dimension_m").val(getRandomDouble());
	$("#radius_e").val(getRandomDouble());
	$("#texture_e").val(getRandomDouble());
	$("#perimeter_e").val(getRandomDouble());
	$("#area_e").val(getRandomDouble());
	$("#suavization_e").val(getRandomDouble());
	$("#compacity_e").val(getRandomDouble());
	$("#concavity_e").val(getRandomDouble());
	$("#concave_points_e").val(getRandomDouble());
	$("#simmetry_e").val(getRandomDouble());
	$("#fractal_dimension_e").val(getRandomDouble());
	$("#radius_w").val(getRandomDouble());
	$("#texture_w").val(getRandomDouble());
	$("#perimeter_w").val(getRandomDouble());
	$("#area_w").val(getRandomDouble());
	$("#suavization_w").val(getRandomDouble());
	$("#compacity_w").val(getRandomDouble());
	$("#concavity_w").val(getRandomDouble());
	$("#concave_points_w").val(getRandomDouble());
	$("#simmetry_w").val(getRandomDouble());
	$("#fractal_dimension_w").val(getRandomDouble());
}

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
