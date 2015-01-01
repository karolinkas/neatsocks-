function FeatureSearch() {
	
	var self = this;
	this.id = 0;

	this.init = function() {
		console.log("INIT SEARCH");
		createFeaturesRandomly(self.id);
	}

	this.featureAnswer = function(isRight) {
		

		if (isRight) {

			var rightSelection = $(".answer").hasClass("rightAnswer");
			this.play(rightSelection);
			console.log("YESSSSSS");

		} else {console.log("NOOOOO :(");
	}

	}

	this.play = function(rightSelection){
			
		
			searchOnType();
		
			if (rightSelection){
	
				nextFeature();
				
			}
	} 



}