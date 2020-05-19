const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    registered_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    _id: {
        type: String
    }
})

module.exports = User = mongoose.model('user', UserSchema);