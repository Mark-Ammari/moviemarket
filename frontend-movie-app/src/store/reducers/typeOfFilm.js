import * as actionTypes from '../actions/actionTypes';

const initialState = {
    typeOfFilm: "movie"
}

export default function typeOfFilmReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TYPE_IS_MOVIE:
            return {
                typeOfFilm: "movie"
            }

        case actionTypes.TYPE_IS_SHOW:
            return {
                typeOfFilm: "show"
            }
        default: return state;
    }
}