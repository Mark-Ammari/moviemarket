import * as actionTypes from '../actions/actionTypes';

const initialState = {
    airingToday: {},
    loading: true,
}

export default function tvAiringTodayReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_AIRING_TODAY_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_TV_AIRING_TODAY_SUCCESS:
            return {
                airingToday: action.airingToday,
                loading: false,
            }
        case actionTypes.FETCH_TV_AIRING_TODAY_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}