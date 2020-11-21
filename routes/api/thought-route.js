const { User, Thought } = require('../../models');
const router = require('express').Router();

//========== SEARCH USER ==========//
// searches for all the thoughts.
router.get('/', (req, res) => {
    User.find({})
    .select('-__v') // gets rid of 'v' in the body
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});
// searches for a single thought.
router.get('/:id', ({ params }, res) => {
    User.findOne({ _id: params.id})
    .select('-__v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

//========== MAKE THOUGHT ==========//
// sets up a new thought.
router.post('/:userId', ({ params, body }, res) => {
    console.log(body);
    Thought.create(body)
    .then(({ _id }) => {
        return User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { thought: _id } },
            { new: true }
        );
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err));
});