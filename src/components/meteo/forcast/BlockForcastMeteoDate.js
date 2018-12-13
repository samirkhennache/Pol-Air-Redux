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
const DateForcastMeteo = () => {
  let result = new Date();
  result.setDate(result.getDate() + this.props.dateApp);
  return (
    <div className="date-forecast">
      <div className='MeteoDate'>{formatDate(result)}</div>
    </div>
    );
}


export default DateForcastMeteo;