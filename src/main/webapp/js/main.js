$(document).ready(function() {
	$("#submitbtn").click(submit_form);
	$("#randombtn").click(populateRandom);
	$("#malignbtn").click(populateMalign);
	$("#benignbtn").click(populateBenign);
});

function getRandomDouble(){
	return Math.random() * 5;
}

function populateRandom(){
  populate(getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble(),getRandomDouble())
}

function populateMalign(){
  populate(17.99,10.38,122.8,1001,0.1184,0.2776,0.3001,0.1471,0.2419,0.07871,1.095,0.9053,8.589,153.4,0.006399,0.04904,0.05373,0.01587,0.03003,0.006193,25.38,17.33,184.6,2019,0.1622,0.6656,0.7119,0.2654,0.4601,0.1189);
}

function populateBenign(){
  populate(13.54,14.36,87.46,566.3,0.09779,0.08129,0.06664,0.04781,0.1885,0.05766,0.2699,0.7886,2.058,23.56,0.008462,0.0146,0.02387,0.01315,0.0198,0.0023,15.11,19.26,99.7,711.2,0.144,0.1773,0.239,0.1288,0.2977,0.07259);
}

function populate(radius_m, texture_m, perimeter_m, area_m, suavization_m, compacity_m, concavity_m, concave_points_m, simmetry_m, fractal_dimension_m, radius_e, texture_e, perimeter_e, area_e, suavization_e, compacity_e, concavity_e, concave_points_e, simmetry_e, fractal_dimension_e, radius_w, texture_w, perimeter_w, area_w, suavization_w, compacity_w, concavity_w, concave_points_w, simmetry_w, fractal_dimension_w) {
	$("#radius_m").val(radius_m);
	$("#texture_m").val(texture_m);
	$("#perimeter_m").val(perimeter_m);
	$("#area_m").val(suavization_m);
	$("#suavization_m").val(compacity_m);
	$("#compacity_m").val(compacity_m);
	$("#concavity_m").val(concavity_m);
	$("#concave_points_m").val(concave_points_m);
	$("#simmetry_m").val(simmetry_m);
	$("#fractal_dimension_m").val(fractal_dimension_m);
	$("#radius_e").val(radius_e);
	$("#texture_e").val(texture_e);
	$("#perimeter_e").val(perimeter_e);
	$("#area_e").val(area_e);
	$("#suavization_e").val(suavization_e);
	$("#compacity_e").val(compacity_e);
	$("#concavity_e").val(concavity_e);
	$("#concave_points_e").val(concave_points_e);
	$("#simmetry_e").val(simmetry_e);
	$("#fractal_dimension_e").val(fractal_dimension_e);
	$("#radius_w").val(radius_w);
	$("#texture_w").val(texture_w);
	$("#perimeter_w").val(perimeter_w);
	$("#area_w").val(area_w);
	$("#suavization_w").val(suavization_w);
	$("#compacity_w").val(compacity_w);
	$("#concavity_w").val(concavity_w);
	$("#concave_points_w").val(concave_points_w);
	$("#simmetry_w").val(simmetry_w);
	$("#fractal_dimension_w").val(fractal_dimension_w);
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
		var nextStr = $("#" + dataArr[i]).val();
		if (nextStr === '')
			continue;
		
		if (i > 0) {
			dataStr += ',';
		}
		
		dataStr += nextStr;
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
