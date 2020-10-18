/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  var falseCount = 0;
  for (var i = 0; i <= word.length - 1; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      falseCount++;
    }
  }

  if (falseCount > 0) {
    return false;
  } else {
    return true;
  }
}
