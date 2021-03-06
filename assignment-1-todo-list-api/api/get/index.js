const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dao = require('../../db/dao')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  // Filter by id, if specified
  const todoId = await ctx.request.body.todoId
  if (todoId) {
    const item = await dao.get(todoId)
    ctx.body = item || `No todo item was found with the id ${todoId}`
  } else { // Retrieve all todo items
    const list = await dao.list()
    ctx.body = list || 'No todo items were found'
  }

})

module.exports = app.callback()