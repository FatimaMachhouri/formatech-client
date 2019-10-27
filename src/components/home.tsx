import React from 'react';
import MenuBar from './menubar'
import MainTitle from './mainTitle'
import '../style/main.css';

const Root: React.FC = () => {
    return (

        <div className="root">
            <MenuBar />
            <MainTitle name="blablabla"/>
        </div>
    );
}

export default Root;
