/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var arrayCopy = array;
  var totalArray = [];
  for (var i = 0; i < (array.length / size); i++) {
    var chunkArray = [];

    for (var x = 0; x < array.length / (array.length / size); x++) {
      chunkArray.push(arrayCopy[x]);
      delete arrayCopy[x];
      // console.log(chunkArray);
    }
    totalArray.push(chunkArray);
  }

  return totalArray;
}
