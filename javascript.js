console.log("hello world, i know you weren't expecting to see me here")

function getComputerResult() {

    let Choice = Math.floor(Math.random() * 3);
    
        if (Choice === 0) {
        return "rock";
        }
    
        else if (Choice === 1) {
        return "paper";
        }
    
        else (Choice === 2) 
        return "scissors";
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

        let userChoice = prompt("let's play! pick your option.", "rock, paper or scissors?");
        return userChoice;
        console.log(userChoice);

    }