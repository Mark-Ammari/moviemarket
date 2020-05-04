import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    videos: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieVideosReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_VIDEOS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.videos,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_VIDEOS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}