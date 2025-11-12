const mysql = require('mysql');
require('dotenv').config();
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});


const express = require('express'); 
const app = express();
app.get('/', function(req, res){
   conn.connect((err) => {
  const sql = 'SELECT * FROM students WHERE lastname = ?';
const lastname = "Mouse";
conn.query(sql, [lastname], function (err, result) {
  if (err) throw err;
  console.log(result);
 res.send(result);
});
});
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function(req, res){
   res.sendFile(__dirname + "/form.html");
});

app.post('/submit', function(req, res){
  const sql = 'SELECT * FROM students WHERE lastname = ?';
  console.log("Form contents: " + req.body.lastname);
  conn.query(sql, [req.body.lastname], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
        let resultStr = ""
          result.map((item) => {
     resultStr += item.firstname + " "  + item.lastname + " ";
  });

               res.send(resultStr);
   }  }  );
});    


app.listen(8080);