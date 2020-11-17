/* eslint-disable no-unused-vars */
function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
