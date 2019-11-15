import React from 'react';
import logo from '../img/polytechLogo.svg';
import offButton from '../img/power-button-off.svg';
import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import '../style/menubar.css';
import { Link } from 'react-router-dom';
import { verifyToken, logout } from '../services/auth.service';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNameBurger: 'hidden',
      classNameSubMenu: 'hidden',
      classNameSubMenuFloat: 'hidden',
      connected: false
    };
    this.closeBurger = this.closeBurger.bind(this);
    this.openBurger = this.openBurger.bind(this);
    this.showSubMenuMobile = this.showSubMenuMobile.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
    this.logout = this.logout.bind(this);

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });
  }

  closeBurger() {
    this.setState({ classNameBurger: 'hidden' });
  }
  openBurger() {
    this.setState({ classNameBurger: 'burger' });
  }

  showSubMenuMobile() {
    if (this.state.classNameSubMenu === 'hidden') {
      this.setState({ classNameSubMenu: 'visible-sub' });
    } else {
      this.setState({ classNameSubMenu: 'hidden' });
    }
  }

  showSubMenu() {
    if (this.state.classNameSubMenuFloat === 'hidden') {
      this.setState({ classNameSubMenuFloat: 'visible-subFloat' });
    } else {
      this.setState({ classNameSubMenuFloat: 'hidden' });
    }
  }

  logout() {
    logout();
    window.location.reload();
  }

  render() {
    return (
      <div className='menuBarContent'>
        <div className={this.state.classNameBurger} id='burger'>
          <img src={cross} className='cross' onClick={this.closeBurger} alt='close menu.' />
          <Link className='burgerElement' to="/" onClick={this.closeBurger} style={{ textDecoration: 'none', color: 'black' }}> ACCUEIL </Link>
          <Link className='burgerElement' to="/candidater" onClick={this.closeBurger} style={{ textDecoration: 'none', color: 'black' }}> CANDIDATER </Link>
          <p className='burgerElement' onClick={this.showSubMenuMobile}> FORMATIONS </p>
          <div className={this.state.classNameSubMenu} onClick={this.closeBurger}>
            <p className='subBurger' onClick={this.showSubMenuMobile}> <Link to="/formation/ig" style={{ textDecoration: 'none', color: 'black' }}> IG </Link> </p>
            <p className='subBurger' onClick={this.showSubMenuMobile}> <Link to="/formation/do" style={{ textDecoration: 'none', color: 'black' }}> DO </Link> </p>
          </div>
          <Link className='burgerElement' to="/contact" onClick={this.closeBurger} style={{ textDecoration: 'none', color: 'black' }}> CONTACT </Link>

          {this.state.connected ? (
            <div className="logout">
              <img src={offButton} className="menuElement topnav-right offButton" alt="offButton-logo" onClick={this.logout} />
            </div>
          ) : null}
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <Link className='' to="/"><img src={logo} className='polytechLogo' alt='Logo de polytech' /></Link>
            <Link className='menuElement' to="/" style={{ textDecoration: 'none', color: 'black' }}> ACCUEIL </Link>
            <Link className='menuElement' to="/candidater" style={{ textDecoration: 'none', color: 'black' }}> CANDIDATER </Link>
            <p className='menuElement' onClick={this.showSubMenu}> FORMATIONS </p>
            <div className={this.state.classNameSubMenuFloat} onMouseLeave={this.showSubMenu}>
              <p className='subBurger' onClick={this.showSubMenu}> <Link to="/formation/ig" style={{ textDecoration: 'none', color: 'black' }}> IG </Link> </p>
              <p className='subBurger' onClick={this.showSubMenu}> <Link to="/formation/do" style={{ textDecoration: 'none', color: 'black' }}> DO </Link> </p>
            </div>
            <Link className='menuElement' to="/contact" style={{ textDecoration: 'none', color: 'black' }}> CONTACT </Link>
            <img className="burgerIcon" src={burger} onClick={this.openBurger} alt="burger menu" />
            {this.state.connected ? (
              <img src={offButton} className="menuElement topnav-right offButton" alt="offButton-logo" onClick={this.logout} />
            ) : null}
          </header>
        </div>
      </div>
    );
  }
}

export default MenuBar;