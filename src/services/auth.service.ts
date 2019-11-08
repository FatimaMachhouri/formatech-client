import axios from 'axios';
import User from '../models/user.model';
import { setToken, removeToken, getToken } from './token.service';


const login = async (user: User) => {
  try {
    const res = await axios
      .post('api/utilisateur/connexion', {
        login: user.login,
        password: user.password
      });
    setToken(res.data);
    return res.data;
  }
  catch (err) {
    console.log(err);
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
      .get('api/utilisateur/token',
        {
          headers: { Authorization: `Bearer ${token}` }
        });
        if(res.status == 200){
          return true;
        }else{
          return false;
        }
    //return res.data;
  }
  catch (err) {
    console.log(err);
  }
};

export { login, logout, verifyToken };