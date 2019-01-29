const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  //send a json object with a name
  ctx.body = `Hello ${ctx.request.body.name}`
})

module.exports = app.callback()