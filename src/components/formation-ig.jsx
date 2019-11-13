import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import IgForm from './ig-form';
import { verifyToken } from '../services/auth.service';
import { getIgElements } from '../services/ig.service';

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';



class FormationIg extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeElement: '',
      connected: false,
      mainText: fakeText,
      title: '',
      id: 0
    };
    this.changeActiveElement = this.changeActiveElement.bind(this);
    this.renderText = this.renderText.bind(this);

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getIgElements();
    pageContent.then((allElements) => {
      if (allElements !== undefined) {
        console.log(allElements);
        this.setState({
          mainText: allElements[0].content,
          title: allElements[0].title,
          id: allElements[0].idElement
        });
      }

    });
  }


  handleChange(event) {
    this.setState({ mainText: event.target.value });
  }


  renderText() {
    if (this.state.connected) {
      return <textarea className='mainText' value={this.state.mainText} onChange={(event) => this.handleChange(event)} />;
    } else {
      return <span className='mainText'>{this.state.mainText}</span>;
    }
  }


  changeActiveElement(elem) {
    this.setState({ activeElement: elem });
  }

  render() {
    return (
      <div className="root">
        <MainTitle name={this.state.title} connected={this.state.connected} />
        {this.renderText()}
        <div className="informations">
          <IgForm handleClick={this.changeActiveElement} />
          <Tuile name={this.state.activeElement} />
        </div>
      </div>
    );
  }

}

export default FormationIg;
