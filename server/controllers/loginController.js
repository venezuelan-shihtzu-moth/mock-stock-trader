const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const db = require('../db/stockAppModel');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const loginController = {};

// Signup
// Take username and password data from front end
// Run password data through Bcrypt and store username and hashed PW in users table
// Along with a set budget
// After signup use JWTs or cookies to verify login

// Login
// Take Username and Password data from front end
// Use Bcrypt to verify correct password and compare with hashed pw in db
// If the info is correct use JWTs or cookies to verify login\

loginController.signUp = (req, res, next) => {
  if (!req.body.username || !req.body.password){
    return res.status(400).send('Username and Password Required')
  }

  const values = [req.body.username];

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    values.push(hash);
  });

  const text = `INSERT INTO users (user_name, user_password, user_net_worth) VALUES ($1, $2, 1000)`;

  db.query(text, values, (error, results) => {
    if (error) {
      return next(error);
    }
  });

  return next();
};

loginController.logIn = (req, res, next) => {

  if (!req.body.username || !req.body.password){
    return res.status(400).send('Username and Password Required')
  }
  // Load hash from your password DB.
  const text = 'Select user_password from users where user_name=($1)';
  const value = [req.body.username];
  // let hash;

  db.query(text, value, async (error, results) => {
    if (error) {
      return next(error);
    }

    res.locals.hash = results.rows[0].user_password;
    res.locals.password = req.body.password;

     const match = await bcrypt.compare(
      req.body.password,
      res.locals.hash
    );
    console.log(match);
    if (match){
      res.status(200).send('login successful')
    } else {
      res.status(200).send('login failed') }
    // console.log(match);
  });
};

module.exports = loginController;
