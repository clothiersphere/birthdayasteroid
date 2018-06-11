const axios = require('axios');
const moment = require('moment');
const pgp = require('pg-promise')();
const _ = require('lodash');
const PQ = require('pg-promise').ParameterizedQuery;

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/entries';

const db = pgp(connectionString);

function createNotification(req, res, next) {
  const { birthday, senderEmail, recipientMobile } = req.body;
  console.log(recipientMobile, 'recipientMobile');

  const findEntry = new PQ('SELECT * FROM entry WHERE mobile = $1', [recipientMobile]);
  const addEntry = new PQ('INSERT INTO entry(birthday, mobile, sender_email) VALUES($1,$2,$3)');
  addEntry.values = [birthday, recipientMobile, senderEmail];


  db.one(findEntry)
    .then((entry) => {
      res.send(`${entry.mobile} already exists`);
      next();
    })
    .catch((error) => {
      db.none(addEntry)
        .then((entry) => {

        })
        .catch((error) => {
          console.log('ERROR:', error); // print error;
        });
    });
}

// return db.any('select * from entry where mobile=$1', [recipientMobile])
//   .then((data) => {
//     res.send(data);
//     next();
//   })
//   .catch((error) => {
//   // db.one('INSERT INTO users(name, active) VALUES($1, $2) RETURNING id', ['John', true])
//   //     .then(data => {
//   //         console.log(data.id); // print new user id;
//   //     })
//   //     .catch(error => {
//   //         console.log('ERROR:', error); // print error;
//   //     });
//     console.log('ERROR:', error);
//   });
// }

// function createNotification(req, res, next) {
//   return db.any('select * from entry')
//     .then((data) => {
//       console.log('DATA', data);
//       res.send(data);
//       next();
//     })
//     .catch((error) => {
//       console.log('ERROR:', error);
//     })
//     .then(() => {
//       pgp.end();
//     });
// }

module.exports = {
  createNotification,
};
