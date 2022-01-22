const { pool } = require('./db');
exports.getTodos = async (req,res) => {
    try {
        const results = await pool.query('SELECT * FROM todo');
        res.status(200).json({
            results
        })
    }catch(err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
}