function obfuscate(str) {
  var m = str[0];
  return str.replace(/a/g, 4 || /o/g, 0 || /e/g, 3 || /l/g, 1);
}
console.log(obfuscate("password"))