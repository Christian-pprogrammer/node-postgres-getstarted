const expres = require('express');
const { getTodos, createTodo } = require('./todoController');
const router = expres.Router();
router.get('/todos', getTodos);
router.post('/create-todo', createTodo);
module.exports = router;