import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';

class PagePollution extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bloc-pollution">                
                <Grid container className="test-border" >
                    <Grid item xs={12} md={8} className="test-border">
                        {this.props.loading ? "En cours de chargement" :
                        <PagePollutionToday city={this.props.city} indice={this.props.indice} imgBackground={this.props.imgBackground} />
                        }
                    </Grid>  
                    <Grid item xs={12} md={4} className="test-border">       
                        <ConseilsPollution className="test-border" indice={this.props.indice}/>
                    </Grid>
                </Grid>
                <BlocPolluants/>
                <HistoriquePollution/>
            </div>
        );
    }
}
 
export default PagePollution;