import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/typography/heading';
import Text from '../../atoms/typography/text';

export default function HeadIntro({
  headline, eyebrow, headingLevel, color, isCentered,
}) {
  return (
    <div className={`head-intro
      ${isCentered ? 'mod-text-align-center' : ''}`}
    >
      <Text text={eyebrow} type="eyebrow" className="head-intro__eyebrow " />
      <Heading text={headline} level={headingLevel} color={color} tag="h2" className="head-intro__heading mod-spacer-1" />
    </div>
  );
}

HeadIntro.propTypes = {
  headline: PropTypes.string,
  eyebrow: PropTypes.string,
  color: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
  isCentered: PropTypes.bool,
};

HeadIntro.defaultProps = {
  headline: '',
  eyebrow: '',
  headingLevel: 'two',
  isCentered: false,
};
