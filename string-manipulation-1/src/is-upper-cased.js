/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  var falseCount = 0;
  for (var i = 0; i <= word.length - 1; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      falseCount++;
    }
  }

  if (falseCount > 0) {
    return false;
  } else {
    return true;
  }

}
