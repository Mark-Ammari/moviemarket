import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function tvDetailsStart() {
    return {
        type: actionTypes.FETCH_TV_DETAILS_START
    }
}
function tvDetailsSuccess(details) {
    return {
        type: actionTypes.FETCH_TV_DETAILS_SUCCESS,
        details: details
    }
}
function tvDetailsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_DETAILS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvDetails = (id) => {
    return dispatch => {
        dispatch(tvDetailsStart());
        tvURI.get(`/tv/details/${id}`)
            .then(res => {
                dispatch(tvDetailsSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvDetailsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvImagesStart() {
    return {
        type: actionTypes.FETCH_TV_IMAGES_START
    }
}
function tvImagesSuccess(images) {
    return {
        type: actionTypes.FETCH_TV_IMAGES_SUCCESS,
        images: images
    }
}
function tvImagesFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_IMAGES_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvImages = (id) => {
    return dispatch => {
        dispatch(tvImagesStart());
        tvURI.get(`/tv/images/${id}`)
            .then(res => {
                dispatch(tvImagessSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvImagesFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvVideosStart() {
    return {
        type: actionTypes.FETCH_TV_VIDEOS_START
    }
}
function tvVideosSuccess(videos) {
    return {
        type: actionTypes.FETCH_TV_VIDEOS_START,
        videos: videos
    }
}
function tvVideosFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_VIDEOS_START,
        errorMessage: errorMessage
    }
}
export const FetchtvVideos = (id) => {
    return dispatch => {
        dispatch(tvVideosStart());
        tvURI.get(`/tv/videos/${id}`)
            .then(res => {
                dispatch(tvVideosSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvVideosFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvKeywordsStart() {
    return {
        type: actionTypes.FETCH_TV_KEYWORDS_START
    }
}
function tvKeywordsSuccess(keywords) {
    return {
        type: actionTypes.FETCH_TV_KEYWORDS_SUCCESS,
        keywords: keywords
    }
}
function tvKeywordsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_KEYWORDS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvKeywords = (id) => {
    return dispatch => {
        dispatch(tvKeywordsStart());
        tvURI.get(`/tv/keywords/${id}`)
            .then(res => {
                dispatch(tvKeywordsSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvKeywordsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvRecommendationsStart() {
    return {
        type: actionTypes.FETCH_TV_RECOMMENDATIONS_START
    }
}
function tvRecommendationsSuccess(Recommendations) {
    return {
        type: actionTypes.FETCH_TV_RECOMMENDATIONS_SUCCESS,
        recommendations: recommendations
    }
}
function tvRecommendationsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_RECOMMENDATIONS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvRecommendations = (id, page) => {
    return dispatch => {
        dispatch(tvRecommendationsStart());
        tvURI.get(`/tv/recommendations/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(tvRecommendationsSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvRecommendationsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvReviewsStart() {
    return {
        type: actionTypes.FETCH_TV_REVIEWS_START
    }
}
function tvRecommendationsSuccess(reviews) {
    return {
        type: actionTypes.FETCH_TV_REVIEWS_SUCCESS,
        reviews: reviews
    }
}
function tvRecommendationsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_REVIEWS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvReviews= (id, page) => {
    return dispatch => {
        dispatch(tvReviewsStart());
        tvURI.get(`/tv/reviews/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(tvReviewsSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvReviewsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function tvSimilarStart() {
    return {
        type: actionTypes.FETCH_TV_SIMILAR_START
    }
}
function tvSimilarSuccess(Similar) {
    return {
        type: actionTypes.FETCH_TV_SIMILAR_SUCCESS,
        Similar: Similar
    }
}
function tvSimilarFail(errorMessage) {
    return {
        type: actionTypes.FETCH_TV_SIMILAR_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchtvSimilar = (id, page) => {
    return dispatch => {
        dispatch(tvSimilarStart());
        tvURI.get(`/tv/Similar/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(tvSimilarSuccess(res.data));
            })
            .catch(err => {
                dispatch(tvSimilarFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------