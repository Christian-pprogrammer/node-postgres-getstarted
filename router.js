const expres = require('express');
const { getTodos } = require('./todoController');
const router = expres.Router();
router.get('/todos', getTodos);
module.exports = router;