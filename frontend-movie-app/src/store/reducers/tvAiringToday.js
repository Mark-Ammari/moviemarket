import * as actionTypes from '../actions/actionTypes';

const initialState = {
    airingToday: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvAiringTodayReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_AIRING_TODAY_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.FETCH_TV_AIRING_TODAY_SUCCESS:
            return {
                ...state,
                airingToday: action.airingToday,
                error: false,
                loading: false,
            }
        case actionTypes.FETCH_TV_AIRING_TODAY_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state;
    }
}