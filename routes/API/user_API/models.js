const express = require('express');
const auth = require('../../../middleware/auth');

const User = require('../../../models/User');
const Favorites = require('../../../models/Favorites');

const router = express.Router();

// GET /user/{id}
router.get('/:id', auth, (req, res) => {
    User.findById(req.params.id)
        .select('-password')
        .then(response => {
            res.json(response)
        })
        .catch(() => res.status(400).json({ message: "Need authorization token in order to get user data", error: true }))
})

// GET /user/{id}/favorites
router.get('/:id/favorites', auth, (req, res) => {
    Favorites.findById(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(() => res.status(400).json({ message: "User does not exist", error: true }))
})
// PUT /user/{id}/favorites
router.post('/:id/favorites', auth, (req, res) => {
    Favorites.findByIdAndUpdate(req.params.id, {
        $push: { favorites: { test: "test" } }
    }).then(response => res.json(response))
        .catch(() => res.status(400).json({ message: "Something went wrong", error: true }))
})

// DELETE /user/{id}/favorites/{index}
router.put('/:id/favorites/:itemid', auth, (req, res) => {
    Favorites.updateOne(req.params.id, {
        $pull: { favorites: favorites[req.params.itemid]}
    }).then(response => res.json(response))
    .catch(() => res.status(400).json({ message: "Something went wrong", error: true }))
})

module.exports = router
