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
  const { sym } = req.query;
  fetch(
    `https://finnhub.io/api/v1/stock/profile/?symbol=${sym}&token=${apiKey}`,
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
  const { sym } = req.query;
  fetch(`https://finnhub.io/api/v1/quote/?symbol=${sym}&token=${apiKey}`)
    .then(raw => raw.json())
    .then(data => {
      // grabs current price from the api response object and attach it to res.locals
      res.locals.price = data.c;
      return next();
    })
    .catch(err => next(err));
};

//  middleware that takes an array of stocks and gets the current price of each stock and appends it as a property of the array object element

apiController.getCurrentPrices = (req, res, next) => {
  const requests = res.locals.stocks.map(stock => {
    return fetch(`https://finnhub.io/api/v1/quote/?symbol=${stock.ticker}&token=${apiKey}`)
    .then(raw => raw.json())
    .then(data => stock.current_price = data.c)
  });
  Promise.all(requests).then(result => {console.log(result);
    return next();
  })
  .catch(err => next(err))
}


module.exports = apiController;
