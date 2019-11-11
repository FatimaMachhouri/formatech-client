import React from 'react';
import TestApi from '../components/testApi';
import MainTitle from './mainTitle';
import '../style/main.css';
import Preview from './preview';
import { verifyToken } from '../services/auth.service';
import { getHomeElements } from '../services/home.service'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';
const title = 'je suis le titre'
interface IState {
  connected: boolean;
  mainText: string;
  title: string;
}
interface IProps {
}

class Root extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      connected: false,
      mainText: text,
      title: title
    };

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getHomeElements();
    issues.then((allElements) => {
      console.log(allElements)
    });

    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    if (!this.state.connected) {
      return <textarea className='mainText' value={this.state.mainText} onChange={(event) => this.handleChange(event)} />
    } else {
      return <span className='mainText'>{this.state.mainText}</span>
    }
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ mainText: event.target.value });
  }

  render() {
    return (
      <div className="root">
        <TestApi />
        <MainTitle name="Découvez aujourd’hui votre formation de demain." connected={this.state.connected} />
        {this.renderText()}
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
