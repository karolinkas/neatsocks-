var ready;


ready = function() {

	$('.pull-down').each(function() {
	    $(this).css('margin-bottom', $(this).parent().height()-$(this).height())
	});
		
	} 

         

$(document).ready(ready);
$(document).on('page:load', ready);