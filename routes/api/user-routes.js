const { User, Thought } = require('../../models');
const router = require('express').Router();

// searches for all the pizza.
router.get('/', (req, res) => {
    User.find({})
    .select('-__v') // gets rid of 'v' in the body
    .then(dbUserData => res.json)
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// sets up a new user.
router.post('/', ({ body }, res) => {
    User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
});
