import axios from 'axios';
import * as config from '../config/configApi';
import { getToken } from './token.service';

export const getContactElements = async () => {
  try {
    const acc = await axios.get(`${config.API_URL}/contact`);
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addContactElement = async (newContact: { name: string, email: string, position: string }) => {
  const token = getToken();
  try {
    await axios.post(`${config.API_URL}/contact`, newContact,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInContact = async (contactElement: { idContact: number, name: string, email: string, position: string }) => {
  const token = getToken();
  try {
    await axios.put(`${config.API_URL}/contact/modifier/${contactElement.idContact}`, contactElement,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInContact = async (idContact: number) => {
  const token = getToken();
  try {
    await axios.delete(`${config.API_URL}/contact/supprimer/${idContact}`,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};