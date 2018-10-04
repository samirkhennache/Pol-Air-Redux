import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PollutionRealTime from './components/PollutionRealTime'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
         <PollutionRealTime />
        <Footer/>
      </div>
    );
  }
}

export default App;
