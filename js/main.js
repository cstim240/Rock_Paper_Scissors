/** 
  Author: Tim Supan
    Program: The Odin Project - Foundations
    Date: May 2, 2023
*/

function getComputerChoice(){
    let computerChoiceNum = Math.floor(Math.random() * 3);
    
    switch (computerChoiceNum){
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something went wrong";
    }
}

function generatePlayerChoice(){
    let playerChoiceNum = Math.floor(Math.random() * 3);
    
    switch (playerChoiceNum){
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something went wrong";
    }
}

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    console.log(`Computer chooses: ${computerSelection}\n`);
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    } else {
        return "You Lose! Scissors beats Paper";
    }
}

//plays 5 rounds of RSP
function game(){
    for (let i = 0; i < 5; i++){
        let header = `Round ${i+1} begin! \n`;
        console.log(header);
        let playerPick = generatePlayerChoice();
        console.log(`Player chooses: ${playerPick}\n`);
        console.log(playRound(playerPick));
        console.log("\n\n");
    }
}