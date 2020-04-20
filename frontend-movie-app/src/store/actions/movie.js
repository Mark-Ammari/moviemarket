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
                console.log(err)
                dispatch(movieGenreListFail(err.response.data));
            })
    }
}