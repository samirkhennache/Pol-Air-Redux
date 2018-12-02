import  {FETCH_METEO} from '../actions/types'
const initialState ={
    temperature :  "",
    city:  "",
    humidityText : "",
    humidity: "",
    pourcentage: "",
    description:  "",
    icon : "", //sert à afficher l'icone et le background.
    imgBackground: "", //sert à afficher le background.
    degre : "",
};

export default (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_METEO:
        return {
            ...state,
            dataMeteo :action.payLoad
        }
        default:
            return state
    }
}