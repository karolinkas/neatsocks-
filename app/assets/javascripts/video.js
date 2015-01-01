function Video(){

	this.play = function(){
		document.getElementById('introvideo').play();	
	}
	this.pause = function(){
		document.getElementById('introvideo').pause();	
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