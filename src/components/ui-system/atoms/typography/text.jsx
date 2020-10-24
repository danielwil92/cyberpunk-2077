import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';
import Colors from '../../../../constants/colors';

export default function Text({
  tag, type, color, className, text,
}) {
  const CustomTag = tag;
  const textClassName = `cyberpunk-${type}`;
  let cssClass = textClassName;

  if (color) {
    cssClass += ` ${textClassName}--${color}`;
  }

  if (className) {
    cssClass += ` ${className}`;
  }

  return <CustomTag className={cssClass}>{text}</CustomTag>;
}

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Colors),
  type: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string,
};

Text.defaultProps = {
  color: 'white',
  tag: 'p',
  type: 'body',
  text: '',
  className: '',
};
