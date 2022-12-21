// Selectors
const options = document.querySelectorAll(".options");
const message = document.querySelector('.message');
const wns = document.querySelector('.wns');
console.log(options);

// Score count
let pScore = 0;
let cScore = 0;

// Game function
options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;// Player input
        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        // Comper player vs computer inputs
        compareInputs(pInput, cInput);
        // Update scores
        updateScore();
        // Winner check
        if (checkWinner()) {
          pScore = cScore = 0;
          updateScore();
        }
  });
});

// Update score 
function updateScore() {
  document.getElementById('pScore').textContent = pScore;
  document.getElementById('cScore').textContent = cScore;
}

// Winner check, first one reach 10 wins
function checkWinner() {
  if (pScore === 10 || cScore === 10) {
    if (pScore === 10) {
      wns.innerHTML = `you win the game`;
    }else{
      wns.innerHTML = `Computer wins`;
    }
      return true;
  }
  return false;
}

// Comparing inputs
function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  // Tie check
  if (pInput === cInput) {
    message.innerHTML = (`${currentMatch} is a Tie`);
    return;
  }

  // Rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      message.innerHTML = (`${currentMatch} = You Win`);
      pScore++;
    } else {
      message.innerHTML = (`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      message.innerHTML = (`${currentMatch} = You Win`);
      pScore++;
    } else {
      message.innerHTML = (`${currentMatch} = Computer Wins`);
      cScore++;
      
    }
  }
  // Scissors
  else {
    if (cInput === "Paper") {
      message.innerHTML = (`${currentMatch} = You Win`);
      pScore++;
    } else {
      message.innerHTML = (`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}
// Restart the game
function restart() {
  window.location.reload("restart");
}