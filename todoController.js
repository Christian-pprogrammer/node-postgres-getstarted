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
          `INSERT INTO todo(id, title, description) VALUES(uuid_generate_v4(), '${req.body.title}', '${req.body.description}') RETURNING *`
        );
        res.status(200).json({
            newTodo: newTodo.rows[0]
        })
    }catch(err) {
        res.status(400).json({
          status: false,
          error: err.message,
        });
    }
}

exports.updateTodo = async (req,res) => {
    try {
        const uuid = req.params.uuid;
        const updated = await pool.query(
            `UPDATE todo SET title = '${req.body.title}', description = '${req.body.description}' WHERE id = '${uuid}' RETURNING *`
        )    
        res.status(200).json({
            updated: updated.rows[0]
        })
    }catch(err) {
        res.status(400).json({
        status: false,
        error: err.message,
        });
    }
}