(function(window, $, undefined) {
	"use-strict";

	window.BU = window.BU || {};

	$.extend(window.BU, {

		highlightActiveNavLink: function() {
			$(".nav a").each(function() {
				if ($(this).attr('href') === "/") {
					if (window.location.pathname === "/") {
						$(this).closest('li').addClass('active');
					} else {
						$(this).closest('li').removeClass('active');
					}
				} else {
					if (window.location.pathname.indexOf($(this).attr('href')) === 0) {
						$(this).closest('li').addClass('active');
					} else {
						$(this).closest('li').removeClass('active');
					}
				}
			});
		},

		setAboutHeight: function() {
			var imgHeight = $(".about img").height();
			var textHeight = $(".about .content-section").height() + 96;
			$(".about").height(Math.max(imgHeight, textHeight));
		},
			
		Events: {

			resizeAbout: function() {
				BU.setAboutHeight();
			},

			playerClick: function(event) {
				console.log($(event.currentTarget).attr("data-player"));
				var player = JSON.parse($(event.currentTarget).attr("data-player"));
				if (player) {
					$("#playerModal").find(".detail-number").text(player.number);
					$("#playerModal").find(".detail-name").text(player.firstName + " " + player.lastName);
					$("#playerModal").find(".detail-position").text(player.position);
					$("#playerModal").find(".detail-exp").text(player.exp);
					$("#playerModal").find(".detail-age").text(player.age);
					$("#playerModal").find(".detail-hometown").text(player.hometown);
					$("#playerModal").find(".detail-college").text(player.college);
					$("#playerModal").modal('toggle');
				}
			},

			seasonChange: function(event) {
				var season = $(event.currentTarget).val();
				$(".season").hide();
				$("#season-"+season).show();
			}
		},

		bindEvents: function() {
			
			if ($(".about").length) {
				$(window).on("resize", function(event) {
					BU.Events.resizeAbout();
				});
			}

			if ($(".season-select").length) {
				$(document).on("change", ".season-select", function(event) {
					BU.Events.seasonChange(event);
				});
			}

			//$(document).on("click", ".player-container", function(event) {
			//	BU.Events.playerClick(event);
			//});
		},

		init: function() {
			BU.bindEvents();
			BU.highlightActiveNavLink();
			if ($(".about").length) { 
				BU.setAboutHeight();
				$("#about-team-photo").load(function() {
					BU.setAboutHeight();
				});
			}
		}	
	});

	$(document).ready(function() {
		BU.init();
	});

})(window, window.jQuery);