import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>orders-history</title>
    <path d="M27.097 6.503v19.749c-0.045 2.545-2.113 4.593-4.662 4.606h-14.378c-2.543-0.013-4.603-2.064-4.629-4.603l-0-0.002v-19.737h5.28c-0-0.017-0-0.038-0-0.058 0-3.56 2.886-6.446 6.446-6.446 0.040 0 0.080 0 0.121 0.001l-0.006-0c0.034-0.001 0.074-0.001 0.115-0.001 3.56 0 6.446 2.886 6.446 6.446 0 0.020-0 0.041-0 0.061l0-0.003zM15.269 1.817c-2.563 0.061-4.628 2.114-4.708 4.667l-0 0.008h9.406c-0.087-2.552-2.142-4.596-4.691-4.663l-0.006-0zM15.269 26.583c4.38 0 7.931-3.551 7.931-7.931s-3.551-7.931-7.931-7.931v0c-4.38 0-7.931 3.551-7.931 7.931s3.551 7.931 7.931 7.931v0zM16.114 14.526h-1.703v3.886l-2.286 2.286 1.2 1.189 2.777-2.777z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
