import React from 'react';
import PropTypes from 'prop-types';

const SadEmoji = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="43.77"
    height="43.77"
    viewBox="0 0 43.77 43.77"
    className={className}
  >
    <g transform="translate(-565.109 -185.154)">
      <path
        d="M37.36 6.41a21.885 21.885 0 1 0 0 30.95 21.885 21.885 0 0 0 0-30.95zm-.912 30.043A20.608 20.608 0 0 1 7.315 7.317a20.608 20.608 0 0 1 29.139 29.136zm0 0"
        transform="translate(565.109 185.154)"
        strokeWidth={0}
      />
      <path
        d="M105.581 164.282a.763.763 0 0 0 .938-.538 3.774 3.774 0 0 1 6.539 0 .766.766 0 0 0 1.478-.4 5.242 5.242 0 0 0-9.495 0 .763.763 0 0 0 .54.938zm0 0"
        strokeWidth={0}
        transform="translate(468.68 38.319)"
      />
      <path
        d="M313.195 164.282a.763.763 0 0 0 .938-.538 3.774 3.774 0 0 1 6.539 0 .766.766 0 0 0 1.478-.4 5.242 5.242 0 0 0-9.495 0 .763.763 0 0 0 .54.938zm0 0"
        strokeWidth={0}
        transform="translate(278.047 38.319)"
      />
      <path
        d="M12.363 0S6.3 10.427 0 0"
        className="no-fill"
        strokeLinecap="round"
        strokeWidth={1.2}
        transform="rotate(180 296.713 108.947)"
      />
    </g>
  </svg>
);

SadEmoji.propTypes = {
  className: PropTypes.string,
};

export default SadEmoji;
