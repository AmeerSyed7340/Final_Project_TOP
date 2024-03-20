const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username not provided']
    },
    password: {
        type: String,
        required: [true, "Password not provided"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;