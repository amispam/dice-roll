
window.onload = function(){
  document.querySelector(".blur").classList.add("hideme");
  var player1 = parseInt((Math.random()*6)) + 1;
  var player2 = parseInt((Math.random()*6)) + 1;

  function diceRolled(){
    document.querySelector(".dice1").innerHTML = "<img src='images/dice"+player1+".png' style='width:70%;' alt='dice'>";
    document.querySelector(".dice2").innerHTML = "<img src='images/dice"+player2+".png' style='width:70%;' alt='dice'>";
    if(player1 > player2){
      document.querySelector(".result").innerHTML = "🚩 <em>player one wins.</em>";
    }
    else if(player2 > player1){
      document.querySelector(".result").innerHTML = "<em>player two wins.</em> 🚩";
    }
    else{
      document.querySelector(".result").innerHTML = "<em>DRAW</em>";
    }
  }
  diceRolled();
}
