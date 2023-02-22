const express = require('express');
const app = express();
const routes = require('express').Router();
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
  })

app.listen(port, () => {
    console.log('Now listening on port ${port}');
});