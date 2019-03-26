const pool = require('./db')

class Dao {

    async list() {
        try {
            const query = 'SELECT * FROM todoList ORDER BY todoStatus, todoDueBy, todoItem'
            const result = await pool.query(query)
            return result
        } catch(error) {
            console.log(error)
        }
    }

    async get(todoId) {
        try {
            const query = `SELECT * FROM todoList WHERE todoId = ${todoId}`
            const result = await pool.query(query)
            return result[0]
        } catch(error) {
            console.log(error)
        }
    }

    async create(todoItem, todoStatus, todoDueBy) {
        try {
            const query = 
                `INSERT INTO todoList
                (todoItem, todoDateAdded, todoStatus, todoDueBy)
                VALUES ('${todoItem}', now(), '${todoStatus}', '${todoDueBy}')`
            const result = await pool.query(query)
            return result
        } catch(error) {
            console.log(error)
        }
    }

    async update(todoId, todoItem, todoStatus, todoDueBy) {
        try {
            const query = 
                `UPDATE todoList
                SET todoItem = '${todoItem}', todoStatus = '${todoStatus}', todoDueBy = '${todoDueBy}'
                WHERE todoId = ${todoId}`
            const result = await pool.query(query)
            return result
        } catch(error) {
            console.log(error)
        }
    }

    async delete(todoId) {
        try {
            const query = 
                `DELETE FROM todoList
                WHERE todoId = ${todoId}`
            const result = await pool.query(query)
            return result
        } catch(error) {
            console.log(error)
        }
    }

}

const dao = new Dao()
module.exports = dao