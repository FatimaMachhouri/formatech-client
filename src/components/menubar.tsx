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
          <p className='burgerElement'> <Link to="/" style={{textDecoration:'none', color:'black'}}> ACCUEIL </Link> </p>
          <p className='burgerElement'> <Link to="/candidater" style={{textDecoration:'none', color:'black'}}> CANDIDATER </Link> </p>
          <p className='burgerElement'> <Link to="/formations" style={{textDecoration:'none', color:'black'}}> FORMATIONS </Link> </p>
          <p className='burgerElement'> <Link to="/contact" style={{textDecoration:'none', color:'black'}}> CONTACT </Link> </p>
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <img src={logo} className='polytechLogo' alt='Logo de polytech' />
            <p className='menuElement'> <Link to="/" style={{textDecoration:'none', color:'black'}}> ACCUEIL </Link> </p>
            <p className='menuElement'> <Link to="/candidater" style={{textDecoration:'none', color:'black'}}> CANDIDATER </Link> </p>
            <p className='menuElement'> <Link to="/formations" style={{textDecoration:'none', color:'black'}}> FORMATIONS </Link> </p>
            <p className='menuElement'> <Link to="/contact" style={{textDecoration:'none', color:'black'}}> CONTACT </Link> </p>
            <img className="burgerIcon" src={burger} onClick={this.openBurger} alt="burger menu"/>
          </header>
        </div>
      </div>
    );
  }

}

export default MenuBar;