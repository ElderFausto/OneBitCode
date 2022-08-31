const fs = require('fs')

fs.writeFile('test.txt', 'ola Deus', err => {
  console.log(err);
})