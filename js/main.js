//Add global Bird Ultimate js code here.
var BU = {

	HEADER_OFFSET: 50,

	resetContactForm: function() {
		$("#contact-form-name").val("");
		$("#contact-form-email").val("");
		$("#contact-form-subject").val("");
		$("#contact-form-message").val("");
	},

	isValidContactFormContent: function () {
		var valid = true;

		if ($("#contact-form-name").val().length) {
			$("#contact-form").find(".validation-msg-name").hide();
		} else {
			valid = false;
			$("#contact-form").find(".validation-msg-name").show();
		}

		if ($("#contact-form-email").val().length) {
			if (BU.isValidEmail($("#contact-form-email").val())) {
				$("#contact-form").find(".validation-msg-email").hide();
			} else {
				valid = false;
				$("#contact-form").find(".validation-msg-email").show();
			}
		} else {
			valid = false;
			$("#contact-form").find(".validation-msg-email").show();
		}

		if ($("#contact-form-subject").val().length) {
			$("#contact-form").find(".validation-msg-subject").hide();
		} else {
			valid = false;
			$("#contact-form").find(".validation-msg-subject").show();
		}

		if ($("#contact-form-message").val().length) {
			$("#contact-form").find(".validation-msg-message").hide();
		} else {
			valid = false;
			$("#contact-form").find(".validation-msg-message").show();
		}

		if (valid) {
			$("#contact-form").find(".form-validation-msgs ul").hide();
		} else {
			$("#contact-form").find(".form-validation-msgs ul").show();
		}
		
		return valid;
	},

	isValidEmail: function(email) {
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if (pattern.test(email)) {
			return true;
		} else {
			return false;
		}
	},
		
	events: {

		contactFormSubmitClick: function() {
			// TODO: Add processing view
			if (BU.isValidContactFormContent()) {
				var data = {
					name: $("#contact-form-name").val(),
					email: $("#contact-form-email").val(),
					subject: $("#contact-form-subject").val(),
					message: $("#contact-form-message").val()
				};
				$.ajax({
				  	dataType: 'jsonp',
				  	url: "http://getsimpleform.com/messages/ajax?form_api_token=c53a3f97b9c7ae0eb604812a88885aea",
				  	data: data
				}).done(function() {
					// TODO: Add confirmation view
				  	BU.resetContactForm();
				});
			}
		},

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

		$("#contact-form-submit").on("click", function(event) {
			BU.events.contactFormSubmitClick();
		});

		$("#contact-form input[type='text']").on("keypress", function(event) {
			if (event.which === 13){
				BU.events.contactFormSubmitClick();	
			}
		});
	}	
};

$(document).ready(function() {
	BU.init();
});