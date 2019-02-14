const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dao = require('./db/dao')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  // Filter by title, if specified
  const dbtitle = await ctx.request.body.title
  if (dbtitle) {
    const item = await dao.show(dbtitle)
    ctx.body = item || 'No movie was found with this title'
  } else { // Retrieve all movies
    const list = await dao.list()
    ctx.body = list || 'No movies were found'
  }
})

module.exports = app.callback()