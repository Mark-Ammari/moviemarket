import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';
import addToFavoritesReducer from '../reducers/userInfo/addToFavorites';

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

export function loginGuest() {
    return dispatch => {
        dispatch(loginStart());
        movieURI.post('/account/guest/login')
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
function userDetailsStart() {
    return {
        type: actionTypes.USER_DETAILS_START
    }
}

function userDetailsSuccess(user) {
    return {
        type: actionTypes.USER_DETAILS_SUCCESS,
        user: user
    }
}

function userDetailsFail(errorMessage) {
    return {
        type: actionTypes.USER_DETAILS_FAIL,
        errorMessage: errorMessage
    }
}

export function fetchUserDetails() {
    return dispatch => {
        dispatch(userDetailsStart());
        movieURI.get('/user/details')
            .then(res => {
                dispatch(userDetailsSuccess(res.data));
            })
            .catch(err => {
                dispatch(userDetailsFail(err.response.data));
            })
    }
}
// ------------------------------------------------------------------
function favoritesStart() {
    return {
        type: actionTypes.FETCH_FAVORITES_START
    }
}

function favoritesSuccess(favorites) {
    return {
        type: actionTypes.FETCH_FAVORITES_SUCCESS,
        favorites: favorites
    }
}

function favoritesFail(errorMessage) {
    return {
        type: actionTypes.FETCH_FAVORITES_FAIL,
        errorMessage: errorMessage
    }
}

export function fetchFavorites() {
    return dispatch => {
        dispatch(favoritesStart());
        movieURI.get('/user/favorites')
            .then(res => {
                dispatch(favoritesSuccess(res.data));
            })
            .catch(err => {
                dispatch(favoritesFail(err.response.data));
            })
    }
}
// ------------------------------------------------------------------
function addToFavoritesStart() {
    return {
        type: actionTypes.ADD_FAVORITES_START
    }
}

function addToFavoritesSuccess(favorites) {
    return {
        type: actionTypes.ADD_FAVORITES_SUCCESS,
        favorites: favorites
    }
}

function addToFavoritesFail(errorMessage) {
    return {
        type: actionTypes.ADD_FAVORITES_FAIL,
        errorMessage: errorMessage
    }
}

export function addToFavorites(favorites, type) {
    return dispatch => {
        dispatch(addToFavoritesStart());
        movieURI.post('/user/favorites', {
            favorites: { ...favorites, type_of: type }
        })
            .then(res => {
                dispatch(addToFavoritesSuccess(res.data));
                dispatch(fetchFavorites())
            })
            .catch(err => {
                dispatch(addToFavoritesFail(err.response.data));
            })
    }
}
// ------------------------------------------------------------------
function removeFromFavoritesStart() {
    return {
        type: actionTypes.REMOVE_FAVORITES_START
    }
}

function removeFromFavoritesSuccess(favorites) {
    return {
        type: actionTypes.REMOVE_FAVORITES_SUCCESS,
        favorites: favorites
    }
}

function removeFromFavoritesFail(errorMessage) {
    return {
        type: actionTypes.REMOVE_FAVORITES_FAIL,
        errorMessage: errorMessage
    }
}

export function removeFromFavorites(itemid) {
    return dispatch => {
        dispatch(removeFromFavoritesStart());
        movieURI.delete(`/user/favorites/${itemid}`)
            .then(res => {
                dispatch(removeFromFavoritesSuccess(res.data));
                dispatch(fetchFavorites())
            })
            .catch(err => {
                dispatch(removeFromFavoritesFail(err.response.data));
            })
    }
}
// ------------------------------------------------------------------