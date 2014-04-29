BU.playbook = {

	currentDragPlayer: "",

	fieldStates: {
		sevenOn: {
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

	loadFieldState: function(fieldState) {
		var fieldWidth = parseInt($(".field-overlay").css("width"), 10);
		var fieldHeight = parseInt($(".field-overlay").css("height"), 10);

		if (fieldState && fieldState.playersDark && fieldState.playersLight) {
			$.each(fieldState.playersDark, function(key, player) {
				BU.playbook.setPlayerLocation(player, fieldWidth, fieldHeight);
			});
			$.each(fieldState.playersLight, function(key, player) {
				BU.playbook.setPlayerLocation(player, fieldWidth, fieldHeight);
			});
		}
	},

	setPlayerLocation: function(player, fieldWidth, fieldHeight) {
		
		var x = 0;
		if (player.xYards) {
			x = player.xYards * fieldWidth / 120;
		}

		var y = 0;
		if (player.yYards) {
			y = player.yYards * fieldHeight / 40;
		}

		$("#"+player.id).css({top: y, left: x});
	},

	events: {

		allowDrop: function(e) {
			e.preventDefault();
		},

		captureFieldState: function() {
			var fieldWidth = parseInt($(".field-overlay").css("width"), 10);
			var fieldHeight = parseInt($(".field-overlay").css("height"), 10);
			console.log(fieldWidth, fieldHeight);
			var state = {
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
			console.log(state);
		},	

		drag: function(e) {
			BU.playbook.currentDragPlayer = $(e.target).attr("id");
		},

		drop: function(e) {
			e.preventDefault();
			//console.log("drop", BU.playbook.currentDragPlayer, e.originalEvent);
			if ($(e.originalEvent.target).is(".field-overlay")) {
				var player = $("#"+BU.playbook.currentDragPlayer+"");
				player.css({top: e.originalEvent.layerY-10, left: e.originalEvent.layerX-10});
			}
		},

		resetClick: function() {
			BU.playbook.loadFieldState(BU.playbook.fieldStates.sevenOn);
		}
	},

	bindEvents: function() {

		$(".playbook").on("dragstart", ".player", function(e) {
			BU.playbook.events.drag(e);
		});

		$(".playbook").on("dragover", ".field-overlay", function(e) {
			BU.playbook.events.allowDrop(e);
		});

		$(".playbook").on("drop", ".field-overlay", function(e) {
			BU.playbook.events.drop(e);
		});

		$(".playbook").on("click", "#playbook-capture-button", function(e) {
			BU.playbook.events.captureFieldState();
		});

		$(".playbook").on("click", "#playbook-reset-button", function(e) {
			BU.playbook.events.resetClick();
		});
	},
	
	init: function() {
		BU.playbook.bindEvents();
		BU.playbook.loadFieldState(BU.playbook.fieldStates.sevenOn);
	}
};

$(document).ready(function() {
	if ($(".playbook").length) {
		BU.playbook.init();
	}
});
