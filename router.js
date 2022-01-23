const expres = require('express');
const { getTodos, createTodo,updateTodo, deleteTodo } = require('./todoController');
const router = expres.Router();

//Routes
/**
 * @swagger
 * /todos:
 * get:
 *  description: Use the request to get all todos
 *  response:
 *      '200':
 *          description: A successful response
 */
router.get('/todos', getTodos);
router.post('/create-todo', createTodo);
router.put('/update-todo/:uuid', updateTodo)
router.delete('/delete-todo/:uuid', deleteTodo);
module.exports = router;