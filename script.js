let userScore = 0;

let computerScore = 0;

function getComputerChoice() {
  computerMove = Math.floor(Math.random() * (4 - 1) + 1);
  
  if (computerMove == 1) {
    return 'Rock';
  } else if (computerMove == 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}


for (let i = 0; i < 5; i++ ) {
  playRound();
  console.log("Next Round");
}
if (userScore == 5) {
  console.log('You got 5 points! you won the game!');
} else {
  console.log('You have lost and brought great dishonor upon yourself');
}

function playRound() {
    console.log("Computer Score: " + computerScore);
    console.log("User Score: " + userScore);
  let computerChoice = getComputerChoice();
  let userChoice = prompt('Enter Rock, Paper, scissors');
  console.log('You chose ' + userChoice);
  console.log('Computer chose ' + computerChoice);

  if(computerChoice == 'Rock'){
    if (userChoice == 'Rock'){
        console.log("Tie!");
    }else if (userChoice == 'Paper'){
        console.log("You Win!");
        userScore ++;
    }else{
        console.log("You Lose!");
        computerScore++;
    }
  }
    if(computerChoice == 'Paper'){
    if (userChoice == 'Rock'){
        console.log("You lose!");
        computerScore++;
    }else if (userChoice == 'Paper'){
        console.log("Tie!");
        
    }else{
        console.log("You Win!");
        userScore++;
    }
  }
    if(computerChoice == 'Scissors'){
    if (userChoice == 'Rock'){
        console.log("You Win!");
        userScore++;
    }else if (userChoice == 'Paper'){
        console.log("You Lose!");
        computerScore ++;
    }else{
        console.log("Tie!");
        
    }
  }
}
