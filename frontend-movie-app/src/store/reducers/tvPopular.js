import * as actionTypes from '../actions/actionTypes';

const initialState = {
    popular: {},
    loading: true,
    error: false
}

export default function tvPopularReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_POPULAR_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.FETCH_TV_POPULAR_SUCCESS:
            return {
                popular: action.popular,
                error: false,
                loading: false,
            }
        case actionTypes.FETCH_TV_POPULAR_FAIL:
            return {
                ...state,
                error: true,
                loading: false,
            }
        default: return state;
    }
}