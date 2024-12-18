const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function startGame(userMove) {
  let computerMove = pickComputerMove();
  let result = "";

  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "you lose";
    } else if (computerMove === "scissor") {
      result = "you win!!!";
    }
  }

  if (userMove === "paper") {
    if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissor") {
      result = "you lose";
    } else if (computerMove === "rock") {
      result = "you win!!!";
    }
  }

  if (userMove === "scissor") {
    if (computerMove === "scissor") {
      result = "tie";
    } else if (computerMove === "rock") {
      result = "you lose";
    } else if (computerMove === "paper") {
      result = "you win!!!";
    }
  }

  if (result === "tie") {
    score.ties++;
  } else if (result === "you win!!!") {
    score.wins++;
  } else if (result === "you lose") {
    score.losses++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".js-moves"
  ).innerHTML = `User : ${userMove} | ${computerMove} : Computer`;
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-stats").innerHTML = `
  losses: ${score.losses},
  wins: ${score.wins},
  ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber <= 0.3) {
    computerMove = "rock";
  } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
    computerMove = "paper";
  } else if (randomNumber > 0.6 && randomNumber <= 1) {
    computerMove = "scissor";
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  document.querySelector(
    ".js-moves"
  ).innerHTML = `User : _______ | _______ : Computer`;
  document.querySelector(".js-result").innerHTML = `result:`;
  document.querySelector(".js-stats").innerHTML = `losses: ${score.losses},
  wins: ${score.wins},
  ties: ${score.ties}`;
}

function randomUserMove() {
  const randomNumber = Math.random();
  let move;
  if (randomNumber >= 0 && randomNumber <= 0.3) {
    move = "rock";
  } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
    move = "paper";
  } else if (randomNumber > 0.6 && randomNumber <= 1) {
    move = "scissor";
  }
  return move;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const userMove = randomUserMove();
      startGame(userMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}