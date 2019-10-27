import React from 'react';
import '../style/main.css';
import PropTypes from 'prop-types'

const MainTitle = ({name}) => (
            <div className="container">
                <div className="decor">
                    <div className="decor-line">
                    </div>
                </div>
                <div className="content">{name}</div>
                <div className="decor">
                    <div className="decor-line">
                    </div>
                </div>
            </div>
);

MainTitle.propTypes = {
    name: PropTypes.string.isRequired
}

export default MainTitle;