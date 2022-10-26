const { response } = require('express');

class TwilioService {

    constructor() { };

    async sendMsgTwilio( msg = '', recipient = '') {

        try {
            const accountSid = process.env.TWILIO_ACCOUNT_SID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = require('twilio')(accountSid, authToken);

            const response = await client.messages
                .create({
                    body: msg,
                    from: '+16802204897',
                    to : recipient
                });
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = TwilioService;