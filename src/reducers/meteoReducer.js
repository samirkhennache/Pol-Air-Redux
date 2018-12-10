import {
    FETCH_METEO
} from '../actions/types'
const initialState = {
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_METEO:
            return {
                ...state,
                dataMeteo: action.payLoad
            }
        default:
            return state
    }
}