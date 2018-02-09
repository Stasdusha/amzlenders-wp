import { exists } from 'fs';

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, './app')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});