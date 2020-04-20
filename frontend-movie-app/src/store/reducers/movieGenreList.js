import * as actionTypes from '../actions/actionTypes';

const initialState = {
    genreList: [],
    error: false,
    errorMessage: {},
    loading: true
}

export default function movieGenreListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_GENRE_LIST_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_GENRE_LIST_SUCCESS:
            return {
                ...state,
                genreList: action.genreList,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_GENRE_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: false,
                loading: false
            }
        default: return state;
    }
}