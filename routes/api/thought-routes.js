const { User, Thought } = require('../../models');
const router = require('express').Router();

//========== SEARCH THOUGHT ==========//
// searches for all the thoughts.
router.get('/', (req, res) => {
    Thought.find({})
    .populate({
        path: 'users',
        select: '-__v' // minus so we dont get it returned
    })
    .select('-__v') // gets rid of 'v' in the body
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});
// searches for a single thought.
router.get('/:id', ({ params }, res) => {
    Thought.findOne({ _id: params.id})
    .populate({
        path: 'reactions',
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

//========== MAKE A THOUGHT ==========//
// sets up a new thought.
router.post('/:userId', ({ params, body }, res) => {
    console.log(body);
    Thought.create(body)
    .then(({ _id }) => {
        return User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { thoughts: _id } },
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

//========== EDIT A THOUGHT ==========//
router.put('/:thoughtId', ({ params, body }, res) => {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId }, body, { new: true})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No id found with this id!' });
                return;
            }
            res.json(dbUserData);
       })
        .catch(err => res.json(err));
});

//========== DELETE A THOUGHT ==========//
router.delete('/:userId/:thoughtId', ({ params }, res) => {
    Thought.findOneAndDelete({ _id: params.thoughtId })
    .then(deletedThought => {
        if (!deletedThought) {
            return res.status(404).json({ message: 'No thought with this id!'});
        }
        return User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { thoughts: params.thoughtId} },
            { new: true }
        );
    })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!'});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => res.json(err));
});

//========== MAKE A REACTION ==========//
router.post('/:thoughtId/reactions', ({ params, body }, res) => {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: {reactions: body } },
        { new: true }
    )
    .populate({
        path: 'reactions',
        select: '-__v' // minus so we dont get it returned
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
});

//========== DELETE A SINGLE REACTION ==========//
router.delete('/:thoughtId/reactions/:reactionId', ({ params }, res) => {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
    )
        .then(dbReactionData => res.json(dbReactionData))
        .catch(err => res.json(err));
}
);

module.exports = router;
