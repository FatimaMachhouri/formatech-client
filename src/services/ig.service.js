import axios from 'axios';
import * as config from '../config/configApi';
import { getToken } from './token.service';

export const getIgElements = async () => {
  try {
    const acc = await axios.get(`${config.API_URL}/ig`);
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addIgElement = async (newIgElement) => {
  const token = getToken();
  try {
    await axios.post(`${config.API_URL}/ig`, newIgElement,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInIg = async (igElement) => {
  const token = getToken();
  try {
    await axios.put(`${config.API_URL}/ig/modifier/${igElement.idIg}`, igElement,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInIg = async (idIg) => {
  const token = getToken();
  try {
    await axios.delete(`${config.API_URL}/ig/supprimer/${idIg}`,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};