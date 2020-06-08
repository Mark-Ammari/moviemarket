const express = require('express')
const config = require('config')

function auth(req, res, next) {
    if (!req.session.user) {
        res.json({ isAuth: false })
    } else {
        next()
    }
}

function guest() {
    const token = req.header('x-auth-token');

    // Check for token
    if (!token)
      return res.status(401).json({ msg: 'No token, authorizaton denied' });
  
    try {
      // Verify token
      const decoded = jwt.verify(token, config.get("JWT_SECRET"));
      // Add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = { auth: auth, guest: guest};