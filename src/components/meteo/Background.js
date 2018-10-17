import React from 'react';

import './Background.css';


const Background = ({imgBackground}) => {
    return (
        
        <div>
            <img 
                src={require(`../../img/backgrounds/bkg${imgBackground}.jpg`)} 
                className="meteoBackground" 
                alt="Temps actuel" 
            />
            console.log("******INFO POUR DELPH***************************")
            console.log({require(`../../img/backgrounds/bkg${imgBackground}.jpg`)} )
        </div>
    )
}

export default Background;