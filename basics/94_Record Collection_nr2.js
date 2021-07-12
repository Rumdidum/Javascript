// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


console.log("fuuuk", recordCollection[2548].hasOwnProperty("tracks"));

// Only change code below this line
function updateRecords(records, id, prop, value) {


  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value
    console.log("first")
    // second
  } else if (prop === "tracks" && !(records[id].hasOwnProperty("tracks"))) {
    console.log(`second:`)
    var emptyArray = [value];
    records[id][prop] = emptyArray; // or records[id][prop] = [value];
    // third
  } else if (prop === "tracks" && value !== "") {
    console.log("third")
    records[id][prop].push(value)
  } else if (value === "") {
    delete records[id][prop]
  }

  return records;
}

console.log(updateRecords(recordCollection, 1245, 'tracks', ""));