import React from 'react';
import logo from '../img/polytechLogo.svg';
import '../style/menubar.css';
const MenuBar: React.FC = () => {
    return (
        <div className='MenuBar'>
            <header className='App-header'>
                <img src={logo} className='polytechLogo' alt='Logo de polytech' />
                <p className='menuElement'>ACCUEIL</p>
                <p className='menuElement'>CANDIDATER</p>
                <p className='menuElement'>FORMATIONS</p>
                <p className='menuElement'>CONTACT</p>
            </header>
        </div>
    );
}

export default MenuBar;