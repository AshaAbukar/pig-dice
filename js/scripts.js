function rollDice() {
  var dice = document.getElementById("dice");
  var random = Math.floor(Math.random() *6) +1;
  dice.innerHTML = random;
}

function Player(rollDice,turnScore,totalScore,active) {
     this.rollDice = 0;
     this.turnScore=0;
     this.totalScore=0;
     this.active = active;
 }
