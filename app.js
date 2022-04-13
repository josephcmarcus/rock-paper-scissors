let computerPlay = () => {
    let computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        return 'rock';
    } else if (computerSelection === 2) {
        return 'paper';
    } else if (computerSelection === 3) {
        return 'scissors';
    } 
};

let playerPlay = () => {
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Tie! You both chose ${playerSelection}.`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
    } else {
        console.log(`You chose ${playerSelection} which loses to ${computerSelection}. You lose this round.`);
    };
}