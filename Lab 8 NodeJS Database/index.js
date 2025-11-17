const mysql = require('mysql');
const express = require('express'); 
const app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function(req, res){
   res.sendFile(__dirname + "/form.html");
});

app.post('/insert', function(req, res){
   const sql = "INSERT INTO Users (username, password, email) VALUES (?, ?, ?)";
  conn.query(sql, [req.body.username, req.body.password, req.body.email],  
   function (err, result) {
      if (err) throw err;
      res.send("Insert successful");
     });
});

app.get('/forgot', function(req, res){
   res.send("Forgot Password Page");
});
   
app.listen(8080);