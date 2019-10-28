import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import dopicture from '../img/do-infos.svg';

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

interface IState {
    name?: string;
    className?: string;
}

interface IProps {
    name: string;
    className: string;
}
class FormationDo extends React.Component {

  render() {
    return (
      <div className="root">
        <MainTitle name="Dev Ops" />
        <span className='mainText'>{fakeText}</span>
        <div className="informations">
          <img src={dopicture} className="picture-formation" alt="do illustration"/>
          <Tuile name="Simple Title" />
        </div>
      </div>
    );
  }

}

export default FormationDo;
