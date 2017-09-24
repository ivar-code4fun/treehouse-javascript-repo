var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var rightAnswers = [];
var wrongAnswers = [];

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    rightAnswers.push(questions[i][0]);
  }
  else
  {
    wrongAnswers.push(questions[i][0]);
  }
}

html = "You got " + correctAnswers + " question(s) right.<br /><br />"


if (rightAnswers.length > 0)
{
  html += "<b>You got these questions correct.</b><ol>";
  for (var i =0; i < rightAnswers.length; i++)
  {
    html += "<li>" + rightAnswers[i] + "</li>";
  }
  html += "</ol>";
}

if (wrongAnswers.length > 0)
{
  html += "<b>You got these questions wrong.</b><ol>";
  for (var i =0; i < wrongAnswers.length; i++)
  {
    html += "<li>" + wrongAnswers[i] + "</li>";
  }
  html += "</ol>";
}

print(html);
