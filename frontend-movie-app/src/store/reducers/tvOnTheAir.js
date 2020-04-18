import * as actionTypes from '../actions/actionTypes';

const initialState = {
    onTheAir: {},
    loading: true,
}

export default function tvOnTheAirReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_ON_THE_AIR_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_TV_ON_THE_AIR_SUCCESS:
            return {
                onTheAir: action.onTheAir,
                loading: false,
            }
        case actionTypes.FETCH_TV_ON_THE_AIR_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}