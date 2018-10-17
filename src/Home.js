import React, { Component } from 'react';
import './components/meteo/Icon.css';
import Titles from './components/Titles';
import Footer from './components/Footer';
import PollutionRealTime from './components/PollutionRealTime'
import GetPosition from './components/meteo/GetPosition'
import DateIndex from './components/DateIndex'
import FormSearch from './components/meteo/FormSearch'
import PrintSearch from './components/PrintSearch'
import './App.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page-parent" >

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
 
export default Home;