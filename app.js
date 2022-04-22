const choiceContainer = document.getElementById('choice-container');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const playerWinsSpan = document.getElementById('player-wins');
const computerWinsSpan = document.getElementById('computer-wins');

let roundResult = '';
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

playerScoreSpan.innerText = playerScore;
computerScoreSpan.innerText = computerScore;
playerWinsSpan.innerText = playerWins;
computerWinsSpan.innerText = computerWins;

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
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You chose ${playerSelection} which beats ${computerSelection}. You win this round!`);
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else {
        console.log(`You chose ${playerSelection} which loses to ${computerSelection}. You lose this round.`);
        computerScore++;
        computerScoreSpan.innerText = computerScore;
        return 'computer win';
    }; 
};

let gameOver = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
}

function scoreCheck(playerScore, computerScore) {
    if (playerScore === 5) {
        playerWins++
        playerWinsSpan.innerText = playerWins;
        gameOver();
    } else if (computerScore === 5) {
        computerWins++
        computerWinsSpan.innerText = computerWins;
        gameOver();
    }
};

choiceContainer.addEventListener('click', function(e) {
    if (e.target.classList != 'choice-btn' ) {
        return;
    }
    playRound(playerPlay(e), computerPlay());
    scoreCheck(playerScore, computerScore);
});