/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  for (var i = 0; i <= word.length - 1; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
