// Elements

const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.querySelector(`#start-game-button`);
const username = document.querySelector(`#username`);
const userSelection = document.querySelector(`#user-selection`);
const goButton = document.querySelector(`#go-button`);
const scoreParagraph = document.querySelector(`#score`);
const gameHistoryParagraph = document.querySelector(`#game-history`);



// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){

}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  //const username = document.getElementById("username-input").value;
  const username = document.querySelector(`#username`).value;

  game = new RockPaperScissors(username);

  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });