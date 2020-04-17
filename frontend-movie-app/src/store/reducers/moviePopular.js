import * as actionTypes from '../actions/actionTypes';

const initialState = {
    popular: {},
    loading: true
};

export default function moviePopularReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_POPULAR_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_POPULAR_SUCCESS:
            return {
                popular: action.popular,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_POPULAR_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}