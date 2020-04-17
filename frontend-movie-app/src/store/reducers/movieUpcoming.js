import * as actionTypes from '../actions/actionTypes';

const initialState = {
    upcoming: {},
    loading: true
};

export default function movieUpcomingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_UPCOMING_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_UPCOMING_SUCCESS:
            return {
                upcoming: action.upcoming,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_UPCOMING_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}