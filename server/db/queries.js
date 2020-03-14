/**
 * @name queries.js
 * @description connect to external database and 
 */
const { Pool } = require('pg');

const PG_URI =
  'postgres://hdfoyjux:pkX4ZABkjXHfULi6vsKE0Sf8rKvpmOln@drona.db.elephantsql.com:5432/hdfoyjux';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
