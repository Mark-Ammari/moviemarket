import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function signupStart() {
    return {
        type: actionTypes.AUTH_SIGNUP_START
    }
}

function signupSuccess(user) {
    return {
        type: actionTypes.AUTH_SIGNUP_SUCCESS,
        user: user
    }
}

function signupFail(errorMessage) {
    return {
        type: actionTypes.AUTH_SIGNUP_FAIL,
        errorMessage: errorMessage
    }
}

export default function signupUser(email, password) {
    return dispatch => {
        dispatch(signupStart());
        movieURI.post('/account/signup', {
            email,
            password
        })
        .then(res => {
            dispatch(signupSuccess(res.data.user));
        })
        .catch(err => {
            dispatch(signupFail(err.response.data));
        })
    }
}