var validChoices = ["rock", "paper", "scissors"];

const getUserInput = (userInput) => {
  validChoices.includes(userInput) ? userInput : console.log("invalid Choice");
};
const getComputerChoice = () => {
  const result = Math.floor(Math.random() * validChoices.length);
  return validChoices[result];
};

const determineWinner = (uc, cc) => {
  if (uc == "rock") {
    if (cc == "paper") {
      console.log("computer wins");
    } else if (cc == "scissors") {
      console.log("user wins");
    } else {
      console.log("tie");
    }
  }
  if (uc == "paper") {
    if (cc == "rock") {
      console.log("user wins");
    } else if (cc == "scissors") {
      console.log("computer wins");
    } else {
      console.log("tie");
    }
  }
  if (uc == "scissors") {
    if (cc == "paper") {
      console.log("computer wins");
    } else if (cc == "scissors") {
      console.log("tie");
    } else {
      console.log("user wins");
    }
  }
};
determineWinner(getUserInput("rock"), getComputerChoice());
