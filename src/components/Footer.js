import React, { Component } from 'react';
import './Footer.css';


// Tape ton code ICI ! :) et bon courage !!!!!

class Footer extends Component {
    render() {
      return (
        <grid>
          <ul className="list-footer">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Prévisions Météo</a></li>
            <li><a href="#">Prévisions Pollution</a></li>
            <li><a href="#">Itinéraire</a></li>
          </ul>
        </grid>
      );
    }
  }


export default Footer;
