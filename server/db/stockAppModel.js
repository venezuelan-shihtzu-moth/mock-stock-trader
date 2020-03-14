/**
 * @name queries.js
 * @description connect to external database to retrieve data via dbController
 * @todo figure out Schema for database
 * Tables :
 * (Users : primary key: userid, username, password, networth)
 * (BoughtStocks: primary key: id, userid, name, amount)
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
