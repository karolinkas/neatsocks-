function FeatureSearch() {
	
	var self = this;
	this.id = 0;

	this.init = function() {
		console.log("INIT SEARCH");
		createFeaturesRandomly(self.id);
	}

	this.featureAnswer = function(isRight) {

		if (isRight) {
			this.play();
			console.log("YESSSSSS");

		} else {console.log("NOOOOO :(");
	}

	}

	this.play = function(donePlaying){
		
			searchOnType();

			if (donePlaying){
			
				nextFeature();
				
			}
	} 



}