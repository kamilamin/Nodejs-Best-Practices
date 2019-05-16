const emitter = require('./SendEmail');

emitter.on("EmailEvent", (message) => {
    console.log(`Email: ${message}`)
})

emitter.emit("EmailEvent", "Send Activation Email to the new user")