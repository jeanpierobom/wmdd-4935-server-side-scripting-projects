const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dao = require('../../db/dao')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const { todoItem, todoStatus, todoDueBy } = await ctx.request.body

  // Validate arguments
  if (!todoItem || !todoStatus || !todoDueBy) {
    ctx.body = 'Error! The following arguments are expected: todoItem, todoStatus, todoDueBy'
    return
  }

  const item = await dao.create(todoItem, todoStatus, todoDueBy)
  ctx.body = item || 'No todo item was created'

})

module.exports = app.callback()