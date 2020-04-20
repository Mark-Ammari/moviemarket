import * as actionTypes from '../actions/actionTypes';

const initialState = {
    nowPlaying: null,
    error: false,
    errorMessage: {},
    loading: true
};

export default function movieNowPlayingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_SUCCESS:
            return {
                ...state,
                nowPlaying: action.nowPlaying,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}