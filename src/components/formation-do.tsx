import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import DoForm from './do-form';
import { verifyToken } from '../services/auth.service';

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

interface IState {
  activeElement: string,
  connected: boolean,
  mainText: string;
}

interface IProps {
}

class FormationDo extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      activeElement: '',
      connected: false,
      mainText: fakeText
    };
    this.changeActiveElement = this.changeActiveElement.bind(this);
    this.renderText = this.renderText.bind(this);

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });
  }


  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ mainText: event.target.value });
  }


  renderText() {
    if (this.state.connected) {
      return <textarea className='mainText' value={this.state.mainText} onChange={(event) => this.handleChange(event)} />;
    } else {
      return <span className='mainText'>{this.state.mainText}</span>;
    }
  }



  changeActiveElement(elem: string) {
    this.setState({ activeElement: elem });
  }


  render() {
    return (
      <div className="root">
        <MainTitle name="Dev Ops" connected={this.state.connected} />
        {this.renderText()}
        <div className="informations">
          <DoForm handleClick={this.changeActiveElement} />
          <Tuile name={this.state.activeElement} />
        </div>
      </div>
    );
  }

}

export default FormationDo;
