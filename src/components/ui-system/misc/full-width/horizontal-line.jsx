import React from 'react';
import PropTypes from 'prop-types';
import './horizontal-line.scss';

export default function HorizontalLine({
  children, spacer,
}) {
  return (
    <div className={`horizontal-line
      ${spacer ? `mod-spacer-${spacer}` : ''}`}
    >
      {children}
    </div>
  );
}

HorizontalLine.propTypes = {
  children: PropTypes.node.isRequired,
  spacer: PropTypes.number,

};

HorizontalLine.defaultProps = {
  spacer: 0,
};
