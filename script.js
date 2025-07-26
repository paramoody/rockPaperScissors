let userScore = 0;

let computerScore = 0;

let round = 0;

let rockButton = document.querySelector('#Rock');
let paperButton = document.querySelector('#Paper');
let scissorsButton = document.querySelector('#Scissors');
let userScoreText = document.querySelector('#userScore');
let computerScoreText = document.querySelector('#computerScore');
let computerChoiceText = document.querySelector('#computerChoice');
let userChoiceText = document.querySelector('#userChoice');
let roundText = document.querySelector('#round');
userScoreText.textContent = 'user score: ' + userScore;
computerScoreText.textContent = 'computer score: ' + computerScore;

rockButton.addEventListener('click', handleClick);

paperButton.addEventListener('click', handleClick);

scissorsButton.addEventListener('click', handleClick);

function showWinner(userScore, computerScore) {
  if (userScore == 5) {
    alert('You won the game!');
  } else if (userScore == computerScore) {
    alert('You have tied');
  } else {
    alert('You have lost and brought great dishonor upon yourself');
  }
  reset();
}

function playRound(userChoice) {
  console.log('Computer Score: ' + computerScore);
  console.log('User Score: ' + userScore);
  let computerChoice = getComputerChoice();
  //let userChoice = prompt('Enter Rock, Paper, scissors');
  console.log('You chose ' + userChoice);
  console.log('Computer chose ' + computerChoice);
  userChoiceText.textContent = 'you chose: ' + userChoice;
  computerChoiceText.textContent = 'computer chose: ' + computerChoice;

  if (computerChoice == 'Rock') {
    if (userChoice == 'Rock') {
      console.log('Tie!');
    } else if (userChoice == 'Paper') {
      console.log('You Win!');
      userScore++;
    } else {
      console.log('You Lose!');
      computerScore++;
    }
  }
  if (computerChoice == 'Paper') {
    if (userChoice == 'Rock') {
      console.log('You lose!');
      computerScore++;
    } else if (userChoice == 'Paper') {
      console.log('Tie!');
    } else {
      console.log('You Win!');
      userScore++;
    }
  }
  if (computerChoice == 'Scissors') {
    if (userChoice == 'Rock') {
      console.log('You Win!');
      userScore++;
    } else if (userChoice == 'Paper') {
      console.log('You Lose!');
      computerScore++;
    } else {
      console.log('Tie!');
    }
  }
  userScoreText.textContent = 'user score: ' + userScore;
  computerScoreText.textContent = 'computer score: ' + computerScore;
}
{
}
function handleClick(event) {
  //console.log(event.target.id)
  let userChoice = event.target.id;
  round++;
  roundText.textContent = 'round: ' + round;

  playRound(userChoice);
  if (round >= 5) {
    setTimeout(() => {
      showWinner(userScore, computerScore);
    }, 10);
    
  }
}
//returns 'Rock', 'Paper', or 'Scissors' as a string
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

function reset() {
  round = 0;
  userScore = 0;
  computerScore = 0;
  roundText.textContent = 'round: 0';
  userScoreText.textContent = 'user score: 0';
  computerScoreText.textContent = 'computer score: 0';
  userChoiceText.textContent = 'you chose: ';
  computerChoiceText.textContent = 'computer chose: ';
}
