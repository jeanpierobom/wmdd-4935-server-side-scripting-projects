const pool = require('./db')

class Dao {

    async list() {
        try {
            const itemData = await pool.query('SELECT * FROM movieList ORDER BY movieTitle')
            return itemData
        } catch (error) {
            console.log(error)
        }
    }

    async show(title) {
        try {
            const itemData = await pool.query(`SELECT * FROM movieList WHERE movieTitle LIKE '%${title}%'`)
            return itemData[0]
        } catch (error) {
            console.log(error)
        }
    }
      
}

const dao = new Dao()
module.exports = dao