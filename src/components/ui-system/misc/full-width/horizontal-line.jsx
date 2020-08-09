import React from 'react';
import PropTypes from 'prop-types';
import './horizontal-line.scss';

export default function HorizontalLine({
  children,
}) {
  return (
    <div className="horizontal-line">
      {children}
    </div>
  );
}

HorizontalLine.propTypes = {
  children: PropTypes.node.isRequired,
};
