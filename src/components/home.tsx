import React from 'react';
import MainTitle from './mainTitle';
import Save from './save-button';
import '../style/main.css';
import Preview from './preview';
import { verifyToken } from '../services/auth.service';
import { getHomeElements, updateElementInHome } from '../services/home.service';
import Element from '../models/element.model';

interface IState {
  connected: boolean;
  mainText: string;
  title: string;
  idHome: number;
}
interface IProps {
}

class Root extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      connected: false,
      mainText: '',
      title: '',
      idHome: 0
    };

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getHomeElements();
    pageContent.then((allElements: [Element]) => {
      if (allElements !== undefined) {
        this.setState({
          mainText: allElements[0]!.content,
          title: allElements[0]!.title,
          idHome: allElements[0]!.idElement
        });
      }

    });

    this.renderText = this.renderText.bind(this);
    this.save = this.save.bind(this);
    this.showSavedButton = this.showSavedButton.bind(this);
  }

  renderText() {
    if (this.state.connected) {
      return <textarea className='mainText' value={this.state.mainText} onChange={(event) => this.handleChange(event)} />;
    } else {
      return <span className='mainText'>{this.state.mainText}</span>;
    }
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ mainText: event.target.value });
  }

  showSavedButton() {
    if (this.state.connected) {
      return <Save save={this.save} />;
    }
  }

  save() {
    const elementHome = {
      idHome: this.state.idHome,
      title: this.state.title,
      content: this.state.mainText,
      media: ''
    };
    updateElementInHome(elementHome);
    console.log('content saved');
  }

  render() {
    return (
      <div className="root">
        {this.showSavedButton}
        <MainTitle name={this.state.title} connected={this.state.connected} />
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
