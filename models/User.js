const { Schema, model } = require('mongoose'); // imports Schema and model from mongoose package.


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+$/
    }
});

const User = model('User', UserSchema)