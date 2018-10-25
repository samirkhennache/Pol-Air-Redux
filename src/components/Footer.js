import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Footer.css';

// Tape ton code ICI ! :) et bon courage !!!!!

class Footer extends Component {
    render() {
      return (
        <div className="container-footer">
          <ul className="list-footer">
            <li><Button color="primary" component={Link} to="/">Accueil</Button></li>
            <li><Button color="primary" component={Link} to="/BlockForcastMeteo">Prévisions météo</Button></li>
            <li><Button color="primary" component={Link} to="/HistoriquePollution">Historique pollution</Button></li>
            <li><Button color="primary" component={Link} to="">Itinéraire</Button></li>
          </ul>
          <p className="copyright">© Prudence - Delphine - Guillaume - Walid - Samir - Paolo - Matthieu</p>
        </div>
      );
    }
  }


export default Footer;
