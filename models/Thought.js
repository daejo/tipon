const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1, // sets minimum character length for strings in mongoDB. 
        maxlength: 280 // sets maximum character length for strings in mongoDB. 
    },
    createdAt: {
        type: Date, // set as date for type.
        default: Date.now, // sets current date.
        get: ((createdAtVal) => dateFormat(createdAtVal)) // getter method to convert date value into a more readable syntax.
    }
})