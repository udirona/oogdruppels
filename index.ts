const express = require('express');
//const modell = require('.\oogdruppels');
const app = express();
const port = 8080;
const fs = require('fs');

//data = JSON.parse(`{"data" : [
//  { "name": "bar" }, 
//  { "name": "bar" }
//]
//}`);
//data = JSON.parse('{ "foo": { "name": "foo", "ingredients": [ { "name": "kk", "preservative": "" }, { "name": "kk" "preservative": "" }, } ] }');

app.locals.title = 'Oogdruppels';
app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
  //res.send("Hello World");
});

app.get('/list', function(req, res) {
  fs.readFile( __dirname + "/public/db.json", 'utf8', function (err, data) {
    //console.log(data);
    res.send(data);
  });

});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   let response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
