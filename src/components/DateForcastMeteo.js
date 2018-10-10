import React, { Component } from 'react';

const formatDate = (date) => {
    let dayName = [
        "Dimanche","Lundi", "Mardi", "Mercredi",
        "Jeudi", "Vendredi", "Samedi"
      ];
    let dayIndex = date.getDay();
    let day = date.getDate();
  
    return `${dayName[dayIndex + 1]} ${day + 1}`;
  }

class DateForcastMeteo extends Component {
    state = { date: formatDate(new Date())};
    render() { 
        return ( 
            <div>
                <h1>{this.state.date}</h1> 
            </div>
         );
    }
}
 
export default DateForcastMeteo;