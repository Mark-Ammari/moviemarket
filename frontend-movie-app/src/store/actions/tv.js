import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function tvAiringTodayStart() {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_START
    }
}
function tvAiringTodaySuccess(airingToday) {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_SUCCESS,
        airingToday: airingToday
    }
}
function tvAiringTodayFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVAiringToday = () => {
    return dispatch => {
        dispatch(tvAiringTodayStart());
        movieURI.get('/tv/airing_today')
            .then(res => {
                dispatch(tvAiringTodaySuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvAiringTodayFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function tvOnTheAirStart() {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_START
    }
}
function tvOnTheAirSuccess(onTheAir) {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_SUCCESS,
        onTheAir: onTheAir
    }
}
function tvOnTheAirFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVOnTheAir = () => {
    return dispatch => {
        dispatch(tvOnTheAirStart());
        movieURI.get('/tv/on_the_air')
            .then(res => {
                dispatch(tvOnTheAirSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvOnTheAirFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function tvTopRatedStart() {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_START
    }
}
function tvTopRatedSuccess(topRated) {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_SUCCESS,
        topRated: topRated
    }
}
function tvTopRatedFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVTopRated = () => {
    return dispatch => {
        dispatch(tvTopRatedStart());
        movieURI.get('/tv/top_rated')
            .then(res => {
                dispatch(tvTopRatedSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvTopRatedFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function tvPopularStart() {
    return {
        type: actionTypes.FETCH_TV_POPULAR_START
    }
}
function tvPopularSuccess(popular) {
    return {
        type: actionTypes.FETCH_TV_POPULAR_SUCCESS,
        popular: popular
    }
}
function tvPopularFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_POPULAR_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVPopular = () => {
    return dispatch => {
        dispatch(tvPopularStart());
        movieURI.get('/tv/popular')
            .then(res => {
                dispatch(tvPopularSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvPopularFail(err.response.data));
            })
    }
}
//---------------------------------------------------------------
function tvGenreListStart() {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_START
    }
}
function tvGenreListSuccess(genreList) {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_SUCCESS,
        genreList: genreList
    }
}
function tvGenreListFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVGenreList = () => {
    return dispatch => {
        dispatch(tvGenreListStart());
        movieURI.get('/tv/genre/list')
            .then(res => {
                dispatch(tvGenreListSuccess(res.data.genres));
            })
            .catch(err => {
                dispatch(tvGenreListFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------
function tvDiscoverStart() {
    return {
        type: actionTypes.FETCH_TV_DISCOVER_START
    }
}
function tvDiscoverSuccess(discover) {
    return {
        type: actionTypes.FETCH_TV_DISCOVER_SUCCESS,
        discover: discover
    }
}
function tvDiscoverFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_DISCOVER_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchTVDiscover = (sortBy, includeAdult, includeVideo, page, withGenres) => {
    return dispatch => {
        dispatch(tvDiscoverStart());
        movieURI.get('/tv/discover', {
            params: {
                "sort_by": sortBy,
                "include_adult": includeAdult,
                "include_video": includeVideo,
                "page": page,
                "with_genres": withGenres
            }
        })
            .then(res => {
                dispatch(tvDiscoverSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvDiscoverFail(err.response.data));
            })
    }
}
// ---------------------------------------------------------------

function tvSearchStart() {
    return {
        type: actionTypes.FETCH_TV_SEARCH_START
    }
}

function tvSearchSuccess(search) {
    return {
        type: actionTypes.FETCH_TV_SEARCH_SUCCESS,
        search: search
    }
}

function tvSearchFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_SEARCH_FAIL,
        errorMessage: errorMessage
    }
}

export const fetchTVSearch = (query, page=1) => {
    return dispatch => {
        dispatch(tvSearchStart())
        movieURI.get('/tv/search', {
            params: {
                query: query,
                page: page
            }
        })
        .then(res => dispatch(tvSearchSuccess(res.data)))
        .catch(err => dispatch(tvSearchFail(err.response.data)))
    }    
    
}