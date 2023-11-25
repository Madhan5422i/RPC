let rocks = document.querySelectorAll(".imgs");
let value1 = document.getElementById("a1");
let value2 = document.getElementById("a2");
let value3 = document.getElementById("a3");
const win = document.getElementById("winid");
let youch = document.getElementById("youch");

let value_1 = value1.getAttribute("data-value");
let value_2 = value2.getAttribute("data-value");
let value_3 = value3.getAttribute("data-value");
let scre = document.getElementById("scre");

let value = [value_1, value_2, value_3];

const options = ["ROCK", "PAPER", "SCISSOR"];

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomChoice = options[randomIndex];
  return randomChoice;
}

function compchoice() {
  const h2 = document.getElementById("spanid");
  h2.innerText = randomChoice();
  return h2.innerText;
}

async function youchoice() {
  return new Promise((resolve) => {
    value1.onclick = () => {
      youch.innerText = value_1;
      resolve(value_1);
    };

    value2.onclick = () => {
      youch.innerText = value_2;
      resolve(value_2);
    };

    value3.onclick = () => {
      youch.innerText = value_3;
      resolve(value_3);
    };
  });
}

rocks.forEach((rock) => {
  rock.onclick = async () => {
    const userChoice = await youchoice();
    const computerChoice = compchoice();
    console.log("User choice:", userChoice);
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
      win.innerText = "TIE";
    } else if (
      (userChoice === "ROCK" && computerChoice === "SCISSOR") ||
      (userChoice === "PAPER" && computerChoice === "ROCK") ||
      (userChoice === "SCISSOR" && computerChoice === "PAPER")
    ) {
      win.innerText = "WIN";
      scre.innerText = parseInt(scre.innerText) + 1;
    } else {
      win.innerText = "LOSE";
    }
  };
});

//rocks.forEach((rock) => {
//rock.onclick = () => {
//youchoice();
//compchoice();
//console.log(youchoice());
//console.log(compchoice());
//onsole.log(youch.innerText);

//tie();
//   };
// });
//});

//function tie() {
//let allMatch = true;

//for (let index = 0; index < options.length; index++) {
//if (options[index] !== value[index]) {
//  allMatch = false;
// break; // Break out of the loop as soon as a difference is found
//}
//}

//if (allMatch) {
//win.innerText = "TIE";
//} else {
//win.innerText = "SIM";
//}
//}
