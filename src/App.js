import React, { Component } from 'react';
import './App.css';
import './components/meteo/Icon.css';
import Header from './components/Header';
import Titles from './components/Titles';
import Footer from './components/Footer';
import PollutionRealTime from './components/PollutionRealTime'
import GetPosition from './components/meteo/GetPosition'
import DateIndex from './components/DateIndex'
import FormSearch from './components/meteo/FormSearch'
import PrintSearch from './components/PrintSearch'


class App extends Component {

  render() {

    return (      
<div className="page-parent" >
  <div className="page-child-top">
  <Header/>
  </div>
  <div className="page-child">
  <DateIndex />
  </div>
  <div className="page-child">
  <Titles/>
  </div>
  <div className="page-child">
  <GetPosition/>
  <FormSearch />
  <PrintSearch />
  </div>
  <PollutionRealTime />
  <div className="page-child-bottom">
  <Footer />
  </div>
</div>
    );
  }
}

export default App;