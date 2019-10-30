import React from 'react';
import '../style/contactSheet.css';

interface IProps { 
    nameContact: string;
    positionContact: string;
    emailContact: string;
}

class ContactSheet extends React.Component<IProps> {
  render() {
    return (
      <div className="container-contactSheet">
        <div className="name-contact"> {this.props.nameContact} </div>
        <div className="position-contact"> {this.props.positionContact} </div>
        <div className="email-contact"> {this.props.emailContact} </div>
      </div>
    );
  }
}

export default ContactSheet;
