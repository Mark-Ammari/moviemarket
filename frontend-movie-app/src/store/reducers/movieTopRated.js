import * as actionTypes from '../actions/actionTypes';

const initialState = {
    topRated: {},
    loading: true
};

export default function movieTopRatedReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_TOP_RATED_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_TOP_RATED_SUCCESS:
            return {
                topRated: action.topRated,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_TOP_RATED_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}