import React from 'react';
import PropTypes from 'prop-types';

const BulletPortrait = ({image, onClick, caption}) => (
    <div className="bulletPortrait" onClick={onClick}>
        <img
            src={image}
            alt=""
        />
        <span>
            {caption}
        </span>
    </div>
);

export default BulletPortrait;

BulletPortrait.propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    caption: PropTypes.string,
};

BulletPortrait.defaultProp = {
    onClick: () => {},
    caption: '',
};