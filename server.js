var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './app')));

app.listen(port, function () {
  console.log('Server listening on port' + port);
});