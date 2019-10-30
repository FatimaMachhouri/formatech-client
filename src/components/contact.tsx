import React from 'react';
import ContactSheet from './contactSheet';
import '../style/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="container-contacts">
        <ContactSheet nameContact="Philippe Chapellier" positionContact="Responsable du département" emailContact="philippe.chapellier@umontpellier.fr"/>
        <ContactSheet nameContact="Lysiane Buisson-Lopez" positionContact="Co-responsable département" emailContact="lysiane.lopez@umontpellier.fr"/>
        <ContactSheet nameContact="Anne-Laurent Villaret" positionContact="Responsable des projets et des stages" emailContact="anne-laure.villaret@umontpellier.fr"/>
        <ContactSheet nameContact="Chouki Tibermacine" positionContact="Responsable pédagogique 3ème et 4ème année" emailContact="chouki.tibermacine@umontpellier.fr"/>
        <ContactSheet nameContact="Vincent Berry" positionContact="Direction des études 3ème et 4ème année" emailContact="vincent.berry@umontpellier.fr"/>
        <ContactSheet nameContact="Arnaud Castelltort" positionContact="Responsable pédagogique 5ème année" emailContact="arnaud.castelltort@umontpellier.fr"/>
        <ContactSheet nameContact="Esther Pacitti-Valduriez" positionContact="Responsable des relations internationales" emailContact="ester.valduriez@umontpellier.fr"/>
        <ContactSheet nameContact="Gwladys Toulemonde" positionContact="Responsable des admissions" emailContact="gwladys.toulemonde@umontpellier.fr"/>
        <ContactSheet nameContact="Eleonora Guerrini" positionContact="Correspondant PEIP" emailContact="eleonora.guerrini@umontpellier.fr"/>
        <ContactSheet nameContact="Hélène Tortosa" positionContact="Secrétariat" emailContact="polytech-secretaire-ig@umontpellier.fr"/>
      </div>
    );
  }
}

export default Contact;