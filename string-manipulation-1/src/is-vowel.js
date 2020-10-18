/* eslint-disable no-unused-vars */
function isVowel(char) {
  var charLower = char.toLowerCase();
  var vowel = ['a', 'e', 'i', 'o', 'u'];

  if (vowel[0] === charLower) {
    return true;
  } else if (vowel[1] === charLower) {
    return true;
  } else if (vowel[2] === charLower) {
    return true;
  } else if (vowel[3] === charLower) {
    return true;
  } else if (vowel[4] === charLower) {
    return true;
  } else {
    return false;
  }
}
