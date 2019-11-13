import React from 'react';
import '../style/contact.css';
import { verifyToken } from '../services/auth.service';
import { getContactElements, deleteElementInContact } from '../services/contact.service';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      contacts: []

    };

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getContactElements();
    pageContent.then((allElements) => {
      if (allElements !== undefined) {
        console.log(allElements);
        this.setState({
          contacts: allElements
        });
      }

    });
    this.showDeleteButton = this.showDeleteButton.bind(this);
  }

  deleteElem(id) {
    deleteElementInContact(id).then(() => {
      const pageContent = getContactElements();
      pageContent.then((allElements) => {
        if (allElements !== undefined) {
          console.log(allElements);
          this.setState({
            contacts: allElements
          });
        }
      });
    });
  }

  showDeleteButton(id) {
    if (this.state.connected) {
      return <button onClick={() => this.deleteElem(id)}>Supprimer</button>;
    }
  }

  render() {
    return (
      <div className="container-contacts">
        {
          this.state.contacts.map(elem => (
            <div className="container-contactSheet" key={elem.idContact}>
              <div className="name-contact"> {elem.name} </div>
              <div className="position-contact"> {elem.position} </div>
              <div className="email-contact"> {elem.email} </div>
              {this.showDeleteButton(elem.idContact)}
            </div>
          ))
        }
      
      </div>
    );
  }
}


export default Contact;