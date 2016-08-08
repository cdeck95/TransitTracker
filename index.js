$( document ).on( "ready", function(){

	runStuff();

});



function runStuff() {	
	
	document.getElementById("searchButton").style.visibility = "hidden";
	
	$busView = false;

	$trainView = false;
	
	$subwayView = false;
	
    
	
	$('li').click(function() {
		
		if(this.id == "Bus") {
			
			if(!$busView){
				
				//clear contents

				clearContents();

				$("li").removeClass("active");

				$(this).addClass("active");

				$busView = true;

				$trainView = false;

				$subwayView = false;

				$('.body').append("<p>Enter Bus Destination Below</p>").css("margin", "0px 0px 0px 200px");
			

				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
	

				$('.body').append("<p>Enter Current Bus Station Below</p>");

			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
	

				document.getElementById("searchButton").style.visibility = "visible";
	
				$('.slideShow img').each(function() {
					$(this).css('width', '800px');
				});			
					}
		
			else{
	
				//do nothing

			}
		
		}
		
		else if(this.id == "Train") {

			if(!$trainView){

				//clear contents

				clearContents();

				$("li").removeClass("active");

				$(this).addClass("active");

				$busView = false;

				$trainView = true;

				$subwayView = false;

				$('.body').append("<p>Enter Train Destination Below</p>").css("margin", "0px 0px 0px 200px");
			

				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
	

				$('.body').append("<p>Enter Current Train Station Below</p>");

			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
	

				document.getElementById("searchButton").style.visibility = "visible";
				$('.slideShow img').each(function() {
					$(this).css('width', '800px');
				});
	
			}
					else {

				//do nothing

			}

		}
		
		
		else if(this.id == "Subway") {
			
			if(!$subwayView){
				
				//clear contents
						
				clearContents();

				$("li").removeClass("active");

				$(this).addClass("active");
				
				$busView = false;

				$trainView = false;
				$subwayView = true;
				
				$('.body').append("<p>Enter Subway Destination Below</p>").css("margin", "0px 0px 0px 200px");
			

				$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
	

				$('.body').append("<p>Enter Current Subway Station Below</p>");
			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
	

				document.getElementById("searchButton").style.visibility = "visible";
				$('.slideShow img').each(function() {
					$(this).css('width', '800px');
				});
			}	
			else{
				
				//do nothing

			}

		}


		else {

			//do nothing

		}
	
});



var currentIndex = 0;
  items = $('.slideShow div');
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slideShow div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 5000);


}


function clearContents() {
	
	$('.body').empty();
	$('.header').empty();

}
