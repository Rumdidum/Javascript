// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

console.log(player)


var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;  // prop + Name == propName: "John"
}
var someProp = propPrefix("Name"); // returned: propName
console.log(someObj[someProp]);
