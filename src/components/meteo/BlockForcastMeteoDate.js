import React, { Component } from 'react';

const formatDate = (date) => {
    let dayName = [
        "Dimanche","Lundi", "Mardi", "Mercredi",
        "Jeudi", "Vendredi", "Samedi"
      ];
    let dayIndex = date.getDay();
    let day = date.getDate();
  
    return `${dayName[dayIndex ]} ${day}`;
  }

class DateForcastMeteo extends Component {

    render() { 
        let result = new Date();
        result.setDate(result.getDate() + this.props.dateApp);
        return ( 
            <div>
                <h1>{formatDate(result)}</h1> 
            </div>
         );
    }
}
 
export default DateForcastMeteo;