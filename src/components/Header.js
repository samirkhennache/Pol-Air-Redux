import React, { Component } from 'react';
// A modifier selon si notre logo sera svg ou dans le fichier logo.js
// import logo from './logo.svg';
import './Header.css';


// Tape ton code ICI ! :) et bon courage !!!!!
 
  class Header extends Component {
    render() {
      return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Logo</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
      );
    }
  }

export default Header;
