// welcome message
console.log("Welcome to Rock-Paper-Scissors Club");
console.log("When you're ready please type 'new game' to begin your match: Best of 5");

// random generator for computers throw
function computerPlay() {
    const ranNo = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors']
    return choices[ranNo];
}

// prompt user for throw choice
function promptInput(msg) {
    let choice = String(window.prompt(msg)).toLowerCase();
    if (choice == 'scissors' || choice == 'paper' || choice == 'rock') {
        return choice;
    } else {
        return promptInput("That's not a legal throw, try again");
    }
}

// single round code
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        playerSelection === 'rock' && computerSelection == 'scissors' ||
        playerSelection === 'paper' && computerSelection == "rock" ||
        playerSelection === 'scissors' && computerSelection == 'paper') {
        return 'win';
    } else {
        return 'lose'
    }
}

// add button click event listeners
playerButton = Array.from(document.querySelectorAll('img'));
playerButton.map(i => addEvent(i));

function addEvent(button) {
    button.addEventListener('click', function(e) {

        console.log(playRound(e.target.alt, computerPlay()));
        });
    }