/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    var java = newWord.slice(1, 4);
    var capitalJ = newWord[0].toUpperCase();
    var script = newWord.slice(5, newWord.length);
    var capitalS = newWord[4].toUpperCase();
    var JavaScript = capitalJ + java + capitalS + script;
    word = JavaScript;
  } else {
    var upperCaseLetter = newWord[0].toUpperCase();
    var restOfLetters = newWord.slice(1, newWord.length);
    var editedWord = upperCaseLetter + restOfLetters;
    word = editedWord;
  }
  return word;
}
