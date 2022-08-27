// detecting all variable

let squares = document.querySelectorAll(".box");
let your = document.getElementById("your");
let computer = document.getElementById("computer");
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let scorediv = document.getElementById("scorewritten");
let quotediv = document.getElementById("quote");
let choice1 = document.getElementById("yourChoice");
let choice2 = document.getElementById("computerChoice");
// making button disabled at first

squares.forEach((square) => {
  square.disabled = true;
});
result.innerHTML = "Click Play Button to Play";
// on click listener

play.onclick = () => {
  squares.forEach((square) => {
    square.disabled = false;
  });
  result.innerHTML = " Chose from Rock , Paper , or Scissor ";
  quotediv.innerHTML = ":";
  scorediv.innerHTML = "Score";
  choice1.innerText = "Your Choice";
  choice2.innerText = "ComputerChoice";
};

squares.forEach((square) => {
  square.disabled = true;
});

squares.forEach((square) => {
  square.onclick = () => onClickSquare(square.innerText);
});

//get computer choice

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

// get result function

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

//generate score function
function onClickSquare(playerChoice) {
  //   console.log(playerChoice);
  let choices = document.querySelectorAll(".choice");
  choices.forEach((ch) => {
    ch.innerHTML = " ";
  });
  let computerChoice = getComputerChoice();
  let yourChoice = document.getElementById("you");
  let computer = document.getElementById("computer");
  yourChoice.innerHTML = playerChoice;
  computer.innerHTML = computerChoice;
  let score = getResult(playerChoice, computerChoice);
  let result = document.getElementById("result");
  if (score == 0) {
    result.innerHTML = "Match Drawn , Play Again";
  } else if (score == 1) {
    result.innerHTML = "Hurray , You Won";
  } else {
    result.innerHTML = "Sorry , You Lose";
  }
}
//reset button
reset.onclick = () => {
  let yourChoice = document.getElementById("you");
  let computer = document.getElementById("computer");
  yourChoice.innerText = "";
  computer.innerText = "";
  result.innerHTML = " Chose from Rock , Paper , or Scissor ";
  quotediv.innerHTML = ":";
  scorediv.innerHTML = "Score";
  choice1.innerText = "Your Choice";
  choice2.innerText = "ComputerChoice";
};
