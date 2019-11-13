import React from 'react';
import save from '../img/save.svg';
import '../style/main.css';


class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      labelClass:'invisible'
    };
    this.save = this.save.bind(this);
  }

  save() {
    this.setState({
      clicked: true,
      labelClass: 'save-label'
    });
    this.props.save();
  }

  render() {
    return (
      <div className="save">
        <img alt='save button' className={'save-icon'} src={save} onClick={this.save}/>
        <span className={this.state.labelClass}>Enregistré</span>
      </div>
    );
  }
}

export default Save;