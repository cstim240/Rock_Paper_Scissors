/** 
  Author: Tim Supan
    Program: The Odin Project - Foundations
    Date: May 2, 2023
*/

let userScore = 0;
let botScore = 0;

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
        botScore = addComputerScore(botScore);
        matchResult.textContent = "You Lose! Paper beats Rock";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        matchResult.textContent = "You Win! Paper beats Rock";
        userScore = addPlayerScore(userScore);
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        userScore = addPlayerScore(userScore);
        matchResult.textContent = "You Win! Rock beats Scissors";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        botScore = addComputerScore(botScore);
        matchResult.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore = addPlayerScore(userScore);
        matchResult.textContent = "You Win! Scissors beats Paper";
    } else {
        botScore = addComputerScore(botScore);
        matchResult.textContent = "You Lose! Scissors beats Paper";
    }

    if (userScore == 5){
        playerWin();
        disableButtons();
    } 
    if (botScore == 5){
        botWin();
        disableButtons();
    }
}

function disableButtons(){
    const btns = document.querySelectorAll(".buttons");
    btns.forEach(btn => {
        btn.disabled = true;
    });
}

function enableButtons(){
    const btns = document.querySelectorAll(".buttons");
    btns.forEach(btn => {
        btn.disabled = false;
    });
}

function addPlayerScore(userScore){
    let playerScore = document.querySelector(".playerScore");
    playerScore.textContent = `${++userScore}`;
    console.log(userScore);
    return userScore;
}

function addComputerScore(botScore){
    let computerScore = document.querySelector(".compScore");
    computerScore.textContent = `${++botScore}`;
    console.log(botScore);
    return botScore;
}

function playerWin(){
    const endResult = document.querySelector(".endResult");
    const p = document.createElement('p');
    p.classList.add('resultmsg');
    p.textContent = "You won against the computer! Woooooo!";
    endResult.appendChild(p);
}

function botWin(){
    const endResult = document.querySelector(".endResult");
    const p = document.createElement('p');
    p.classList.add('resultmsg');
    p.textContent = "You LOST against the computer! Haha loser!";
    endResult.appendChild(p);
}

function reset(){
    userScore = 0;
    botScore = 0;
    let playerScore = document.querySelector(".playerScore");
    playerScore.textContent = `${userScore}`;
    let computerScore = document.querySelector(".compScore");
    computerScore.textContent = `${botScore}`;
    const matchResult = document.querySelector(".matchResult");
    matchResult.textContent = "";

    const endResult = document.querySelector(".endResult");
    const resultmsg = document.querySelector(".resultmsg");
    if (resultmsg){
        endResult.removeChild(resultmsg);
    }

    enableButtons();

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