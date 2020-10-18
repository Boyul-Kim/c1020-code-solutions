/* eslint-disable no-unused-vars */
function getWords(string) {

  if (string === '') {
    return [];
  } else if (getWords.length > 0) {
    return string.split(' ');
  }

}
