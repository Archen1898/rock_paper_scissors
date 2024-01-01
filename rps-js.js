
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');

let compScore = 0;
let pScore = 0;

scissors.addEventListener('click', () => {
    let playerChoice = 'scissors';
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    let newResult = document.querySelector('#scoreResults');
    let updatePScore = document.querySelector('#playerScore');
    let updateCompScore = document.querySelector('#computerScore');

    if(result == 0){
        newResult.textContent = 'Tie!';
    }else if(result ==1){
        newResult.textContent = 'Player Wins the Round!';
        updatePScore.textContent = `Player Score: ${++pScore}`;
    }else if(result == -1){
        newResult.textContent = 'Computer Wins the Round!';
        updateCompScore.textContent = `Computer Score: ${++compScore}`;
    }
    checkWinner();
})

paper.addEventListener('click', () => {
    let playerChoice = 'paper';
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    let newResult = document.querySelector('#scoreResults');
    let updatePScore = document.querySelector('#playerScore');
    let updateCompScore = document.querySelector('#computerScore');

    if(result == 0){
        newResult.textContent = 'Tie!';
    }else if(result ==1){
        newResult.textContent = 'Player Wins the Round!';
        updatePScore.textContent = `Player Score: ${++pScore}`;
    }else if(result == -1){
        newResult.textContent = 'Computer Wins the Round!';
        updateCompScore.textContent = `Computer Score: ${++compScore}`;
    }
    checkWinner();
})

rock.addEventListener('click', () => {
    let playerChoice = 'rock';
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    let newResult = document.querySelector('#scoreResults');
    let updatePScore = document.querySelector('#playerScore');
    let updateCompScore = document.querySelector('#computerScore');

    if(result == 0){
        newResult.textContent = 'Tie!';
    }else if(result ==1){
        newResult.textContent = 'Player Wins the Round!';
        updatePScore.textContent = `Player Score: ${++pScore}`;
    }else if(result == -1){
        newResult.textContent = 'Computer Wins the Round!';
        updateCompScore.textContent = `Computer Score: ${++compScore}`;
    }
    checkWinner();
})
        
function checkWinner(){
    let winner;
    const finalWinner = document.querySelector('#scoreResults');
    let gameDone = 0;

    if(pScore >= 5){
        finalWinner.textContent= "Player Wins the Game!";
        gameDone=1;
        console.log(gameDone);
    }else if(compScore >= 5){
        finalWinner.textContent= "Computer Wins the Game!";
        gameDone=1;
        console.log(gameDone);
    }

    if(gameDone==1){
        const buttonArray = document.querySelector("#buttons");
        const rock = document.querySelector("#rock");
        const paper =  document.querySelector("#paper");
        const scissors = document.querySelector("#scissors");

        let newGameCompScore = document.querySelector("#computerScore");
        let newGamePlayerScore = document.querySelector("#playerScore");

        buttonArray.removeChild(rock);
        buttonArray.removeChild(paper);
        buttonArray.removeChild(scissors);

        newButton = document.createElement("button");
        newButton.textContent ="Play Again";

        newButton.addEventListener("click", () => {
            gameDone =0;
            buttonArray.appendChild(rock);
            buttonArray.appendChild(paper);
            buttonArray.appendChild(scissors);
            newGamePlayer = 0;
            newGameComputer = 0;
            newGamePlayerScore.textContent = `Player Score: ${newGamePlayer}`;
            newGameCompScore.textContent = `Computer Score: ${newGameComputer}`;
            buttonArray.removeChild(newButton);
        })

        buttonArray.appendChild(newButton);
    }
}
function getPlayerChoice(){
    playerChoice = playerChoice.toLowerCase();
    playerChoice.trim();
    console.log('Player: ' + playerChoice);
    while(playerChoice != 'paper' && playerChoice != 'rock' && playerChoice != 'scissors'){
    playerChoice = prompt('You did not correctly enter Rock, paper, or scissors.\nTry again.');
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.trim();
    }
    checkWinner();
return playerChoice;
}

function getComputerChoice(){
    let num = Math.floor(Math.random()*(4-1)+1);
    console.log(num);
    if(num == 1){
        choice = 'paper';
    }else if(num == 2){
        choice = 'rock';
    }else if(num == 3){
        choice = 'scissors';
    }
    console.log('Computer: ' + choice);
    return choice;
}


function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    console.log(player);
    console.log(computer);

    if(computer == player){
        return 0;
    }else if( (player=='rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper') ){
        return 1;
    }else{
        return -1;
    }
}

function game(){
    let Computer = 0;
    let Player = 0
    for(i =0 ; i<5; i=i+1){
        let result = playRound(getPlayerChoice(),getComputerChoice());
        if(result == "Computer Wins the Round!")
            Computer +=1;
        if(result == "Player Wins the Round!")
            Player += 1;
    }
   
    if (Computer > Player || Computer>=3){
        return "Computer Wins the Game!";
    }else if(Player > Computer || Player >= 3){
        return "Player Wins the Game!";
    }else{
        return "The Game is a tie!";
    }
    
}

//console.log(getComputerChoice());
//console.log(playRound(playerChoice,getComputerChoice()));
console.log(game());