$(document).ready(function(){
 console.log("dun did load");
let playerChosen = false;

let charAvailArr = [];
let playerChar = [];
let opponentArr = [];

const gameCharsObj = {
	'pie': {
        name: 'pie',
        hp: 120,
        baseAttack: 6,
        counterAttack: 16,
        imageUrlRest: "./assets/images/pie-rest.svg",
        imageUrlPlayer: "./assets/images/pie-player.svg",
        imageUrlOpponent: "./assets/images/pie-opponent.svg"
    }, 
  'icecream': {
      name: 'icecream',
      hp: 120,
      baseAttack: 6,
      counterAttack: 16,
      imageUrlRest: "./assets/images/icecream-rest.svg",
      imageUrlPlayer: "./assets/images/icecream-player.svg",
      imageUrlOpponent: "./assets/images/icecream-opponent.svg"
  }, 
  'donut': {
      name: 'donut',
      hp: 140,
      baseAttack: 5,
      counterAttack: 12,
      imageUrlRest: "./assets/images/donut-rest.svg",
      imageUrlPlayer: "./assets/images/donut-player.svg",
      imageUrlOpponent: "./assets/images/donut-opponent.svg"
  },
  'waffle': {
      name: 'waffle',
      hp: 140,
      baseAttack: 5,
      counterAttack: 12,
      imageUrlRest: "./assets/images/waffle-rest.svg",
      imageUrlPlayer: "./assets/images/waffle-player.svg",
      imageUrlOpponent: "./assets/images/waffle-opponent.svg"
  }
}
// 	create characters to choose from
// list of players in object. try this. not comfy
// const gameCharsArr = [
// 	// ['name', 'health points', baseAttack', 'counterAttack', '../images/name-rest.svg']
// 	['pie', 100, 8, 24, '../images/pie-rest.svg'],
// 	['icecream', 120, 6, 16, '../images/icecream-rest.svg'],
// 	['donut', 140, 5, 12, '../images/donut-rest.svg'],
// 	['waffle', 160, 4, 8, '../images/waffle-rest.svg']
// ];
gameSetup();

////////////////////////////////////////////////////////////
//  FUNCTION TO SET UP ICONS TO DOM WITH CLASSES AND IDS  //
////////////////////////////////////////////////////////////
//try this:
// var obj = {
//   "flammable": "inflammable",
//   "duh": "no duh"
// };
// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });
function gameSetup(){
	$.each(gameCharsObj, (key, value) =>{
		//load available div and add class avail
	  $('#charBank').append(`
			<div class="character available ${value.name}-rest" data-name=${value.name}>
        <h3>${value.name}</h3>
        <p>HP: <span id="${value.name}-hp">${value.hp}</span></p>
			</div>
			`);
	});
}


////////////////////////////////////////////////////////////
//     ADD EVENT LISTENER TO THE ICONS. DROP F-BOMBS      //
////////////////////////////////////////////////////////////
// $(".addproduct").click(function(){
//   // Holds the product ID of the clicked element
//   var productId = $(this).attr('class').replace('addproduct ', '');

//   addToCart(productId);
// });
// if player div is empty, chose player and others go to deck
// if it is not (as in a player has been chosen) choose opponent
	$('.available').on('click', function(e){
    $('.available').not(this).removeClass('available').addClass('opponents');
		$(this).addClass(`${$(this).data("name")}-player`).removeClass(`${$(this).data("name")}-rest available`);
    
		$('#chosenPlayer').append($(this));
		$('.available').unbind('click');		
		$('#opponentsUpNext').append($('.available'));
		// $('#opponentsUpNext').append($('.character'));
	});
	// chosenPlayer = true;

// function chooseOpponent(){
//   $('.opponents').on('click', function(e){
//     $(this).addClass(`${$(this).data("name")}-opponent`)
//     console.log("opponent clicked");
//     // $(this).addClass(`${$(this).data("name")}-opponent`).removeClass(`${$(this).data("name")}-rest available`);
//     // $('.available').unbind('click');
//   }); 
// }



//on load, players need to be in their holding area. id="charBank"
// gameCharsArr.forEach(char => {
// 	console.log(`char is ${char[0]}`);
// 	//the html
// 	$('#charBank').append(`<li>
// 		<h3>${char[0]}</h3>
// 		<img class="rest" src="./assets/images/${char[0]}-rest.svg" alt="image of ${char[0]}">
// 		<p>Health Points: <span id="${char[0]}-hp">${char[1]}</span></p>
// 		</li>`);
// })

// TO DO:
// 	create characters to choose from XX
// 	determine their points. XX(is there a logic to this?)
// 	make obj or arrays for these.XX
// 	Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.
// 		The Health Points, Attack Power and Counter Attack Power of each character must differ.
// 	THERE IS NO HEALING OR RECOVERY. SUCKS TO BE THEM.

//on load, players need to be in their holding area.

// functionality:
// GAME SET UP:
// 1) when i click on a character's picture, it goes to the player spot.
// 			will always be the fighter for the game
// 		it is no longer an option (ie it leaves the array or bank or whatever)
	

// 2) 	the remaining characters become enemies move to an enemy spot 
// 		The player chooses an opponent by clicking on an enemy's picture.
// 		Once the player selects an opponent, that enemy is moved to a defender area.

// 3) once an enemy is chosen, the attack button appears


// PLAYING THE GAME:
// 1) ATTACK BUTTON:
// 		player attacks. enemy loses health points
// 		enemy counter attacks. player loses health points
// 		POINTS DISPLAYED AT BOTTOM OF PICTURES.
// 			Each time the player attacks, their character's Attack Power increases by its base Attack Power.
// 		◦	For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
// 		•	The enemy character only has Counter Attack Power.

// 	◦	Unlike the player's Attack Points, Counter Attack Power never changes.

// 2) BATTLES:
// 		player keeps hitting the attack button until ...
// 			defender's HP is reduced to zero or below, 
// 			remove the enemy from the defender area. 
// 			The player character can now choose a new opponent.
// 3) CONDITONS:
// 		WIN: The player wins the game by defeating all enemy characters. 
// 		LOSE: The player loses the game the game if their character's HP falls to zero or below.


// KEEP IN MIND:

// 	•	Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.



})




