import React from 'react';
import PropTypes from 'prop-types';
import './section-wrapper.scss';

export default function SectionWrapper({
  tag, children, fullBleed, fullBleedSM, spacer,
}) {
  const CustomTag = tag;

  return (
    <CustomTag
      className={`wrapper
        ${fullBleed ? 'wrapper--full-bleed' : ''}
        ${fullBleedSM ? 'wrapper--full-bleed-sm' : ''}
        ${spacer ? `mod-spacer-${spacer}` : ''} `}
    >
      {children}
    </CustomTag>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  fullBleed: PropTypes.bool,
  fullBleedSM: PropTypes.bool,
  tag: PropTypes.string,
  spacer: PropTypes.number,
};

SectionWrapper.defaultProps = {
  tag: 'section',
  fullBleed: false,
  fullBleedSM: false,
  spacer: 0,
};
