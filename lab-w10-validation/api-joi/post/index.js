const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Joi = require('joi');

const app = new Koa()
app.use(bodyParser())

const schema = Joi.object().keys({
  todoItem: Joi.string().alphanum().min(5).max(60).required(),
  todoStatus: Joi.number().integer().min(0).max(1).required(),
  todoDueBy: Joi.string().required()
});

app.use(async ctx => {

  const requestBody = await ctx.request.body
  const { todoItem, todoStatus, todoDueBy } = requestBody
  const result = Joi.validate({ todoItem, todoStatus, todoDueBy }, schema);
  ctx.body = result.error ? result.error.details[0].message : requestBody

})

module.exports = app.callback()
