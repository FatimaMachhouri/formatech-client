import { Component } from 'react';
import { getHomeElements, addHomeElement, updateElementInHome, deleteElementInHome } from '../services/home.service';
import { getIgElements, addIgElement, updateElementInIg, deleteElementInIg } from '../services/ig.service';
import { getDoElements, addDoElement, updateElementInDo, deleteElementInDo } from '../services/do.service';
import { getContactElements, addContactElement, updateElementInContact, deleteElementInContact } from '../services/contact.service';

export default class TestApi extends Component {
  componentDidMount() {
    //Get
    console.log('Get');
    getHomeElements().then((res: any) => { console.log(res); }).catch((error: any) => { console.log(error); });
    getIgElements().then((res: any) => { console.log(res); }).catch((error: any) => { console.log(error); });
    getDoElements().then((res: any) => { console.log(res); }).catch((error: any) => { console.log(error); });
    getContactElements().then((res: any) => { console.log(res); }).catch((error: any) => { console.log(error); });
    //Add
    const elemContact = { name: 'toto', email: 't@t.fr', position: 'master' };
    const newIgElement = { title: 'igR', content: 'iggg', media: 'none' };
    const newDoElement = { title: 'doR', content: 'dooo', media: 'none' };
    const newHomeElement = { title: 'homeR', content: 'hommeea', media: 'none' };

    console.log('Add');
    addHomeElement(newHomeElement);
    addContactElement(elemContact);
    addDoElement(newDoElement);
    addIgElement(newIgElement);

    //Update
    const uelemContact = { idContact: 13, name: 'modifContact', email: 't@t.fr', position: 'master' };
    const uIgElement = { idIg: 14, title: 'igR', content: 'modifIg', media: 'none' };
    const uDoElement = { idDo: 19, title: 'doR', content: 'modifDo', media: 'none' };
    const uHomeElement = { idHome: 20, title: 'homeR', content: 'modifHome', media: 'none' };

    console.log('Update');
    updateElementInContact(uelemContact);
    updateElementInDo(uDoElement);
    updateElementInHome(uHomeElement);
    updateElementInIg(uIgElement);

    //Delete
    const idContact = 13;
    const idIg= 14;
    const idDo = 19;
    const idHome = 20;

    console.log('Delete');
    deleteElementInContact(idContact);
    deleteElementInDo(idDo);
    deleteElementInHome(idHome);
    deleteElementInIg(idIg);

  }

  render() {
    return null;
  }
}