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
      wns.innerHTML = `Winner !`;
    }else{
      wns.innerHTML = `Computer won !`;
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
    message.innerHTML = (`TIE !`);
    return;
  }
  // Rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      message.innerHTML = (`Score 1 Player`);
      pScore++;
    } else {
      message.innerHTML = (`Score 1 Computer`);
      cScore++;
    }
  }
  // Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      message.innerHTML = (`Score 1 Player`);
      pScore++;
    } else {
      message.innerHTML = (`Score 1 Computer`);
      cScore++;
      
    }
  }
  // Scissors
  else {
    if (cInput === "Paper") {
      message.innerHTML = (`Score 1 Player`);
      pScore++;
    } else {
      message.innerHTML = (`Score 1 Computer`);
      cScore++;
    }
  }
}
// Restart the game
function restart() {
  window.location.reload("restart");
}