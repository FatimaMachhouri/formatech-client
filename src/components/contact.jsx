import React from 'react';
import '../style/contact.css';
import { verifyToken } from '../services/auth.service';
import { getContactElements, deleteElementInContact, addContactElement } from '../services/contact.service';


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      contacts: [],
      name: '',
      poste: '',
      email:''
    };

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getContactElements();
    pageContent.then((allElements) => {
      if (allElements !== undefined) {
        this.setState({
          contacts: allElements
        });
      }

    });
    this.showDeleteButton = this.showDeleteButton.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.saveEmail = this.saveEmail.bind(this)
    this.saveName = this.saveName.bind(this)
  }

  deleteElem(id) {
    deleteElementInContact(id).then(() => {
      const pageContent = getContactElements();
      pageContent.then((allElements) => {
        if (allElements !== undefined) {
          this.setState({
            contacts: allElements
          });
        }
      });
    })
  }

  showDeleteButton(id) {
    if (this.state.connected) {
      return <button className="delete-button" onClick={() => this.deleteElem(id)}>Supprimer</button>;
    }
  }

  saveContact() {
    const contact = {
      idContact: 0,
      name: this.state.name,
      email: this.state.email,
      position: this.state.poste
    }
    addContactElement(contact).then(() => {
      const pageContent = getContactElements();
      pageContent.then((allElements) => {
        if (allElements !== undefined) {
          this.setState({
            contacts: allElements,
            name: '',
            poste: '',
            email:''
          });
        }
      });
    })
  }

  saveName(event) {
    this.setState({name:event.target.value})
  }

  savePoste(event) {
    this.setState({ poste: event.target.value })
  }

  saveEmail(event) {
    this.setState({ email: event.target.value })
  }


  showAddContact() {
    if (this.state.connected) {
      return (<div className='add-contact'>
        <h3 className='contact-title'>Créer un nouveau contact</h3>
        <input type="text" placeholder='Nom et prénom' value={this.state.name} onChange={(event) => this.saveName(event)}></input>
        <input type="text" placeholder='Poste' value={this.state.poste} onChange={(event) => this.savePoste(event)} ></input>
        <input type="text" placeholder='Email' value={this.state.email} onChange={(event) => this.saveEmail(event)}></input>
        <button onClick={this.saveContact}>Enregistrer</button>
      </div>)
    } 
  }

  render() {
    return (
      <div className='main-container'>
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
        {this.showAddContact()}
      </div>
    );
  }
}


export default Contact;