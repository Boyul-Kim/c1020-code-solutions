/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObject = {};
  var counter = 0;
  for (var sourceKey in source) {
    if (keys[counter] !== sourceKey) {
      newObject[sourceKey] = source[sourceKey];
      counter++;
    }
  }
  return newObject;
}
