const { Schema, model } = require('mongoose'); // imports Schema and model from mongoose package.


const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
});

const User = model('User', UserSchema)