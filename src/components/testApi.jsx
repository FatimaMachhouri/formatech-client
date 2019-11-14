import { Component } from 'react';
import { getHomeElements } from '../services/home.service';
import { getIgElements } from '../services/ig.service';
import { getDoElements } from '../services/do.service';
import { getContactElements } from '../services/contact.service';

export default class TestApi extends Component {
  componentDidMount() {
    //Get
    console.log('Get');
    getHomeElements().then((res) => { console.log(res); }).catch((error) => { console.log(error); });
    getIgElements().then((res) => { console.log(res); }).catch((error) => { console.log(error); });
    getDoElements().then((res) => { console.log(res); }).catch((error) => { console.log(error); });
    getContactElements().then((res) => { console.log(res); }).catch((error) => { console.log(error); });
    //Add
    /* const elemContact = { name: 'toto', email: 't@t.fr', position: 'master' };
     const newIgElement = { title: 'igR', content: 'iggg', media: 'none' };
     const newDoElement = { title: 'doR', content: 'dooo', media: 'none' };
     const newHomeElement = { title: 'homeR', content: 'hommeea', media: 'none' };
 
     console.log('Add');
     addHomeElement(newHomeElement);
     addContactElement(elemContact);
     addDoElement(newDoElement);
     addIgElement(newIgElement);
 
     //Update
     const uelemContact = { idContact: 14, name: 'modifContact', email: 't@t.fr', position: 'master' };
     const uIgElement = { idIg: 15, title: 'igR', content: 'modifIg', media: 'none' };
     const uDoElement = { idDo: 20, title: 'doR', content: 'modifDo', media: 'none' };
     const uHomeElement = { idHome: 21, title: 'homeR', content: 'modifHome', media: 'none' };
 
     console.log('Update');
     updateElementInContact(uelemContact);
     updateElementInDo(uDoElement);
     updateElementInHome(uHomeElement);
     updateElementInIg(uIgElement);
 
     //Delete
     const idContact = 16;
     const idIg= 16;
     const idDo = 21;
     const idHome = 22;
 
     console.log('Delete');
     deleteElementInContact(idContact);
     deleteElementInDo(idDo);
     deleteElementInHome(idHome);
     deleteElementInIg(idIg);
 */
  }

  render() {
    return null;
  }
}
