const express = require('express');
const config = require('config');
const router = express.Router();
const movieURI = require('../../../config/configurations');

router.get('/trending/:mediatype/:timewindow', (req, res) => {
    movieURI.get(`/trending/${req.params.mediatype}/${req.params.timewindow}`, { params: { "api_key": config.get("api_key") || proccess.env.api_key } })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).json({ message: "cannot load page.", error: true }))
});

module.exports = router;