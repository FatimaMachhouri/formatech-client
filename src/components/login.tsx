import React from 'react';
import '../style/login.css';
import lock from '../img/lock.svg';
import { login } from '../services/auth.service';
import User from '../models/user.model';

interface IState {
  email: string;
  password: string;
}

interface IProps {
}


class Login extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password : ''
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.connect = this.connect.bind(this);

  }

  changeEmail(event : React.ChangeEvent<HTMLInputElement>) {
    this.setState({email : event.target.value});
  }

  changePass(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value});
  }

  connect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const user: User = new User();
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