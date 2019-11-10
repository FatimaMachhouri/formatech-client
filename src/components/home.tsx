import React from 'react';
import TestApi from '../components/testApi';
import MainTitle from './mainTitle';
import '../style/main.css';
import Preview from './preview';
import { verifyToken } from '../services/auth.service';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';

interface IState {
  connected: boolean;
}
interface IProps {
}

class Root extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      connected: false
    };
    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });
  }

  render() {
    return (
      <div className="root">
        <TestApi />
        <MainTitle name="Découvez aujourd’hui votre formation de demain." connected={this.state.connected} />
        <span className='mainText'>{text}</span>
        <div className="pres-formation">
          <Preview name="Développement Opérationnel" className="do" />
          <Preview name="Informatique et Gestion" className="ig" />
        </div>
        <MainTitle name="Nous sommes là pour vous répondre" connected={this.state.connected} />
      </div>
    );
  }
}
export default Root;
