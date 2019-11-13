import React from 'react';
import '../style/tuile.css';
import cross from '../img/cross.svg';

import PropTypes from 'prop-types';



const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

class Tuile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'container',
    };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ visibility: 'hidden' });
  }

  render() {
    return (
      <div className={this.state.visibility}>
        <div className="container-title">
          <div className="name-mainTitle">{this.props.name}</div>
          <div className="decor">
            <div className="decor-line">
            </div>
          </div>
          <img src={cross} className='cross' onClick={this.close} alt='close menu.' />
        </div>
        <span className='content'>{fakeText}</span>
      </div>
    );
  }
}

Tuile.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tuile;