import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import DoForm from './do-form';
import Save from './save-button';
import { verifyToken } from '../services/auth.service';
import { getDoElements, updateElementInDo } from '../services/do.service';

class FormationDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeElement: '',
      connected: false,
      mainText: '',
      title: '',
      id: 0

    };
    this.changeActiveElement = this.changeActiveElement.bind(this);
    this.renderText = this.renderText.bind(this);
    this.save = this.save.bind(this);
    this.showSavedButton = this.showSavedButton.bind(this);
    this.changeTitle = this.changeTitle.bind(this);

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getDoElements();
    pageContent.then((allElements) => {
      if (allElements !== undefined) {
        console.log(allElements);
        this.setState({
          mainText: allElements[0].content,
          title: allElements[0].title,
          id: allElements[0].idDo
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


  changeTitle(elem) {
    this.setState({ title: elem });
  }


  changeActiveElement(elem) {
    this.setState({ activeElement: elem });
  }

  showSavedButton() {
    if (this.state.connected) {
      return <Save save={this.save} />;
    }
  }

  save() {
    console.log('try to save');
    const elementDo = {
      idDo: this.state.id,
      title: this.state.title,
      content: this.state.mainText,
      media: ''
    };
    updateElementInDo(elementDo);
    console.log('content saved');
  }

  render() {
    return (
      <div className="root">
        {this.showSavedButton()}
        <MainTitle name={this.state.title} connected={this.state.connected} action={this.changeTitle}/>
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