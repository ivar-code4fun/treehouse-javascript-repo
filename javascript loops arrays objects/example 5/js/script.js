var html = '';
var red;
var green;
var blue;
var rgbColor;
var upper = 256;

for (var i = 0; i < 10; i++)
{
  red = getRandom(upper);
  green = getRandom(upper);
  blue = getRandom(upper);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);

function getRandom(upper) {
  return Math.floor(Math.random() * upper );
}