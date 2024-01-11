// Rps Function

// Initial start
const playGame = ()=>{
    alert("Welcome to RPS Game");
    const startGame = confirm ("Are you ready to play");
    startGame ? player() : alert("Okey We Will Play Later");
};

// Player 
const player = ()=>{
    while(true){
        let playerChoice = getPlayerChoice();               //Get player Choice
        playerChoice = formatPlayerChoice(playerChoice);    //Format player choice
        if(playerChoice === ""){
            inValid();
            continue;
        }
        if(!playerChoice){
            notIntrest();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);{      // Evaluate Player Choice
            if(!playerChoice){
                inValid();
                continue;
            }

            // computer
            const computerChoice = getComputerChoice();             // Computer Choice
            const result = winner(computerChoice,playerChoice);     //Play conditions
            displayresult(result);
            if(playAgain()){
                continue;
            }else{
                thanksForPlaying();
                break;
            }
        }
    }
}

//Get player Choice
let getPlayerChoice = ()=>{
    return prompt("Please Enter Rock , Paper or Sissor");
}

//Format player choice
let formatPlayerChoice = (playerChoice)=>{
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
}

// Evaluate Player Choice
const evaluatePlayerChoice = (playerChoice)=>{
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "sissor"
    ){
        return playerChoice;
    }else{
        return false;
    }
}

// Computer Choice
let getComputerChoice = ()=>{
    let computerChoice = Math.floor(Math.random()*3);
    let rps = ["rock" , "paper" , "sissor"];
    return rps[computerChoice];
}


// Play conditions
const winner = (computerChoice,playerChoice)=>{
    const champion =
                // Rock
                (playerChoice === "rock" && computerChoice === "paper")? `Player: ${playerChoice} \nComputer: ${computerChoice} \ncomputer Wins \n\n\nBetter Luck Next time`:
        
                (playerChoice === "rock" && computerChoice === "sissor")? `Player: ${playerChoice} \nComputer: ${computerChoice} \nPlayer Wins \n\n\nSupper Congratulations`:
    
                // Paper
                (playerChoice === "paper" && computerChoice === "rock")? `Player: ${playerChoice} \nComputer: ${computerChoice} \nPlayer Wins \n\n\nSupper Congratulations`:
    
                (playerChoice === "paper" && computerChoice === "sissor")? `Player: ${playerChoice} \nComputer: ${computerChoice} \ncomputer Wins \n\n\nBetter Luck Next time`:
    
                // sissor
                (playerChoice === "sissor" && computerChoice === "rock")? `Player: ${playerChoice} \nComputer: ${computerChoice} \ncomputer Wins \n\n\nBetter Luck Next time`:
                
                (playerChoice === "sissor" && computerChoice === "paper")? `Player: ${playerChoice} \nComputer: ${computerChoice} \nPlayer Wins \n\n\nSupper Congratulations`: `Player: ${playerChoice} \nComputer: ${computerChoice} \n\nTie `;


    return champion;
}
const displayresult = (result)=>{
    alert(result)
}

const inValid = ()=>{
    return alert("I think you Make a Spelling Mistake . Please Check the Letters");
}
const notIntrest = ()=>{
    return alert("I think you so confuse.We Will Play Later")
}

const playAgain = ()=>{
     return confirm("Play Again");
}
const thanksForPlaying = ()=>{
    return alert("Thanks For Playing");
}


playGame();