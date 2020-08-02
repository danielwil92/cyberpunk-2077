import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

export default function Button({
  label, href, type, className,
}) {
  let cssClass = `cyberpunk-button cyberpunk-button--${type}`;
  const primaryType = type === 'primary';

  if (className) {
    cssClass += ` ${className}`;
  }

  return (
    <a href={href} className={cssClass} target="_blank" rel="noreferrer">
      {primaryType
        ? <span className="cyberpunk-button__border">{label}</span>
        : label}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: 'Add Label',
  href: 'add-href',
  type: 'primary',
};
