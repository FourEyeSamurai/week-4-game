$(document).ready(function() {

	var charStats = function(name, attack, hitpoints, pic){
		this.name = name;
		this.attack = attack;
		this.hitpoints = hitpoints;
		this.pic = pic;
	};
	
	
	var fighters = [

		new charStats('Darth Maul', 5, 2600, "assets/images/maul.jpg"),
		new charStats('Darth Vader', 5, 3000, "assets/images/vader.jpg"),
		new charStats('Luke Skywalker', 5, 2800, "assets/images/luke.jpg"),
		new charStats('Obi Wan Kenobi', 5, 2700, "assets/images/obi.jpg")

	];

	
		

		function startGame(){
			for (var i=0; i < fighters.length; i++){
        		var charSelect = $("<div id='player' data-name="+fighters[i].name+">");
        		var charImage = $("<img>");
        		charImage.addClass(fighters[i].name);
        		charImage.attr("src",fighters[i].pic);
        		charSelect.append(charImage);
        		$("#player-select").append(charSelect);
    		};
		};

		startGame();

		function playerSelect(){


	

		$(document).on('click', '#player', function(){
				
				var div = $('<div id="fight">');
				var img = $('<img>');
				var text = $('<p id="health">');
				charName = $(charStats).data('name');
				charHealth = $(charStats).data('health');
				img.attr('src', 'assets/images/'+fighters.charStats+'.jpg');
			
				
				$(document).ready(function(){
				
				$('#player').on('click', function(){
					$(img).addClass('curFighter');
				
				
				if(img === '.curFighter'){
					return null;
				} else {
					$(img).addClass('enemy');
					div.append(img).append(text); // moves image down
					$('#enemy').append(div);
				}
				console.log('.enemy');
				console.log('.curFighter');
				console.log(text);
		});	
			
	});
		
			
	//on click, append unclicked elements to enemy row.
	
	});

	};			
	
	playerSelect();	



});