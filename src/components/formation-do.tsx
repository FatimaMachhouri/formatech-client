import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import DoForm from './do-form';

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

interface IState {
  activeElement: string
}

interface IProps {

}

class FormationDo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeElement: ''
    };

    this.changeActiveElement = this.changeActiveElement.bind(this);
  }

  changeActiveElement(elem: string) {
    this.setState({activeElement: elem});
  }

  render() {
    return (
      <div className="root">
        <MainTitle name="Dev Ops" />
        <span className='mainText'>{fakeText}</span>
        <div className="informations">
          <DoForm handleClick={this.changeActiveElement} />
          <Tuile name={this.state.activeElement} formationName="DO"/>
        </div>
      </div>
    );
  }

}

export default FormationDo;
