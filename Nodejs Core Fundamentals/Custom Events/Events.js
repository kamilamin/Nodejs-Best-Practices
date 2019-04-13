const events = require('events');

let emiter = new events.EventEmitter();

emiter.on('newEvent', (message) => {
    console.log(`Message: ${message}`);
});

emiter.emit('newEvent', "Hello from Custom Event")
