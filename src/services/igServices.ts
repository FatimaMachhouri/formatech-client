import axios from 'axios';
import * as config from '../config/configApi';

export const getIgElements = async () => {
  try {
    const acc = await axios.get(config.API_URL + '/api/ig');
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addIgElement = async (newIgElement: { title: string, content: string, media: string }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.post(config.API_URL + '/api/ig', newIgElement);
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInIg = async (igElement: { idIg: number, title: string; content: string; media: string; }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.put(config.API_URL + '/api/ig/modifier/' + igElement.idIg, igElement);
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInIg = async (idIg: number) => {
  try {
    await axios.delete(config.API_URL + '/api/ig/supprimer/' + idIg);
  }
  catch (error) {
    throw error.response;
  }
};