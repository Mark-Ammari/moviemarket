import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    user: {},
    errorMessage: {},
    error: false,
    loading: true
}

export default function userSignupReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_SIGNUP_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: false,
                loading: false
            }
        case actionTypes.AUTH_SIGNUP_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state
    }
}