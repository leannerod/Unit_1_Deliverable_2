var vacationType = prompt ("What kind of vacation do you want to go on? Musical, tropical, or adventurous?");

var destination;
var transportation;

if (vacationType === "musical") {
  destination = "New Orleans";
} else if (vacationType === "tropical") {
  destination = "beach vacation in Mexico";
} else if (vacationType === "adventurous") {
  destination = "whitewater rafting the Grand Canyon";
}


var groupSize = prompt ("How many people are in your party?");

if (groupSize <= 2) {
  transportation = "fly first class";
} else if (groupSize >2 && groupSize <6) {
  transportation = "fly a helicopter";
} else if (groupSize >=6) {
  transportation = "charter a flight";
}

var result = ("Since you're a group of " + groupSize + " you should go on a " + vacationType + " vacation and " + transportation + " to " + destination + ".");

console.log (result);