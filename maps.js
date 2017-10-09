var colors = ["red", "white", "blue", "green", "purple"]

var shortWords = colors.filter(function(fnd){
  return fnd.length < 5;
});

console.log(shortWords)

colors.map(function(str) {
  return colors.length;
});

console.log(colors)

// colors.map(function(cap) {
//   return colors.toUpperCase('');
// });

// colors.map(function(rev) {
//   return colors.split('').reverse().join('');
// });