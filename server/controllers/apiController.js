/**
 * @name apiController.js
 * @description controller to route api requests from finnhub.io
 * @todo Register for an api key from Finnhub
 * grab current stock data from API given a stock name
 * validate stock name with api
 */

//  module to make fetch requests from server
const fetch = require('node-fetch');

//  token obtained from finnhub.io
const apiKey = 'bpmhui7rh5rf2as7vj2g';
const apiController = {};

//  middleware to check if stock symbol is correct, if not, throw a global error
apiController.validateStock = (req, res, next) => {
  const { symbol } = req.body;
  fetch(
    `https://finnhub.io/api/v1/stock/profile/?symbol=${symbol}&token=${apiKey}`,
  )
    .then(raw => raw.json())
    .then(data => {
      //  if api call returns an empty object
      if (Object.keys(data).length === 0)
        throw new Error('Stock symbol is not valid!');
      return next();
    })
    .catch(err => next(err));
};

//  middleware function to grab a stock's price given a stock's symbol. Makes API call to finnhub
apiController.getStockPrice = (req, res, next) => {
  const { symbol } = req.body;
  fetch(`https://finnhub.io/api/v1/quote/?symbol=${symbol}&token=${apiKey}`)
    .then(raw => raw.json())
    .then(data => {
      // grabs current price from the api response object and attach it to res.locals
      res.locals.price = data.c;
      return next();
    })
    .catch(err => next(err));
};

module.exports = apiController;
