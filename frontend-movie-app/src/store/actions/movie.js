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

function movieNowPlayingFail() {
    return {
        type: actionTypes.FETCH_MOVIES_NOW_PLAYING_FAIL
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
            console.log(err.data)
            dispatch(movieNowPlayingFail());
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

function moviePopularFail() {
    return {
        type: actionTypes.FETCH_MOVIES_POPULAR_FAIL
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
            console.log(err.data)
            dispatch(moviePopularFail());
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

function movieTopRatedFail() {
    return {
        type: actionTypes.FETCH_MOVIES_TOP_RATED_FAIL
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
            console.log(err.data)
            dispatch(movieTopRatedFail());
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

function movieUpcomingFail() {
    return {
        type: actionTypes.FETCH_MOVIES_UPCOMING_FAIL
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
            console.log(err.data)
            dispatch(movieUpcomingFail());
        })
    }
}
// ---------------------------------------------------------------
