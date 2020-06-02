import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    user: {},
    errorMessage: {},
    error: false,
    loading: true,
    success: false
}

export default function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_START:
            return {
                ...state,
                error: false,
                loading: true,
                success: false
            }
        case actionTypes.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: false,
                loading: false,
                success: true
            }
        case actionTypes.AUTH_LOGIN_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
                success: false
            }
        default: return state
    }
}