/* eslint-disable no-unused-vars */
function ransomCase(string) {
  string = string.toLowerCase();
  for (var index = 0; index <= string.length - 1; index++) {
    if ((index % 2) !== 0 && index !== 0) {
      string = string.replace(string[index], string[index].toUpperCase());
    }
  }
  return string;
}
