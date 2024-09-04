/* Step 2: Get the Computer Choice - Write a function that randomly returns either 'rock', 'paper', or 'scissors'

    Get random number between 0 and 1
    Multiply random number by number of choices (giving us between 0 and 3)
    Get floor of random number (giving us 0, 1, or 2)
    If random number is 0 return string of 'rock'
    If random number is 1 return string of 'paper'
    If random number is anything else (can only be 2) return string of 'scissors' */

    function getComputerChoice() {
        let num = Math.floor(Math.random() * 3);
        if (num === 0) {
            return "rock";
        }
        else if (num === 1) {
            return "paper";
        }
        return "scissors";
    }

/* Step 3: Get Human Choice - Write a function that takes the user choice and returns it

    Prompt the user to enter a string for their choice of move
    Set the user's response to a variable
    If the user enters 'rock', return 'rock'
    If the user enters 'paper', return 'paper'
    If the user enters 'scissors', return scissors'
    If the user enters anything else, log 'invalid input' and call the function again */

    function getHumanChoice() {
        let choice = prompt("Rock, paper, or scissors?");
        if (choice != null) { choice = choice.toLowerCase(); }
        switch(choice) {
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
            default:
                console.log("Invalid input. Please make another selection.");
                return getHumanChoice();
        }
    }

/* Step 4: Declare the players' score variables - Write variables to keep track of the players' scores

    Self explanatory. */

    // let humanScore = 0, computerScore = 0;

/* Step 5: Write the logic to play a single round - Take the player's choices as arguments, play a single round, increment winner's score and log a winner announcement

    Create function with the human's choice and the computer's choice as parameters
    If player's choice beats computer's choice add 1 to player's score and log player winning message to the console
    If computer's choice beats player's choice add 1 to computer's score and log computer winning message to the console
    If both choices are the same don't increment either score and log tie message to the console. 

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats Scissors!");
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! Paper beats Rock!");
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! Scissors beats Paper!");
        }
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors!");
        }
        else if (computerChoice == "paper" && humanChoice == "rock") {
            computerScore += 1;
            console.log("You lose! Paper beats Rock!");
        }
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper!");
        }
        else {
            console.log("You both chose " + humanChoice + "! It's a tie!");
        }
    } */

/* Step 6: Write the logic to play the entire game - Write a function that calls playRound to play 5 rounds, keeps track of score, and declares a winner at the end

    While the player's score or the computer's score are less than or equal to 5
        Get the player's choice
        Get the computer's choice
        Call playRound with the choices as arguments
    If the player's score is equal to 5, log that they are the winner to the console
    If the computer's score is equal to 5, log that the computer is the winner to the console */

    function playGame() {
        let humanScore = 0, computerScore = 0;

        function playRound(humanChoice, computerChoice) {
            if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore += 1;
                console.log("You win! Rock beats Scissors!");
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore += 1;
                console.log("You win! Paper beats Rock!");
            }
            else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore += 1;
                console.log("You win! Scissors beats Paper!");
            }
            else if (computerChoice == "rock" && humanChoice == "scissors") {
                computerScore += 1;
                console.log("You lose! Rock beats Scissors!");
            }
            else if (computerChoice == "paper" && humanChoice == "rock") {
                computerScore += 1;
                console.log("You lose! Paper beats Rock!");
            }
            else if (computerChoice == "scissors" && humanChoice == "paper") {
                computerScore += 1;
                console.log("You lose! Scissors beats Paper!");
            }
            else {
                console.log("You both chose " + humanChoice.replace(humanChoice[0], humanChoice[0].toUpperCase()) + "! It's a tie!");
            }
        }

        while(humanScore < 5 && computerScore < 5) {
            playRound(getHumanChoice(), getComputerChoice());
        }

        if (humanScore == 5) {
            console.log("You win the game!");
        }
        else {
            console.log("You lost! Better luck next time!");
        }
    }