import React from 'react';
import logo from '../img/polytechLogo.svg';

import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import '../style/menubar.css';
import { Link } from 'react-router-dom';

interface IState {
    classNameBurger?: string;
}

interface IProps{}
class MenuBar extends React.Component<IProps,IState> {
  constructor(props :IProps) {
    super(props);
    this.state = {
      classNameBurger: 'hidden'
    };
    this.closeBurger = this.closeBurger.bind(this);
    this.openBurger = this.openBurger.bind(this);
  }
    

  closeBurger() {
    this.setState({classNameBurger:'hidden'});
  }
  openBurger() {
    this.setState({ classNameBurger: 'burger' });
  }

  render() {
    return (
      <div className='menuBarContent'>
        <div className={this.state.classNameBurger} id='burger'>
          <img src={cross} className='cross' onClick={this.closeBurger} alt='close menu.'/>
          <Link className='burgerElement' to="/" style={{textDecoration:'none', color:'black'}}> ACCUEIL </Link>
          <Link className='burgerElement' to="/candidater" style={{textDecoration:'none', color:'black'}}> CANDIDATER </Link>
          <Link className='burgerElement' to="/formations" style={{textDecoration:'none', color:'black'}}> FORMATIONS </Link>
          <Link className='burgerElement' to="/contact" style={{textDecoration:'none', color:'black'}}> CONTACT </Link>
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <img src={logo} className='polytechLogo' alt='Logo de polytech' />
            <Link className='menuElement' to="/" style={{textDecoration:'none', color:'black'}}> ACCUEIL </Link>
            <Link className='menuElement' to="/candidater" style={{textDecoration:'none', color:'black'}}> CANDIDATER </Link>
            <Link className='menuElement' to="/formations" style={{textDecoration:'none', color:'black'}}> FORMATIONS </Link>
            <Link className='menuElement' to="/contact" style={{textDecoration:'none', color:'black'}}> CONTACT </Link>
            <img className="burgerIcon" src={burger} onClick={this.openBurger} alt="burger menu"/>
          </header>
        </div>
      </div>
    );
  }

}

export default MenuBar;