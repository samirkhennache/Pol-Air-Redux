import React, { Component } from 'react';
import './PagePollution-today.css'
import IndicePollutionSolo from './IndicePollutionSolo'

class PagePollutionToday extends Component {
    state = {
        quality :["Très Faible","Faible","Moyen","Elevé","Très Elevé"]
     }

       //getQualite permet de retourner un element du quality
      //en fonction de this.props.indice qui correspond a la valeur passé en props depuis le parent PollutionRealTime
	GetMessageQuality = () =>{
		const {indice} = this.props;
		const {quality} = this.state
		if(indice<=25)
			return quality[0]
		else if(indice<=50)
			return quality[1]
		else if( indice<=100)
			return quality[2]
		else if(indice<=125)
			return quality[3]
		else if(indice<=150)
			return quality[3]
		else if(indice<=175)
			return quality[4]
		else if(indice<=200)
			return quality[4]
		else if(indice<=300)
			return quality[4]
		else if (indice >= 300)
			return quality[4]
	}
 	StyleIndice = () =>{
		const {indice} = this.props
		if(indice<=25)
			return 'tres-faible'
		else if(indice<=50)
			return 'faible'
		else if(indice<=75)
			return 'moyen'
		else if(indice<=100)
			return 'eleve'
		else
			return'tres-eleve'
	}

	render() {
		const {indice,city,imgBackground} = this.props;

		return (
		<div className="today-bloc">
				<div className="indice-today">
						<IndicePollutionSolo indice={indice}/>
				</div>
				<div className="text-today">
						<div>
								<div className="city-all-pages" >{city}</div>
								<div className="date-all-page " >Aujourd'hui</div>
						</div>
						<div className="comment-all-page">{this.GetMessageQuality()}</div>
				</div>
				<img
						src={require(`../../img/backgrounds/bkg${imgBackground}.jpg`)}
						className="backPollution"
						alt="Temps actuel"
				/>
		</div>

		);
	}
}
export default PagePollutionToday;