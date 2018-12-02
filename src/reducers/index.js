import {combineReducers} from 'redux';
import meteoReducer from './meteoReducer';
import pollutionReducer from './pollutionReducer'
import forcastMeteoReducer from './forcastMeteoReducer'

const  rootReducer = combineReducers({
  pollutionReducer,
  meteoReducer,
  forcastMeteoReducer

})

export default rootReducer;
