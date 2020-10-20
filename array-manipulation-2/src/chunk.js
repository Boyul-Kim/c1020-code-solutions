/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var arrayCopy = array;
  var totalArray = [];
  var counter = 0;
  var undefinedCounter = 0;
  for (var i = 0; i < (array.length / size); i++) {
    var chunkArray = [];

    for (var x = 0; x < array.length / (array.length / size); x++) {
      if (undefinedCounter > array.length - 1) {
        break;
      } else if (counter >= array.length / (array.length / size)) {
        chunkArray.push(arrayCopy[counter]);
        counter++;
        undefinedCounter++;
      } else {
        chunkArray.push(arrayCopy[x]);
        counter++;
        undefinedCounter++;
      }
    }
    totalArray.push(chunkArray);
  }
  return totalArray;
}
