// global variables
const result = document.querySelector('#result');
const scoreBoard = document.querySelector('#scoreboard');
const reset = document.querySelector('#reset');
const playerBoard = document.querySelector('.player-points');
const aiBoard = document.querySelector('.ai-points');
const playerButton = document.querySelectorAll('.button');
const winMsg = document.querySelector('#winMsg');
let aiScore = 0;
let playerScore = 0;

// random generator for computers throw
function computerPlay() {
    const ranNo = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors']
    return choices[ranNo];
}

// console prompt user for throw choice
function promptInput(msg) {
    let choice = String(window.prompt(msg)).toLowerCase();
    if (choice == 'scissors' || choice == 'paper' || choice == 'rock') {
        return choice;
    } else {
        return promptInput("That's not a legal throw, try again");
    }
}

// single round logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.insertAdjacentHTML('beforeend', "it's a draw!")
        return 'draw';
    } else if (
        playerSelection === 'rock' && computerSelection == 'scissors' ||
        playerSelection === 'paper' && computerSelection == "rock" ||
        playerSelection === 'scissors' && computerSelection == 'paper') {
        result.insertAdjacentHTML('beforeend', "You win this round!");
        playerScore++;
        return 'win';
    } else {
        result.insertAdjacentHTML('beforeend', "Ooops! You lost this round.");
        aiScore++;
        return 'lose'
    }
}

// add button click event listeners
Array.from(playerButton).map(i => addEvent(i));

// event listener
function addEvent(button) {
    button.addEventListener('click', function(e) {
        showItem(reset);
        let aiPick = computerPlay();
        let playerPick = e.target.alt;
        result.innerHTML = "AI picked: <img src='icons/" + aiPick + ".png'><br/>";
        playRound(playerPick, aiPick);
        setScores();
        didWeWin();
        });
    }

// set score board
function setScores() {
    playerBoard.innerHTML = playerScore;
    aiBoard.innerHTML = aiScore;
}

// check for winner
function didWeWin() {
    if (playerScore == 5) {
        Array.from(playerButton).map(i => hideItem(i));
        winMsg.innerHTML = "CONGRATULATIONS YOU WIN!"
        showItem(winMsg);
    } else if(aiScore == 5) {
        Array.from(playerButton).map(i => hideItem(i));
        winMsg.innerHTML = "Ottoh, looks like you lost!"
        showItem(winMsg);
    }
}

// hide element
function hideItem(element) {
    element.className = String(element.className).concat(" hidden");
}
// unhide element
function showItem(element) {
    element.classList = Array.from(element.classList).filter(a => a != "hidden");
}


// reset the game
reset.addEventListener('click', function() {
    aiScore = 0;
    playerScore = 0;
    setScores();
    Array.from(playerButton).map(i => showItem(i));
    hideItem(reset);
    hideItem(winMsg);
    result.innerHTML = "";


})
