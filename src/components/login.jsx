import React from 'react';
import '../style/login.css';
import lock from '../img/lock.svg';
import { login } from '../services/auth.service';



class Login extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password : ''
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.connect = this.connect.bind(this);

  }

  changeEmail(event) {
    this.setState({email : event.target.value});
  }

  changePass(event) {
    this.setState({ password: event.target.value});
  }

  connect = (event) => {
    event.preventDefault();
    const user = {};
    user.login = this.state.email;
    user.password = this.state.password;
    const res = login(user);
    console.log(res);
  }

  render(){
    return (
      <div className="container-login">
        <div className="login-component">
          <img src={lock} className="lock" alt="lock-logo"/>
          <form>
            <input type="text" placeholder="alice@mail.com" onChange={(event) => this.changeEmail(event)}/>
            <input type="password" placeholder="mon-mot-de-passe" onChange={(event) => this.changePass(event)}/>
            <button onClick={this.connect}>Se connecter</button>
          </form>
        </div>
        <p className="detail"> Connectez-vous afin de modifier le contenu de la plateforme.</p>
      </div>
    );
  }
}

export default Login;