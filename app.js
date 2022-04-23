const choiceContainer = document.getElementById('choice-container');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const playerWinsSpan = document.getElementById('player-wins');
const computerWinsSpan = document.getElementById('computer-wins');
const gameHeadline = document.getElementById('game-headline');
const gameInstructions = document.getElementById('game-instructions');
const roundResults = document.getElementById('round-results');

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
        roundResults.innerText = `TIE! You both chose ${playerSelection}.`;
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResults.innerText = `YOU chose ${playerSelection} which beats COMPUTER'S ${computerSelection}.`;
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResults.innerText = `YOU chose ${playerSelection} which beats COMPUTER'S ${computerSelection}.`;
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResults.innerText = `YOU chose ${playerSelection} which beats COMPUTER'S ${computerSelection}.`;
        playerScore++;
        playerScoreSpan.innerText = playerScore;
        return 'player win'; 
    } else {
        roundResults.innerText = `YOU chose ${playerSelection} which loses to COMPUTER'S ${computerSelection}.`;
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
        roundResults.innerHTML += `<br /><b>YOU WIN!!! To start a new game, choose Rock, Paper, or Scissors.</b>`
        gameOver();
    } else if (computerScore === 5) {
        computerWins++
        computerWinsSpan.innerText = computerWins;
        roundResults.innerHTML += `<br /><b>COMPUTER WINS!!! To start a new game, choose Rock, Paper, or Scissors.</b>`
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