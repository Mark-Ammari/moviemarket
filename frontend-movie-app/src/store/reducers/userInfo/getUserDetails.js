import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    user: {},
    errorMessage: {},
    error: false,
    loading: true,
}

export default function getUserDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_DETAILS_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.USER_DETAILS_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: false,
                loading: false,
            }
        case actionTypes.USER_DETAILS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state
    }
}