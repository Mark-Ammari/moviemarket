import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    credits: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieCreditsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_CREDITS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_CREDITS_SUCCESS:
            return {
                ...state,
                credits: action.credits,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_CREDITS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}