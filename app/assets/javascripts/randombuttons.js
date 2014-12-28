$(function() {

	var featureNames = ["Buscador inteligente","Control del directo","Grabación","Aplicaciones","Multipantalla","Emisión","Sugerencias" ]

	for (i=0; i<7; i++) { 

		var randomIndices = Math.floor(Math.random() * (i+1));
		
		
	}
		$(".feature").html(featureNames[randomIndices]); 

	



})