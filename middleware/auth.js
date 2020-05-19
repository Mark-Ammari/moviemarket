const express = require('express')
const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header("x-auth-token")

    if (!token) res.status(401).json({ message: "No token, authorization denied", error: true })

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"))
        req.user = decoded;
        next()
    } catch(e) {
        res.status(400).json({ message: "Token is invalid!", error: true })
    }
}

module.exports = auth;