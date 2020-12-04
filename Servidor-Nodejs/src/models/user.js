const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'messages'
    }]
});

module.exports = mongoose.model('user', userSchema);