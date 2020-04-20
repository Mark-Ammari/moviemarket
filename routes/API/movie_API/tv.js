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
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
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
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
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
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
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
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/genre/list
router.get('/genre/list', (req, res) => {
    config.movie_uri.get('/genre/tv/list', {
        params: {
            "api_key": config.api_key
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /tv/discover
router.get('/discover', (req, res) => {
    config.movie_uri.get('/discover/tv', {
        params: {
            "api_key": config.api_key,
            "sort_by": req.query["sort_by"],
            "include_adult": req.query["include_adult"],
            "include_video": req.query["include_video"],
            "page": req.query.page,
            "with_genres": req.query["with_genres"]
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

module.exports = router