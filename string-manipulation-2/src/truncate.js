/* eslint-disable no-unused-vars */
function truncate(length, string) {
  var ellipsis = '...';
  var newWord = string.slice(0, length) + ellipsis;
  return newWord;
}
