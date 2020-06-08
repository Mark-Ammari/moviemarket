import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    favorites: {},
    errorMessage: {},
    error: false,
    loading: true,
}

export default function removeFromFavoritesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REMOVE_FAVORITES_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.REMOVE_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: action.favorites,
                error: false,
                loading: false,
            }
        case actionTypes.REMOVE_FAVORITES_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state
    }
}