function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

/*
console.log(getRandomNumber(10));
console.log(getRandomNumber(100));
console.log(getRandomNumber(10000));
*/

function getArea(width, length, unit)
{
  var area = width * length;
  return area + " " + unit;
}

console.log(getArea(10,20,"sq ft"));