const EventEmitter = require('events');
class Logger extends EventEmitter
{
     newstr='';
    log(message) {
        console.log(message)
        this.emit('messageLogged');
    }
    log1(message)
    {
        console.log(message);
        for (var i = message.length - 1; i >= 0; i--)
        {
            this.newstr+=message[i];
        }
        this.emit('messageLogged1');
    }


}

module.exports=Logger;


