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

 if (random === 1) {
         this.turnScore = 0;
         this.rollDice = 1;
         if (this.active === player1.active) {
             player1.active = false;
             player2.active = true;

             $(".player1").children().prop('disabled', true);
             $(".player1").addClass("disableGamingField");
             $(".player2").children().prop('disabled', false);
             $(".player2").removeClass("disableGamingField");
           }
           else if (this.active === player2.active) {
                                 score2.active = false;
                                 score1.active = true;
                                 $(".player2").children().prop('disabled', true);
                                 $(".player2").addClass("disableGamingField");
                                 $("player1").children().prop('disabled', false);
                                 $(".player1").removeClass("disableGamingField");
                             }

                   return alert("Oooops, you got a 1. It is your partner's turn");
                  } else {
                   this.turnScore +=random;
                  };
                  return this.diceRoll;
                  };
                  Player.prototype.pass = function () {
  activePlayer();
  this.totalScore += this.turnScore;
  if (this.totalScore >= 100) {
      alert("Game Over. You have won!!!!");
      resetFields();
      alert("To play with a new partner click new game.")

    } else {
     return false;
 }
 console.log('the turn total is: ' + this.turnScore);
 return this.totalScore;
};
