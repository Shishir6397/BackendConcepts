const mysql = require('mysql2');
const { promisify } = require('util');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sr@98765',
  database: 'sakila'
});

// Promisify the pool.query method
const query = promisify(pool.query).bind(pool);

// Export the promisified query function
module.exports = query;

