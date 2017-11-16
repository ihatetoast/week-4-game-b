// this is giving me the irits!
// IRITS!

$(document).ready(function(){
 console.log("dun did load");
let isPlayerChosen = false;
let characterNames = ["pie", "icecream", "donut", "waffle"];
let player;
let playerId;
let opponents;
let opponentArr =[];

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
function loadCharBank(){
  $.each(gameCharsObj, (key, value) =>{
    //load available div and add class avail
    let charBox = $(`
          <div id="${value.name}" class="characters characterFrame ${value.name}-rest" data-name=${value.name}>`);
    let charName = $(`<h3>${value.name}</h3>`);
    let charImg = $(`<img class="characterImg" id="${value.name}Img" src="./assets/images/${value.name}-rest.svg">`);
    let charHealth = $(`<p>HP: <span id="${value.name}-hp">${value.hp}</span></p>`);
    charBox.append(charName).append(charImg).append(charHealth);
    $('#charBank').append(charBox);
  });
choosePlayer();
}

loadCharBank();

function choosePlayer(){

  $('.characters').on("click", function(e){
    
    console.log("char frame booped");
    if(isPlayerChosen){
      return;
    }else{
      player = $(this);
      playerId =$(this).attr('id');
      //find the image element inside this clicked .characters thing:
      let playerImg = $(this).find(".characterImg");
      playerImg.attr("src", `./assets/images/${playerId}-player.svg`);

        console.log(playerImg);

      $("#chosenPlayer").html(player);
      player.removeClass(`${playerId}-rest`).addClass(`${playerId}-player`);

      $('.characters').not(this).addClass("opponents");
      let playerIdx = characterNames.indexOf(playerId);
      opponentArr = characterNames.filter((name, idx) => {
        if(characterNames.indexOf(name) !== playerIdx) {
          return name;
        }
      });
      $('#opponentsUpNext, #charBank').empty();
    // append only the unpicked to the upnext div
      $.each(gameCharsObj, function(key, value){
        if(opponentArr.indexOf(key) != -1){
          console.log(`${key} is an opponent, i fucking hope`);
          let charBox = $(`
          <div id="${value.name}" class="characters characterFrame ${value.name}-rest" data-name=${value.name}>`);
          let charName = $(`<h3>${value.name}</h3>`);
          let charImg = $(`<img class="characterImg" id="${value.name}Img" src="./assets/images/${value.name}-opponent.svg">`);
          let charHealth = $(`<p>HP: <span id="${value.name}-hp">${value.hp}</span></p>`);
          charBox.append(charName).append(charImg).append(charHealth);
          $('#opponentsUpNext').append(charBox);
        }
      })
      $("#message").text(`You are ${playerId}. Wise choice. Now choose an opponent.`);
      isPlayerChosen = true;
      
    }
  });

}
//once player is chosen, the others become opponents and player fights them all.
//would it be easier to empty the div below and reload with a new look above?
//yes! look at the calculator and how the dom was loaded last. you feel like you have to stick to the original set up and you don't. it's no way to live your life.

//set variables in arrays to i can loop over them, because i love iteriteriterating. render to dom from those arrays. this doesn't have to be pretty. make it work.
// function loadOpponents(){
//   if(!isPlayerChosen){
//     //only run if player is chosen
//     return;
//   }
//   else {
//     //can i iterate over the obj and check for keys in obj matching elems in opp array? only load those?
//     console.log("fill the opponents' section");
//     $('#opponentsUpNext, #charBank').empty();
//     // append only the unpicked to the upnext div
//     $.each(gameCharsObj, function(key, value){
//       if(opponentArr.indexOf(key) != -1){
//         console.log(`${key} is an opponent, i fucking hope`);
//         let charBox = $(`
//           <div id="${value.name}" class="characters characterFrame ${value.name}-rest" data-name=${value.name}>`);
//         let charName = $(`<h3>${value.name}</h3>`);
//         let charImg = $(`<img class="characterImg" id="${value.name}Img" src="./assets/images/${value.name}-opponent.svg">`);
//         let charHealth = $(`<p>HP: <span id="${value.name}-hp">${value.hp}</span></p>`);
//         charBox.append(charName).append(charImg).append(charHealth);
//         $('#opponentsUpNext').append(charBox);
//       }
//     })
//   }
// }
// $('.opponents').on('click', function(){

// })


// var obj = {
//   "flammable": "inflammable",
//   "duh": "no duh"
// };
// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });







//clear div players went to
function initializeGame(){
  $("#chosenPlayer, #onDeck, #opponentsUpNext").empty()
}

// TO DO:
//  create characters to choose from XX
//  determine their points. XX(is there a logic to this?)
//  make obj or arrays for these.XX
//  Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.
//    The Health Points, Attack Power and Counter Attack Power of each character must differ.
//  THERE IS NO HEALING OR RECOVERY. SUCKS TO BE THEM.

//on load, players need to be in their holding area.


// functionality:
// GAME SET UP:
// 1) when i click on a character's picture, it goes to the player spot.
//hold that player in a variable. 
//if this variable is assigned, 

//      will always be the fighter for the game
//    it is no longer an option (ie it leaves the array or bank or whatever)
  

// 2)   the remaining characters become enemies move to an enemy spot 
//    The player chooses an opponent by clicking on an enemy's picture.
//    Once the player selects an opponent, that enemy is moved to a defender area.

// 3) once an enemy is chosen, the attack button appears


// PLAYING THE GAME:
// 1) ATTACK BUTTON:
//    player attacks. enemy loses health points
//    enemy counter attacks. player loses health points
//    POINTS DISPLAYED AT BOTTOM OF PICTURES.
//      Each time the player attacks, their character's Attack Power increases by its base Attack Power.
//    ◦ For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
//    • The enemy character only has Counter Attack Power.

//  ◦ Unlike the player's Attack Points, Counter Attack Power never changes.

// 2) BATTLES:
//    player keeps hitting the attack button until ...
//      defender's HP is reduced to zero or below, 
//      remove the enemy from the defender area. 
//      The player character can now choose a new opponent.
// 3) CONDITONS:
//    WIN: The player wins the game by defeating all enemy characters. 
//    LOSE: The player loses the game the game if their character's HP falls to zero or below.


// KEEP IN MIND:

//  • Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.



})


