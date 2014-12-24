var ready;


ready = function() {

	$('.pull-down').each(function() {
	    $(this).css('margin-top', ($(this).parent().height()-$(this).height())+50)
		});
		
	} 

         

$(document).ready(ready);
$(document).on('page:load', ready);