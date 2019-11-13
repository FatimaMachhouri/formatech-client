import axios from 'axios';
import * as config from '../config/configApi';
import { getToken } from './token.service';

export const getHomeElements = async () => {
  try {
    const acc = await axios.get(`${config.API_URL}/accueil`);
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addHomeElement = async (elementHome) => {
  const token = getToken();
  try {
    await axios.post(`${config.API_URL}/accueil`, elementHome,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInHome = async (elementHome) => {
  const token = getToken();
  try {
    await axios.put(`${config.API_URL}/accueil/modifier/${elementHome.idHome}`, elementHome,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInHome = async (idHome) => {
  const token = getToken();
  try {
    await axios.delete(`${config.API_URL}/accueil/supprimer/${idHome}`,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};