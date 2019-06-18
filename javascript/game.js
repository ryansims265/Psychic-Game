var winsintial = 0;
var lossesintial = 0;
var guessesleftintial = 9;

var winsV = document.getElementById("wins");
var lossesV = document.getElementById("losses");
var numberV = document.getElementById("number");




document.getElementById("wins").textContent = "Wins: " + winsintial;
document.getElementById("losses").textContent = "Losses: "+ lossesintial;
document.getElementById("number").textContent = "Guesses left: " + guessesleftintial;

//First the computer needs to randomly choose a letter from an array and be assigned a variable 
var possibleguesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerguess = possibleguesses[Math.floor(Math.random() * possibleguesses.length)];

console.log("Computer guess = " + computerguess);






//Then the user must choose a letter and saved as a variable 
document.onkeyup = function(event) {
    var userguess = event.key;
    console.log("User Guess = " + userguess);

//Then the condition of the is the two guess variables are equal to each other are met
if (computerguess === userguess){
 winsV.textcontent = "Wins " + wins + 1;
 numberV.textcontent = guessesleftintial;
 console.log("WINNER");
 
}

else if (computerguess != userguess){
    winsV.textcontent = "Wins " + wins + 0;
    numberV.textcontent = guessesleftintial - 1;
    console.log("LOSER");
   }

}
//This then needs to loop and repeat the game but keep track of the number of wins and losses of previous games 
