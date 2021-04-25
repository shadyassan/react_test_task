import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return <div className="container">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
