const { User, Thought } = require('../../models');
const router = require('express').Router();

router.post('/', ({ body }, res) => {
    User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
})