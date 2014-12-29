function FeatureControl() {
	var self = this;
	this.id = 1;

	this.init = function() {
		createFeaturesRandomly(self.id);
	}


	this.featureAnswer = function(isRight) {
		if (isRight) this.specificFunction();
		else console.log("NOOOOO :(");
	}

	this.specificFunction = function() {
		console.log("YESSSSSS");
	}
}