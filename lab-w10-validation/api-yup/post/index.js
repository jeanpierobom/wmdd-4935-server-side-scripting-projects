const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
let yup = require('yup');

const app = new Koa()
app.use(bodyParser())

let schema = yup.object().shape({
  todoItem: yup.string().min(5).max(60).required(),
  todoStatus: yup.number().integer().min(0).max(1).required(),
  todoDueBy: yup.string().required()
});

app.use(async ctx => {

  const requestBody = await ctx.request.body
  const { todoItem, todoStatus, todoDueBy } = requestBody

  let result;
  await schema.validate({ todoItem, todoStatus, todoDueBy })
    .then(function(value) {
      result = value || 'OK';
    })
    .catch(function(err) {
      result = err.errors[0] || 'ERROR';
    });

  ctx.body = result;

})

module.exports = app.callback()
