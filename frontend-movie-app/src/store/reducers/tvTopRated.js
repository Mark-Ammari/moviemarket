import * as actionTypes from '../actions/actionTypes';

const initialState = {
    topRated: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvTopRatedReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_TOP_RATED_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.FETCH_TV_TOP_RATED_SUCCESS:
            return {
                ...state,
                error: false,
                topRated: action.topRated,
                loading: false,
            }
        case actionTypes.FETCH_TV_TOP_RATED_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state;
    }
}