import * as actionTypes from '../actions/actionTypes';

const initialState = {
    topRated: {},
    error: false,
    errorMessage: {},
    loading: true
};

export default function movieTopRatedReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_TOP_RATED_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_TOP_RATED_SUCCESS:
            return {
                ...state,
                topRated: action.topRated,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_TOP_RATED_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}