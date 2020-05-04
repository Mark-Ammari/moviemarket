import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    reviews: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieReviewsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_REVIEWS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.reviews,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_REVIEWS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}