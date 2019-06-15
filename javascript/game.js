var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessesfar = 0;

//First the computer needs to randomly choose a letter from an array and be assigned a variable 

var computerguess = possibleguesses[(Math.random() * 26) | 0];
var possibleguesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerguess);
console.log(possibleguesses.length);

//Then the user must choose a letter and saved as a variable 
var userguess = on.onkeydown
document.onkeyup = function(event) {}

//Then the condition of the is the two guess variables are equal to each other are met
if (computerguess = userguess){
 wins + 1
 guessesleft = 9
 guessesfar = 0
}

else if (computerguess != userguess){
 losses + 1
 guessesleft - 1
 guessesfar + 1
}
//This then needs to loop and repeat the game but keep track of the number of wins and losses of previous games 
