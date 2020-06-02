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
            dispatch(signupSuccess(res.data));
        })
        .catch(err => {
            dispatch(signupFail(err.response.data));
        })
    }
}
// ------------------------------------------------------------------
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
            dispatch(loginSuccess(res.data));
        })
        .catch(err => {
            dispatch(loginFail(err.response.data));
        })
    }
}
// ------------------------------------------------------------------
function logoutStart() {
    return {
        type: actionTypes.AUTH_LOGOUT_START
    }
}

function logoutSuccess(isAuth) {
    return {
        type: actionTypes.AUTH_LOGOUT_SUCCESS,
        isAuth: isAuth
    }
}

function logoutFail(errorMessage) {
    return {
        type: actionTypes.AUTH_LOGOUT_FAIL,
        errorMessage: errorMessage
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(logoutStart());
        movieURI.post('/account/logout')
        .then(res => {
            dispatch(logoutSuccess(res.data));
        })
        .catch(err => {
            dispatch(logoutFail(err.response.data));
        })
    }
}
// ------------------------------------------------------------------
function isAuthStart() {
    return {
        type: actionTypes.AUTH_VALID_START
    }
}

function isAuthSuccess(isAuth) {
    return {
        type: actionTypes.AUTH_VALID_SUCCESS,
        isAuth: isAuth
    }
}

function isAuthFail(errorMessage) {
    return {
        type: actionTypes.AUTH_VALID_FAIL,
        errorMessage: errorMessage
    }
}

export function isAuthUser() {
    return dispatch => {
        dispatch(isAuthStart());
        movieURI.get('/account/login')
        .then(res => {
            dispatch(isAuthSuccess(res.data));
        })
        .catch(err => {
            dispatch(isAuthFail(err.response.data));
        })
    }
}
// ------------------------------------------------------------------