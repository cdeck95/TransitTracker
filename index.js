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

				setViews(true, false, false);


				$('.body').append("<p>Enter Bus Destination Below</p>").css("padding", "0px 0px 0px 200px");
							$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
					$('.body').append("<p>Enter Current Bus Station Below</p>");

			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
					document.getElementById("searchButton").style.visibility = "visible";
	
				//restoreSlideShow();
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

				setViews(false, true, false);

				$('.body').append("<p>Enter Train Destination Below</p>").css("padding", "0px 0px 0px 200px");
							$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
					$('.body').append("<p>Enter Current Train Station Below</p>");

			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
					document.getElementById("searchButton").style.visibility = "visible";
				//restoreSlideShow();
	
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
				
				setViews(false, false, true);				
				$('.body').append("<p>Enter Subway Destination Below</p>").css("padding", "0px 0px 0px 200px");
							$('.body').append('<input type="text" placeholder="Destination" name="destination" id="destination"/>');
					$('.body').append("<p>Enter Current Subway Station Below</p>");
			$('.body').append('<input type="text" placeholder="Current Station" name="currentStation" id="currentStation"/>');
					document.getElementById("searchButton").style.visibility = "visible";
				//restoreSlideShow();
			}	
			else{
				
				//do nothing

			}

		}


		else {

			//do nothing

		}
	
});


$('#Home').click(function() {

	setViews(false, false, false);
	window.location = "index.html"
	$(this).addClass("active");
});

$('#Contact').click(function() {

	setViews(false, false, false);
	window.location = "Contact.html"
	$(this).addClass("active");
});

$('#About').click(function() {

	setViews(false, false, false);
	window.location = "About.html"
	$(this).addClass("active");
});

$('#Error').click(function() {

	setViews(false, false, false);
	window.location = "Error.html"
	$(this).addClass("active");
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
}


function restoreSlideShow() {
	$('.slideShow img').each(function() {
		$(this).css('width', '800px');
	});
}

function setViews(busView, trainView, subwayView) {
	$busView = busView;
	$trainView = trainView;
	$subwayView = subwayView;
}

