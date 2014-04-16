//Add global Bird Ultimate js code here.
var BU = {

	HEADER_OFFSET: 50,
		
	events: {

		scrollToAnchor: function(anchor) {
			if (location.pathname.replace(/^\//,'') == anchor.pathname.replace(/^\//,'') 
	            || location.hostname == anchor.hostname) {
	          var target = $(anchor.hash);
	          target = target.length ? target : $('[name=' + anchor.hash.slice(1) +']');
	          if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top - BU.HEADER_OFFSET
	            }, 1000);
	            return false;
	          }
	        }
		}

	},

	init: function() {
		$('a[href*=#]:not([href=#])').on("click", function(event) {
			event.preventDefault();
			BU.events.scrollToAnchor(this);
		});
	}	
};

$(document).ready(function() {
	BU.init();
});