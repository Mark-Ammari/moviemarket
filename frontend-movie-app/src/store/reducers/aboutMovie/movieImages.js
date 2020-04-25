import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    images: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieImagesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_IMAGES_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_IMAGES_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}