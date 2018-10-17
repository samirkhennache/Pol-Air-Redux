import React, { Component } from 'react';
import './components/meteo/Icon.css';
import Titles from './components/Titles';
import Footer from './components/Footer';
import PollutionRealTime from './components/PollutionRealTime'
//import DateIndex from './components/DateIndex'
//import PrintSearch from './components/PrintSearch'
import DateIndex from './components/DateIndex'
import Form from './components/meteo/Form'
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
  <Form />
  {/* <PrintSearch /> */}
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