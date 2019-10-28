import React from 'react';
import '../style/contactSheet.css';

interface IState {
    nameContact?: string;
    positionContact: string;
    emailContact: string;
}

interface IProps { 
    nameContact: string;
    positionContact: string;
    emailContact: string;
}

class ContactSheet extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      nameContact: this.props.nameContact,
      positionContact: this.props.positionContact,
      emailContact: this.props.emailContact,
    };
  }

  render() {
    return (
      <div className="container-contactSheet">
        <p className="name-contact">{this.state.nameContact}</p>
        <p className="position-contact">{this.state.positionContact}</p>
        <p className="email-contact">{this.state.emailContact}</p>
      </div>
    );
  }
    
}

export default ContactSheet;
