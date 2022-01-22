const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const { pool } = require('./db');
const router = require('./router');
const app = express();
app.use('/', router);

app.listen(5000, () => {
    console.log('express app listening on port 5000');
})