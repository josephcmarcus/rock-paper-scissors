const choiceButtons = document.querySelectorAll('button');

let computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        computerSelection = 'rock';
        return computerSelection;
    } else if (randomNumber === 2) {
        computerSelection = 'paper';
        return computerSelection;
    } else if (randomNumber === 3) {
        computerSelection = 'scissors';
        return computerSelection;
    } 
};

let playerPlay = (e) => {
    let playerSelection = e.target.id
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Tie! You both chose ${playerSelection}.`);
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
        return 'player win'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
        return 'player win'; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
        return 'player win'; 
    } else {
        console.log(`You chose ${playerSelection} which loses to ${computerSelection}. You lose this round.`);
        return 'computer win';
    }; 
};

choiceButtons.forEach(addEventListener('click', function(e) {
    playRound(playerPlay(e), computerPlay());
}));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerPlay(), computerPlay());
        if (roundResult === 'tie') {
            console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}.`);
        } else if (roundResult === 'player win') {
            playerScore++;
            console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}.`);
        } else if (roundResult === 'computer win') {
            computerScore++;
            console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}.`);
        }
    } if (playerScore > computerScore) {
        console.log(`Hooray! You win. Final score was Player: ${playerScore} Computer: ${computerScore}.`);
        return 'player wins the game'
    } else if (playerScore < computerScore) {
        console.log(`Boo... you lost. Final score was Player: ${playerScore} Computer: ${computerScore}.`);
        return 'computer wins the game'
    } else {
        console.log(`Looks like a tie! Final score was Player: ${playerScore} Computer: ${computerScore}.`)
        return 'tie game'
    };
};