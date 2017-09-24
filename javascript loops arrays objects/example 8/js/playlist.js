var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

playList.push("Whenever wherever","Roar");

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHtml = "<ol>";
  
  for (var i=0; i < list.length; i++)
  {
     listHtml += "<li>" + list[i] + "</li>";
  }
  
  listHtml += "</ol>";
  print(listHtml);
}

printList(playList);

