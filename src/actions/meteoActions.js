import  {FETCH_METEO} from './types'

// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//588b34ef0ccd1ce25e0cd600e9e852fb -- clef de Delph
//0f53c26a9c88a54d8706c8b3c9d2b880 -- clef de quelqu'un
//methode GetMeteoPollution qui lance le fetch de meteo et la pollution
export const GetMeteoPollution = (city)=> dispatch =>{
    const units = "&units=metric";
    const lang = "&lang=fr";
    //fetch meteo
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`)
    .then(getFetchMeteo => getFetchMeteo.json())
    .then(dataMeteo =>dispatch({
        type : FETCH_METEO,
        payLoad :{
            temperature : Math.floor(dataMeteo.main.temp),
            city: dataMeteo.name,
            humidityText : "Humidité",
            humidity:dataMeteo.main.humidity,
            pourcentage: "%",
            description: dataMeteo.weather[0].description,
            icon : dataMeteo.weather[0].icon, //sert à afficher l'icone et le background.
            imgBackground: dataMeteo.weather[0].icon, //sert à afficher le background.
            degre : "C°",
        }
    }))
    }