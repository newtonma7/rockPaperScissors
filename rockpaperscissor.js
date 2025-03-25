let humanScore = 0
let computerScore = 0

let getComputerChoice = () =>{
    ans = Math.floor((Math.random()*3));

    return ans === 0 ? 'rock'
    : ans === 1 ? 'paper'
    : 'scissors'
}

let getHumanChoice = (ans) => {

    return ans.toLowerCase() === 'rock' ? 'rock'
    : ans.toLowerCase() === 'paper' ? 'paper'
    : 'scissors';
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

const rockBtn = document.querySelector("button");
const paperBtn = document.querySelector("button");
const scissorsBtn = document.querySelector("button");

rockBtn.addEventListener("click", playRound(getHumanChoice('rock'),getComputerChoice()));
paperBtn.addEventListener("click", playRound(getHumanChoice('paper'),getComputerChoice()));
scissorsBtn.addEventListener("click", playRound(getHumanChoice('scissors'),getComputerChoice()));

const winnerH1 = document.querySelector("h1");
const scoreH1 = document.querySelector("h1");

if(humanScore == 5){

}

