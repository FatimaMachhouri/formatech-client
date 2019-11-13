import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/tuileNav.css';

class TuileNavigation extends React.Component {
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

TuileNavigation.propTypes = {
  formation: PropTypes.string.isRequired,
  handleClick: PropTypes.any.isRequired,
}

export default TuileNavigation;