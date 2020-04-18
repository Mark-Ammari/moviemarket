const express = require('express');
const config = require('../../../varConfig/configurations');

const router = express.Router();

// GET popular tv/popular
router.get('/popular', (req, res) => {
    config.movie_uri.get('/tv/popular', {
        params: {
            "api_key": config.api_key,
            page: req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log(err))
})

// GET tv/on_the_air
router.get('/on_the_air', (req, res) => {
    config.movie_uri.get('/tv/on_the_air', {
        params: {
            "api_key": config.api_key,
            page: req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log(err))
})

// GET tv/airing_today
router.get('/airing_today', (req, res) => {
    config.movie_uri.get('/tv/airing_today', {
        params: {
            "api_key": config.api_key,
            page: req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log(err))
})

// GET tv/top_rated
router.get('/top_rated', (req, res) => {
    config.movie_uri.get('/tv/top_rated', {
        params: {
            "api_key": config.api_key,
            page: req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log(err))
})


module.exports = router