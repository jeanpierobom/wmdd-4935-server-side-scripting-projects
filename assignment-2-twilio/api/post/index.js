const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Joi = require('joi');
const dateformat = require('dateformat');
const logger = require('pino')()
const dao = require('../../db/dao')

// Initialize Koa
const app = new Koa()
app.use(bodyParser())

// Validation schema
const schema = Joi.object().keys({
  todo: Joi.string().min(5).max(60).required()
});

// Create a Twiml message
function getTwimlMessage(text) {
  const twiml = new MessagingResponse();
  twiml.message(text);
  return twiml.toString();
}

app.use(async ctx => {

  logger.info('Executing the POST method to store a new item in the todo list.')

  // Define the response type
  ctx.type = 'text/xml';

  //const twiml = new MessagingResponse();
  const { Body } = await ctx.request.body

  // Validate arguments
  const result = Joi.validate({ todo: Body }, schema);

  if (result.error) {
    ctx.body = getTwimlMessage(`Error: ${result.error.details[0].message}`)
    logger.info(`There was an error to validate the payload: ${result.error.details[0].message}`)
    return;
  }

  // The todoStatus is pending
  const todoStatus = 0;

  // The due date is 7 days from today
  const dueBy = new Date();
  dueBy.setDate(dueBy.getDate() + 7);
  const todoDueBy = dateformat(dueBy, 'yyyy-mm-dd');

  // Persist the todo item
  const item = await dao.create(Body, todoStatus, todoDueBy)
  ctx.body = getTwimlMessage(item ? `Todo item created sucessfully: ${Body}` : 'No todo item was created')

  logger.info('Todo item created sucessfully.')
  
})

module.exports = app.callback()