const expres = require('express');
const { getTodos, createTodo,updateTodo } = require('./todoController');
const router = expres.Router();
router.get('/todos', getTodos);
router.post('/create-todo', createTodo);
router.put('/update-todo', updateTodo)
module.exports = router;