import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ keyAction, keyType, keyValue }) => {
  const keyClass = `key-container ${keyType}`;

  return (
    <div className={keyClass} onClick={() => keyAction(keyValue)} >
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

Key.defaultProps = {
  keyType: 'default',
  keyAction: 'default',
};

export default Key;
