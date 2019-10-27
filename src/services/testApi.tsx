import * as config from '../config/testApi';
import axios from 'axios';

export const getAccueil = async () => {
  try {
    const acc = await axios.get(config.API_URL + '/api/accueil');
    return acc.data;
  }
  catch (error) {
    throw error.response;
  }
};