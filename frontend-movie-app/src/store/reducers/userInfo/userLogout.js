import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isAuth: {},
    errorMessage: {},
    error: false,
    loading: true,
}

export default function userLogoutReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_LOGOUT_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: action.isAuth,
                error: false,
                loading: false,
            }
        case actionTypes.AUTH_LOGOUT_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state
    }
}