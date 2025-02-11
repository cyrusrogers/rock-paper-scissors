console.log("Hello World!")
let humanChoice,computerChoice;
function getComputerChoice() {
  let computerMove = Math.round(Math.random()*100)/100
  if (computerMove < 0.34) {
    return "rock";
  } else if (computerMove >= 0.34 && computerMove < 0.67) {
    return "paper";
  } else {
     return "scissors"
  }
 
}
computerChoice = getComputerChoice();


function getHumanChoice() {
  let options = ["rock","paper","scissors"]
  let humanMove = prompt("Pick your move 'rock','paper'/'scissors': ").toLowerCase();
  if (options.includes(humanMove)) {
    return humanMove;
  } else {
    console.log("Invalid move!")
  }
}
 humanChoice = getHumanChoice ();


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tie = 0;
  function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`it's a tie! ${humanChoice} ties with ${computerChoice}`)
      tie++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") || 
      (humanChoice === "paper" && computerChoice === "rock" ) || 
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
      
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
      computerScore++;
    }
      
  }
  for (let i = 1; i <= 5; i++) {
    let choices = ["rock","paper","scissors"]
    let humanChoice = prompt("Pick your move 'rock','paper'/'scissors': ").toLowerCase();
    let computerChoice=choices[Math.floor(Math.random()*choices.length)]
    console.log(`Round ${i}:`);
    playRound(humanChoice, computerChoice);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}, Ties: ${tie}\n`);
  }

  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (humanScore < computerScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}
  playGame();