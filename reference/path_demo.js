const path = require("path");

// basename
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// extention
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// join
console.log(path.join(__dirname, "test", "index.html"));

console.log(__filename, __dirname);
