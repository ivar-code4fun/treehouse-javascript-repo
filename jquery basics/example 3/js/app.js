//1. hide the spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. Reveal the spoiler if button is clicked
$("button").click(function() {
  $(this).prev().show(); 
  $(this).remove(); 
});