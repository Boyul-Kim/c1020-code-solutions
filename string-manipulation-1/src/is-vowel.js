/* eslint-disable no-unused-vars */
function isVowel(char) {
  var charLower = char.toLowerCase();
  var vowel = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i <= vowel.length - 1; i++) {
    if (charLower === vowel[i]) {
      return true;
    }
  }
  return false;

}
