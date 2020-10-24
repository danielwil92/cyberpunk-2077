import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';
import Colors from '../../../../constants/colors';
import HeadingDefaults from '../../../../constants/heading';

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
  color: PropTypes.oneOf(Colors),
  level: PropTypes.oneOf(HeadingDefaults),
  tag: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  color: 'white',
  tag: 'h2',
  level: 'two',
  text: '',
  className: '',
};
