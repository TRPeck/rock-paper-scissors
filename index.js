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

function playGame() {
    let humanScore = 0, computerScore = 0;

    let introDiv = document.createElement("div");
    let introHead = document.createElement("h1");
    introHead.textContent = "Rock - Paper - Scissors";
    let introSub = document.createElement("h4");
    introSub.textContent = "- First to 5 Wins -";
    introDiv.style.backgroundColor = "black";
    introDiv.style.color = "white";
    introDiv.style.padding = "4px 8px";
    introDiv.style.marginBottom = "16px";
    introDiv.appendChild(introHead);
    introDiv.appendChild(introSub);

    let rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    let paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    let scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    });

    let bdy = document.querySelector("body");
    bdy.appendChild(introDiv);
    bdy.appendChild(rockBtn);
    bdy.appendChild(paperBtn);
    bdy.appendChild(scissorsBtn);

    let results = document.createElement("div");
    let lastPlayedHuman = document.createElement("h3");
    lastPlayedHuman.textContent = "Player: ";
    let lastPlayedComputer = document.createElement("h3");
    lastPlayedComputer.textContent = "Computer: "
    let roundResult = document.createElement("h2");
    roundResult.textContent = "-";
    let humanRunningScore = document.createElement("h4");
    humanRunningScore.textContent = "Your Score: " + humanScore;
    let computerRunningScore = document.createElement("h4");
    computerRunningScore.textContent = "Computer Score: " + computerScore;
    let gameResult = document.createElement("h1");
    gameResult.textContent = "";

    results.appendChild(lastPlayedHuman);
    results.appendChild(lastPlayedComputer);
    results.appendChild(roundResult);
    results.appendChild(humanRunningScore);
    results.appendChild(computerRunningScore);
    results.appendChild(gameResult);

    bdy.appendChild(results);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            roundResult.textContent = "You win! Rock beats Scissors!";
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            roundResult.textContent = "You win! Paper beats Rock!";
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            roundResult.textContent = "You win! Scissors beats Paper!";
        }
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            computerScore += 1;
            roundResult.textContent = "You lose! Rock beats Scissors!";
        }
        else if (computerChoice == "paper" && humanChoice == "rock") {
            computerScore += 1;
            roundResult.textContent = "You lose! Paper beats Rock!";
        }
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            computerScore += 1;
            roundResult.textContent = "You lose! Scissors beats Paper!";
        }
        else {
            roundResult.textContent = "You both chose " + humanChoice.replace(humanChoice[0], humanChoice[0].toUpperCase()) + "! It's a tie!";
        }
        humanChoice = humanChoice.replace(humanChoice[0], humanChoice[0].toUpperCase());
        lastPlayedHuman.textContent = "Player: " + humanChoice;
        computerChoice = computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase());
        lastPlayedComputer.textContent = "Computer: " + computerChoice;
        humanRunningScore.textContent = "Your Score: " + humanScore;
        computerRunningScore.textContent = "Computer Score: " + computerScore;

        if(humanScore == 5 || computerScore == 5) {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            gameResult.textContent = "Winner: ";
            if(humanScore == 5) { gameResult.textContent += "Player"; }
            else { gameResult.textContent += "Computer"; }
            let againBtn = document.createElement("button");
            againBtn.textContent = "Play Again?";
            againBtn.addEventListener("click", () => {
                introDiv.remove();
                rockBtn.remove();
                paperBtn.remove();
                scissorsBtn.remove();
                results.remove();
                playGame();
            });
            results.appendChild(againBtn);
        }
    }
}

window.addEventListener("load", () => {
    playGame();
});