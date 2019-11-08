import axios from 'axios';
import User from '../models/user.model';

const login = async (user: User) => {
  try {
    const res = await axios
      .post('api/utilisateur/connexion', {
        login: user.login,
        password: user.password
      });
    localStorage.setItem('tokenFormatech', res.data);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('tokenFormatech');
}

export { login, logout };