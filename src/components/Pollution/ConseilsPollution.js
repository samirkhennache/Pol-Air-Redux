import React, {Component} from 'react';
import "./conseilsPollution.css";
import ButtonConseilPieton from './ButtonConseilPieton';
import ButtonConseilCyclo from './ButtonConseilCyclo';
import ButtonConseilHouse from './ButtonConseilHouse';



class ConseilsPagePollution extends Component {
  state = {

    quality :["Très Faible","Faible","Modéré","Médiocre","Elevé","Très Elevé","Dangereux"],
    messagePieton : [
        `C'est parti pour les activités en plein air, allez au parc, profitez-en, respirez à fond !!`,
        `Rien à signaler, pensez à regarder l'indice de pollution pendant les heures de pointe`,
        `Éviter les artères bouchées par les voitures, pensez à vos enfants et faites un petit détour `,
        `Les personnes sensibles sont fortement exposées, reportez leurs activités physiques en plein air et ajustez leurs trajets`,
        `Port du masque conseillé, les personnes sensibles doivent rester à l'intérieur`,
        `Port du masque obligatoire, reportez vos déplacements et ne pratiquez pas d'activités physiques`,
        `Danger de mort, masque adapté obligatoire`
    ],
    messageCyclo : [
        `C'est le moment de prendre de la vitesse et de vous dépenser`,
        `Boulot, vélo, dodo. Rien à signaler`,
        `Rouler entre les voitures ce n'est pas votre truc, tant mieux ! Aujourd'hui, évitez les zones à circulation dense `,
        `Pistes cyclables conseillées, attention aux émissions de particules fines aux heures de pointe..`,
        `Port du masque conseillé, les personnes sensibles ne doivent pas prendre leur vélo`,
        `Prenez les transports en commun ! Port du masque obligatoire`,
        `Danger de mort, masque adapté obligatoire`
    ],
    messageHouse : [
        `Aérer bien votre intérieur, n'hésitez pas à renouveler votre air aussi souvent que possible`,
        `Aérer bien votre intérieur, n'hésitez pas à renouveler votre air aussi souvent que possible `,
        `Pensez à aérer votre intérieur au moins 1 fois par jour pendant 10 minutes`,
        `Évitez d'aérer votre maison, surtout si vous habitez au rez-de-chaussé ou au 1er étage`,
        `N'ouvrez pas vos fenêtres, attendez un moment plus propice où la pollution sera moins forte`,
        `N'ouvrez pas vos fenêtres, utiliser un purificateur d'air`,
        `Danger de mort, masque adapté obligatoire`
    ],
    adviseDefault: true,
    adviseCyclo: false,
    adviseHouse: false

  }

  getConseilsPieton = () => {
    const {indice} = this.props;
    const {messagePieton} = this.state;
    if(indice <=25)
      return messagePieton[0]
    else if(indice <=50)
      return messagePieton[1]
    else if(indice <=100)
      return messagePieton[2]
    else if(indice <=150)
      return messagePieton[3]
    else if(indice <=200)
      return messagePieton[4]
    else if(indice <=300)
      return messagePieton[5]
    else if (indice > 300)
      return messagePieton[6]
  }
  getAdviseCyclo = () => {
    const {indice} = this.props;
    const {messageCyclo} = this.state;
    if(indice <=25)
      return messageCyclo[0]
    else if(indice <=50)
      return messageCyclo[1]
    else if(indice <=100)
      return messageCyclo[2]
    else if(indice <=150)
      return messageCyclo[3]
    else if(indice <=200)
      return messageCyclo[4]
    else if(indice <=300)
      return messageCyclo[5]
    else if (indice > 300)
      return messageCyclo[6]
  }
  getAdviseHouse = () => {
    const {indice} = this.props;
    const {messageHouse} = this.state;
    if(indice <=25)
      return messageHouse[0]
    else if(indice <=50)
      return messageHouse[1]
    else if(indice <=100)
      return messageHouse[2]
    else if(indice <=150)
      return messageHouse[3]
    else if(indice <=200)
      return messageHouse[4]
    else if(indice <=300)
      return messageHouse[5]
    else if (indice > 300)
      return messageHouse[6]
  }

  handleClickPieton = () =>{
    this.setState({
        adviseDefault : this.getConseilsPieton(),
        adviseCyclo: false,
        adviseHouse: false
    })
  }
  handleClickCyclo = () =>{
    this.setState({
      adviseCyclo: this.getAdviseCyclo(),
      adviseDefault: false,
      adviseHouse: false
    })
  }
  handleClickHouse = () =>{
    this.setState({
      adviseHouse: this.getAdviseHouse(),
      adviseDefault : false,
      adviseCyclo: false
    })
  }

  getCssAdviseIconPieton = () => {
    const {adviseDefault} = this.state;
    return(adviseDefault? "no-opacity" : "opacity")
  }
  getCssAdviseIconCyclo = () => {
    const {adviseCyclo} = this.state;
    return(adviseCyclo? "no-opacity" : "opacity")
  }
  getCssAdviseIconHouse = () => {
    const {adviseHouse} = this.state;
    return(adviseHouse? "no-opacity" : "opacity")
  }
  render() {
    const adviseDefault = this.state.adviseDefault ? this.getConseilsPieton() : ""
    return (
      <div className="bloc-conseils">
          <div className="icon-conseils">
            <div className={this.getCssAdviseIconPieton()}><a onClick={this.handleClickPieton}><ButtonConseilPieton/></a></div>
            <div className={this.getCssAdviseIconCyclo()} ><a onClick={this.handleClickCyclo}><ButtonConseilCyclo/></a></div>
            <div className={this.getCssAdviseIconHouse()} ><a onClick={this.handleClickHouse}><ButtonConseilHouse/></a></div>
          </div>
          <div className="conseil-blocConseil">
            <p>{adviseDefault}{this.state.adviseCyclo}{this.state.adviseHouse}</p>
          </div>
      </div>
    );
  }
}

export default ConseilsPagePollution;