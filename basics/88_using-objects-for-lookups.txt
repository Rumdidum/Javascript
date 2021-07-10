// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];  // seems like 'result = lookup.val;' doesnt work?!


  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

console.log(phoneticLookup("bravo"))