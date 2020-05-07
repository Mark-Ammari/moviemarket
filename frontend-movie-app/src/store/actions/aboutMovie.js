import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function movieDetailsStart() {
    return {
        type: actionTypes.FETCH_MOVIE_DETAILS_START
    }
}
function movieDetailsSuccess(details) {
    return {
        type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
        details: details
    }
}
function movieDetailsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_DETAILS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieDetails = (id) => {
    return dispatch => {
        dispatch(movieDetailsStart());
        movieURI.get(`/movie/details/${id}`)
            .then(res => {
                dispatch(movieDetailsSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieDetailsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieImagesStart() {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGES_START
    }
}
function movieImagesSuccess(images) {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGES_SUCCESS,
        images: images
    }
}
function movieImagesFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGES_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieImages = (id) => {
    return dispatch => {
        dispatch(movieImagesStart());
        movieURI.get(`/movie/images/${id}`)
            .then(res => {
                dispatch(movieImagesSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieImagesFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieVideosStart() {
    return {
        type: actionTypes.FETCH_MOVIE_VIDEOS_START
    }
}
function movieVideosSuccess(videos) {
    return {
        type: actionTypes.FETCH_MOVIE_VIDEOS_SUCCESS,
        videos: videos
    }
}
function movieVideosFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_VIDEOS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieVideos = (id) => {
    return dispatch => {
        dispatch(movieVideosStart());
        movieURI.get(`/movie/videos/${id}`)
            .then(res => {
                dispatch(movieVideosSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieVideosFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieKeywordsStart() {
    return {
        type: actionTypes.FETCH_MOVIE_KEYWORDS_START
    }
}
function movieKeywordsSuccess(keywords) {
    return {
        type: actionTypes.FETCH_MOVIE_KEYWORDS_SUCCESS,
        keywords: keywords
    }
}
function movieKeywordsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_KEYWORDS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieKeywords = (id) => {
    return dispatch => {
        dispatch(movieKeywordsStart());
        movieURI.get(`/movie/keywords/${id}`)
            .then(res => {
                dispatch(movieKeywordsSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieKeywordsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieRecommendationsStart() {
    return {
        type: actionTypes.FETCH_MOVIE_RECOMMENDATIONS_START
    }
}
function movieRecommendationsSuccess(recommendations) {
    return {
        type: actionTypes.FETCH_MOVIE_RECOMMENDATIONS_SUCCESS,
        recommendations: recommendations
    }
}
function movieRecommendationsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_RECOMMENDATIONS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieRecommendations = (id, page) => {
    return dispatch => {
        dispatch(movieRecommendationsStart());
        movieURI.get(`/movie/recommendations/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(movieRecommendationsSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieRecommendationsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieReviewsStart() {
    return {
        type: actionTypes.FETCH_MOVIE_REVIEWS_START
    }
}
function movieReviewsSuccess(reviews) {
    return {
        type: actionTypes.FETCH_MOVIE_REVIEWS_SUCCESS,
        reviews: reviews
    }
}
function movieReviewsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_REVIEWS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieReviews = (id, page) => {
    return dispatch => {
        dispatch(movieReviewsStart());
        movieURI.get(`/movie/reviews/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(movieReviewsSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieReviewsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieSimilarStart() {
    return {
        type: actionTypes.FETCH_MOVIE_SIMILAR_START
    }
}
function movieSimilarSuccess(similar) {
    return {
        type: actionTypes.FETCH_MOVIE_SIMILAR_SUCCESS,
        similar: similar
    }
}
function movieSimilarFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_SIMILAR_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieSimilar = (id, page) => {
    return dispatch => {
        dispatch(movieSimilarStart());
        movieURI.get(`/movie/similar/${id}`, {
            params: {
                page: page
            }
        })
            .then(res => {
                dispatch(movieSimilarSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieSimilarFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------
function movieCreditsStart() {
    return {
        type: actionTypes.FETCH_MOVIE_CREDITS_START
    }
}
function movieCreditsSuccess(credits) {
    return {
        type: actionTypes.FETCH_MOVIE_CREDITS_SUCCESS,
        credits: credits
    }
}
function movieCreditsFail(errorMessage) {
    return {
        type: actionTypes.FETCH_MOVIE_CREDITS_FAIL,
        errorMessage: errorMessage
    }
}
export const FetchMovieCredits = (id) => {
    return dispatch => {
        dispatch(movieCreditsStart());
        movieURI.get(`/movie/credits/${id}`)
            .then(res => {
                dispatch(movieCreditsSuccess(res.data));
            })
            .catch(err => {
                dispatch(movieCreditsFail(err.response.data));
            })
    }
}
// -----------------------------------------------------------------------------