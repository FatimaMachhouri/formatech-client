import React from 'react';
import '../style/login.css';
import lock from '../img/lock.svg';

const Login = () => (
  <div className="container-login">
    <div className="login-component">
      <img src={lock} className='lock' />
      <form>
        <input type="text" placeholder="alice@mail.com"/>
        <input type="password" placeholder="mon-mot-de-passe" />
        <button>Se connecter</button>
      </form>
    </div>
  </div>
);


export default Login;