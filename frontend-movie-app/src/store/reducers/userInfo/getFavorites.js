import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    favorites: {},
    errorMessage: {},
    error: false,
    loading: true,
}

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_FAVORITES_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: action.favorites,
                error: false,
                loading: false,
            }
        case actionTypes.FETCH_FAVORITES_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state
    }
}