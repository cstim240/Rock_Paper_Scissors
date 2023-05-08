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
    const computerSelection = getComputerChoice();
    console.log(`Computer chooses: ${computerSelection}\n`);
    console.log(`Player chose: ${playerSelection}\n`);
    const matchResult = document.querySelector(".matchResult");

    if (playerSelection == computerSelection){
        matchResult.textContent = "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        matchResult.textContent = "You Lose! Paper beats Rock";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        matchResult.textContent = "You Win! Paper beats Rock";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        matchResult.textContent = "You Win! Rock beats Scissors";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        matchResult.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        matchResult.textContent = "You Win! Scissors beats Paper";
    } else {
        matchResult.textContent = "You Lose! Scissors beats Paper";
    }
}



//plays 5 rounds of RSP
/*function simulateMatch(){
    
    for (let i = 0; i < 5; i++){
        let header = `Round ${i+1} begin! \n`;
        console.log(header);

        let playerPick = prompt("rock, paper, or scissors?");
        playerPick = playerPick.toLowerCase();
        console.log(`Player chooses: ${playerPick}\n`);

        console.log(playRound(playerPick));
        console.log("\n\n");
    }
}*/