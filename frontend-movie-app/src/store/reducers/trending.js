import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trending: {},
    loading: true
};

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TRENDING_MOVIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                loading: false,
                trending: action.trending
            }
        case actionTypes.FETCH_TRENDING_MOVIES_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;
    };
};

