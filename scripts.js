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
    if(choice == 'scissors' || choice == 'paper' || choice == 'rock') {
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
        playerSelection === 'rock' && computerSelection == 'scissors'
    ||  playerSelection === 'paper' && computerSelection == "rock"
    ||  playerSelection === 'scissors' && computerSelection == 'paper') {
        return 'win';
    } else {
        return 'lose'
    }
}

// main game best of 5 loop
function game() {

    let wins = 0;
    let losses = 0;

    for(let i = 1; i < 6; i++) {
        console.log("=========");
        console.log("ROUND " + i);
        const choice = String(promptInput("Please choose rock, paper or scissors")).toLowerCase();
        const computerChoice = computerPlay();

        switch(playRound(choice, computerChoice)) {
            case 'win':
                console.log(choice + " beats " + computerChoice);
                wins++;
                break;
            case 'lose':
                console.log(choice + " loses to " + computerChoice);
                losses++;
                break;
            case 'draw':
                console.log("Close one, two " + choice +"s makes it a draw!");
                break;
        }
    }

    console.log("=========");
    if(wins > losses) {
        console.log('CONGRATULATIONS! YOU WIN');
    } else if (losses > wins) {
        console.log('Nice try but the AI beat you, better luck next time!')
    } else {
        console.log('It was a draw, better luck next time!')
    }
    console.log("you won " + wins + " rounds out of 5");
};