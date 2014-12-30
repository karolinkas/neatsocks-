function searchOnType() {
    	var minlength = 3;

    	$("#userinput").show();
   
	    $("#bill").keyup(function() {
	        var that = this,
	            string = $(this).val();
	        if (string.length >= minlength ) {
		        $.ajax({
		                url: "https://api.github.com/search/repositories?q=" + string + "&sort=stars&order=desc",
		                type: "get",
		                dataType: "jsonp"
		            })
		            .done(function(data, status) {
		            	if (string==$(that).val()) {
		                var searchresults = JSON.stringify(data.data.items.length);
		                var items = data.data.items;
		                
		                $("#tabletitle").show();
		                $("#numberbox").show();
		                $('.results').remove();
		                $('#results').html(JSON.stringify(data));
		                $('#number').html(searchresults);

		                $.each(items, function(index, value) {
		                    $("#items").append('<tr class="results">'
		                    										+'<td>' + value.name + '</td>'
		                    										+'</tr>');
		                });

		                $.each(items, function(index, value) {
		                    var date = value.created_at.substring(0, 10);;
		                    $("#details").append('<tr class="results">'
		                    										+'<td>' + date + '</td>'
		                    										+'</tr>');
		                });
		              }

		            })
		            .fail(function(gbstatus) {
		                alert('Fail: ' + JSON.stringify(status));
		            })
					}
		  });

};