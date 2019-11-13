import React from 'react';
import MainTitle from './mainTitle';
import Save from './save-button';
import '../style/main.css';
import Preview from './preview';
import { verifyToken } from '../services/auth.service';
import { getHomeElements, updateElementInHome } from '../services/home.service';
import HomeElem from '../models/homeElem.model';

interface IState {
  connected: boolean;
  mainText: string;
  title: string;
  idHome: number;
  previewOne: HomeElem;
  previewTwo: HomeElem;
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
      idHome: 0,
      previewOne: new HomeElem(),
      previewTwo: new HomeElem()
    };

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    const pageContent = getHomeElements();
    pageContent.then((allElements: HomeElem[]) => {
      if (allElements !== undefined) {
        console.log(allElements);
        this.setState({
          mainText: allElements[0]!.content,
          title: allElements[0]!.title,
          idHome: allElements[0]!.idHome,
        });
        const elem1 = new HomeElem();
        elem1.content = allElements[1]!.content;
        elem1.idHome = allElements[1]!.idHome;
        elem1.media = allElements[1]!.media;
        elem1.title = allElements[1]!.title;

        const elem2 = new HomeElem();
        elem2.content = allElements[2]!.content;
        elem2.idHome = allElements[2]!.idHome;
        elem2.media = allElements[2]!.media;
        elem2.title = allElements[2]!.title;

        this.setState({
          previewOne: elem1,
          previewTwo: elem2
        });

      }

    });

    // Function for the page
    this.renderText = this.renderText.bind(this);
    this.save = this.save.bind(this);
    this.showSavedButton = this.showSavedButton.bind(this);
    this.changeTitle = this.changeTitle.bind(this);

    // Functions to handle changes on Preview Components: 
    this.changePreviewOne = this.changePreviewOne.bind(this);
    this.changePreviewTwo = this.changePreviewTwo.bind(this);


  }

  changePreviewOne(elem: HomeElem) {
    this.setState({
      previewOne: elem
    });
  }

  changePreviewTwo(elem: HomeElem) {
    this.setState({
      previewOne: elem
    });
  }




  renderText() {
    if (this.state.connected) {
      return <textarea className='mainText' value={this.state.mainText} onChange={(event) => this.handleChange(event)} />;
    } else {
      return <span className='mainText'>{this.state.mainText}</span>;
    }
  }

  changeTitle(elem: string) {
    this.setState({ title: elem });
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
    console.log('try to save');
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
        {this.showSavedButton()}
        <MainTitle name={this.state.title} connected={this.state.connected} action={this.changeTitle}/>
        {this.renderText()}
        <div className="pres-formation">
          <Preview elem={this.state.previewOne} connected={this.state.connected}  className="do" />
          <Preview elem={this.state.previewTwo} connected={this.state.connected}  className="ig" />
        </div>
      </div>
    );
  }
}
export default Root;

