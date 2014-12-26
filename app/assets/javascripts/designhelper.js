var ready;


ready = function() {

	$('.pull-down').each(function() {
	    $(this).css('margin-top', ($(this).parent().height()-$(this).height()))
		});
		
	} 

         

$(document).ready(ready);
$(document).on('page:load', ready);