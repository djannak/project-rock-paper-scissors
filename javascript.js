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

    