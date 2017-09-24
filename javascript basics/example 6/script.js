var response = prompt("Enter a number");
var input = parseInt(response);
var randomNumber = Math.floor(Math.random() * input) + 1;
alert("Here is a random number between 1 and " + input + ": " + randomNumber);