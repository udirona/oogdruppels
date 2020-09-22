const express = require('express');
const app = express();
const port = 8080;

app.locals.title = 'Oogdruppels';
app.use(express.static('public'));
app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
  //res.send("Hello World");

});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
