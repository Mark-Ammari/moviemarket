const express = require('express');
const axios = require('axios');

const router = express.Router();
const config = require('../../../varConfig/configurations');

router.get('/trending/:mediatype/:timewindow', (req, res) => {
    config.movie_uri.get(`/trending/${req.params.mediatype}/${req.params.timewindow}`, { params: { "api_key": config.api_key } })
    .then(response => res.send(response.data))
    .catch(err => res.status(404).json({ message: "cannot load page.", error: true }))
});

module.exports = router;