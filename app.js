const EventEmitter = require('events');
const emitter=new EventEmitter();
const logger=require('./logger');
emitter.on('messageLogged',()=>{
    logger.logger('hello world');
});
console.log('event executed successfully');