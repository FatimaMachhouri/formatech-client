import axios from 'axios';
import * as config from '../config/configApi';

export const getContactElements = async () => {
  try {
    const acc = await axios.get(config.API_URL + '/api/contact');
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addContactElement = async (newContact: { name: string, email: string, position: string }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.post(config.API_URL + '/api/contact', newContact);
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInContact = async (contactElement: { idContact: number, name: string, email: string, position: string }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.put(config.API_URL + '/api/contact/modifier/' + contactElement.idContact, contactElement);
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInContact = async (idContact: number) => {
  try {
    await axios.delete(config.API_URL + '/api/contact/supprimer/' + idContact);
  }
  catch (error) {
    throw error.response;
  }
};