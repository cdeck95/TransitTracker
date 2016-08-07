$( document ).on( "ready", function(){
	runStuff();
});

function runStuff() {	
	$('.body').append("<p>refreshed</p>");
	$busView = false;
	$trainView = false;
	$subwayView = false;
	
    $('li').click(function() {
		if(this.id == "Bus") {
			if(!$busView){
				//clear contents
				clearContents();
				$(this).addClass("active");
				$busView = true;
				$trainView = false;
				$subwayView = false;
				$('.body').append("<p>Enter Bus Destination Below</p>");
				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
				$('.body').append("<p>Enter Current Bus Station Below</p>")
				$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
			}
			else{
				//do nothing
			}
		}
		else if(this.id == "Train") {
			if(!$trainView){
				//clear contents
				clearContents();
				$(this).addClass("active");
				$busView = false;
				$trainView = true;
				$subwayView = false;
				$('.body').append("<p>Enter Train Destination Below</p>");
				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
				$('.body').append("<p>Enter Current Train Station Below</p>")
				$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
			}
			else{
				//do nothing
			}
		}
		else if(this.id == "Subway") {
			if(!$subwayView){
				//clear contents
				clearContents();
				$(this).addClass("active");
				$busView = false;
				$trainView = false;
				$subwayView = true;
				$('.body').append("<p>Enter Subway Destination Below</p>");
				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
				$('.body').append("<p>Enter Current Subway Station Below</p>")
				$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
			}
			else{
				//do nothing
			}
		}
		else {
			//do nothing
		}
	});
}

function clearContents() {
	$('.body').empty();
}
