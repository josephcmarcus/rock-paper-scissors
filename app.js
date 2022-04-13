let computerPlay = () => {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors';
    } 
};

let playerPlay = () => {
    let choice = prompt('Rock, Paper, or Scissors?');
    choice = choice.toLowerCase();
    return choice;
};
