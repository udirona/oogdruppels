const fs = require('fs');

let rawdata = fs.readFileSync('public/db.json');
let data = JSON.parse(rawdata);

for (i in data.oogdruppels) {
  console.log(data.oogdruppels[i].name);
}

//console.log(data);

