console.log("hello world, i know you weren't expecting to see me here")

// ^^ message to test if everything is ok - when something's up, it doesn't show ^^

    function getComputerResult() {

        var computerChoice
        var result = Math.floor(Math.random() * 3);

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

    }

    // get human results 
    // intent - write a function that takes the user choice and returns it
    // name it getHumanChoice
    // Write so that getHumanChoice will return one of the valid choices depending on what the user inputs - use prompt method
    // test function w/ console.log

    // 1 prompt window with the following ''let's play! pick your option.'' (sugg text - ''rock, paper or scissors?'') 
    // 1 - command should be prompt(message, defaultValue)
    // 1 - return the value input by user

    // 1.2 if answer is outside those three - prompt a reply ''remember the options, rock, paper or scissors? try again!''
    
    // 3 if answer is rock paper or scissors, return value, despite upper or lowercase or BoTh

    // test function 
    
    function getHumanChoice() {

        let humanChoice = prompt("let's play! pick your option.", "rock, paper or scissors?");

        console.log(humanChoice);
        return humanChoice.toLowerCase();
    }


    //  write function that takes human + 
    //  computer player choices as arguments +
    //  plays a single round + 
    //  increments the round winner’s score + 
    //  logs a winner announcement.

        // Create a new function - playRound.
        // Define two parameters for playRound: humanChoice + computerChoice - Use these two parameters to take the human and computer choices as arguments.
        // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
        // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
        // Increment the humanScore or computerScore variable based on the round winner.
        
        // example:

        // function playRound(humanChoice, computerChoice) {
        //     // your code here!
        //   }
          
        //   const humanSelection = getHumanChoice();
        //   const computerSelection = getComputerChoice();
          
        //   playRound(humanSelection, computerSelection);
          
    function playRound(humanChoice, computerChoice) {



    }
    
