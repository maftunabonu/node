const EventEmitter = require("events");

class Logger extends EventEmitter{
    log(message) {
        // Raise an event
        this.emit('messageLogged', "Your message has been logged");
    }
}

module.exports = Logger;

