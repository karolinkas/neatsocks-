function searchOnType() {

	$("#userinput").show();

  $("#bill").keyup(function() {

          string = $(this).val();
      
      	if (string.toUpperCase() === "Bil".toUpperCase()){

      		loadSuggestions();


      		donePlaying = true;
      	}	   
    });
	}

function loadSuggestions() {
	var answerarray = $(".answer");
	shuffle(answerarray); 

	$(".suggestions").show();

	TweenMax.staggerFrom(".answer", 2, {scale:0.5, opacity:0, delay:0.25, ease:Elastic.easeOut, force3D:true}, 0.2);

	$(".answer").click(function(){
	  TweenMax.staggerTo(".answer", 0.25, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
	});
	
}