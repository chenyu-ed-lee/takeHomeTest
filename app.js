var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


var port = process.env.PORT || 8000;
console.log("Listening on " + port);

app.listen(port);