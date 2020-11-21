const { Schema, model, Types } = require('mongoose'); // imports Schema and model from mongoose package.


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true, // sets username to not have duplicates.
        trim: true // sets username to not have extra blank spaces.
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: /^\S+@\S+$/ // sets a regex pattern for your email address.
    },
    thoughts: [ // relates thoughts to users
        {
            type: Schema.Types.ObjectId, // sets the type to be an object id.
            ref: 'Thought' // model being referred to and used.
        }
    ],
    friends: [ // relates friends to users.
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

// get total count of friends on retrieval.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema); // creates the User model.

module.exports = User; // exports the User model.