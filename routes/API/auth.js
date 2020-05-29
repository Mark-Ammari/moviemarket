const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');
const uuid = require("uuid");
const { check, validationResult } = require("express-validator")
const User = require('../../models/User');
const Favorites = require('../../models/Favorites');

const router = express.Router();

// POST /account/signup
router.post('/signup', [
    check('email').isEmail().withMessage("Please enter a valid email."),
    check('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters long.')
], (req, res) => {
    const uniqueID = uuid.v1()

    const { email, password } = req.body

   
    const errors = validationResult(req);
    let arr = []
    errors.array().map(item => {
        arr.push(item.msg)
    })
    if (!email || !password) {
        res.status(400).json({ message: ["Please fill all required fields."] })
    } else if (!errors.isEmpty()) {
        return res.status(422).json({ message: arr });
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

// POST /account/login
router.post('/login', (req, res) => {
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
                    req.session.user = user._id
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