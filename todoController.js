const { pool } = require('./db');
exports.getTodos = async (req,res) => {
    try {
        const results = await pool.query('SELECT * FROM todo');
        res.status(200).json({
            todos: results.rows
        })
    }catch(err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
}

exports.createTodo = async (req,res) => {
    try {
        const newTodo = await pool.query(
          `INSERT INTO todo(id, title, description) VALUES(uuid_generate_v4(), '${req.body.title}', '${req.body.description}')`
        );
        res.status(200).json({
            newTodo: 'created'
        })
    }catch(err) {
        res.status(400).json({
          status: false,
          error: err.message,
        });
    }
}