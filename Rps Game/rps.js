//Rock paper Sizzors
alert("Welcome to Our rock,paper,sissors Game");
let player = confirm("You are ready to Play. Click Ok");
if(player){
    alert("Let's GO");
    let playerChoice = prompt("Please Enter Rock , Paper or Sissor")
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "sissor"

        ){
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = (computerChoice === 1) ? "rock":
                                 (computerChoice === 2) ? "paper":"sissor"

            let result = (playerOne === computerChoice) ? `Player: ${playerOne} \ncomputer: ${computer} \nTie \n\n\nSupper you Guess Correct`:
            (playerOne === "rock" && computer === "paper")? `Player: ${playerOne} \ncomputer: ${computer} \ncomputer Wins \n\n\nBetter Luck Next time`:
            (playerOne === "rock" && computer === "sissor")? `Player: ${playerOne} \ncomputer: ${computer} \nPlayer Wins \n\n\nSupper Congratulations`:
            (playerOne === "paper" && computer === "rock")? `Player: ${playerOne} \ncomputer: ${computer} \nPlayer Wins \n\n\nSupper Congratulations`:
            (playerOne === "paper" && computer === "sissor")? `Player: ${playerOne} \ncomputer: ${computer} \ncomputer Wins \n\n\nBetter Luck Next time`:
            (playerOne === "sissor" && computer === "rock")? `Player: ${playerOne} \ncomputer: ${computer} \ncomputer Wins \n\n\nBetter Luck Next time`:`Player: ${playerOne} \ncomputer: ${computer} \nPlayer Wins \n\n\nSupper Congratulations`;
            alert(result);

            let playagain = confirm("Play Again");
            playagain ? location.reload():alert("Thanks for Playing")
        }
        else{
            alert("I Think you Make Spelling Mistake. Please Check and Correct the mistake.")
            let playagain = confirm("Play Again");
            playagain ? location.reload():alert("Thanks you")
        }


    }
    else{
        alert("I think you are confuse. so We will play later.")
        let playagain = confirm("Play Again");
        playagain ? location.reload():alert("Thanks You")
    }
}
else{
    alert("Ok,we will play Next time")
}