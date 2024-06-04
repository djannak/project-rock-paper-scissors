console.log("hello world, i know you weren't expecting to see me here")

// ^^ message to test if everything is ok - when something's up, it doesn't show ^^

    let computerScore = 0;
    let humanScore = 0;

// ^^ vars in global scope for the scoring to be applied in the game ^^

    function getComputerResult() {

        let computerChoice
        let result = Math.floor(Math.random() * 3);

        switch(result) {
            case 0:
            computerChoice = "rock";
            break;

            case 1:
            computerChoice = "paper";
            break;
            
            case 2:
            computerChoice = "scissors";
            break;
          }

          console.log(computerChoice);
          return computerChoice;


    function getHumanChoice() {

        humanChoice = prompt("let's play! pick your option.", "rock, paper or scissors?");

            console.log(humanChoice);
            return humanChoice;
        
    }
          
    function playRound(humanChoice, computerChoice) {

        humanChoice = getHumanChoice();
        computerChoice = getComputerResult();

        if (humanChoice === computerChoice) {
            console.log("it's a tie baby!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }

        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("you lost this time!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("you're a winner baby!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("you're a winner baby!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }

        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("you lost this time!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }

        else if (humanChoice == "scissors" && computerChoice == "rock") {
            humanScore++;
            console.log("you're a winner baby!");
            console.log("computer score =" + " " + computerScore);
            console.log("your score =" + " " + humanScore);
        }
    }    
    
// will now move forward to step 6 - create playGame function

function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("humanity has won this time...");
}

    else if (humanScore === computerScore) {
        console.log("it's a draw... how exciting.");
}

    else
        console.log("technology has won this time...")
    }
}


playGame();
