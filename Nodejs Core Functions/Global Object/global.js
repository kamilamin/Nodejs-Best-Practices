// In nodejs Required function use for import modules
var path = require('path');

// console.log("Hello from Kamil")

var name = "Kamil amin";

var newName = name.toUpperCase();

console.log(`New Name is: ${newName}`);
// Current Directory display in Nodejs
console.log(__dirname)
//Current Directory and file name display in Nodejs
console.log(__filename)
// For specific file name not whole directory
console.log(path.basename(__filename));