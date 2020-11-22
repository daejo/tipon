const { User, Thought } = require('../../models');
const router = require('express').Router();

//========== SEARCH USER ==========//
// searches for all the users.
router.get('/', (req, res) => {
    User.find({})
    .populate({
        path: 'thoughts',
        select: '-__v' // minus so we dont get it returned
    })
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
    .populate({
        path: 'thoughts',
        select: '-__v' // minus so we dont get it returned
    })
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

//========== MAKE A USER ==========//
// sets up a new user.
router.post('/', ({ body }, res) => {
    User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
});

//========== EDIT A USER ==========//
router.put('/:id', ({params, body}, res) => {
    User.findOneAndUpdate({ _id: params.id }, body)
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))
});

//========== DELETE A USER ==========//
router.delete('/:id', ({params, body}, res) => {
    User.findOneAndDelete({ _id: params.id }, body)
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))
});

//========== ADD A FRIEND ==========//
router.post('/:userId/friends/:friendId', ({ params, body }, res) => {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: body} },
        { new: true })
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//========== DELETE A FRIEND ==========//
router.delete('/:userId/friends/:friendId', ({ params }, res) => {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: { friendId: params.friendId } } },
        { new: true }
    )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
});

module.exports = router;
