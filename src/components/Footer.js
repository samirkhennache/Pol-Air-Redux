import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, Avatar} from '@material-ui/core/';

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

          <div className="footer-avatar">
              <p className="copyright">© / La Pol'Air team </p>
            
              <div className="avatar"> 
                <a href="https://github.com/prudenceG" target="_blank" rel="noopener noreferrer" title="Prudence" className="avatar2">
                  <Avatar alt="Prudence" src="https://avatars0.githubusercontent.com/u/36316271?s=400&v=4" />
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/af1ne" target="_blank" rel="noopener noreferrer" title="Delph" className="avatar2">
                  <Avatar alt="Delphine BRUNET alias af1ne" src="https://avatars2.githubusercontent.com/u/39528061?s=400&u=1b5accaaf40b82dfd766d3032e9038d0597aeb89&v=4" />
                </a> 
              </div>

              <div className="avatar"> 
                <a href="https://github.com/GuillaumeFerry" target="_blank" rel="noopener noreferrer" title="Guillaume" className="avatar2">
                  <Avatar alt="Guillaume FERRY" src="https://avatars2.githubusercontent.com/u/42844637?s=400&v=4" />
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/walidinkk" target="_blank" rel="noopener noreferrer" title="Walid" className="avatar2">
                  <Avatar alt="Walid BENMAKHLOUF" src="https://avatars0.githubusercontent.com/u/42183943?s=400&v=4"/>
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/samirkhennache" target="_blank" rel="noopener noreferrer" title="Samir" className="avatar2">
                  <Avatar alt="Samir KHENNACHE" src="https://avatars0.githubusercontent.com/u/39196407?s=400&v=4"/>
                </a>
              </div>

               <div className="avatar">  
                <a href="https://github.com/Chopin85" target="_blank" rel="noopener noreferrer" title="Paolo" className="avatar2">
                  <Avatar alt="Paolo CATALANI" src="https://avatars1.githubusercontent.com/u/32762917?s=400&v=4" />
                </a>
              </div>

              <div className="avatar">
                <a href="https://github.com/Vassili7115" target="_blank" rel="noopener noreferrer" title="Matthieu" className="avatar2">
                  <Avatar alt="Matthieu RANUCCI" src="https://avatars1.githubusercontent.com/u/35661086?s=400&v=4" />
                </a>
              </div>              
            </div>
        </div>
      );
    }
  }


export default Footer;
