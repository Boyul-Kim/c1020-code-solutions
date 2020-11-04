/* eslint-disable no-unused-vars */
function titleCase(title) {
  title = title.toLowerCase();
  var titleArray = title.split(' ');
  var specialCases = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newArray = [];
  for (var i = 0; i <= titleArray.length - 1; i++) {

    if (i !== 0 && specialCases.includes(titleArray[i])) {
      if (titleArray[i - 1][titleArray[i - 1].length - 1] === ':') {
        var wordBreakSpecial = titleArray[i].split('');
        wordBreakSpecial[0] = wordBreakSpecial[0].toUpperCase();
        newArray.push(wordBreakSpecial.join(''));
        if (i < titleArray.length - 1) {
          newArray.push(' ');
        }
      } else {
        newArray.push(titleArray[i]);
        newArray.push(' ');
      }
    } else if (titleArray[i] === 'javascript') {
      newArray.push('JavaScript');
      if (i < titleArray.length - 1) {
        newArray.push(' ');
      }
    } else if (titleArray[i] === 'api') {
      newArray.push('API');
      if (i < titleArray.length - 1) {
        newArray.push(' ');
      }
    } else {
      var wordBreak = titleArray[i].split('');
      wordBreak[0] = wordBreak[0].toUpperCase();
      newArray.push(wordBreak.join(''));
      if (i < titleArray.length - 1) {
        newArray.push(' ');
      }
    }

  }

  var revisedWord = newArray.join('');

  if (revisedWord.includes('Javascript:')) {
    revisedWord = revisedWord.replace('Javascript:', 'JavaScript:');
  }

  if (revisedWord.includes('-')) {
    var index = revisedWord.indexOf('-');
    revisedWord = revisedWord.replace(revisedWord[index + 1], revisedWord[index + 1].toUpperCase());
  }

  return revisedWord;
}
