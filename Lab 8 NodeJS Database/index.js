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
   res.sendFile(__dirname + "/forgot.html");
});

app.post('/retrieve', function(req, res){
   const sql = "SELECT username, password FROM Users WHERE email = ?";
  conn.query(sql, [req.body.email],
    function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
          res.send("Your password is: " + result[0].password + " and your username is: " + result[0].username);
      } else {
          res.send("Email not found");
      }
      });
});
   
app.listen(8080);