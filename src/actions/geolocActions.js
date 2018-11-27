import { FETCH_GEOLOC } from './types'

export const fetchGeolocation = () =>dispatch => {
	navigator.geolocation.getCurrentPosition(  (position) => {
		const latitude =  position.coords.latitude;
		const longitude =  position.coords.longitude;
		//mettre a jour les states apres la recuperation des lat et long

		fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
		.then(getFetchGeoLoc => getFetchGeoLoc.json())
		.then(data => dispatch({
			type : FETCH_GEOLOC,
			payLoad :{
				 city :getCity(data.address),
				 latitude :latitude,
				 longitude:longitude
			}
	}))

	})
}

const getCity = (address) =>{
	if(address.city !== undefined)
			return(address.city);
	else if(address.city_district !== undefined)
			return(address.city_district);
	else if(address.locality !== undefined)
			return(address.locality);
	else if(address.town !== undefined)
			return(address.town);
	else if(address.borough !== undefined)
			return(address.borough);
	else if(address.municipality !== undefined)
			return(address.municipality);
	else if(address.village !== undefined)
			return(address.village);
	else if(address.hamlet !== undefined)
			return(address.hamlet);
	else if(address.quarter !== undefined)
			return(address.quarter);
	else if(address.neighbourhood !== undefined)
			return(address.neighbourhood);
}