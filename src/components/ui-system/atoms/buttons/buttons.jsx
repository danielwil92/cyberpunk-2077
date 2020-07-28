import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

export default function Button(props) {
  const {
    label, href,
  } = props;

  return (
    <a href={href} className="cyberpunk-button">
      <span className="cyberpunk-button__border">{label}</span>
    </a>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  label: 'Add Label',
  href: 'add-href',
};
