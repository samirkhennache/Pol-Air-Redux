import  {FETCH_METEO} from '../actions/types'
const initialState ={};

export default (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_METEO:
        return {
            ...state,
            dataPol :action.payLoad
        }
        default:
            return state
    }
}