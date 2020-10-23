/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObject = {};
  for (var key in keys) {
    for (var sourceKey in source) {
      if (keys[key] === sourceKey && source[sourceKey] !== undefined) {
        newObject[sourceKey] = source[sourceKey];
      }
    }
  }
  return newObject;
}
