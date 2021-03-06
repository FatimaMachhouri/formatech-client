import axios from 'axios';
import { setToken, removeToken, getToken } from './token.service';
import * as config from '../config/configApi';


const login = async (user) => {
  try {
    const res = await axios
      .post(`${config.API_URL}/utilisateur/connexion`, {
        login: user.login,
        password: user.password
      });
    setToken(res.data);
    return res.data;
  }
  catch (err) {
    
  }
};

const logout = () => {
  // remove user from local storage to log user out
  removeToken();
};

const verifyToken = async () => {
  const token = getToken();
  try {
    const res = await axios
      .get(`${config.API_URL}/utilisateur/token`,
        {
          headers: { Authorization: `Bearer ${token}` }
        });
        if(res.status === 200){
          return true;
        }else{
          logout();
          return false;
        }
    //return res.data;
  }
  catch (err) {
    return false;
  }
};

export { login, logout, verifyToken };