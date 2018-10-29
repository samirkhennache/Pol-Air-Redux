import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
//import PrintSearch from './current/PrintSearch'
import MeteoDuJours from '../Pollution/MeteoDuJours'
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
//import Titles from '../Titles';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';


class Home extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="home-container">
            
                <Grid container alignItems="center" > {/*Container global*/}                    
                    <Grid item xs={12} md={7} > 
                        <Grid container direction="row" alignItems="center" justify="space-beetween" className="home-opacity"> {/*Container logo + city + date + description*/}                            
                            <Grid item xs={5} md={4} className="mascotte-bor"> {/*Container logo*/}
                                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description} imgBackground={this.props.imgBackground}/> }
                            </Grid>                            
                            <Grid item xs={7} md={8} direction={'column'} align="right" className="main-main"> {/*Container city + date + description*/}
                                <div className="main-child">
                                    <div className="city-all-pages">{this.props.city}</div>
                                    <div className="date-all-page"><DateIndex /></div>
                                    <div className="comment-all-page">{this.props.description}</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} >
                        <Grid container justify="center"> {/*Container indices polution + météo*/}
                            <IndiceDuJours indice={this.props.dataPol} />
                            <span className="index-vertical-row"></span>
                            {/* attention le composant meteo du jour est dans pollution, c'est une copie de indice du jour */}
                            <MeteoDuJours temperature={this.props.temperature} degres={this.props.degre} icon={this.props.icon}/>   
                        </Grid>
                    </Grid>    
                </Grid>
                
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>

            </div>
        );
    }
}

export default Home;