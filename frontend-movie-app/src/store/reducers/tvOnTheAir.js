import * as actionTypes from '../actions/actionTypes';

const initialState = {
    onTheAir: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvOnTheAirReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_ON_THE_AIR_START:
            return {
                ...state,
                error: false,
                loading: true,
            }
        case actionTypes.FETCH_TV_ON_THE_AIR_SUCCESS:
            return {
                ...state,
                onTheAir: action.onTheAir,
                error: false,
                loading: false,
            }
        case actionTypes.FETCH_TV_ON_THE_AIR_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false,
            }
        default: return state;
    }
}