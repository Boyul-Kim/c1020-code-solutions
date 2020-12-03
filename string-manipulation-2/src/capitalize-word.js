/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    word = 'JavaScript';
  } else {
    var upperCaseLetter = newWord[0].toUpperCase();
    var restOfLetters = newWord.slice(1, newWord.length);
    var editedWord = upperCaseLetter + restOfLetters;
    word = editedWord;
  }
  return word;
}
