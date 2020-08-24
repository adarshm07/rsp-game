"use strict";

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(Math.floor(Math.random() * 3));

  var result = decideWinner(humanChoice, botChoice);

  var message = finalMessage(result);
  choice(humanChoice, botChoice, message);
}

function numberToChoice(num) {
  return ["rock", "paper", "scissor"][num];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied", color: "yellow" };
  } else {
    return { message: "You Won", color: "green" };
  }
}

function choice(humanImgChoice, botImgChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  const hDiv = document.getElementById("humanDiv");

  if (document.contains(hDiv)) {
    document.getElementById("humanDiv").remove();
    document.getElementById("botDiv").remove();
  }

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  // messageDiv.textContent = finalMessage.message;
  messageDiv.setAttribute("id", "messageDiv");
  document.getElementById("messageDiv").innerHTML = finalMessage.message;

  const message = document.getElementById('messageDiv');
  message.style.color = finalMessage.color;

  document.getElementById("isChoice").appendChild(humanDiv);
  humanDiv.classList.add("humanDiv");

  var humanImg = document.createElement("img");
  humanImg.src = imageDatabase[humanImgChoice];
  humanDiv.setAttribute("id", "humanDiv");
  humanDiv.appendChild(humanImg);

  document.getElementById("isChoice").appendChild(botDiv);
  botDiv.setAttribute("id", "botDiv");

  var botImg = document.createElement("img");
  botImg.src = imageDatabase[botImgChoice];
  botImg.classList.add("botImg");
  botDiv.appendChild(botImg);
}
