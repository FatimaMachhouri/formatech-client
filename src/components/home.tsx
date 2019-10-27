import React from 'react';
import MenuBar from './menubar'
import TestApi from '../components/testApi';

const Root: React.FC = () => {


    return (

        <div className="root">
            <TestApi />
            <MenuBar />
        </div>
    );
}

export default Root;
