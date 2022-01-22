const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  password: `postgres`,
  user: 'postgres',
  database: 'api',
  port: 5432,
});

module.exports.pool = pool;
