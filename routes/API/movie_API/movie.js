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
        .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
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
        .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

// GET /movie/top_rated
router.get('/top_rated', (req, res) => {
    config.movie_uri.get('/movie/top_rated',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

// GET /movie/upcoming
router.get('/upcoming', (req, res) => {
    config.movie_uri.get('/movie/upcoming',
        {
            params:
            {
                "api_key": config.api_key,
                page: req.query.page,
                region: req.query.region
            }
        })
        .then(response => res.json(response.data))
        .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/genre/list
router.get('/genre/list', (req, res) => {
    config.movie_uri.get('/genre/movie/list', {
        params: {
            "api_key": config.api_key
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/discover
router.get('/discover', (req, res) => {
    config.movie_uri.get('/discover/movie', {
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

//GET /movie/{movie_id}/images
router.get('/images/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/images`, {
        params: {
            "api_key": config.api_key,
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/keywords
router.get('/keywords/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/keywords`, {
        params: {
            "api_key": config.api_key,
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/reviews
router.get('/reviews/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/reviews`, {
        params: {
            "api_key": config.api_key,
            "page": req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/videos
router.get('/videos/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/videos`, {
        params: {
            "api_key": config.api_key,
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}
router.get('/details/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}`, {
        params: {
            "api_key": config.api_key,
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/recommendations
router.get('/recommendations/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/recommendations`, {
        params: {
            "api_key": config.api_key,
            "page": req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/similar
router.get('/similar/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/similar`, {
        params: {
            "api_key": config.api_key,
            "page": req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

//GET /movie/{movie_id}/credits
router.get('/credits/:id', (req, res) => {
    config.movie_uri.get(`/movie/${req.params.id}/credits`, {
        params: {
            "api_key": config.api_key,
            "page": req.query.page
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(404).send({ message: "cannot load page.", error: true }))
})

module.exports = router