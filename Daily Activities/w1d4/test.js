// var fruits = ['apple', 'banana', 'orange', 'grape']
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
//   console.log(fruits[2]);

// fruits.forEach(function(fruit, i, arr) {
//   console.log(fruit);
//   console.log(i);
//   console.log(arr);
// });
// const numbers = [2,4,6,8,10];

// const doubleList = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubleList);

var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
var evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);