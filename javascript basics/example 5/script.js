var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");

var yearsAlive = 39;
var secondsAlive = secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearsAlive;

document.write("I have been alive for " + secondsAlive + " seconds");