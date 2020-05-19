const axios = require('axios');

const movieURI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

module.exports = movieURI