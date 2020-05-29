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

export function signupUser(email, password) {
    return dispatch => {
        dispatch(signupStart());
        movieURI.post('/account/signup', {
            email: email,
            password: password
        })
        .then(res => {
            dispatch(signupSuccess(res.data.user));
        })
        .catch(err => {
            dispatch(signupFail(err.response.data));
        })
    }
}

function loginStart() {
    return {
        type: actionTypes.AUTH_LOGIN_START
    }
}

function loginSuccess(user) {
    return {
        type: actionTypes.AUTH_LOGIN_SUCCESS,
        user: user
    }
}

function loginFail(errorMessage) {
    return {
        type: actionTypes.AUTH_LOGIN_FAIL,
        errorMessage: errorMessage
    }
}

export function loginUser(email, password) {
    return dispatch => {
        dispatch(loginStart());
        movieURI.post('/account/login', {
            email: email,
            password: password
        })
        .then(res => {
            dispatch(loginSuccess(res.data.user));
        })
        .catch(err => {
            dispatch(loginFail(err.response.data));
        })
    }
}