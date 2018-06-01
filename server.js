const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';
