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
    for (let semester of semesters) {
      let tmpResult = "";
      for (let module of semester.modules) {
        if (module.category !== "this UE doesn't have a category for the moment") {
          let subjects = (await axios.get(config.API_URL + '/sagesse/module/' + module.id)).data.subjects.map((elm: { title: any; }) => elm.title);
          tmpResult = '_' + module.title + '-' + subjects + tmpResult;
        }
      }
      result += '//' + semester.title + ':' + tmpResult;
    }

    this.setState({content: result});
  }

  getSemesters(elem: string) {
    let sem = elem.split('//');
    if (elem == undefined) return Array()
    else {
      sem.shift();
      return sem
    }
  }

  getModules(elem: string) {
    if (elem == undefined) return Array()
    else {
      let mod = elem.split('_')
      mod.shift()
      return mod
    }
  }

  getSubjects(elem: string) {
    if (elem == undefined) return Array()
    else return elem.split(',')
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
            <div>
              <span className='content'> {sem.split(":")[0]} </span>
              <ul>
                {this.getModules(sem.split(':')[1]).map(ue =>
                <li className='content2'> 
                  {ue.split('-')[0]}
                  <ul>
                {this.getSubjects(ue.split('-')[1]).map(sub => <li> {sub}</li>)}
                  </ul>
                </li>
                )}
              </ul>

            </div>
          )}
          
      </div>
    );
  }

}

export default Tuile;
