const os = require('os');

console.log(os.platform());

const fs = require('fs');

fs.writeFileSync("text.txt", "This is text.txt file");

// read file contents
fs.readFileSync("text.txt")
