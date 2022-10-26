const { Schema, model } = require('mongoose');

const MsgsSchema = Schema({
    msg: {
        type: String,
        required: [true, 'The message is required']
    },
    date: {
        type: Date,
        required: [true, 'The date is required']
    },
    recipient: {
        type: String,
        required: [true, 'The recipient is required']
    }
});

// MsgsSchema.methods.toJSON = function () {
//     const { __v, _id, ...message } = this.toObject();
//     message.pid = _id;
//     return message;
// }

module.exports = model('Msgs', MsgsSchema);

