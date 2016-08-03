$( document ).on( "ready", function(){
    $('li').click(function() {
		if($(this).id = "Train") {
			$('.container').append("<p>Enter Destination Below</p>")
			$('.container').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
			$('.container').append("<p>Enter Current Station Below</p>")
			$('.container').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
		}
	});
});

