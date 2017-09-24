//Math.floor(Math.random() * (6 - 1 + 1)) + 1; 

function computeRandom(lower, upper) {
   if (isNaN(lower) || isNaN(upper))
   {
      throw new Error("You entered an invalid number!!");
      return;
   }
  
   var randomNumber = Math.floor(Math.random() * (upper -lower + 1)) + lower;
   return randomNumber;
}

console.log(computeRandom(5,60));
console.log(computeRandom("nine", 15));