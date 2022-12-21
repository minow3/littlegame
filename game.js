// Selectors
const options = document.querySelectorAll(".options");
const message = document.querySelector('.message');
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
  });
});
// Update score 
function updateScore() {
  document.getElementById('pScore').textContent = pScore;
  document.getElementById('cScore').textContent = cScore;
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