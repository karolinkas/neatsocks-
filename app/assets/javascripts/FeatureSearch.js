function FeatureSearch() {
	
	var self = this;
	this.id = 0;

	this.init = function() {
		console.log("INIT SEARCH");
		createFeaturesRandomly(self.id);
	}

	this.featureAnswer = function(isRight) {
		var rightSelection = $(".answer").hasClass("rightAnswer");
		if (isRight) {
			this.play(rightSelection);
			console.log("YESSSSSS");

		} else {console.log("NOOOOO :(");
	}

	}

	this.play = function(rightSelection){
			
			searchOnType();
			alert("I play");
			if (rightSelection){
			alert("I played");
				nextFeature();
				
			}
	} 



}