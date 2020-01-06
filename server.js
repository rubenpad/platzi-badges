const express = require('express');
const path = require('path');
const config = require('./config/env');

const app = express();

app.use(express.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist/')));
app.get('/ping', (req, res) => {
  return res.send('pong');
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(config.port, () =>
  console.log(`Listening at http://localhost:${config.port}`)
);
