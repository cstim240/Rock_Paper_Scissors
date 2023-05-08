/** 
  Author: Tim Supan
    Program: The Odin Project - Foundations
    Date: May 8, 2023
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

function playRound(playerSelection){
    removeBanner();
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
        winMsg("player");
        disableButtons();
    } 
    if (botScore == 5){
        winMsg("computer");
        disableButtons();
    }
}

function removeBanner(){
    const header = document.querySelector(".header");
    const scenario = document.querySelector(".scenario");
    if (scenario){
        header.removeChild(scenario);
    } else {
        return;
    }
}

function restoreBanner(){
    const header = document.querySelector(".header");
    const scenario = document.querySelector(".scenario");
    
    if (scenario){
        return;
    } else {
        const img = document.createElement("img");
        img.classList.add("scenario");
        img.src = "./images/openScene.jpg";
        header.appendChild(img);
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
    console.log(`User score is: ${userScore}`);
    return userScore;
}

function addComputerScore(botScore){
    let computerScore = document.querySelector(".compScore");
    computerScore.textContent = `${++botScore}`;
    console.log(`Bot score is: ${botScore}`);
    return botScore;
}

function winMsg(winner){
    const endResult = document.querySelector(".endResult");
    const p = document.createElement('p');
    p.classList.add('resultmsg');

    const img = document.createElement("img");
    
    if (winner == "player"){
        p.textContent = "You won against him! Have fun in prison, Jack!";
        img.src = "./images/playerWin.jpg";
        img.classList.add('resultimg');

    } else {
        p.textContent = "You LOST against Jack! Now your dog is sad!"; 
        img.src = "./images/playerLoss.jpg";
        img.classList.add('resultimg');
    }
    endResult.appendChild(p);
    endResult.appendChild(img);
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
    const resultimg = document.querySelector(".resultimg");
    if (resultmsg){
        endResult.removeChild(resultmsg);
        endResult.removeChild(resultimg);
    }

    restoreBanner();
    enableButtons();
    window.scrollTo(0,0); //moves browser view to the top of page
}

/*function generatePlayerChoice(){
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
}*/

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