function rollDice() {
  var dice = document.getElementById("dice");
  var random = Math.floor(Math.random() *6) +1;
  dice.innerHTML = random;
}
