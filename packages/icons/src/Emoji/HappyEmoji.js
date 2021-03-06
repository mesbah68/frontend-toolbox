import React from 'react';
import PropTypes from 'prop-types';

const HappyEmoji = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42.256"
    height="42.256"
    viewBox="0 0 42.256 42.256"
    className={className}
  >
    <g>
      <path
        d="M36.068 6.189a21.128 21.128 0 1 0 0 29.88 21.128 21.128 0 0 0 0-29.88zm-.88 29A19.9 19.9 0 0 1 7.062 7.064a19.9 19.9 0 0 1 28.13 28.129zm0 0"
        transform="translate(.001)"
        strokeWidth={0}
      />
      <path
        d="M105.538 163.978a.7.7 0 0 0 .866-.5 3.484 3.484 0 0 1 6.037 0 .707.707 0 1 0 1.365-.37 4.84 4.84 0 0 0-8.766 0 .7.7 0 0 0 .5.866zm0 0"
        strokeWidth={0}
        transform="translate(-96.624 -147.247)"
      />
      <path
        d="M313.151 163.978a.7.7 0 0 0 .866-.5 3.484 3.484 0 0 1 6.037 0 .707.707 0 1 0 1.365-.37 4.84 4.84 0 0 0-8.766 0 .7.7 0 0 0 .5.866zm0 0"
        strokeWidth={0}
        transform="translate(-287.646 -147.247)"
      />
      <path
        d="M170.273 335.083s-5.6 9.627-11.414 0"
        strokeWidth={1.2}
        className="no-fill"
        transform="translate(-143.191 -307.808)"
      />
    </g>
  </svg>
);

HappyEmoji.propTypes = {
  className: PropTypes.string,
};

export default HappyEmoji;
