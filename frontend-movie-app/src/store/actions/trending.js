import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function trendingStart() {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_START
    }
}

function trendingSuccess(trending) {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
        trending: trending
    }
}

function trendingFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_FAIL,
        errorMessage: errorMessage
    }
}

export default function FetchTrending() {
    return dispatch => {
        dispatch(trendingStart());
        movieURI.get('/trending/all/day')
        .then(res => {
            console.log(res);
            dispatch(trendingSuccess(res.data));
        })
        .catch(err => {
            dispatch(trendingFail(err.response.data));
        })
    }
}

export const setTypeMovie = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.TYPE_IS_MOVIE
        })
    }
}

export const setTypeShow = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.TYPE_IS_SHOW
        })
    }
}