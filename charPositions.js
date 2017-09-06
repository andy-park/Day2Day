// // Function to return zero-based positions of each character in a string.

function charPositions(arr) {
  var output = {

  }

  for (i = 0; i < arr.length; i++) {
    var char = arr[i];

      if (/\w/.test(char)) {
    } if (char in output) {
      output[char].push(i)
    } else {
      output[char] = [i]
    }
  }
  return output;
}
console.log(charPositions('lighthouse in the house'))
