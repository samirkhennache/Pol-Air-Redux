import {
  FETCH_METEO_SUCCESS,
  FETCH_METEO_FAILURE,
  FETCH_METEO_STARTED
} from '../actions/types';

const initialState = {
  loadedMeteo: false,
  loadingMeteo: false,
  dataMeteo: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_METEO_STARTED:
      return {
        ...state,
        loadingMeteo: true
      }
    case FETCH_METEO_SUCCESS:
    localStorage.setItem('dataMeteo', JSON.stringify(action.payload));
      return {
        ...state,
        loadingMeteo: false,
        loadedMeteo:true,
        dataMeteo: action.payload
      }
    case FETCH_METEO_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}