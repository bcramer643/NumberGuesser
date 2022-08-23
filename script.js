let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget () {
  return randomNum = Math.floor(Math.random()*10);
}

function compareGuesses(humanNum, computerNum, target) {
  let compGuess = Math.abs(target - computerNum);
  let humGuess = Math.abs(target - humanNum);

  if (humanNum>9 || humanNum<0)
   alert('Please enter number between 0 and 9.')

  if (humGuess<= CompGuess)
    return true; 
  else
    return false; 
}

function updateScore (winner) {
  if (winner==='human')
    humanScore++;
  else if (winner==='computer')
    computerScore++;

}

function advanceRound(){
  currentRoundNumber++;
  
}
