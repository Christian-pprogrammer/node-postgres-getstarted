const Pool = require('pg').Pool;
const { HOSTNAME, PASSWORD, USERNAME, DB_NAME, DB_PORT } = process.env; 
const pool = new Pool({
    host: HOSTNAME,
    password: PASSWORD,
    user: USERNAME,
    database: DB_NAME,
    port: DB_PORT
});

module.exports.pool = pool;