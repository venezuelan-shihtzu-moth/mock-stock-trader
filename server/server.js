/**
 * @name server.js
 * @description Main server file for hosting our backend
 * @summary Need several components.
 *  Need a way to communicate with a database.
 *  Need way to communicate with API.
 *  Need way to authenticate login requests with jwts and cookies
 *  Need way to handle requests for data from client
 *  @todo need controllers: login/auth, apiCalls, database
 *
 */

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const loginController = require('./controllers/loginController');
const apiController = require('./controllers/apiController');
const dbController = require('./controllers/dbController');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cookieParser());

//jwt
const jwt = require('jsonwebtoken');
const expressjwt = require("express-jwt");
const jwtCheck = expressjwt({    
  secret: "cUlTurALcHaNgEoNlY"
});
//end of jwt

//  test route to handle db requests
// app.get('/db', dbController.getData, (req, res) => {
//   res.status(200).send(res.locals.data);
// });

app.get('/price', apiController.validateStock, apiController.getStockPrice, (req, res) => {
    res.status(200).json(res.locals.price);
  },
);

app.post('/signUp', loginController.signUp, (req, res) => {
  res.status(200).send('Succesful sign up');
});

app.post('/logIn', loginController.logIn);

app.get('/home', (req, res) => {
  res.status(200).send('home page mi amigos');
})

app.get('/home/logedIn', jwtCheck, (req, res) => {
  res.status(200).send('loged in only page');
})

app.post('/buy',dbController.validateStockFunds, dbController.buyStock, dbController.deductFromUser, (req, res) => {
  res.status(200).send("Buying stock ok!");
})
// app.get('/leaderboard', dbController.getLeaderboard, (req, res) => {
//   res.status(200).json(res.locals.leader);
// })

app.get('/profitloss', dbController.getUserStocks, apiController.getCurrentPrices, (req, res) => {
  res.status(200).json(res.locals.stocks);
})

app.get("*", (req, res) => {
  res.sendStatus(404);
});


// Route to login

// Route to signup

// Route to get stock data

// Route to make a stock purchase

//

app.use(bodyParser.json());
app.use(cookieParser());
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
