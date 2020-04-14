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

function trendingFail() {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_FAIL
    }
}

export default function FetchTrending() {
    return dispatch => {
        dispatch(trendingStart());
        movieURI.get('/trending/all/day')
        .then(res => {
            // console.log(res.data);
            dispatch(trendingSuccess(res.data));
        })
        .catch(err => {
            console.log(err.data)
            dispatch(trendingFail());
        })
    }
}
