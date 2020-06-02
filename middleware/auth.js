const express = require('express')

const server = express()

server.use((req, res, next) => {
    if (!req.session.user) {
        res.json({ isAuth: false })
    } else {
        res.json({ isAuth: true })
        next()
    }
})

module.exports = server;