function checkObj(obj, checkProp) { // ({city: "Seattle"}, "city")
  // Only change code below this line

// wenn in {city: "Seattle"} "city" enthalten ist
  if (obj.hasOwnProperty(checkProp)) {    
    return obj[checkProp] // gib den Wert von "city" zurück("Seatle")
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

console.log(checkObj({city: "Seattle"}, "city"));
