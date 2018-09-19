import React from 'react';
import PropTypes from 'prop-types';

const BulletPortrait = ({image, text}) => (
    <div className="bulletPortrait">
        <img
            src={image}
            alt=""
        />
        <span>
            {text}
        </span>
    </div>
);

export default BulletPortrait;

BulletPortrait.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
};

BulletPortrait.defaultProp = {
    text: '',
};