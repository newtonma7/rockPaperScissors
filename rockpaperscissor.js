let humanScore = 0
let computerScore = 0

let getComputerChoice = () =>{
    ans = Math.floor((Math.random()*3));

    return ans === 0 ? 'rock'
    : ans === 1 ? 'paper'
    : 'scissors'
}

let getHumanChoice = () => {
    ans = prompt('rock, paper, or scissors');

    return ans.toLowerCase() === 'rock' ? 'rock'
    : ans.toLowerCase() === 'paper' ? 'paper'
    : ans.toLowerCase() === ' scissors' ? 'scissors'
    : console.log('Please enter a valid input');
}

// is there a way to optimize this logic? maybe use numbers instead
function playRound(human, computer){
    if(human === 'rock' && computer === 'paper'){
        computerScore++;
        console.log('You lose! Paper beats Rock');
    }
    if(human === 'paper' && computer === 'scissors'){
        computerScore++;
        console.log('You lose! Scissors beats Paper')
    }
    if(human === 'scissors' && computer === 'rock'){
        computerScore++;
        console.log('You lose! Rock beats Scissors');
    }
    if(human === 'rock' && computer === 'scissors'){
        humanScore++;
        console.log('You win! Rock beats Scissors');
    }
    if(human === 'scissors' && computer === 'paper'){
        humanScore++;
        console.log('You win! Scissors beats Paper');
    }
    if(human === 'paper' && computer === 'rock'){
        humanScore++;
        console.log('You win! Paper beats Rock');
    }
    if(human === computer){
        console.log('Its a tie! Play again!')
    }
}

function playGame(){
    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playGame();

