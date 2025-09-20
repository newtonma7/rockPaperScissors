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

function playRound(human, computer){
    if(human === 'rock' && computer === 'paper'){
        computerScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You lose this round! Paper beats Rock';
    }
    if(human === 'paper' && computer === 'scissors'){
        computerScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You lose this round! Scissors beats Paper';
    }
    if(human === 'scissors' && computer === 'rock'){
        computerScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You lose this round! Rock beats Scissors';
    }
    if(human === 'rock' && computer === 'scissors'){
        humanScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You win! Rock beats Scissors';
    }
    if(human === 'scissors' && computer === 'paper'){
        humanScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You win! Scissors beats Paper';
    }
    if(human === 'paper' && computer === 'rock'){
        humanScore++;
        score.textContent = humanScore + " - " + computerScore;
        welcome.textContent = 'You win! Paper beats Rock';
    }
    if(human === computer){
        welcome.textContent = 'Its a tie this round! Play again!';
    }

    if(humanScore == 5){
        welcome.textContent = 'You Won!';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        endRound();
    }
    if(computerScore == 5){
        welcome.textContent = 'You Lost...';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        endRound();
    }
}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const score = document.querySelector(".scoreline");
const welcome = document.querySelector(".welcome");
const buttons = document.querySelector(".buttonbox");

rockBtn.addEventListener("click", () => {
    playRound(getHumanChoice('rock'),getComputerChoice())
});

paperBtn.addEventListener("click", () => {
    playRound(getHumanChoice('paper'),getComputerChoice())
});

scissorsBtn.addEventListener("click", () => {
    playRound(getHumanChoice('scissors'),getComputerChoice())
});

function endRound(){
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again?';
    playAgainButton.id = 'play-again';
    playAgainButton.className = 'button-blue'

    
    playAgainButton.addEventListener("click", () => {
        resetGame()
    })
    buttons.appendChild(playAgainButton);
}

function resetGame(){
    humanScore = 0
    computerScore = 0
    const remButton = document.getElementById('play-again');
    if(remButton){
        remButton.remove();
    }
    score.textContent = humanScore + " - " + computerScore;
    welcome.textContent = 'Click to play!'
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}
