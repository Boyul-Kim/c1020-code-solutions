/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  for (var i = 0; i <= word.length - 1; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      return false;
    }
  }

  return true;

}
