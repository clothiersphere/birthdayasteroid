const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const entries = require('./server/entries');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { nasaAPIkey } = require('./keys');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/APOD', (req, res) => {
  const apod = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIkey}`);
  apod.then(response => res.send(response.data));
});

app.get('/api/neo/:date', (req, res) => {
  const { date } = req.params;
  const asteroidList = axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${nasaAPIkey}`);
  asteroidList.then((response) => {
    const NEO = response.data.near_earth_objects;
    res.send({
      date,
      nearEarthObjects: NEO[date],
    });
  });
});

// app.post('/api/birthdayAsteroid', birthdayAsteroids.createNotification);
app.post('/api/birthdayAsteroid', entries.createNotification);
// const { birthday, senderEmail, mobile } = req.params;

// post
// /api/sendBirthdayAsteroid
// receive birthday + sender's email + recipient mobile#
// check db for duplicate #
// if not duplicate
// create entry in db

//

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';
