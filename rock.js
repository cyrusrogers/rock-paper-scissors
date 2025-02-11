console.log("Hello World!")
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
let computerChoice = getComputerChoice();
//console.log(computerChoice)
/*counter = 0
while (counter < 10) {
   console.log(getComputerChoice());
   counter++;
}*/

function getHumanChoice() {
  let options = ["rock","paper","scissors"]
  let humanMove = prompt("Pick your move 'rock','paper'/'scissors': ").toLowerCase();
  if (options.includes(humanMove)) {
    return humanMove;
  } else {
    console.log("Invalid move!")
  }
}

let humanChoice = getHumanChoice ();
//console.log(humanChoice)


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
  console.log(`humanMove: ${humanChoice}`);
  console.log(`computerMove: ${computerChoice}`);
  
}
console.log(playRound(humanChoice,computerChoice));