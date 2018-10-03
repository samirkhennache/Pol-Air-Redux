import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DateIndex from './components/DateIndex'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DateIndex />
        <Footer/>
      </div>
    );
  }
}

export default App;
