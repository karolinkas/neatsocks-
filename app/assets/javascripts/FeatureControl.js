function FeatureControl() {
	var self = this;
	this.id = 1;

	this.init = function() {
		createFeaturesRandomly(self.id);
		console.log("INIT CONTROL");
	}


	this.featureAnswer = function(isRight,featureAnswer) {
		if (isRight) this.specificFunction();
		else console.log("NOOOOO :(");
	}

	this.specificFunction = function() {
		console.log("YESSSSSS");
	}

	
}