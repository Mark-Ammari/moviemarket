const express = require('express');
const uuid = require('uuid');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../../middleware/auth');

const User = require('../../../models/User');
const Favorites = require('../../../models/Favorites');

const router = express.Router();

// POST /user/register
router.post('/register', auth, (req, res) => {
    const uniqueID = uuid.v1()

    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ message: "Please fill all required fields.", error: true })
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ message: "Email already exists.", error: true })
            const newUser = new User({
                email,
                password,
                _id: uniqueID
            })
            const favorites = new Favorites({
                _id: uniqueID,
                favorites: []
            })
            bcrypt.genSalt(10, (_, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash;
                    Promise.all([newUser.save(), favorites.save()])
                        .then(response => {
                            jwt.sign(
                                { _id: response[0]["_id"] },
                                config.get("jwtSecret"),
                                (err, token) => {
                                    if (err) throw err
                                    res.json({
                                        token,
                                        user: {
                                            email: response[0].email,
                                            _id: response[0]._id
                                        },
                                        favorites: response[1]
                                    })
                                }
                            )
                        })
                        .catch(err => res.status(400).json({ message: "Something went wrong", error: true }))
                })
            })
        })
})

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
