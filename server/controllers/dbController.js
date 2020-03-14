const fetch = require('node-fetch');
const db = require('../db/queries.js');

const dbController = {};

dbController.getData = (req, res, next) => {
  const query = 'SELECT * FROM people';
  db.query(query, (err, data) => {
    if (err) next(err);
    else res.locals.data = data.rows;
    return next();
  });
};

module.exports = dbController;
