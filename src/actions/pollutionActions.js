import  {FETCH_POLLUTION} from './types'

const api_Key_Current_Pol = "Wu8scKsgzFQ8Md6Jv";
// AgM8MuxtXNcfwPrHN -- clef guillaume
// ehvBN549ec3xDmbbW -- clef prudence
// fJ75xRvQChZAzF7qo -- clef Delph
// Wu8scKsgzFQ8Md6Jv -- Clef Samir
// 5tzeyxRv5omhmxG6P -- Clef paolo1
// K7ozT4wzfP89xvNDj -- Clef paolo2
// FSirY4x7sshw6meaw -- Clef paolo3

//methode GetMeteoPollution qui lance le fetch de meteo et la pollution
export const GetPollution = (latitude,longitude)=> dispatch =>{
    fetch(`https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${api_Key_Current_Pol}`)
    .then(data => data.json())
    .then(dataPollution =>  dispatch({
        type :FETCH_POLLUTION,
        payLoad : dataPollution.data.current.pollution.aqius
    }) )
}