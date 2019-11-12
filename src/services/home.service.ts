import axios from 'axios';
import * as config from '../config/configApi';

export const getHomeElements = async () => {
  try {
    const acc = await axios.get(`${config.API_URL}/accueil`);
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addHomeElement = async (elementHome: { title: string, content: string, media: string }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.post(`${config.API_URL}/accueil`, elementHome);
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInHome = async (elementHome: { idHome: number, title: string; content: string; media: string; }) => {
  //const token = localStorage.getItem('usertoken');
  try {
    await axios.put(`${config.API_URL}/accueil/modifier/${elementHome.idHome}`, elementHome);
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInHome = async (idHome: number) => {
  try {
    await axios.delete(`${config.API_URL}/accueil/supprimer/${idHome}`);
  }
  catch (error) {
    throw error.response;
  }
};