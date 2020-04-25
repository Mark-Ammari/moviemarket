import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    details: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_DETAILS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                details: action.details,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_DETAILS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}