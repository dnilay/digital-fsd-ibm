const EventEmitter = require('events');
const MyString=require('./MyString');

const str = new MyString();

str.on('messageLogged',(str)=>{
    console.log('str from on event -> '+ str);

    console.log('Hi');

});

str.reverseStr('hello world');



console.log('event executed successfully');
