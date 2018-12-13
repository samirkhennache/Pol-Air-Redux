import {
	FETCH_POLLUTION_STARTED,
	FETCH_POLLUTION_SUCCESS,
	FETCH_POLLUTION_FAILURE
} from '../actions/types'


const initialState = {
	loadingPollution: false,
	loadedPollution :false,
	dataPol: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POLLUTION_STARTED:
			return {
				...state,
				loadingPollution:true
			}
		case FETCH_POLLUTION_SUCCESS:
			return {
				...state,
				loadingPollution:false,
				loadedPollution :true,
				dataPol: action.payload
			}
		case FETCH_POLLUTION_FAILURE:
			return {
				...state,
				error: action.payload.error
			}
		default:
			return state
	}
}