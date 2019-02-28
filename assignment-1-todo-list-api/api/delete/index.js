const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dao = require('../../db/dao')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const { todoId } = await ctx.request.body

  // Validate arguments
  if (!todoId) {
    ctx.body = 'Error! The following arguments are expected: todoId'
    return
  }

  const item = await dao.delete(todoId)
  ctx.body = item || 'No todo item was deleted'

})

module.exports = app.callback()