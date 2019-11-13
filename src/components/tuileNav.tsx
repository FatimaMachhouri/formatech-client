import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/tuileNav.css';

interface IProps {
  formation: string;
  handleClick: any
}

class TuileNavigation extends React.Component<IProps> {
  render() {
    return (
      <div>
        <button className="btn btn-light" onClick = {() => this.props.handleClick(this.props.formation + '3')}>{this.props.formation + '3'}</button>
        <button className="btn btn-light" onClick = {() => this.props.handleClick(this.props.formation + '4')}>{this.props.formation + '4'}</button>
        <button className="btn btn-light" onClick = {() => this.props.handleClick(this.props.formation + '5')}>{this.props.formation + '5'}</button>
      </div>
    );
  }
}

export default TuileNavigation;