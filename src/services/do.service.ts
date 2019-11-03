import axios from 'axios';
import * as config from '../config/configApi';

export const getDoElements = async () => {
  try {
    const acc = await axios.get(config.API_URL + '/api/do');
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addDoElement = async (newDoElement: { title: string, content: string, media: string }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.post(config.API_URL + '/api/do', newDoElement);
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInDo = async (doElement: { idDo: number, title: string; content: string; media: string; }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.put(config.API_URL + '/api/do/modifier/' + doElement.idDo, doElement);
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInDo = async (idDo: number) => {
  try {
    await axios.delete(config.API_URL + '/api/do/supprimer/' + idDo);
  }
  catch (error) {
    throw error.response;
  }
};