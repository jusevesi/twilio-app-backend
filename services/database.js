const Msgs = require("../models/msgs");

class DatabaseService {

    constructor() { };

    async saveMsg (msg, recipient) {
        const date = new Date();
        const message = new Msgs({ msg, recipient, date});
        await message.save();
    }

    async getMsgs () {
        const messages = await Msgs.find();
        return messages;
    }
}

module.exports = DatabaseService;