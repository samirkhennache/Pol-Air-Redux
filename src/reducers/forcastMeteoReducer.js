import {
    FETCH_FORCAST_STARTED,
    FETCH_FORCAST_SUCCESS,
    FETCH_FORCAST_FAILURE
} from '../actions/types';
const initialState = {
    loadingForcast: false,
    loadedForcast: false,
    dataForcastMeteo: {},
    error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FORCAST_STARTED:
			return {
				...state,
				loadingForcast: true
			}
		case FETCH_FORCAST_SUCCESS:
		localStorage.setItem('dataForcastMeteo', JSON.stringify(action.payload));
			return {
				...state,
				dataForcastMeteo: action.payload,
				loadingForcast: false,
				loadedForcast: true,
			}
		case FETCH_FORCAST_FAILURE:
			return {
					...state,
					error: action.payload.error
			}
		default:
			return state
	}
}