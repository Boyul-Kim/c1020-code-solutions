/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixAdded = [];
  for (var i = 0; i <= words.length - 1; i++) {
    suffixAdded.push(words[i] + suffix);
  }
  return suffixAdded;
}
