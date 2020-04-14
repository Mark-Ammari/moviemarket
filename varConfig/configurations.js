const axios = require('axios');

const movieURI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

module.exports = config = {
    'api_key': "4d0009bfeb29732ad699427e7ecc2fce",
    'movie_uri': movieURI
}