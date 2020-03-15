const fetch = require('node-fetch');
const db = require('../db/stockAppModel');

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

const bcrypt = require('bcrypt');

const saltRounds = 10;

loginController.signUp = (req, res, next) => {
  const values = [req.body.username];

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    values.push(hash);
    console.log(hash);
    console.log(values);
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
  //   // Load hash from your password DB.
  //   bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  //     // result == true or false
  //   });
};

module.exports = loginController;
