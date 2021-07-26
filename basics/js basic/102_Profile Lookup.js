var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// my problem was my wrong way of thinking
function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; 
      } else {
        // this needs to return if property is wrong
        return "No such property";
      }
    }
  }
  // final confirm if name is wrong
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "likes"));


var myArr = ["a", "b", "c"]
function looping() {
  var result = "";
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] == "a") {
      result == "a"
    } else if (myArr[i] == "b") {
      result = "b"
    } else if (myArr[i] == "c") {
      result = "c"
    }
  }
  return result;
}

console.log(looping());