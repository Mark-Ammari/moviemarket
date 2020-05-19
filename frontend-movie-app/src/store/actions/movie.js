import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function movieNowPlayingStart() {
    return {
        type: actionTypes.FETCH_MOVIES_NOW_PLAYING_START
    }
}
function movieNowPlayingSuccess(nowPlaying) {
    return {
        type: actionTypes.FETCH_MOVIES_NOW_PLAYING_SUCCESS,
        nowPlaying: nowPlaying
    }
}
function movieNowPlayingFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIES_NOW_PLAYING_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieNowPlaying = () => {
    return dispatch => {
        dispatch(movieNowPlayingStart());
        movieURI.get('/movie/now_playing')
            .then(res => {
                dispatch(movieNowPlayingSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieNowPlayingFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function moviePopularStart() {
    return {
        type: actionTypes.FETCH_MOVIES_POPULAR_START
    }
}
function moviePopularSuccess(popular) {
    return {
        type: actionTypes.FETCH_MOVIES_POPULAR_SUCCESS,
        popular: popular
    }
}
function moviePopularFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIES_POPULAR_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMoviePopular = () => {
    return dispatch => {
        dispatch(moviePopularStart());
        movieURI.get('/movie/popular')
            .then(res => {
                dispatch(moviePopularSuccess(res.data));
            })
            .catch(err => {
                dispatch(moviePopularFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function movieTopRatedStart() {
    return {
        type: actionTypes.FETCH_MOVIES_TOP_RATED_START
    }
}
function movieTopRatedSuccess(topRated) {
    return {
        type: actionTypes.FETCH_MOVIES_TOP_RATED_SUCCESS,
        topRated: topRated
    }
}
function movieTopRatedFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIES_TOP_RATED_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieTopRated = () => {
    return dispatch => {
        dispatch(movieTopRatedStart());
        movieURI.get('/movie/top_rated')
            .then(res => {
                dispatch(movieTopRatedSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieTopRatedFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function movieUpcomingStart() {
    return {
        type: actionTypes.FETCH_MOVIES_UPCOMING_START
    }
}
function movieUpcomingSuccess(upcoming) {
    return {
        type: actionTypes.FETCH_MOVIES_UPCOMING_SUCCESS,
        upcoming: upcoming
    }
}
function movieUpcomingFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIES_UPCOMING_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieUpcoming = () => {
    return dispatch => {
        dispatch(movieUpcomingStart());
        movieURI.get('/movie/upcoming')
            .then(res => {
                dispatch(movieUpcomingSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieUpcomingFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function movieGenreListStart() {
    return {
        type: actionTypes.FETCH_MOVIE_GENRE_LIST_START
    }
}
function movieGenreListSuccess(genreList) {
    return {
        type: actionTypes.FETCH_MOVIE_GENRE_LIST_SUCCESS,
        genreList: genreList
    }
}
function movieGenreListFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_GENRE_LIST_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieGenreList = () => {
    return dispatch => {
        dispatch(movieGenreListStart());
        movieURI.get('/movie/genre/list')
            .then(res => {
                dispatch(movieGenreListSuccess(res.data.genres));
            })
            .catch(err => {
                dispatch(movieGenreListFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function movieDiscoverStart() {
    return {
        type: actionTypes.FETCH_MOVIE_DISCOVER_START
    }
}
function movieDiscoverSuccess(discover) {
    return {
        type: actionTypes.FETCH_MOVIE_DISCOVER_SUCCESS,
        discover: discover
    }
}
function movieDiscoverFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_DISCOVER_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieDiscover = (sortBy, includeAdult, includeVideo, page, withGenres) => {
    return dispatch => {
        dispatch(movieDiscoverStart());
        movieURI.get('/movie/discover', {
            params: {
                "sort_by": sortBy,
                "include_adult": includeAdult,
                "include_video": includeVideo,
                "page": page,
                "with_genres": withGenres
            }
        })
            .then(res => {
                dispatch(movieDiscoverSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieDiscoverFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------

function movieSearchStart() {
    return {
        type: actionTypes.FETCH_MOVIE_SEARCH_START
    }
}

function movieSearchSuccess(search) {
    return {
        type: actionTypes.FETCH_MOVIE_SEARCH_SUCCESS,
        search: search
    }
}

function movieSearchFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_SEARCH_FAIL,
        errorMessage: errorMessage
    }
}

export const fetchMovieSearch = (query, page=1) => {
    return dispatch => {
        dispatch(movieSearchStart())
        movieURI.get('/movie/search', {
            params: {
                query: query,
                page: page
            }
        })
        .then(res => dispatch(movieSearchSuccess(res.data)))
        .catch(err => dispatch(movieSearchFail(err.response.data)))
    }    
    
}