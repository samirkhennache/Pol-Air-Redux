import {combineReducers} from 'redux';
import meteoReducer from './meteoReducer';
import pollutionReducer from './pollutionReducer'
import geolocReducer from './geolocReducer';

const  rootReducer = combineReducers({
    pollutionReducer,
    dataMeteo: meteoReducer,
    geolocReducer
})

export default rootReducer;
