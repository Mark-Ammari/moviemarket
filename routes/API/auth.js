const express = require('express');
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const User = require('../../models/User');
const Favorites = require('../../models/Favorites');
const { auth } = require('../../middleware/auth');
const router = express.Router();

// POST /account/signup
router.post('/signup', (req, res) => {
    const uniqueID = uuid.v1()

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all required fields.", error: true })
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
        return res.status(400).json({ message: "Please enter a valid email address.", error: true })
    } else if (password.length < 8) {
        return res.status(400).json({ message: "Password must be atleast 8 characters or longer.", error: true })
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
                    if (err) return res.status(400).json({ message: "Something went wrong", error: true })
                    newUser.password = hash;
                    Promise.all([newUser.save(), favorites.save()])
                        .then(response => {
                            req.session.user = response[0]._id
                            res.json({
                                user: {
                                    email: response[0].email,
                                    _id: response[0]._id
                                },
                                favorites: response[1],
                                message: "Signup successful."
                            })

                        }).catch(err => res.status(400).json({ message: "Something went wrong", error: true }))
                })
            })
        }).catch(err => res.status(400).json({ message: "Something went wrong", error: true }))
})

// POST /account/login
router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all required fields.", error: true })
    }

    User.findOne({ email })
        .then(user => {
            if (!user) res.status(400).json({ message: "User does not exist.", error: true })
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ message: "Invalid credentials. Please try again.", error: true })
                    if (!req.session.user) {
                        req.session.user = user._id
                    } else {
                        req.session.regenerate((error) => {
                            if (error) return res.status(400).json({ message: "Something went wrong, server could not regenerate new session.", error: true })
                            req.session.user = user._id
                        })
                    }
                    res.json({
                        user: {
                            _id: user._id,
                            email: user.email
                        },
                        message: "Login Successful."
                    })
                })
        }).catch(err => res.status(400).json({ message: "Something went wrong", error: true }))  
})

router.post('/logout', auth, (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ message: "Something went wrong, server could not destroy session.", error: true })
        req.session = null
    })
})

router.get('/login', (req, res) => {
    if (!req.session.user) {
        res.json({ isAuth: false })
    } else {
        res.json({ isAuth: true })
    }
})

router.post('/guest/login', async (req, res) => {
    const email = "guest@guest.com"
    const password = "GuestAccount123456789"

    try {
        // Check for existing user
        const user = await User.findOne({ email });
        if (!user) throw Error('User Does not exist');
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        if (!req.session.user) {
            req.session.user = user._id
        } else {
            req.session.regenerate((error) => {
                if (error) return res.status(400).json({ message: "Something went wrong, server could not regenerate new session.", error: true })
                req.session.user = user._id
            })
        }
        res.status(200).json({
          user: {
            id: user._id,
            email: user.email
          },
          message: "Login Successful."
        });
      } catch (e) {
        res.status(400).json({ message: "Something went wrong with the server.", error: true });
      }
})

module.exports = router