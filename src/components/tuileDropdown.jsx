import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/tuileDropdown.css';
import icon from '../img/dropDownIcon.png';

class TuileDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu() {
    if (this.state.showMenu) this.setState({showMenu: false})
    else this.setState({showMenu: true})
  }

  getSubjects(elem) {
    if (elem === undefined || elem === '') return []
    else { return elem.split(',') }
  }

  render() {
    return (
      <div>
        <div onClick={this.showMenu}> {this.props.module.split('~')[0]} <img src={icon}/></div>      
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <ul> { this.getSubjects(this.props.module.split('~')[1]).map(sub => <li key={sub.id}> {sub} </li>) } </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


TuileDropdown.propTypes = {
    module: PropTypes.string.isRequired,
}

export default TuileDropdown;