const Koa = require('koa')
const bodyParser = require('koa-body')

const pool = require('./db/dbconfig')

const app = new Koa()
app.use(bodyParser())

app.use(ctx => {
    const requestData = ctx.request.body.title
    const item = JSON.stringify(getData(requestData))
    ctx.body = `Result ${item}`
})

async function getData(title) {
    try {
        // const result = await pool.query('SELECT * FROM movieList WHERE movieTitle LIKE ?', [title])
        // return result[0]
        let result;
        await pool.query(`
            SELECT *
            FROM movieList
            WHERE movieTitle
            LIKE '%${title}%',
        `,
        function(err, rows, fields) {
            result = rows
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = app.callback()