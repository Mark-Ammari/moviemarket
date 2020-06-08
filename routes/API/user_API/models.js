const express = require('express');
const { auth } = require('../../../middleware/auth');

const User = require('../../../models/User');
const Favorites = require('../../../models/Favorites');

const router = express.Router();

// GET /user/details
router.get('/details', auth, (req, res) => {
    User.findById(req.session.user)
        .select('-password')
        .then(response => {
            res.json(response)
        })
        .catch(() => res.status(400).json({ message: "Need authorization token in order to get user data", error: true }))
})

// GET /user/favorites
router.get('/favorites', auth, (req, res) => {
    Favorites.findById(req.session.user)
        .then(response => {
            res.json(response)
        })
        .catch(() => res.status(400).json({ message: "User does not exist", error: true }))
})

// POST /user/{id}/favorites
router.post('/favorites', auth, (req, res) => {
    Favorites.findByIdAndUpdate(req.session.user, {
        $push: { favorites: req.body.favorites },
    }).then(response => res.json(response))
        .catch(() => res.status(400).json({ message: "Something went wrong", error: true }))
})

// DELETE /user/{id}/favorites/{index}
router.delete('/favorites/:itemid', auth, async (req, res) => {
    Favorites.updateOne({ _id: req.session.user }, {
        $pull: { "favorites": { "id": parseInt(req.params.itemid) } }
    }, { safe: true, multi: true })
        .then(() => res.status(200).json({ message: `Successfully removed item from favorites.` }))
        .catch(err => res.status(400).json({ message: err.message, error: true }))
});

// ----------------------------------------------------------------------------------------------------

module.exports = router
