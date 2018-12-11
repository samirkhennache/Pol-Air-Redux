import axios from 'axios';
import {
	FETCH_FORCAST_STARTED,
	FETCH_FORCAST_SUCCESS,
	FETCH_FORCAST_FAILURE
} from './types'

//Api Forecast

const key = "588b34ef0ccd1ce25e0cd600e9e852fb"
const unit = 'metric'
const lang = 'fr'
const url = 'https://api.openweathermap.org/data/2.5/forecast?q='

export const getForecastMeteo = (data) => dispatch => {

	const city = getCity(data.address)
	dispatch(fetchForcastMeteoStarted());
	axios.get(`${url}${city}&lang=${lang}&APPID=${key}&units=${unit}`)
		.then(res => {
			let temp_min = []
			let temp_max = []
			let iconForecast = []
			for (let i = 1; i <= 4; i++) {
				let temperature_min = res.data.list.filter((x) => x.dt >= getDate(i) && x.dt <= getDateAddOne(i))
				temp_min.push(Math.floor(Math.min(...temperature_min.map(x => x.main.temp_min))))

				let temperature_max = res.data.list.filter((x) => x.dt >= getDate(i) && x.dt <= getDateAddOne(i))
				temp_max.push(Math.floor(Math.max(...temperature_max.map(x => x.main.temp_max))))

				let icone_forecast = res.data.list.filter((x) => x.dt >= getDate(i) && x.dt <= getDateAddOne(i))
				iconForecast.push(Math.max(...icone_forecast.map(x => x.weather[0].icon).slice(3, 6).map(x => parseInt(x.slice(0, 2), 10))))

			}
			iconForecast = iconForecast.map(x => x < 10 ? ("0" + x + "d") : (x + "d"))

			dispatch(fetchForcastMeteoSuccess(temp_min, temp_max,iconForecast))
		})
		.catch(err => dispatch(fetchForcastMeteoFailure(err.message)))
}

const fetchForcastMeteoSuccess = (temp_min, temp_max,iconForecast) => ({
	type: FETCH_FORCAST_SUCCESS,
	payload: {
		tempMin: temp_min,
		tempMax: temp_max,
		icon_forecast: iconForecast
	}
});

const fetchForcastMeteoStarted = () => ({
	type: FETCH_FORCAST_STARTED
});

const fetchForcastMeteoFailure = error => ({
	type: FETCH_FORCAST_FAILURE,
	payload: {
		error
	}
});
const getDateAddOne = (day) => {
	const n = getDate(day) + 86400
	return n
}

const getDate = (day) => {
	let d = new Date();
	let n = d.getTime() % 86400000
	let test = d.setTime(((d.getTime() - n) / 1000) + 86400 * day)
	return test
}
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