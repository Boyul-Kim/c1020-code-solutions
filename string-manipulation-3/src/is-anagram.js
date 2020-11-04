/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  var firstStringCopy = '';
  var secondStringCopy = '';
  var firstStringValue = 0;
  var secondStringValue = 0;

  if (firstString.includes(' ')) {
    for (var i = 0; i <= firstString.length - 1; i++) {
      if (firstString[i] !== ' ') {
        firstStringCopy += firstString[i];
      }
    }
  } else {
    firstStringCopy = firstString;
  }

  if (secondString.includes(' ')) {
    for (var x = 0; x <= secondString.length - 1; x++) {
      if (secondString[x] !== ' ') {
        secondStringCopy += secondString[x];
      }
    }
  } else {
    secondStringCopy = secondString;
  }

  for (var indexFirst = 0; indexFirst <= firstStringCopy.length - 1; indexFirst++) {
    var charValueFirst = firstStringCopy.charCodeAt(indexFirst);
    firstStringValue += charValueFirst;
  }

  for (var indexSecond = 0; indexSecond <= secondStringCopy.length - 1; indexSecond++) {
    var charValueSecond = secondStringCopy.charCodeAt(indexSecond);
    secondStringValue += charValueSecond;
  }

  if (firstStringValue === secondStringValue) {
    return true;
  } else {
    return false;
  }
}
