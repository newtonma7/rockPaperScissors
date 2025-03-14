let humanScore = 0
let computerScore = 0

let getComputerChoice = () =>{
    ans = Math.floor((Math.random()*3));

    return ans === 0 ? 'rock'
    : ans === 1 ? 'paper'
    : 'scissors'
}

let getHumanChoice = () => {
    ans = prompt('rock, paper, or scissors')

    return ans.toLowercase() === 'rock' ? 'rock'
    : ans.toLowerCase() === 'paper' ? 'paper'
    : ans.toLowerCase() === ' scissors' ? 'scissors'
    : console.log('Please enter a valid input')
}

// is there a way to optimize this logic? maybe use numbers instead
function playRound(human, computer){
    if(human === 'rock' && computer === 'paper'){
        computerScore++;
    }
    if(human === 'paper' && computer === 'scissors'){

    }
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

