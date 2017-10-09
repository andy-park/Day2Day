// Complete the following code for the assertion to pass.
// The result should be an array of numbers corresponding
// to the x-y pairs provided in the input array
// (ie: calculate z given x and y).

function pith(x, y) {
  return Math.sqrt(x * x + y * y);
}

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(num) {
  return pith(num.x, num.y)
  }
);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);