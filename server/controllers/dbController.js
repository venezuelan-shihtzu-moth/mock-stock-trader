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

//  controller to grab stocks pertaining to a certain user
//  need to invoke apiController's getstockprices to get current stock prices for each of the stocks
dbController.getUserStocks = (req, res, next) => {
  const query = 'SELECT stock_name AS Ticker, stock_amount AS Quantity, stock_price AS Price_Purchase FROM stocks';
  db.query(query, (err, data) => {
    if(err) return next(err);
    else res.locals.stocks = data.rows;
    return next();
  })
}

//  middleware to make sure user has proper funds to buy stock
dbController.validateStockFunds = (req, res, next) => {
  console.log(JSON.stringify(req.body));
  const query = 'SELECT user_net_worth FROM users WHERE user_id=$1';
  const params = [req.cookies.user_id];
  db.query(query, params, (err, data) => {
    if(err) return next(err);
    if(Number(data.rows[0].user_net_worth) < (req.body.number * req.body.price)) 
      return next('Insufficient funds');
    return next();
  })
}

//  middleware to reduce funds from user table
dbController.deductFromUser = (req, res ,next) => {
  const query = 'UPDATE users SET user_net_worth = user_net_worth - $1 WHERE user_id = $2';
  const params = [req.body.number * req.body.price, req.cookies.user_id];
  db.query(query, params, (err, data) => {
    if(err) return next(err);
    return next();
  })
}

//  middleware to add stock to stocks
dbController.buyStock = (req, res, next) => {
  const query = 'INSERT INTO stocks (user_id, stock_name, stock_amount, stock_price) VALUES ($1, $2, $3, $4)';
  const params = [req.cookies.user_id, req.body.stock_name, req.body.number, req.body.price];
  db.query(query, params, (err, data) => {
    if(err) return next(err);
    next();
  })
}

module.exports = dbController;
