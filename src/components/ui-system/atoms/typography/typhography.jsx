import React from 'react';
import PropTypes from 'prop-types';
import './typography.scss';

export default function Heading(props) {
  const {
    tag, level, color, className, text,
  } = props;
  const CustomTag = tag;
  const headlineClassName = 'cyberpunk-headline';
  let cssClass = headlineClassName;

  if (level) {
    cssClass += ` ${headlineClassName}--headline-${props.level}`;
  }

  if (color) {
    cssClass += ` ${headlineClassName}--color-${props.color}`;
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
