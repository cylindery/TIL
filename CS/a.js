const fs = require('fs')
const path = require('path')
const a = fs.readFileSync(path.join(__dirname, "a.json"))
const b = JSON.parse(a)
console.log(typeof(b));
const c = JSON.stringify(b)
console.log(typeof(c))