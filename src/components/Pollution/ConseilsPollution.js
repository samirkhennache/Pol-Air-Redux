import React, {Component} from 'react';



class ConseilsPagePollution extends Component {
    state = {
       
        quality :["Très Faible","Faible","Modéré","Médiocre","Elevé","Très Elevé","Dangereux"],
        messagePieton : [
            `C'est parti pour les activitées en plein air, allez au parc, profitez-en, respirez à fond !!`,
            `Rien à signaler, pensez à regarder l'indice de pollution pendant les heures de pointe`,
            `Éviter les arthères bouchées par les voitures, pensez à vos enfants et faites un petit détour `,
            `Les personnes sensibles sont fortement exposées, reportez leurs activités physiques en plein air et ajustez leurs trajets`,
            `Port du masque conseillé, les personnes sensibles doivent rester à l'intérieur`,
            `Port du masque obligatoire, reportez vos déplacements et ne pratiquez pas d'activités physiques`,
            `Danger de mort, masque adapté obligatoire`
        ],
        messageCyclo : [
            `C'est le moment de prendre de la vitesse et de vous dépenser`,
            `Boulot, vélo, dodo. Rien à signaler`,
            `La danseuse entre les voitures ce n'est pas votre truc, tant mieux ! Évitez les zones à circulation dense `,
            `Pistes cyclables conseillées, attention aux émissions de particules fines aux heures de pointe..`,
            `Port du masque conseillé, les personnes sensibles ne doivent pas prendre leur vélo`,
            `Prenez les transports en commun ! Port du masque obligatoire`,
            `Danger de mort, masque adapté obligatoire`
        ],
        messageHouse : [
            `Aérer bien votre intérieur, n'hésitez pas à rennouveler votre air aussi souvent que possible`,
            `Aérer bien votre intérieur, n'hésitez pas à rennouveler votre air aussi souvent que possible `,
            `Pensez à aérer votre intérieur au moins 1 fois par jour pendant 10 minutes`,
            `Évitez d'aérer votre maison, surtout si vous habitez au rez-de-chaussé ou au 1er étage`,
            `N'ouvrez pas vos fenetres, attendez un moment plus propice où la pollution sera moins forte`,
            `N'ouvrez pas vos fenetres, utiliser un purificateur d'air`,
            `Danger de mort, masque adapté obligatoire`
        ],
        adviseDefault: true,
        advise: ""

      }

    getConseilsPieton = () => {
        if(this.props.indice <=25)
            return this.state.messagePieton[0]
        else if(this.props.indice <=50)
            return this.state.messagePieton[1]
        else if(this.props.indice <=100)
            return this.state.messagePieton[2]
        else if(this.props.indice <=150)
            return this.state.messagePieton[3]
        else if(this.props.indice <=200)
            return this.state.messagePieton[4]
        else if(this.props.indice <=300)
            return this.state.messagePieton[5]
        else if (this.props.indice > 300)
            return this.state.messagePieton[6]
    }  
    getAdviseCyclo = () => {
        if(this.props.indice <=25)
            return this.state.messageCyclo[0]
        else if(this.props.indice <=50)
            return this.state.messageCyclo[1]
        else if(this.props.indice <=100)
            return this.state.messageCyclo[2]
        else if(this.props.indice <=150)
            return this.state.messageCyclo[3]
        else if(this.props.indice <=200)
            return this.state.messageCyclo[4]
        else if(this.props.indice <=300)
            return this.state.messageCyclo[5]
        else if (this.props.indice > 300)
            return this.state.messageCyclo[6]
    } 
    getAdviseHouse = () => {
        if(this.props.indice <=25)
            return this.state.messageHouse[0]
        else if(this.props.indice <=50)
            return this.state.messageHouse[1]
        else if(this.props.indice <=100)
            return this.state.messageHouse[2]
        else if(this.props.indice <=150)
            return this.state.messageHouse[3]
        else if(this.props.indice <=200)
            return this.state.messageHouse[4]
        else if(this.props.indice <=300)
            return this.state.messageHouse[5]
        else if (this.props.indice > 300)
            return this.state.messageHouse[6]
    } 
    
    handleClickPieton = () =>{
        this.setState({
            adviseDefault : this.getConseilsPieton(),
            advise : false

        })
       
    }
    handleClickCyclo = () =>{
        this.setState({
            advise: this.getAdviseCyclo(),
            adviseDefault : false
        })
       
    }
    handleClickHouse = () =>{
        this.setState({
            advise: this.getAdviseHouse(),
            adviseDefault : false
        })
       
    }

    render() { 
        
        console.log(this.state.advise + "test")
        const adviseDefault = this.state.adviseDefault ? this.getConseilsPieton() : ""
        return ( 
            <div>         
                <button onClick={this.handleClickPieton}>
                    piéton
                </button>
                <button onClick={this.handleClickCyclo}>
                    cycliste
                </button>
                <button onClick={this.handleClickHouse}>
                    maison
                </button>
                <p>{adviseDefault}</p>
                <p>{this.state.advise}</p>
            </div>
         );
    }
}
 
export default ConseilsPagePollution;