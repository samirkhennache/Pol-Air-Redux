import React from 'react';
import './smileyPollution.css'

const Smiley = ({img}) =>{

return(
	<div>
		<img className="img-smiley" src={`img/${img}.png`} alt="" />
	</div> );
}
export default Smiley;