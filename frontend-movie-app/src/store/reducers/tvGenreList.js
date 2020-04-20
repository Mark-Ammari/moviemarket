import * as actionTypes from '../actions/actionTypes';

const initialState = {
    genreList: [],
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvGenreListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_GENRE_LIST_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_TV_GENRE_LIST_SUCCESS:
            return {
                ...state,
                genreList: action.genreList,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_TV_GENRE_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}