import  {FETCH_GEOLOC} from '../actions/types'

const initialState ={
    city :'',
    latitude :0,
    longitude: 0

};

export default (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_GEOLOC:
        return {
            ...state,
            city :action.payLoad.city,
            latitude:action.payLoad.latitude,
            longitude:action.payLoad.longitude
        }
        default:
            return state
    }
}