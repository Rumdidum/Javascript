var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// its the same method as the Blender API!! Finaly i understand
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)