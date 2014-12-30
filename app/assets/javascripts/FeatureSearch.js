function FeatureSearch() {
	
	var self = this;
	this.id = 0;

	this.init = function() {
		console.log("INIT SEARCH");
		createFeaturesRandomly(self.id);
	}

	this.featureAnswer = function(isRight) {
		if (isRight) {
			console.log("YESSSSSS");
			nextFeature();
		} else console.log("NOOOOO :(");
	}

	this.loadUserinput = function(){
		console.log("Am I searching allready?")
		// searchOnType();
	}


}