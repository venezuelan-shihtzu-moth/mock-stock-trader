const fetch = require('node-fetch');
const db = require('../db/stockAppModel.js');

const dbController = {};

dbController.getData = (req, res, next) => {
  const query = 'SELECT * FROM people';
  db.query(query, (err, data) => {
    if (err) next(err);
    else res.locals.data = data.rows;
    return next();
  });
};

dbController.getLeaderboard = (req, res, next) => {
  const query = 'SELECT user_name, user_net_worth FROM users ORDER BY user_net_worth';
  db.query(query, (err, data) => {
    if(err)  return next(err);
    else res.locals.leader = data.rows;
    return next();
  });
}

module.exports = dbController;
