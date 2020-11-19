const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId // creates the new id.
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: ((createdAtVal) => dateFormat(createdAtVal))
    }
});

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
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reactions: [ReactionSchema]  
});