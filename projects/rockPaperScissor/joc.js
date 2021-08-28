
var gameChoice = ["rock", "paper", "scissors"];

var randomChoiceIndex = Math.floor(Math.random() * 3);
var pcChoice = gameChoice[randomChoiceIndex];


function addEventForUser(type) {
  var btn = document.getElementById("btn-" + type);
  btn.addEventListener("click", function () {
    console.log("user choice - " + type);
    console.log(getResult(pcChoice, type));
  });
}

const start = document.getElementById("start")
start.addEventListener("click", function () {
  addEventForUser("rock");
  addEventForUser("paper");
  addEventForUser("scissors");
})

var resultat1 = document.getElementById("score")

function getResult(pcChoice, userChoice) {
  switch (userChoice) {
    case "rock":
      switch (pcChoice) {
        case "rock":
          return resultat1.innerText='win win';
        case "paper":
          return resultat1.innerText='win pc';
        case "scissors":
          return resultat1.innerText="win user";
        default:
      }
      break;
    case "paper":
      switch (pcChoice) {
        case "rock":
          return resultat1.innerText="win user";
        case "paper":
          return resultat1.innerText='win win';
        case "scissors":
          return resultat1.innerText='win pc';
        default:
      }
      break;
    case "scissors":
      switch (pcChoice) {
        case "rock":
          return resultat1.innerText='win pc';
        case "paper":
          returnresultat1.innerText="win user";
        case "scissors":
          return resultat1.innerText='win win';
        default:
      }
      break;
    default:
      break;
  }
}

