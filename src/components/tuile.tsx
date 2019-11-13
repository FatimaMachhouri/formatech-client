import React from 'react';
import '../style/tuile.css';
import cross from '../img/cross.svg';
import TuileNavigation from './tuileNav';
import axios from 'axios';
import * as config from '../config/configApi';

interface IState {
  visibility?: string;
  content: string;
}

interface IProps {
  name: string;
  formationName: string;
}

class Tuile extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visibility: 'container',
      content: '',
    };
    this.close = this.close.bind(this);
    this.setContentTuile = this.setContentTuile.bind(this);
  }

  close() {
    this.setState({ visibility: 'hidden' });
  }

  async setContentTuile(elem: string) {
    let semesters = [];
    if (elem === 'IG3') { semesters = (await axios.get(config.API_URL + '/sagesse/step/1/modules')).data.periods; }
    if (elem === 'IG4') { semesters = (await axios.get(config.API_URL + '/sagesse/step/2/modules')).data.periods; }
    if (elem === 'IG5') { semesters = (await axios.get(config.API_URL + '/sagesse/step/3/modules')).data.periods; }

    if (elem === 'DO3') { semesters = (await axios.get(config.API_URL + '/sagesse/step/1093/modules')).data.periods; }
    if (elem === 'DO4') { semesters = (await axios.get(config.API_URL + '/sagesse/step/1143/modules')).data.periods; }
    if (elem === 'DO5') { semesters = (await axios.get(config.API_URL + '/sagesse/step/1190/modules')).data.periods; }

    let result = '';
    for (let semester of semesters) { result += semester.title + ',' + semester.modules.map((elm: { id: string; title: string; }) => elm.id + ' ' + elm.title).toString() + '\n'; }

    this.setState({content: result});
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
        {this.state.content.split('\n').map(elem => 
          <div key="keyS">
            <span className='content'> {elem.split(',').shift()} </span>
            <ul>
              { elem.split(',').slice(1).map(elm => <li className='moduleNameId' key={elm.split(' ')[0]}> {elm.split(' ')[1]} </li>) }
            </ul>
          </div>
        )}
      </div>
    );
  }

}

export default Tuile;