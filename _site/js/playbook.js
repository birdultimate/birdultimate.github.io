BU.playbook = {

	currentDragObject: "",
	currentFieldState: null,
	currentPlay: [],
	viewerCurrentPlay: [],
	viewerInProgress: false,
	viewerCurrentStateIndex: 0,

	fieldStates: {
		sevenOn: {
			disc: {
				id: "disc",
				xYards: 59,
				yYards: 19
			},
			playersDark: [
				{
					id: "player-dark-1",
					xYards: 23.75,
					yYards: 4
				},
				{
					id: "player-dark-2",
					xYards: 23.75,
					yYards: 9
				},
				{
					id: "player-dark-3",
					xYards: 23.75,
					yYards: 14
				},
				{
					id: "player-dark-4",
					xYards: 23.75,
					yYards: 19
				},
				{
					id: "player-dark-5",
					xYards: 23.75,
					yYards: 24
				},
				{
					id: "player-dark-6",
					xYards: 23.75,
					yYards: 29
				},
				{
					id: "player-dark-7",
					xYards: 23.75,
					yYards: 34
				},
			],
			playersLight: [
				{
					id: "player-light-1",
					xYards: 93.75,
					yYards: 4
				},
				{
					id: "player-light-2",
					xYards: 93.75,
					yYards: 9
				},
				{
					id: "player-light-3",
					xYards: 93.75,
					yYards: 14
				},
				{
					id: "player-light-4",
					xYards: 93.75,
					yYards: 19
				},
				{
					id: "player-light-5",
					xYards: 93.75,
					yYards: 24
				},
				{
					id: "player-light-6",
					xYards: 93.75,
					yYards: 29
				},
				{
					id: "player-light-7",
					xYards: 93.75,
					yYards: 34
				},
			]
		}
	},

	plays: {
		peel: {
			title: "Peel",
			description: "An offensive set play. Run off the pull, this play has three options: a quick break to the front of the stack, a subsequent deep cut from the front of the stack, and finally an under cut from the back of the stack.",
			categories: ["offense"],
			fieldStates: [{"disc":{"id":"disc","xYards":89.25,"yYards":17.625},"playersDark":[{"id":"player-dark-1","xYards":86.125,"yYards":5.625},{"id":"player-dark-2","xYards":87.875,"yYards":21.25},{"id":"player-dark-3","xYards":86.625,"yYards":33.75},{"id":"player-dark-4","xYards":75.375,"yYards":15.75},{"id":"player-dark-5","xYards":70.25,"yYards":15.5},{"id":"player-dark-6","xYards":64.25,"yYards":15.25},{"id":"player-dark-7","xYards":53.5,"yYards":15.375}],"playersLight":[{"id":"player-light-1","xYards":56.875,"yYards":18.75},{"id":"player-light-2","xYards":89,"yYards":2.5},{"id":"player-light-3","xYards":62.875,"yYards":19.125},{"id":"player-light-4","xYards":90,"yYards":19},{"id":"player-light-5","xYards":69.375,"yYards":18.75},{"id":"player-light-6","xYards":74,"yYards":18.5},{"id":"player-light-7","xYards":89.75,"yYards":35.875}]},{"disc":{"id":"disc","xYards":89.25,"yYards":17.625},"playersDark":[{"id":"player-dark-1","xYards":86.125,"yYards":5.625},{"id":"player-dark-2","xYards":87.875,"yYards":21.25},{"id":"player-dark-3","xYards":86.625,"yYards":33.75},{"id":"player-dark-4","xYards":78.375,"yYards":23},{"id":"player-dark-5","xYards":70.25,"yYards":15.5},{"id":"player-dark-6","xYards":64.25,"yYards":15.25},{"id":"player-dark-7","xYards":53.5,"yYards":15.375}],"playersLight":[{"id":"player-light-1","xYards":56.875,"yYards":18.75},{"id":"player-light-2","xYards":89,"yYards":2.5},{"id":"player-light-3","xYards":62.875,"yYards":19.125},{"id":"player-light-4","xYards":90,"yYards":19},{"id":"player-light-5","xYards":69.375,"yYards":18.75},{"id":"player-light-6","xYards":76.5,"yYards":25},{"id":"player-light-7","xYards":89.75,"yYards":35.875}]},{"disc":{"id":"disc","xYards":89.25,"yYards":17.625},"playersDark":[{"id":"player-dark-1","xYards":86.125,"yYards":5.625},{"id":"player-dark-2","xYards":87.875,"yYards":21.25},{"id":"player-dark-3","xYards":86.625,"yYards":33.75},{"id":"player-dark-4","xYards":58.75,"yYards":25.875},{"id":"player-dark-5","xYards":70.25,"yYards":15.5},{"id":"player-dark-6","xYards":64.25,"yYards":15.25},{"id":"player-dark-7","xYards":53.5,"yYards":15.375}],"playersLight":[{"id":"player-light-1","xYards":56.875,"yYards":18.75},{"id":"player-light-2","xYards":89,"yYards":2.5},{"id":"player-light-3","xYards":62.875,"yYards":19.125},{"id":"player-light-4","xYards":90,"yYards":19},{"id":"player-light-5","xYards":69.375,"yYards":18.75},{"id":"player-light-6","xYards":51.75,"yYards":26.25},{"id":"player-light-7","xYards":89.75,"yYards":35.875}]},{"disc":{"id":"disc","xYards":66.5,"yYards":5.875},"playersDark":[{"id":"player-dark-1","xYards":86.125,"yYards":5.625},{"id":"player-dark-2","xYards":87.875,"yYards":21.25},{"id":"player-dark-3","xYards":86.625,"yYards":33.75},{"id":"player-dark-4","xYards":31.75,"yYards":18.875},{"id":"player-dark-5","xYards":70.25,"yYards":15.5},{"id":"player-dark-6","xYards":64.25,"yYards":15.25},{"id":"player-dark-7","xYards":28.5,"yYards":7.75}],"playersLight":[{"id":"player-light-1","xYards":65.875,"yYards":6.875},{"id":"player-light-2","xYards":89,"yYards":2.5},{"id":"player-light-3","xYards":62.875,"yYards":19.125},{"id":"player-light-4","xYards":90,"yYards":19},{"id":"player-light-5","xYards":69.375,"yYards":18.75},{"id":"player-light-6","xYards":28.375,"yYards":13.75},{"id":"player-light-7","xYards":89.75,"yYards":35.875}]}]
		} 
	},

	captureFieldState: function() {
		var fieldWidth = parseInt($(".field-overlay").css("width"), 10);
		var fieldHeight = parseInt($(".field-overlay").css("height"), 10);

		var state = {
			disc: {
				id: "disc",
				xYards: parseInt($("#disc").css("left"), 10) * 120 / fieldWidth,
				yYards: parseInt($("#disc").css("top"), 10) * 40 / fieldHeight,
			},
			playersDark: [],
			playersLight: []
		};

		$(".player").each(function() {
			var x = parseInt($(this).css("left"), 10) * 120 / fieldWidth;
			var y = parseInt($(this).css("top"), 10) * 40 / fieldHeight;

			var player = {
				id: $(this).attr("id"),
				xYards: x,
				yYards: y
			};
			if ($(this).is(".dark")) {
				state.playersDark.push(player);
			} else if ($(this).is(".light")) {
				state.playersLight.push(player);
			}
			
		});

		return state;
	},

	displayFieldObject: function(object, fieldWidth, fieldHeight, type, animate, animateCallback) {
		
		var x = 0;
		if (object.xYards) {
			x = object.xYards * fieldWidth / 120;
		}

		var y = 0;
		if (object.yYards) {
			y = object.yYards * fieldHeight / 40;
		}

		var w = "20px";
		if (type === "player") {
			w = (fieldWidth / 48).toString().concat("px"); 
		} else  if (type === "disc") {
			w = (fieldWidth / 72).toString().concat("px");
		}

		if (animate) {
			$("#"+object.id).animate({width: w, top: y, left: x}, {
				duration: 2000,
				easing: "linear", 
				complete: animateCallback
			});
		} else {
			$("#"+object.id).css({width: w, top: y, left: x});
		}
	},

	displayFieldState: function(fieldState) {
		var fieldWidth = parseInt($(".field-overlay").css("width"), 10);
		var fieldHeight = parseInt($(".field-overlay").css("height"), 10);

		BU.playbook.displayFieldObject(fieldState.disc, fieldWidth, fieldHeight, "disc");

		if (fieldState && fieldState.playersDark && fieldState.playersLight) {
			$.each(fieldState.playersDark, function(key, player) {
				BU.playbook.displayFieldObject(player, fieldWidth, fieldHeight, "player");
			});
			$.each(fieldState.playersLight, function(key, player) {
				BU.playbook.displayFieldObject(player, fieldWidth, fieldHeight, "player");
			});
		}
	},

	executePlay: function(play, resume, fromIndex) {
		if (BU.playbook.isValidPlay(play)) {
			BU.playbook.viewerInProgress = true;
			$("#playbook-play-button").hide();
			$("#playbook-pause-button").show();
			if (!resume) {
				BU.playbook.displayFieldState(play[0]);
			}
			$.each(play, function(key, fieldState) {
				if (key > fromIndex) {
					BU.playbook.transitionToFieldState(fieldState);
				}
			});
		}
	},

	initPlaySelect: function() {
		var select = $("#play-select");
		select.append("<option value=''>Select a Play</option>");
		$.each(BU.playbook.plays, function(key, value) {
			select.append($('<option>', {value : key})
				.text(value.title)
				.data('playData', value));
		});
	},

	isValidFieldState: function(fieldState) {
		var valid = true;

		if (!(fieldState.disc && fieldState.disc.id && 
				fieldState.disc.xYards && fieldState.disc.yYards )) {
			valid = false;
		}
		
		if (valid && !BU.playbook.isValidPlayerList(fieldState.playersLight)) {
			valid = false;
		}

		if (valid && !BU.playbook.isValidPlayerList(fieldState.playersDark)) {
			valid = false;
		}

		return valid;
	},

	isValidPlay: function(play) {
		var valid = true;

		if (play && play.length) {
			$.each(play, function(key, fieldState) {
				if (!BU.playbook.isValidFieldState(fieldState)) {
					valid = false;
				}
			});
		} else {
			valid = false;
		}

		return valid;
	},

	isValidPlayerList: function(playerList) {
		var valid = true;

		if (playerList && playerList.length === 7) {
			$.each(playerList, function(key, player) {
				if (!(player.id && player.id.length)) {
					valid = false;
				} else if (!($.isNumeric(player.xYards))) {
					valid = false;
				} else if (!($.isNumeric(player.yYards))) {
					valid = false;
				}
			});
		} else {
			valid = false;
		}

		return valid;
	},

	transitionToFieldState: function(newState) {

		var fieldWidth = parseInt($(".field-overlay").css("width"), 10);
		var fieldHeight = parseInt($(".field-overlay").css("height"), 10);

		if (BU.playbook.isValidFieldState(newState)) {
			var players = $.merge($.merge([], newState.playersLight), newState.playersDark);
			var complete = function(){
				BU.playbook.updateViewerStateInfo();
			};
			BU.playbook.displayFieldObject(newState.disc, fieldWidth, fieldHeight, "disc", true, complete);
			$.each(players, function(key, player) {
				BU.playbook.displayFieldObject(player, fieldWidth, fieldHeight, "player", true);
			});
		}
	},

	updateViewerStateInfo: function() {
		BU.playbook.viewerCurrentStateIndex++;
		if (BU.playbook.viewerCurrentStateIndex+1 === BU.playbook.viewerCurrentPlay.length) {
			$("#playbook-pause-button").hide();
			$("#playbook-play-button").show();
			BU.playbook.viewerCurrentStateIndex = 0;
			BU.playbook.viewerInProgress = false;
		}
	},

	events: {

		addFieldStateToPlay: function() {
			BU.playbook.currentPlay.push(BU.playbook.captureFieldState());
			BU.playbook.viewerCurrentPlay = BU.playbook.currentPlay;
		},

		allowDrop: function(e) {
			e.preventDefault();
		},

		executePlayClick: function() {
			BU.playbook.executePlay(BU.playbook.viewerCurrentPlay,
				BU.playbook.viewerInProgress,
				BU.playbook.viewerCurrentStateIndex);
		},

		drag: function(e) {
			BU.playbook.currentDragObject = $(e.target).attr("id");
		},

		drop: function(e) {
			e.preventDefault();
			//console.log("drop", BU.playbook.currentDragObject, e.originalEvent);
			if ($(e.originalEvent.target).is(".field-overlay")) {
				var object = $("#"+BU.playbook.currentDragObject+"");
				var offset = parseInt(object.css("width")) / 2;
				object.css({top: e.originalEvent.layerY-offset, left: e.originalEvent.layerX-offset});
				BU.playbook.currentDragObject = "";
				BU.playbook.currentFieldState = BU.playbook.captureFieldState();
			}
		},

		pauseClick: function() {
			$(".player").each(function() {
				$(this).stop(true, false);
			});
			$("#playbook-pause-button").hide();
			$("#playbook-play-button").show();
		},

		playSelectChange: function() {
			var play = $("#play-select option:selected").data("playData");
			if (play) {
				BU.playbook.viewerCurrentPlay = play.fieldStates;
				BU.playbook.displayFieldState(BU.playbook.viewerCurrentPlay[0]);
			}
		},

		resetClick: function() {
			BU.playbook.currentPlay = [];
			BU.playbook.currentFieldState = BU.playbook.fieldStates.sevenOn;
			BU.playbook.displayFieldState(BU.playbook.currentFieldState);
		},

		resizeField: function() {
			BU.playbook.displayFieldState(BU.playbook.currentFieldState);
		},

		stepClick: function(direction) {
			console.log("Step click", direction);
			if (BU.playbook.isValidPlay(BU.playbook.viewerCurrentPlay)) {
				if (direction === "next") {
					if (BU.playbook.viewerCurrentStateIndex === 0 &&
							!BU.playbook.viewerInProgress) {
						BU.playbook.displayFieldState(BU.playbook.viewerCurrentPlay[0]);
						BU.playbook.viewerInProgress = true;
					} else {
						BU.playbook.transitionToFieldState(BU.playbook.viewerCurrentPlay[BU.playbook.viewerCurrentStateIndex+1]);
					}
				} else if (direction === "back") {

				}
			}
		}
	},

	bindEvents: function() {

		$(".playbook").on("dragstart", "#disc, .player", function(e) {
			BU.playbook.events.drag(e);
		});

		$(".playbook").on("dragover", ".field-overlay", function(e) {
			BU.playbook.events.allowDrop(e);
		});

		$(".playbook").on("drop", ".field-overlay", function(e) {
			BU.playbook.events.drop(e);
		});

		$(".playbook").on("change", "#play-select", function() {
			BU.playbook.events.playSelectChange();
		});

		$(".playbook").on("click", "#playbook-add-state-button", function(e) {
			BU.playbook.events.addFieldStateToPlay();
		});

		$(".playbook").on("click", "#playbook-play-button", function(e) {
			BU.playbook.events.executePlayClick();
		});

		$(".playbook").on("click", "#playbook-pause-button", function(e) {
			BU.playbook.events.pauseClick();
		});

		$(".playbook").on("click", "#playbook-reset-button", function(e) {
			BU.playbook.events.resetClick();
		});

		$(".playbook").on("click", "#playbook-step-bw-button", function(e) {
			BU.playbook.events.stepClick("back");
		});

		$(".playbook").on("click", "#playbook-step-fw-button", function(e) {
			BU.playbook.events.stepClick("next");
		});

		$(window).on("resize", function() {
			BU.playbook.events.resizeField();
		})
	},
	
	init: function() {
		BU.playbook.bindEvents();
		BU.playbook.initPlaySelect();
		BU.playbook.displayFieldState(BU.playbook.fieldStates.sevenOn);
	}
};

$(document).ready(function() {
	if ($(".playbook").length) {
		BU.playbook.init();
	}
});
