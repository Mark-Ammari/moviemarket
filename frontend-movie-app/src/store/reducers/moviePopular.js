import * as actionTypes from '../actions/actionTypes';

const initialState = {
    popular: {},
    error: false,
    errorMessage: {},
    loading: true
};

export default function moviePopularReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_POPULAR_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_POPULAR_SUCCESS:
            return {
                ...state,
                popular: action.popular,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_POPULAR_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}