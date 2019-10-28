import {Component} from 'react';
import {getAccueil} from '../services/testApi';

export default class TestApi extends Component {
  componentDidMount() {
    getAccueil().then(res => {console.log(res);}).catch(error => {console.log(error);});
  }
  
  render() {
    return null;
  }
}