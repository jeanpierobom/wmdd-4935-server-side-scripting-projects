const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())

const books = [{ title: 'Node.JS in Action' }, { title: 'Mastering Node.JS' }, { title: 'Heads First Java' }];

app.use(async ctx => {
  //send a json object with a name
  ctx.body = JSON.stringify(books);
})

module.exports = app.callback()