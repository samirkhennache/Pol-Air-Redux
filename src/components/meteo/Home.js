import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
//import Titles from '../Titles';
import Footer from '../Footer';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container">
            
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>

                <Grid container> {/*Container global*/}
                    
                    <Grid item xs={12} md={6}> 
                        <Grid container className="home-opacity"> {/*Container logo + city + date + description*/}
                            
                            <Grid item xs={6} md={3}> {/*Container logo*/}
                                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description}/> }
                            </Grid>
                            
                            <Grid item xs={6} md={3}> {/*Container city + date + description*/}
                                <Grid container>
                                    <PrintSearch city={this.props.city} />
                                </Grid>
                                <Grid container>
                                    <DateIndex/>
                                </Grid>
                                <Grid container>
                                    <PrintSearch description={this.props.description} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}> {/*Container indices polution + météo*/}
                        <Grid container xs={12} md={6}> {/*Container logo + city + date + description*/}
                            <Grid item xs={6} md={3}> {/*Container poltution (indice + icone)*/}
                                <IndiceDuJours indice={this.props.dataPol} />
                            </Grid>
                            <Grid item xs={6} md={3}> {/*Container météo (température + icone*/}
                                <PrintSearch
                                    temperature={this.props.temperature} 
                                    degre={this.props.degre}
                                    humidity={this.props.humidity}
                                    pourcentage={this.props.pourcentage}/>
                                <Icon icon={this.props.icon}/> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </div>
        );
    }
}

export default Home;