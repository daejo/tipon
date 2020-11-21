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
// searches for a single user.
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