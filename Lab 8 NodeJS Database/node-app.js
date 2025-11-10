const express = require("express");

const app = express();

// app.get('/', function (req, res) {
//     res.send("Home page");
// });

let count = 0;
app.get('/', function(req, res){
  count++;       
  res.send("Hit counter " + count);
});

app.get('/Hello', function (req, res) {
    res.send("<h1>Hello world page!</h1>")
});

app.get('/form', function (req, res) {
    res.send("<form action='/submit' method='post'>Name: <input name='username'/><br><input type='submit'/></form>")
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.post('/submit', function(req,res){
  res.send("Thanks " + req.body.username);
})

app.listen(8080);

// var http = require('http');

// http.createServer(function (req, res) {
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);