/* eslint-disable no-unused-vars */
function equal(first, second) {
  var trueCounter = 0;
  for (var i = 0; i <= first.length - 1; i++) {
    if (first[i] === second[i]) {
      trueCounter++;
    }
  }
  if (trueCounter === first.length) {
    return true;
  } else {
    return false;
  }
}
