import * as actionTypes from '../actions/actionTypes';

const initialState = {
    upcoming: {},
    error: false,
    errorMessage: {},
    loading: true
};

export default function movieUpcomingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_UPCOMING_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.FETCH_MOVIES_UPCOMING_SUCCESS:
            return {
                ...state,
                upcoming: action.upcoming,
                loading: false,
                error: false,
            }
        case actionTypes.FETCH_MOVIES_UPCOMING_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}