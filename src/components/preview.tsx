import React from 'react';
import '../style/preview.css';
import { Link } from 'react-router-dom';
import Save from './save-button';
import { verifyToken } from '../services/auth.service';
import HomeElem from '../models/homeElem.model';
import { updateElementInHome } from '../services/home.service';

interface IState {
  title: string;
  className: string;
  connected: boolean;
  mainText: string;
  id: number;
  editedTitle: boolean;
  editedText: boolean;
}

interface IProps {
  elem: HomeElem;
  className: string;
  connected: boolean;
}


class Preview extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    console.log("j'ai ça:", this.props.className, this.props.elem)
    this.state = {
      title: this.props.elem.title,
      className: this.props.className,
      connected: false,
      mainText: this.props.elem.content,
      id: -1,
      editedTitle: false,
      editedText: false
    }

    const issues = verifyToken();
    issues.then((connectState) => {
      this.setState({ connected: connectState });
    });

    this.save = this.save.bind(this);
    this.displayTitle = this.displayTitle.bind(this)
    this.handleChangeMainText = this.handleChangeMainText.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)


  }

  showSavedButton() {
    if (this.state.connected) {
      return <Save save={this.save} />;
    }
  }

  save() {
    console.log('try to save');
    const elemEdited = new HomeElem()

    if (this.state.editedTitle) {
      elemEdited.title = this.state.title
    } else {
      elemEdited.title = this.props.elem.title
    }

    if (this.state.editedText) {
      elemEdited.content = this.state.mainText
    } else {
      elemEdited.content = this.props.elem.content
    }
    elemEdited.idHome = this.props.elem.idHome
    console.log(this.props.elem.idHome)
    elemEdited.media = 'link of a video'
    updateElementInHome(elemEdited);

    console.log('content saved');
  }

  displayTitle() {
    if (this.state.editedTitle) {
      return <textarea className="bigtitle" value={this.state.title} onChange={(event) => this.handleChangeTitle(event)} />;
    } else {
      if (this.props.connected) {
        return <textarea className="bigtitle" value={this.props.elem.title} onChange={(event) => this.handleChangeTitle(event)} />;
      } else {
        return <span className="bigtitle">{this.props.elem.title}</span>
      }
    }
  }

  displayText() {
    console.log(this.state.editedText)
    if (this.state.editedText) {
      return <textarea className="content" value={this.state.mainText} onChange={(event) => this.handleChangeMainText(event)} />;
    } else {
      if (this.props.connected) {
        return <textarea className="content" value={this.props.elem.content} onChange={(event) => this.handleChangeMainText(event)} />;
      } else {
        return <p className="content">{this.props.elem.content}</p>
      }
    }
  }


  handleChangeTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ title: event.target.value, editedTitle: true });
  }

  handleChangeMainText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ mainText: event.target.value, editedText: true });
  }





  render() {
    return (
      <div className="container-preview">
        {this.showSavedButton()}
        <div className={this.props.className}>
          <span className="littleTitle">Formation</span>
          {this.displayTitle()}
          {this.displayText()}
          <Link className='burgerElement' to={'/formation/' + this.state.className}><div className="button"> <p className='buttonText'> Découvrir </p> </div></Link>
        </div>
      </div>
    );
  }

}

export default Preview;
