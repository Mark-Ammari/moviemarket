import * as actionTypes from '../actions/actionTypes';

const initialState = {
    nowPlaying: {},
    loading: true
};

export default function movieNowPlayingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_SUCCESS:
            return {
                nowPlaying: action.nowPlaying,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_NOW_PLAYING_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}