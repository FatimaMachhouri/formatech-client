import React from 'react';
import '../style/preview.css';
import { Link } from 'react-router-dom';

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. ';


class Preview extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      className: this.props.className
    };

  }

  render() {
    return (
      <div className="container-preview">
        <div className={this.props.className}>
          <span className="littleTitle">Formation</span>
          <span className="bigtitle">{this.state.name}</span>
          <p className="content">{fakeText}</p>
          <Link className='burgerElement' to={'/formation/' + this.state.className}><div className="button"> <p className='buttonText'> Découvrir </p> </div></Link>
        </div>
      </div>
    );
  }

}

export default Preview;
