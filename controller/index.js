const { response } = require('express');
const DatabaseService = require('../services/database');
const TwilioService = require('../services/twilio');

const indexController = {

    sendMsg: async (req, res = response) => {
        const { msg, recipient } = req.body;
        const twilioService = new TwilioService();
        const databaseService = new DatabaseService();
        const responseTwilio = await twilioService.sendMsgTwilio(msg, recipient);
        await databaseService.saveMsg(msg, recipient);
        res.json({
            responseTwilio
        });
    },

    getMsgs: async (req, res) => {
        const databaseService = new DatabaseService();
        const messages = await databaseService.getMsgs();
        res.json({
            messages
        })
    }
}

module.exports = indexController;