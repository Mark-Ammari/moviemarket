import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    recommendations: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvRecommendationsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_RECOMMENDATIONS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_TV_RECOMMENDATIONS_SUCCESS:
            return {
                ...state,
                recommendations: action.recommendations,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_TV_RECOMMENDATIONS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}