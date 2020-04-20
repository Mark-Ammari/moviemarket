import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trending: {},
    loading: true,
    error: false,
    errorMessage: {}
};

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TRENDING_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                trending: action.trending,
                loading: false,
                error: false,
            }
        case actionTypes.FETCH_TRENDING_MOVIES_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    };
};

