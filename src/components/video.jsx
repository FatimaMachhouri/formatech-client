import React from 'react';
import '../style/main.css';
import PropTypes from 'prop-types';

class Video extends React.Component {

  render() {

    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "35%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "50%",
            height: "75%"
          }}
          title="video"
          src={this.props.media}
          frameBorder="0"
        />
      </div>
    )
  }
}


Video.propTypes = {
  media: PropTypes.string.isRequired,
}

export default Video;