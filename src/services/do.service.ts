import axios from 'axios';
import * as config from '../config/configApi';
import { getToken } from './token.service';

export const getDoElements = async () => {
  try {
    const acc = await axios.get(`${config.API_URL}/do`);
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};

export const addDoElement = async (newDoElement: { title: string, content: string, media: string }) => {
  const token = getToken();
  try {
    await axios.post(`${config.API_URL}/do`, newDoElement,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const updateElementInDo = async (doElement: { idDo: number, title: string; content: string; media: string; }) => {
  const token = getToken();
  try {
    await axios.put(`${config.API_URL}/do/modifier/${doElement.idDo}`, doElement,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export const deleteElementInDo = async (idDo: number) => {
  const token = getToken();
  try {
    await axios.delete(`${config.API_URL}/do/supprimer/${idDo}`,{
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};