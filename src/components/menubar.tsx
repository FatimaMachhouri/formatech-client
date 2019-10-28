import React from 'react';
import logo from '../img/polytechLogo.svg';

import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import '../style/menubar.css';

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
          <p className='burgerElement'>ACCUEIL</p>
          <p className='burgerElement' >CANDIDATER</p>
          <p className='burgerElement' onClick={this.showSubMenuMobile}>FORMATIONS</p>
          <div className={this.state.classNameSubMenu}>
            <p className="subBurger">IG</p>
            <p className="subBurger">DO</p>
          </div>
          <p className='burgerElement'>CONTACT</p>
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <img src={logo} className='polytechLogo' alt='Logo de polytech' />
            <p className='menuElement'>ACCUEIL</p>
            <p className='menuElement'>CANDIDATER</p>
            <p className='menuElement' onClick={this.showSubMenu}>FORMATIONS</p>
            <div className={this.state.classNameSubMenuFloat}>
              <p className="subBurger">IG</p>
              <p className="subBurger">DO</p>
            </div>
            <p className='menuElement'>CONTACT</p>
            <img className="burgerIcon" src={burger} onClick={this.openBurger} alt="burger menu" />
          </header>
        </div>
      </div>
    );
  }

}

export default MenuBar;