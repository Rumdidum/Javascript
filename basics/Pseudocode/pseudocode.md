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
