var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>Hello, my name is " + person.name + "</p>";
message += "<p>I live in the " + person.country + "</p>";
message += "<p>My skills are " + person.skills.join(", ") + "</p>";
print(message);