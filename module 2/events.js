const EventEmitter = require('events');
const emitter = new EventEmitter();  

//Register a listener
emitter.on('messageLogged', function(data){
    const {id, message} = data;
    console.log(id, message);
})

//raising an event 
emitter.emit("messageLogged", {id: 1, message: "Message logged"});

