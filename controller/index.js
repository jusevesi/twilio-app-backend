const { response } = require('express');

const indexController = {
    
    sendMsg: () => {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                from: '+573152139799',
                to: '+573177402196'
            })
            .then(message => console.log(message.sid));
    }
}

module.exports = indexController;