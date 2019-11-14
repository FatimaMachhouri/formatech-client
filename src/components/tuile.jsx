import React from 'react';
import * as config from '../config/configApi';
import cross from '../img/cross.svg';
import axios from 'axios';
import TuileNavigation from './tuileNav';
import TuileDropdown from './tuileDropdown';
import PropTypes from 'prop-types';
import '../style/tuile.css';

class Tuile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'container',
      currentPage: '',
      content: '',
    };
    this.close = this.close.bind(this);
    this.setContentTuile = this.setContentTuile.bind(this);
  }

  close() {
    this.setState({ visibility: 'hidden' });
  }

  async setContentTuile(elem) {
    this.setState({currentPage: elem})

    let semesters=[];
    switch(elem) {
      case 'IG3': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/1/modules')).data.periods;
        break;
      case 'IG4': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/2/modules')).data.periods;
        break;
      case 'IG5': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/3/modules')).data.periods;
        break;
      case 'DO3': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/1093/modules')).data.periods;
        break;
      case 'DO4': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/1143/modules')).data.periods;
        break;
      case 'DO5': 
        semesters = (await axios.get(config.API_URL + '/sagesse/step/1190/modules')).data.periods;
        break;
      default:
        console.log('ERREUR, IMPOSSIBLE DE RECUPERER L\'ANNEE ' + elem);
    }

    let result = '';
    for (let semester of semesters) {
      let tmpResult = "";
      for (let module of semester.modules) {
        if (this.props.name === module.category || this.props.name === '') {
          let subjects = (await axios.get(config.API_URL + '/sagesse/module/' + module.id)).data.subjects.map((elm => elm.title));
          tmpResult = '_' + module.title + '~' + subjects + tmpResult;
        }
      }

      result += '//' + semester.title + ':' + tmpResult;
    }

    this.setState({content: result});
  }

  getSemesters(elem) {
    let sem = elem.split('//');
    if (elem === undefined) return []
    else {
      sem.shift();
      return sem
    }
  }

  getModules(elem) {
    if (elem === undefined) return []
    else {
      let mod = elem.split('_')
      mod.shift()
      return mod
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.setContentTuile(this.state.currentPage);
    }
  }

  render() {
    return (
      <div className={this.state.visibility}>
        <TuileNavigation formation={this.props.formationName} handleClick={this.setContentTuile} />
        <div className="container-title">
          <div className="name-mainTitle">{this.props.name}</div>
          <div className="decor">
            <div className="decor-line">
            </div>
          </div>
          <img src={cross} className='cross' onClick={this.close} alt='close menu.' />
        </div>
        {
          this.getSemesters(this.state.content).map(sem =>
            <div key={sem.id}>
              <span className='content'> {sem.split(":")[0]} </span>
              <ul>
                {this.getModules(sem.split(':')[1]).map(ue =>
                  <li className='content2' key={ue.id}>
                    <TuileDropdown module={ue}/>
                  </li>
                )}
              </ul>
            </div>
        )}
      </div>
    );
  }

}


Tuile.propTypes = {
  name: PropTypes.string.isRequired,
  formationName: PropTypes.string.isRequired,
}

export default Tuile;