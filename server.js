const express = require('express');
const axios = require('axios');

const app = express();

const { nasaAPIkey } = require('./keys');

console.log(nasaAPIkey, 'apikey');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/APOD', (req, res) => {
  const apod = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIkey}`);
  apod.then(response => res.send(response.data));
});

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';
