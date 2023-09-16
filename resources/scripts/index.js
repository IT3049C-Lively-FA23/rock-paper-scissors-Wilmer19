// Elements

const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.querySelector(`#start-game-button`);
const username = document.getElementById("username").value;
const userSelection = document.getElementById(`user-selection`).value;
const goButton = document.querySelector(`#go-button`);
const scoreParagraph = document.querySelector(`#score`);
const gameHistoryParagraph = document.querySelector(`#game-history`);



// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  const scoreParagraph = document.querySelector(`#score`);
  scoreParagraph.textContent = document.getElementById("username").value + ":" + game.score.user + " v CPU:" + game.score.cpu;
  console.log(document.getElementById("username").value);
}


// updateGameHistoryUI
function updateGameHistoryUI(){
  const gameHistoryParagraph = document.querySelector(`#game-history`);
  gameHistoryParagraph.textContent = this.gameHistoryLog

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  
  //const username = document.querySelector(`#username`);
  

  game = new RockPaperScissors(this.username);

  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);

  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {

  const userSelection = document.getElementById(`user-selection`).value;
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });