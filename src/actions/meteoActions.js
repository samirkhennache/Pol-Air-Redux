import {
	FETCH_METEO_SUCCESS,
	FETCH_METEO_FAILURE,
	FETCH_METEO_STARTED
} from './types'

// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//588b34ef0ccd1ce25e0cd600e9e852fb -- clef de Delph
//0f53c26a9c88a54d8706c8b3c9d2b880 -- clef de quelqu'un
//methode GetMeteoPollution qui lance le fetch de meteo et la pollution

export const getFetchMeteo = (data) => dispatch => {
	dispatch(fetchMeteoStarted())
	const city = getCity(data.address)

	const units = "&units=metric";
	const lang = "&lang=fr";
	//fetch meteo
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`)
		.then(getFetchMeteo => getFetchMeteo.json())
		.then(dataMeteo => dispatch(fetchMeteoSuccess(dataMeteo)))
		.catch(err => dispatch(fetchMeteoFailure(err.message)))
}

export const getFetchMeteoCity = (city) => dispatch => {
	dispatch(fetchMeteoStarted())
	const units = "&units=metric";
	const lang = "&lang=fr";
	//fetch meteo
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`)
		.then(getFetchMeteo => getFetchMeteo.json())
		.then(dataMeteo => dispatch(fetchMeteoSuccess(dataMeteo)))
		.catch(err => dispatch(fetchMeteoFailure(err.message)))
}

const fetchMeteoSuccess = dataMeteo => ({
	type: FETCH_METEO_SUCCESS,
	payload: {
		temperature: Math.floor(dataMeteo.main.temp),
		city: dataMeteo.name,
		humidityText: "Humidité",
		humidity: dataMeteo.main.humidity,
		pourcentage: "%",
		description: dataMeteo.weather[0].description,
		icon: dataMeteo.weather[0].icon, //sert à afficher l'icone et le background.
		imgBackground: dataMeteo.weather[0].icon, //sert à afficher le background.
		degre: "C°",
	}
});

const fetchMeteoStarted = () => ({
	type: FETCH_METEO_STARTED
});

const fetchMeteoFailure = error => ({
	type: FETCH_METEO_FAILURE,
	payload: {
		error
	}
});




const getCity = (address) => {
	if (address.city !== undefined)
		return (address.city);
	else if (address.city_district !== undefined)
		return (address.city_district);
	else if (address.locality !== undefined)
		return (address.locality);
	else if (address.town !== undefined)
		return (address.town);
	else if (address.borough !== undefined)
		return (address.borough);
	else if (address.municipality !== undefined)
		return (address.municipality);
	else if (address.village !== undefined)
		return (address.village);
	else if (address.hamlet !== undefined)
		return (address.hamlet);
	else if (address.quarter !== undefined)
		return (address.quarter);
	else if (address.neighbourhood !== undefined)
		return (address.neighbourhood);
}