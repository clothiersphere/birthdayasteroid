const axios = require('axios');
const moment = require('moment');
const pgp = require('pg-promise')();
const PQ = require('pg-promise').ParameterizedQuery;

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/entries';

const db = pgp(connectionString);


function createNotification(req, res, next) {
  const { birthday, senderEmail, recipientMobile } = req.body;
  const addEntry = new PQ('INSERT INTO entry(birthday, mobile, sender_email) VALUES($1,$2,$3) RETURNING mobile');
  addEntry.values = [birthday, recipientMobile, senderEmail];

  db.task(t => t.oneOrNone('SELECT id FROM entry WHERE mobile = $1', recipientMobile)
    .then(entry => entry || t.one(addEntry)))
    .then((data) => {
      if (Object.prototype.hasOwnProperty.call(data, 'id')) {
        res.send({
          success: false,
          flag: 'entry_exists',
        });
        return next();
      }

      if (Object.prototype.hasOwnProperty.call(data, 'mobile')) {
        res.status(201).send({
          success: true,
        });
        return next();
      }
    })
    .catch((error) => {
      console.log('error:', error);
      return next();
    });
}

module.exports = {
  createNotification,
};
