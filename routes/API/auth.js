const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

const router = express.Router();

// POST /user
router.post('/auth', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ message: "Please fill all required fields.", error: true })
    }

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ message: "User does not exist.", error: true })
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ message: "Invalid credentials. Please try again.", error: true })
                    jwt.sign(
                        { _id: user["_id"] },
                        config.get("jwtSecret"),
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    email: user.email,
                                    _id: user._id
                                },
                            })
                        }
                    )
                })
        })
})

module.exports = router