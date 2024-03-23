const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username not provided']
    },
    password: {
        type: String,
        required: [true, "Password not provided"]
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    sentRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: {
        type: Number,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;