var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html');
})

app.listen(3000, function() {
    console.log("Listening on port 3000");
})

express = require('express');
app = module.exports = express();