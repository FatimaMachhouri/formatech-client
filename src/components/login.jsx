import React from 'react';
import '../style/login.css';
import lock from '../img/lock.svg';
import { login } from '../services/auth.service';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.connect = this.connect.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePass(event) {
    this.setState({ password: event.target.value });
  }

  connect(event) {
    event.preventDefault();
    const user = {};
    user.login = this.state.email;
    user.password = this.state.password;
    login(user).then(res => {
      if(res !== undefined){
        this.props.history.push('/');
      }else{
        this.setState({
          email: '',
          password: '',
          error: true
        });
      }
    }).catch(err => {
      if(err){
        this.setState({
          email: '',
          password: '',
          error: true
        });
      }
    });
  }


  render() {

    return (
      <div className="container-login">
        <div className="login-component">
          <img src={lock} className="lock" alt="lock-logo" />
          {this.state.error?  <div className="">Email et/ou mot de passe incorrect(s)!</div> : null}
          <form>
            <input type="text" placeholder="alice@mail.com" value={this.state.email} onChange={(event) => this.changeEmail(event)} />
            <input type="password" placeholder="mon-mot-de-passe" value={this.state.password} onChange={(event) => this.changePass(event)} />
            <button onClick={this.connect}>Se connecter</button>
          </form>
        </div>
        <p className="detail"> Connectez-vous afin de modifier le contenu de la plateforme.</p>
      </div>
    );
  }
}

Login.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.func
}


export default withRouter(Login);