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
app.listen(8080);