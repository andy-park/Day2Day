// Function that can return all unique characters that exist in a string.
// Function can also report how many instances of each letter were found in a string.

function countLetters(str) {
  var output = {
    a: 1,
    b: 1
  }

  for (i = 0; i < str.length; i++) {
    var char = str[i];

      if (/\w/.test(char)) {
    } if (char in output) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}
console.log(countLetters('lighthouse'))