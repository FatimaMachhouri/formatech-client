import React from 'react';
import logo from '../img/polytechLogo.svg';

import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import '../style/menubar.css';
import { Link } from 'react-router-dom';

interface IState {
  classNameBurger?: string;
  classNameSubMenu?: string;
  classNameSubMenuFloat?: string;
}

interface IProps { }
class MenuBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      classNameBurger: 'hidden',
      classNameSubMenu: 'hidden',
      classNameSubMenuFloat: 'hidden'
    };
    this.closeBurger = this.closeBurger.bind(this);
    this.openBurger = this.openBurger.bind(this);
    this.showSubMenuMobile = this.showSubMenuMobile.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
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

  render() {
    return (
      <div className='menuBarContent'>
        <div className={this.state.classNameBurger} id='burger'>
          <img src={cross} className='cross' onClick={this.closeBurger} alt='close menu.' />
          <Link className='burgerElement' to="/" style={{ textDecoration: 'none', color: 'black' }}> ACCUEIL </Link>
          <Link className='burgerElement' to="/candidater" style={{ textDecoration: 'none', color: 'black' }}> CANDIDATER </Link>
          <p className='burgerElement' onClick={this.showSubMenuMobile}> FORMATIONS </p>
          <div className={this.state.classNameSubMenu}>
            <p className='subBurger'> <Link to="/formation/ig" style={{ textDecoration: 'none', color: 'black' }}> IG </Link> </p>
            <p className='subBurger'> <Link to="/formation/do" style={{ textDecoration: 'none', color: 'black' }}> DO </Link> </p>
          </div>
          <Link className='burgerElement' to="/contact" style={{ textDecoration: 'none', color: 'black' }}> CONTACT </Link>
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <Link className='menuElement' to="/"><img src={logo} className='polytechLogo' alt='Logo de polytech' /></Link>
            <Link className='menuElement' to="/" style={{ textDecoration: 'none', color: 'black' }}> ACCUEIL </Link>
            <Link className='menuElement' to="/candidater" style={{ textDecoration: 'none', color: 'black' }}> CANDIDATER </Link>
            <p className='menuElement' onClick={this.showSubMenu}> FORMATIONS </p>
            <div className={this.state.classNameSubMenuFloat}>
              <p className='subBurger'> <Link to="/formation/ig" style={{ textDecoration: 'none', color: 'black' }}> IG </Link> </p>
              <p className='subBurger'> <Link to="/formation/do" style={{ textDecoration: 'none', color: 'black' }}> DO </Link> </p>
            </div>
            <Link className='menuElement' to="/contact" style={{ textDecoration: 'none', color: 'black' }}> CONTACT </Link>
            <img className="burgerIcon" src={burger} onClick={this.openBurger} alt="burger menu" />
          </header>
        </div>
      </div>
    );
  }

}

export default MenuBar;