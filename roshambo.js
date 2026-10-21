function getComputerChoice(){
    let compChoice = Math.floor(Math.random() *3);
    if(compChoice == 0){
        return "rock";
    }
    else if(compChoice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

//console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Pick Rock, Paper, or Scissors");
    return humanChoice;
}

//console.log(getHumanChoice());

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice == computerChoice){
            console.log("Tie!");
        }
        else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else if(computerChoice == "rock" && humanChoice == "scissors"){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if(computerChoice == "paper" && humanChoice == "rock"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if(computerChoice == "scissors" && humanChoice == "paper"){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("You won! " + humanScore + " to " + computerScore);
    }
    else if(computerScore > humanScore){
        console.log("You lost... " + computerScore + " to " + humanScore);
    }
    else if (computerScore == humanScore){
        console.log("Tie! " + humanScore + " ALL");
    }
}

playGame();
