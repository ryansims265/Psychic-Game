var numberofwins = 0;
var numberoflosses = 0;
var guessesleft = 9;

var winsV = document.getElementById("wins");
var lossesV = document.getElementById("losses");
var numberV = document.getElementById("number");





document.getElementById("wins").textContent = "Wins: " + numberofwins;
document.getElementById("losses").textContent = "Losses: "+ numberoflosses;
document.getElementById("number").textContent = "Guesses left: " + guessesleft;


//First the computer needs to randomly choose a letter from an array and be assigned a variable 
var possibleguesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerguess = possibleguesses[Math.floor(Math.random() * possibleguesses.length)];
//Loop starting here 


// boolean, while loops 



//Then the user must choose a letter and saved as a variable 
document.onkeyup = function(event) {
    
    console.log("Computer guess = " + computerguess);
    var userguess = event.key;
    console.log("User Guess = " + userguess);

//Then the condition of the is the two guess variables are equal to each other are met
if (computerguess === userguess){
    document.getElementById("wins").textContent = "Wins: " + (numberofwins + 1);
 numberV.textcontent = guessesleft;
 console.log("WINNER");
 reset();

}

else if (computerguess != userguess){
    winsV.textcontent = "Wins " + wins + 0;
    numberV.textcontent = guessesleft - 1;
    document.getElementById("losses").textContent = "Losses: "+ (numberoflosses + 1);
    document.getElementById("already").textContent = userguess;
    console.log("LOSER");
    
   }

}
  
document.getElementById("number").textContent = "Guesses already: " + userguess;



  function reset () {
      guessesleft = 9;
      var computerguess = possibleguesses[Math.floor(Math.random() * possibleguesses.length)];
      
      
  }

//This then needs to loop and repeat the game but keep track of the number of wins and losses of previous games 
