##Freecodecamp JS curriculum notes##

###93_accessing-nested-arrays###
```js
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list;
// additionaly how to inject new strings in arrays below
var rename = myPlants[1].list.push("kiwi")
```

###94_Record Collection###

````js

// Your function must always return the entire record collection object.
records = recordCollection;
return records;


// if prop isnt 'tracks' and 'value' isnt empty string, 
if ("tracks" != prop && value != "")
    // update or set that albums 'prop' to 'value.
    albumID = recordCollection.id.prop[value];

// if "prop" is "tracks" but the album doesn't have a "tracks" property, 
else if (prop == "tracks" && id != "tracks")
    // create an empty array and add "value" to it.
    var emptyArray = [value];
records = recordCollection.id.prop[emptyArry];
return records;

  /*If "prop" is "tracks" and "value" isn't an empty string, 
    add "value" to the end of the "album's" existing "tracks" array. 
  */
  else if (prop == "tracks" && value != "")

    //add "value" to the tracks array
    albumID = tracks.push(value)
//If "value" is an empty string, 
else if (value == "")
    // delete the given "prop" property from the album.
    delete recordCollection.id.prop

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// simple example:
var xObj = {
    prop: ""
}
var value = "some testing nesting";
var emptyArray = [value];


xObj.prop = emptyArray;

console.log(xObj);

```

