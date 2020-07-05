import React from 'react';
import propTypes from 'prop-types';

export default function Header(props) {
  const {
    headerText,
  } = props;

  return <h1>{headerText}</h1>;
}

Header.propTypes = {
  headerText: propTypes.string,
};

Header.defaultProps = {
  headerText: 'Add Text',
};
