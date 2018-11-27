import  {FETCH_POLLUTION} from '../actions/types'


const initialState ={
    dataPol :0,
};

export default (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_POLLUTION:
        return {
            ...state,
            dataPol :action.payLoad

        }
        default:
            return state
    }
}