import React, { Component } from 'react';
// A modifier selon si notre logo sera svg ou dans le fichier logo.js
<<<<<<< HEAD:src/Header.js
//import logo from './logo.svg';
=======
// import logo from './logo.svg';
>>>>>>> 4f3d066ad2f5cab7decd8d3d2427353982c741ab:src/components/Header.js
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
