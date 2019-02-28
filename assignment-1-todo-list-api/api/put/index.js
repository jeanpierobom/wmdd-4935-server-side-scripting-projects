const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dao = require('../../db/dao')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const { todoId, todoItem, todoStatus, todoDueBy } = await ctx.request.body

  // Validate arguments
  if (!todoId || !todoItem || !todoStatus || !todoDueBy) {
    ctx.body = 'Error! The following arguments are expected: todoId, todoItem, todoStatus, todoDueBy'
    return
  }

  const item = await dao.update(todoId, todoItem, todoStatus, todoDueBy)
  ctx.body = item || 'No todo item was updated'

})

module.exports = app.callback()