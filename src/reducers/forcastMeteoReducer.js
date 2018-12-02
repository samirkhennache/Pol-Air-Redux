import  {FETCH_FORCAST} from '../actions/types'
const initialState ={};

export default (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_FORCAST:
        return {
            ...state,
            dataForcastMeteo :action.payLoad
        }
        default:
            return state
    }
}