import React from 'react';
import '../style/formation.css';
import MainTitle from './mainTitle';
import Tuile from './tuile';
import DoForm from './do-form';
import { verifyToken } from '../services/auth.service';
import { getDoElements } from '../services/do.service';


class FormationDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeElement: '',
      connected: false,
      mainText: '', 
      title: '',
      id : 0

    };
    this.changeActiveElement = this.changeActiveElement.bind(this);
    this.renderText = this.renderText.bind(this);

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
