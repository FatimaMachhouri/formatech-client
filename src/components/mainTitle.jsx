import React from 'react';
import '../style/main.css';
import PropTypes from 'prop-types';

class MainTitle extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.content.bind(this);
    this.state = {
      content: this.props.name,
      edit: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  content() {
    if (this.props.connected) {
      return <textarea className="name-mainTitle" value={this.props.name} onChange={(event) => this.handleChange(event)} />;
    } else {
      return <div className="name-mainTitle">{this.props.name}</div>;
    }
  }

  handleChange(event) {
    this.setState({ content: event.target.value, edit: true });
    this.props.action(event.target.value);
  }

  render() {
    return (
      <div className="container-title">
        <div className="decor">
          <div className="decor-line">
          </div>
        </div>
        {this.content()}
        <div className="decor">
          <div className="decor-line">
          </div>
        </div>
      </div>
    );
  }
}

MainTitle.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  connected: PropTypes.bool.isRequired,
}


export default MainTitle;