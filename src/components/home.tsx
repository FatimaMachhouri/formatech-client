import React from 'react';
import TestApi from '../components/testApi';
import MainTitle from './mainTitle';
import '../style/main.css';
import Preview from './preview';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

const Root: React.FC = () => {
  return (
    <div className="root">
      <TestApi />
      <MainTitle name="Découvez aujourd’hui votre formation de demain." />
      <span className='mainText'>{text}</span>
      <div className="pres-formation">
        <Preview name="Développement Opérationnel" className="do"/>
        <Preview name="Informatique et Gestion" className="ig"/>
      </div>
      <MainTitle name="Nous sommes là pour vous répondre" />
    </div>
  );
};
export default Root;

