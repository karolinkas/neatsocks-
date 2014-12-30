function searchOnType() {

    	$("#userinput").show();
   
	    $("#bill").keyup(function() {

	            string = $(this).val();
	        
	        	if (string.toUpperCase() === "Bil".toUpperCase()){
	        		alert("great");
	        	}	   
	      });
	    }
