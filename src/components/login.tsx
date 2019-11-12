import React from 'react';
import '../style/login.css';
//import lock from '../img/lock.svg'

const Login = () => (
  <div className="container-login">
    <div className="login-component">
      <form>
        <input type="text" placeholder="alice@mail.com" />
        <input type="password" placeholder="mon-mot-de-passe" />
        <button>Se connecter</button>
      </form>
    </div>
    <p className="detail"> Connectez-vous afin de modifier le contenu de la plateforme.</p>
  </div>
);


export default Login;