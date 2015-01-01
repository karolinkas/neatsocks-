function Video(){

	

	this.play = function(){
		
		document.getElementById('introvideo').play();	
		console.log(currentTime);
	}

	this.pause = function(){
		document.getElementById('introvideo').pause();	
	}

	this.rewind = function(){
		document.getElementById('introvideo').pause();
		document.getElementById('introvideo').currentTime = 0;	
	}

	this.volUp = function(){
		document.getElementById('introvideo').volume+=0.1;	
	}

	this.volDown = function(){
		document.getElementById('introvideo').volume-=0.1;	
	}
}

var introvideo = new Video(); 


// 