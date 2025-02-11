console.log("Hello World!")
function getComputerChoice() {
  let computerChoice = Math.round(Math.random()*100)/100
  if (computerChoice < 0.34) {
    return "rock";
  } else if (computerChoice >= 0.34 && computerChoice < 0.67) {
    return "paper";
  } else {
     return "scissors"
  }
 
}

/*console.log(getComputerChoice())
counter = 0
while (counter < 10) {
   console.log(getComputerChoice());
   counter++;
}*/

function getHumanChoice() {
  
}