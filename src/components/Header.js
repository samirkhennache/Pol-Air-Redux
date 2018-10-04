import React, { Component } from 'react';
// A modifier selon si notre logo sera svg ou dans le fichier logo.js
// import logo from './logo.svg';

import './Header.css';
import MenuAppBar from './MenuAppBar';
 
  class Header extends Component {
    render() {
      return (
        <div>
          <MenuAppBar />
        </div>
      );
    }
  }

export default Header;
