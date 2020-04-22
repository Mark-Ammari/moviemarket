import * as actionTypes from '../actions/actionTypes';

const initialState = {
    discover: {},
    errorMessage: {},
    error: false,
    loading: true
}

export default function movieDiscoverReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_DISCOVER_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_DISCOVER_SUCCESS:
            return {
                ...state,
                discover: action.discover,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_DISCOVER_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}