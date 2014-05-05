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


	isValidFieldState: function(fieldState) {
		var valid = true;
		
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
			$.each(players, function(key, player) {
				if (key === 0) {
					BU.playbook.displayFieldObject(player, fieldWidth, fieldHeight, "player", true, complete);
				} else {
					BU.playbook.displayFieldObject(player, fieldWidth, fieldHeight, "player", true);
				}
			});
			BU.playbook.displayFieldObject(newState.disc, fieldWidth, fieldHeight, "disc", true);
		}
	},

	updateViewerStateInfo: function() {
		BU.playbook.viewerCurrentStateIndex++;
		if (BU.playbook.viewerCurrentStateIndex+1 === BU.playbook.currentPlay.length) {
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

		resetClick: function() {
			BU.playbook.currentPlay = [];
			BU.playbook.currentFieldState = BU.playbook.fieldStates.sevenOn;
			BU.playbook.displayFieldState(BU.playbook.currentFieldState);
		},

		resizeField: function() {
			BU.playbook.displayFieldState(BU.playbook.currentFieldState);
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

		$(window).on("resize", function() {
			BU.playbook.events.resizeField();
		})
	},
	
	init: function() {
		BU.playbook.bindEvents();
		BU.playbook.displayFieldState(BU.playbook.fieldStates.sevenOn);
	}
};

$(document).ready(function() {
	if ($(".playbook").length) {
		BU.playbook.init();
	}
});
