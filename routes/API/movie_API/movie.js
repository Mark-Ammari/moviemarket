const express = require('express');
const config = require('../../../varConfig/configurations');

const router = express.Router();

// GET /movie/now_playing
router.get('/now_playing', (req, res) => {
    config.movie_uri.get('/movie/now_playing',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.send({ success: false, message: err.message }))
})

// GET /movie/popular
router.get('/popular', (req, res) => {
    config.movie_uri.get('/movie/popular',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.send({ success: false, message: err.message }))
})

// GET /movie/top_rated
router.get('/top_rated', (req, res) => {
    config.movie_uri.get('movie/top_rated',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.send({ success: false, message: err.message }))
})

// GET /movie/upcoming
router.get('/upcoming', (req, res) => {
    config.movie_uri.get('movie/upcoming',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.send({ success: false, message: err.message }))
})

module.exports = router