import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

export default function Heading({
  tag, level, color, className, text,
}) {
  const CustomTag = tag;
  const headlineClassName = 'cyberpunk-headline';
  let cssClass = headlineClassName;

  if (level) {
    cssClass += ` ${headlineClassName}--headline-${level}`;
  }

  if (color) {
    cssClass += ` ${headlineClassName}--color-${color}`;
  }

  if (className) {
    cssClass += ` ${className}`;
  }

  return <CustomTag className={cssClass}>{text}</CustomTag>;
}

Heading.propTypes = {
  color: PropTypes.string,
  level: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  color: '',
  tag: 'h2',
  level: 'two',
  text: '',
  className: '',
};
