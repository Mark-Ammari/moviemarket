import * as actionTypes from '../actions/actionTypes';

const initialState = {
    search: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvSearchReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_SEARCH_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_TV_SEARCH_SUCCESS:
            return {
                ...state,
                search: action.search,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_TV_SEARCH_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}