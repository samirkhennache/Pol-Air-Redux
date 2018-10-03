import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PollutionIndex from './components/PolutionIndex'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PollutionIndex />
        <Footer/>
      </div>
    );
  }
}

export default App;
