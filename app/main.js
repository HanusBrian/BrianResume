var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/homepage.html', function(req, res) {
    res.sendFile(__dirname + '/homepage.html');
})

app.get('/bh.html', function(req, res) {
    res.sendFile(__dirname + '/bh.html');
})

app.listen(3000, function() {
    console.log("Listening on port 3000");
})

express = require('express');
app = module.exports = express();